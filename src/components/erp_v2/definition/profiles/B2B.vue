<template>
  <div class="B2B">
    <StructureDisplay :headerItems="$t('B2B.header')"
    :headerGroup="$t('headerGroup')" @getAllItems="getAllItems" @addItem="addItem" @openFormGroup="openFormGroup"
    :groups="nodes"
    :selectedKey="selectedKey"
    :display="display"
    @openFormEditGroup="openFormEditGroup"
    @close="cancelForm"
    @onNodeSelect="onNodeSelect"
    @deleteItem="deleteItem" @moveItem="moveItem" @moveGroup="moveGroup">
    <template #items>
      <B2B 
      :selectedNodeKey="selectedNodeKey"
      :displayFormItem="displayFormItem"
      @closeFormItem="closeFormItem"
      :isDeleteItem="isDeleteItem"
      @closeDeleteItem="closeDeleteItem"
      :isMovingItem="isMovingItem"
      @closemoveItems="closemoveItems"
      :getItems="getItems" 
      @setItems="setItems" 
      @setSelected="setSelected">
       
      </B2B>
    </template>
  </StructureDisplay>
  <Form 
  v-model="form" 
  :isLoading="upsertLoading" 
  :displayForm="displayFormGroup" 
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
<i18n src="@/lang/erp_v2/clients/group.json"></i18n>
<i18n src="@/lang/erp_v2/b2b/b2b.json"></i18n>
<script>
const b2b_group = "erp_v2/b2b_group/"
import DefinitionDialog from "@/components/global/utilities/DefinitionDialog.vue";
import B2B from "@/components/erp_v2/core/b2b/B2B.vue";
import Tree from "primevue/tree";
import EditButton from "@/components/global/utilities/EditButton.vue";
import { mapGetters, mapActions } from "vuex";
import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
import Form from "@/components/erp_v2/b2b/group/Form.vue";
import toast from "@/mixins/global/toast";
export default {
  mixins: [toast],
  components: {
    B2B,
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
      },
      displayFormGroup: false,
      actionStatus: null,
      selected: [],
      typeAdd: null,
      isUpdating: false,
      selectedNodeKey: null,
      selectedKey:null,
      getItems: false,
      isDeleteItem: false,
      displayFormItem: false,
      isMovingItem: false,
      isMovingGroup: false,
      hoveredItemId: false,
      category_filter:this.category,
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
    ...mapGetters("erp_v2/b2b_group/", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
      getTreeNodes: "getTreeNodes",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getDeleteResponse: "getDeleteResponse",
      deleteLoading: "getDeleteLoading",
      getDeleteError: "getDeleteError",
    }),
    nodes:{
      get(){

        return this.getTreeNodes
      },
      set(value){
        
        this.setTreeNodes(value)
      }
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
      
      ...mapActions('erp_v2/b2b_group/', [
        "setUpsertResponse",
        "setUpsertError",
        "setDeleteResponse",
        "setDeleteError",
        "setTreeNodes",
      ]),
      setSelected(value) {
        // this.selectedNodeKey = this.groups.find(obj => obj.id === value.id);
        this.isSelected = true
        this.getItems = true;
        this.selectedKey =  value
        // this.selectedNodeKey['selected'] = this.isSelected;
        // this.onNodeSelect( this.groups.find(obj => obj.id === value.id));
      },
      // getDepartments() {
      //   if (!this.departments.length > 0) {
      //     this.list();
      //   }
       
      // },
      //////////////// Tree //////////
      onNodeSelect(node) {
        this.selectedNodeKey = node;
        // console.log(node)
        // this.selectedKey = {[node.key]:true}
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
        this.selectedKey = null,
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
          .dispatch(`${b2b_group}delete`, {
            action: this.actionStatus,
            selected: this.selected,
          })
          .then((res) => {
            this.nodes = this.groups
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
        if (type == 2 ) {
          if(selectedNode !== null){
            if (selectedNode.hasOwnProperty("parent_id")) {
              this.form.parent = selectedNode;
              
            }
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
        console.log("openFormEditGroup")
        console.log(item)
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
        console.log("resetForm")
        this.form = {
          name_en: "",
        name_ar: "",
        serial: 12345678.333,
        parent: null,
      },
        this.closeForm();
        this.upsertResponse = null;
        this.upsertError = null;
      },
      create() {
        console.log("Add group")
        this.$store
          .dispatch(`${b2b_group}create`, this.form)
          .then((res) => {
            console.log(res)
            this.nodes = this.groups
            this.resetForm();
            const summery = res.statusText;
            const details = res.message;
            this.successToast(summery, details);
          })
          .catch((err) => {
            console.log(err)
            // const summery = err.statusText;
            // const details = err.message;
            // this.errorToast(summery, details);
          });
      },
      update() {
        this.$store
          .dispatch(`${b2b_group}update`, this.form)
          .then((res) => {
            const recordIndex = this.groups.findIndex((item) => item.id === this.form.id);
            this.nodes = this.groups
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
      ///////////////////////////////// move items/////
        
      moveItem() {
        console.log("moveitem in client")
        this.isMovingItem = true;
      },
      closemoveItems() {
        console.log("close move  in client")
        this.isMovingItem = false;
      },
      /// list items
      list() {
        console.log('list group items')
        this.$store.dispatch(`${b2b_group}list`).then(() => {});
      },
      moveGroup(value,dragArry) {
        this.isMovingGroup = value;
        this.$store
          .dispatch(`${b2b_group}move`, dragArry).then(() => {})
          .catch((err) => {
            const summery = err.statusText;
            const details = err.message;
            this.errorToast(summery, details);
            this.nodes = this.groups
          });;
      },
      getGroups() {
        if (!this.groups.length > 0) {
          this.list();
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