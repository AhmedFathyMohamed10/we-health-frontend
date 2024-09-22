<template>
  <div class="sensation mb-2">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="form-group reset d-flex align-items-center" id="info">
            <h4 class="mb-0 me-2">Sensation</h4>
          </div>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <CustomDropdown
              v-model="rowToAdd.sensitivity"
              :label="$t('sensation.sensitivity.label')"
              :options="sensationsOptions"
              :inputType="'text'"
              :invalidSelection="
                $v.rowToAdd.sensitivity.selection.$error ||
                (serializer_error.sensitivity
                  ? serializer_error.sensitivity.selection
                    ? serializer_error.sensitivity.selection.length > 0
                    : false
                  : false)
              "
              :invalidOther="
                $v.rowToAdd.sensitivity.other.$error ||
                (serializer_error.sensitivity
                  ? serializer_error.sensitivity.other
                    ? serializer_error.sensitivity.other.length > 0
                    : false
                  : false)
              "
            >
              <small
                v-if="
                  $v.rowToAdd.sensitivity.selection.$error &&
                  !$v.rowToAdd.sensitivity.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("sensation.sensitivity.label")) }}
              </small>
              <div
                v-if="
                  $v.rowToAdd.sensitivity.other.$invalid &&
                  !$v.rowToAdd.sensitivity.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("sensation.sensitivity.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.sensitivity.other.minLength &&
                  $v.rowToAdd.sensitivity.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("sensation.sensitivity.label"),
                    $v.rowToAdd.sensitivity.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.sensitivity.other.maxLength &&
                  $v.rowToAdd.sensitivity.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("sensation.sensitivity.label"),
                    $v.rowToAdd.sensitivity.other.$params.maxLength.max
                  )
                }}
              </div>
              <!-- <div
              class="invalid-feedback"
              v-else-if="!$v.rowToAdd.sensitivity.other.required && $v.rowToAdd.reflex.$error"
            >
              {{ requiredError($t("section.label")) }}
            </div> -->
            </CustomDropdown>
          </div>
        </div>
        <div class="col-md-3 col-xxl-2">
          <div class="form-group">
            <div class="d-flex justify-content-between px-3">
              <label class="form-label">
                {{ $t("sensation.right.label") }}
              </label>
              <label class="form-label">
                {{ $t("sensation.left.label") }}
              </label>
            </div>
            <div class="radio-checkbox-group">
              <div
                v-for="option of rlOptions"
                :key="option.key"
                class="field-checkbox"
              >
                <Checkbox
                  :id="option.value"
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
              $t("sensation.specification.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('sensation.specification.placeholder')"
              v-model="rowToAdd.specification"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.rowToAdd.specification.$invalid &&
                  $v.rowToAdd.specification.$anyDirty &&
                  $v.rowToAdd.specification.$anyError,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.specification.notContainsHtmlTags &&
                $v.rowToAdd.specification.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("sensation.specification.label")) }}
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
                  $t("sensation.specification.label"),
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
                  $t("sensation.specification.label"),
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
                $t("sensation.sensation.header"),
                v.$params.maxLength.max
              )
            }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="sensation.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("sensation.sensitivity.label") }}</th>
                    <th scope="col">
                      {{ $t("sensation.right.label") }} ||
                      {{ $t("sensation.left.label") }}
                    </th>
                    <th scope="col">
                      {{ $t("sensation.specification.label") }}
                    </th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in sensation" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.sensitivity.selection">
                        {{ val.sensitivity.selection.value }}
                      </div>
                      <div v-if="val.sensitivity.other">
                        {{ val.sensitivity.other }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.type.length">
                        <span v-for="(option, index) in val.type" :key="index">
                          {{ option }}
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
      :header="$t('sensation.sensation.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-12">
          <div class="form-group">
            <CustomDropdown
              v-model="rowToEdit.sensitivity"
              :label="$t('sensation.sensitivity.label')"
              :options="sensationsOptions"
              :inputType="'text'"
              :invalidSelection="
                $v.rowToEdit.sensitivity.selection.$invalid ||
                (serializer_error.sensitivity
                  ? serializer_error.sensitivity.selection
                    ? serializer_error.sensitivity.selection.length > 0
                    : false
                  : false)
              "
              :invalidOther="
                $v.rowToEdit.sensitivity.other.$invalid ||
                (serializer_error.sensitivity
                  ? serializer_error.sensitivity.other
                    ? serializer_error.sensitivity.other.length > 0
                    : false
                  : false)
              "
            >
              <div
                v-if="
                  $v.rowToEdit.sensitivity.other.$invalid &&
                  !$v.rowToEdit.sensitivity.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("sensation.sensitivity.label")) }}
              </div>
              <div
                v-if="
                  !$v.rowToEdit.sensitivity.other.minLength &&
                  $v.rowToEdit.sensitivity.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("sensation.sensitivity.label"),
                    $v.rowToEdit.sensitivity.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-if="
                  !$v.rowToEdit.sensitivity.other.maxLength &&
                  $v.rowToEdit.sensitivity.other.$invalid
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("sensation.sensitivity.label"),
                    $v.rowToEdit.sensitivity.other.$params.maxLength.max
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
                {{ $t("sensation.right.label") }}
              </label>
              <label class="form-label">
                {{ $t("sensation.left.label") }}
              </label>
            </div>
            <div class="radio-checkbox-group">
              <div
                v-for="option of rlOptions"
                :key="option.key"
                class="field-checkbox"
              >
                <Checkbox
                  :id="option.value"
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
              $t("sensation.specification.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('sensation.specification.placeholder')"
              v-model="rowToEdit.specification"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.rowToEdit.specification.$invalid &&
                  $v.rowToEdit.specification.$anyDirty &&
                  $v.rowToEdit.specification.$anyError,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.specification.notContainsHtmlTags &&
                $v.rowToEdit.specification.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("sensation.specification.label")) }}
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
                  $t("sensation.specification.label"),
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
                  $t("sensation.specification.label"),
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
<i18n src="@/lang/mr/physiotherapy/physicalExamination.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import physicalExaminationOptions from "@/mixins/mr/physiotherapy/options/physicalExaminationOptions";
///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  inputError,
  maxRecordsError,
  requiredError,
} from "@/validation/errors";
import { minLength, requiredIf, maxLength } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { findLocaleOption } from "@/helpers/utilities";

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
  mixins: [physicalExaminationOptions],
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
        sensitivity: {
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
      getSensation: "getSensation",
    }),
    sensation: {
      get() {
        return this.getSensation;
      },
      set(value) {
        this.setSensation(value);
      },
    },
  },
  validations: {
    rowToAdd: {
      sensitivity: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.sensitivity.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.sensitivity.selection;
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
      sensitivity: {
        selection: {},
        other: {
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
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setSensation"]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    requiredError,
    inputError,
    maxRecordsError,
    findLocaleOption,

    resetForm() {
      this.rowToAdd = {
        sensitivity: {
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
      this.sensation = [];
    },
    /////////////////////////
    addRow() {
      this.$v.rowToAdd.$touch();
      this.v.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.sensation.push({ ...this.rowToAdd });
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
        this.sensation[this.indexToEdit] = { ...this.rowToEdit };
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
      this.sensation.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>

<style></style>
