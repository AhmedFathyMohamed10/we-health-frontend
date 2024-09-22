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
            <h4>{{ $t("maintenance.header") }}</h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 col-xxl-3">
            <div class="form-group">
              <label class="form-label"> {{ $t("maintenance.key.name") }} </label>
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
            <Column field="name" header="Name">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>

            <Column field="value_maintenance" header="Value maintenance">
              <template #body>
                <Skeleton></Skeleton>
              </template>
            </Column>
          </DataTable>
        </div>
        <div class="row" v-if="totalRecords">
          <div class="col-12">
            <div class="d-flex justify-content-between flex-wrap">
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
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("maintenance.key.name") }}</th>
                    <th scope="col">{{ $t("maintenance.key.nameAsset") }}</th>
                    <th scope="col">{{ $t("maintenance.key.cost") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(maintenance, index) in maintenances" :key="index">
      
                        <td class="align-middle">
                          {{ calculateTableIndexing(index) }}
                        </td>
                  

                    <td class="align-middle">
                        <span>
                          <a
                            class="fw-bold"
                            href="javascript:void(0)"
                            @click="openDetailsDialog(maintenance)"
                            >   {{ maintenance.name }}
                            </a
                          >
                        </span>
                      </td>
                     <td class="align-middle">
                        <span>
                          {{ maintenance.nameAsset }}
                        </span>
                      </td>
                      <td class="align-middle">
                        <span>
                          {{ maintenance.cost }}
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
                    {{ $t(`maintenance.key.${key}`) }}
                  </td>
                  <td class="">
                    <span v-if="!value" class="text-muted">------</span>
                    <span
                      v-if="
                        key !== 'starting_date' &&
                        key != 'updated_at' &&
                        key != 'period'
                      "
                      >{{ value }}</span
                    >
                     <span v-if="key == 'period'">
                      <span v-if="value.value"> {{ value.value }} / </span>
                      <span v-if="value.selection">
                        {{ findLocaleOption(periodOptions, value.selection) }}
                      </span>
                    </span>
                    <!--<span v-if="key == 'regular_rent'">
                      <span v-if="value.value"> {{ value.value }} / </span>

                      <span v-if="value.selection">
                        {{ findLocaleOption(periodOptions, value.selection) }}
                      </span>
                    </span>
                    <span v-if="key == 'age_assets' && value"
                      >{{ value }} / {{ $t(`fixedAssets.age`) }}</span
                    >
                    <span v-if="key == 'type_of_asset' && value"
                      >{{ findLocaleOption(typeAssetOptions, value) }}
                    </span>
                    <span v-if="key == 'originalAccount'"
                      >{{ value.name }}
                    </span>
                    <span
                      v-if="key == 'depreciationTable_data' && value != null"
                      >{{ value.name }}
                    </span> -->

                    <!-- <div v-if="key == 'total_depreciation'">
                      <span v-if="value == '1'">
                        <Tag
                          severity="success"
                          :value="$t('status.active')"
                          rounded
                        ></Tag>
                      </span>
                      <span v-if="value == '2'">
                        <Tag
                          severity="warning"
                          :value="$t('status.suspended')"
                          rounded
                        ></Tag>
                      </span>
                    </div>-->
                    <span 
                      v-if="key == 'updated_at' || key == 'starting_date'"
                      >{{
                        $moment(value).format("MMMM Do YYYY, h:mm:ss a")
                      }}</span
                    >
                    <span v-if="key == 'Expiry_date' && value != null">{{
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
  <i18n src="@/lang/erp/assets/reports/maintenance.json"></i18n>
<!-- <i18n src="@/lang/erp/assets/FixedAssets.json"></i18n> -->

  <script>
import Base from "@/components/global/utilities/Base.vue";
import NoResults from "@/components/global/utilities/NoResults.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";
import toast from "@/mixins/global/toast";
export default {
  mixins: [pagination, toast],
  components: {
    Base,
    NoResults,
    DetailsDialog,
  },
  data() {
    return {
      displayForm: false,
      isUpdating: false,
      displayDetailsDialog: false,
      recordDetails: null,
      searchQuery: {
        name: "",
      },
      periodOptions: [
        { en: "Weak", ar: "اسبوع", id: 1 },
        { en: "Month", ar: "شهر", id: 2 },
        { en: "year", ar: "سنه", id: 3 },
      ],
      typeAssetOptions: [
        { en: "property", ar: "ملكية", id: 1 },
        { en: "Rent", ar: "ايجار", id: 2 },
      ],
      isPaginating: false,
      isSearching: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    maintenances() {
      if (this.listResponse) return this.listResponse;
      else return [];
    },
    // filterContent() {
    //   return this.maintenances.flatMap((result) =>
    //     result.maintenance.map((maintenance) => ({
    //       ...maintenance,
    //       nameAsset: result.name,
    //       starting_date: result.starting_date,
    //     }))
    //   );
    // },
    totalRecords() {
      if (this.listResponse) return this.maintenances.length;
      else return 0;
    },
    ...mapGetters("erp/Assets/report/maintenance", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
    }),

    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        name: this.isSearching ? this.searchQuery.name : "",
      };
    },
  },
  mounted() {
    if (!this.maintenances.length > 0) {
      this.list();
    }
  },
  methods: {
    ...mapActions("erp/Assets/report/maintenance", [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value);
      if (item) return item[this.locale];
      else return value;
    },
    ////////// UPSERT ///////////////////
    update_value_maintenance(data) {
      this.$store
        .dispatch(
          "erp/Assets/report/maintenance/update_value_maintenance",
          data
        )
        .then((res) => {
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
    ///////////////// DETAILS /////////////////////////////
    closeDetailsDialog() {
      this.recordDetails = null;
      this.displayDetailsDialog = false;
    },
    openDetailsDialog(record) {
      // const {
      //   name,
      //   number,
      //   group,
      //   site,
      //   originalAccount = record.originalAccount_data,
      //   starting_date,
      //   Expiry_date,
      //   age_assets,
      //   total_cost,
      //   type_of_asset,
      //   regular_maintenances,
      //   total_purchase_price,
      //   paid_from_the_purchase_price,
      //   value_of_maintenance,
      //   value_rent,
      //   regular_rent,
      //   description,
      //   total_depreciation,
      //   regular_periodic_maintenance = record.maintenance_data,
      //   updated_at,
      // } = record;
      // this.recordDetails = {
      //   name,
      //   number,
      //   group: record.group_name,
      //   site,
      //   originalAccount,
      //   starting_date,
      //   Expiry_date,
      //   total_cost,
      //   age_assets,
      //   type_of_asset,
      //   regular_maintenances,
      //   total_purchase_price,
      //   paid_from_the_purchase_price,
      //   value_of_maintenance,
      //   value_rent,
      //   regular_rent,
      //   description,
      //   total_depreciation,
      //   regular_periodic_maintenance,
      //   updated_at,
      // };
      this.recordDetails={...record}
      this.displayDetailsDialog = true;
    },
    list() {
      this.$store
        .dispatch("erp/Assets/report/maintenance/list", this.filterParams)
        .then(() => {
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
  <style></style>
  