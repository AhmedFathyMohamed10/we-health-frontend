<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
    >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message
              severity="error"
              v-for="(value, key) in error"
              :key="key"
              :closable="false"
            >
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.name.label") }}</label>
            <input
              type="text"
              v-model="form.name"
              :placeholder="$t('form.name.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.form.name.$error }"
            />
            <div
              v-if="!$v.form.name.required && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.name.label")) }}
            </div>
            <div
              v-else-if="!$v.form.name.minLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.name.label"),
                  $v.form.name.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("form.name.label"),
                  $v.form.name.$params.maxLength.max
                )
              }}
            </div>
            <div
              v-else-if="!$v.form.name.notContainsHtmlTags && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.name.label")) }}
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">
              {{$t("form.invoice_type.label")}}
            </label>
            <Dropdown
              v-model="form.invoice_type"
              :options="invoiceTypes"
              optionLabel="name"
              optionValue="type_id"
              :placeholder="$t('form.invoice_type.placeholder')"
              :class="{
                'p-invalid': $v.form.invoice_type.$error,
              }"
            />
            <div class="error">
              <small class="p-invalid" v-if="!$v.form.invoice_type.required && $v.form.invoice_type.$error">
                {{ requiredError($t("form.invoice_type.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex align-items-end gap-2">
            <div class="form-group flex-grow-1">
              <label for="" class="form-label">
                {{$t("form.group.label")}}
              </label>
              <Dropdown
                v-model="form.group"
                :options="groups"
                optionLabel="name"
                optionValue="id"
                dataKey="id"
                :placeholder="$t('form.group.placeholder')"
                :class="{'p-invalid': $v.form.group.$error}"
              />
              <div class="error">
                <small class="p-invalid" v-if="!$v.form.group.required && $v.form.group.$error">
                  {{ requiredError($t("form.group.label")) }}
                </small>
              </div>
            </div>
            <Group></Group>
          </div>
        </div>
        <div class="col-md-6">                
          <div class="form-group">
              <label class="form-label">{{$t('form.customer_account.label')}}</label>
              <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{'p-invalid':$v.form.customer_account.$error}">
                      <i class="pi pi-search"></i>
                  </span>
                  <AutoComplete
                      v-model="form.customer_account"
                      :suggestions="accountParams.suggestions"
                      :class="{'p-invalid':$v.form.customer_account.$error}"                          
                      field="name"  
                      :placeholder="$t('form.customer_account.placeholder')" 
                      @complete="search($event,accountParams)"
                      :forceSelection="true"
                  />
              </div>
              <div class="error">
                  <small class="p-invalid" v-if="$v.form.customer_account.$error&&!$v.form.customer_account.required">
                      {{requiredError($t('form.customer_account.label'))}}
                  </small>
              </div>
          </div>
        </div>
        <div class="col-md-6">                
          <div class="form-group">
              <label class="form-label">{{$t('form.cash_account.label')}}</label>
              <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{'p-invalid':$v.form.cash_account.$error}">
                      <i class="pi pi-search"></i>
                  </span>
                  <AutoComplete
                      v-model="form.cash_account"
                      :suggestions="accountParams.suggestions"
                      :class="{'p-invalid':$v.form.cash_account.$error}"                          
                      field="name"  
                      :placeholder="$t('form.cash_account.placeholder')" 
                      @complete="search($event,accountParams)"
                      :forceSelection="true"
                  />
              </div>
              <div class="error">
                  <small class="p-invalid" v-if="$v.form.cash_account.$error&&!$v.form.cash_account.required">
                      {{requiredError($t('form.cash_account.label'))}}
                  </small>
              </div>
          </div>
        </div>
        <div class="col-md-6">                
          <div class="form-group">
              <label class="form-label">{{$t('form.material_account.label')}}</label>
              <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{'p-invalid':$v.form.material_account.$error}">
                      <i class="pi pi-search"></i>
                  </span>
                  <AutoComplete
                      v-model="form.material_account"
                      :suggestions="accountParams.suggestions"
                      :class="{'p-invalid':$v.form.material_account.$error}"                          
                      field="name"  
                      :placeholder="$t('form.material_account.placeholder')" 
                      @complete="search($event,accountParams)"
                      :forceSelection="true"
                  />
              </div>
              <div class="error">
                  <small class="p-invalid" v-if="$v.form.material_account.$error&&!$v.form.material_account.required">
                      {{requiredError($t('form.material_account.label'))}}
                  </small>
              </div>
          </div>
        </div>
        <div class="col-md-6">                
          <div class="form-group">
              <label class="form-label">{{$t('form.discount_account.label')}}</label>
              <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{'p-invalid':$v.form.discount_account.$error}">
                      <i class="pi pi-search"></i>
                  </span>
                  <AutoComplete
                      v-model="form.discount_account"
                      :suggestions="accountParams.suggestions"
                      :class="{'p-invalid':$v.form.discount_account.$error}"                          
                      field="name"  
                      :placeholder="$t('form.discount_account.placeholder')" 
                      @complete="search($event,accountParams)"
                      :forceSelection="true"
                  />
              </div>
              <div class="error">
                  <small class="p-invalid" v-if="$v.form.discount_account.$error&&!$v.form.discount_account.required">
                      {{requiredError($t('form.discount_account.label'))}}
                  </small>
              </div>
          </div>
        </div>
        <div class="col-md-6">                
          <div class="form-group">
              <label class="form-label">{{$t('form.tax_account.label')}}</label>
              <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{'p-invalid':$v.form.tax_account.$error}">
                      <i class="pi pi-search"></i>
                  </span>
                  <AutoComplete
                      v-model="form.tax_account"
                      :suggestions="accountParams.suggestions"
                      :class="{'p-invalid':$v.form.tax_account.$error}"                          
                      field="name"  
                      :placeholder="$t('form.tax_account.placeholder')" 
                      @complete="search($event,accountParams)"
                      :forceSelection="true"
                  />
              </div>
              <div class="error">
                  <small class="p-invalid" v-if="$v.form.tax_account.$error&&!$v.form.tax_account.required">
                      {{requiredError($t('form.tax_account.label'))}}
                  </small>
              </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">
              {{$t("form.policy.label")}}
            </label>
            <Dropdown
              v-model="form.policy"
              :options="pricingPolicies"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.policy.placeholder')"
              :class="{
                'p-invalid': $v.form.policy.$error,
              }"
            />
            <div class="error">
              <small class="p-invalid" v-if="!$v.form.policy.required && $v.form.policy.$error">
                {{ requiredError($t("form.policy.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">
              {{$t("form.method.label")}}
            </label>
            <Dropdown
              v-model="form.method"
              :options="paymentMethods"
              optionLabel="name"
              optionValue="method_id"
              :placeholder="$t('form.method.placeholder')"
              :class="{
                'p-invalid': $v.form.method.$error,
              }"
            />
            <div class="error">
              <small class="p-invalid" v-if="!$v.form.method.required && $v.form.method.$error">
                {{ requiredError($t("form.method.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.start_code.label") }}</label>
            <input
              type="text"
              v-model="form.start_code"
              :placeholder="$t('form.start_code.placeholder')"
              class="form-control"
              :class="{ 'is-invalid': $v.form.start_code.$error }"
            />
            <div v-if="!$v.form.start_code.required && $v.form.start_code.$error" class="invalid-feedback">
              {{ requiredError($t("form.start_code.label")) }}
            </div>
            <div v-else-if="!$v.form.start_code.minLength && $v.form.start_code.$error" class="invalid-feedback">
              {{maxLengthError($t("form.start_code.label"),$v.form.start_code.$params.minLength.min)}}
            </div>
            <div v-else-if="!$v.form.start_code.maxLength && $v.form.start_code.$error" class="invalid-feedback">
              {{ minLengthError( $t("form.start_code.label"),$v.form.start_code.$params.maxLength.max)}}
            </div>
            <div v-else-if="!$v.form.start_code.notContainsHtmlTags && $v.form.start_code.$error" class="invalid-feedback">
              {{ htmlTagsError($t("form.start_code.label")) }}
            </div>
          </div>
        </div>
        <div class="col-md-12">
            <div class="form-group">
              <label class="form-label">{{ $t("form.description.label")}}</label>
              <textarea
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.description"
                :placeholder="$t('form.description.placeholder')"
                :class="{'is-invalid': $v.form.description.$error}"
                ></textarea>
              <div v-if="!$v.form.description.notContainsHtmlTags && $v.form.description.$error" class="invalid-feedback">
                {{ htmlTagsError($t("form.description.label")) }}
              </div>
              <div v-else-if="!$v.form.description.minLength && $v.form.description.$error"  class="invalid-feedback">
                {{ maxLengthError($t("form.description.label"),$v.form.description.$params.minLength.min) }}
              </div>
            </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/accounting/invoices/definition.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Group from "./Group.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import {notContainsHtmlTags,} from "@/validation/customValidators";
import {htmlTagsError,requiredError,minLengthError, maxLengthError} from "@/validation/errors.js";
import pricingPolicy from "@/mixins/erp/productAndServices/PricingPolicy/pricingPolicy";
import groups from "@/mixins/erp/accounting/invoices/group/groups";
import accountSuggestions from "@/mixins/erp/accounts/accountSuggestions"
export default {
  mixins:[pricingPolicy,groups,accountSuggestions],
  components: {
    EditDialog,
    Group
  },
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
      form: this.value,
    };
  },
  computed:{
    invoiceTypes() {
      return this.$store.getters["erp/accounting/invoices/invoiceTypes/invoiceTypes"]
    },
    paymentMethods(){
      return this.$store.getters["erp/accounting/invoices/paymentMethods/paymentMethods"]
    },
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      invoice_type:{
        required
      },
      group:{
        required
      },
      customer_account:{
        required
      },
      cash_account:{
        required
      },
      material_account:{
        required
      },
      discount_account:{
        required
      },
      tax_account:{
        required
      },
      policy:{
        required 
      },
      method:{
        required
      },
      start_code: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      description: {
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },
  created() {},
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
