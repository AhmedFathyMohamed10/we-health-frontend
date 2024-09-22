<template>
    <div class="form">
        <div class="row">
          <StructureDisplay :headerItems="$t('dialog.header.employee')"
            :headerGroup="$t('department.header')" @getAllItems="getAllItems" @addItem="addItem" @openFormGroup="openFormGroup"
            :groups="nodes"
            :selectedKey="selectedKey"
            :display="display"
            @openFormEditGroup="openFormEditGroup"
            @close="cancelForm"
            @onNodeSelect="onNodeSelect"
            @deleteItem="deleteItem" @moveItem="moveItem" @moveGroup="moveGroup">
            <template #items>
              <Employee
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
              >
                
              </Employee>
           
            </template>
          </StructureDisplay>
        </div>
        <!-- groups form -->
        
        <Form 
            v-model="form" 
            :role_options="role_options"
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
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp_v2/hr/employees/employee.json"></i18n>
  <i18n src="@/lang/erp_v2/hr/department.json"></i18n>
  <script>
  const erp_employeeDepartment= "erp_v2/hr/employeeDepartment/";
  import ClientAndSupplier from "@/components/erp_v2/core/clients/ClientAndSupplier.vue";
  import Employee from "@/components/erp_v2/definition/hr/employee/employee.vue";
  import { mapGetters, mapActions } from "vuex";
  import StructureDisplay from "@/components/global/utilities/StructureDisplay.vue";
  import Form from "@/components/erp_v2/hr/department/Form.vue";
  import toast from "@/mixins/global/toast";
  export default {
    mixins: [toast],
    components: {
      StructureDisplay,
      Employee,
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
          this.getDepartments();
        }
      },
    },
    data() {
      return {
        role_options: [
        { en: "Management", ar: "منتجي", id: 1 },
        { en: "Supplier", ar: "خدمي", id: 2 },
        { en: "Cashier", ar: "خدمي", id: 3 },
      ],
      form: {
        department_name: "",
        parent: null,
        serial_code: 11144,
        role: null,
        description: "",
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
      };
    },
    computed: {
      ...mapGetters(`${erp_employeeDepartment}`, {
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
  
      listResponse() {
        return this.getListResponse;
      },
      departments() {
        if (this.listResponse) return this.listResponse;
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
      
      ...mapActions(`${erp_employeeDepartment}`, [
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
      getDepartments() {
        if (!this.departments.length > 0) {
          this.list();
        }
       
      },
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
          .dispatch(`${erp_employeeDepartment}delete`, {
            action: this.actionStatus,
            selected: this.selected,
          })
          .then((res) => {
            this.nodes = this.departments
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
        department_name: "",
        parent: null,
        serial_code: 11144,
        role: null,
        description: "",
      },
        this.closeForm();
        this.upsertResponse = null;
        this.upsertError = null;
      },
      create() {
        console.log("Add department")
        this.$store
          .dispatch(`${erp_employeeDepartment}create`, this.form)
          .then((res) => {
            console.log(res)
            this.nodes = this.departments
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
          .dispatch(`${erp_employeeDepartment}update`, this.form)
          .then((res) => {
            const recordIndex = this.departments.findIndex((item) => item.id === this.form.id);
            this.nodes = this.departments
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
        this.$store.dispatch(`${erp_employeeDepartment}list`).then(() => {});
      },
      moveGroup(value,dragArry) {
        this.isMovingGroup = value;
        this.$store
          .dispatch(`${erp_employeeDepartment}move`, dragArry).then(() => {})
          .catch((err) => {
            const summery = err.statusText;
            const details = err.message;
            this.errorToast(summery, details);
            this.nodes = this.departments
          });;
      },
    },
  };
  </script> 
  