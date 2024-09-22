<template>
  <div class="conclusion">
    <Base>
      <div class="row">
        <div class="col-12">
          <div class="head d-flex justify-content-between">
            <h4 class="mb-0">Conclusion</h4>
            <ResetButton @reset="reset"></ResetButton>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group rom">
            <label for="" class="form-label">{{ $t("rom.label") }}</label>
            <input
              type="text"
              :placeholder="$t('rom.placeholder')"
              v-model="conclusion.rom"
              class="form-control"
              :class="{
                'is-invalid': v.rom.$error,
              }"
            />
            <div
              v-if="
                !v.rom.notContainsHtmlTags &&
                v.rom.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("rom.label")) }}
            </div>
            <div
              v-else-if="
                !v.rom.minLength && v.rom.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("rom.label"),
                  v.rom.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.rom.maxLength && v.rom.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("rom.label"),
                  v.rom.$params.maxLength.max
                )
              }}
            </div>
            <!-- <div
              v-else-if="
                !v.rom.required && v.rom.$invalid
              "
              class="invalid-feedback"
            >
              {{
                requiredError(
                  $t("rom.label"),
                  v.rom.$params.maxLength.max
                )
              }}
            </div> -->
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group muscle">
            {{ v.muscle.$touch() }}
            <label for="" class="form-label">{{ $t("muscle.label") }}</label>
            <input
              type="text"
              :placeholder="$t('muscle.placeholder')"
              v-model="conclusion.muscle"
              class="form-control"
              :class="{
                'is-invalid': v.muscle.$error,
              }"
            />
            <div
              v-if="
                !v.muscle.notContainsHtmlTags &&
                v.muscle.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("muscle.label")) }}
            </div>
            <div
              v-else-if="
                !v.muscle.minLength && v.muscle.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("muscle.label"),
                  v.muscle.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.muscle.maxLength && v.muscle.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("muscle.label"),
                  v.muscle.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group skin">
            {{ v.skin.$touch() }}
            <label for="" class="form-label">{{ $t("skin.label") }}</label>
            <input
              type="text"
              :placeholder="$t('skin.placeholder')"
              v-model="conclusion.skin"
              class="form-control"
              :class="{
                'is-invalid': v.skin.$error,
              }"
            />
            <div
              v-if="
                !v.skin.notContainsHtmlTags &&
                v.skin.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("skin.label")) }}
            </div>
            <div
              v-else-if="
                !v.skin.minLength && v.skin.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("skin.label"),
                  v.skin.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.skin.maxLength && v.skin.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("skin.label"),
                  v.skin.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group cardio">
            {{ v.cardio.$touch() }}
            <label for="" class="form-label">{{ $t("cardio.label") }}</label>
            <input
              type="text"
              :placeholder="$t('cardio.placeholder')"
              v-model="conclusion.cardio"
              class="form-control"
              :class="{
                'is-invalid': v.cardio.$error,
              }"
            />
            <div
              v-if="
                !v.cardio.notContainsHtmlTags &&
                v.cardio.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("cardio.label")) }}
            </div>
            <div
              v-else-if="
                !v.cardio.minLength && v.cardio.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("cardio.label"),
                  v.cardio.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.cardio.maxLength && v.cardio.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("cardio.label"),
                  v.cardio.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group gait">
            {{ v.gait.$touch() }}
            <label for="" class="form-label">{{ $t("gait.label") }}</label>
            <input
              type="text"
              :placeholder="$t('gait.placeholder')"
              v-model="conclusion.gait"
              class="form-control"
              :class="{
                'is-invalid': v.gait.$error,
              }"
            />
            <div
              v-if="
                !v.gait.notContainsHtmlTags &&
                v.gait.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("gait.label")) }}
            </div>
            <div
              v-else-if="
                !v.gait.minLength && v.gait.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("gait.label"),
                  v.gait.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.gait.maxLength && v.gait.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("gait.label"),
                  v.gait.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group transfers">
            {{ v.transfers.$touch() }}
            <label for="" class="form-label">{{ $t("transfers.label") }}</label>
            <input
              type="text"
              :placeholder="$t('transfers.placeholder')"
              v-model="conclusion.transfers"
              class="form-control"
              :class="{
                'is-invalid': v.transfers.$error,
              }"
            />
            <div
              v-if="
                !v.transfers.notContainsHtmlTags &&
                v.transfers.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("transfers.label")) }}
            </div>
            <div
              v-else-if="
                !v.transfers.minLength &&
                v.transfers.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("transfers.label"),
                  v.transfers.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.transfers.maxLength &&
                v.transfers.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("transfers.label"),
                  v.transfers.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group balance">
            {{ v.balance.$touch() }}
            <label for="" class="form-label">{{ $t("balance.label") }}</label>
            <input
              type="text"
              :placeholder="$t('balance.placeholder')"
              v-model="conclusion.balance"
              class="form-control"
              :class="{
                'is-invalid': v.balance.$error,
              }"
            />
            <div
              v-if="
                !v.balance.notContainsHtmlTags &&
                v.balance.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("balance.label")) }}
            </div>
            <div
              v-else-if="
                !v.balance.minLength &&
                v.balance.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("balance.label"),
                  v.balance.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.balance.maxLength &&
                v.balance.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("balance.label"),
                  v.balance.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group upper">
            {{ v.upper.$touch() }}
            <label for="" class="form-label">{{ $t("upper.label") }}</label>
            <input
              type="text"
              :placeholder="$t('upper.placeholder')"
              v-model="conclusion.upper"
              class="form-control"
              :class="{
                'is-invalid': v.upper.$error,
              }"
            />
            <div
              v-if="
                !v.upper.notContainsHtmlTags &&
                v.upper.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("upper.label")) }}
            </div>
            <div
              v-else-if="
                !v.upper.minLength && v.upper.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("upper.label"),
                  v.upper.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.upper.maxLength && v.upper.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("upper.label"),
                  v.upper.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xxl-3">
          <div class="form-group lower">
            {{ v.lower.$touch() }}
            <label for="" class="form-label">{{ $t("lower.label") }}</label>
            <input
              type="text"
              :placeholder="$t('lower.placeholder')"
              v-model="conclusion.lower"
              class="form-control"
              :class="{
                'is-invalid': v.lower.$error,
              }"
            />
            <div
              v-if="
                !v.lower.notContainsHtmlTags &&
                v.lower.$invalid
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("lower.label")) }}
            </div>
            <div
              v-else-if="
                !v.lower.minLength && v.lower.$invalid
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("lower.label"),
                  v.lower.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="
                !v.lower.maxLength && v.lower.$invalid
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("lower.label"),
                  v.lower.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/physiotherapy/conclusion.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
///////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
///////////////////////////////////////////////////////////
import {
  htmlTagsError,
  minLengthError,
  requiredError,
  maxLengthError,
} from "@/validation/errors";
import { minLength, maxLength, required } from "vuelidate/lib/validators";
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
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsPhysiotherapy/physiotherapy", {
      getConclusion: "getConclusion",
    }),
    conclusion: {
      get() {
        return this.getConclusion;
      },
      set(value) {
        this.setConclusion(value);
      },
    },
  },
  methods: {
    ...mapActions("detailsPhysiotherapy/physiotherapy", ["setConclusion", "resetConclusion"]),
    htmlTagsError,
    maxLengthError,
    minLengthError,
    requiredError,
    reset() {
      this.resetConclusion();
    },
  },
};
</script>

<style></style>
