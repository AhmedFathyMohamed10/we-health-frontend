<template>
  <div class="ocular-history">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h4>{{ $t("ocularHistory.header") }}</h4>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <CustomDropdown
              v-model="rowToAdd.condition"
              :label="$t('ocularHistory.condition.label')"
              :placeholder="$t('ocularHistory.condition.placeholder')"
              :otherPlaceholder="$t('ocularHistory.condition.otherPlaceholder')"
              :options="conditionOptions"
              :v="$v.rowToAdd.condition"
              :inputType="'text'"
              :invalidSelection="$v.rowToAdd.condition.selection.$error"
              :invalidOther="$v.rowToAdd.condition.other.$error"
            >
              <small
                v-if="
                  $v.rowToAdd.condition.selection.$error &&
                  !$v.rowToAdd.condition.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("ocularHistory.condition.label")) }}
              </small>
              <div
                v-else-if="
                  $v.rowToAdd.condition.other.$error &&
                  !$v.rowToAdd.condition.other.required
                "
                class="invalid-feedback"
              >
                {{ requiredError($t("ocularHistory.condition.label")) }}
              </div>
              <div
                v-else-if="
                  $v.rowToAdd.condition.other.$error &&
                  !$v.rowToAdd.condition.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("ocularHistory.condition.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.condition.other.minLength &&
                  $v.rowToAdd.condition.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("ocularHistory.condition.label"),
                    $v.rowToAdd.condition.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.condition.other.maxLength &&
                  $v.rowToAdd.condition.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("ocularHistory.condition.label"),
                    $v.rowToAdd.condition.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{
              $t("ocularHistory.eye.label")
            }}</label>
            <Dropdown
              :placeholder="$t('ocularHistory.eye.placeholder')"
              v-model="rowToAdd.eye"
              :otherPlaceholder="$t('ocularHistory.eye.otherPlaceholder')"
              :options="eyeOptions"
              optionLabel="value"
              :class="{
                'p-invalid': serializer_error.eye
                  ? serializer_error.eye.length > 0
                  : false,
              }"
            />
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{
              $t("ocularHistory.date.label")
            }}</label>
            <Calendar
              v-model="rowToAdd.date"
              :placeholder="$t('ocularHistory.date.placeholder')"
              :showIcon="true"
              :class="{
                'p-invalid':
                  ($v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate) ||
                  (serializer_error.lastEyeExam
                    ? serializer_error.lastEyeExam.length > 0
                    : false),
              }"
              dateFormat="mm-dd-yy"
              @date-select="formateDateAddRow($event)"
            />
            <small
              class="p-invalid"
              v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate"
            >
              {{ dateError($t("ocularHistory.date.label")) }}
            </small>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <AddButton @add="addRow"></AddButton>
          <small
            v-if="v.conditions.$error && !v.conditions.maxLength"
            class="p-invalid"
          >
            {{
              maxRecordsError(
                $t("ocularHistory.header"),
                v.conditions.$params.maxLength.max
              )
            }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-label">{{
              $t("ocularHistory.note.label")
            }}</label>
            <textarea
              v-model="ocularHistory.note"
              :placeholder="$t('ocularHistory.note.placeholder')"
              class="form-control"
              :class="{
                'is-invalid':
                  v.note.$error ||
                  (serializer_error.note
                    ? serializer_error.note.length > 0
                    : false),
              }"
            ></textarea>
            <div
              v-if="v.note.$error && !v.note.notContainsHtmlTags"
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("ocularHistory.note.label")) }}
            </div>
            <div
              v-else-if="!v.note.minLength && v.note.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("ocularHistory.note.label"),
                  v.ocularHistory.note.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!v.note.maxLength && v.note.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("ocularHistory.note.label"),
                  v.note.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="ocularHistory.conditions.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">
                      {{ $t("ocularHistory.condition.label") }}
                    </th>
                    <th scope="col">{{ $t("ocularHistory.eye.label") }}</th>
                    <th scope="col">{{ $t("ocularHistory.date.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(val, index) in ocularHistory.conditions"
                    :key="index"
                  >
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.condition.other">
                        {{ val.condition.other }}
                      </div>
                      <div v-if="val.condition.selection">
                        {{ val.condition.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.eye">
                        {{ val.eye.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <div v-if="val.date">
                        {{ val.date }}
                      </div>
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
      :header="$t('ocularHistory.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-12 col-xxl-6">
          <div class="form-group">
            <CustomDropdown
              v-model="rowToEdit.condition"
              :label="$t('ocularHistory.condition.label')"
              :placeholder="$t('ocularHistory.condition.placeholder')"
              :otherPlaceholder="$t('ocularHistory.condition.otherPlaceholder')"
              :options="conditionOptions"
              :v="$v.rowToEdit.condition"
              :inputType="'text'"
              :invalidSelection="$v.rowToEdit.condition.selection.$error"
              :invalidOther="$v.rowToEdit.condition.other.$error"
            >
              <small
                v-if="
                  $v.rowToEdit.condition.selection.$error &&
                  !$v.rowToEdit.condition.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("ocularHistory.condition.label")) }}
              </small>
              <div
                v-else-if="
                  $v.rowToEdit.condition.other.$error &&
                  !$v.rowToEdit.condition.other.required
                "
                class="invalid-feedback"
              >
                {{ requiredError($t("ocularHistory.condition.label")) }}
              </div>
              <div
                v-else-if="
                  $v.rowToEdit.condition.other.$error &&
                  !$v.rowToEdit.condition.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("ocularHistory.condition.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.condition.other.minLength &&
                  $v.rowToEdit.condition.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("ocularHistory.condition.label"),
                    $v.rowToEdit.condition.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToEdit.condition.other.maxLength &&
                  $v.rowToEdit.condition.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("ocularHistory.condition.label"),
                    $v.rowToEdit.condition.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
        </div>
        <div class="col-md-612 col-xxl-6">
          <div class="form-group">
            <label class="form-label">{{
              $t("ocularHistory.eye.label")
            }}</label>
            <Dropdown
              :placeholder="$t('ocularHistory.eye.placeholder')"
              v-model="rowToEdit.eye"
              :options="eyeOptions"
              optionLabel="value"
              :class="{
                'p-invalid': serializer_error.eye
                  ? serializer_error.eye.length > 0
                  : false,
              }"
            />
          </div>
        </div>
        <div class="col-md-612 col-xxl-6">
          <div class="form-group">
            <label class="form-label">{{
              $t("ocularHistory.date.label")
            }}</label>
            <Calendar
              v-model="rowToEdit.date"
              :placeholder="$t('ocularHistory.date.placeholder')"
              :showIcon="true"
              :class="{
                'p-invalid':
                  ($v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate) ||
                  (serializer_error.lastEyeExam
                    ? serializer_error.lastEyeExam.length > 0
                    : false),
              }"
              dateFormat="mm-dd-yy"
              @date-select="formateDateEditRow($event)"
            />
            <small
              class="p-invalid"
              v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
            >
              {{ dateError($t("ocularHistory.date.label")) }}
            </small>
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
<i18n src="@/lang/mr/ophthalmic/history.json"></i18n>
<script>
///////////////////////////////////
import { cloneDeep } from "lodash";
///////////////////////////////////
import { mapGetters } from "vuex";
import { convertDate } from "@/helpers/utilities";
import historyOptions from "@/mixins/mr/ophthalmic/options/historyOptions";
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  dateError,
  requiredError,
  maxRecordsError,
} from "@/validation/errors";
import { validDate, notContainsHtmlTags } from "@/validation/customValidators";
import { minLength, maxLength, requiredIf } from "vuelidate/lib/validators";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";

export default {
  mixins: [historyOptions],
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
    Base,
    CustomDropdown,
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
        condition: {
          selection: null,
          other: "",
        },
        eye: null,
        date: "",
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
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getOcularHistory"]),
    ocularHistory: {
      get() {
        return this.getOcularHistory;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setOcularHistory", value);
      },
    },
  },
  ////////////////////////////////////////
  validations: {
    rowToAdd: {
      condition: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.condition.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.condition.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      eye: {},
      date: {
        validDate(value) {
          return validDate(value);
        },
      },
    },
    rowToEdit: {
      condition: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToEdit.condition.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToEdit.condition.selection;
          }),
          minLength: minLength(1),
          minLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      eye: {},
      date: {
        validDate(value) {
          return validDate(value);
        },
      },
    },
  },

  methods: {
    htmlTagsError,
    minLengthError,
    maxLengthError,
    dateError,
    requiredError,
    maxRecordsError,
    formateDateAddRow(event) {
      this.rowToAdd.date = convertDate(event);
    },
    formateDateEditRow(event) {
      this.rowToEdit.date = convertDate(event);
    },
    ///////////////////////////////
    resetForm() {
      this.rowToAdd = {
        condition: {
          selection: null,
          other: "",
        },
        eye: null,
        date: "",
      };
      this.$v.rowToAdd.$reset();
    },
    reset() {
      this.resetForm();
      this.ocularHistory = {
        conditions: [],
        note: "",
      };
      this.v.$reset();
    },
    ///////////////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.ocularHistory.conditions.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },
    /////////////////////////////////
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
        this.ocularHistory.conditions[this.indexToEdit] = { ...this.rowToEdit };
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
      this.ocularHistory.conditions.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
