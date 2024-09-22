<template>
  <div class="form">
    <EditDialog
      :display="display"
      :minWidth="'90vw'"
      :maxWidth="'90vw'"
      @close="cancelForm"
      :header="header"
      :footer="false"
    >
      <div class="row">
        <StructureDisplay
          @getAllItems="getAllItems"
          @addItems="addItems"
          @addGroup="addGroup"
          @deleteItem="deleteItem"
          @moveItem="moveItem"
          @moveGroup="moveGroup"
        >
          <template #groups>
            <div>
              <h6>Primary Account</h6>
              <Tree
                :value="primaryNodes"
                selectionMode="single"
                @node-select="onNodeSelect"
                class="custom-tree p-treenode-selected animate__animated"
                :class="[isMovingingGroup ? 'animate__shakeY' : '']"
              >
                <template #default="slotProps">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div
                      class="squarIcon"
                      v-if="slotProps.node.parent_account_id"
                    ></div>
                    <i class="pi pi-folder-open"></i>
                    <b class="p-2 flex-grow-1">{{
                      slotProps.node.account_name_en
                    }}</b>
                    <EditButton
                      @edit="openUpdatePrimaryAccount(slotProps.node)"
                    ></EditButton>
                  </div>
                </template>
              </Tree>
              <Divider></Divider>
              <h6>Final Account</h6>
              <Tree
                :value="nodes"
                selectionMode="single"
                @node-select="onNodeSelect"
                class="custom-tree p-treenode-selected animate__animated"
                :class="[isMovingingGroup ? 'animate__shakeX' : '']"
              >
                <template #default="slotProps">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div
                      class="squarIcon"
                      v-if="slotProps.node.parent_id"
                    ></div>
                    <i class="pi pi-folder-open"></i>
                    <b class="p-2 flex-grow-1">{{ slotProps.node.name_en }}</b>
                    <EditButton
                      @edit="openUpdateGroup(slotProps.node)"
                    ></EditButton>
                  </div>
                </template>
              </Tree>
            </div>
          </template>
          <template #items>
            <Account
              :selectedNodeKey="selectedNodeKey"
              :displayFormItem="displayFormItem"
              :dataEditPrimaryAccount="dataEditPrimaryAccount"
              @closeFormItem="closeFormItem"
              :isDeleteItem="isDeleteItem"
              @closeDeleteItem="closeDeleteItem"
              :getItems="getItems"
              @setItems="setItems"
            ></Account>
          </template>
        </StructureDisplay></div
    ></EditDialog>

    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :displayFormGroup="displayFormGroup"
      :isUpdating="isUpdating"
      :typeAdd="typeAdd"
      @close="resetForm"
      @cancel="resetForm"
      @save="upsert"
      @deleteGroup="deleteGroup"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    >
    </Form>
  </div>
</template>



<i18n src="@/lang/erp/accounts/finalAccount.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Account from "@/components/erp/core/accounts/Account.vue";
import Tree from "primevue/tree";
import EditButton from "@/components/global/utilities/EditButton.vue";
import { mapGetters, mapActions } from "vuex";
import Divider from "@/components/global/utilities/Divider.vue";
import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
import Form from "@/components/erp/accounts/finalAccount/Form.vue";

