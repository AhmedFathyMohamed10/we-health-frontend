<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
    >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message
              severity="error"
              v-for="(value, key) in error"
              :key="key"
              :closable="false"
            >
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.asset.label")
            }}</label>
            <Dropdown
              v-model="form.asset"
              :options="assetOptions"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.asset.placeholder')"
              :class="{
                'p-invalid': $v.form.asset.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  !$v.form.asset.required &&
                  $v.form.asset.$error
                "
              >
                {{ requiredError($t("form.asset.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.operation.label")
            }}</label>
            <Dropdown
              v-model="form.operation"
              :options="operationOptions"
              :optionLabel="locale"
              optionValue="id"
              :placeholder="$t('form.operation.placeholder')"
              :class="{
                'p-invalid': $v.form.operation.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  !$v.form.operation.required &&
                  $v.form.operation.$error
                "
              >
                {{ requiredError($t("form.operation.label")) }}
              </small>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.total_cost.label")
            }}</label>
            <input
              type="number"
              v-model="form.total_cost"
              :placeholder="$t('form.total_cost.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.total_cost.$error,
              }"
            />
            <!-- <div
              v-if="!$v.form.total_cost.required && $v.form.total_cost.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.total_cost.label")) }} -->
            <!-- </div> -->
            <div
              v-if="
                !$v.form.total_cost.decimal &&
                $v.form.total_cost.$error
              "
              class="invalid-feedback"
            >
              {{ numericError($t("form.value.label")) }}
            </div>
          </div>
        </div>

        <div class="col-12">
            <div class="form-group">
              <label class="form-label">{{ $t("form.reason.label") }}</label>
              <textarea
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.reason"
                :placeholder="$t('form.reason.placeholder')"
                :class="{
                  'is-invalid': $v.form.reason.$error,
                }"
              ></textarea>
              <div
                v-if="
                  !$v.form.reason.notContainsHtmlTags &&
                  $v.form.reason.$error
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("form.reason.label")) }}
              </div>
            </div>
          </div>



      </div>
      <div class="row">
        <h4 class="text-center text-danger fw-bold my-4">{{ $t(`destruction.key.detailed_cost`) }}</h4>
        <!-- title -->
        <div class="col-md-5 col-lg-5">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.title.label")
            }}</label>
            <input
              type="text"
              v-model="rowToAdd.title"
              :placeholder="$t('form.title.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.rowToAdd.title.$error }"
            />
            <div
              v-if="!$v.rowToAdd.title.required && $v.rowToAdd.title.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.title.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.title.notContainsHtmlTags && $v.rowToAdd.title.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.title.label")) }}
            </div>
            <div
              v-else-if="!$v.rowToAdd.title.minLength && $v.rowToAdd.title.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.title.label"),
                  $v.rowToAdd.title.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!$v.rowToAdd.title.maxLength && $v.rowToAdd.title.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("form.title.label"),
                  $v.rowToAdd.title.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-5 col-lg-5">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.value.label")
            }}</label>
            <input
              type="number"
              v-model="rowToAdd.value"
              :placeholder="$t('form.value.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.rowToAdd.value.$error }"
            />
            <div
              v-if="!$v.rowToAdd.value.required && $v.rowToAdd.value.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.value.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.value.decimal &&
                $v.rowToAdd.value.$error
              "
              class="invalid-feedback"
            >
              {{ numericError($t("form.value.label")) }}
            </div>
          </div>
        </div>
        <div class="col-2 me-0 d-flex">
          <AddButton @add="addRow"></AddButton>
        </div>
        <div class="table-wrapper my-2" v-if="form.detailed_cost.length >0 ">
          <div class="row my-2">
            <div class="col-12">
              <div class="table-responsive">
                <table class="table table-sm text-center">
                  <thead>
                    <tr class="border-bottom-custom">
                      <th scope="col">#</th>
                      <th scope="col">{{ $t("form.title.label") }}</th>
                      <th scope="col">{{ $t("form.value.label") }}</th>
                      <th scope="col">{{ $t("table.thead.controls") }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(val, index) in form.detailed_cost" :key="index">
                      <td class="align-middle">
                        {{ parseInt(index) + 1 }}
                      </td>
                      <td class="align-middle">
                        {{ val.title }}
                      </td>

                      <td class="align-middle">
                        <span>{{ val.value }}</span>
                      </td>
                      <td class="align-middle">
                        <div class="d-flex justify-content-center">
                          <div>
                            <button
                              class="btn btn-danger-gradient rounded-circle p-1 m-1"
                              @click="openDeleteDialog(index, val)"
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <DeleteDialog
          :display="displayDeleteDialog"
          @cancel="closeDeleteDialog"
          @delete="deleteRow"
        ></DeleteDialog>
      </div>
    </EditDialog>
  </div>
</template>
  <i18n src="@/lang/global/global.json"></i18n>
  <i18n src="@/lang/erp/assets/Destruction.json"></i18n>
  <script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import {
  required,
  minLength,
  maxLength,
  decimal,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";

import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
} from "@/validation/errors.js";
import { mapActions } from "vuex";

export default {
  components: {
    EditDialog,
    DeleteDialog,
    AddButton,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    operationOptions:{
        type:Array,
    },
    value: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  data() {
    return {
      displayDeleteDialog: false,
      indexToDelete: null,
      dataOfIndexDeleted: [],
      form: this.value,
      rowToAdd: {
        title: "",
        value: "",
      },
    };
  },
  validations: {
    rowToAdd: {
      title: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      value: {
        required,
        decimal,
      },
    },
    form: {
      asset: {
        required,
      },
      operation: {
        required,
      },
      total_cost: {
        decimal,
      },
      reason: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },
  computed: {
    assetOptions() {
      if (this.$store.getters["erp/Assets/FixedAssets/getListResponse"])
        return this.$store.getters["erp/Assets/FixedAssets/getListResponse"].results;
      else return [];
    },
  },
  created() {
    if (!this.assetOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/Assets/FixedAssets/list", params);
    }
  },
  methods: {
    ...mapActions("Destruction", ["setindexDetailedCost"]),

    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
        this.$v.rowToAdd.$reset();
        this.setindexDetailedCost([]);
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      this.$v.rowToAdd.$reset();
      this.setindexDetailedCost([]);

    },

    //////////////////////
    resetForm() {
      this.rowToAdd = {
        title: "",
        value: "",
      };
      this.$v.rowToAdd.$reset();
    },
    addRow() {
      this.$v.rowToAdd.$touch();
      if (!this.$v.rowToAdd.$invalid) {
        var totalCost=0
        this.form.detailed_cost.push({ ...this.rowToAdd });
        for (let i in this.form.detailed_cost){
          totalCost =Number(totalCost) + Number(this.form.detailed_cost[i].value)
          this.form.total_cost = totalCost
        }
        this.resetForm();
      }
    },
    /////////////////////
    openDeleteDialog(index, val) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
      this.dataObject = val;
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.indexToDelete = null;
    },
    deleteRow() {
      this.form.detailed_cost.splice(this.indexToDelete, 1);
      this.form.total_cost = this.form.total_cost-this.dataObject.value
      if ("id" in this.dataObject) {
        this.dataOfIndexDeleted.push(this.dataObject);
        this.setindexDetailedCost(this.dataOfIndexDeleted);
      }
      this.dataObject = {};

      this.closeDeleteDialog();
    },
  },
};
</script>
  