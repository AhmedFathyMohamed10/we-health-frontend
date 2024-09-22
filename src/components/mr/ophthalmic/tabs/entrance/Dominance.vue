<template>
  <div class="dominance">
    <div class="form-wrapper my-2">
      <Base>
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t("dominance.header") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="for-group">
              <CustomDropdown
                v-model="rowToAdd.method"
                :label="$t('dominance.method.label')"
                :placeholder="$t('dominance.method.placeholder')"
                :otherPlaceholder="$t('dominance.method.otherplaceholder')"
                :options="methodOptions"
                :inputType="'text'"
                :v="$v.rowToAdd.method"
                :invalidSelection="$v.rowToAdd.method.selection.$error"
                :invalidOther="$v.rowToAdd.method.other.$error"
              >
                <small
                  v-if="
                    $v.rowToAdd.method.selection.$error &&
                    !$v.rowToAdd.method.selection.required
                  "
                  class="p-invalid"
                >
                  {{ requiredError($t("dominance.method.label")) }}
                </small>
                <div
                  v-else-if="
                    $v.rowToAdd.method.other.$error &&
                    !$v.rowToAdd.method.other.required
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("dominance.method.label")) }}
                </div>
                <div
                  v-else-if="
                    $v.rowToAdd.method.other.$error &&
                    !$v.rowToAdd.method.other.notContainsHtmlTags
                  "
                  class="invalid-feedback"
                >
                  {{ htmlTagsError($t("dominance.method.label")) }}
                </div>
                <div
                  v-else-if="
                    !$v.rowToAdd.method.other.minLength &&
                    $v.rowToAdd.method.other.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("dominance.method.label"),
                      $v.rowToAdd.method.other.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-else-if="
                    !$v.rowToAdd.method.other.maxLength &&
                    $v.rowToAdd.method.other.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("dominance.method.label"),
                      $v.rowToAdd.method.other.$params.maxLength.max
                    )
                  }}
                </div>
              </CustomDropdown>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="form-label">{{
                $t("dominance.dominantEye.label")
              }}</label>
              <Dropdown
                :placeholder="$t('dominance.dominantEye.placeholder')"
                v-model="rowToAdd.dominantEye"
                :options="dominantEyeOptions"
                optionLabel="value"
                :class="{
                  'p-invalid': serializer_error.eye
                    ? serializer_error.eye.length > 0
                    : false,
                }"
              />
            </div>
          </div>
          <div class="col-md-4">
            <AddButton @add="addRow"></AddButton>
            <small v-if="v.eyes.$error && !v.eyes.maxLength" class="p-invalid">
              {{
                maxRecordsError(
                  $t("dominance.header"),
                  v.eyes.$params.maxLength.max
                )
              }}
            </small>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("dominance.note.label") }}</label>
              <textarea
                class="form-control"
                v-model.trim="dominance.note"
                :placeholder="$t('dominance.note.placeholder')"
                :class="{
                  'is-invalid': v.note.$invalid && v.note.$anyError,
                }"
              ></textarea>
              <div
                v-if="!v.note.notContainsHtmlTags && v.note.$error"
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("dominance.note.label")) }}
              </div>
              <div
                v-else-if="!v.note.minLength && v.note.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("dominance.note.label"),
                    v.note.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="!v.note.maxLength && v.note.$error"
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("dominance.note.label"),
                    v.note.$params.maxLength.max
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </Base>
    </div>

    <div class="table-wrapper my-2" v-if="dominance.eyes.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("dominance.method.label") }}</th>
                    <th scope="col">{{ $t("dominance.dominantEye.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in dominance.eyes" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.method.other">
                        {{ val.method.other }}
                      </div>
                      <div v-if="val.method.selection">
                        {{ val.method.selection.value }}
                      </div>
                    </td>
                    <td  class="align-middle">
                      <span v-if="val.dominantEye">{{ val.dominantEye.value }}</span>
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
      @close="closeEditDialog"
      @cancel="closeEditDialog"
      @save="editRow"
      :header="$t('dominance.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-12 ">
          <div class="for-group">
            <CustomDropdown
              v-model="rowToEdit.method"
              :label="$t('dominance.method.label')"
              :placeholder="$t('dominance.method.placeholder')"
              :otherPlaceholder="$t('ocularHistory.method.otherPlaceholder')"
              :options="methodOptions"
              :inputType="'text'"
              :v="$v.rowToEdit.method"
              :invalidSelection="$v.rowToEdit.method.selection.$error"
              :invalidOther="$v.rowToEdit.method.other.$error"
            >
              <small
                v-if="
                  $v.rowToEdit.method.selection.$error &&
                  !$v.rowToEdit.method.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("dominance.method.label")) }}
              </small>
              <div
                v-else-if="
                  $v.rowToEdit.method.other.$error &&
                  !$v.rowToEdit.method.other.required
                "
                class="invalid-feedback"
              >
                {{ requiredError($t("dominance.method.label")) }}
              </div>
              <div
                v-else-if="
                  $v.rowToEdit.method.other.$error &&
                  !$v.rowToEdit.method.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("dominance.method.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.method.other.minLength &&
                  $v.rowToEdit.method.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("dominance.method.label"),
                    $v.rowToEdit.method.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.method.other.maxLength &&
                  $v.rowToEdit.method.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("dominance.method.label"),
                    $v.rowToEdit.method.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
        </div>
        <div class="col-md-12 ">
          <div class="form-group">
            <label class="form-label">{{
              $t("dominance.dominantEye.label")
            }}</label>
            <Dropdown
              :placeholder="$t('dominance.dominantEye.placeholder')"
              v-model="rowToEdit.dominantEye"
              :options="dominantEyeOptions"
              optionLabel="value"
              :class="{
                'p-invalid': serializer_error.eye
                  ? serializer_error.eye.length > 0
                  : false,
              }"
            />
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
<i18n src="@/lang/mr/ophthalmic/entrance.json"></i18n>

