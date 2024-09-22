<template>
  <div class="chief-complaint-phy">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h4>{{ $t("chiefComplaint.chiefComplaint.header") }}</h4>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="form-group physician-name">
            <label class="form-label">{{
              $t("chiefComplaint.physicianName.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.rowToAdd.physicianName.$error }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="rowToAdd.physicianName"
                :suggestions="physicianNamesPamams.suggestions"
                :class="{ 'p-invalid': $v.rowToAdd.physicianName.$error }"
                field="value"
                :placeholder="$t('chiefComplaint.physicianName.placeholder')"
                @complete="search($event, physicianNamesPamams)"
              />
            </div>

            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToAdd.physicianName.$error &&
                  !$v.rowToAdd.physicianName.validator
                "
              >
                {{ inputError($t("chiefComplaint.physicianName.label")) }}
              </small>
              <small
                class="p-invalid"
                v-else-if="
                  $v.rowToAdd.physicianName.$error &&
                  !$v.rowToAdd.physicianName.required
                "
              >
                {{ requiredError($t("chiefComplaint.physicianName.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group reason">
            <label for="" class="form-label">{{
              $t("chiefComplaint.reason.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('chiefComplaint.reason.placeholder')"
              v-model="rowToAdd.reason"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.reason.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.reason.notContainsHtmlTags &&
                $v.rowToAdd.reason.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("chiefComplaint.reason.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.reason.minLength && $v.rowToAdd.reason.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("chiefComplaint.reason.label"),
                  $v.rowToAdd.reason.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.reason.maxLength && $v.rowToAdd.reason.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("chiefComplaint.reason.label"),
                  $v.rowToAdd.reason.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group date">
            <label class="form-label">{{
              $t("chiefComplaint.date.label")
            }}</label>
            <Calendar
              v-model="rowToAdd.date"
              :placeholder="$t('chiefComplaint.date.placeholder')"
              :showIcon="true"
              :class="{
                'p-invalid': $v.rowToAdd.date.$error,
              }"
              dateFormat="mm-dd-yy"
              @date-select="formateDateInput"
            />
            <small
              class="d-block text-danger"
              v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate"
            >
              {{ dateError($t("chiefComplaint.date.label")) }}
            </small>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group treatment-program">
            <label class="form-label">{{
              $t("chiefComplaint.treatmentProgram.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.rowToAdd.treatmentProgram.$error }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="rowToAdd.treatmentProgram"
                :suggestions="treatmentProgramParams.suggestions"
                :class="{ 'p-invalid': $v.rowToAdd.treatmentProgram.$error }"
                field="value"
                :placeholder="$t('chiefComplaint.treatmentProgram.placeholder')"
                @complete="search($event, treatmentProgramParams)"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToAdd.treatmentProgram.$error &&
                  !$v.rowToAdd.treatmentProgram.validator
                "
              >
                {{ inputError($t("chiefComplaint.treatmentProgram.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group period">
            <CustomInputGroup
              v-model="rowToAdd.period"
              :options="periodUnitOptions"
              :label="$t('chiefComplaint.period.label')"
              :valueType="'number'"
              :valuePlaceholder="$t('chiefComplaint.period.valuePlaceholder')"
              :dropdownPlaceholder="
                $t('chiefComplaint.period.dropdownPlaceholder')
              "
              :invalidValue="$v.rowToAdd.period.value.$invalid"
            />

            <div class="error">
              <small
                class="d-block text-danger"
                v-if="
                  $v.rowToAdd.period.value.$error &&
                  !$v.rowToAdd.period.value.decimal
                "
              >
                {{ numericError($t("chiefComplaint.period.label")) }}
              </small>

              <small
                class="p-invalid"
                v-else-if="
                  !$v.rowToAdd.period.value.maxLength &&
                  $v.rowToAdd.period.value.$error
                "
              >
                {{ maxValueError($t("chiefComplaint.period.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group comment">
            <label for="" class="form-label">{{
              $t("chiefComplaint.comment.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('chiefComplaint.comment.placeholder')"
              v-model="rowToAdd.comment"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.comment.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToAdd.comment.notContainsHtmlTags &&
                $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("chiefComplaint.comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToAdd.comment.minLength && $v.rowToAdd.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("chiefComplaint.comment.label"),
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
                  $t("chiefComplaint.comment.label"),
                  $v.rowToAdd.comment.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <AddButton @add="addRow"></AddButton>
          <small v-if="v.$error && !v.maxLength" class="p-invalid">
            {{ maxRecordsError($t("diet.header"), v.$params.maxLength.max) }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="chiefComplaint.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">
                      {{ $t("chiefComplaint.physicianName.label") }}
                    </th>
                    <th scope="col">{{ $t("chiefComplaint.reason.label") }}</th>
                    <th scope="col">{{ $t("chiefComplaint.date.label") }}</th>
                    <th scope="col">
                      {{ $t("chiefComplaint.treatmentProgram.label") }}
                    </th>
                    <th scope="col">{{ $t("chiefComplaint.period.label") }}</th>
                    <th scope="col">
                      {{ $t("chiefComplaint.comment.label") }}
                    </th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in chiefComplaint" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.physicianName">
                        <span v-if="typeof val.physicianName == 'object'">{{
                          val.physicianName.value
                        }}</span>
                        <span v-else>{{ val.physicianName }}</span>
                      </div>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.reason }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.date }}</span>
                    </td>

                    <td class="align-middle">
                      <div v-if="val.treatmentProgram">
                        <span v-if="typeof val.treatmentProgram == 'object'">{{
                          val.treatmentProgram.value
                        }}</span>
                        <span v-else>{{ val.treatmentProgram }}</span>
                      </div>
                    </td>
                    <td class="align-middle">
                      <span v-if="val.period.value">
                        {{ val.period.value }} /
                      </span>
                      <span v-if="val.period.selection">
                        {{ val.period.selection.value }}
                      </span>
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
      :header="$t('chiefComplaint.chiefComplaint.label')"
      @cancel="closeEditDialog"
      @save="editRow"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-6 col-lg-4">
          <div class="form-group physician-name">
            <label class="form-label">{{
              $t("chiefComplaint.physicianName.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.rowToEdit.physicianName.$error }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="rowToEdit.physicianName"
                :suggestions="physicianNamesPamams.suggestions"
                :class="{ 'p-invalid': $v.rowToEdit.physicianName.$error }"
                field="value"
                :placeholder="$t('chiefComplaint.physicianName.placeholder')"
                @complete="search($event, physicianNamesPamams)"
              />
            </div>

            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToEdit.physicianName.$error &&
                  !$v.rowToEdit.physicianName.validator
                "
              >
                {{ inputError($t("chiefComplaint.physicianName.label")) }}
              </small>
              <small
                class="p-invalid"
                v-else-if="
                  $v.rowToEdit.physicianName.$error &&
                  !$v.rowToEdit.physicianName.required
                "
              >
                {{ requiredError($t("chiefComplaint.physicianName.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="form-group reason">
            <label for="" class="form-label">{{
              $t("chiefComplaint.reason.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('chiefComplaint.reason.placeholder')"
              v-model="rowToEdit.reason"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.reason.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.reason.notContainsHtmlTags &&
                $v.rowToEdit.reason.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("chiefComplaint.reason.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.reason.minLength && $v.rowToEdit.reason.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("chiefComplaint.reason.label"),
                  $v.rowToEdit.reason.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.reason.maxLength && $v.rowToEdit.reason.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("chiefComplaint.reason.label"),
                  $v.rowToEdit.reason.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="form-group date">
            <label class="form-label">{{
              $t("chiefComplaint.date.label")
            }}</label>
            <Calendar
              v-model="rowToEdit.date"
              :placeholder="$t('chiefComplaint.date.placeholder')"
              :showIcon="true"
              :class="{
                'p-invalid':
                  $v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate,
              }"
              dateFormat="mm-dd-yy"
              @date-select="formateDateEditInput"
            />
            <small
              class="d-block text-danger"
              v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
            >
              {{ dateError($t("chiefComplaint.date.label")) }}
            </small>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="form-group treatment-program">
            <label class="form-label">{{
              $t("chiefComplaint.treatmentProgram.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.rowToEdit.treatmentProgram.$error }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="rowToEdit.treatmentProgram"
                :suggestions="treatmentProgramParams.suggestions"
                :class="{ 'p-invalid': $v.rowToEdit.treatmentProgram.$error }"
                field="value"
                :placeholder="$t('chiefComplaint.treatmentProgram.placeholder')"
                @complete="search($event, treatmentProgramParams)"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToEdit.treatmentProgram.$error &&
                  !$v.rowToEdit.treatmentProgram.validator
                "
              >
                {{ inputError($t("chiefComplaint.treatmentProgram.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="form-group period">
            <CustomInputGroup
              v-model="rowToEdit.period"
              :options="periodUnitOptions"
              :label="$t('chiefComplaint.period.label')"
              :valueType="'number'"
              :valuePlaceholder="$t('chiefComplaint.period.valuePlaceholder')"
              :dropdownPlaceholder="
                $t('chiefComplaint.period.dropdownPlaceholder')
              "
              :invalidValue="$v.rowToEdit.period.value.$invalid"
            />

            <div class="error">
              <small
                class="d-block text-danger"
                v-if="
                  $v.rowToEdit.period.value.$error &&
                  !$v.rowToEdit.period.value.decimal
                "
              >
                {{ numericError($t("chiefComplaint.period.label")) }}
              </small>

              <small
                class="p-invalid"
                v-else-if="
                  !$v.rowToEdit.period.value.maxLength &&
                  $v.rowToEdit.period.value.$error
                "
              >
                {{ maxValueError($t("chiefComplaint.period.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="form-group comment">
            <label for="" class="form-label">{{
              $t("chiefComplaint.comment.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('chiefComplaint.comment.placeholder')"
              v-model="rowToEdit.comment"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.comment.$error,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.comment.notContainsHtmlTags &&
                $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("chiefComplaint.comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.comment.minLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("chiefComplaint.comment.label"),
                  $v.rowToEdit.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.comment.maxLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("chiefComplaint.comment.label"),
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
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/physiotherapy/chiefComplaint.json"></i18n>

<script>
import { mapGetters, mapActions } from "vuex";
import { convertDate } from "@/helpers/utilities";
import { cloneDeep } from "lodash";

// ////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxRecordsError,
  maxValueError,
  requiredError,
  maxLengthError,
  inputError,
  dateError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  required,
  maxValue,
  decimal,
} from "vuelidate/lib/validators";
import { validDate, notContainsHtmlTags } from "@/validation/customValidators";
// //////////////////////////////////////////////////////////

import physicalTherapyOptions from "@/mixins/mr/physiotherapy/options/chiefComplaintOptions";

// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
/////////////////////////////////////////////////////////////
export default {
  mixins: [physicalTherapyOptions],
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
    CustomInputGroup,
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getChiefComplaint: "getChiefComplaint",
    }),
    chiefComplaint: {
      get() {
        return this.getChiefComplaint;
      },
      set(value) {
        this.setChiefComplaint(value);
      },
    },
  },
  data() {
    return {
      rowToAdd: {
        physicianName: null,
        reason: "",
        date: "",
        treatmentProgram: null,
        period: {
          selection: "",
          value: "",
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
  validations: {
    rowToAdd: {
      physicianName: {
        required,
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },

      reason: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      date: {
        validDate(value) {
          return validDate(value);
        },
      },
      treatmentProgram: {
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },
      period: {
        value: {
          decimal,
          maxValue: maxValue(100),
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
      physicianName: {
        required,
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },
      reason: {
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
          return notContainsHtmlTags(value);
        },
      },
      date: {
        validDate(value) {
          return validDate(value);
        },
      },
      treatmentProgram: {
        validator: (value) => {
          if (typeof value == "object" || value == null || value == "")
            return true;
          else {
            return (
              value.length > 0 &&
              value.length < 255 &&
              notContainsHtmlTags(value)
            );
          }
        },
      },
      period: {
        value: {
          decimal,
          maxValue: maxValue(100),
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
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setChiefComplaint"]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    dateError,
    requiredError,
    maxRecordsError,
    maxValueError,
    inputError,
    formateDateInput() {
      this.rowToAdd.date = convertDate(this.rowToAdd.date);
    },
    formateDateEditInput() {
      this.rowToEdit.date = convertDate(this.rowToEdit.date);
    },
    resetForm() {
      this.rowToAdd = {
        physicianName: null,
        reason: "",
        date: "",
        treatmentProgram: null,
        period: {
          selection: "",
          value: "",
        },
        comment: "",
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    reset() {
      this.resetForm();
      this.chiefComplaint = [];
    },
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.$v.rowToAdd.$invalid || this.v.$invalid)) {
        this.chiefComplaint.push({ ...this.rowToAdd });
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
      this.v.$touch();
      this.$v.rowToEdit.$touch();
      if (!this.$v.rowToEdit.$invalid || this.v.$invalid) {
        this.chiefComplaint[this.indexToEdit] = { ...this.rowToEdit };
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
      this.chiefComplaint.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
