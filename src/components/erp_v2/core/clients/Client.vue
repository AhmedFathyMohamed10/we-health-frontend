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
      <div class="search-wrapper" v-if=" totalRecords ">
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
                  <tr v-for="(client, index) in clients" :key="index">
                    <td class="align-middle">
                      <input
                        type="checkbox"
                        :value="client.code"
                        v-model="selected"
                        :binary="true"
                      />
                    </td>
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span>
                        {{ client.name }}
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ client.group_data.name_en }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ client.gender }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ client.dob }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span> {{ client.phone_number }} </span>
                    </td>

                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(client)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(client.code, 4)"
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
      :paymentMethodOptions="paymentMethodOptions"
      :maritalStatusOptions="maritalStatusOptions"

      @close="resetForm"
      @cancel="resetForm"
      @save="upsert"
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    >
    </Form>
    <Move
      :isLoading="upsertLoading"
      :displayForm="displayFormMove"
      :header="$t('dialog.header.move')"
      @cancelMove="closeMoveItem"
      @saveMove="moveItem"
    >
    </Move>

    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="deleteRecords"
      :isLoading="deleteLoading"
    />
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/clients/client.json"></i18n>
<script>
const erp_v2 = "erp_v2/clients/";
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/clients/client/Form.vue";
import Move from "@/components/erp_v2/clients/client/Move.vue";

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
    isMoveItems: {
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
    isEditPrimaryAccount: {
      type: Boolean,
      default() {
        return false;
      },
    },
    dataEditPrimaryAccount: {
      type: Object,
    },

    selectedNodeKey: {
      type: Object,
    },

    isAllItem: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  watch: {
    displayFormItem() {
      if (this.displayFormItem == true) {
          if (
            this.selectedNodeKey !== null &&
            typeof this.selectedNodeKey === "object"
          ) {
            this.form.group = this.selectedNodeKey;
          }
          this.openForm();
      }
    },
    isDeleteItem(value) {
      if (value == true) {
        this.openDeleteDialogMultiple(4);
      }
    },
    isMoveItems(value) {
      if (value == true) {
        this.openMoveDialog();
      }
    },
    selectedNodeKey(value) {
      if (value !== null && typeof value === "object") {
        this.group_id = value.id;
        this.list();
      } else {
        this.group_id = "";
      }
    },
    isAllItem(value) {
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
    // Base,
  },
  data() {
    return {
      editPrimaryAccount: this.isEditPrimaryAccount,
      filterParentAccount: "",
      filterfinalAccount: "",
      displayForm: false,
      displayFormMove: false,
      // form: {
      //   company_name_en: null,
      //   company_name_ar: null,
      //   company_type: null,
      //   group: null,
      //   company_code: null,
      // },
      form: {
        userdata: null,
        name: "",
        group: null,
        gender: "",
        dob: null,
        profession: "",
        marital_status: null,
        phone_number: "",
        other_phone_number: "",
        home_phone_number: "",
        address: "",
        city: "",
        discount: null,
        profit: null,
        max_debit: null,
        insurance_name: "",
        card_name: "",
        member_id: "",
        plan: "",
        expiration_date: null,
        payment_method: null,
        files: null,
        serial: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        saved_files: [],
        uploaded_files: [],
      },
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
        { name: "Other", en: "Other", ar: "خنزير" },
      ],
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
      sortOrder: 1, // 1 for ascending, -1 for descending
      group_id: "",
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    clients() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    // sortedData() {
    //   const data = [...this.clients];
    //   if (this.sortKey) {
    //     data.sort((a, b) => {
    //       const aValue = a[this.sortKey];
    //       const bValue = b[this.sortKey];

    //       if (typeof aValue === "string" && typeof bValue === "string") {
    //         // Case-insensitive string comparison
    //         return (
    //           this.sortOrder *
    //           aValue.localeCompare(bValue, undefined, {
    //             numeric: true,
    //             sensitivity: "base",
    //           })
    //         );
    //       } else {
    //         // Numeric comparison for other types (including numbers)
    //         return this.sortOrder * (aValue - bValue);
    //       }
    //     });
    //   }
    //   return data;
    // },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters(`${erp_v2}`, {
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
        group_id: this.group_id,
      };
    },
  },
  methods: {
    ...mapActions(`${erp_v2}`, [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
    ]),
    ////////////////   Sort   //////////////////////
    toggleSort(key) {
      if (this.sortKey === key) {
        // Toggle the sort order if clicking on the same column
        this.sortOrder = -this.sortOrder;
      } else {
        // Set a new sort key and default to ascending order
        this.sortKey = key;
        this.sortOrder = 1;
      }
    },
    //////////////// Selected /////////////////////
    selectAllRecords() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.clients) {
          this.selected.push(this.clients[i].code);
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
      if (item.group_data) {
        item["group"] = item.group_data;
      }
      const {
        id,
        code,
        status,
        name,
        group,
        gender,
        dob,
        profession,
        marital_status,
        phone_number,
        other_phone_number,
        home_phone_number,
        address,
        city,
        discount,
        profit,
        max_debit,
        insurance_name,
        card_name,
        member_id,
        plan,
        expiration_date,
        treat_as,
        payment_method,
        files,
        serial,
        prevent_dealing,
        alert_dealing,
        prevent_give,
        alert_give,
        saved_files,
        uploaded_files,
        updated_at,
      } = item;
      this.form = {
        id,
        code,
        status,
        name,
        group,
        gender,
        dob,
        profession,
        marital_status,
        phone_number,
        other_phone_number,
        home_phone_number,
        address,
        city,
        discount,
        profit,
        max_debit,
        insurance_name,
        card_name,
        member_id,
        plan,
        expiration_date,
        payment_method,
        files,
        serial,
        treat_as,
        prevent_dealing,
        alert_dealing,
        prevent_give,
        alert_give,
        saved_files,
        updated_at,
        uploaded_files,
      };
      this.isUpdating = true;
      this.openForm();
    },

    resetForm() {
      this.form = {
        userdata: null,
        name: "",
        group: null,
        gender: "",
        dob: null,
        profession: "",
        marital_status: null,
        phone_number: "",
        other_phone_number: "",
        home_phone_number: "",
        address: "",
        city: "",
        discount: null,
        profit: null,
        max_debit: null,
        insurance_name: "",
        card_name: "",
        member_id: "",
        plan: "",
        expiration_date: null,
        payment_method: null,
        files: null,
        serial: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        saved_files: [],
        uploaded_files: [],
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },

    create() {
      this.form.group = this.form.group.id;
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
      let data = JSON.stringify(this.form);
      formData.append("data", data);
      this.$store
        .dispatch(`${erp_v2}create`, this.form)
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
      if (this.form.group){
        this.form.group=this.form.group.id
      }
      let formData = new FormData();
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      }
      formData.append("uploaded_files", []);
      let id = this.form.id;
      let clientData = {
        ...this.form,
        "deleted_files": []
      };
      delete this.form.saved_files;
      delete this.form.uploaded_files;
      let data = JSON.stringify(clientData);
      formData.append("data", data);

      this.$store
        .dispatch(`${erp_v2}update`, { id: id, data: formData })
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
      // this.selected = [];
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
        this.$emit("closeDeleteItem");
        this.infoToast(
          this.$t("toast.select.summery"),
          this.$t("toast.select.details")
        );
      }
    },
    deleteRecords() {
      this.$store
        .dispatch(`${erp_v2}delete`, {
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
    ///////////////// Move  //////////////////////
    closeMoveItem() {
      this.displayFormMove = false;
      this.$emit("closemoveItems");
    },
    openMoveDialog() {
      if (this.selected.length) {
        this.displayFormMove = true;
        this.$emit("closemoveItems");
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
        .dispatch(`${erp_v2}move`, {
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
    /////////////////////////////////
    list() {
      this.$store.dispatch(`${erp_v2}list`, this.filterParams).then(() => {
        if (this.isAllItem == true) {
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