<script>
///////////////////////////////////
import { cloneDeep } from "lodash";
//////////////////////////////////
import { mapGetters } from "vuex";
import entranceOptions from "@/mixins/mr/ophthalmic/options/entranceOptions";
// ////////////////////////////////////////////////////////
import {
  inputError,
  htmlTagsError,
  minLengthError,
  requiredError,
  maxLengthError,
  maxRecordsError,
} from "@/validation/errors";
import { minLength, maxLength, requiredIf } from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
//////////////////////////////////////////////////////////
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
export default {
  mixins: [entranceOptions],
  props: {
    v: {
      type: Object,
      required: true,
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
  components: {
    CustomDropdown,
    Base,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,
    ResetButton,
  },
  data() {
    return {
      rowToAdd: {
        method: {
          selection: null,
          other: "",
        },
        dominantEye: null,
      },
      rowToEdit: {},
      indexToEdit: null,
      displayEditDialog: false,
      indexToDelete: null,
      displayDeleteDialog: false,
    };
  },
  /////////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getDominance"]),
    dominance: {
      get() {
        return this.getDominance;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setDominance", value);
      },
    },
  },
  ////////////////////////////////
  validations: {
    rowToAdd: {
      method: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.method.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.method.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      dominantEye: {},
    },
    rowToEdit: {
      method: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToEdit.method.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToEdit.method.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      dominantEye: {},
    },
  },
  methods: {
    inputError,
    htmlTagsError,
    requiredError,
    maxLengthError,
    minLengthError,
    maxRecordsError,
    ///////////////////////////////////////
    resetForm() {
      this.rowToAdd = {
        method: {
          selection: null,
        },
        dominantEye: "",
      };
      this.$v.rowToAdd.$reset();
    },
    reset() {
      this.resetForm();
      this.dominance = {
        eyes: [],
        note: "",
      };
      this.v.$reset();
    },
    ///////////////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.dominance.eyes.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },

    /////////////////////
    openEditDialog(val, index) {
      this.displayEditDialog = true;
      this.indexToEdit = index;
      this.rowToEdit = cloneDeep(val);
    },
    closeEditDialog() {
      this.rowToEdit = {};
      this.indexToEdit = null;
      this.$v.rowToEdit.$reset();
      this.displayEditDialog = false;
    },
    editRow() {
      this.$v.rowToEdit.$touch();
      this.v.$touch();
      if (!(this.v.$invalid || this.$v.rowToEdit.$invalid)) {
        this.dominance.eyes[this.indexToEdit] = { ...this.rowToEdit };
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
      this.dominance.eyes.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
