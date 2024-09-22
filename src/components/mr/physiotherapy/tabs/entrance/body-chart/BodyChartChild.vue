<template>
  <div class="body-chart mb-2">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="form-group reset d-flex align-items-center" id="info">
            <h4 class="mb-0 me-2">Body of chart</h4>
          </div>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="form-group body">
            <label class="form-label text-center">Body Chart</label>
            <InteractiveBody
              :staticRef="'interactiveBody'"
              v-model="rowToAdd.partName"
            ></InteractiveBody>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("partName.label")
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  :value="rowToAdd.partName"
                  :placeholder="$t('partName.placeholder')"
                  disabled
                  :class="{
                    'is-invalid': $v.rowToAdd.partName.$error,
                  }"
                />
                <div
                  v-if="
                    !$v.rowToAdd.partName.$required &&
                    $v.rowToAdd.partName.$invalid
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("partName.label")) }}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group typeOfPain">
                <CustomDropdown
                  v-model="rowToAdd.typeOfPain"
                  :label="$t('typeOfPain.label')"
                  :options="typeOfPainOptions"
                  :inputType="'text'"
                  :invalidSelection="
                    $v.rowToAdd.typeOfPain.selection.$error ||
                    (serializer_error.typeOfPain
                      ? serializer_error.typeOfPain.selection
                        ? serializer_error.typeOfPain.selection.length > 0
                        : false
                      : false)
                  "
                  :invalidOther="
                    $v.rowToAdd.typeOfPain.other.$error ||
                    (serializer_error.typeOfPain
                      ? serializer_error.typeOfPain.other
                        ? serializer_error.typeOfPain.other.length > 0
                        : false
                      : false)
                  "
                >
                  <small
                    v-if="
                      $v.rowToAdd.typeOfPain.selection.$error &&
                      !$v.rowToAdd.typeOfPain.selection.required
                    "
                    class="p-invalid"
                  >
                    {{ requiredError($t("typeOfPain.label")) }}
                  </small>
                  <div
                    v-if="
                      $v.rowToAdd.typeOfPain.other.$invalid &&
                      !$v.rowToAdd.typeOfPain.other.notContainsHtmlTags
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("Type of Pain")) }}
                  </div>
                  <div
                    v-if="
                      !$v.rowToAdd.typeOfPain.other.minLength &&
                      $v.rowToAdd.typeOfPain.other.$invalid
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("Type of Pain"),
                        $v.rowToAdd.typeOfPain.other.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-if="
                      !$v.rowToAdd.typeOfPain.other.maxLength &&
                      $v.rowToAdd.typeOfPain.other.$invalid
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("Type of Pain"),
                        $v.rowToAdd.typeOfPain.other.$params.maxLength.max
                      )
                    }}
                  </div>
                </CustomDropdown>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group comment">
                <label for="" class="form-label">{{
                  $t("comment.label")
                }}</label>
                <input
                  type="text"
                  :placeholder="$t('comment.placeholder')"
                  v-model="rowToAdd.comment"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.rowToAdd.comment.$error,
                  }"
                />
                <div
                  v-if="
                    !$v.rowToAdd.comment.notContainsHtmlTags &&
                    $v.rowToAdd.comment.$invalid
                  "
                  class="invalid-feedback"
                >
                  {{ htmlTagsError($t("comment.label")) }}
                </div>
                <div
                  v-if="
                    !$v.rowToAdd.comment.minLength &&
                    $v.rowToAdd.comment.$invalid
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
                  v-if="
                    !$v.rowToAdd.comment.maxLength &&
                    $v.rowToAdd.comment.$invalid
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
            <div class="col-md-6">
              <div class="form-group">
                <div class="form-label">Current Level Of Pain</div>
                <EvaluationMetric
                  v-model="rowToAdd.levelOfPain.current"
                  :levels="levels"
                ></EvaluationMetric>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <div class="form-label">
                  Worst Level Of Pain In Last 24 hours
                </div>
                <EvaluationMetric
                  v-model="rowToAdd.levelOfPain.worst"
                  :levels="levels"
                ></EvaluationMetric>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <div class="form-label">
                  Best Level Of Pain In Last 24 hours
                </div>
                <EvaluationMetric
                  v-model="rowToAdd.levelOfPain.best"
                  :levels="levels"
                ></EvaluationMetric>
              </div>
            </div>
            <div class="col-md-5 col-xxl-5">
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
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="bodyChart.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("table.thead.count") }}</th>
                    <th scope="col">{{ $t("partName.label") }}</th>
                    <th scope="col">{{ $t("typeOfPain.label") }}</th>
                    <th scope="col">
                      {{ $t("levelOfPain.current.placeholder") }}
                    </th>
                    <th scope="col">
                      {{ $t("levelOfPain.worst.placeholder") }}
                    </th>
                    <th scope="col">
                      {{ $t("levelOfPain.best.placeholder") }}
                    </th>
                    <th scope="col">{{ $t("comment.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in bodyChart" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <span>{{ val.partName }}</span>
                    </td>
                    <td class="align-middle" v-if="val.typeOfPain">
                      <span v-if="val.typeOfPain.other">
                        {{ val.typeOfPain.other }}
                      </span>
                      <span v-if="val.typeOfPain.selection">
                        {{
                          findLocaleOption(
                            typeOfPainOptions,
                            val.typeOfPain.selection.value
                          )
                        }}
                      </span>
                    </td>
                    <td class="align-middle" v-if="val.levelOfPain">
                      <span v-if="val.levelOfPain.current">
                        {{ val.levelOfPain.current }}
                        (
                        {{ levelOfPainDescription[val.levelOfPain.current] }} )
                      </span>
                    </td>
                    <td class="align-middle" v-if="val.levelOfPain">
                      <span v-if="val.levelOfPain.worst">
                        {{ val.levelOfPain.worst }}
                        ( {{ levelOfPainDescription[val.levelOfPain.worst] }} )
                      </span>
                    </td>
                    <td class="align-middle" v-if="val.levelOfPain">
                      <span v-if="val.levelOfPain.best">
                        {{ val.levelOfPain.best }}
                        ( {{ levelOfPainDescription[val.levelOfPain.best] }} )
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
      @cancel="closeEditDialog"
      @save="editRow"
      @close="closeEditDialog"
      :header="$t('bodyChart.header')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-4">
          <div class="form-group body">
            <label class="form-label text-center">Body Chart</label>
            <InteractiveBody
              :staticRef="'interactiveBodyEdit'"
              v-model="rowToEdit.partName"
            ></InteractiveBody>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("partName.label")
                }}</label>
                <input
                  type="text"
                  class="form-control"
                  :value="rowToEdit.partName"
                  :placeholder="$t('partName.placeholder')"
                  disabled
                  :class="{
                    'is-invalid': $v.rowToEdit.partName.$error,
                  }"
                />
                <div
                  v-if="
                    !$v.rowToEdit.partName.$required &&
                    $v.rowToEdit.partName.$invalid
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("partName.label")) }}
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group typeOfPain">
                <CustomDropdown
                  v-model="rowToEdit.typeOfPain"
                  :label="$t('typeOfPain.label')"
                  :options="typeOfPainOptions"
                  :inputType="'text'"
                  :invalidSelection="
                    $v.rowToEdit.typeOfPain.selection.$error ||
                    (serializer_error.typeOfPain
                      ? serializer_error.typeOfPain.selection
                        ? serializer_error.typeOfPain.selection.length > 0
                        : false
                      : false)
                  "
                  :invalidOther="
                    $v.rowToEdit.typeOfPain.other.$error ||
                    (serializer_error.typeOfPain
                      ? serializer_error.typeOfPain.other
                        ? serializer_error.typeOfPain.other.length > 0
                        : false
                      : false)
                  "
                >
                  <small
                    v-if="
                      $v.rowToEdit.typeOfPain.selection.$error &&
                      !$v.rowToEdit.typeOfPain.selection.required
                    "
                    class="p-invalid"
                  >
                    {{ requiredError($t("typeOfPain.label")) }}
                  </small>
                  <div
                    v-else-if="
                      $v.rowToEdit.typeOfPain.other.$invalid &&
                      !$v.rowToEdit.typeOfPain.other.notContainsHtmlTags
                    "
                    class="invalid-feedback"
                  >
                    {{ htmlTagsError($t("Type of Pain")) }}
                  </div>
                  <div
                    v-else-if="
                      !$v.rowToEdit.typeOfPain.other.minLength &&
                      $v.rowToEdit.typeOfPain.other.$invalid
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("Type of Pain"),
                        $v.rowToEdit.typeOfPain.other.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-if="
                      !$v.rowToEdit.typeOfPain.other.maxLength &&
                      $v.rowToEdit.typeOfPain.other.$invalid
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("Type of Pain"),
                        $v.rowToEdit.typeOfPain.other.$params.maxLength.max
                      )
                    }}
                  </div>
                </CustomDropdown>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group comment">
                <label for="" class="form-label">{{
                  $t("comment.label")
                }}</label>
                <input
                  type="text"
                  :placeholder="$t('comment.placeholder')"
                  v-model="rowToEdit.comment"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.rowToEdit.comment.$error,
                  }"
                />
                <div
                  v-if="
                    !$v.rowToEdit.comment.notContainsHtmlTags &&
                    $v.rowToEdit.comment.$invalid
                  "
                  class="invalid-feedback"
                >
                  {{ htmlTagsError($t("comment.label")) }}
                </div>
                <div
                  v-else-if="
                    !$v.rowToEdit.comment.minLength &&
                    $v.rowToEdit.comment.$invalid
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
                    $v.rowToEdit.comment.$invalid
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
            <div class="offset-md-3 col-md-6">
              <div class="form-group" v-if="rowToEdit.levelOfPain">
                <div class="form-label">Current Level Of Pain</div>
                <EvaluationMetric
                  v-model="rowToEdit.levelOfPain.current"
                  :levels="levels"
                ></EvaluationMetric>
              </div>
            </div>
            <div class="col-md-6" v-if="rowToEdit.levelOfPain">
              <div class="form-group">
                <div class="form-label">
                  Worst Level Of Pain In Last 24 hours
                </div>
                <EvaluationMetric
                  v-model="rowToEdit.levelOfPain.worst"
                  :levels="levels"
                ></EvaluationMetric>
              </div>
            </div>
            <div class="col-md-6" v-if="rowToEdit.levelOfPain">
              <div class="form-group">
                <div class="form-label">
                  Best Level Of Pain In Last 24 hours
                </div>
                <EvaluationMetric
                  v-model="rowToEdit.levelOfPain.best"
                  :levels="levels"
                ></EvaluationMetric>
              </div>
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
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  maxRecordsError,
  requiredError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  requiredIf,
  required,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { findLocaleOption } from "@/helpers/utilities";

