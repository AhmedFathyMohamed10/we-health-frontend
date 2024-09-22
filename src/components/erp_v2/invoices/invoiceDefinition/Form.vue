<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :min-width="'80'"
      :max-width="'100'"
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
        <div  :class="displayShowPermission ?  'col-md-8' : 'col-12'">
          <Base :title="$t('invoice.information')" icon="fa-solid fa-circle-info" :showPermission="true" @openOrClosePermission="openOrClosePermission">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.invoice_name_en.label") }}</label>
                      <input type="text" v-model="form.invoice_name_en" :placeholder="$t('form.invoice_name_en.placeholder')"
                        class="form-control" :class="{'is-invalid': $v.form.invoice_name_en.$error,}" />
                      <div v-if="!$v.form.invoice_name_en.required && $v.form.invoice_name_en.$error" class="invalid-feedback">
                        {{ requiredError($t("form.invoice_name_en.label")) }}
                      </div>
                      <div v-else-if="!$v.form.invoice_name_en.minLength && $v.form.invoice_name_en.$error " class="invalid-feedback">
                        {{ maxLengthError($t("form.invoice_name_en.label"),$v.form.invoice_name_en.$params.minLength.min) }}
                      </div>
                      <div v-else-if="!$v.form.invoice_name_en.maxLength && $v.form.invoice_name_en.$error" class="invalid-feedback">
                        {{ minLengthError($t("form.invoice_name_en.label"), $v.form.invoice_name_en.$params.maxLength.max )}}
                      </div>
                      <div v-else-if="!$v.form.invoice_name_en.notContainsHtmlTags &&
                          $v.form.invoice_name_en.$error
                          " class="invalid-feedback">
                        {{ htmlTagsError($t("form.invoice_name_en.label")) }}
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="" class="form-label">{{
                        $t("form.invoice_name_ar.label")
                      }}</label>
                      <input type="text" v-model="form.invoice_name_ar" 
                      :placeholder="$t('form.invoice_name_ar.placeholder')"
                    
                        class="form-control" :class="{
                          'is-invalid': $v.form.invoice_name_ar.$error,
                        }"/>
                      <div v-if="!$v.form.invoice_name_ar.required && $v.form.invoice_name_ar.$error" class="invalid-feedback">
                        {{ requiredError($t("form.invoice_name_ar.label")) }}
                      </div>
                      <div v-else-if="!$v.form.invoice_name_ar.minLength && $v.form.invoice_name_ar.$error" class="invalid-feedback">
                        {{
                          maxLengthError(
                            $t("form.invoice_name_en.label"),
                            $v.form.invoice_name_ar.$params.minLength.min
                          )
                        }}
                      </div>
                      <div v-else-if="!$v.form.invoice_name_ar.maxLength && $v.form.invoice_name_ar.$error
                          " class="invalid-feedback">
                        {{
                          minLengthError(
                            $t("form.invoice_name_en.label"),
                            $v.form.invoice_name_ar.$params.maxLength.max
                          )
                        }}
                      </div>
                      <div v-else-if="!$v.form.invoice_name_ar.notContainsHtmlTags &&
                          $v.form.invoice_name_en.$error
                          " class="invalid-feedback">
                        {{ htmlTagsError($t("form.invoice_name_en.label")) }}
                      </div>
                    </div>
                  </div>
                  <div class="col-10">
                    <div class="form-group">
                      <label for="" class="form-label">{{$t("form.group.label")}}</label>
                      <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                        <i class="pi" :class="[typeof form.group === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                        <AutoComplete
                        v-model="form.group" 
                        :suggestions="groupParams.suggestions"
                        field="name_en"
                        :placeholder="$t('form.group.placeholder')"
                        @complete="search($event, groupParams)"
                        :forceSelection="true" 
                        :class="{ 'p-invalid': $v.form.group.$error }" 
                        />
                      </span> 
                      <div class="error">
                        <small class="p-invalid" v-if="!$v.form.group.required && $v.form.group.$error">
                          {{ requiredError($t("form.group.label")) }}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="col-2">
                    <Group></Group>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
              <!-- <div class="form-group" v-if="isUpdating"> -->
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.account.label")}}</label>
                  <input type="text" v-model="form.account" :placeholder="$t('form.account.placeholder')"
                    class="form-control" :disabled="true" />
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.invoice_type.label")}}</label>
                  <Dropdown v-model="form.invoice_type" :options="invoiceTypeOptions" :optionLabel="locale" optionValue="id"
                    :placeholder="$t('form.invoice_type.placeholder')" 
                    :class="{'p-invalid': $v.form.invoice_type.$error,}"
                  />
                  <div v-if="!$v.form.invoice_type.required && $v.form.invoice_type.$error" class="p-error">
                    {{ requiredError($t("form.invoice_type.label")) }}
                  </div>
                </div>
          
              </div>
              <div class="col-lg-4 col-sm-6">
              <!-- <div class="form-group" v-if="isUpdating"> -->
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.code.label")}}</label>
                  <input type="text" v-model="form.code" :placeholder="$t('form.code.placeholder')"
                    class="form-control" :disabled="true" />
                </div>
              </div>
            </div>
          </Base>
          <Base :title="$t('invoice.category')" icon="fa-solid fa-layer-group">
            <div class="row">
              <div class="col-lg-4 col-sm-6">
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <label for="" class="form-label">{{$t("form.customer_account.label")}}</label>
                      <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                        <i class="pi" :class="[typeof form.customer_account === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                        <AutoComplete
                        v-model="form.customer_account" 
                        :suggestions="groupParams.suggestions"
                        field="name_en"
                        :placeholder="$t('form.customer_account.placeholder')"
                        @complete="search($event, groupParams)"
                        :forceSelection="true" 
                        :class="{ 'p-invalid': $v.form.customer_account.$error }" 
                        />
                      </span> 
                      <div class="error">
                        <small class="p-invalid" v-if="!$v.form.customer_account.required && $v.form.customer_account.$error">
                          {{ requiredError($t("form.customer_account.label")) }}
                        </small>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.discount.label") }}</label>
                      <input
                        type="number"
                        v-model="form.discount"
                        :placeholder="$t('form.discount.placeholder')"
                        class="form-control"
                        :class="{'is-invalid':$v.form.discount.$error}"
                      />
                      <div class="p-error" v-if="!$v.form.discount.decimal && $v.form.discount.$invalid">
                        {{ inputError($t("form.discount.label"))}}
                      </div> 
                      <div class="p-error" v-else-if="!$v.form.discount.minValue && $v.form.discount.$invalid">
                        {{minValueError($t("form.discount.label"), $v.form.discount.$params.minValue.min )}}
                      </div>
                      <div class="p-error" v-else-if="!$v.form.discount.maxValue &&$v.form.discount.$invalid" >
                        {{maxValueError($t("form.discount.label"),$v.form.discount.$params.maxValue.max)}}
                      </div> 
                    </div>
                  
                
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.items.label")}}</label>
                  <CustomCascade
                    v-model="form.items" 
                    :placeholder="$t('form.items.placeholder')" 
                    :options="countries"
                    :invalid=" $v.form.items.$error"
                  /> 
                  <!-- <CascadeSelect 
                    :value="selectedCity2 == 1?selectedCity2:null"
                    v-model="selectedCity1" 
                    :options="countries" 
                    optionValue="code" 
                    dataKey="code"
                    optionLabel="name" 
                    :optionGroupChildren="['groupOptions']"
                    placeholder="Select a City"
                    @change="onChange"
                    @group-change="oninput"
                  />  -->
                  <div v-if="!$v.form.items.required && $v.form.items.$error" class="p-error">
                    {{ requiredError($t("form.items.label")) }}
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.vat.label")}}</label>
                  <input type="text" v-model="form.vat" :placeholder="$t('form.vat.placeholder')"
                    class="form-control" />
                </div>
              </div>

              <div class="col-lg-4 col-sm-6">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.cash_account.label")}}</label>
                    <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                      <i class="pi" :class="[typeof form.cash_account === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                      <AutoComplete
                      v-model="form.cash_account" 
                      :suggestions="groupParams.suggestions"
                      field="name_en"
                      :placeholder="$t('form.cash_account.placeholder')"
                      @complete="search($event, groupParams)"
                      :forceSelection="true" 
                      :class="{ 'p-invalid': $v.form.cash_account.$error }" 
                      />
                    </span> 
                    <div class="error">
                      <small class="p-invalid" v-if="!$v.form.cash_account.required && $v.form.cash_account.$error">
                        {{ requiredError($t("form.group.label")) }}
                      </small>
                    </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.description.label")
                  }}</label>
                    <textarea 
                      class="form-control"
                      rows="5" cols="30" 
                      v-model="form.description"
                      :placeholder="$t('form.description.placeholder')"
                      :class="{'is-invalid':$v.form.description.$error}">
                    </textarea>
                    <div v-if="!$v.form.description.minLength && $v.form.description.$error" class="invalid-feedback">
                      {{maxLengthError($t("form.description.label"),$v.form.description.$params.minLength.min)}}
                    </div>
                    <div v-else-if="!$v.form.description.maxLength && $v.form.description.$error" class="invalid-feedback">
                      {{minLengthError($t("form.description.label"),$v.form.description.$params.maxLength.max) }}
                    </div>
                    <div v-else-if="!$v.form.description.notContainsHtmlTags && $v.form.description.$error" class="invalid-feedback">
                      {{ htmlTagsError($t("form.description.label")) }}
                    </div>
                </div>
              </div>
            </div>
          </Base>
          <Base :title="$t('invoice.value')" :icon="'pi pi-check-square'">
            <div class="row">
              <div class="col-xl-4 col-sm-6">
                <div class="row">
                  <div class="col-10">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.pricing_policy.label") }}</label>
                      <Dropdown v-model="form.pricing_policy" :options="paymentMethodOptions" optionLabel="name_en" optionValue="id"
                        :placeholder="$t('form.pricing_policy.placeholder')" 
                        :class="{'p-invalid': $v.form.pricing_policy.$error,}"
                      />
                      <!-- <div v-if="!$v.form.pricing_policy.required && $v.form.pricing_policy.$error" class="p-error">
                        {{ requiredError($t("form.pricing_policy.label")) }}
                      </div> -->
                    </div>
                  </div>
                  <div class="col-2">
                    <PricingPolicy></PricingPolicy>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-sm-6">
                <div class="row">
                  <div class="col-10">
                    <div class="form-group">
                      <label for="" class="form-label">{{$t("form.payment_type.label")}}</label>
                      <Dropdown v-model="form.payment_type" :options="paymentTypeOptions" optionLabel="name_en" optionValue="id"
                        :placeholder="$t('form.payment_type.placeholder')" 
                        :class="{'p-invalid': $v.form.payment_type.$error,}"
                        />
                        <!-- <div v-if="!$v.form.payment_method.required && $v.form.payment_method.$error" class="p-error">
                          {{ requiredError($t("form.payment_method.label")) }}
                        </div> -->
                    </div>
                  </div>
                  <div class="col-2">
                    <PaymentType></PaymentType>
                  </div>
              

                </div>
              </div>

              <div class="col-xl-4 col-sm-6">
                <div class="form-group">
                  <label for="" class="form-label">{{$t("form.payment_method.label")}}</label>
                  <div class="d-flex flex-wrap custom-radio-button justify-content-between">
                    <div v-for="option of paymentMethodOptions" :key="option.id" class="field-radiobutton d-flex gap-1 align-items-center" >
                      <RadioButton
                        :id="option.id"
                        name="option"
                        :value="option.id"
                        v-model="form.payment_method"
                      />
                      <label class="mt-2">{{ option[locale] }} </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>

        <div class="col-md-4" v-if="displayShowPermission == true">
          <Base>
            <ul>
              <li v-for="(item, index) in permissions[locale]" :key="index" class="my-1">
                <h6 @click="toggleChildren(index)" class="d-flex align-items-center justify-content-between p-2 bg-success-transparent custom-options">
                  <span>{{ item.name }}</span>
                  <span><i class="fa-solid fa-arrows-up-down"></i></span>
                </h6>
                <ul v-if="item.showChildren">
                  <li v-for="(child, childIndex) in item.children" :key="child.id" class="pb-1">
                    <div class="d-flex flex-wrap custom-radio-button bg-light-gradient">
                      <div @click="toggleSubChildren(index, childIndex)" class="field-radiobutton d-flex gap-1 align-items-center ">
                        <Checkbox v-model="form[child.id]" :binary="true" />

                        <!-- <RadioButton
                          name="option"
                          :value="child.id"
                          v-model="form.group"
                        /> -->
                        <span>{{ child.name }}</span>
                        <!-- <label class="mt-2">{{ child.name }} </label> -->
                      </div>
                    </div>




                    <!-- <h6 @click="toggleSubChildren(index, childIndex)" class="d-flex align-items-center gap-2  custom-options">
                      <RadioButton
                        name="option"
                        :value="child.id"
                        v-model="form.status"
                      />
                      <label class="mt-2">{{ child.name }} </label>
                    </h6> -->
                    <ul v-if="child.showSubChildren">
                      <li v-for="(subChild, subChildIndex) in child.children" :key="subChildIndex">
                        {{ subChild.name }}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
        
          </Base>
        </div>
      </div>

    </EditDialog>
 
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/invoices/invoiceDefinition.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import CustomCascade from '@/components/global/custom/CustomCascade.vue'
import { required, minLength, maxLength, decimal, minValue, maxValue} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import groupSuggestions from "@/mixins/erp_v2/assets/group/groupSuggestions.js";
import Group from "@/components/erp_v2/invoices/invoiceDefinition/formAddOptions/Group";
import PricingPolicy from "@/components/erp_v2/invoices/invoiceDefinition/formAddOptions/PricingPolicy";
import PaymentType from "@/components/erp_v2/invoices/invoiceDefinition/formAddOptions/PaymentType";
import {
  htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    minValueError,
    inputError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";
// import CascadeSelect from 'primevue/cascadeselect';
import Checkbox from 'primevue/checkbox';
export default {
  mixins: [groupSuggestions, toast],
  components: {
    EditDialog,
    Base,
    Group,
    PricingPolicy,
    PaymentType,
    CustomCascade,
    Checkbox,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isUpdating: {
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
    paymentMethodOptions: {
      type: Array,
      required: [],
    },
    invoiceTypeOptions: {
      type: Array,
      required: [],
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
      selectedCity1: null,
      selectedCity2: null,
      displayShowPermission: false,
      countries: [
        {
          name: 'Items',
          value: 'AU',
          children: [
            {name_en: 'Sydney', value: 'A-SY'},
            {name_en: 'Newcastle', value: 'A-NE'},
          ]
        },
        {
          name: 'Asset',
          value: 'ass',
          children: []
        },
      ],
      permissions:{
        en: [
          {
            name: "General options",
            id: "generalOptions",
            showChildren: false,
            children: [
                {name: "Apply Customer Discount to invoice items",
                  id: "applyCustomerDiscountToInvoiceItems", showSubChildren: false, children: []},
                {name: "Generate Receipts Number For Day",
                  id: "generateReceiptsNumberForDay",  showSubChildren: false, children: []},
                {name: "Generate Receipts Numbers for Each closure",
                  id: "generateReceiptsNumbersForEachClosure",  showSubChildren: false, children: []}
            ],
          },
          {
            name: "Input Permission",
            id: "inputPermission",
            showChildren: false,
            children: [
                {name: "Allow to Make Item Quantity Equal to Zero",
                id:"allowToMakeItemQuantityEqualToZero",  showSubChildren: false, children: []},
                {name: "Allow to Sale Less than Purchase Price",
                id:"allowToSaleLessThanPurchasePrice",  showSubChildren: false, children: []},
                {name: "Allow input Expired Date",
                id:"allowInputExpiredDate",  showSubChildren: false, children: []},
                {name: "Allow to Output items in Negative",
                id:"allowToOutputItemsInNegative",  showSubChildren: false, children: []},
                {name: "Allow Duplicated Serial Number",
                id:"allowDuplicatedSerialNumber",  showSubChildren: false, children: []},
            ],
          },
          {
            name: "User Permission",
            id: "userPermission",
            showChildren: false,
            children: [
                {name: "Prevent Payment Method Modify",
                id:"preventPaymentMethodModify",  showSubChildren: false, children: []},
                {name: "Prevent Default Date Modify",
                id:"preventDefaultDateModify",  showSubChildren: false, children: []},
                {name: "Prevent Default Store Modify",
                id:"preventDefaultStoreModify",  showSubChildren: false, children: []},
                {name: "Prevent Default Customer Account Modify",
                id:"preventDefaultCustomerAccountModify",  showSubChildren: false, children: []},
                {name: "Prevent Items Account Modify",
                id:"preventItemsAccountModify",  showSubChildren: false, children: []},
                {name: "Prevent Cash Account Modify",
                id:"preventCashAccountModify",  showSubChildren: false, children: []},
                {name: "Prevent Price Modify",
                id:"preventPriceModify",  showSubChildren: false, children: []},
                {name: "Prevent Gifts Modify",
                id:"preventGiftsModify",  showSubChildren: false, children: []},
                {name: "Prevent Invoice Discount Modify",
                id:"preventInvoiceDiscountModify",  showSubChildren: false, children: []},
                {name: "Prevent Invoice Number Modify",
                id:"preventInvoiceNumberModify",  showSubChildren: false, children: []},
                {name: "Prevent Due Date Modify",
                id:"preventDueDateModify",  showSubChildren: false, children: []},
            ],
          },
          {
            name: "Print Options",
            id: "printOptions",
            showChildren: false,
            children: [
                {name: "Auto Print after saving new invoice",
                id:"autoPrintAfterSavingNewInvoice",  showSubChildren: false, children: []},
                {name: "Show Pricing Options on invoice print",
                id:"showPricingOptionsOnInvoicePrint",  showSubChildren: false, children: []},
                {name: "Print Receipt after Printing the Invoice",
                id:"printReceiptAfterPrintingTheInvoice",  showSubChildren: false, children: []},
                {name: "Print Invoice Expenses",
                id:"printInvoiceExpenses",  showSubChildren: false, children: []},
                {name: "Print Customized items after invoice print",
                id:"printCustomizedItemsAfterInvoicePrint",  showSubChildren: false, children: []},
                {name: "Auto Print after invoice Edit",
                id:"autoPrintAfterInvoiceEdit",  showSubChildren: false, children: []},
                {name: "Print Compound items with invoice",
                id:"printCompoundItemsWithInvoice",  showSubChildren: false, children: []},
                {name: "Print Compound items Only",
                id:"printCompoundItemsOnly",  showSubChildren: false, children: []},
                {name: "Print Raw items with compound items",
                id:"printRawItemsWithCompoundItems",  showSubChildren: false, children: []},
                {name: "Show window types of Reports to be printed",
                id:"showWindowTypesOfReportsToBePrinted",  showSubChildren: false, children: []},
                {name: "Group Raw and Singular items",
                id:"groupRawAndSingularItems",  showSubChildren: false, children: []},
                {name: "Print Salesman items with the invoice",
                id:"printSalesmanItemsWithTheInvoice",  showSubChildren: false, children: []},
                {name: "Print item NAme with Serials",
                id:"printItemNameWithSerials",  showSubChildren: false, children: []},
                {name: "Show Debit And Credit Label",
                id:"showDebitAndCreditLabel",  showSubChildren: false, children: []},
                {name: "Print Detailed Taxes with the invoice",
                id:"printDetailedTaxesWithTheInvoice",  showSubChildren: false, children: []},
            ],
          },
          {
            name: "Salesman",
            id: "1 Time",
            showChildren: false,
          },
          {
            name: "Electronic Egyptian Taxes",
            id: "electronicEgyptianTaxes",
            showChildren: false,
            children: [
                {name: "Subject to Tax System",
                id:"subjectToTaxSystem",  showSubChildren: false, children: []},
                {name: "item Price include the Tax",
                id:"itemPriceIncludeTheTax",  showSubChildren: false, children: []},
                {name: "transfer the tax to tax Account",
                id:"transferTheTaxToTaxAccount",  showSubChildren: false, children: []},
                {name: "Prevent Default Tax modify",
                id:"preventDefaultTaxModify",  showSubChildren: false, children: []},
            ],
          },
        ],
        ar: [
        {
          name: "1 Time",
          value: "1 Time",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                    { name: "Sleep", value: "Sleep" },
                  ],
                },
                {
                  name: "After",
                  value: "After",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                  ],
                },
                { name: "Random", value: "Random" },
              ],
            },
            {
              name: "2 Day",
              value: "2 Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                    { name: "Sleep", value: "Sleep" },
                  ],
                },
                {
                  name: "After",
                  value: "After",
                  children: [
                    { name: "Breakfast", value: "Breakfast" },
                    { name: "Dinner", value: "Dinner" },
                    { name: "Lunch", value: "Lunch" },
                  ],
                },
                { name: "Random", value: "Random" },
              ],
            },
            {
              name: "Week",
              value: "Week",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Month",
              value: "Month",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Every 2 Months",
              value: "Every 2 Months",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Every 3 Months",
              value: "Every 3 Months",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Every 6 Months",
              value: "Every 6 Months",
              children: [{ name: "Random", value: "Random" }],
            },
            {
              name: "Year",
              value: "Year",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        {
          name: "2 Times",
          value: "2 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [
                    {
                      name: "Breakfast and Lunch",
                      value: "Breakfast and Lunch",
                    },
                    {
                      name: "Breakfast and Dinner",
                      value: "Breakfast and Dinner",
                    },
                    { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                  ],
                },
                {
                  name: "After",
                  value: "After",
                  children: [
                    {
                      name: "Breakfast and Lunch",
                      value: "Breakfast and Lunch",
                    },
                    {
                      name: "Breakfast and Dinner",
                      value: "Breakfast and Dinner",
                    },
                    { name: "Dinner and Lunch", value: "Dinner and Lunch" },
                  ],
                },
                { name: "Morning/Night", value: "Morning/Night" },
                { name: "Random", value: "Random" },
              ],
            },
          ],
        },
        {
          name: "3 Times",
          value: "3 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [
                {
                  name: "Before",
                  value: "Before",
                  children: [{ name: "Meals", value: "Meals" }],
                },
                {
                  name: "After",
                  value: "After",
                  children: [{ name: "Meals", value: "Meals" }],
                },
                {
                  name: "Random",
                  value: "Random",
                },
              ],
            },
          ],
        },
        {
          name: "4 Times",
          value: "4 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        {
          name: "5 Times",
          value: "5 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        {
          name: "6 Times",
          value: "6 Times",
          children: [
            {
              name: "Day",
              value: "Day",
              children: [{ name: "Random", value: "Random" }],
            },
          ],
        },
        ],
      },
    };
  },
  validations: {
    form: {
      invoice_name_en: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      invoice_name_ar: {
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },

    account:{},
    invoice_type:{required},
    group:{required},
    code:{},
    invoice_parent:{},
    customer_account:{},
    items:{required},
    cash_account:{required},
    discount:{
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
    },
    vat:{},
    gift:{},
    description:{
      minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
    },
    pricing_policy:{},
    payment_type:{},
    payment_method:{},
    },
  },
  computed: {
    paymentTypeOptions() {
      if (this.$store.getters["erp_v2/invoices/paymentType/getListResponse"])
        return this.$store.getters["erp_v2/invoices/paymentType/getListResponse"].results;
      else return [];
    },
    itemsGroupOptions() {
      if (this.$store.getters["erp_v2/items/group/getListResponse"])
        return this.$store.getters["erp_v2/items/group/getListResponse"].data;
      else return [];
    },
    assetsGroupOptions() {
      if (this.$store.getters["erp_v2/assets/assetGroupSearch/getSearchResponse"]){
        
        return this.$store.getters["erp_v2/assets/assetGroupSearch/getSearchResponse"].data;
      }
      else return [];
    },
  },
  created() {
    if (!this.paymentTypeOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name_en: "" };
      this.$store.dispatch("erp_v2/invoices/paymentType/list", params);
    }
    if (!this.itemsGroupOptions.length > 0) {
      let params = {name_en:""};
      this.$store.dispatch("erp_v2/items/group/list", params);
    }
    if (!this.assetsGroupOptions.length > 0) {
      let params = {parent_group:0, name_en:""};
      this.$store.dispatch("erp_v2/assets/assetGroupSearch/search", params);
      this.countries[1].children = this.$store.getters["erp_v2/assets/assetGroupSearch/getSearchResponse"].data
    }
  },
  methods: {
    toggleChildren(index) {
      this.permissions[this.locale].forEach((item, i) => {
        item.showChildren = i === index ? !item.showChildren : false;
      });
    },
    toggleSubChildren(parentIndex, childIndex) {
      this.permissions[this.locale][parentIndex].children.forEach((child, i) => {
        child.showSubChildren = i === childIndex ? !child.showSubChildren : false;
      });
    },
    openOrClosePermission() {
      console.log(this.displayShowPermission)
      this.displayShowPermission = ! this.displayShowPermission;
    },
    ispChange(values, items) {
      this.outputs.values = values;
      this.outputs.items = items;
    },
    oninput(event) {
      this.selectedCity2=1
      // Handle the change event
      console.log('on input:', this.selectedCity2);
    },
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    minValueError,
    inputError,
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











          
                <!-- <Dropdown v-model="form.items" :options="itemTypeOption" :optionLabel="locale" optionValue="id"
                  :placeholder="$t('form.items.placeholder')" 
                  :class="{'p-invalid': $v.form.items.$error,}"
                  />  -->
<style>

.custom-options{
  border: 1px solid #56C596;
  border-radius: 1.2rem 1.2rem 0rem 0rem;
}
</style>