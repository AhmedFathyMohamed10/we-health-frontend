<template>
  <div class="phone-section">
    <Base>
      <div class="row">
        <div class="col-md-7">
          <div class="form-group">
            <div class="form-label">{{$t('form.phone.label')}}</div>
              <PhoneNumberInput 
                v-model="phoneNumberExample"
                @update="resultsExample = $event"
                :translations="translations[locale]" 
                show-code-on-list
                :error="hasError"
                :class="{'p-invalid':v.org_phone_numbers.$error}"
                default-country-code="EG"
                color="#56C596"
                valid-color="#2B634B"
              />            
            <div class="hint my-2">
              <span class="text-success fw-bold">{{ $t('form.phone.hint.label') }} : </span>
              <span>{{ $t('form.phone.hint.content') }}</span>
            </div>
          <div class="errors my-2">
            <small class="p-invalid" v-if="v.org_phone_numbers.$error && !v.org_phone_numbers.required">
             {{requiredError($t('form.phone.label')) }}
            </small>  
            <small class="p-invalid" v-else-if="v.org_phone_numbers.$invalid && !v.org_phone_numbers.maxLength">
              {{ $t('form.phone.hint.content') }}
            </small>  
            <small class="p-invalid" v-else-if="duplicateNumber">
              {{ $t('form.phone.hint.duplicateNumber') }}
            </small>  
          </div>
          </div>
        </div>
        <div class="col-md-5">
          <AddButton @add="addPhone()"></AddButton>
        </div>
        <div class="col-12">
          <div v-for="(num, index) in form.org_phone_numbers" :key="num.formattedNumber" class="my-2">
            <Chip :label="num.formattedNumber" removable @remove="deletePhone(index)" />
          </div>
        </div>
      </div>
   </Base>
  </div>
</template>
<i18n src="@/lang/business/register"></i18n>

<script>
import Base from "@/components/global/utilities/Base.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import {required} from "vuelidate/lib/validators";
import {requiredError,maxLengthError} from "@/validation/errors.js";
import { mapGetters,mapActions } from "vuex";
export default {
  props: { 
    v:{
      type:Object,
    },
  },
  components: {
    AddButton,
    Base,
  },
  data() {
    return {
      translations:{
        en:{
          countrySelectorLabel: 'Country Code',
          countrySelectorError: 'Select Country',
          phoneNumberLabel: 'Phone Number',
          example: 'Exemple :' 
        },
        ar:{
          countrySelectorLabel: 'كود الدولة',
          countrySelectorError: 'اختر الدولة',
          phoneNumberLabel: 'رقم الهاتف',
          example: 'مثال :' 
        },
      },
      phoneNumberExample: null,
      resultsExample: null,
      duplicateNumber:false,
      mobileNumber:{
        countryCode: "",
        number: "",
        formattedNumber: ""
      },
    };
  },
  computed:{
        ...mapGetters('business/register', {
          getForm: 'getForm',
        }),
        form: {
          get() {
              return this.getForm;
          },
          set(value) {
              this.setForm(value);
          }
        },
        hasError(){
          if(this.resultsExample){
            return !this.resultsExample.isValid
          }
          else {
            return false;
          }
        },
    },
  validations: {
    mobileNumber: { 
      number:{
        required,
       }
    },
  },
  watch: { 
    resultsExample(){
      if(this.resultsExample.isValid && this.resultsExample.formatNational && this.resultsExample.countryCallingCode){
        this.mobileNumber.countryCode=this.resultsExample.countryCallingCode
        this.mobileNumber.number=this.resultsExample.phoneNumber
        this.mobileNumber.formattedNumber=this.resultsExample.formattedNumber
      }
    }
  },
  mounted() { },
  methods: {
    requiredError,
    maxLengthError,
    ...mapActions('business/register',{
    setForm:'setForm',
    }),
    addPhone() {
      if ( this.mobileNumber.countryCode && this.mobileNumber.number && this.mobileNumber.formattedNumber) {
        const exists = this.form.org_phone_numbers.some(
          (phone) => phone.countryCode === this.mobileNumber.countryCode && phone.number === this.mobileNumber.number && phone.formattedNumber === this.mobileNumber.formattedNumber
        );
        this.duplicateNumber = exists;
        if (!exists && this.form.org_phone_numbers.length < 3) {
          this.form.org_phone_numbers.push({ ...this.mobileNumber });
        }
        this.phoneNumberExample= null;
        this.duplicateNumber = exists;
        this.mobileNumber = {
          countryCode: "",
          number: "",
          formattedNumber: ""
        };
        this.$v.mobileNumber.$reset();
      }
    },
    deletePhone(index) {
      this.form.org_phone_numbers.splice(index, 1);
    },
  },
};
</script>
<style lang="scss" scoped >
</style>