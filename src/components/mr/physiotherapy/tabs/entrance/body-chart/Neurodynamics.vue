<template>
  <div class="neurodynamics">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="form-group reset d-flex align-items-center" id="info">
            <h4 class="mb-0 me-2">Neurodynamics</h4>
          </div>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <CustomDropdown
              v-model="rowToAdd.test"
              :label="$t('neurodynamics.test.label')"
              :options="neurodynamicsOptions"
              :inputType="'text'"
              :invalidSelection="
                $v.rowToAdd.test.selection.$error ||
                (serializer_error.test
                  ? serializer_error.test.selection
                    ? serializer_error.test.selection.length > 0
                    : false
                  : false)
              "
              :invalidOther="
              $v.rowToAdd.test.other.$error ||
                (serializer_error.test
                  ? serializer_error.test.other
                    ? serializer_error.test.other.length > 0
                    : false
                  : false)
              "
            >
              <small
                v-if="
                  $v.rowToAdd.test.selection.$error &&
                  !$v.rowToAdd.test.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("neurodynamics.test.label")) }}
              </small>
              <div
                v-if="
                  $v.rowToAdd.test.other.$invalid &&
                  !$v.rowToAdd.test.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("neurodynamics.test.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.test.other.minLength &&
                  $v.rowToAdd.test.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("neurodynamics.test.label"),
                    $v.rowToAdd.test.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.test.other.maxLength &&
                  $v.rowToAdd.test.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("neurodynamics.test.label"),
                    $v.rowToAdd.test.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
        </div>
        <div class="col-md-3 col-xxl-2">
          <div class="form-group">
            <div class="d-flex justify-content-between px-3">
              <label class="form-label">
                {{ $t("neurodynamics.right.label") }}
              </label>
              <label class="form-label">
                {{ $t("neurodynamics.left.label") }}
              </label>
            </div>
            <div class="radio-checkbox-group">
              <div
                v-for="(option, index) of rlOptions"
                :key="index + 1"
                class="field-checkbox"
              >
                <Checkbox
                  :id="index + 1"
                  name="option"
                  :value="option.value"
                  v-model="rowToAdd.type"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group specification">
            <label for="" class="form-label">{{
              $t("neurodynamics.specification.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('neurodynamics.specification.placeholder')"
              v-model="rowToAdd.specification"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.specification.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.specification.notContainsHtmlTags &&
                $v.rowToAdd.specification.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("neurodynamics.specification.label")) }}
            </div>
            <div
              v-if="
                !$v.rowToAdd.specification.minLength &&
                $v.rowToAdd.specification.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("neurodynamics.specification.label"),
                  $v.rowToAdd.specification.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !$v.rowToAdd.specification.maxLength &&
                $v.rowToAdd.specification.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("neurodynamics.specification.label"),
                  $v.rowToAdd.specification.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-1 col-xxl-3">
          <AddButton @add="addRow"></AddButton>
          <small v-if="v.$error && !v.maxLength" class="p-invalid">
            {{
              maxRecordsError(
                $t("neurodynamics.neurodynamics.header"),
                v.$params.maxLength.max
              )
            }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="neurodynamics.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("neurodynamics.test.label") }}</th>
                    <th scope="col">
                      {{ $t("neurodynamics.right.label") }} ||
                      {{ $t("neurodynamics.left.label") }}
                    </th>
                    <th scope="col">
                      {{ $t("neurodynamics.specification.label") }}
                    </th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in neurodynamics" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.test.selection">
                        {{
                          findLocaleOption(
                            neurodynamicsOptions,
                            val.test.selection.value
                          )
                        }}
                      </div>
                      <div v-if="val.test.other">
                        {{ val.test.other }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.type.length">
                        <span v-for="(option, index) in val.type" :key="index">
                          {{ findLocaleOption(rlOptions, option) }}
                          {{ index < val.type.length - 1 ? "," : "" }}
                        </span>
                      </div>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.specification }}</span>
                    </td>
                    <td class="align-middle">
                      <div
                        class="d-flex justify-content-center align-items-center"
                      >
                        <EditButton
                          class="me-2"
                          @edit="openEditDialog(val, index)"
                        ></EditButton>
                        <DeleteButton
                          @delete="openDeleteDialog(index)"
                        ></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Base>
    </div>
    <EditDialog
      :display="displayEditDialog"
      @cancel="closeEditDialog"
      @save="editRow"
      @close="closeEditDialog"
      :header="$t('neurodynamics.neurodynamics.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-12">
          <div class="form-group">
            <CustomDropdown
              v-model="rowToEdit.test"
              :label="$t('neurodynamics.test.label')"
              :options="neurodynamicsOptions"
              :inputType="'text'"
              :invalidSelection="
                $v.rowToEdit.test.selection.$error ||
                (serializer_error.test
                  ? serializer_error.test.selection
                    ? serializer_error.test.selection.length > 0
                    : false
                  : false)
              "
              :invalidOther="
                $v.rowToEdit.test.other.$error ||
                (serializer_error.test
                  ? serializer_error.test.other
                    ? serializer_error.test.other.length > 0
                    : false
                  : false)
              "
            >
              <small
                v-if="
                  $v.rowToEdit.test.selection.$error &&
                  !$v.rowToEdit.test.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("neurodynamics.test.label")) }}
              </small>

              <div
                v-if="
                  $v.rowToEdit.test.other.$invalid &&
                  !$v.rowToEdit.test.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("neurodynamics.test.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.test.other.minLength &&
                  $v.rowToEdit.test.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("neurodynamics.test.label"),
                    $v.rowToEdit.test.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.test.other.maxLength &&
                  $v.rowToEdit.test.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("neurodynamics.test.label"),
                    $v.rowToEdit.test.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <div class="d-flex justify-content-between px-3">
              <label class="form-label">
                {{ $t("neurodynamics.right.label") }}
              </label>
              <label class="form-label">
                {{ $t("neurodynamics.left.label") }}
              </label>
            </div>
            <div class="radio-checkbox-group">
              <div
                v-for="(option, index) of rlOptions"
                :key="index + 1"
                class="field-checkbox"
              >
                <Checkbox
                  :id="index + 1"
                  name="option"
                  :value="option.value"
                  v-model="rowToEdit.type"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group specification">
            <label for="" class="form-label">{{
              $t("neurodynamics.specification.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('neurodynamics.specification.placeholder')"
              v-model="rowToEdit.specification"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.specification.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.specification.notContainsHtmlTags &&
                $v.rowToEdit.specification.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("neurodynamics.specification.label")) }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.specification.minLength &&
                $v.rowToEdit.specification.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("neurodynamics.specification.label"),
                  $v.rowToEdit.specification.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.specification.maxLength &&
                $v.rowToEdit.specification.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("neurodynamics.specification.label"),
                  $v.rowToEdit.specification.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
    <DeleteDialog
      :display="displayDeleteDialog"
      @cancel="closeDeleteDialog"
      @delete="deleteRow"
    ></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/physiotherapy/bodyChart.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import bodyChartOptions from "@/mixins/mr/physiotherapy/options/bodyChartOptions";
///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  maxRecordsError,
  requiredError,
} from "@/validation/errors";
import { findLocaleOption } from "@/helpers/utilities";

import { minLength, maxLength, requiredIf } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
export default {
  mixins: [bodyChartOptions],
  props: {
    v: {
      type: Object,
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
  components: {
    Base,
    CustomDropdown,
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,
  },
  data() {
    return {
      rowToAdd: {
        test: {
          selection: "",
          other: "",
        },
        type: [],
        specification: "",
      },
      rowToEdit: {},
      indexToEdit: null,
      displayEditDialog: false,
      indexToDelete: null,
      displayDeleteDialog: false,
    };
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getNeurodynamics: "getNeurodynamics",
    }),
    neurodynamics: {
      get() {
        return this.getNeurodynamics;
      },
      set(value) {
        this.setNeurodynamics(value);
      },
    },
  },
  validations: {
    rowToAdd: {
      test: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.test.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.test.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      type: {},
      specification: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
    },
    rowToEdit: {
      test: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.test.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.test.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      type: {},
      specification: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
    },
  },
  methods: {
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setNeurodynamics"]),
    htmlTagsError,
    maxLengthError,
    requiredError,
    minLengthError,
    maxRecordsError,
    findLocaleOption,
    resetForm() {
      this.rowToAdd = {
        test: {
          selection: "",
          other: "",
        },
        type: [],
        specification: "",
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    reset() {
      this.resetForm();
      this.neurodynamics = [];
    },
    /////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.neurodynamics.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },
    /////////////////////
    openEditDialog(val, index) {
      this.displayEditDialog = true;
      this.indexToEdit = index;
      this.rowToEdit = { ...val };
    },
    closeEditDialog() {
      this.rowToEdit = {};
      this.indexToEdit = null;
      this.$v.rowToEdit.$reset();
      this.displayEditDialog = false;
    },
    editRow() {
      this.$v.rowToEdit.$touch();
      if (!this.$v.rowToEdit.$invalid) {
        this.neurodynamics[this.indexToEdit] = { ...this.rowToEdit };
        this.closeEditDialog();
      }
    },
    ////////////////////////
    openDeleteDialog(index) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.indexToDelete = null;
    },
    deleteRow() {
      this.neurodynamics.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>

<style></style>
