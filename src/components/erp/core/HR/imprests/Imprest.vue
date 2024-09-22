<template>
    <div class="Imprest">
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
              <h4>{{ $t('Imprest.header') }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.due_date.label") }} </label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                  <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.due_date"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
           
            <div class="col-md-2 d-flex align-items-end">
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
            <DataTable :value="[{}, {}, {}, {},{}]">
              <Column field="id" header="#">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
            
              <Column field="due_date" header="due_date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="amount" header="Amount">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="reason" header="Reason">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="liability_amount" header="Liability Amount">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="status" header="Status">
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
                        
                        <th scope="col">{{ $t("table.thead.count") }}</th>
                        <th scope="col">{{ $t("form.due_date.label") }}</th>
                        <th scope="col">{{ $t("form.amount.label") }}</th>
                        <th scope="col">{{ $t("form.liability_amount.label") }}</th>
                        <th scope="col">{{ $t("form.reason.label") }}</th>
                        <th scope="col">{{ $t("form.status.label") }}</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(imprest, index) in imprests" :key="index">
                       
                        <td class="align-middle">
                          {{ calculateTableIndexing(index) }}
                        </td>
                        
                        <td class="align-middle fw-bold">
                          <span>{{ imprest.due_date }}</span>
                        </td>
                        <td class="align-middle fw-bold">
                          <div>
                            {{ imprest.amount }}
                          </div>
                        </td>
                        <td  class="align-middle fw-bold">
                          <div>
                            {{ imprest.liability_amount }}
                          </div>
                        </td>
                        <td class="align-middle fw-bold">
                          <span>
                              {{ imprest.reason }}
                          </span>
                        </td>
                        <td class="align-middle">
                          <span v-if="imprest.status == 1">
                            <Tag severity="success" :value="$t('status.approved')" rounded></Tag>
                          </span>
                          <span v-if="imprest.status == 2">
                            <Tag severity="danger" :value="$t('status.rejected')" rounded></Tag>
                          </span>
                          <span v-if="imprest.status == 3">
                            <Tag severity="warning" :value="$t('status.under_review')" rounded></Tag>
                          </span>
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
  
      <Form v-model="form" :displayForm="displayForm" @close="resetForm" @cancel="resetForm" @save="upsert" :error="upsertError" :header="isUpdating?$t('dialog.header.edit'):$t('dialog.header.new')"> 
      </Form>
      
     
  
      <DeleteDialog
        :display="displayDeleteDialog"
        @cancel="closeDeleteDialog"
        @delete="deleteRecords"
        :isLoading="deleteLoading"
  
      />
  
      <DetailsDialog :display="displayDetailsDialog" @hide="closeDetailsDialog" :header="$t('dialog.header.details')"  :containerStyle="{'min-width': '50vw'}">
        <div class="row">
          <div class="col-md-12">
              <div class="table-responsive">
                  <table class="table table-borderless text-nowrap mb-0">
                      <tbody>
                          <tr v-for="(value,key) in recordDetails" :key="key">
                              <td class="">
                                {{$t(`Imprest.key.${key}`)}}
                              </td>
                              <td class="">
                                <span v-if="!value" class="text-muted">------</span>
                                <span v-if="key!=='status'">{{value}}</span>
                                <div v-if="key=='status'">
                                  <span v-if="value=='1'">
                                    <Tag severity="success" :value="$t('status.approved')" rounded></Tag>
                                  </span>
                                  <span v-if="value=='2'">
                                    <Tag severity="danger" :value="$t('status.rejected')" rounded></Tag>
                                  </span>
                                  <span v-if="value=='3'">
                                    <Tag severity="warning" :value="$t('status.under_review')" rounded></Tag>
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
  <i18n src="@/lang/erp/hr/imprest/imprests.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  // import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
  import Form from '@/components/erp/HR/imprest/Form.vue';
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
  import { mapGetters,mapActions  } from 'vuex'
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  import {urls} from "@/backend/urls.js";
  export default {
    mixins:[pagination,toast],
    components: {
      Base,
      NoResults,
      // DeleteButton,
      Form,
      DeleteDialog,
      DetailsDialog,
    },
    data() {
      return {
        displayForm:false,
        form: {
          reason:"",
          due_date:"",
          amount:""
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
          due_date:"",
         
        },
        isPaginating: false,
        isSearching: false,
        searching: false,
      };
    },
    computed: {
    
      ...mapGetters("erp/hr/imprests", {
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
      listResponse(){
        return this.getListResponse
      },
      imprests(){
        if(this.listResponse)
         return this.listResponse.results;
        else return {};
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
      filterParams(){
        return {
          pageNumber:this.pagination.pageNumber+1,
          rows:this.pagination.rows,
          due_date:this.isSearching?this.searchQuery.due_date : "",
        }
      },
      totalRecords() {
        if(this.listResponse)
          return this.listResponse.count;
        else return 0
      },
    },
    mounted() { this.list()},
    methods: {
      ...mapActions("erp/hr/imprests",
      ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError","setForm"]),
      /////////////////////////////////////////
      selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.imprests) {
          this.selected.push(this.imprests[i].id);
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
     
      resetForm(){
        this.form={
          reason:"",
          due_date:"",
          amount:""
      },
        this.closeForm();
        this.upsertResponse=null;
        this.upsertError=null;
        this.isUpdating=false;
      },
      create(){
        this.$store.dispatch("erp/hr/imprests/create", this.form)
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
        this.selected = []
        this.selectAll = false;
        
      },
      openDeleteDialogSingle(agent) {
        this.openDeleteDialog();
        this.selected =[];
        this.selected.push(agent);
      },
      openDeleteDialogMultiple() {
        if (this.selected.length) {
          this.openDeleteDialog();
        } 
        else {
          this.infoToast(this.$t("toast.select.summery"),this.$t('toast.select.details'))
        }
      },
      deleteRecords() {
        this.statusAction= 4
        this.$store.dispatch("erp/hr/imprests/delete", this.selected)
        .then((res) => {
          if (this.selected.length == this.pagination.rows){
              this.fetchAll()
            }
            this.closeDeleteDialog();
            this.selected=[];
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
        const {due_date,amount,reason} = record
        this.recordDetails =  {due_date,amount,reason};
        this.displayDetailsDialog = true;
       }, 
       list() {
         this.$store.dispatch("erp/hr/imprests/list", this.filterParams)
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
        this.isSearching = true;
        if (this.filterParams.due_date ) {
          this.filterParams.pageNumber=1;
          this.list();
        } 
        else {
          this.infoToast(this.$t("toast.search.summery"),this.$t('toast.search.details'))
          this.isSearching = false;
        }
      },
  
      fetchAll() {
         this.searchQuery = { due_date: ""};
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
  