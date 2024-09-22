
<template>
    <div class="Overtime">
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
              <h4>{{ $t('Overtime.header') }}</h4>
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
                    v-model="searchQuery.employee"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label">
                  {{ $t("form.due_date.label") }}
                </label>
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
                  <Calendar
                    v-model="due_date"
                    dateFormat="yy-mm-dd"
                    @input="selectDate($event)"
                    @keyup.enter="search"
                    :placeholder="$t('btns.search')"
                  />
                  <!-- <InputText
                        type="text"
                        v-model="searchQuery.due_date"
                        :placeholder="$t('btns.search')"
                        @keyup.enter="search"
                      /> -->
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
            <DataTable :value="[{}, {}, {}]">
              <Column field="id" header="#">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="name" header="Name">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="description" header="Description">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="description" header="Parent">
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
                        <th scope="col">{{ $t("form.reason.label") }}</th>
                        <th scope="col">{{ $t("form.amount.label") }}</th>
                        <th scope="col">{{ $t("form.due_date.label") }}</th>
                        <th scope="col">{{ $t("table.thead.controls") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(overtime, index) in overtimes" :key="index">
                        <td class="align-middle">
                          <input
                            type="checkbox"
                            :value="overtime.id"
                            v-model="selected"
                            :binary="true"
                          />
                        </td>
                        <td class="align-middle">
                          {{ calculateTableIndexing(index) }}
                        </td>
                        <td class="align-middle fw-bold">
                          <span>{{ overtime.employee_name }}</span>
                        </td>
                        
                        <td class="align-middle fw-bold">
                            <span>{{ overtime.reason_name }}</span>
                          </td>
                        <td class="align-middle fw-bold">
                          <span>{{ overtime.amount }}</span>
                        </td>
                        <td class="align-middle fw-bold">
                            <span>{{ overtime.due_date }}</span>
                          </td>
                       
                        <td class="align-middle">
                          <div class="d-flex justify-content-center align-items-center">
                            <DetailButton
                            class="me-2"
                            @details="openDetailsDialog(overtime)"
                          ></DetailButton>
                            <EditButton class="me-2" @edit="openUpdate(overtime)"></EditButton>
                            <DeleteButton @delete="openDeleteDialogSingle(overtime.id,4)"></DeleteButton>
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
  
      <DetailsDialog :display="displayDetailsDialog" @hide="closeDetailsDialog" :header="$t('dialog.header.details')">
        <div class="row">
          <div class="col-md-12">
              <div class="table-responsive">
                  <table class="table table-borderless text-nowrap mb-0">
                      <tbody>
                          <tr v-for="(value,key) in recordDetails" :key="key">
                              <td class="">
                                {{$t(`Overtime.key.${key}`)}}
                              </td>
                              <td class="">
                                  <span v-if="!value" class="text-muted">------</span>
                                  <span v-if="key!=='status'">{{value}}</span>
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
  <i18n src="@/lang/erp/overtime/overtime.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  import EditButton from "@/components/global/utilities/EditButton.vue"
  import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
  import DetailButton from "@/components/global/utilities/DetailButton.vue";
  import Form from '@/components/erp/HR/overtime/overtime/Form.vue';
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
  import { mapGetters,mapActions  } from 'vuex'
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  export default {
    mixins:[pagination,toast],
    components: {
      Base,
      NoResults,
      EditButton,
      DeleteButton,
      DetailButton,
      Form,
      DeleteDialog,
      DetailsDialog,
    },
    data() {
      return {
        displayForm:false,
        due_date:"",
        form: {
          employee:"",
          amount:"",
          reason :"",
          due_date:""
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
        recordDetails:null,
        searchQuery: {
          employee: "",
          due_date :""
        },
        isPaginating: false,
        isSearching: false,
        searching: false,
      };
    },
    computed: {

   
      
      ...mapGetters("erp/hr/overtime", {
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
      overtimes() {
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
      if (!this.overtimes.length > 0){
        this.list()
      }
    },
    methods: {
      selectDate(event) {
      this.searchQuery.due_date = this.$moment(event).format("YYYY-MM-DD");
    },
      ...mapActions("erp/hr/overtime",
      ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError"]),
      /////////////////////////////////////////
      selectAllRecords() {
        this.selected = [];
        if (!this.selectAll) {
          for (let i in this.overtimes) {
            this.selected.push(this.overtimes[i].id);
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
        item["reason"] = item.reason_id
        item["employee"] = {"name":item.employee_name,"id":item.employee_id}
        this.form={...item};
        this.openForm();
      },
      resetForm(){
        this.form={
          employee:"",
          amount:"",
          reason :"",
          due_date:""
        }
        this.isUpdating =false;
        this.closeForm();
        this.upsertResponse=null;
        this.upsertError=null;
      },
      create(){
        this.$store.dispatch("erp/hr/overtime/create", this.form)
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
        this.$store.dispatch("erp/hr/overtime/update", this.form)
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
      openDeleteDialogSingle(id,status) {
        this.openDeleteDialog();
        this.statusAction = status;
        this.selected =[];
        this.selected.push(id);
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
        this.$store.dispatch("erp/hr/overtime/delete", {'selected':this.selected,'action':this.statusAction})
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
            // this.fetchAll()
          })
          .catch((err) => {
            // console.log(err)
            const summery = err.statusText; 
            const details =  err.data.message;
            this.errorToast(summery,details)
          })
      },
      ///////////////// DETAILS /////////////////////////////
       closeDetailsDialog(){
         this.recordDetails = null;
         this.displayDetailsDialog = false;
       },
       openDetailsDialog(record) {
        let dateOfCreation = new Date(record.created_at);
        record.created_at = dateOfCreation.toLocaleDateString();
        const {due_date,amount,reason_name,created_at} = record
        this.recordDetails = {due_date,amount,reason_name,created_at};
        this.displayDetailsDialog = true;
       }, 
       list() {
        let params = { 
          pageNumber:this.pagination.pageNumber+1,
          rows:this.pagination.rows,
          employee: "",
          due_date :"",
          pk : "",
        }
        if(this.isSearching){
          params.pageNumber = 1
          params.employee = this.searchQuery.employee
          params.due_date = this.searchQuery.due_date
        }
         this.$store.dispatch("erp/hr/overtime/list", params)
         .then(() => { 
  
          if (!this.isPaginating){
            this.pagination.offset = 0;
            this.pagination.pageNumber = 0;
          }
            this.isSearching = false;
            this.isPaginating= false;
         });
       },
       search(){
        if(this.searchQuery.due_date == 'Invalid date'){
          this.searchQuery.due_date = ""
        }
        if (this.searchQuery.employee || this.searchQuery.due_date) {
          this.isSearching = true;
          this.list();
        } 
        else {
          this.infoToast(this.$t("toast.search.summery"),this.$t('toast.search.details'))
        }
      },
  
      fetchAll() {
        this.searchQuery.employee = ""
        this.searchQuery.due_date = ""
        this.due_date = ""
        
        this.list();
      },
      onPage(event) {
        this.isPaginating= true;
        this.pagination.pageNumber = event.page;
        this.list();
      },
  
    },
  };
  </script>
  <style></style>
  
  