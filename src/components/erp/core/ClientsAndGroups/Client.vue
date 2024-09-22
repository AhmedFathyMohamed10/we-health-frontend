<!-- <template>
  <div class="Client">
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
            <h4>{{ $t('client.header') }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-xxl-3">
            <div class="form-group">
              <label class="form-label"> {{ $t("form.name.label") }} </label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right']" >
                <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                <InputText
                  type="text"
                  v-model="searchQuery.name"
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
          <DataTable :value="[{}, {}, {}, {}, {},{},{},{}]">
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
            <Column field="mobile" header="Mobile">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="address" header="Address">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="discount_ratio" header="Discount_ratio">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="maximum_debt" header="maximum_debt">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="pricing_pattern" header="pricing_pattern">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="group" header="Group">
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
                  <div class="form-group me-2">
                    <button
                      class="btn btn-pill btn-danger-gradient"
                      @click="openDeleteDialogMultiple"
                    >
                      <i class="fa fa-trash"></i>
                      {{ $t("btns.delete") }}
                    </button>
                  </div>
                  <div class="form-group me-2">
                    <button
                      class="btn btn-pill btn-success-gradient"
                      @click="openStatusDialog(1)"
                    >
                      {{ $t("btns.active") }}
                    </button>
                  </div>
                  <div class="form-group me-2">
                    <button
                      class="btn btn-pill btn-warning-gradient"
                      @click="openStatusDialog(2)"
                    >
                      {{ $t("btns.suspended") }}
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
                      <th scope="col">{{ $t("form.name.label") }}</th>
                      <th scope="col">{{ $t("form.mobile.label") }}</th>
                      <th scope="col">{{ $t("form.address.label") }}</th>
                      <th scope="col">{{ $t("form.group.label") }}</th>
                      <th scope="col">{{ $t("form.discount_ratio.label") }}</th>
                      <th scope="col">{{ $t("form.maximum_debt.label") }}</th>
                      <th scope="col">{{ $t("form.pricing_pattern.label") }}</th>
                      <th scope="col">{{ $t("form.status.label") }}</th>
                      <th scope="col">{{ $t("table.thead.controls") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(client, index) in clients" :key="index">
                      <td class="align-middle">
                        <input
                          type="checkbox"
                          :value="client.id"
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
                            @click="openDetailsDialog(client)"
                            >{{ client.name }}</a
                          >
                        </span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ client.mobile }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ client.address }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ client.group_name }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ client.discount_ratio }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ client.maximum_debt }}</span>
                      </td>
                      <td class="align-middle fw-bold">
                        <span>{{ client.pricing_pattern }}</span>
                      </td>
                      <td class="align-middle">
                        <span v-if="client.status == 1">
                          <Tag severity="success" :value="$t('status.active')" rounded></Tag>
                        </span>
                        <span v-if="client.status == 2">
                          <Tag severity="warning" :value="$t('status.suspended')" rounded></Tag>
                        </span>
                      </td>
                      <td class="align-middle">
                        <div class="d-flex justify-content-center align-items-center">
                          <EditButton class="me-2" @edit="openUpdate(client)"></EditButton>
                          <DeleteButton @delete="openDeleteDialogSingle(client.id)"></DeleteButton>
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

    <Form v-model="form" :isLoading="upsertLoading" :displayForm="displayForm" @close="resetForm" @cancel="resetForm" @save="upsert" :error="upsertError" :header="isUpdating?$t('dialog.header.edit'):$t('dialog.header.new')"> 
    </Form>
    <EditDialog 
      :display="displayStatusDialog" 
      @close="closeStatusDialog" 
      @cancel="closeStatusDialog" 
      @save="changeStatus" 
      :isLoading="statusLoading"
      :header="$t('dialog.header.status')"
    >
    <div class="row">
      <div class="col-12">
        <div class="msg">
          <h4 class="text-center">{{$t('messages.status') }}</h4>
        </div>
      </div>
    </div>
    </EditDialog>

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
                              {{$t(`client.key.${key}`)}}
                            </td>
                            <td class="">
                                <span v-if="!value" class="text-muted">------</span>
                                <span v-if="key!=='status'">{{value}}</span>
                                <div v-if="key=='status'">
                                  <span v-if="value==1">
                                    <Tag severity="success" :value="$t('status.active')" rounded></Tag>
                                  </span>
                                  <span v-if="value==2">
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
<i18n src="@/lang/erp/clients/Client.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import Form from '@/components/erp/clients/Form.vue';
import EditDialog from '@/components/global/utilities/EditDialog.vue';
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
    Form,
    EditDialog,
    DeleteDialog,
    DetailsDialog,
  },
  data() {
    return {
      displayForm:false,
      form: {
        name: "",
        mobile: "",
        address: "",
        group: "",
        discount_ratio: "",
        maximum_debt: "",
        job_title: "",
        pricing_pattern: "",
        status: 1,
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
        name: "",
      },
      isPaginating: false,
      isSearching: false,
      searching: false,
      dataName:{}
    };
  },
  computed: {
    ...mapGetters("erp/clients", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getDeleteResponse: "getDeleteResponse",
      deleteLoading: "getDeleteLoading",
      getDeleteError: "getDeleteError",

      getStatusResponse: "getStatusResponse",
      statusLoading: "getStatusLoading",
      getStatusError: "getStatusError",
    }),
    listResponse() {
      return this.getListResponse;
    },
    clients() {
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

    statusResponse: {
      get() {
        return this.getStatusResponse;
      },
      set(value) {
        this.setStatusResponse(value);
      },
    },
    statusError: {
      get() {
        return this.getStatusError;
      },
      set(value) {
        this.setStatusError(value);
      },
    },
    
  },
  mounted() {
    this.list()
   },
  methods: {
    ...mapActions("erp/clients",
    ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError","setStatusResponse","setStatusError"]),
    /////////////////////////////////////////

    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.clients) {
          this.selected.push(this.clients[i].id);
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
      console.log(item)
      item["group"] = item.group_id
      this.isUpdating=true;
      this.form={...item};
      this.openForm();
    },
    resetForm(){
      this.form={
        name: "",
        mobile: "",
        address: "",
        group: "",
        discount_ratio: "",
        maximum_debt: "",
        job_title: "",
        pricing_pattern: "",
        status: 1,
      }
      this.isUpdating =false;
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.form['nameValue']=this.form.name
      if (typeof this.form.name === 'object'){
        this.form.name=this.form.name.fullname
      }
      else if (typeof this.form.name === 'string'){
        this.form.name=this.form.name
      }
      this.$store.dispatch("erp/clients/create", this.form)
      .then((res) => {
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        console.log(err)
        const summery = err.statusText; 
        const details =  err.response.data;
        this.errorToast(summery,details)
      })
    },
    update(){
      this.$store.dispatch("erp/clients/update", this.form)
      .then((res) => {
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
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
    //////////// STATUS /////////////////////
    openStatusDialog(event) {
      if (this.selected.length) {
        this.statusAction = event;
        this.displayStatusDialog = true;
      } 
      else {
        this.infoToast(this.$t("toast.select.summery"),this.$t('toast.select.details'))
      }
    },
    closeStatusDialog(){
      this.statusAction = "";
      this.displayStatusDialog = false;
      this.selected = []
      this.selectAll = false;
    },
    changeStatus() {
        this.$store.dispatch("erp/clients/changeStatus",{action:this.statusAction,selected:this.selected})
        .then((res) => {
          this.closeStatusDialog();
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
        })
        .catch((err) => {
          const summery = err.statusText; 
          const details =  err.data.message;
          this.errorToast(summery,details)
        })
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
    openDeleteDialogSingle(code) {
      this.openDeleteDialog();
      this.selected =[];
      this.selected.push(code);
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
      this.$store.dispatch("erp/clients/delete", this.selected)
      .then((res) => {
          this.closeDeleteDialog();
          this.selected=[];
          const summery = res.statusText; 
          const details =  res.data.message;
          this.successToast(summery,details)
          this.fetchAll()
        })
        .catch((err) => {
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
      console.log(record)
      let dateOfCreation = new Date(record.created_at);
      record.created_at = dateOfCreation.toLocaleDateString();
      const {name,mobile,address,group_name,discount_ratio,maximum_debt,pricing_pattern,status,created_at} =record
      this.recordDetails = {name,mobile,address,group_name,discount_ratio,maximum_debt,pricing_pattern,status,created_at};
      this.displayDetailsDialog = true;
     }, 

     list() {
      let params = { 
        pageNumber:this.pagination.pageNumber+1,
        rows:this.pagination.rows,
        name:""
      }
      if(this.isSearching){
        params.pageNumber = 1
        params.name = this.searchQuery.name
      }
       this.$store.dispatch("erp/clients/list", params)
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
      if (this.searchQuery.name) {
        this.isSearching = true;
        this.list();
      } 
      else {
        this.infoToast(this.$t("toast.search.summery"),this.$t('toast.search.details'))
      }
    },

    fetchAll() {
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



 -->
