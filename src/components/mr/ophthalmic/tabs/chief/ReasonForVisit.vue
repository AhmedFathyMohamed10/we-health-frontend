<template>
  <div class="reason-for-visit">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h4>{{ $t("header") }}</h4>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label class="form-label">{{ $t("lastEyeExam.label") }}</label>
            <Calendar
              v-model="reasonForVisit.lastEyeExam"
              :placeholder="$t('lastEyeExam.placeholder')"
              :showIcon="true"
              :class="{
                'p-invalid':
                  v.lastEyeExam.$error ||
                  (serializer_error.lastEyeExam
                    ? serializer_error.lastEyeExam.length > 0
                    : false),
              }"
              dateFormat="mm-dd-yy"
              @date-select="formateDate"
            />
            <small
              class="p-invalid"
              v-if="v.lastEyeExam.$error && !v.lastEyeExam.validDate"
            >
              {{ dateError($t("lastEyeExam.label")) }}
            </small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="for-group">
            <CustomDropdown
              v-model="rowToAdd.reason"
              :label="$t('reasonForVisit.label')"
              :placeholder="$t('reasonForVisit.placeholder')"
              :otherPlaceholder="$t('reasonForVisit.otherPlaceholder')"
              :options="reasons"
              :v="$v.rowToAdd.reason"
              :inputType="'text'"
              :invalidSelection="$v.rowToAdd.reason.selection.$error"
              :invalidOther="$v.rowToAdd.reason.other.$error"
            >
              <small
                v-if="
                  $v.rowToAdd.reason.selection.$error &&
                  !$v.rowToAdd.reason.selection.required
                "
                class="p-invalid"
              >
                {{ requiredError($t("reasonForVisit.label")) }}
              </small>
              <div
                v-else-if="
                  $v.rowToAdd.reason.other.$error &&
                  !$v.rowToAdd.reason.other.required
                "
                class="invalid-feedback"
              >
                {{ requiredError($t("reasonForVisit.label")) }}
              </div>
              <div
                v-else-if="
                  $v.rowToAdd.reason.other.$error &&
                  !$v.rowToAdd.reason.other.notContainsHtmlTags
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("reasonForVisit.label")) }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.reason.other.minLength &&
                  $v.rowToAdd.reason.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("reasonForVisit.label"),
                    $v.rowToAdd.reason.other.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="
                  !$v.rowToAdd.reason.other.maxLength &&
                  $v.rowToAdd.reason.other.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("reasonForVisit.label"),
                    $v.rowToAdd.reason.other.$params.maxLength.max
                  )
                }}
              </div>
            </CustomDropdown>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("comment.label") }}</label>
            <input
              type="text"
              :placeholder="$t('comment.placeholder')"
              v-model="rowToAdd.comment"
              class="form-control"
              :class="{ 'is-invalid': $v.rowToAdd.comment.$error }"
            />
            <div
              v-if="
                !$v.rowToAdd.comment.notContainsHtmlTags &&
                $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.comment.minLength && $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("comment.label"),
                  $v.rowToAdd.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.comment.maxLength && $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("comment.label"),
                  $v.rowToAdd.comment.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <AddButton @add="addRow"></AddButton>
          <small
            v-if="v.reasons.$error && !v.reasons.maxLength"
            class="p-invalid"
          >
            {{ maxRecordsError($t("header"), v.reasons.$params.maxLength.max) }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="reasonForVisit.reasons.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("reasonForVisit.label") }}</th>
                    <th scope="col">{{ $t("comment.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(val, index) in reasonForVisit.reasons"
                    :key="index"
                  >
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.reason.other">
                        {{ val.reason.other }}
                      </div>
                      <div v-if="val.reason.selection">
                        {{ val.reason.selection.value }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.comment }}</span>
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
      :header="$t('header')"
    >
      <div class="row">
        <div class="col-md-12">
          <CustomDropdown
            v-model="rowToEdit.reason"
            :label="$t('reasonForVisit.label')"
            :placeholder="$t('reasonForVisit.placeholder')"
            :otherPlaceholder="$t('reasonForVisit.otherPlaceholder')"
            :options="reasons"
            :invalidSelection="$v.rowToEdit.reason.selection.$error"
            :invalidOther="$v.rowToEdit.reason.other.$error"
          >
            <div
              v-if="
                $v.rowToEdit.reason.other.$error &&
                !$v.rowToEdit.reason.other.notContainsHtmlTags
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.reason.other.minLength &&
                $v.rowToEdit.reason.other.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("comment.label"),
                  $v.rowToEdit.reason.other.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.reason.other.maxLength &&
                $v.rowToEdit.reason.other.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("comment.label"),
                  $v.rowToEdit.reason.other.$params.maxLength.max
                )
              }}
            </div>
          </CustomDropdown>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("comment.label") }}</label>
            <input
              type="text"
              :placeholder="$t('comment.placeholder')"
              v-model="rowToEdit.comment"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.rowToEdit.comment.$error,
              }"
            />
            <div
              v-if="
                $v.rowToEdit.comment.$error &&
                !$v.rowToEdit.comment.notContainsHtmlTags
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.comment.minLength &&
                $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("comment.label"),
                  $v.rowToEdit.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.comment.maxLength &&
                $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("comment.label"),
                  $v.rowToEdit.comment.$params.maxLength.max
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
<i18n src="@/lang/mr/ophthalmic/chiefComplaint.json"></i18n>

<script>
///////////////////////////////////
import { cloneDeep } from "lodash";
///////////////////////////
import { 
   mapGetters ,
  } from "vuex";
// ////////////////////////////////////////////////////////
import { convertDate } from "@/helpers/utilities";
import {
  dateError,
  htmlTagsError,
  minLengthError,
  maxLengthError,
  requiredError,
  maxRecordsError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  requiredIf,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import chiefComplaintOptions from "@/mixins/mr/ophthalmic/options/chiefComplaintOptions";
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
  mixins: [chiefComplaintOptions],
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
        reason: {
          selection: null,
          other: "",
        },
        comment: "",
      },
      rowToEdit: {},
      indexToEdit: null,
      displayEditDialog: false,
      indexToDelete: null,
      displayDeleteDialog: false,
    };
  },
  ////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getReasonForVisit"]),
    reasonForVisit: {
      get() {
        return this.getReasonForVisit;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setReasonForVisit", value);
      },
    },
  },
  /////////////////////////////
  validations: {
    rowToAdd: {
      reason: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.reason.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.reason.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      comment: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
    },
    rowToEdit: {
      reason: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToEdit.reason.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToEdit.reason.selection;
          }),
          minLength: minLength(1),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
      },
      comment: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
    },
  },

  methods: {
    dateError,
    htmlTagsError,
    maxLengthError,
    minLengthError,
    requiredError,
    maxRecordsError,
    /////////////////
    formateDate() {
      this.reasonForVisit.lastEyeExam = convertDate(
        this.reasonForVisit.lastEyeExam
      );
    },

    resetForm() {
      this.rowToAdd = {
        reason: {
          selection: null,
          other: "",
        },
        comment: "",
      },
      this.$v.rowToAdd.$reset();
    },
    reset() {
      this.resetForm();
      this.v.$reset();
      this.reasonForVisit={
        reasons: [],
        lastEyeExam: "",
      }
    },
    /////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.reasonForVisit.reasons.push({ ...this.rowToAdd });
        this.resetForm();
      }
    },
    ////////////////////////
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
      if (!(this.v.$invalid || this.$v.rowToEdit.$invalid)) {
        this.reasonForVisit.reasons[this.indexToEdit] = { ...this.rowToEdit };
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
      this.reasonForVisit.reasons.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