import toast from "@/mixins/global/toast";
export default {
  mixins: [toast],
  components: {
    EditButton,
    EditDialog,
    Account,
    StructureDisplay,
    Divider,
    Tree,
    Form,
  },
  props: {
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    header: {
      type: String,
    },
  },

  data() {
    return {
      form: {
        name_en: "",
        name_ar: "",
        serial: 12345678.333,
        parent: null,
      },
      displayGroupBase: true,
      displayFormGroup: false,
      actionStatus: null,
      selected: [],
      typeAdd: null,
      isUpdating: false,
      selectedNodeKey: null,
      getItems: false,
      isDeleteItem: false,
      displayFormItem: false,
      dataEditPrimaryAccount: null,
      isMovingingItem: false,
      isMovingingGroup: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    finalAccounts() {
      if (this.listResponse) return this.listResponse.data;
      else return [];
    },
    ...mapGetters("erp/accounts/finalAccount", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getDeleteResponse: "getDeleteResponse",
      deleteLoading: "getDeleteLoading",
      getDeleteError: "getDeleteError",
    }),
    nodes() {
      const tree = [];
      const map = {};
      // Create a mapping of IDs to objects
      this.finalAccounts.forEach((item) => {
        map[item.id] = {
          ...item,
          children: [],
          key: String(item.id),
        };
      });

      // Build the tree structure
      this.finalAccounts.forEach((item) => {
        if (item.parent_id !== null) {
          map[item.parent_id].children.push(map[item.id]);
        } else {
          tree.push(map[item.id]);
        }
      });

      return tree;
    },
    upsertResponse: {
      get() {
        return this.getUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },
    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },

    deleteResponse: {
      get() {
        return this.getDeleteResponse;
      },
      set(value) {
        this.setDeleteResponse(value);
      },
    },
    deleteError: {
      get() {
        return this.getDeleteError;
      },
      set(value) {
        this.setDeleteError(value);
      },
    },
    ///////////////////////////////////
    ...mapGetters("erp/accounts/account", {
      getListPrimaryAccountResponse: "getListPrimaryAccountResponse",
      listPrimaryAccountError: "getListPrimaryAccountError",
      getListPrimaryAccountLoading: "getListPrimaryAccountLoading",
    }),
    listPrimaryAccountResponse() {
      return this.getListPrimaryAccountResponse;
    },
    primaryAccount() {
      if (this.listPrimaryAccountResponse)
        return this.listPrimaryAccountResponse.data;
      else return [];
    },
    primaryNodes() {
      const tree = [];
      const map = {};
      // Create a mapping of IDs to objects
      this.primaryAccount.forEach((item) => {
        map[item.id] = {
          ...item,
          children: [],
          key: String(item.id),
        };
      });

      // Build the tree structure
      this.primaryAccount.forEach((item) => {
        if (item.parent_account_id !== null) {
          map[item.parent_account_id].children.push(map[item.id]);
        } else {
          tree.push(map[item.id]);
        }
      });

      return tree;
    },
  },
  mounted() {
    if (!this.finalAccounts.length > 0) {
      this.list();
    }
    if (!this.primaryAccount.length > 0) {
      this.listPrimaryAccount();
    }
  },
  methods: {
    //////////////// Tree //////////
    onNodeSelect(node) {
      this.selectedNodeKey = node;
    },
    ...mapActions("erp/accounts/finalAccount", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
    ]),
    cancelForm() {
      this.$emit("close");
    },
    //////////////// All Items ///////////////////
    getAllItems() {
      this.selectedNodeKey = null;
      this.getItems = true;
    },
    setItems() {
      this.getItems = false;
    },

    //////////// Add Items ////////////////////
    addItems() {
      this.displayFormItem = true;
    },
    closeFormItem() {
      this.displayFormItem = false;
      this.dataEditPrimaryAccount = null;
    },
    ///////////// Edit Primary Account ///////////
    openUpdatePrimaryAccount(data) {
      this.displayFormItem = true;
      this.dataEditPrimaryAccount = data;
    },
    //////////// Delete Items ////////////////
    deleteItem() {
      this.isDeleteItem = true;
    },
    closeDeleteItem() {
      this.isDeleteItem = false;
    },

    ////////////// Delete Group ////////////////////
    closeDeleteDialog() {
      this.actionStatus = null;
      this.selected = [];
      this.selectedNodeKey = null;
      this.displayFormGroup = false;
    },

    deleteGroup(data) {
      this.selected.push(data.code);
      this.actionStatus = 4;
      this.$store
        .dispatch("erp/accounts/finalAccount/delete", {
          action: this.actionStatus,
          selected: this.selected,
        })
        .then((res) => {
          this.closeDeleteDialog();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
    },

    ////////// Add group ///////////////////
    addGroup(type) {
      this.typeAdd = type;
      if (type == 2 && this.selectedNodeKey) {
        if (this.selectedNodeKey.hasOwnProperty("parent_id")) {
          this.form.parent = this.selectedNodeKey.id;
        }
      }
      this.displayFormGroup = true;
    },
    closeForm() {
      this.isUpdating = false;
      this.typeAdd = null;
      this.selectedNodeKey = null;
      this.displayFormGroup = false;
    },
    openUpdateGroup(item) {
      item["parent"] = item.parent_id;
      const { id, code, name_en, updated_at, name_ar, serial, parent } = item;
      this.form = {
        id,
        code,
        name_en,
        updated_at,
        name_ar,
        serial,
        parent,
      };
      this.isUpdating = true;
      this.addGroup();
    },
    resetForm() {
      this.form = {
        name_en: "",
        name_ar: "",
        serial: 123456677,
        parent: null,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp/accounts/finalAccount/create", this.form)
        .then((res) => {
          this.resetForm();
          console.log(res);
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err);
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      console.log("edite");
      this.$store
        .dispatch("erp/accounts/finalAccount/update", this.form)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    upsert() {
      if (this.isUpdating) {
        this.update();
      } else {
        this.create();
      }
    },
    /////////////////////////////////
    list() {
      this.$store.dispatch("erp/accounts/finalAccount/list").then(() => {});
    },
    listPrimaryAccount() {
      this.$store
        .dispatch("erp/accounts/account/listPrimaryAccount")
        .then(() => {});
    },
    moveItem(value) {
      this.isMovingingItem = value;
    },
    moveGroup(value) {
      console.log(value);
      this.isMovingingGroup = value;
    },
  },
};
</script>
