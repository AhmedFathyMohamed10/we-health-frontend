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
      </div>  -->
      <div class="search-wrapper" v-if="selectedNodeKey">
        <div
          class="d-flex align-items-center flex-wrap flex-sm-nowrap justify-content-between gap-2 my-2"
        >
          <label for="" class="mb-0">{{ $t('btns.search') }}</label>
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
              v-model="searchQuery.account_name_en"
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
                      <input
                        type="checkbox"
                        v-model="selectAll"
                        @click="selectAllRecords"
                        :binary="true"
                      />
                    </th>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th>
                      {{ $t("form.account_name_en.label")
                      }}
                    </th>

                    <th scope="col">{{ $t("form.account_type.label") }}</th>
                    <th scope="col">
                      {{ $t("form.account_disposition.label") }}
                    </th>
                    <th scope="col">{{ $t("form.parent_account.label") }}</th>
                    <th scope="col">{{ $t("form.final_account.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(account, index) in accounts" :key="index">
                    <td class="align-middle">
                      <input
                        type="checkbox"
                        :value="account.code"
                        v-model="selected"
                        :binary="true"
                      />
                    </td>
                    <td class="align-middle">
                      {{ calculateTableIndexing(index) }}
                    </td>
                    <td class="align-middle">
                      <span>{{ account.account_name_en }}
                        <!-- <a
                          class="fw-bold"
                          href="javascript:void(0)"
                          @click="openDetailsDialog(account)"
                          >{{ account.account_name_en }}</a
                        > -->
                      </span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{
                        findLocaleOption(
                          account_type_options,
                          account.account_type
                        )
                      }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{
                        findLocaleOption(
                          account_disposition_options,
                          account.account_disposition
                        )
                      }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span>{{ account.accountParent_name }}</span>
                    </td>
                    <td class="align-middle fw-bold">
                      <span> {{ account.final_account_data.name_en }} </span>
                    </td>

                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openUpdate(account)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialogSingle(account.code, 4)"
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
      :account_type_options="account_type_options"
      :account_disposition_options="account_disposition_options"
      :displayForm="displayForm"
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
      :header="$t('dialog.header.moveAccount')"
      @cancelMove="closeMoveItem"
      @saveMove="moveItem"
    >
    </Move>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/accounts/account.json"></i18n>
<script>
import NoResults from "@/components/global/utilities/NoResults.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import Form from "@/components/erp_v2/accounts/account/Form.vue";
import Move from "@/components/erp_v2/accounts/account/Move.vue";

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
    isMovingItem: {
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

    getItems: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  watch: {
    displayFormItem() {
      if (this.displayFormItem == true) {
        if (this.dataEditPrimaryAccount) {
          this.openUpdate(this.dataEditPrimaryAccount);
        } else {
          if (
            this.selectedNodeKey !== null &&
            typeof this.selectedNodeKey === "object"
          ) {
            if (this.selectedNodeKey.hasOwnProperty("parent_account_id")) {
              this.form.parent_account = this.selectedNodeKey;
              this.form.final_account = this.selectedNodeKey.final_account_data;
            } else {
              this.form.final_account = this.selectedNodeKey;
            }
          }
          this.openForm();
        }
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
        if (value.hasOwnProperty("parent_account_id")) {
          ///////////////  Filter  ////////////////
          this.filterParentAccount = value.id;
          this.filterFinalAccount = "";
        } else {
          ///////////////  Filter  ////////////////
          this.filterParentAccount = "";
          this.filterFinalAccount = value.id;
        }
        this.list();
      } else {
        this.filterParentAccount = "";
        this.filterFinalAccount = "";
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
      editPrimaryAccount: this.isEditPrimaryAccount,
      filterParentAccount: "",
      filterFinalAccount: "",
      account_type_options: [
        { name: "Credit", en: "Credit", ar: "دائن", id: 1 },
        { name: "Debit", en: "Debit", ar: "مدين", id: 2 },
        { name: "Both", en: "Both", ar: "كلاهما", id: 3 },
      ],
      account_disposition_options: [
        { name: "Primary", en: "Primary", ar: "رئيسي", id: 1 },
        { name: "Secondary", en: "Secondary", ar: "فرعي", id: 2 },
      ],
      displayForm: false,
      displayFormMove:false,
      form: {
        account_name_en: "",
        account_name_ar: "",
        account_code: null,
        parent_account: null,
        final_account: null,
        account_type: null,
        account_disposition: null,
        description: "",
      },
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
        account_name_en: "",
      },
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    accounts() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    totalRecords() {
      if (this.listResponse) return this.listResponse.count;
      else return 0;
    },
    ...mapGetters("erp_v2/accounts/account", {
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
        account_name_en: this.isSearching
          ? this.searchQuery.account_name_en
          : "",
        final_account_id: this.filterFinalAccount,
        parent_account_id: this.filterParentAccount,
      };
    },
  },
  methods: {
    ...mapActions("erp_v2/accounts/account", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setStatusResponse",
      "setStatusError",
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
        for (let i in this.accounts) {
          this.selected.push(this.accounts[i].code);
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
      
      item["parent_account"] = item.parent_account_data;
      item["account_code"] = 12525;
      const {
        id,
        code,
        status,
        account_name_en,
        account_name_ar,
        account_code,
        parent_account,
        final_account = item.final_account_data,
        account_type,
        account_disposition,
        description,
        updated_at,
      } = item;
      this.form = {
        id,
        code,
        status,
        account_name_en,
        account_name_ar,
        account_code,
        parent_account,
        final_account,
        account_type,
        account_disposition,
        description,
        updated_at,
      };
      this.isUpdating = true;
      this.openForm();
    },
    resetForm() {
      this.form = {
        account_name_en: "",
        account_name_ar: "",
        account_code: null,
        parent_account: null,
        final_account: null,
        account_type: null,
        account_disposition: null,
        description: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$emit('setSelected', this.form.final_account);
      this.$store
        .dispatch("erp_v2/accounts/account/create", this.form)
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
      this.$store
        .dispatch("erp_v2/accounts/account/update", this.form)
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
      if (this.selected.length) {
        this.actionStatus=action;
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
        .dispatch("erp_v2/accounts/account/changeStatus", {
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
    ////////////////////////////////

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
        .dispatch("erp_v2/accounts/account/move", {
          final_account: data,
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
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      const {
        account_name_en,
        accountParent_name,
        finalAccount_name,
        accountCode,
        typeAccount,
        natureOfTheAccount,
        updated_at,
        description,
      } = record;
      this.recordDetails = {
        account_name_en,
        accountParent_name,
        finalAccount_name,
        accountCode,
        typeAccount,
        natureOfTheAccount,
        updated_at,
        description,
      };
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch("erp_v2/accounts/account/list", this.filterParams)
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
      if (this.filterParams.account_name_en) {
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
