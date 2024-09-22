
<template>
    <div class="Internship">
      <div class="company-wrapper my-2">
        <Base class="my-2">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center text-danger fw-bold my-4">RedFoxes</h1>
              <h2 class="text-center">Welcome To RedFoxes ERP System</h2>
            </div>
          </div>
        </Base>
      </div>
      <div class="search-wrapper my-2">
        <Base>
          <div class="row">
            <div class="col-12">
              <h4>{{ $t('internship.header') }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.employee.label") }} </label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                  <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.employee_name"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.entity_name.label") }} </label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                  <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.entity_name"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.course_name.label") }} </label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                  <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.course_name"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.department_name.label") }} </label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                  <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.department_name"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-4 d-flex align-items-end">
              <div class="form-group">
                <button  class="btn btn-pill btn-success-gradient" @click.prevent="search">
                    <span>
                      <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>         
                    </span>
                    <span class="mx-2">{{$t('btns.search')}}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="d-flex flex-wrap">
                <div class="form-group mb-2 me-2">
                  <button class="btn btn-pill btn-success-gradient" @click="openForm" >
                    <span><i class="fa fa-plus fa-md"></i> </span>
                    <span class="mx-2">{{ $t("btns.new") }}</span>
                  </button>
                </div>
                <div class="form-group mb-2 me-2">
                  <button  class="btn btn-pill btn-secondary-gradient" @click="fetchAll" >
                    <span><i class="bi bi-arrow-clockwise"></i></span>
                    <span class="mx-2">{{ $t("btns.all") }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="table-wrapper">
        <Base>
          <div v-if="listLoading">
            <DataTable :value="[{}, {}, {}, {}, {}, {}, {}]">
              <Column field="id" header="#">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="employee_name" header="Employee Name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="course_name" header="Course Name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              
              <Column field="start_date" header="Start Date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="end_date" header="End Date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="entity_name" header="Entity Name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="course_type" header="Course Type">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="course_duration" header="Course Duration">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
             
            </DataTable>
          </div>
          <div class="row" v-if="totalRecords">
              <div class="col-12">
                <div class="d-flex justify-content-between flex-wrap">
                  <div class="actions d-flex flex-wrap">
                    <div class="form-group me-2">
                      <button
                        class="btn btn-pill btn-danger-gradient"
                        @click="openDeleteDialogMultiple(4)"
                      >
                        <i class="fa fa-trash"></i>
                        {{ $t("btns.delete") }}
                      </button>
                    </div>
                  </div>
                  <div class="result">
                      <span>{{ $t('messages.resultsfound') }} </span> 
                      <Badge severity="success" :value="totalRecords"></Badge>
                  </div>
                </div>
  
              </div>
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
                        <th scope="col">{{ $t("form.employee.label") }}</th>
                        <th scope="col">{{ $t("form.course_name.label") }}</th>
                        <th scope="col">{{ $t("form.start_date.label") }}</th>
                        <th scope="col">{{ $t("form.end_date.label") }}</th>
                        <th scope="col">{{ $t("form.entity_name.label") }}</th>
                        <th scope="col">{{ $t("form.course_type.label") }}</th>
                        <th scope="col">{{ $t("form.course_duration.label") }}</th>
                        <th scope="col">{{ $t("table.thead.controls") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(internship, index) in internships" :key="index">
                        <td class="align-middle">
                          <input
                            type="checkbox"
                            :value="internship.code"
                            v-model="selected"
                            :binary="true"
                          />
                        </td>
                        <td class="align-middle">
                          {{ calculateTableIndexing(index) }}
                        </td>
                        <td class="align-middle">
                          <span>
                            <a
                              class="fw-bold"
                              href="javascript:void(0)"
                              @click="openDetailsDialog(internship.employee_id)"
                              >{{ internship.employee_name }}</a
                            >
                          </span>
                        </td>
                        <td class="align-middle fw-bold">
                            <span>{{ internship.course_name }}</span>
                          </td>
                          
                        <td class="align-middle fw-bold">
                          <span>{{ internship.start_date }}</span>
                        </td>
                        <td class="align-middle fw-bold">
                            <span>{{ internship.end_date }}</span>
                          </td>

                          <td class="align-middle fw-bold">
                            <span>{{ internship.entity_name }}</span>
                          </td>
                          <td class="align-middle fw-bold">
                            <span>{{ $t(internship.course_type) }}</span>
                          </td>
                          <td class="align-middle fw-bold">
                            <span>{{ internship.course_duration }} {{$t('month')}} </span>
                          </td>
                       
                        <td class="align-middle">
                          <div class="d-flex justify-content-center align-items-center">
                            <DetailButton class="me-2" @details="openDetailsDialog(internship)" ></DetailButton>
                            <EditButton class="me-2" @edit="openUpdate(internship)"></EditButton>
                            <DeleteButton @delete="openDeleteDialogSingle(internship.code,4)"></DeleteButton>
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
          <div v-if="!totalRecords && !listLoading">
              <NoResults></NoResults>
          </div>
        </Base>
      </div>
  
      <Form v-model="form" :isLoading="upsertLoading"  :displayForm="displayForm" @close="resetForm" @cancel="resetForm" @save="upsert" :error="upsertError" :header="isUpdating?$t('dialog.header.edit'):$t('dialog.header.new')"> 
      </Form>
      <DeleteDialog
        :display="displayDeleteDialog"
        @cancel="closeDeleteDialog"
        @delete="deleteRecords"
        :isLoading="deleteLoading"
  
      />
  
      <DetailsDialog :display="displayDetailsDialog" @hide="closeDetailsDialog" :header="displayEmployeeDetailsDialog?$t('dialog.title.details'):$t('dialog.header.details')">
        <div class="row">
          <div class="col-md-12">
              <div class="table-responsive">
                  <table class="table table-borderless text-nowrap mb-0">
                      <tbody>
                          <tr v-for="(value,key) in recordDetails" :key="key">
                              <td class="" v-if="recordDetails.name">
                                {{$t(`employee.key.${key}`)}}
                              </td>
                              <td class="" v-else>
                                {{$t(`internship.key.${key}`)}}
                              </td>
                              <td class="">
                                  <span v-if="!value" class="text-muted">------</span>
                                  <span v-if="key!=='status' && key!=='course_duration' ">{{value}}</span>
                                  <span v-if="key!=='status' && key=='course_duration' ">{{value}} {{$t('months')}}</span>
                                  <div v-if="key=='status'">
                                    <span v-if="value=='1'">
                                      <Tag severity="success" :value="$t('status.active')" rounded></Tag>
                                    </span>
                                    <span v-if="value=='2'">
                                      <Tag severity="warning" :value="$t('status.suspended')" rounded></Tag>
                                    </span>
                                  </div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
        </div>
      </DetailsDialog>
     
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/internships/Internship.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  import EditButton from "@/components/global/utilities/EditButton.vue"
  import DetailButton from "@/components/global/utilities/DetailButton.vue"
  import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
  import Form from '@/components/erp/HR/internships/internships/Form.vue';
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
  import employeesOptions from "@/mixins/erp/employees/employeeOptions"
  import { mapGetters,mapActions  } from 'vuex'
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  export default {
    mixins:[pagination,toast,employeesOptions],
    components: {
      Base,
      NoResults,
      EditButton,
      DeleteButton,
      Form,
      DeleteDialog,
      DetailsDialog,
      DetailButton,
    },
    data() {
      return {
        displayForm:false,
        start_date:"",
        end_date:"",
        form: {
          course:"",
          employee:"",
          start_date :"",
          end_date:""
        },
        isUpdating:false,
        ////////////////////
        displayDeleteDialog:false,
        codeToDelete:null,
        selected: [],
        selectAll: false,
        displayStatusDialog: false,
        statusAction: "",
        displayDetailsDialog:false,
        displayEmployeeDetailsDialog :false,
        recordDetails:null,
        searchQuery: {
          entity_name:"",
          course_name:"",
          employee_name:"",
          department_name:""
        },
        isPaginating: false,
        isSearching: false,
        searching: false,
      };
    },
    computed: {
    //   employeesOptions() {
    //   if (this.$store.getters["Employees/getListResponse"])
    //     return this.$store.getters["Employees/getListResponse"].results;
    //   else {
    //     return [];
    //   }
    // },
   
      filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        entity_name: this.isSearching ? this.searchQuery.entity_name : "",
        course_name: this.isSearching ? this.searchQuery.course_name : "",
        employee_name: this.isSearching ? this.searchQuery.employee_name : "",
        department_name: this.isSearching ? this.searchQuery.department_name : "",
      };
    },
      ...mapGetters("erp/hr/internships", {
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
      internships() {
        if(this.listResponse)
         return this.listResponse.results;
        else return {};
      },
      totalRecords() {
        if(this.listResponse)
          return this.listResponse.count;
        else return 0
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
    },
    mounted() { 
      if (!this.internships.length > 0){
        this.list()
      }
      if (!this.employeesOptions.Length > 0) {
      this.$store.dispatch("erp/hr/employees/getOptions");
    }
    },
    methods: {
    //   selectDate(event) {
    //   this.searchQuery.due_date = this.$moment(event).format("YYYY-MM-DD");
    // },
      ...mapActions("erp/hr/internships",
      ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError"]),
      /////////////////////////////////////////
      selectAllRecords() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.internships) {
            this.selected.push(this.internships[i].code);
          }
        }
      },
      ////////// UPSERT ///////////////////
      openForm() {
        this.displayForm=true;
      },
      closeForm() {
        this.displayForm=false;
      },
      openUpdate(item){
        this.isUpdating=true;
        console.log(item)
        item["course"] = item.course_id
        item["employee"] = {"name":item.employee_name,"id":item.employee_id}
        this.form={...item};
        console.log(this.form)
        this.openForm();
      },
      resetForm(){
        this.form={
          course:"",
          employee:"",
          start_date :"",
          end_date:""
        }
        this.isUpdating =false;
        this.closeForm();
        this.upsertResponse=null;
        this.upsertError=null;
      },
      create(){
        this.form.end_date = this.$moment(this.form.end_date).format("YYYY-MM-DD");
        this.$store.dispatch("erp/hr/internships/create", this.form)
        .then((res) => {
          this.resetForm();
          // console.log(res)
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          // console.log(err)
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
      },
      update(){
        this.form.end_date = this.$moment(this.form.end_date).format("YYYY-MM-DD");
        this.$store.dispatch("erp/hr/internships/update", this.form)
        .then((res) => {
          this.resetForm();
          // console.log(res)
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          // console.log(err)
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
      },
      upsert() {
        if(this.isUpdating){
          this.update();
        }
        else {
          this.create();
        }
      },
      /////////// DELETE /////////////
      openDeleteDialog() {
        this.displayDeleteDialog = true;
      },
      closeDeleteDialog() {
        this.displayDeleteDialog = false;
        this.statusAction = ""
        this.selected = []
        this.selectAll = false;
      },
      openDeleteDialogSingle(code,status) {
        this.openDeleteDialog();
        this.statusAction = status;
        this.selected =[];
        this.selected.push(code);
      },
      openDeleteDialogMultiple(status) {
        if (this.selected.length) {
          this.statusAction = status;
          this.openDeleteDialog();
        } 
        else {
          this.infoToast(this.$t("toast.select.summery"),this.$t('toast.select.details'))
        }
      },
      deleteRecords() {
        this.$store.dispatch("erp/hr/internships/delete", {'selected':this.selected,'action':this.statusAction})
        .then((res) => {
          if (this.selected.length == this.pagination.rows){
            this.fetchAll()
          }
            this.closeDeleteDialog();
            this.selected=[];
            // console.log(res)
            const summery = res.statusText; 
            const details =  res.data.message;
            this.successToast(summery,details)
          })
          .catch((err) => {
            // console.log(err)
            const summery = err.statusText; 
            const details =  err.data.message;
            this.errorToast(summery,details)
          })
      },
      ///////////// Employee Details ///////////////
      // closeEmployeeDetailsDialog(){
      //    this.recordDetails = null;
      //    this.displayEmployeeDetailsDialog = false;
      //  },
      //  openEmployeeDetailsDialog(id) {
      //   console.log(id)
      //   console.log(this.employeesOptions)
      //   let employee =  this.employeesOptions.filter((element) => element.id == id)
      //   console.log(employee[0])
      //   // let dateOfCreation = new Date(record.created_at);
      //   // record.created_at = dateOfCreation.toLocaleDateString();
      //   // let dateOfupdate = new Date(record.updated_at);
      //   // record.updated_at = dateOfupdate.toLocaleDateString();
      //   // const {course,course_duration,course_name,course_type,created_at,employee_name,end_date,entity_name,start_date,updated_at} = record
      //   // this.recordDetails = {course,course_duration,course_name,course_type,created_at,employee_name,end_date,entity_name,start_date,updated_at};
      //   this.displayEmployeeDetailsDialog = true;
      //  }, 
      ///////////////// DETAILS /////////////////////////////
       closeDetailsDialog(){
         this.recordDetails = null;
         this.displayDetailsDialog = false;
         this.displayEmployeeDetailsDialog = false
       },
       openDetailsDialog(record) {
        if(typeof record == "object"){
          console.log("internship")
          let dateOfCreation = new Date(record.created_at);
          record.created_at = dateOfCreation.toLocaleDateString();
          let dateOfupdate = new Date(record.updated_at);
          record.updated_at = dateOfupdate.toLocaleDateString();
          const {course,course_duration,course_name,course_type,created_at,employee_name,end_date,entity_name,start_date,updated_at} = record
          this.recordDetails = {course,course_duration,course_name,course_type,created_at,employee_name,end_date,entity_name,start_date,updated_at};
          this.displayDetailsDialog = true;
        }else{
          let employee =  this.employeesOptions.filter((element) => element.id == record)
          // this.recordDetails = employee[0]
          if(employee[0]){
            console.log(employee[0])

            const {name,mobile,address,email,salary,username,education,marital_status,gender,dob,job_start_date,status,created_at} = employee[0];
            // const {}
            this.recordDetails = {name,mobile,address,email,salary,username,education,marital_status,gender,dob,job_start_date,status,created_at}
          this.recordDetails["role"] = employee[0].role_obj.name;
          this.recordDetails["shift"] = employee[0].shift_obj.name;
          this.displayDetailsDialog = true
          this.displayEmployeeDetailsDialog = true
      };
        }
       }, 
       list() {
      this.$store.dispatch("erp/hr/internships/list", this.filterParams).then(() => {
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


      if (this.filterParams.entity_name || this.filterParams.course_name || this.filterParams.employee_name || this.filterParams.department_name) {
        this.filterParams.pageNumber = 1;
        this.list();
      } else {
        this.infoToast(
          this.$t("toast.search.summery"),
          this.$t("toast.search.details")
        );
        this.isSearching = false;
      }
    },

    fetchAll() {
      this.searchQuery= {
          entity_name:"",
          course_name:"",
          employee_name:"",
          department_name:""
        },
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
  <style></style>
  
  