<template>
  <div class="shift-definition">
  <EditDialog 
    :display="display" 
    @close="cancelForm"
    :min-width="'80'"
    :max-width="'100'"
    :header="header"
    :footer="false"
    >
      <Base>
        <div class="d-flex flex-wrap justify-content-between gap-2">
          <div class="d-flex gap-2 align-items-center">
            <label class=""> {{ $t("btns.search") }} </label>
            <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
              <i class="pi" :class="[isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',]"></i>
              <InputText
                type="text"
                v-model="searchQuery.name"
                :placeholder="$t('btns.search')"
                @keyup.enter="search"
              />
            </span>
            <div>
              <button class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="search" v-if="!isSearch">
                <i class="fa fa-search fa-md" aria-hidden="true"></i>
              </button>
              <button class="btn btn-icon rounded-circle btn-secondary-gradient" @click="fetchAll"  v-if="isSearch">
                <i class="pi pi-undo fa-md"></i>
              </button>
            </div>
            <div class="d-flex gap-1">
              <span>{{ $t("messages.resultsfound") }} </span>
              <Badge class="bg-success-gradient" :value="totalRecords"></Badge>
            </div>
          </div>
          <div class="">     
            <button class="btn btn-pill btn-success-gradient" @click="openForm">
              <span><i class="fa fa-plus fa-md"></i> </span>
              <span class="mx-2">{{ $t("btns.add") }}</span>
            </button>   
          </div>
        </div>
      </Base>
        <div class="table-wrapper">
      <Base>
        <div v-if="listLoading">
          <DataTable :value="[{}, {}, {}]">
            <Column field="id" header="#">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
            <Column field="name" header="name">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="new-salary" header="New Salary">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="due-date" header="Due Date">
              <template #body>
                <Skeleton></Skeleton>
              </template>
          </Column>
         
          </DataTable>
        </div>
        <div class="row" v-if="totalRecords">
          <div class="col-12" v-if="selected.length > 0">
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
                    <th scope="col">{{ $t("form.shift_day_from.label") }}</th>
                    <th scope="col">{{ $t("form.shift_day_to.label") }}</th>
                    <th scope="col">{{ $t("form.work_hour_from.label") }}</th>
                    <th scope="col">{{ $t("form.work_hour_to.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in shiftDefinitions" :key="index">
                    <td class="align-middle">
                      <input
                        type="checkbox"
                        :value="item.code"
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
                          @click="openDetailsDialog(item)"
                          >{{ item.name }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle">{{ item.shift_day_from }}</td>
                    <td class="align-middle">{{ item.shift_day_to }}</td>
                    <td class="align-middle"> {{item.work_hour_from }}</td>

                    <td class="align-middle">{{ item.work_hour_to }}</td>
                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(item)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(item.code, 4)"
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
        <div v-if="!totalRecords && !listLoading">
          <NoResults></NoResults>
        </div>
      </Base>
        </div>
    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :displayForm="displayForm"
      :isUpdating="isUpdating"
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
    <DetailsDialog
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :header="$t('dialog.header.details')"
    >
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-borderless text-nowrap mb-0">
              <tbody>
                <tr v-for="(value, key) in recordDetails" :key="key">
                  <td class="">
                    {{ $t(`shiftDefinition.key.${key}`) }}
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="key != 'updated_at'"
                      >{{ value }}</span
                    >
                    <span v-if="key == 'updated_at'">{{
                      $moment(value).format("MMMM Do YYYY, h:mm:ss a")
                    }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DetailsDialog>
  </EditDialog>
</div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/shiftDefinition.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";

import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/hr/shiftDefinition/Form.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
import moment from "moment";
export default {
name: "shift-definition",
mixins: [pagination, toast],
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
  display() {
    if(this.display){
      if (!this.shiftDefinitions.length > 0) {
        this.list();
      }
    }
  }
},
components: {
  Base,
  NoResults,
  EditButton,
  DeleteButton,
  DeleteDialog,
  DetailsDialog,
  EditDialog,
  Form,
},
data() {
  return {
    displayForm: false,
    form: {
      name:"",
      shift_day_from: null,
      shift_day_to: null,
      work_hour_from: null,
      work_hour_to: null,
    },
    isUpdating: false,
    ////////////////////
    displayDeleteDialog: false,
    codeToDelete: null,
    selected: [],
    actionStatus:null,
    selectAll: false,
    displayStatusDialog: false,
    displayDetailsDialog: false,
    recordDetails: null,
    searchQuery: {
      name: "",
    },
    isPaginating: false,
    isSearching: false,
    isSearch: false,
  };
},
computed: {
    listResponse() {
      return this.getListResponse;
    },
    shiftDefinitions() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp_v2/hr/shiftDefinition", {
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
      };
    },
  },
  // mounted() {
  //   if (!this.shiftDefinitions.length > 0) {
  //     this.list();
  //   }
  // },
  methods: {
    ...mapActions("erp_v2/hr/shiftDefinition", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
    ]),
    cancelForm(){
      this.$emit('close');
    },
    /////////////////////////////////////////  
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.shiftDefinitions) {
          this.selected.push(this.shiftDefinitions[i].code);
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
    },
    openUpdate(item) {
      // if (item['work_hour_from']){
      //   item['work_hour_from']=this.$moment(item.work_hour_from).format("HH:mm")
      // }
      // if (item['shift_day_from']){
      //   item['shift_day_from']=this.$moment(item.shift_day_from).format("YYYY-MM-DD")
      // }
      const {
        id,
        code,
        name,
        shift_day_from ,
        shift_day_to,
        work_hour_from,
        work_hour_to,
        updated_at,
      } = item;
      this.form = {
        id,
        code,
        name,
        shift_day_from,
        shift_day_to,
        work_hour_from,
        work_hour_to,
        updated_at,
      };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        name:"",
        shift_day_from: null,
        shift_day_to: null,
        work_hour_from: null,
        work_hour_to: null,
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      if (this.form.shift_day_from) {
        this.form.shift_day_from = this.$moment(this.form.shift_day_from).format("YYYY-MM-DD" );
      }
      if (this.form.shift_day_to) {
        this.form.shift_day_to = this.$moment(this.form.shift_day_to).format("YYYY-MM-DD");
      }
      if (this.form.work_hour_from) {
        this.form.work_hour_from = this.$moment(this.form.work_hour_from).format("hh:mm:ss");
      }
      if (this.form.work_hour_to) {
        this.form.work_hour_to = this.$moment(this.form.work_hour_to).format("hh:mm:ss");
      }
      this.$store
        .dispatch("erp_v2/hr/shiftDefinition/create", this.form)
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
      
      if (this.form.shift_day_from) {
        this.form.shift_day_from = this.$moment(this.form.shift_day_from).format("YYYY-MM-DD" );
      }
      if (this.form.shift_day_to) {
        this.form.shift_day_to = this.$moment(this.form.shift_day_to).format("YYYY-MM-DD");
      }
      if(this.$moment(this.form.work_hour_from).isValid()){
        this.form.work_hour_from = this.$moment(this.form.work_hour_from, 'hh:mm:ss', true).format('hh:mm:ss');
      }
      if(this.$moment(this.form.work_hour_to).isValid()){
        this.form.work_hour_to = this.$moment(this.form.work_hour_to, 'hh:mm:ss', true).format('hh:mm:ss');
      }
      this.$store
        .dispatch("erp_v2/hr/shiftDefinition/update", this.form)
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
      this.actionStatus=null
      this.selected = [];
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
        .dispatch("erp_v2/hr/shiftDefinition/changeStatus", {"action":this.actionStatus,"selected":this.selected})
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
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      const {
        name,
        shift_day_from,
        shift_day_to,
        work_hour_from,
        work_hour_to,
        updated_at,
      } = record;
      this.recordDetails = {
        name,
        shift_day_from,
        shift_day_to,
        work_hour_from,
        work_hour_to,
        updated_at,
      };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store.dispatch("erp_v2/hr/shiftDefinition/list", this.filterParams).then(() => {
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
      this.isSearch = true;
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
      this.isSearch = false;
      this.searchQuery = { name: "" };
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


