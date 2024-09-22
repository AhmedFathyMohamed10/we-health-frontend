<template>
    <div class="account">
      <div class="table-wrapper">
        <div class="search-wrapper" v-if="selectedNodeKey">
          <div
            class="d-flex align-items-center flex-wrap flex-sm-nowrap justify-content-between gap-2 my-2"
          >
            <label for="" class="mb-0">Search</label>
            <span
              :class="[
                locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
              ]"
            >
              <i
                class="pi"
                :class="[
                  isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                ]"
              ></i>
              <InputText
                type="text"
                v-model="searchQuery.name"
                :placeholder="$t('btns.search')"
                @keyup.enter="search"
              />
            </span>
  
            <button
              class="btn btn-icon rounded-circle btn-success-gradient"
              @click.prevent="search"
            >
              <i class="fa fa-search fa-md" aria-hidden="true"></i>
            </button>
            <div class="result d-flex align-items-center gap-1">
              <span>{{ $t("messages.resultsfound") }} </span>
              <Badge severity="success" :value="totalRecords"></Badge>
            </div>
          </div>
        </div>
        <div v-if="totalRecords">
          <div class="row">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table table-sm text-center">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="checkbox"
                          v-model="selectAll"
                          @click="selectAllRecords"
                          :binary="true"
                        />
                      </th>
                      <th scope="col">{{ $t("table.thead.count") }}</th>
                      <th @click="toggleSort('id')">
                        {{ $t("form.name.label")
                        }}<i
                          class="p-sortable-column-icon pi pi-fw pi-sort-amount-up-alt"
                        ></i>
                      </th>
  
                      <th scope="col">{{ $t("form.group.label") }}</th>
                      <th scope="col">
                        {{ $t("form.gender.label") }}
                      </th>
                      <th scope="col">{{ $t("form.dob.label") }}</th>
                      <th scope="col">{{ $t("form.phone_number.label") }}</th>
                      <th scope="col">{{ $t("table.thead.controls") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(employee, index) in employees" :key="index">
                      <td class="align-middle">
                        <input
                          type="checkbox"
                          :value="employee.code"
                          v-model="selected"
                          :binary="true"
                        />
                      </td>
                      <td class="align-middle">
                        {{ calculateTableIndexing(index) }}
                      </td>
                      <td class="align-middle">
                        <span>
                          {{ employee.name }}
                        </span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ employee.department_name }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ employee.gender }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ employee.dob }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span> {{ employee.phone_number }} </span>
                      </td>
  
                      <td class="align-middle">
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <EditButton
                            class="me-2"
                            @edit="openUpdate(employee)"
                          ></EditButton>
                          <DeleteButton
                            @delete="openDeleteDialogSingle(employee.code, 4)"
                          ></DeleteButton>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-12" :dir="[locale == 'ar' ? 'ltr' : '']">
              <Paginator
                :first.sync="pagination.offset"
                :rows.sync="pagination.rows"
                :totalRecords="totalRecords"
                :rowsPerPageOptions="pagination.rowsOptions"
                @page="onPage($event)"
              ></Paginator>
            </div>
          </div>
        </div>
        <div v-if="!totalRecords && !listLoading">
          <NoResults></NoResults>
        </div>
      </div>
      <Form
        v-model="form"
        :isLoading="upsertLoading"
        :isUpdating="isUpdating"
        :displayForm="displayForm"
        :genderOptions="genderOptions"
        :maritalStatusOptions="maritalStatusOptions"
        :paymentMethodOptions="paymentMethodOptions"
        @close="resetForm"
        @cancel="resetForm"
        @save="upsert"
        :error="upsertError"
        :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
      >
      </Form>
  
      <DeleteDialog
        :display="displayDeleteDialog"
        @cancel="closeDeleteDialog"
        @delete="deleteRecords"
        :isLoading="deleteLoading"
      />
      <Move
        :isLoading="upsertLoading"
        :displayForm="displayFormMove"
        :header="$t('dialog.header.move')"
        @cancelMove="closeMoveItem"
        @saveMove="moveItem"
      >
      </Move>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp_v2/hr/employees/employee.json"></i18n>
  <script>
  const erp_employees= "erp_v2/hr/employees/";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  import EditButton from "@/components/global/utilities/EditButton.vue";
  import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
  import Form from "@/components/erp_v2/hr/employees/employee/Form.vue";
  import Move from "@/components/erp_v2/hr/employees/employee/Move.vue";
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import { mapGetters, mapActions } from "vuex";
  import pagination from "@/mixins/global/pagination";
  import { cloneDeep } from "lodash";
  import toast from "@/mixins/global/toast";
  import moment from 'moment';
  export default {
    mixins: [pagination, toast],
    props: {
    
      displayFormItem: {
        type: Boolean,
        default() {
          return false;
        },
      },
      isDeleteItem: {
        type: Boolean,
        default() {
          return false;
        },
      },
      isMovingItem:{
        type: Boolean,
        default() {
          return false;
        },
      },
      selectedNodeKey: {
        type: Object,
      },
      getItems: {
        type: Boolean,
        default() {
          return false;
        },
      },
    },
    watch: {
     
      displayFormItem(value) {
        if (value == true) {
            if (this.selectedNodeKey !== null && typeof this.selectedNodeKey === "object") {
                this.form.department = this.selectedNodeKey;
            }
            this.openForm();
          }
      },
      isDeleteItem() {
        if (this.isDeleteItem == true) {
          this.openDeleteDialogMultiple(4);
        }
      },
      isMovingItem(value) {
        if (value == true) {
          this.openMoveDialog();
        }
      },
      selectedNodeKey(value) {
        if (value !== null && typeof value === "object") {
            this.group_selected_id = value.id;
            this.list();
        } else {
          this.group_selected_id = "";
        }
      },
      getItems(value) {
        if (value == true) {
          this.list();
        }
      },
    },
    components: {
      NoResults,
      EditButton,
      DeleteButton,
      DeleteDialog,
      Form,
      Move,
    },
    data() {
      return {
        displayFormMove: false,
        // form:{
        //   userdata: null,
        //   name: "",
        //   group: null,
        //   gender: "",
        //   dob: null,
        //   profession: "",
        //   marital_status: null,
        //   phone_number: "",
        //   other_phone_number: "",
        //   home_phone_number: "",
        //   address: "",
        //   city: "",
        //   discount: null,
        //   profit: null,
        //   max_debit: null,
        //   insurance_name: "",
        //   card_name: "",
        //   member_id: "",
        //   plan: "",
        //   expiration_date: null,
        //   payment_method: null,
        //   files: null,
        //   serial: null,
        //   treat_as: null,
        //   prevent_dealing: false,
        //   alert_dealing: false,
        //   prevent_give: false,
        //   alert_give: false,
        //   saved_files: [],
        //   uploaded_files: [],
        // },
        group_selected_id:"",
        displayForm: false,
        isUpdating: false,
        ////////////////////
        displayDeleteDialog: false,
        codeToDelete: null,
        selected: [],
        actionStatus: null,
        selectAll: false,
        displayStatusDialog: false,
        displayDetailsDialog: false,
        recordDetails: null,
        searchQuery: {
          name: "",
        },
        isPaginating: false,
        isSearching: false,
        sortKey: null,
        sortOrder: 1, 
        genderOptions: [
          { name: "Male", en: "Male", ar: "ذكر" },
          { name: "Female", en: "Female", ar: "انثي" },
        ],
        paymentMethodOptions: [
          { name: "Credit", en: "Credit", ar: "دائن" },
          { name: "Debit", en: "Debit", ar: "مدين" },
          { name: "Both", en: "Both", ar: "كلاهما" },
        ],
        maritalStatusOptions: [
          { name: "Married", en: "Married", ar: "متزوج مغفل" },
          { name: "Single", en: "Single", ar: "ملهوش كتكوته" },
          { name: "Divorced", en: "Divorced", ar: "ملهي علي عينه" },
          
          { name: "Other", en: "Other", ar: "خنزير" },
        ],
      };
    },
    computed: {
      listResponse() {
        return this.getListResponse;
      },
      employees() {
        if (this.listResponse) return this.listResponse.results;
        else return [];
      },
      totalRecords() {
        if (this.listResponse) return this.listResponse.count;
        else return 0;
      },
      ...mapGetters(`${erp_employees}`, {
        getForm: "getForm",
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
    //   form() {
    //   return this.$store.getters[`${erp_employees}getForm`];
    // },
    form: {
        get() {
          return this.getForm;
        },
        set(value) {
          this.setForm(value);
        },
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
      filterParams() {
        return {
          pageNumber: this.pagination.pageNumber + 1,
          rows: this.pagination.rows,
          name: this.isSearching ? this.searchQuery.name : "",
          group_id: this.group_selected_id,
        };
      },
    },
    methods: {
      ...mapActions(`${erp_employees}`, [
        "setUpsertResponse",
        "setUpsertError",
        "setDeleteResponse",
        "setDeleteError",
        "setStatusResponse",
        "setForm",
      ]),
      /////////////////////////////////////////
    
      findLocaleOption(list, value) {
        let item = list.find((item) => item.id == value);
        if (item) return item[this.locale];
        else return value;
      },
  
      selectAllRecords() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.employees) {
            this.selected.push(this.employees[i].code);
          }
        }
      },
  
      ////////// UPSERT ///////////////////
  
      openForm() {
        this.displayForm = true;
      },
      closeForm() {
        this.isUpdating = false;
        this.displayForm = false;
        this.$emit("closeFormItem");
      },
      openUpdate(item) {
      // const { username, salary, password, job_start_date } = item;
      console.log("form item ",item)
      let record = {}
      const{username,password,salary,hourly_pay,direct_manager,annual_increase} = item
      const{ profession,treat_as,prevent_dealing,alert_dealing,prevent_give,alert_give,serial,saved_files,
        graduation_date,status} = item;
      const{job_start_date,job_end_date,contract_files,contract_saved_files} = item;
      const {id,name,phone_number,account,gender,dob,marital_status,address,email} = item
      record["contract"] = {
        job_start_date,job_end_date,contract_files,contract_saved_files
      };
      record["contract"]["contract_deleted_files"] = [];
      // console.log(weekend_days)
      record["empolymentInfo"] = {username,password,salary,hourly_pay,direct_manager,annual_increase};
      record["otherInfo"] = {  profession,treat_as,prevent_dealing,alert_dealing,prevent_give,alert_give,serial,saved_files,
        graduation_date,status };
      record["otherInfo"]["emergency_numbers"] = item.emergency_number;
      record["otherInfo"]["deleted_files"] = [];
      record["otherInfo"]["files"] = [];
      record["department"] = item.department_obj;
      // record["role"] = item.role_obj;
      record["empolymentInfo"]["weekend_days"] = item.weekend_day;
        this.form = {...record,id,name,phone_number,account,gender,dob,marital_status,address,email};
        this.form["department"] = item.department_data;
        this.form["role"] = item.role_data;
        // this.form.dob = this.$moment(this.form.dob).format("YYYY-MM-DD");s
        // console.log(this.form.dob)
        // this.form['contract']['job_start_date'] = moment(this.form['contract']['job_start_date']).format("YYYY-MM-DD");
        // this.form['contract']['job_end_date'] = moment(this.form['contract']['job_end_date']).format("YYYY-MM-DD");
        // this.form['otherInfo']['graduation_date'] = moment(this.form['otherInfo']['graduation_date']).format("YYYY-MM-DD");
        console.log("open update form ",this.form)
        // console.log(typeof this.form['otherInfo']['graduation_date']);
        // this.form['deleted_files'] = []
        this.isUpdating = true;
        this.openForm();
      },
      resetForm() {
          this.form = {
            userdata: null,
      name:"",
      phone_number:"",
      gender:"",
      dob:"",
      marital_status:"",
      department:"",
      role:"",
      address:"",
      email:"",
      contract: { 
        job_start_date:"",
        job_end_date:"",
        contract_files:[],
        contract_saved_files:[],
        contract_deleted_files:[]
        },
      empolymentInfo:{ 
        username:"",
        password:"",
        salary:"",
        hourly_pay:"",
        direct_manager:"",
        weekend_days:[],
        annual_increase:null,
      },
      
      otherInfo: {
        profession:"",
        treat_as:"",
        prevent_dealing:"",
        alert_dealing:"",
        prevent_give:"",
        alert_give:"",
        serial:"",
        graduation_date:"",
        files:[],
        saved_files:[],
        deleted_files:[],
        emergency_numbers:[],
        status:1
         
      }
        };
        this.closeForm();
        this.upsertResponse = null;
        this.upsertError = null;
      },
      create() {
        this.$emit('setSelected', this.form.department);
        if (typeof this.form.department === "object") {
          this.form.department = this.form.department;
          // this.filterParams.group_id =  this.form.group;
          // this.list()
        } 
        // else if (typeof this.form.group === "string") {
        //   this.form.group = null;
        // }
       
        let formData = new FormData();
        if (this.form.otherInfo.files) {
          this.form.otherInfo.files.forEach((element) => {
            console.log()
            formData.append("files", element.file);
          });
        } else {
          formData.append("files", []);
        }
        if (this.form.contract.contract_files) {
          this.form.contract.contract_files.forEach((element) => {
            console.log("contract_files",element)
            formData.append("contract_files", element.file);
          });
        } else {
          formData.append("contract_files", []);
        }
        
        const {
        userdata,
        name,
        phone_number,
        
        gender,
        dob,
        marital_status,
        department,
        role,
        address,
        email,
      } = this.form;
        let employeeData = {
          userdata,
      name,
      phone_number,
      gender,
      dob,
      marital_status,
      department,
      role,
      address,
      email,
        ...this.form.contract,
        ...this.form.empolymentInfo,
        ...this.form.otherInfo,
      };
        // delete this.form.uploaded_files;
        // delete this.form.saved_files;


      delete employeeData.deleted_files;
      delete employeeData.saved_files;
      delete employeeData.files;
      delete employeeData.contract_saved_files;
      delete employeeData.contract_deleted_files;
      delete employeeData.contract_files;
        let data = JSON.stringify(employeeData);
        
        formData.append("data", data);
        this.$store
          .dispatch(`${erp_employees}create`, formData)
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
        if (typeof this.form.department === "object") {
          this.form.department = this.form.department;
          // this.filterParams.department_id =  this.form.department;
          // this.list()
        } else if (typeof this.form.department === "string") {
          this.form.department = null;
        }
        let formData = new FormData();
        if (this.form.otherInfo.files) {
          this.form.otherInfo.files.forEach((element) => {
            formData.append("files", element.file);
          });
        }
        formData.append("files", []);
        if (this.form.contract.contract_files) {
          this.form.contract.contract_files.forEach((element) => {
            console.log("contract_files",element)
            formData.append("contract_files", element.file);
          });
        } else {
          formData.append("contract_files", []);
        }
        let id = this.form.id;
        const {
        userdata,
        name,
        phone_number,
        gender,
        dob,
        marital_status,
        department,
        role,
        address,
        email,
        
      } = this.form;
        let employeeData = {
          userdata,
      name,
      phone_number,
      gender,
      dob,
      marital_status,
      department,
      role,
      address,
      email,
        ...this.form.contract,
        ...this.form.empolymentInfo,
        ...this.form.otherInfo,
      };
      // delete employeeData.deleted_files;
      // delete employeeData.saved_files;
      // delete employeeData.contract_saved_files;
      // delete employeeData.contract_deleted_files;
      delete employeeData.files;
      delete employeeData.contract_files;
      console.log(employeeData)
      let data = JSON.stringify(employeeData);
      // const weekend_days = JSON.parse(jsonArray);
        formData.append("data", data);
        this.$store
          .dispatch(`${erp_employees}update`, { id: id, data: formData })
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
  
      /////////// DELETE /////////////
      openDeleteDialog() {
        this.displayDeleteDialog = true;
      },
      closeDeleteDialog() {
        this.actionStatus = null;
        this.selected = [];
        this.displayDeleteDialog = false;
        this.$emit("closeDeleteItem");
      },
      openDeleteDialogSingle(code, action) {
        this.openDeleteDialog();
        this.selected.push(code);
        this.actionStatus=action;
      },
      openDeleteDialogMultiple(action) {
        console.log("delete multi")
        if (this.selected.length) {
          this.actionStatus=action;
                  this.openDeleteDialog();
        } else {
          this.$emit("closeDeleteItem");
          this.infoToast(
            this.$t("toast.select.summery"),
            this.$t("toast.select.details")
          );
        }
      },
      deleteRecords() {
        this.$store
          .dispatch(`${erp_employees}delete`, {
            action: this.actionStatus,
            selected: this.selected,
          })
          .then((res) => {
            this.closeDeleteDialog();
            this.selected = [];
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
      ////////// move items //////
      closeMoveItem() {
        this.selected = [];
        this.displayFormMove = false;
        this.$emit("closemoveItems");
      },
      openMoveDialog() {
        if (this.selected.length) {
          this.displayFormMove = true;
          // this.$emit("closemoveItems");
        } else {
          this.$emit("closemoveItems");
          this.infoToast(
            this.$t("toast.select.summery"),
            this.$t("toast.select.details")
          );
        }
      },
      moveItem(data) {
        this.$store
          .dispatch(`${erp_employees}move`, {
            department: data,
            selected: this.selected,
          })
          .then((res) => {
            this.closeMoveItem();
            this.selected = [];
            this.selectAll = false;
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
      ///////////////// LIST /////////////////////////////
      list() {
        this.$store
          .dispatch(`${erp_employees}list`, this.filterParams)
          .then(() => {
            if (this.getItems == true) {
              this.$emit("setItems");
            }
            if (!this.isPaginating) {
              this.pagination.offset = 0;
              this.pagination.pageNumber = 0;
            }
            this.isSearching = false;
            this.isPaginating = false;
          });
      },
      search() {
        this.isSearching = true;
        if (this.filterParams.name) {
          this.filterParams.pageNumber = 1;
          this.list();
        } else {
          this.infoToast(
            this.$t("toast.search.summery"),
            this.$t("toast.search.details")
          );
        }
      },
  
      fetchAll() {
        this.searchQuery = { account_name_en: "" };
        this.list();
      },
      onPage(event) {
        this.isPaginating = true;
        this.pagination.pageNumber = event.page;
        this.list();
      },
    },
  };
  </script>