<template>
    <div class="days-off">
        <EditDialog 
        :display="display" 
        @close="cancelForm"
      
        :header="header"
        :footer="false"
        >
      <div class="search-wrapper my-2">
        <Base>
         
          <div class="row">
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.from_date.label") }} </label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                  <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.from_date"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-4 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.to_date.label") }} </label>
                <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                  <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                  <InputText
                    type="text"
                    v-model="searchQuery.to_date"
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
         
        </Base>
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
      <div class="table-wrapper">
        <Base>
          <div v-if="listLoading">
            <DataTable :value="[{}, {}, {}, {}, {}]">
              <Column field="id" header="#">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
            
              <Column field="from_date" header="from_date">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
              <Column field="to_date" header="to_date">
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
                <div class="col-12 mb-2" >
                  <div class="d-flex justify-content-between flex-wrap">
                    <div class="actions d-flex flex-wrap">
                      <div class="form-group me-2" v-if="selected.length > 0">
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
                      <span>{{ $t("messages.resultsfound") }} </span>
                      <Badge severity="success" :value="totalRecords"></Badge>
                    </div>
  
                  </div>
                </div>
                <!-- <div class="d-flex justify-content-between flex-wrap">
                  <div class="actions d-flex flex-wrap">
                  </div>
                  <div class="result">
                      <span>{{ $t('messages.resultsfound') }} </span> 
                      <Badge severity="success" :value="totalRecords"></Badge>
                  </div>
                </div> -->
  
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
                        <th scope="col">{{ $t("form.reason.label") }}</th>
                        <th scope="col">{{ $t("form.from_date.label") }}</th>
                        <th scope="col">{{ $t("form.to_date.label") }}</th>
                        <th scope="col">{{ $t("form.status.label") }}</th>
                        <th scope="col" >{{ $t("table.thead.controls") }}</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(vacation, index) in vacations" :key="index">
                        <td class="align-middle">
                          <input v-if="vacation.status == 5"
                            type="checkbox"
                            :value="vacation.code"
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
                              @click="openDetailsDialog(vacation)"
                              >{{ vacation.reason }}</a
                            >
                          </span>
                        </td>
                        <td class="align-middle fw-bold">
                          <span>{{ vacation.from_date }}</span>
                        </td>
                        <td class="align-middle">
                          <div>
                            {{ vacation.to_date }}
                          </div>
                        </td>
                        <td class="align-middle">
                          <span v-if="vacation.status == 1">
                            <Tag severity="success" :value="$t('status.approved')" rounded></Tag>
                          </span>
                          <span v-if="vacation.status == 2">
                            <Tag severity="danger" :value="$t('status.rejected')" rounded></Tag>
                          </span>
                          <span v-if="vacation.status == 3">
                            <Tag severity="warning" :value="$t('status.under_review')" rounded></Tag>
                          </span>
                          <span v-if="vacation.status == 5">
                            <Tag severity="info" :value="$t('status.suspended')" rounded></Tag>
                          </span>
                        </td>
                        <td class="align-middle">
                          <div  v-if="vacation.status == 5"
                            class="d-flex justify-content-center align-items-center"
                          >
                            <EditButton class="" @edit="openUpdate(vacation)"/>
                            <DeleteButton @delete="openDeleteDialogSingle(vacation.code, 4)"/>
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
  
      <Form v-model="form" :displayForm="displayForm" :isUpdating="isUpdating" @close="resetForm" :error="upsertError" @cancel="resetForm" @save="upsert" :dayOffTypeOptions="dayOffTypeOptions" :header="isUpdating?$t('dialog.header.edit'):$t('dialog.header.new')"> 
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
                                {{$t(`Vacation.key.${key}`)}}
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
      <template #custom-footer>
        <Button
          class="btn btn-pill btn-secondary-gradient"
          :label="$t('btns.send')"
          icon="pi pi-send"
          :iconPos="locale == 'ar' ? 'right' : 'left'"
          @click="sendToHr"
        />
      </template>
    </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp_v2/hr/daysOff.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  // import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
  import EditDialog from "@/components/global/utilities/EditDialog.vue";
