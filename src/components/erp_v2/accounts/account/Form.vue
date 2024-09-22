<template>
  <div class="form">
    <EditDialog :display="displayForm" @close="cancelForm" @cancel="cancelForm" @save="saveForm" :isLoading="isLoading"
      :header="header">
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-4 col-sm-6">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.account_name_en.label")
                  }}</label>
                  <input type="text" v-model="form.account_name_en" :placeholder="$t('form.account_name_en.placeholder')"
                    class="form-control" :class="{
                      'is-invalid': $v.form.account_name_en.$error,
                    }" />
                  <div v-if="!$v.form.account_name_en.required &&
                    $v.form.account_name_en.$error
                    " class="invalid-feedback">
                    {{ requiredError($t("form.account_name_en.label")) }}
                  </div>
                  <div v-else-if="!$v.form.account_name_en.minLength &&
                    $v.form.account_name_en.$error
                    " class="invalid-feedback">
                    {{
                      maxLengthError(
                        $t("form.account_name_en.label"),
                        $v.form.account_name_en.$params.minLength.min
                      )
                    }}
                  </div>
                  <div v-else-if="!$v.form.account_name_en.maxLength &&
                      $v.form.account_name_en.$error
                      " class="invalid-feedback">
                    {{
                      minLengthError(
                        $t("form.account_name_en.label"),
                        $v.form.account_name_en.$params.maxLength.max
                      )
                    }}
                  </div>

                  <div v-else-if="!$v.form.account_name_en.notContainsHtmlTags &&
                      $v.form.account_name_en.$error
                      " class="invalid-feedback">
                    {{ htmlTagsError($t("form.account_name_en.label")) }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.account_name_ar.label")
                  }}</label>
                  <input type="text" v-model="form.account_name_ar" :placeholder="$t('form.account_name_ar.placeholder')"
                    class="form-control" :class="{
                      'is-invalid': $v.form.account_name_ar.$error,
                    }" />
                  <!-- <div v-if="!$v.form.account_name_ar.required &&
                    $v.form.account_name_ar.$error
                    " class="invalid-feedback">
                    {{ requiredError($t("form.account_name_ar.label")) }}
                  </div> -->
                  <div v-if="!$v.form.account_name_ar.minLength &&
                    $v.form.account_name_ar.$error
                    " class="invalid-feedback">
                    {{
                      maxLengthError(
                        $t("form.account_name_ar.label"),
                        $v.form.account_name_ar.$params.minLength.min
                      )
                    }}
                  </div>
                  <div v-else-if="!$v.form.account_name_ar.maxLength &&
                      $v.form.account_name_ar.$error
                      " class="invalid-feedback">
                    {{
                      minLengthError(
                        $t("form.account_name_ar.label"),
                        $v.form.account_name_ar.$params.maxLength.max
                      )
                    }}
                  </div>

                  <div v-else-if="!$v.form.account_name_ar.notContainsHtmlTags &&
                      $v.form.account_name_ar.$error
                      " class="invalid-feedback">
                    {{ htmlTagsError($t("form.account_name_ar.label")) }}
                  </div>
                </div>
                <div class="form-group" v-if="isUpdating">
                  <label for="" class="form-label">{{
                    $t("form.account_code.label")
                  }}</label>
                  <input type="text" v-model="form.account_code" :disabled="true"
                    :placeholder="$t('form.account_code.placeholder')" class="form-control" />
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-xl-4 col-sm-6">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.parent_account.label")}}</label>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.parent_account === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete 
                      v-model="form.parent_account" 
                      :suggestions="accountParams.suggestions" 
                      field="account_name_en"
                      :placeholder="$t('form.parent_account.placeholder')"
                      @complete="searchAccount($event, accountParams)" 
                      :forceSelection="true" 
                    />
                  </span>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.final_account.label") }}</label>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.final_account === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete 
                      v-model="form.final_account" 
                      :suggestions="finalAccountParams.suggestions" 
                      field="name_en"
                      :placeholder="$t('form.final_account.placeholder')"
                      @complete="searchFinalAccount($event, finalAccountParams)" 
                      :forceSelection="true" 
                      :class="{ 'p-invalid': $v.form.final_account.$error }" 
                    />
                  </span>
                  <div class="error">
                    <small class="p-invalid" v-if="$v.form.final_account.$error &&
                      !$v.form.final_account.required
                      ">
                      {{ requiredError($t("form.final_account.label")) }}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>

        <div class="col-xl-4 col-sm-12">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.account_type.label")
                  }}</label>
                  <div class="d-flex flex-wrap custom-radio-button justify-content-between" >
                    <div  v-for="category of account_type_options" :key="category.id"
                      class="field-radiobutton d-flex gap-1 align-items-center">
                      <RadioButton
                      :id="category.id"
                      name="category"
                      :value="category.id"
                      v-model="form.account_type"
                      />
                      <label class="mt-2">{{ category[locale] }} </label>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{  $t("form.account_disposition.label") }}</label>
                  <div class="d-flex flex-wrap custom-radio-button justify-content-between" >
                    <div v-for="category of account_disposition_options" :key="category.locale"
                      class="field-radiobutton d-flex gap-1 align-items-center">
                      
                      <RadioButton :id="category.id" name="category" :value="category.id" v-model="form.account_disposition"
                        :class="{ 'p-invalid': $v.form.account_disposition.$error }" />
                      <label class="mt-2"
                        :class="{ 'text-danger': $v.form.account_disposition.$error && !$v.form.account_disposition.required  }">{{  category[locale] }}
                      </label>
                    
                    </div>
                  </div>
                  <div class="error">
                    <small class="p-invalid" v-if="$v.form.account_disposition.$error &&
                      !$v.form.account_disposition.required
                      ">
                      {{ requiredError($t("form.account_disposition.label")) }}
                    </small>
                  </div>
                </div>
              </div>
            </div>   
          </Base>
        </div>
        <div class="col-12">
          <Base>
          <div class="col-md-12">
            <div class="form-group">
              <label class="form-label">{{
                $t("form.description.label")
              }}</label>
              <textarea class="form-control" rows="5" cols="30" v-model="form.description"
                :placeholder="$t('form.description.placeholder')" :class="{
                  'is-invalid': $v.form.description.$error,
                }"></textarea>
                <div v-if="!$v.form.description.minLength && $v.form.description.$error " class="invalid-feedback">
                  {{ maxLengthError( $t("form.description.label"), $v.form.description.$params.minLength.min ) }}
                </div>
                <div v-else-if="!$v.form.description.maxLength && $v.form.description.$error " class="invalid-feedback">
                  {{ minLengthError( $t("form.description.label"), $v.form.description.$params.maxLength.max ) }}
                </div>
                <div v-else-if="!$v.form.description.notContainsHtmlTags && $v.form.description.$error " class="invalid-feedback">
                  {{ htmlTagsError($t("form.description.label")) }}
                </div>
            </div>
          </div>
          </Base>
        </div>
      </div>
      <div class="row" v-if="isUpdating">
        <div class="col-12">
          <Base :title="'Final Account'" :icon="'pi pi-check-square'" :showBreadCrumb="false" :showToggleContent="false"
            :showFullScreen="false">
          <div class="d-flex flex-wrap justify-content-between">
            <div class="d-grid">
              <h5>Accounting Code</h5>
              <h5>Invoices</h5>
              <h5>Total Operations</h5>
            </div>
            <div class="d-grid">
              <!-- <div class="flex align-items-center"> -->
              <Chip label="Action" class="custom-chip" />
              <Chip label="Onyama Limba" icon="" class="custom-chip" />
              <Chip label="Apple" icon="" class="custom-chip" />
              <!-- </div> -->
            </div>
            <div class="d-grid current-balance">
              <label class="form-label">Current Balance</label>
              <Chip label="0.0LE" class="chip" />
            </div>
          </div>
          <Chart type="bar" :data="chartData" :options="options" />

          <template v-slot:footer>
            <div class="d-flex justify-content-center">
              <h5>Log</h5>
            </div>
          </template>
          </Base>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/accounts/account.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import accountSuggestions from "@/mixins/erp_v2/accounts/accountSuggestions";
