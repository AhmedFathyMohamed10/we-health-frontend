<template>
    <div class="Group-assets">
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
              <h4>{{ $t("typesOfRestrictions.header") }}</h4>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label"> {{ $t("form.bondName.label") }} </label>
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
                    v-model="searchQuery.bondName"
                    :placeholder="$t('btns.search')"
                    @keyup.enter="search"
                  />
                </span>
              </div>
            </div>
            <div class="col-md-2 d-flex align-items-end">
              <div class="form-group">
                <button
                  class="btn btn-pill btn-success-gradient"
                  @click.prevent="search"
                >
                  <span>
                    <i
                      class="pi"
                      :class="[
                        isSearching == true ? 'pi-spin pi-spinner' : 'pi-search',
                      ]"
                    ></i>
                  </span>
                  <span class="mx-2">{{ $t("btns.search") }}</span>
                </button>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12">
              <div class="d-flex flex-wrap">
                <div class="form-group mb-2 me-2">
                  <button
                    class="btn btn-pill btn-success-gradient"
                    @click="openForm"
                  >
                    <span><i class="fa fa-plus fa-md"></i> </span>
                    <span class="mx-2">{{ $t("btns.new") }}</span>
                  </button>
                </div>
                <div class="form-group mb-2 me-2">
                  <button
                    class="btn btn-pill btn-secondary-gradient"
                    @click="fetchAll"
                  >
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
              <Column field="bondName" header="BondName">
                <template #body>
                  <Skeleton></Skeleton>
                </template>
              </Column>
          
              <Column field="parentGroup" header="parentGroup">
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
                  <span>{{ $t("messages.resultsfound") }} </span>
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
                      <th scope="col">{{ $t("form.bondName.label") }}</th>
                      <th scope="col">{{ $t("form.bondType.label") }}</th>
                      <th scope="col">{{ $t("form.taxAccount.label") }}</th>
                      <th scope="col">{{ $t("form.correspondingAccount.label") }}</th>
                      <th scope="col">{{ $t("form.group.label") }}</th>
                      <th scope="col">{{ $t("table.thead.controls") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(typesOfRestriction, index) in typesOfRestrictions" :key="index">
                      <td class="align-middle">
                        <input
                          type="checkbox"
                          :value="typesOfRestriction.code"
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
                            @click="openDetailsDialog(typesOfRestriction)"
                            >{{ typesOfRestriction.bondName }}</a
                          >
                        </span>
                      </td>
                   
                      <td class="align-middle fw-bold">
                          <span>
                              {{ findLocaleOption(typeOption, typesOfRestriction.bondType) }}
                            </span>
                        </td>

                        <td class="align-middle fw-bold">
                          <span>{{ typesOfRestriction.correspondingAccount_data.name }}</span>
                        </td>
                        <td class="align-middle fw-bold">
                          <span>{{ typesOfRestriction.taxAccount_data.name }}</span>
                        </td>
                        <td class="align-middle fw-bold">
                          <span>{{ typesOfRestriction.group_name }}</span>
                        </td>
                      <td class="align-middle">
                        <div
                          class="d-flex justify-content-center align-items-center"
                        >
                          <EditButton
                            class="me-2"
                            @edit="openUpdate(typesOfRestriction)"
                          ></EditButton>
                          <DeleteButton
                            @delete="openDeleteDialogSingle(typesOfRestriction.code, 4)"
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
        :typeOption="typeOption"
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
                      {{ $t(`typesOfRestrictions.key.${key}`) }}
                    </td>
                    <td class="">
                      <span v-if="!value" class="text-muted">------</span>
                      <span
                        v-if="key != 'updated_at' && key!='bondType'"
                        >{{ value }}</span
                      >
                      <div v-if="key == 'bondType'">
                        <span>
                          {{ findLocaleOption(typeOption, value) }}
                        </span>
                      </div>
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
    </div>
  </template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/restrictions/TypesOfRestrictions.json"></i18n>
  <script>
  import Base from "@/components/global/utilities/Base.vue";
  import NoResults from "@/components/global/utilities/NoResults.vue";
  import EditButton from "@/components/global/utilities/EditButton.vue";
  import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
  import Form from "@/components/erp/restrictions/typesOfRestrictions/Form.vue";
  import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
  import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
  import { mapGetters, mapActions } from "vuex";
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  export default {
    mixins: [pagination, toast],
    components: {
      Base,
      NoResults,
      EditButton,
      DeleteButton,
      DeleteDialog,
      DetailsDialog,
      Form,
    },
    data() {
      return {
        displayForm: false,
        form: {
          bondName: "",
          bondType: "",
          group:"",
          taxAccount:"",
          correspondingAccount:""
        },
        typeOption: [
        { en: "Guaranteed under", ar: "سند قيد", id: "1" },
        { en: "Payment voucher", ar: "سند دفع", id: "2" },
        { en: "Daily bond", ar: "سند يومي", id: "3" },
        { en: "Catch Receipt", ar: "سند قبض", id: "4" },
        { en: "Introductory document", ar: "سند افتتاحي", id: "5" },

      ],
        isUpdating: false,
        ////////////////////
        displayDeleteDialog: false,
        codeToDelete: null,
        selected: [],
        selectAll: false,
        displayStatusDialog: false,
        displayDetailsDialog: false,
        recordDetails: null,
        searchQuery: {
          bondName: "",
        },
        isPaginating: false,
        isSearching: false,
      };
    },
    computed: {
      listResponse() {
        return this.getListResponse;
      },

      typesOfRestrictions() {
        if (this.listResponse) return this.listResponse.results;
        else return [];
      },

      totalRecords() {
        if (this.listResponse) return this.listResponse.count;
        else return 0;
      },

      ...mapGetters("erp/Restrictions/TypesOfRestrictions", {
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
          bondName: this.isSearching ? this.searchQuery.bondName : "",
        };
      },
    },
    mounted() {
      if (!this.typesOfRestrictions.length > 0) {
        this.list();
      }
    },
    methods: {
      ...mapActions("erp/Restrictions/TypesOfRestrictions", [
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
          for (let i in this.typesOfRestrictions) {
            this.selected.push(this.typesOfRestrictions[i].code);
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
        // item["group"] = item.group;
        const {
          id,
          code,
          bondName,
          bondType,
          group,
          taxAccount = item.taxAccount_data,
          correspondingAccount = item.correspondingAccount_data,
          updated_at
        } = item;
        this.form = {
          id,
          code,
          bondName,
          bondType,
          group,
          taxAccount,
          correspondingAccount,
          updated_at
        };
       
        // this.form = { ...item };
        this.isUpdating = true;
        this.openForm();
      },

      resetForm() {
        this.form = {
          bondName: "",
          bondType: "",
          group:"",
          taxAccount:"",
          correspondingAccount:""
        };
        this.closeForm();
        this.upsertResponse = null;
        this.upsertError = null;
      },

      create() {
        this.$store
          .dispatch("erp/Restrictions/TypesOfRestrictions/create", this.form)
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
          .dispatch("erp/Restrictions/TypesOfRestrictions/update", this.form)
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
        this.displayDeleteDialog = false;
      },
      openDeleteDialogSingle(codes, action) {
        this.openDeleteDialog();
        this.selected = [];
        this.selected.push(codes);
      },
      openDeleteDialogMultiple(action) {
        if (this.selected.length) {
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
          .dispatch("erp/Restrictions/TypesOfRestrictions/changeStatus", this.selected)
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
        console.log(record)
        const {
          bondName,
          bondType,
          groupName=record.group_name,
          correspondingAccount=record.correspondingAccount_data.name,
          taxAccount=record.taxAccount_data.name,
          updated_at,
        } = record;
        this.recordDetails = {
          bondName,
          bondType,
          groupName,
          correspondingAccount,
          taxAccount,
          updated_at,
        };
        this.displayDetailsDialog = true;
      },
      list() {
        this.$store.dispatch("erp/Restrictions/TypesOfRestrictions/list", this.filterParams).then(() => {
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
        if (this.filterParams.bondName) {
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
        this.searchQuery = { bondName: "" };
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
  