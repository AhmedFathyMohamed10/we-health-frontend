<template>
  <div class="form">
      <StructureDisplay 
          :display="display"
          :header=header
          :headerItems="$t('dialog.list')"
          :headerGroup="$t('group.header')"
          :groups="nodes"
          @getAllItems="getAllItems"
          @addItem="addItem" 
          @openFormGroup="openFormGroup"
          @openFormEditGroup="openFormEditGroup"
          @deleteItem="deleteItem" 
          @moveItem="moveItem" 
          @moveGroup="moveGroup"
          @close="cancelForm"
          @onNodeSelect="onNodeSelect"
        >
          <template #items>
            <Product
            :selectedNodeKey="selectedNodeKey"
              :displayFormItem="displayFormItem"
              :isMovingItem="isMovingItem"
              @closeMoveItems="closeMoveItems"
              @closeFormItem="closeFormItem"
              :isDeleteItem="isDeleteItem"
              @closeDeleteItem="closeDeleteItem"
              :getItems="getItems" 
              @setItems="setItems" 
 
              />
          </template>
        </StructureDisplay>

    <Form 
        v-model="form" 
        :isLoading="upsertLoading" 
        :displayForm="displayFormGroup" 
        :isUpdating="isUpdatingGroup"
        :typeAdd="typeAddingGroup" 
        @close="resetForm"
        @cancel="resetForm"
        @save="upsertGroup" 
        @deleteGroup="deleteGroup"
        :header="isUpdatingGroup ? $t('dialog.header.edit') : $t('dialog.header.new')">
    </Form>
  </div>
</template>
<i18n src="@/lang/erp_v2/group/group.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import Product from "@/components/erp_v2/definition/items/Product.vue";
import { mapGetters, mapActions } from "vuex";
import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
import Form from "@/components/erp_v2/items/group/Form.vue";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast],
  components: {
    StructureDisplay,
    Product,
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
        account:null,
        description: "",
      },
      displayFormGroup: false,
      typeAddingGroup: null,
      isUpdatingGroup: false,
      selectedNodeKey: null,
      getItems: false,
      isDeleteItem: false,
      displayFormItem: false,
      MovingItem: false,
      isMovingGroup: false,
      isMovingItem: false,
      hoveredItemId: false,
      actionStatusGroup: null,
      selected:[],
    };
  },
  computed: {
    ...mapGetters("erp_v2/items/group", {
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
    ...mapActions("erp_v2/items/group", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setTreeNodes",
    ]),
    cancelForm() {
      this.selectedNodeKey = null;
      this.$emit("close");
    },
    // setSelected(value) {
    //   this.onNodeSelect( this.groups.find(obj => obj.id === value.id));
    // },
    onNodeSelect(node) {
      this.selectedNodeKey = node;
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
      this.actionStatusGroup = null;
      this.selected = [];
      this.selectedNodeKey = null;
      this.displayFormGroup = false;
    },
    deleteGroup(data) {
      this.selected.push(data.code);
      this.actionStatusGroup = 4;
      this.$store
        .dispatch("erp_v2/items/group/changeStatus", {
          action: this.actionStatusGroup,
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
    openFormGroup(type,selectedNode) {
      this.typeAddingGroup = type;
      if (type == 2 && this.selectedNodeKey) {
        if (this.selectedNodeKey.hasOwnProperty("parent_id")) {
          this.form.parent = this.selectedNodeKey;
        }
      }
      this.displayFormGroup = true;
    },
    closeFormGroup() {
      this.isUpdatingGroup = false;
      this.typeAddingGroup = null;
      this.selectedNodeKey = null;
      this.displayFormGroup = false;
    },
    openFormEditGroup(item) {
      item["parent"] = item.parent_data;
      const { id, code, name_en, updated_at, name_ar, serial, parent } = item;
      this.form = {id,code,name_en,updated_at,name_ar,serial,parent };
      this.isUpdatingGroup = true;
      this.openFormGroup();
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
    createGroup() {
      if (this.form.parent){
        if (this.form.parent.parent){
          delete this.form.parent.parent
        }
      }
      this.$store
        .dispatch("erp_v2/items/group/create", this.form)
        .then((res) => {
          this.nodes = this.groups
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
    updateGroup() {
      this.$store
        .dispatch("erp_v2/items/group/update", this.form)
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
    upsertGroup() {
      if (this.isUpdatingGroup) {
        this.updateGroup();
      } else {
        this.createGroup();
      }
    },
    /////////////////////////////////
    list() {
      this.$store.dispatch("erp_v2/items/group/list").then(() => { });
    },
    getGroups() {
      if (!this.groups.length > 0) {
        this.list();
      }
    },
   //////////////  Move ///////////////////
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