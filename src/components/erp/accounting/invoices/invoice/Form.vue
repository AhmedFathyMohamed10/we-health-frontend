<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      minWidth="75vw"
      maxWidth="90vw"
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
      <div class="row my-4">
        <div class="col-md-6 col-lg-4 col-xl-3 my-2">
          <Base>          
            <div class="row">
              <div class="col-12" v-if="isReturns">
                <div class="form-group">
                  <label for="" class="form-label">
                    {{$t("form.returned_from.label")}}
                  </label>
                  <Dropdown
                    v-model="form.returned_from"
                    :options="returns"
                    optionValue="invoice_data.id"
                    optionLabel="invoice_data.number"
                    :placeholder="$t('form.returned_from.placeholder')"
                    :class="{'p-invalid':$v.form.returned_from.$error}"   
                    dataKey="invoice_data.id"                       
                    >
                    <template #option="slotProps">
                        <div class="returns-item">
                          <div>{{slotProps.option.invoice_data.number}}</div>
                          <div><small>{{$moment(slotProps.option.invoice_data.date).format('YYYY-MM-DD HH:MM A')}}</small></div>
                        </div>
                    </template>
                  </Dropdown>
                  <div class="errors">
                    <small class="p-invalid" v-if="!$v.form.returned_from.required && $v.form.returned_from.$error">
                      {{ requiredError($t("form.returned_from.label")) }}
                    </small>
                  </div>
                  <div class="details" v-if="form.returned_from">
                    <button type="button" @click="openDetailsDialog" class="p-0 m-0 btn btn-link">
                      {{$t('dialog.header.details')}}
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">
                    {{$t("form.definition.label")}}
                  </label>
                  <Dropdown
                  v-model="form.definition"
                  :options="filteredDefinitions"
                  optionLabel="name"
                  optionValue="id"
                  :placeholder="$t('form.definition.placeholder')"
                  :class="{'p-invalid':$v.form.definition.$error}"                          
                  />
                  <small class="p-invalid" v-if="!$v.form.definition.required && $v.form.definition.$error">
                    {{ requiredError($t("form.definition.label")) }}
                  </small>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">
                    {{$t("form.store.label")}}
                  </label>
                  <Dropdown
                  v-model="form.store"
                  :options="stores"
                  optionLabel="name"
                  optionValue="id"
                  :placeholder="$t('form.store.placeholder')"
                  :class="{'p-invalid':$v.form.store.$error}"                          
                  />
                  <small class="p-invalid" v-if="!$v.form.store.required && $v.form.store.$error">
                    {{ requiredError($t("form.store.label")) }}
                  </small>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.number.label") }}</label>
                  <input
                    type="text"
                    v-model="form.number"
                    :placeholder="$t('form.number.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': $v.form.number.$error }"
                  />
                  <div v-if="!$v.form.number.required && $v.form.number.$error" class="invalid-feedback">
                    {{ requiredError($t("form.number.label")) }}
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{ $t("form.date.label") }}</label>
                  <Calendar
                      :showTime="true" 
                      v-model="date"
                      hourFormat="12" 
                      :showIcon="true" :icon="'pi pi-clock'"  
                      :placeholder="$t('form.date.placeholder')"
                      :class="{'p-invalid':$v.form.date.$error}"
                  />
                  <small v-if="!$v.form.date.required && $v.form.date.$error" class="p-invalid">
                    {{ requiredError($t("form.date.label")) }}
                  </small>
                  <small v-if="!$v.form.date.dateTime && $v.form.date.$error" class="p-invalid">
                    {{ inputError($t("form.date.label")) }}
                  </small>
                </div>
              </div>
              <div class="col-12">  
                <div class="d-flex align-items-end gap-2">
                  <div class="form-group flex-grow-1">
                    <label class="form-label">{{$t('form.provider_account.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon" :class="{'p-invalid':$v.form.provider_account.$error}">
                            <i class="pi pi-search"></i>
                        </span>
                        <AutoComplete
                            v-model="form.provider_account"
                            :suggestions="clientsParams.suggestions"
                            :class="{'p-invalid':$v.form.provider_account.$error}"                          
                            field="name"  
                            :placeholder="$t('form.provider_account.placeholder')" 
                            @complete="search($event,clientsParams)"
                            :forceSelection="true"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.form.provider_account.$error&&!$v.form.provider_account.required">
                            {{requiredError($t('form.provider_account.label'))}}
                        </small>
                    </div>
                  </div>
                  <Client></Client>  
                </div>              
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-8 col-xl-9 my-2">
          <Product :v="$v.form.products"  />
        </div>        
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 col-xl-3">
            <Base>      
              <div class="row">
                <div class="col-12">
                  <div class="form-group discount">
                    <label class="form-label">{{ $t('form.discount.label') }}</label>
                    <InputGroupWrapper>
                        <InputText
                        v-model.trim="form.discount_value"
                        type="number"
                        min="0"
                        :placeholder="$t('form.discount.valuePlaceholder')"
                        :class="{'p-invalid':$v.form.discount_value.$error}" 
                        />
                        <Dropdown
                        v-model="form.discount_method"
                        :placeholder="$t('form.discount.dropdownPlaceholder')"
                        :options="discountMethods"
                        optionLabel="name" 
                        optionValue="id" 
                        :class="{'p-invalid':$v.form.discount_method.$error}"
                        />
                    </InputGroupWrapper>
                    <div class="error">
                      <small class="p-invalid" 
                          v-if="$v.form.discount_method.$error && !$v.form.discount_method.required">
                          {{requiredError($t('form.discount.dropdownPlaceholder'))}}
                      </small>
                      <small class="p-invalid" 
                          v-else-if="$v.form.discount_value.$error && !$v.form.discount_value.required">
                          {{requiredError($t('form.discount.valuePlaceholder'))}}
                      </small>
                      <small class="p-invalid" 
                          v-else-if="$v.form.discount_value.$error && !$v.form.discount_value.numeric">
                          {{numericError($t('form.discount.valuePlaceholder'))}}
                      </small>
                    </div>
                  </div>
                </div>                  
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.total.label") }}</label>
                    <input
                      type="number"
                      min="0"
                      v-model="form.total"
                      :placeholder="$t('form.total.placeholder')"
                      class="form-control"
                      :class="{ 'is-invalid': $v.form.total.$error }"
                    />
                    <div v-if="!$v.form.total.required && $v.form.total.$error" class="invalid-feedback">
                      {{ requiredError($t("form.total.label")) }}
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.paid.label") }}</label>
                    <input
                      type="number"
                      min="0"
                      v-model="form.paid"
                      :placeholder="$t('form.paid.placeholder')"
                      class="form-control"
                      :class="{ 'is-invalid': $v.form.paid.$error }"
                    />
                    <div v-if="!$v.form.paid.required && $v.form.paid.$error" class="invalid-feedback">
                      {{ requiredError($t("form.paid.label")) }}
                    </div>
                  </div>
                </div>
              </div>
            </Base>
        </div>
      </div>
    </EditDialog>
    <DetailsDialog
      :display="displayDetailsDialog"
      @hide="closeDetailsDialog"
      :header="$t('dialog.header.details')"
    >
        <div class="table-responsive details-table" v-if="selectedReturn">
          <table class="table table-borderless text-nowrap mb-0">
            <tbody>
              <tr v-for="(value, key) in selectedReturn" :key="key">
                <th class="" v-if=" key != 'products'">
                  {{ $t(`form.${key}.label`) }}
                </th>
                <td class="custom-text-wrap">
                  <span v-if="!value && value!=0" class="text-muted">------</span>
                  <span v-if="key=='provider_account'">
                    {{ value.name?value.name:value }}
                  </span>
                  <span v-if=" key === 'date'">
                    {{ $moment(value).format('YYYY-MM-DD / hh:mm:ss A') }}
                  </span> 
                  <span v-if=" key === 'updated_at'">
                    {{ $moment(value).format('YYYY-MM-DD')}}
                  </span> 
                  <span v-if=" key === 'store'">
                    {{ findOptionNameById(stores,id=value) }}
                  </span>
                  <span v-if=" key === 'definition'">
                    {{ findOptionNameById(definitions,id=value) }}
                  </span>
                  <span v-if=" key === 'discount_method'">
                    {{ findOptionNameById(discountMethods,id=value) }}
                  </span>
                  <span v-if="!['date','provider_account','updated_at','store','definition','discount_method','products'].includes(key)">
                    {{ value }}
                  </span>
                </td>
              </tr>
              <tr>
                <th>{{('form.products.label')}}</th>
                <td class="custom-text-wrap">
                  <div class="table-responsive">
                      <table class="table table-sm text-center">
                          <thead>
                              <tr>
                                  <th scope="col">{{$t('table.thead.count')}}</th>
                                  <th scope="col">{{$t('form.product.label')}}</th>
                                  <th scope="col">{{$t('form.unit.label')}}</th>
                                  <th scope="col">{{$t('form.unit_price.label')}}</th>
                                  <th scope="col">{{$t('form.quantity.label')}}</th>
                                  <th scope="col">{{$t('form.expiration_date.label')}}</th>
                                  <th scope="col">{{$t('form.discount.label')}}</th>
                                  <th scope="col">{{$t('form.total_price.label')}}</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr v-for="(val, index) in selectedReturn.products" :key="index">
                                  <td class="align-middle custom-width">{{parseInt(index)+1}}</td>
                                  <td class="align-middle">
                                    {{val.product[`name_${locale}`]}}
                                  </td>
                                  <td class="align-middle">
                                    <span v-if="val.product.unit_data">
                                      {{ findOptionNameById(val.product.unit_data,id=val.unit) }}
                                    </span>
                                  </td>
                                  <td class="align-middle">
                                    {{val.unit_price}}
                                  </td>
                                  <td class="align-middle">
                                    {{val.quantity}}
                                  </td>
                                  <td class="align-middle">
                                    {{val.expiration_date}}
                                  </td>
                                  <td class="align-middle">
                                      {{ val.discount_value }} -
                                      {{ findOptionNameById(discountMethods,id=val.discount_method) }}
                                  </td>
                                  <td class="align-middle">
                                    {{val.total_price}}
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>                   
                </td>                  
              </tr>
            </tbody>
          </table>
        </div>
    </DetailsDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/accounting/invoices/product.json"></i18n>
<i18n src="@/lang/erp/accounting/invoices/invoice.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import DetailsDialog from "@/components/global/utilities/DetailsDialog.vue";
import { required,requiredIf ,numeric} from "vuelidate/lib/validators";
import {htmlTagsError,requiredError,minLengthError, maxLengthError,timeDateError,numericError,inputError} from "@/validation/errors.js";
import pricingPolicy from "@/mixins/erp/productAndServices/PricingPolicy/pricingPolicy";
import clientsSuggestions from "@/mixins/erp/clients/clientsSuggestions"
import definition from "@/mixins/erp/accounting/invoices/definition/definition"
import store from "@/mixins/erp/productAndServices/store/store"
import discountMethods from "@/mixins/erp/accounting/invoices/invoice/discountMethods"
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import Base from "@/components/global/utilities/Base.vue"

import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper'
import Product from "./products/Product.vue"
import Client from "./clients/Client.vue"
import provider from "@/store/modules/erp/providers/provider";
import {findOptionNameById} from "@/helpers/utilities";

export default {
  mixins:[pricingPolicy,clientsSuggestions,definition,store,discountMethods],
  components: {
    EditDialog,
    DetailsDialog,
    Base,
    InputGroupWrapper,
    Product,
    Client
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
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  data() {
    return {
      displayDetailsDialog:false,
      date:new Date (),
    };
  },
  
  computed:{
    ...mapGetters("erp/accounting/invoices/invoice", {
      getForm: "getForm",

      getReturnsListResponse:"getReturnsListResponse",
      returnsListLoading:"getReturnsListLoading",
      getReturnsListError:"getReturnsListError",      
    }),
    form:{
      get(){
        return this.getForm;
      },
      set(){
        return this.setForm;
      },
    },   
    returns(){
      let list = [];
      if(this.getReturnsListResponse){
        list = this.getReturnsListResponse.results
      }
      return list;
    },
    selectedReturn(){
      let returned_from = this.form.returned_from;
      if(returned_from){
        const filtered = this.returns.filter(i=>i.invoice_data.id == returned_from)[0]['invoice_data'];
        const {
          date,
          definition,
          store,
          number,
          provider_account,
          discount_method,
          discount_value,
          total,paid,
          products,
          updated_at
        } = filtered
        returned_from = {
          date,
          definition,
          store,
          number,
          provider_account,
          discount_method,
          discount_value,
          total,paid,
          products,
          updated_at
        }
      }
      return returned_from;
    }, 
    isReturns(){
      if(this.form.invoice_type==2 || this.form.invoice_type==4)
        return true;
      else return false;
    },
    returnParams(){
      if(this.form.invoice_type==2)
        return {pageNumber:1,rows:10000,invoice_type: 1};
      else if(this.form.invoice_type==4)
        return {pageNumber:1,rows:10000,invoice_type: 3};
      else
        return {pageNumber:1,rows:10000,invoice_type: ""};

    },
    group_discount(){
      let discount = 0;
      provider = this.form.provider_account;
      if(provider){
        if(provider.group_discount_percentage){
          discount = provider.group_discount_percentage
        }
      }
      return discount;
    },
    filteredDefinitions(){
      let list = [];
      if(this.definitions.length > 0){
        list = this.definitions.filter(definition => definition.invoice_type==this.form.invoice_type)
      }
      return list;
    },
    formattedDate() {
      let date = null;
      if(this.$moment(this.date).isValid()){
        date = this.$moment(this.date).format('YYYY-MM-DDTHH:mm:ssZ');
      }
      return date;
    },
    start_code(){
      let start_code = null;
      if(this.definitions.length>0 && this.form.definition){
        start_code = this.definitions.filter(item=>item.id==this.form.definition)[0]['start_code'];
      } 
      return start_code
    },
    total(){
      let total = 0;
      let products = this.form.products
      let discount_value = this.form.discount_value 
      let discount_method = this.form.discount_method
      if(products.length > 0){
        total =  products.reduce((total, product) => total + product.total_price, 0);
      }
      if(total > 0 && discount_value && discount_method){
        if(discount_method ===1){
          total -= discount_value
        }
        else if(discount_method===2){
          total -= (discount_value*total/100)
        }
      }
      return total
    },
  },
  watch:{

    group_discount(newVal,oldVal){
      if(newVal>0){
        this.form.discount_value = newVal
        this.form.discount_method = 2
      }
      else{
        this.form.discount_value = 0
        this.form.discount_method = 1
      }
    },
    formattedDate(newVal, oldVal){
      this.form.date = newVal;
    },
    start_code(newVal, oldVal){
      this.form.number = newVal;
    },
    total(newVal, oldVal){
      this.form.total = newVal;
    },
    returnParams(){
      this.listReturns(this.returnParams);
    },
  },
  validations: {
    form: {
      returned_from:{
        required: requiredIf(function () {
          return (this.isReturns); // sale-returns or purchase-returns
        }),
      },
      definition: {
        required,
      },
      store: {
        required,
      },
      number: {
        required,
      },
      date:{
        required,
        dateTime: (value) => {
          if(value == null || value == ''){
            return true;
          }
          else {
            return moment(value).isValid();
          }
        },
      },
      provider_account: {
        required,
      },
      discount_method:{
        required
      },
      discount_value:{
        required,
        numeric,
      },
      total: {
        required,
      },
      paid: {
        required,
      },
      products:{
        required,
      }
    },
  },
  created() { 
    this.form.date = this.$moment(new Date()).format('YYYY-MM-DDTHH:mm:ssZ');
    this.listReturns(this.returnParams);
  },
  methods: {
    ...mapActions("erp/accounting/invoices/invoice", [
      "setForm",
      "listReturns",
    ]),
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    timeDateError,
    numericError,
    inputError,
    findOptionNameById,
    closeDetailsDialog() {
      this.displayDetailsDialog = false;
    },
    openDetailsDialog() {
      this.displayDetailsDialog = true;
    },
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
