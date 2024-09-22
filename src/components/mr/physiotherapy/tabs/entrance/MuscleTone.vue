<template>
  <div class="muscl-test">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <div class="form-group reset d-flex align-items-center" id="info">
            <h4 class="mb-0 me-2">Muscle Tone</h4>
            <button
              class="btn btn-default btn-icon rounded-circle"
              @click="toggle"
              @mouseover="toggle"
            >
              <i class="fa fa-info fa-md"></i>
            </button>
            <OverlayPanel
              ref="muscleToneInfoOp"
              appendTo="body"
              id="info_overlay_panel"
              style="width: 320px"
            >
              <h6 class="">QUOTATION FOR MUSCLE TONE</h6>
              <span class="fs-12">according to Modified Ashworth Scale</span>
              <ol class="mt-1 mb-0">
                <li><small>No increase in tone</small></li>
                <li>
                  <small
                    >Slight increase in tone giving a catch when limb is
                    moved</small
                  >
                </li>
                <li><small>More marked increase in tone</small></li>
                <li>
                  <small
                    >Considerable increase in tone – passive movement
                    difficult</small
                  >
                </li>
                <li><small> Limb rigid</small></li>
              </ol>
            </OverlayPanel>
          </div>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("muscle.label") }}</label>
            <CustomCascade
              v-model="rowToAdd.muscle"
              :placeholder="$t('muscle.placeholder')"
              :options="muscleOptions"
              :invalid="$v.rowToAdd.muscle.$error"
            />
          </div>
          <small
            class="p-invalid"
            v-if="$v.rowToAdd.muscle.$error && !$v.rowToAdd.muscle.required"
          >
            {{ requiredError($t("muscle.placeholder")) }}
          </small>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("baseline.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.baseline.right.$error,
              }"
              v-model="rowToAdd.baseline.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.baseline.right.decimal &&
                $v.rowToAdd.baseline.right.$invalid
              "
            >
              {{ inputError($t("baseline.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.baseline.right.minValue &&
                $v.rowToAdd.baseline.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("baseline.label"),
                  $v.rowToAdd.baseline.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.baseline.right.maxValue &&
                $v.rowToAdd.baseline.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("baseline.label"),
                  $v.rowToAdd.baseline.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("baseline.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.baseline.left.$error,
              }"
              v-model="rowToAdd.baseline.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.baseline.left.decimal &&
                $v.rowToAdd.baseline.left.$invalid
              "
            >
              {{ inputError($t("baseline.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.baseline.left.minValue &&
                $v.rowToAdd.baseline.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("baseline.label"),
                  $v.rowToAdd.baseline.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.baseline.left.maxValue &&
                $v.rowToAdd.baseline.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("baseline.label"),
                  $v.rowToAdd.baseline.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.end.right.$error,
              }"
              v-model="rowToAdd.end.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.end.right.decimal && $v.rowToAdd.end.right.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.right.minValue &&
                $v.rowToAdd.end.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.right.maxValue &&
                $v.rowToAdd.end.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToAdd.end.left.$error,
              }"
              v-model="rowToAdd.end.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToAdd.end.left.decimal && $v.rowToAdd.end.left.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.left.minValue && $v.rowToAdd.end.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToAdd.end.left.maxValue && $v.rowToAdd.end.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToAdd.end.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group comment">
            <label for="" class="form-label">{{ $t("comment.label") }}</label>
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
              v-else-if="
                !$v.rowToAdd.comment.minLength && $v.rowToAdd.comment.$invalid
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
                !$v.rowToAdd.comment.maxLength && $v.rowToAdd.comment.$invalid
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
        <div class="col-md-4 col-xxl-3">
          <AddButton @add="addRow"></AddButton>
          <small v-if="v.$error && !v.maxLength" class="p-invalid">
            {{
              maxRecordsError($t("muscleTest.header"), v.$params.maxLength.max)
            }}
          </small>
        </div>
      </div>
    </Base>
    <div class="table-wrapper my-2" v-if="muscleTone.length > 0">
      <Base>
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col" rowspan="2">
                      {{ $t("table.thead.count") }}
                    </th>
                    <th scope="col" rowspan="2">{{ $t("muscle.label") }}</th>
                    <th scope="col" colspan="2">{{ $t("baseline.label") }}</th>
                    <th scope="col" colspan="2">{{ $t("end.label") }}</th>
                    <th scope="col" rowspan="2">{{ $t("comment.label") }}</th>
                    <th scope="col" rowspan="2">
                      {{ $t("table.thead.controls") }}
                    </th>
                  </tr>
                  <tr class="border-none">
                    <th>({{ $t("right.label") }}</th>
                    <th>{{ $t("left.label") }})</th>
                    <th>({{ $t("right.label") }}</th>
                    <th>{{ $t("left.label") }})</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(val, index) in muscleTone" :key="index">
                    <td class="align-middle">{{ parseInt(index) + 1 }}</td>
                    <td class="align-middle">
                      <div v-if="val.muscle.length">
                        {{ val.muscle.join("/") }}
                      </div>
                    </td>
                    <td class="align-middle">
                      <span>({{ val.baseline.right }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.baseline.left }})</span>
                    </td>
                    <td class="align-middle">
                      <span>({{ val.end.right }}</span>
                    </td>
                    <td class="align-middle">
                      <span>{{ val.end.left }})</span>
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
      :header="$t('muscleTone.label')"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("muscle.label") }}</label>
            <CustomCascade
              v-model="rowToEdit.muscle"
              :placeholder="$t('muscle.placeholder')"
              :options="muscleOptions"
              :invalid="$v.rowToEdit.muscle.$error"
            />
            <small
              class="p-invalid"
              v-if="$v.rowToEdit.muscle.$error && !$v.rowToEdit.muscle.required"
            >
              {{ requiredError($t("muscle.placeholder")) }}
            </small>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.baseline">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("baseline.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.baseline.right.$error,
              }"
              v-model="rowToEdit.baseline.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.baseline.right.decimal &&
                $v.rowToEdit.baseline.right.$invalid
              "
            >
              {{ inputError($t("baseline.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.baseline.right.minValue &&
                $v.rowToEdit.baseline.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("baseline.label"),
                  $v.rowToEdit.baseline.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.baseline.right.maxValue &&
                $v.rowToEdit.baseline.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("baseline.label"),
                  $v.rowToEdit.baseline.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.baseline">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("baseline.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.baseline.left.$error,
              }"
              v-model="rowToEdit.baseline.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.baseline.left.decimal &&
                $v.rowToEdit.baseline.left.$invalid
              "
            >
              {{ inputError($t("baseline.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.baseline.left.minValue &&
                $v.rowToEdit.baseline.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("baseline.label"),
                  $v.rowToEdit.baseline.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.baseline.left.maxValue &&
                $v.rowToEdit.baseline.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("baseline.label"),
                  $v.rowToEdit.baseline.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.end">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.end.right.$error,
              }"
              v-model="rowToEdit.end.right"
              :placeholder="$t('right.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.end.right.decimal &&
                $v.rowToEdit.end.right.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.right.minValue &&
                $v.rowToEdit.end.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.right.maxValue &&
                $v.rowToEdit.end.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3" v-if="rowToEdit.end">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("end.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': $v.rowToEdit.end.left.$error,
              }"
              v-model="rowToEdit.end.left"
              :placeholder="$t('left.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !$v.rowToEdit.end.left.decimal && $v.rowToEdit.end.left.$invalid
              "
            >
              {{ inputError($t("end.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.left.minValue &&
                $v.rowToEdit.end.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !$v.rowToEdit.end.left.maxValue &&
                $v.rowToEdit.end.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("end.label"),
                  $v.rowToEdit.end.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group comment">
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
                !$v.rowToEdit.comment.notContainsHtmlTags &&
                $v.rowToEdit.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("comment.label")) }}
            </div>
            <div
              v-else-if="
                !$v.rowToEdit.comment.minLength && $v.rowToEdit.comment.$invalid
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
                !$v.rowToEdit.comment.maxLength && $v.rowToEdit.comment.$invalid
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
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/physiotherapy/muscle.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import muscleOptions from "@/mixins/mr/physiotherapy/options/muscleOptions";
///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  inputError,
  minValueError,
  maxValueError,
  requiredError,
  maxRecordsError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  minValue,
  maxValue,
  decimal,
  required,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import CustomCascade from "@/components/global/custom/CustomCascade.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
export default {
  mixins: [muscleOptions],
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
    CustomCascade,
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,
  },
  data() {
    return {
      form: [],
      rowToAdd: {
        muscle: [],
        normal: "",
        baseline: {
          right: "",
          left: "",
        },
        end: {
          right: "",
          left: "",
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
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getMuscleTone: "getMuscleTone",
    }),
    muscleTone: {
      get() {
        return this.getMuscleTone;
      },
      set(value) {
        this.setMuscleTone(value);
      },
    },
  },
  validations: {
    rowToAdd: {
      muscle: {
        required,
      },
      baseline: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      end: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
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
      muscle: {
        required,
      },
      baseline: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
      },
      end: {
        right: {
          decimal,
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        left: {
          decimal,
          minValue: minValue(1),
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
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setMuscleTone", "resetMuscleTone"]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    inputError,
    minValueError,
    maxValueError,
    maxRecordsError,
    requiredError,
    toggle(event) {
      this.$refs.muscleToneInfoOp.toggle(event);
    },
    resetForm() {
      this.rowToAdd = {
        muscle: [],
        normal: "",
        baseline: {
          right: "",
          left: "",
        },
        end: {
          right: "",
          left: "",
        },
        comment: "",
      };
      this.$v.rowToAdd.$reset();
      this.$v.$reset();
    },
    reset() {
      this.resetForm();
      this.muscleTone = [];
    },
    /////////////////////////
    addRow() {
      this.v.$touch();
      this.$v.rowToAdd.$touch();
      if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
        this.muscleTone.push({ ...this.rowToAdd });
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
        this.muscleTone[this.indexToEdit] = { ...this.rowToEdit };
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
      this.muscleTone.splice(this.indexToDelete, 1);
      this.closeDeleteDialog();
    },
  },
};
</script>