import finalAccountSuggestions from "@/mixins/erp_v2/accounts/finalAccountSuggestions";
import Base from "@/components/global/utilities/Base.vue";
import Chip from "primevue/chip";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    Base,
    Chip,
  },
  mixins: [accountSuggestions, finalAccountSuggestions],
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    isUpdating: {
      type: Boolean,
      default() {
        return false;
      },
    },
    account_type_options: {
      type: Array,
    },
    account_disposition_options: {
      type: Array,
    },
    value: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  data() {
    return {
      
options: {
	responsive: true,
	hoverMode: 'index',
	stacked: false,
	scales: {
        yAxes: [{
            type: 'linear',
            display: true,
            position: 'left',
            id: 'y-axis-1',
        },
        {
            type: 'linear',
            display: true,
            position: 'right',
            id: 'y-axis-2',
            gridLines: {
                drawOnChartArea: false
            }
        }]
	}
},

      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            type: "line",
            label: "Dataset 1",
            borderColor: "#42A5F5",
            borderWidth: 2,
            fill: false,
            data: [50, 25, 12, 48, 56, 76, 42],
          },
          {
            type: "bar",
            label: "Dataset 2",
            backgroundColor: "#66BB6A",
            data: [21, 84, 24, 75, 37, 65, 34],
            borderColor: "white",
            borderWidth: 2,
          },
          {
            type: "bar",
            label: "Dataset 3",
            backgroundColor: "#FFA726",
            data: [41, 52, 24, 74, 23, 21, 32],
          },
        ],
      },
      form: this.value,
    };
  },
  validations: {
    form: {
      account_name_en: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      account_name_ar: {
        // required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      account_code: {},
      parent_account: {},
      final_account: {
        required,
      },
      account_type: {},
      account_disposition: { required, },

      description: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },

  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
    },
  },
};
</script>


<style lang="scss">
/deep/.p-chip {
  background: $primary;
  justify-content: center;
  height: 23px;

  .p-chip-text {
    color: white;
  }
}

.chip {
  background: $secondary-gradient;
  height: auto;
}
.custom-chip {
  background: $primary;
  margin-bottom: 0.25rem;
}

.current-balance {
  border: 1px solid #bec7be;
  border-radius: 17px;
}
</style>


