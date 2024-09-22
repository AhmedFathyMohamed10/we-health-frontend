<template>
  <div class="medical-condition">
    <Base>
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
          <h4>{{ $t("medicalCondition.header") }}</h4>
          <ResetButton @reset="reset"></ResetButton>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(condition, i) in medicalConditionOptions"
          :key="i"
          class="col-md-4"
        >
          <div class="field-checkbox form-group d-flex">
            <Checkbox
              :id="condition.id"
              v-model="medicalCondition.conditions"
              :value="condition"
            />
            <label :for="condition.id" class="form-label ms-1 my-0">{{
              condition.value
            }}</label>
          </div>
        </div>
        <div class="col-md-4">
          <div class="field-checkbox form-group d-flex">
            <Checkbox id="otherChecked" v-model="otherChecked" :binary="true" />
            <label for="otherChecked" class="form-label ms-1 my-0">{{
              $t("medicalCondition.other.label")
            }}</label>
          </div>
          <InputText
            v-if="otherChecked"
            v-model="medicalCondition.other"
            :class="{
              'p-invalid':
                v.other.$error ||
                (serializer_error.other
                  ? serializer_error.other.length > 0
                  : false),
            }"
            :placeholder="$t('medicalCondition.other.placeholder')"
          />
          <div class="error">
            <small
              class="p-invalid"
              v-if="v.other.$error && !v.other.notContainsHtmlTags"
            >
              {{ htmlTagsError($t("medicalCondition.other.label")) }}
            </small>
            <small
              class="p-invalid"
              v-else-if="v.other.$error && !v.other.minLength"
            >
              {{
                minLengthError(
                  $t("medicalCondition.other.label"),
                  v.other.$params.minLength.min
                )
              }}
            </small>
            <small
              class="p-invalid"
              v-else-if="v.other.$error && !v.other.maxLength"
            >
              {{
                minLengthError(
                  $t("medicalCondition.other.label"),
                  v.other.$params.maxLength.max
                )
              }}
            </small>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label class="form-label">{{
              $t("medicalCondition.note.label")
            }}</label>
            <textarea
              v-model="medicalCondition.note"
              :placeholder="$t('medicalCondition.note.placeholder')"
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
              {{ htmlTagsError($t("medicalCondition.note.label")) }}
            </div>
            <div
              v-else-if="!v.note.minLength && v.note.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("medicalCondition.note.label"),
                  v.medicalCondition.note.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!v.note.maxLength && v.note.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("medicalCondition.note.label"),
                  v.note.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/ophthalmic/history.json"></i18n>
<script>
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors";
import historyOptions from "@/mixins/mr/ophthalmic/options/historyOptions";
import Base from "@/components/global/utilities/Base.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import { mapGetters } from "vuex";
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
    ResetButton,
  },
  data() {
    return {
      otherChecked: false,
    };
  },
  /////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getMedicalCondition"]),
    medicalCondition: {
      get() {
        return this.getMedicalCondition;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setMedicalCondition", value);
      },
    },
  },
  watch: {
    otherChecked() {
      if (!this.otherChecked) {
        this.medicalCondition.other = "";
        this.v.other.$reset();
      }
    },
  },
  methods: {
    htmlTagsError,
    minLengthError,
    maxLengthError,
    ////////////////////////////////
    reset() {
      (this.otherChecked = false),
        (this.medicalCondition = {
          conditions: [],
          other: "",
          note: "",
        });
      this.v.$reset();
    },
  },
};
</script>
<style lang="scss" scoped>
.medical-condition {
}
</style>
