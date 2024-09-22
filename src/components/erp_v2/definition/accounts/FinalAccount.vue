<template>
  <div class="form">
      <div class="row">
        <StructureDisplay 
          :display="display"
          :header=header
          :headerItems="$t('dialog.list')"
          :headerGroup="$t('account.finalAccount')"
          @getAllItems="getAllItems" 
          @addItem="addItem"
          @openFormGroup="openFormGroup"
          @deleteItem="deleteItem"
          @moveItem="moveItem"
          @moveGroup="moveGroup"
            >
          <template #groups>
            <div>
              <label for="" >{{$t('account.primaryAccount')}}</label>
              <Tree :value="primaryNodes" selectionMode="single" @node-select="onNodeSelect" :metaKeySelection="false"
                class="custom-tree p-treenode-selected animate__animated"
                :class="[isMovingGroup ? 'animate__shakeY' : '']">
                <template #default="slotProps">
                  <div :class="[
                          'd-flex',
                          'justify-content-between',
                          'align-items-center',
                          locale == 'ar' ? 'custom-margin-right' : 'custom-margin-left',
                          isSelectedNode(slotProps.node) ? 'custom-hover-style': '',
                        ]"
                   @mouseover="showIcon(slotProps.node.id)"
                  @mouseout="hideIcon()"
                  @click="onNodeSelect(slotProps.node)">
                    <div   :class="[locale == 'ar' ? 'arrow-ar' : 'arrow-en']" 
                            class="arrow" v-if="slotProps.node.parent_account_id"></div>
                    <i class="pi pi-folder-open"></i>
                    <b class="p-2 flex-grow-1">{{
                      slotProps.node.account_name_en
                    }}</b>
                    <EditButton class="" v-if="hoveredItemId === slotProps.node.id ||
                        selectedNodeKey === slotProps.node
                        " @edit="openUpdatePrimaryAccount(slotProps.node)"></EditButton>

                  </div>
                </template>
              </Tree>
              <Divider></Divider>
              <label for="" >{{$t('account.finalAccount')}}</label>
              <Tree :value="nodes" selectionMode="single" @node-select="onNodeSelect" :selectionKeys="selectedNodeKey"
                class="animate__animated"
                :class="[isMovingGroup ? 'animate__shakeX' : '']">
                
                <!-- locale == 'ar' ? 'custom-margin-right' : 'custom-margin-left']"  -->
                <template #default="slotProps">
                  
                  <div :class="[
                          'd-flex',
                          'justify-content-between',
                          'align-items-center',
                          locale == 'ar' ? 'custom-margin-right' : 'custom-margin-left',
                          isSelectedNode(slotProps.node) ? 'custom-hover-style': '',
                        ]"
                    @mouseover="showIcon(slotProps.node.id)"
                    @mouseout="hideIcon()"
                    @click="onNodeSelect(slotProps.node)">
                    <div :class="[locale == 'ar' ? 'arrow-ar' : 'arrow-en']"  
                    class="arrow" v-if="slotProps.node.parent_id"></div>
                    <i class="pi pi-folder-open"></i>
                    <b class="p-2 flex-grow-1">{{ slotProps.node.name_en }}</b>
                    <EditButton  v-if="hoveredItemId === slotProps.node.id || selectedNodeKey === slotProps.node
                      " @edit="openUpdateGroup(slotProps.node)"></EditButton>
                  </div>
           
                </template>
              </Tree>
            </div>
          </template>
          <template #items>
            <Account :selectedNodeKey="selectedNodeKey" :displayFormItem="displayFormItem" 
              :isMovingItem="isMovingItem"
              @closeMoveItems="closeMoveItems"
              :dataEditPrimaryAccount="dataEditPrimaryAccount" @closeFormItem="closeFormItem" :isDeleteItem="isDeleteItem"
              @closeDeleteItem="closeDeleteItem" :getItems="getItems" @setItems="setItems" @setSelected="setSelected">
            </Account>
          </template>
        </StructureDisplay>
      </div>
    <FormFinalAccount v-model="form" :isLoading="upsertLoading" :displayFormGroup="displayFormGroup" :isUpdating="isUpdating"
      :typeAdd="typeAdd" @close="resetForm" @cancel="resetForm" @save="upsert" @deleteGroup="deleteGroup"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')">
    </FormFinalAccount>
  </div>