//   import Form from '@/components/erp/HR/vacations/Form.vue';
import Form from "@/components/erp_v2/hr/employeeDayOff/Form.vue";
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
  import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
  import { mapGetters,mapActions  } from 'vuex'
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  import {urls} from "@/backend/urls.js";
  export default {
    mixins:[pagination,toast],
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
  watch:{
    display(value){
      if(value){
        this.fetchAll();
      }
    }
  },
    components: {
      Base,
      NoResults,
      // DeleteButton,
      EditDialog,
      Form,
      DeleteDialog,
      DetailsDialog,
      EditButton,
DeleteButton
    },
    data() {
      return {
        actionStatus:null,
        dayOffTypeOptions:[{
          id:1,en:"Casual vacation",ar:"اجازة عارضة"
        },
        {
          id:2,en:"Ordinary vacation",ar:"اجازة اعتيادية"
        },
        {
          id:3,en:"Sick leave",ar:"اجازة مرضية"
        },
        {
          id:4,en:"Leave without pay",ar:"اجازة بدون مرتب"
        },{
          id:5,en:"Special leave with pay",ar:"اجازة خاصة بمرتب"
        },
        {
          id:6,en:"Educational leave",ar:"اجازة دراسية"
        }],
        displayForm:false,
        form: {
          reason:"",
          from_date:"",
          to_date:"",
          type:null,
          
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
          from_date:"",
          to_date:""
         
        },
        isPaginating: false,
        isSearching: false,
        searching: false,
      };
    },
    computed: {
    
      ...mapGetters("erp_v2/hr/daysOff", {
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
      vacations(){
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
          from_date:this.isSearching?this.searchQuery.from_date : "",
          to_date:this.isSearching?this.searchQuery.to_date :""
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
        cancelForm(){
      this.$emit('close');
    },
      ...mapActions("erp_v2/hr/daysOff",
      ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError","setForm"]),

      findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item;
      else return value;
    },
      /////////////////////////////////////////
      selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.vacations) {
          this.selected.push(this.vacations[i].code);
        }
      }
    },
      //////// update ///////////////
      openUpdate(item) {
        item.type =  parseInt(item.type)
      const {
        id,
        code,
        reason,
       type,
        from_date,
        to_date,
        updated_at,
      } = item;
      this.form = {
        id,
        code,
        reason,
       type,
        from_date,
        to_date,
        updated_at,
      };
      console.log("this.form",this.form)
      this.isUpdating = true;
      this.openForm();
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
          from_date:"",
          to_date:""
      },
        this.closeForm();
        this.upsertResponse=null;
        this.upsertError = null;
        this.isUpdating=false;
      },
      create(){
        if (this.form.from_date) {
        this.form.from_date = this.$moment(this.form.from_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.to_date) {
        this.form.to_date = this.$moment(this.form.to_date).format(
          "YYYY-MM-DD"
        );
      }
        this.$store.dispatch("erp_v2/hr/daysOff/create", this.form)
        .then((res) => {
          this.resetForm();
          // console.log(res)
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
      },
      update() {
      if (this.form.from_date) {
        this.form.from_date = this.$moment(this.form.from_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.to_date) {
        this.form.to_date = this.$moment(this.form.to_date).format(
          "YYYY-MM-DD"
        );
      }
      this.$store
        .dispatch("erp_v2/hr/daysOff/update", this.form)
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
      this.actionStatus=null
      this.displayDeleteDialog = false;
    },
    openDeleteDialogSingle(codes, action) {
      this.openDeleteDialog();
      this.selected = [];
      this.selected.push(codes);
      this.actionStatus = action
    },
    openDeleteDialogMultiple(action) {
      if (this.selected.length) {
        this.actionStatus = action
        this.openDeleteDialog();
      } else {
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    deleteRecords() {
      this.$store
        .dispatch("erp_v2/hr/daysOff/delete", {"action":this.actionStatus,"selected":this.selected})
        .then((res) => {
          this.closeDeleteDialog();
          this.selected = [];
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
    },
      ///////////////// DETAILS /////////////////////////////
       closeDetailsDialog(){
         this.recordDetails = null;
         this.displayDetailsDialog = false;
       },
       openDetailsDialog(record) {
        const {from_date,to_date,reason} = record
        this.recordDetails =  {from_date,to_date,reason};
        this.displayDetailsDialog = true;
       }, 
       list() {
         this.$store.dispatch("erp_v2/hr/daysOff/list", this.filterParams)
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
        if (this.filterParams.from_date || this.filterParams.to_date) {
          this.filterParams.pageNumber=1;
          this.list();
        } 
        else {
          this.infoToast(this.$t("toast.search.summery"),this.$t('toast.search.details'))
          this.isSearching = false;
        }
      },
      sendToHr(){
        if (this.selected.length) {
        this.actionStatus = 3
      }
        this.$store
        .dispatch("erp_v2/hr/daysOff/sendToHr", {"action":this.actionStatus,"selected":this.selected})
        .then((res) => {
          this.actionStatus=null
          this.selected = [];
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText;
          const details = err.data.message;
          this.errorToast(summery, details);
        });
      },
      fetchAll() {
         this.searchQuery = { from_date: "", to_date: ""};
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
  