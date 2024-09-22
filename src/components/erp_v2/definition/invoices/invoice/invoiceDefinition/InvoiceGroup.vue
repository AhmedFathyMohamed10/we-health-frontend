<template>
  <div class="form">
      <div class="row">
        <StructureDisplay 
          :display="display"
          :header=header
          :headerItems="$t('dialog.list')"
          :headerGroup="$t('group.header')"
          :groups="nodes"
          @getAllItems="getAllItems"
          @addItem="addItem" 
          @onNodeSelect="onNodeSelect"
          @openFormGroup="openFormGroup"
          @openFormEditGroup="openFormEditGroup"
          @deleteItem="deleteItem" 
          @moveItem="moveItem" 
          @moveGroup="moveGroup"
          @close="cancelForm"
        >
          <template #items>
            <InvoiceDefinition 
              :selectedNodeKey="selectedNodeKey"
              :displayFormItem="displayFormItem"
              :isMovingItem="isMovingItem"
              @closeMoveItems="closeMoveItems"
              @closeFormItem="closeFormItem"
              :isDeleteItem="isDeleteItem"
              @closeDeleteItem="closeDeleteItem"
              :getItems="getItems" 
              @setItems="setItems" 
              @setSelected="setSelected">
            </InvoiceDefinition>
          </template>
        </StructureDisplay>
      </div>
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
<i18n src="@/lang/erp_v2/group/group.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import InvoiceDefinition from "@/components/erp_v2/definition/invoices/invoice/invoiceDefinition/InvoiceDefinition";
import { mapGetters, mapActions } from "vuex";
import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
import Form from "@/components/erp_v2/group/Form.vue";

import toast from "@/mixins/global/toast";
export default {
  mixins: [toast],
  components: {
    InvoiceDefinition,
    StructureDisplay,
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
        account: null,
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
    ...mapGetters("erp_v2/invoices/invoiceGroup", {
      getTreeNodes: "getTreeNodes",

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
    nodes:{
      get(){
        return this.getTreeNodes
      },
      set(value){
        
        this.setTreeNodes(value)
      }
    },
  },
  methods: {
    ...mapActions("erp_v2/invoices/invoiceGroup", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setTreeNodes",
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
        .dispatch("erp_v2/invoices/invoiceGroup/delete", {
          action: this.actionStatus,
          selected: this.selected,
        })
        .then((res) => {
          this.closeDeleteDialog();
          this.nodes = this.groups
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
      this.selectedNodeKey = null;
      this.displayFormGroup = false;
    }, 
    openFormEditGroup(item) {
      item["parent"] = item.parent_data;
      const { id, code, name_en, updated_at, name_ar, serial,account, parent } = item;
      this.form = {
        id,
        code,
        name_en,
        updated_at,
        name_ar,
        serial,
        account,
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
        account: null,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      if (this.form.parent){
        delete this.form.parent.parent
      }
      this.$store
        .dispatch("erp_v2/invoices/invoiceGroup/create", this.form)
        .then((res) => {
          this.resetForm();
          this.nodes = this.groups

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
        .dispatch("erp_v2/invoices/invoiceGroup/update", this.form)
        .then((res) => {
          this.resetForm();
          this.nodes = this.groups
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
      this.$store.dispatch("erp_v2/invoices/invoiceGroup/list").then(() => { });
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
