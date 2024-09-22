<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :min-width="'80'"
      :max-width="'100'"
      :isLoading="isLoading"
      :header="header"
    >
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label for="" class="form-label">{{ $t("form.substituent.label") }}</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.form.substituent.$error }" >
              <i class="mdi mdi-pill"></i>
            </span>
            <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
              <i class="pi" :class="[typeof form.substituent === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
              <AutoComplete
                v-model="form.substituent"
                :suggestions="productParams.suggestions"
                :class="{ 'p-invalid': $v.form.substituent.$error }"
                field="name_en"
                :placeholder="$t('form.substituent.placeholder')"
                @complete="searchProduct($event, productParams)"
                :forceSelection="true" 
                class="w-100"
              />
            </span> 
          </div>
          <div class="error">
            <!-- <small class="p-invalid" v-if=" $v.form.substituent.$error && !$v.form.substituent.validator">
              {{ inputError($t("form.substituent.label")) }}
            </small> -->
            <small class="p-invalid" v-if=" $v.form.substituent.$error && !$v.form.substituent.required">
              {{ requiredError($t("form.substituent.label")) }}
            </small>
          </div>
        </div>
        <div class="form-group">
          <label for="" class="form-label">{{ $t("form.unit.label") }}</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.form.unit.$error }" >
              <i class="mdi mdi-pill"></i>
            </span>
            <Dropdown
              v-model="form.unit"
              :options="unitOptions"
              optionLabel="unit" 
              :placeholder="$t('form.unit.placeholder')" 
              :class="{'p-invalid': $v.form.unit.$error,}"
            />
          </div>
          <div class="error">
            <small class="p-invalid" v-if=" $v.form.unit.$error && !$v.form.unit.required">
              {{ requiredError($t("form.unit.label")) }}
            </small>
          </div>
        </div>
        <div class="form-group ">
            <label class="form-label">{{$t('form.quantity.label')}} </label>                                                                     
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon bg-light" :class="{'p-invalid':$v.form.amount.$error}">
                <i class="mdi mdi-pill"></i>
              </span>
              <span class="w-60 d-flex justify-content-center  align-items-center  p-inputgroup-addon bg-color-white" 
              :class="{'p-invalid':$v.form.amount.$error}" >
              <i @click="decrement" class=" px-2  fw-bold pi pi-minus-circle cursor-pointer"></i>
              <input type="number" v-model="form.amount" class="px-2 text-center border-0 fw-bold text-success w-50 custom-outline"  >
              <i  @click="increment" class=" px-2   fw-bold pi pi-plus-circle cursor-pointer"></i>
            </span>
              <Chip class="w-40 btn-success-gradient">
                <label class="form-label text-white">{{$t('form.remaining.label')}} : {{ form.remaining }}</label>           
              </Chip>
            </div>
        </div>  
      </div>
    </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/invoices/order.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import productSuggestions from "@/mixins/erp_v2/items/productSuggestions.js";
import { required } from "vuelidate/lib/validators";
import { requiredError } from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
  },
  mixins: [productSuggestions],
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
    header: {
      type: String,
    },
  },
  data() {
    return {
      form:{
        substituent:null,
        unit:null,
        amount:0,
        remaining:100,

      },
    };
  },
  computed: {
    unitOptions(){
      if (typeof this.form.substituent === 'object' && this.form.substituent !== null){
        if (this.form.substituent.pricing_and_unit.length > 0){
          return this.form.substituent.pricing_and_unit
        }
        else return [];
      }
      else return [];
    }
  },
  validations: {
    form:{
      substituent: {
        required,
      },
      unit: {
        required,
      },
      amount: {
        required,
      },
    }
  },
  methods: {
    requiredError,
    saveForm() {
        this.$emit("save", this.group);
        this.form.amount = 0;
    },
    cancelForm() {
      this.$emit("cancel");
      this.form.amount = 0;
    },

    decrement(){
        this.form.amount--;
    },
    increment(){
      this.form.amount++;
    },
  },
};
</script>

