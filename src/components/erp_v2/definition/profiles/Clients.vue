<template>
  <div class="form">
      <div class="row">
        <StructureDisplay :headerItems=header
          :headerGroup="$t('group.header')" @getAllItems="getAllItems" @addItem="addItem" @openFormGroup="openFormGroup"
          :group="groups"
          :display="display"
          @openFormEditGroup="openFormEditGroup"
          @close="cancelForm"
          @deleteItem="deleteItem" @moveItem="moveItem" @moveGroup="moveGroup">
          <template #items>
            <ClientAndSupplier 
              :selectedNodeKey="selectedNodeKey"
              :displayFormItem="displayFormItem"
              @closeFormItem="closeFormItem"
              :isDeleteItem="isDeleteItem"
              @closeDeleteItem="closeDeleteItem"
              :getItems="getItems" 
              @setItems="setItems" 
              @setSelected="setSelected">
            </ClientAndSupplier>
          </template>
        </StructureDisplay>
      </div>
      <!-- groups form -->
      <!-- <Form 
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
      </Form> -->
  </div>
</template>
<i18n src="@/lang/erp_v2/group/group.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import ClientAndSupplier from "@/components/erp_v2/core/clients/ClientAndSupplier.vue";
import { mapGetters, mapActions } from "vuex";
import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
// import Form from "@/components/erp_v2/assets/assetGroup/Form.vue";
import toast from "@/mixins/global/toast";
export default {
  mixins: [toast],
  components: {
    ClientAndSupplier,
    StructureDisplay,
    // Form,
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
        this.getGroups();
      }
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
      displayFormGroup: false,
      actionStatus: null,
      selected: [],
      typeAdd: null,
      isUpdating: false,
      selectedNodeKey: null,
      getItems: false,
      isDeleteItem: false,
      displayFormItem: false,
      isMovingItem: false,
      isMovingGroup: false,
      hoveredItemId: false,
    };
  },
  computed: {
    ...mapGetters("erp_v2/groups", {
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
  
    listResponse() {
      return this.getListResponse;
    },
    groups() {
      if (this.listResponse) return this.listResponse.data;
      else return [];
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
  },
  methods: {
    ...mapActions("erp_v2/groups", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
    ]),
    setSelected(value) {
      this.onNodeSelect( this.groups.find(obj => obj.id === value.id));
    },
    getGroups() {
      if (!this.groups.length > 0) {
        this.list();
      }
    },
    //////////////// Tree //////////
    onNodeSelect(node) {
      this.selectedNodeKey = node;
    },
    cancelForm() {
      this.selectedNodeKey = null;
      this.$emit("close");
    },
    showIcon(itemId) {
      this.hoveredItemId = itemId;
    },
    hideIcon() {
      this.hoveredItemId = null;
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
        .dispatch("erp_v2/groups/delete", {
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
    openFormGroup(type,selectedNode) {
      this.typeAdd = type;
      if (type == 2) {
        if (selectedNode.hasOwnProperty("parent_id")) {
          this.form.parent = selectedNode;
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
    openFormEditGroup(item) {
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
        .dispatch("erp_v2/groups/create", this.form)
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
        .dispatch("erp_v2/groups/update", this.form)
        .then((res) => {
          const recordIndex = this.groups.findIndex((item) => item.id === this.form.id);
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
      this.$store.dispatch("erp_v2/groups/list").then(() => { });
    },
    moveItem(value) {
      this.isMovingItem = value;
    },
    moveGroup(value) {
      this.isMovingGroup = value;
    },
  },
};
</script> 

<!-- <template>
  <div class="client">
    <DefinitionDialog
      :display="display"
      :minWidth="'90vw'"
      :maxWidth="'90vw'"
      @close="cancelForm"
      :header="header"
    >
      <div class="row">
        <StructureDisplay
          :headerItems="$t('headerItems')"
          :headerGroup="$t('headerGroup')"
          @getAllItems="getAllItems"
          @addItem="addItem"
          @deleteItem="deleteItem"
          @moveItem="moveItem"
          @addFromGroup="addFromGroup"
          @moveGroup="moveGroup"
        >
          <template #groups>
            <div>
              <Tree
                :value="nodes"
                selectionMode="single"
                @node-select="onNodeSelect"
                class="custom-tree p-treenode-selected animate__animated"
                :class="[isMovingingGroup ? 'animate__shakeX' : '']"
                :draggable="true"
              >
                <template #default="slotProps">
                  <div
                    class="d-flex justify-content-between align-items-center"
                    @mouseover="showIcon(slotProps.node.id)"
                    @mouseout="hideIcon()"
                  >
                    <div
                      class="squarIcon"
                      v-if="slotProps.node.parent_id"
                    ></div>
                    <i class="pi pi-folder-open"></i>
                    <b class="p-2 flex-grow-1">{{ slotProps.node.name_en }}</b>

                    <EditButton
                      class="edite-button"
                      v-if="
                        hoveredItemId === slotProps.node.id ||
                        selectedNodeKey === slotProps.node
                      "
                      @edit="openUpdateGroup(slotProps.node)"
                    ></EditButton>
                  </div>
                </template>
              </Tree>
            </div>
          </template>
          <template #items>
            <Client
              :selectedNodeKey="selectedNodeKey"
              :displayFormItem="displayFormItem"
              :isMoveItems="isMoveItems"
              @closeFormItem="closeFormItem"
              @closemoveItems="closemoveItems"
              :isDeleteItem="isDeleteItem"
              @closeDeleteItem="closeDeleteItem"
              :isAllItem="isAllItem"
              @setItems="setItems"
            ></Client>
          </template>
        </StructureDisplay></div
    ></DefinitionDialog>
    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :displayForm="displayFormGroup"
      :isUpdating="isUpdating"
      :typeAddGroup="typeAddGroup"
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
<i18n src="@/lang/erp_v2/clients/group.json"></i18n>
<script>
import DefinitionDialog from "@/components/global/utilities/DefinitionDialog.vue";
import Client from "@/components/erp_v2/core/clients/Client.vue";
import Tree from "primevue/tree";
import EditButton from "@/components/global/utilities/EditButton.vue";
import { mapGetters, mapActions } from "vuex";
import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
import Form from "@/components/erp_v2/clients/group/Form.vue";
import toast from "@/mixins/global/toast";
export default {
  mixins: [toast],
  components: {
    EditButton,
    DefinitionDialog,
    Client,
    StructureDisplay,
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
      displayFormGroup: false,
      actionStatus: null,
      selected: [],
      typeAddGroup: null,
      isUpdating: false,
      selectedNodeKey: null,
      hoveredItemId: null,
      isAllItem: false,
      isDeleteItem: false,
      displayFormItem: false,
      isMovingingGroup: false,
      isMoveItems: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    groups() {
      if (this.listResponse) return this.listResponse.data;
      else return [];
    },
    ...mapGetters("erp_v2/groups", {
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
      this.groups.forEach((item) => {
        map[item.id] = {
          ...item,
          children: [],
          key: String(item.id),
        };
      });
      // Build the tree structure
      this.groups.forEach((item) => {
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
  },
  // mounted() {
  //   if (!this.groups.length > 0) {
  //     this.list();
  //   }
  // },
  methods: {
    ...mapActions("erp_v2/groups", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
    ]),
    cancelForm() {
      this.$emit("close");
    },
    //////////////// Tree //////////
    onNodeSelect(node) {
      this.selectedNodeKey = node;
    },
    showIcon(itemId) {
      this.hoveredItemId = itemId;
    },
    hideIcon() {
      this.hoveredItemId = null;
    },

    //////////////// All Items ///////////////////
    getAllItems() {
      this.selectedNodeKey = null;
      this.isAllItem = true;
    },
    setItems() {
      this.isAllItem = false;
    },
    //////////// Add Items ////////////////////
    addItem() {
      this.displayFormItem = true;
    },
    closeFormItem() {
      this.displayFormItem = false;
    },
    //////////// Delete Items ////////////////
    deleteItem() {
      this.isDeleteItem = true;
    },
    closeDeleteItem() {
      this.isDeleteItem = false;
    },
    ///////////// Move Item //////////////
    moveItem(value) {
      this.isMoveItems = true;
    },
    closemoveItems() {
      this.isMoveItems = false;
    },

    /////////////////////////////////
    list() {
      this.$store.dispatch("erp_v2/groups/list").then(() => {});
    },
    moveGroup(value) {
      this.isMovingingGroup = value;
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
        .dispatch("erp_v2/groups/delete", {
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
    addFromGroup(type) {
      this.typeAddGroup = type;
      if (type == 2 && this.selectedNodeKey) {
        this.form.parent = this.selectedNodeKey;
      }
      this.displayFormGroup = true;
    },
    closeFormGroup() {
      this.isUpdating = false;
      this.typeAddGroup = null;
      this.selectedNodeKey = null;
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
      this.addFromGroup();
    },
    resetForm() {
      this.form = {
        name_en: "",
        name_ar: "",
        serial: 123456677,
        parent: null,
      };
      this.closeFormGroup();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      if (this.form.parent) {
        this.form.parent = this.form.parent.id;
      }
      this.$store
        .dispatch("erp_v2/groups/create", this.form)
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
      if (this.form.parent) {
        this.form.parent = this.form.parent.id;
      }
      this.$store
        .dispatch("erp_v2/groups/update", this.form)
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
  },
};
</script>
<style lang="scss">
.edite-button {
  font-size: 5px !important;
  z-index: 100;
}
</style>

 <div v-if="hoveredItemId === slotProps.node.id || selectedNodeKey===slotProps.node">
                        <EditButton class="edite-button"
                          @edit="openUpdateGroup(slotProps.node)"
                        ></EditButton>
                      </div> --> 