</template>
<i18n src="@/lang/erp_v2/accounts/finalAccount.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import Account from "@/components/erp_v2/definition/accounts/Account.vue";
import Tree from "primevue/tree";
import EditButton from "@/components/global/utilities/EditButton.vue";
import { mapGetters, mapActions } from "vuex";
import Divider from "@/components/global/utilities/Divider.vue";
import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
import FormFinalAccount from "@/components/erp_v2/accounts/finalAccount/Form";

import toast from "@/mixins/global/toast";
export default {
  mixins: [toast],
  components: {
    EditButton,
    Account,
    StructureDisplay,
    Divider,
    Tree,
    FormFinalAccount,
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
  watch: {
    display(value) {
      if (value == true) {
        this.get();
      }
    },
  },
  data() {
    return {
      x:1,
      focusClass: '',
      selectedKey1: null,
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
      isMovingItem: false,
      isMovingGroup: false,
      hoveredItemId: false,
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
    ...mapGetters("erp_v2/accounts/finalAccount", {
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
    ...mapGetters("erp_v2/accounts/account", {
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
  methods: {
    ...mapActions("erp_v2/accounts/finalAccount", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
    ]),
    cancelForm() {
      this.selectedNodeKey = null;
      this.$emit("close");
    },
    setSelected(value) {
      this.onNodeSelect( this.finalAccounts.find(obj => obj.id === value.id));
    },
    get() {
      if (!this.finalAccounts.length > 0) {
        this.list();
      }
      if (!this.primaryAccount.length > 0) {
        this.listPrimaryAccount();
      }
    },
    //////////////// Tree //////////
    onNodeSelect(node) {
      this.selectedNodeKey = node;
    },
    showIcon(itemId) {
      this.hoveredItemId = itemId;
    },
    isSelectedNode(node) {
      return this.selectedNodeKey === node;
    },
    hideIcon() {
      this.hoveredItemId = null;
    },
    isHoveredItem(itemId) {
    return this.hoveredItemId === itemId;
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
    addItem() {
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
        .dispatch("erp_v2/accounts/finalAccount/delete", {
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
    openFormGroup(type) {
      this.typeAdd = type;
      if (type == 2 && this.selectedNodeKey) {
        if (this.selectedNodeKey.hasOwnProperty("parent_id")) {
          this.form.parent = this.selectedNodeKey;
        }
      }
      this.displayFormGroup = true;
    },
    closeForm() {
      this.isUpdating = false;
      this.typeAdd = null;
      // this.selectedNodeKey = null;
      this.displayFormGroup = false;
    },
    openUpdateGroup(item) {
      item["parent"] = item.parent_data;
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
      this.openFormGroup();
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
        .dispatch("erp_v2/accounts/finalAccount/create", this.form)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    update() {
      this.$store
        .dispatch("erp_v2/accounts/finalAccount/update", this.form)
        .then((res) => {
          const recordIndex = this.finalAccounts.findIndex((item) => item.id === this.form.id);
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
      this.$store.dispatch("erp_v2/accounts/finalAccount/list").then(() => { });
    },
    listPrimaryAccount() {
      this.$store
        .dispatch("erp_v2/accounts/account/listPrimaryAccount")
        .then(() => { });
    },
    moveItem(value) {
      this.isMovingItem = value;
    },
    closeMoveItems() {
      this.isMovingItem = false;
      this.$emit("closeMoveItems");

    },

    moveGroup(value) {
      this.isMovingGroup = value;
    },
  },
};
</script> 
<style lang="scss" scoped>
  .custom-margin-left {
    margin-left: -1rem;
  }
  .custom-margin-right {
    margin-right: -1rem;
  }
  .custom-hover-style {
    color: $background;
    background: $success;
  }
</style>