/////////////////////////////////////////////////////////////////////
import bodyChartOptions from "@/mixins/mr/physiotherapy/options/bodyChartOptions";
////////////////////////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import InteractiveBody from "./InteractiveBody.vue";
import EvaluationMetric from "./EvaluationMetric.vue";

export default {
  mixins: [bodyChartOptions],
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
    InteractiveBody,
    CustomDropdown,
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,
    EvaluationMetric,
  },
  data() {
    return {
      levels: [
        { en: "No Pain", ar: "لا ألم", id: 1 },
        { en: "Mid", ar: "منتصف", id: 2 },
        { en: "Moderate", ar: "معتدل", id: 3 },
        { en: "Severe", ar: "شديد", id: 4 },
        { en: "Worst", ar: "أسوأ", id: 5 },
      ],
      levelOfPainDescription: [
        "No Pain",
        "No Pain",
        "Mid Pain",
        "Mid Pain",
        "Moderate Pain",
        "Moderate Pain",
        "Moderate Pain",
        "Severe Pain",
        "Severe Pain",
        "Worst Pain",
        "Worst Pain",
      ],
      rowToAdd: {
        partName: "",
        typeOfPain: {
          selection: "",
          other: "",
        },
        comment: "",
        levelOfPain: {
          current: "5",
          worst: "7",
          best: "4",
        },
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
      getBodyChart: "getBodyChart",
    }),
    bodyChart: {
      get() {
        return this.getBodyChart;
      },
      set(value) {
        this.setBodyChart(value);
      },
    },
  },
  validations: {
    rowToAdd: {
      partName: {
        required,
      },
      typeOfPain: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.typeOfPain.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.typeOfPain.selection;
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
      partName: {
        required,
      },
      typeOfPain: {
        selection: {
          required: requiredIf(function () {
            return !this.rowToAdd.typeOfPain.other;
          }),
        },
        other: {
          required: requiredIf(function () {
            return !this.rowToAdd.typeOfPain.selection;
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
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setBodyChart"]),
    htmlTagsError,
    maxLengthError,
    maxRecordsError,
    minLengthError,
    findLocaleOption,
    requiredError,
    resetForm() {
      this.rowToAdd = {
        partName: "",
        typeOfPain: {
          selection: "",
          other: "",
        },
        comment: "",
        levelOfPain: {
          current: "5",
          worst: "7",
          best: "4",
        },
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    reset() {
      this.resetForm();
      this.bodyChart = [];
    },
    /////////////////////////
    addRow() {
      this.v.$touch();
      
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.bodyChart.push({ ...this.rowToAdd });
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
        this.bodyChart[this.indexToEdit] = { ...this.rowToEdit };
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
      this.bodyChart.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>

<style lang="scss" scoped>
.body-chart {
  .body {
    border-radius: 1.5rem;
    padding: 1rem;
    box-shadow: $shadow-success;
  }
}
</style>
>
