<template>
  <div class="physical-measuring">
    <Base>
      <div class="row">
        <div class="col-12">
          <div class="head d-flex justify-content-between">
            <h4 class="mb-0">Physical Measurements</h4>
            <ResetButton @reset="reset"></ResetButton>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("humerus.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.humerus.right.$error,
              }"
              v-model="physicalMeasuring.humerus.right"
              :placeholder="$t('humerus.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.humerus.right.decimal &&
                v.humerus.right.$invalid
              "
            >
              {{ numericError($t("humerus.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.humerus.right.minValue &&
                v.humerus.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("humerus.label"),
                  v.humerus.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.humerus.right.maxValue &&
                v.humerus.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("humerus.label"),
                  v.humerus.right.$params.maxValue.max
                )
              }}
            </div>
            <!-- <div
              class="invalid-feedback"
              v-else-if="
                !v.humerus.right.required &&
                v.humerus.right.$invalid
              "
            >
              {{ requiredError($t("humerus.label")) }}
            </div> -->
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("humerus.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.humerus.left.$error,
              }"
              v-model="physicalMeasuring.humerus.left"
              :placeholder="$t('humerus.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.humerus.left.decimal &&
                v.humerus.left.$invalid
              "
            >
              {{ numericError($t("humerus.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.humerus.left.minValue &&
                v.humerus.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("humerus.label"),
                  v.humerus.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.humerus.left.maxValue &&
                v.humerus.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("humerus.label"),
                  v.humerus.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("thigh.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.thigh.right.$error,
              }"
              v-model="physicalMeasuring.thigh.right"
              :placeholder="$t('thigh.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.thigh.right.decimal &&
                v.thigh.right.$invalid
              "
            >
              {{ numericError($t("thigh.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.thigh.right.minValue &&
                v.thigh.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("thigh.label"),
                  v.thigh.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.thigh.right.maxValue &&
                v.thigh.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("thigh.label"),
                  v.thigh.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("thigh.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.thigh.left.$error,
              }"
              v-model="physicalMeasuring.thigh.left"
              :placeholder="$t('thigh.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.thigh.left.decimal &&
                v.thigh.left.$invalid
              "
            >
              {{ numericError($t("thigh.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.thigh.left.minValue &&
                v.thigh.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("thigh.label"),
                  v.thigh.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.thigh.left.maxValue &&
                v.thigh.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("thigh.label"),
                  v.thigh.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("ventricle.label") }} ({{ $t("right.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.ventricle.right.$error,
              }"
              v-model="physicalMeasuring.ventricle.right"
              :placeholder="$t('ventricle.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.ventricle.right.decimal &&
                v.ventricle.right.$invalid
              "
            >
              {{ numericError($t("ventricle.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.ventricle.right.minValue &&
                v.ventricle.right.$invalid
              "
            >
              {{
                minValueError(
                  $t("ventricle.label"),
                  v.ventricle.right.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.ventricle.right.maxValue &&
                v.ventricle.right.$invalid
              "
            >
              {{
                maxValueError(
                  $t("ventricle.label"),
                  v.ventricle.right.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label"
              >{{ $t("ventricle.label") }} ({{ $t("left.label") }})
            </label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.ventricle.left.$error,
              }"
              v-model="physicalMeasuring.ventricle.left"
              :placeholder="$t('ventricle.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.ventricle.left.decimal &&
                v.ventricle.left.$invalid
              "
            >
              {{ numericError($t("ventricle.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.ventricle.left.minValue &&
                v.ventricle.left.$invalid
              "
            >
              {{
                minValueError(
                  $t("ventricle.label"),
                  v.ventricle.left.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.ventricle.left.maxValue &&
                v.ventricle.left.$invalid
              "
            >
              {{
                maxValueError(
                  $t("ventricle.label"),
                  v.ventricle.left.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("chest.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.chest.$error,
              }"
              v-model="physicalMeasuring.chest"
              :placeholder="$t('chest.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.chest.decimal &&
                v.chest.$invalid
              "
            >
              {{ numericError($t("chest.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.chest.minValue &&
                v.chest.$invalid
              "
            >
              {{
                minValueError(
                  $t("chest.label"),
                  v.chest.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.chest.maxValue &&
                v.chest.$invalid
              "
            >
              {{
                maxValueError(
                  $t("chest.label"),
                  v.chest.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("aquarium.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid': v.aquarium.$error,
              }"
              v-model="physicalMeasuring.aquarium"
              :placeholder="$t('aquarium.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.aquarium.decimal &&
                v.aquarium.$invalid
              "
            >
              {{ numericError($t("aquarium.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.aquarium.minValue &&
                v.aquarium.$invalid
              "
            >
              {{
                minValueError(
                  $t("aquarium.label"),
                  v.aquarium.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.aquarium.maxValue &&
                v.aquarium.$invalid
              "
            >
              {{
                maxValueError(
                  $t("aquarium.label"),
                  v.aquarium.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("belly.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid':
                  v.belly.$error,
              }"
              v-model="physicalMeasuring.belly"
              :placeholder="$t('belly.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.belly.decimal &&
                v.belly.$invalid
              "
            >
              {{ numericError($t("belly.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.belly.minValue &&
                v.belly.$invalid
              "
            >
              {{
                minValueError(
                  $t("belly.label"),
                  v.belly.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.belly.maxValue &&
                v.belly.$invalid
              "
            >
              {{
                maxValueError(
                  $t("belly.label"),
                  v.belly.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group">
            <label class="form-label">{{ $t("center.label") }}</label>
            <input
              type="number"
              class="form-control"
              :class="{
                'is-invalid':
                  v.center.$error,
              }"
              v-model="physicalMeasuring.center"
              :placeholder="$t('center.placeholder')"
            />
            <div
              class="invalid-feedback"
              v-if="
                !v.center.decimal &&
                v.center.$invalid
              "
            >
              {{ numericError($t("center.label")) }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.center.minValue &&
                v.center.$invalid
              "
            >
              {{
                minValueError(
                  $t("center.label"),
                  v.center.$params.minValue.min
                )
              }}
            </div>
            <div
              class="invalid-feedback"
              v-else-if="
                !v.center.maxValue &&
                v.center.$invalid
              "
            >
              {{
                maxValueError(
                  $t("center.label"),
                  v.center.$params.maxValue.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-xxl-4">
          <div class="form-group comment">
            <label for="" class="form-label">{{ $t("comment.label") }}</label>
            <textarea
              type="text"
              :placeholder="$t('comment.placeholder')"
              v-model="physicalMeasuring.comment"
              class="form-control"
              :class="{
                'is-invalid':
                  v.comment.$error,
              }"
            ></textarea>
            <div
              v-if="
                !v.comment.notContainsHtmlTags &&
                v.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("comment.label")) }}
            </div>
            <div
              v-if="
                !v.comment.minLength &&
                v.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("comment.label"),
                  v.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !v.comment.maxLength &&
                v.comment.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("comment.label"),
                  v.comment.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/physiotherapy/physicalMeasuring.json"></i18n>

<script>
import { mapGetters, mapActions } from "vuex";
/////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  requiredError,
  numericError,
  minValueError,
  maxValueError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  minValue,
  maxValue,
  required,
  decimal,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
export default {
  components: {
    Base,
    ResetButton,
  },
  props: {
    v: {
      type: Object,
      required:true
    }
  },
  data() {
    return {};
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getPhysicalMeasuring: "getPhysicalMeasuring",
    }),
    physicalMeasuring: {
      get() {
        return this.getPhysicalMeasuring;
      },
      set(value) {
        this.setPhysicalMeasuring(value);
      },
    },
  },
  validations: {
   
  },
  methods: {
    ...mapActions("detailsPhysiotherapy/physiotherapy", [
      "setPhysicalMeasuring",
      "resetPhysicalMeasuring",
    ]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    requiredError,
    numericError,
    minValueError,
    maxValueError,
    reset() {
      this.v.$reset();
      this.resetPhysicalMeasuring();
    },
  },
};
</script>

<style></style>
