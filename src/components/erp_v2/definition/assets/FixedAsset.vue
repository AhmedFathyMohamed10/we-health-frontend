<template>
  <div class="account">
    <div class="table-wrapper">
      <!-- <div v-if="listLoading">
        <DataTable :value="[{}]">
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
          <Column field="typeAccount" header="Type Account">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="natureOfTheAccount" header="Nature Of The Account">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="accountParent" header="Account Parent">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
          <Column field="finalAccount" header="Final Account">
            <template #body>
              <Skeleton></Skeleton>
            </template>
          </Column>
        </DataTable>
      </div> -->
      <div class="search-wrapper" v-if="assets">
        <div class="d-flex align-items-center flex-wrap flex-sm-nowrap justify-content-between gap-2 my-2">
          <label for="" class="mb-0">{{ $t('btns.search') }}</label>
          <span :class="[
            locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
          ]">
            <i class="pi" :class="[
              isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
            ]"></i>
            <InputText type="text" v-model="searchQuery.name_en" :placeholder="$t('btns.search')"
              @keyup.enter="search" />
          </span>
          <button class="btn btn-icon rounded-circle btn-success-gradient" @click.prevent="search" v-if="!isSearch">
            <i class="fa fa-search fa-md" aria-hidden="true"></i>
          </button>
          <button class="btn btn-icon rounded-circle btn-secondary-gradient" @click="fetchAll"  v-if="isSearch">
            <i class="pi pi-undo fa-md"></i>
          </button>
          <div class="result d-flex align-items-center gap-1">
            <span>{{ $t("messages.resultsfound") }} </span>
            <Badge class="bg-success-gradient" :value="totalRecords"></Badge>
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
                      <input type="checkbox" v-model="selectAll" @click="selectAllRecords" :binary="true" />
                    </th>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th>
                      {{ $t("form.item_name_en.label")
                      }}
                    </th>

                    <th scope="col">{{ $t("form.item_name_ar.label") }}</th>
                    <th scope="col">{{ $t("form.group.label") }}</th>
                    <th scope="col">{{ $t("form.location.label") }}</th>
                    <th scope="col">{{ $t("form.serial.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(asset, index) in assets" :key="index">
                    <td class="align-middle">
                      <input type="checkbox" :value="asset.code" v-model="selected" :binary="true" />
                    </td>
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span>
                        <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(asset)"
                          >{{ asset.name_en }}</a
                        >
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ asset.name_ar }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      {{ asset.group_data.name_en }}
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ asset.location }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span> {{ asset.serial }} </span>
                    </td>

                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <EditButton class="me-2" @edit="openUpdate(asset)"></EditButton>
                        <DeleteButton @delete="openDeleteDialogSingle(asset.code, 4)"></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-12" :dir="[locale == 'ar' ? 'ltr' : '']">
            <Paginator :first.sync="pagination.offset" :rows.sync="pagination.rows" :totalRecords="totalRecords"
              :rowsPerPageOptions="pagination.rowsOptions" @page="onPage($event)"></Paginator>
          </div>
        </div>
      </div>
      <div v-if="!totalRecords && !listLoading">
        <NoResults></NoResults>
      </div>
    </div>
    <Form v-model="form" :isLoading="upsertLoading" :isUpdating="isUpdating" :displayForm="displayForm" @close="resetForm"
      @cancel="resetForm" @save="upsert" :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')">
    </Form>

    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRecords"
      :isLoading="deleteLoading" />
      <Move
      :isLoading="upsertLoading"
      :displayForm="displayFormMove"
      :header="$t('dialog.header.moveGroup')"
      @cancelMove="closeMoveItem"
      @saveMove="moveItem"
    >
    </Move>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/assets/fixedAsset.json"></i18n>
<script>
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import Move from "@/components/erp_v2/assets/fixedAsset/Move.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/assets/fixedAsset/Form.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
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
    selectedNodeKey: {
      type: Object,
    },
    getItems: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isMovingItem: {
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
          this.form.group = this.selectedNodeKey;
        }
        this.openForm();
      }
    },
    isDeleteItem() {
      if (this.isDeleteItem == true) {
        this.openDeleteDialogMultiple(4);
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
    isMovingItem(value) {
      if (value == true) {
        this.openMoveDialog();
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
      displayForm: false,
      displayStatusDialog: false,
      displayDetailsDialog: false,
      displayFormMove:false,
      group_selected_id: "",
      isUpdating: false,
      displayDeleteDialog: false,
      codeToDelete: null,
      selected: [],
      actionStatus: null,
      selectAll: false,
      recordDetails: null,
      searchQuery: {
        name_en: "",
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
    assets() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp_v2/assets/fixedAsset", {
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
        name_en: this.isSearching
          ? this.searchQuery.name_en
          : "",
        group_id: this.group_selected_id,
      };
    },
  },
  methods: {
    ...mapActions("erp_v2/assets/fixedAsset", [
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
        for (let i in this.assets) {
          this.selected.push(this.assets[i].code);
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
      if (item.supplier_data) {
        item["last_supplier"] = item.supplier_data;
      } 
      if (item.employee_data) {
        item["employee_custody"] = item.employee_data;
      } 
      
      if (item.group_data) {
        item["group"] = item.group_data;
      } else {
        item["group"] = item.group_id;
      }
        item["price"] = item.price_id;
    item["account"] = item.account_name;
    item.deleted_files=[]
    item.uploaded_files=[]

      const {
        code,
        id,
        name_en,
        name_ar,
        group,
        location,
        serial,
        account,
        description,
        purchasing_date,
        expiration_date,
        price,
        barcode,
        in_active,
        in_maintenance,
        total_destruction,
        last_supplier,
        employee_custody,
        last_purchasing_date_warranty,
        end_in_selection,
        end_in_value,
        last_purchasing_date_maintenance,
        maintenance_every_value,
        maintenance_every_selection,
        next_maintenance,
        uploaded_files,
        saved_files,
        deleted_files,
      } = item;
      this.form = {
        code,
        id,
        name_en,
        name_ar,
        group,
        location,
        serial,
        account,
        description,
        purchasing_date,
        expiration_date,
        price,
        barcode,
        in_active,
        in_maintenance,
        total_destruction,
        last_supplier,
        employee_custody,
        last_purchasing_date_warranty,
        end_in_selection,
        end_in_value,
        last_purchasing_date_maintenance,
        maintenance_every_value,
        maintenance_every_selection,
        next_maintenance,
        uploaded_files,
        saved_files,
        deleted_files,
      };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        name_en: "",
        name_ar: "",
        group: "",
        location: "",
        serial: 111111,
        account: null,
        description: "",
        purchasing_date: null,
        expiration_date: null,
        price: null,
        barcode: null,
        in_active: false,
        in_maintenance: false,
        total_destruction: false,
        last_supplier: null,
        employee_custody: null,
        last_purchasing_date_warranty: null,
        end_in_selection: null,
        end_in_value: null,
        last_purchasing_date_maintenance: null,
        maintenance_every_value: null,
        maintenance_every_selection: null,
        next_maintenance: "",
        uploaded_files: [],
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.form.group.parent = this.form.group.parent_data
      this.$emit('setSelected', this.form.group);
      if (this.form.last_purchasing_date_maintenance) {
        this.form.last_purchasing_date_maintenance = this.$moment(this.form.last_purchasing_date_maintenance).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.expiration_date) {
        this.form.expiration_date = this.$moment(this.form.expiration_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.purchasing_date) {
        this.form.purchasing_date = this.$moment(this.form.purchasing_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.last_purchasing_date_warranty) {
        this.form.last_purchasing_date_warranty = this.$moment(this.form.last_purchasing_date_warranty).format(
          "YYYY-MM-DD"
        );
      }
      
      let formData = new FormData();
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      } else {
        formData.append("uploaded_files", []);
      }

      delete this.form.uploaded_files;
      delete this.form.saved_files;
      delete this.form.deleted_files;
      
      let data = JSON.stringify({...this.form});
      formData.append("data", data);
      this.$store.dispatch("erp_v2/assets/fixedAsset/create", formData)
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
      if (this.form.last_purchasing_date_maintenance) {
        this.form.last_purchasing_date_maintenance = this.$moment(this.form.last_purchasing_date_maintenance).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.expiration_date) {
        this.form.expiration_date = this.$moment(this.form.expiration_date).format(
          "YYYY-MM-DD"
        );
      }

      if (this.form.purchasing_date) {
        this.form.purchasing_date = this.$moment(this.form.purchasing_date).format(
          "YYYY-MM-DD"
        );
      }

      if (this.form.last_purchasing_date_warranty) {
        this.form.last_purchasing_date_warranty = this.$moment(this.form.last_purchasing_date_warranty).format(
          "YYYY-MM-DD"
        );
      }

      let formData = new FormData();
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      }else{
        formData.append("uploaded_files", []);
      }
      let id = this.form.id;
      // let Data = {
      //   ...this.form,
      //   "deleted_files": []
      // };
      delete this.form.saved_files;
      delete this.form.uploaded_files;
      let data = JSON.stringify({...this.form});
      formData.append("data", data);




      this.$store
        .dispatch("erp_v2/assets/fixedAsset/update", {id: id, data: formData })
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
      this.actionStatus = action;
    },
    openDeleteDialogMultiple(action) {
      if (this.selected.length) {
        this.actionStatus = action;
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
        .dispatch("erp_v2/assets/fixedAsset/changeStatus", {
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
    ///////////////// Move /////////////////////////////
    closeMoveItem() {
      this.displayFormMove = false;
      this.$emit("closeMoveItems");
    },
    openMoveDialog() {
      if (this.selected.length) {
        this.displayFormMove = true;
        this.$emit("closeMoveItems");
      } else {
        this.$emit("closeMoveItems");
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    moveItem(data) {
      this.$store
        .dispatch("erp_v2/assets/fixedAsset/move", {
          group: data,
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
        .dispatch("erp_v2/assets/fixedAsset/list", this.filterParams)
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
      this.isSearch = true;
      if (this.filterParams.name_en) {
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
      this.searchQuery = {name_en: "" };
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