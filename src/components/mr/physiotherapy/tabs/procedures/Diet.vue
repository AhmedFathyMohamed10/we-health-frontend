<template>
  <div class="diet">
    <Base>
      <h4>Diet</h4>
      <div class="diet-list">
        <div class="row">
          <div
            class="col-md-6 col-xl-4 my-2"
            v-for="(item, index) in diet"
            :key="index"
          >
            <div class="item">
              <div
                class="d-flex justify-content-between align-items-center flex-wrap"
              >
                <div v-if="typeof item.dietContent === 'object'" class="d-flex">
                  <span class="d-block"><strong>Name:</strong></span>
                  <span class="d-block">{{ item.dietContent[locale] }}</span>
                </div>
                <div v-else class="d-flex">
                  <span class="d-block"><strong>Name:</strong></span>
                  <span class="d-block">{{ item.dietContent }}</span>
                </div>
                <div
                  class="d-flex justify-content-between align-items-center gap-1"
                >
                  <span class="d-block status">
                    <strong>Status :</strong>
                    <span class="value" :class="[item.status]">
                      {{ findLocaleOption(dietStatusOptions, item.status) }}
                    </span>
                  </span>
                  <span
                    class="d-block edit-icon"
                    @click="openEditDialog(item, index)"
                  >
                    <i class="pi pi-ellipsis-v align-middle"></i>
                  </span>
                </div>
              </div>
              <div class="d-flex">
                <span class="d-block"><strong>Meal :</strong> </span>
                <span class="d-block">{{ item.meal }}</span>
              </div>
              <div class="d-flex">
                <span class="d-block"><strong>period :</strong> </span>
                <span class="d-block"
                  >{{ item.period.value }} / {{ item.period.selection }}</span
                >
              </div>
              <!-- <div><span><strong>Evaluation : </strong>{{item.evaluation}}</span></div> -->
              <div
                class="d-flex justify-content-between align-items-center gap-3"
              >
                <span class="d-block flex-grow-1">
                  <strong>Evaluation:</strong>
                </span>
                <EvaluationMetric
                  v-model="item.evaluation"
                  :levels="levels"
                  :read-only="true"
                >
                </EvaluationMetric>
              </div>
              <div class="d-flex">
                <span class="d-block"> <strong>Comment :</strong> </span>
                <span class="d-block">{{ item.comment }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>

    <EditDialog
      :display="displayEditDialog"
      :header="$t('diet.header')"
      @cancel="closeEditDialog"
      @save="editRow"
      @close="closeEditDialog"
    >
      <div class="row" v-if="rowToEdit">
        <div class="col-md-6 col-xxl-4">
          <div class="form-group">
            <label class="form-label">{{ $t("diet.dietContent.label") }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{
                  'p-invalid': $v.rowToEdit.dietContent.$error,
                }"
              >
                <i class="mdi mdi-pill"></i>
              </span>
              <AutoComplete
                v-model="rowToEdit.dietContent"
                :suggestions="issuePrams.suggestions"
                field="value"
                @complete="search($event,issuePrams)"
                :placeholder="$t('diet.dietContent.placeholder')"
                :class="{
                  'p-invalid': $v.rowToEdit.dietContent.$error,
                }"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.rowToEdit.dietContent.$error &&
                  !$v.rowToEdit.dietContent.validator
                "
              >
                {{ inputError($t("diet.dietContent.label")) }}
              </small>
              <small
                class="p-invalid"
                v-else-if="
                  $v.rowToEdit.dietContent.$error &&
                  !$v.rowToEdit.dietContent.required
                "
              >
                {{ requiredError($t("diet.dietContent.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("diet.meal.label") }}</label>
            <Dropdown
              v-model="rowToEdit.meal"
              :options="mealOptions"
              optionLabel="value"
              :placeholder="$t('diet.meal.placeholder')"
            />
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group period">
            <CustomInputGroup
              v-model="rowToEdit.period"
              :options="periodUnitOptions"
              :label="$t('diet.period.label')"
              :valueType="'number'"
              :valuePlaceholder="$t('diet.period.valuePlaceholder')"
              :dropdownPlaceholder="$t('diet.period.dropdownPlaceholder')"
              :invalidValue="$v.rowToEdit.period.value.$invalid"
            />
            <div class="error">
              <small
                class="d-block text-danger"
                v-if="
                  $v.rowToEdit.period.value.$error &&
                  !$v.rowToEdit.period.value.numeric
                "
              >
                {{ numericError($t("diet.period.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group status">
            <label class="form-label">{{ $t("diet.status.label") }}</label>
            <Dropdown
              v-model="rowToEdit.status"
              :placeholder="$t('sessions.status.placeholder')"
              :options="dietStatusOptions"
              optionLabel="value"
            />
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group status">
            <label class="form-label">{{ $t("diet.evaluation.label") }}</label>
            <div class="form-group" v-if="rowToEdit.evaluation">
              <EvaluationMetric
                v-model="rowToEdit.evaluation"
                :levels="levels"
              ></EvaluationMetric>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-xxl-4">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("diet.comment.label")
            }}</label>
            <input
              type="text"
              :placeholder="$t('diet.comment.placeholder')"
              v-model="rowToEdit.comment"
              class="form-control"
              :class="{
                'is-invalid':
                  $v.rowToEdit.comment.$invalid &&
                  $v.rowToEdit.comment.$anyDirty &&
                  $v.rowToEdit.comment.$anyError,
              }"
            />
            <div
              v-if="
                !$v.rowToEdit.comment.notContainsHtmlTags &&
                $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("diet.comment.label")) }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.comment.minLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("diet.comment.label"),
                  $v.rowToEdit.comment.$params.minLength.min
                )
              }}
            </div>
            <div
              v-if="
                !$v.rowToEdit.comment.maxLength && $v.rowToEdit.comment.$error
              "
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("diet.comment.label"),
                  $v.rowToEdit.comment.$params.maxLength.max
                )
              }}
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/diet/diet.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
import EvaluationMetric from "./EvaluationMetric.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue";
/////////////////////////////////////////////////
import { findLocaleOption } from "@/helpers/utilities";
import {
  htmlTagsError,
  minLengthError,
  maxLengthError,
  inputError,
  requiredError,
} from "@/validation/errors";
import {
  minLength,
  maxLength,
  required,
  numeric,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
/////////////////////////////////////////////////
import dietOptions from "@/mixins/mr/global/diet/options/dietOptions";
import dietStatusOptions from "@/mixins/mr/physiotherapy/options/procedures";
import planningSessionsOptions from "@/mixins/mr/physiotherapy/options/planningSessionsOptions";


import { mapGetters } from "vuex";
export default {
  mixins: [dietOptions,dietStatusOptions,planningSessionsOptions],
  components: {
    Base,
    CustomInputGroup,
    EvaluationMetric,
    EditDialog,
  },
  props:{
    dietOptions:{
      required:true,
      type: Object,

    }
  },

  data() {
    return {
      // dietContentsOptions: [
      //   { en: "New York", ar: "New York" },
      //   { en: "Rome", ar: "Rome" },
      //   { en: "London", ar: "London" },
      //   { en: "Istanbul", ar: "Istanbul" },
      //   { en: "Paris", ar: "Paris" },
      // ],
   
      levels: [
        { en: "Bad", ar: "سيء", id: 1 },
        { en: "Accepted", ar: "مقبول", id: 2 },
        { en: "Good", ar: "جيد", id: 3 },
        { en: "Very Good", ar: "جيد جدًا", id: 4 },
        { en: "Excellent ", ar: "ممتاز", id: 5 },
      ],
      indexToEdit: null,
      displayEditDialog: false,
      dietContentsSuggestions: [],
      rowToEdit: {},
      diet: [
        {
          dietContent: { en: "New York", ar: "New York", key: "newYork" },
          meal: "Breakfast",
          period: { selection: "days", value: "5" },
          comment: "test diet comment",
          status: "inProgress",
          evaluation: "3",
        },
        {
          dietContent: { en: "New York", ar: "New York", key: "newYork" },
          meal: "Lunch",
          period: { selection: "weeks", value: "2" },
          comment: "test diet comment 2",
          status: "done",
          evaluation: "9",
        },
        {
          dietContent: { en: "New York", ar: "New York", key: "newYork" },
          meal: "Dinner",
          period: { selection: "months", value: "3" },
          comment: "test diet comment 3",
          status: "cancelled",
          evaluation: "5",
        },
      ],
    };
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters("detailsGeneral/general", {
      getDiet: "getDiet",
    }),
    // diet:{
    //   get() {
    //       return this.getDiet;
    //   },
    //   set(value) {
    //       this.$store.dispatch('general/setDiet', value);
    //   }
    // },
  },
  validations: {
    rowToEdit: {
      dietContent: {
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
      period: {
        value: {
          numeric,
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
    htmlTagsError,
    maxLengthError,
    minLengthError,
    inputError,
    requiredError,
    findLocaleOption,
    /////////////////////
    searchDietContents(event) {
      setTimeout(() => {
        if (!event.query.trim().length) {
          this.dietContentsSuggestions = [...this.dietContentsOptions];
        } else {
          this.dietContentsSuggestions = this.dietContentsOptions.filter(
            (dietContentOption) => {
              return dietContentOption.en
                .toLowerCase()
                .startsWith(event.query.toLowerCase());
            }
          );
        }
      }, 250);
    },
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
        this.diet.splice(this.indexToEdit, 1, { ...this.rowToEdit });
        // this.diet[this.indexToEdit]={...this.rowToEdit};
        this.closeEditDialog();
      }
    },
    ////////////////////////
  },
};
</script>
<style lang="scss" scoped>
.diet {
  .item {
    padding: 1rem;
    border-radius: 0.5rem;
    // background-color:rgba($gray,0.2);
    box-shadow: 1px 1px 5px #e9edf4;
    .status {
      .value {
        padding: 0.25rem;
        margin: 0 0.25rem;
        border-radius: 0.25rem;
      }
      .remaining {
        background-color: rgba($secondary, 0.25);
      }
      .done {
        background-color: rgba($success, 0.25);
      }
      .passed {
        background-color: rgba($info, 0.25);
      }
      .inProgress {
        background-color: rgba($warning, 0.25);
      }
      .cancelled {
        background-color: rgba($danger, 0.25);
      }
    }
    .edit-icon {
      cursor: pointer;
    }
  }
}
</style>

<!-- <template>
  <div class="diet">
    <Base>    
      <h2>diet</h2>
      <h2>{{diet}}</h2>
    </Base>
</div>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue";
import { mapGetters } from 'vuex'
export default {
  components:{
    Base,
  },
  data(){
      return {
        dietStatusOptions:['done','passed','inProgress','remaining','cancelled'],
      }
    },

    computed: {
        // mix the getters into computed with object spread operator
        ...mapGetters('detailsGeneral/general',{
            'getDiet':'getDiet'
        }),
        diet:{
          get() {
              return this.getDiet;
          },
          set(value) {
              this.$store.dispatch('general/setDiet', value);
          }
        },
    }
  };
</script> -->
