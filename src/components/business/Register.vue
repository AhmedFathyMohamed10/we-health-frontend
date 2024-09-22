<template>
  <div class="register">
      <div class="row">
      <div class="col-12">
        <div class="category mt-5">
          <h3 class="mb-0">{{form.categoryName + $t('registeration') }}</h3>
        </div>
      </div>
      <div class="col-lg-7 order-2 order-lg-1 my-4">
        <Base :title="form.categoryName + $t('registeration')" :icon="'pi pi-home'">
          <MainForm :v="$v.form">
              <Title
                v-if="titleTypes.length > 0"
                :v="$v.form"
                :titleTypesOptions="titleTypes"
              >
              </Title> 
              <SubspecialtyServiceType
                v-if="subOptions.length > 0 || serviceTypes.length > 0"
                :v="$v.form"
                :subOptionsValue="subOptions" 
                :serviceTypesValue="serviceTypes"
              >
              </SubspecialtyServiceType>
          </MainForm>
        </Base>
      </div>
      <div class="col-lg-5 order-1 order-lg-2 my-4 ">
        <BaseImageProfile :title="$t('profile')" :icon="'pi pi-image'">
            <ProfileImagesEdit :v="$v.form"></ProfileImagesEdit>
        </BaseImageProfile>
      </div>
      </div>
      <component
        v-if="form.categoryKey ==='Clinic' || form.categoryKey ==='Pharmacy'  || form.categoryKey ==='Laboratory' || form.categoryKey ==='Hospital' || form.categoryKey ==='Nurse' || form.categoryKey ==='Center' "
        :v="$v.form" 
        :is="form.categoryKey + 'AsideOptions'" 
        :data="form.categoryKey? form.categoryKey : null"
      >
    </component> 
    <div v-else>
      <Base :title="form.categoryName + $t('registeration')" :icon="'pi pi-eye-slash'">
        <h3 class="text-center">{{ $t('componentFuture') }}</h3>
      </Base>
    </div>
    <div class="row mt-4">
      <div class="col-6">
        <div class="field-checkbox d-flex align-items-center gap-1">
             <Checkbox 
                id="binary" 
                :binary="true"
                v-model="form.acceptanceAgreement" 
                :class="{'p-invalid':$v.form.acceptanceAgreement.$error}"
            /> 
           <label for="binary" class="fw-bold mb-0">{{ $t('form.acceptanceAgreement.text') }}
               <a href="#">{{ $t('form.acceptanceAgreement.link') }} </a>
            </label>
        </div>
        <div class="errors">
          <small class="p-invalid" v-if="$v.form.acceptanceAgreement.$error && !$v.form.acceptanceAgreement.checked">
             {{requiredError($t('form.acceptanceAgreement.link'))}}
          </small>
        </div> 
      </div>
      <div class="col-6">
        <div class="d-flex justify-content-end">
          <button class="btn btn-success-gradient btn-pill" @click.prevent="register">{{$t('next')}}</button>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-end">
      <div class="w-100">
        <CommonSteps></CommonSteps>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>

import Base from "@/components/global/utilities/Base.vue";
import BaseImageProfile from "@/components/business/common/register/BaseImageProfile.vue";
import ProfileImagesEdit from "@/components/business/common/register/ProfileImagesEdit.vue";
import ClinicAsideOptions from "@/components/business/clinic/AsideOptions";
import CenterAsideOptions from "@/components/business/center/AsideOptions";
import HospitalAsideOptions from "@/components/business/hospital/AsideOptions";
import LaboratoryAsideOptions from "@/components/business/lab/AsideOptions";
import NurseAsideOptions from "@/components/business/nursing/AsideOptions";
import PharmacyAsideOptions from "@/components/business/pharmacy/AsideOptions";
import MainForm from "@/components/business/common/register/MainForm";
import SubspecialtyServiceType from "@/components/business/common/register/SubspecialtyServiceType";
import Title from "@/components/business/common/register/Title"
import CommonSteps from "@/components/business/common/CommonSteps.vue"
import { mapGetters,mapActions } from "vuex";
import { required,requiredIf, minLength, maxLength ,numeric,maxValue } from "vuelidate/lib/validators";
import {requiredError,minLengthError,maxLengthError,arabicError,englishError} from "@/validation/errors.js";
import { arabic, english } from "@/validation/customValidators.js";
export default {
  components: {
    Base,
    BaseImageProfile,
    MainForm,
    Title,
    SubspecialtyServiceType,
    ProfileImagesEdit,
    ClinicAsideOptions,
    CenterAsideOptions,
    HospitalAsideOptions,
    LaboratoryAsideOptions,
    NurseAsideOptions,
    PharmacyAsideOptions,
    CommonSteps
  },
  data() {
    return {  
    }
  },
  watch: {
    'form.specialityChoice': {
      deep:true,
      handler(newValue,oldValue){
       this.form.specialityChoice = newValue;
      }
    },
  },
  computed:{
    ...mapGetters('business/listData', {
      listDataIsLoading: 'getServerLoading',
      listDataServerResponse: 'getServerResponse',
      listDataServerError: 'getServerError',
      }),
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
      subOptions(){
        let options = []
        if(this.listDataServerResponse){
          options = this.listDataServerResponse[0].data[0].subspeciality;
          return options;
        }
        else {
          return options;
        }
      },
      titleTypes(){
        let options = []
        if(this.listDataServerResponse){
          options = this.listDataServerResponse[0].data[0].title;
          return options;
        }
        else {
          return options;
        }
      },
      serviceTypes(){
        let options = []
        if(this.listDataServerResponse){
          options = this.listDataServerResponse[0].data[0].service_type;
          return options;
        }
        else {
          return options;
        }
      },
   
  },
  validations: {
    form: {
      name: {
        enName: {
          required: requiredIf(function () {
            if(this.form.name.otherName == ""){
              return true;
            }
            else return false;
          }),
          minLength: minLength(4),
          maxLength: maxLength(144),
          english(value) {
            return english(value);
          }
        },
         
        otherName: {
          required: requiredIf(function () {
            if(this.form.name.enName == ""){
              return true;
            }
            else return false;
          }),
          minLength: minLength(4),
          maxLength: maxLength(144),
          arabic(value) {
            return arabic(value);
          },
        },
      },
      title: {
        required: requiredIf(function(){
          if(this.form.categoryKey === 'Clinic'){
            // || this.form.categoryKey === 'Center'
            return true;
          }
          else return false;
        }),
      },
      subspeciality: {
        required: requiredIf(function(){
          if(this.form.categoryKey === 'Clinic'){
            // || this.form.categoryKey === 'Center'|| this.form.categoryKey === 'Laboratory'
            return true;
          }
          else return false;
        }),
      },
      service_type: {
        required: requiredIf(function(){
          if(this.form.categoryKey === 'Clinic' || this.form.categoryKey === 'Laboratory'){
            // || this.form.categoryKey === 'Center'
            return true;
          }
          else return false;
        }),
      },
      bio: {
        maxLength: maxLength(255)
      },
      img: {},
      cover_img: {},
      location:{
        address:{
            required,
            minLength: minLength(3),
            maxLength: maxLength(144),
        },
        zipCode:{
          minLength: minLength(6),
          maxLength: maxLength(8),
        },
        city:{
          required,
        }
      },
      emails:{
        maxLength:maxLength(2)
      },
      org_phone_numbers :{
        required,
        maxLength:maxLength(2)
      },
      websitesSocialAccounts: {
      },
      equipments:{},
      businessHours:{
        type:{
          required:requiredIf(function(){
            if(this.form.categoryKey !== 'Hospital'){
              return true;
            }
            else{
              return false;
            }
          })
        },
        schedule:{
          required:requiredIf(function(){
            if(this.form.businessHours.type === 'days'){
              return true;
            }
            else{
              return false;
            }
          })
        }
      },
      waiting_time: {
        required:requiredIf(function(){
          if(this.form.categoryKey === 'Clinic') {
            return true;
          }
          else return false;
        }),
    
        numeric,
        maxValue: maxValue(1000),
      },  
      insurance:{},
      fees:{
        value:{
          required:requiredIf(function(){
            if(this.form.categoryKey === 'Clinic' || this.form.categoryKey === 'Hospital'|| this.form.categoryKey === 'Nurse' ) {  
               return true ;
            }
            else return false;
          }),
          numeric,
          maxValue: maxValue(1000),
        }
      },
      acceptanceAgreement:{
        checked: value => value === true,
      }
    },
  },
  async created() {
    await this.loadData();
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    arabicError,
    englishError,
    ////////////////////////
    async loadData() {
      if (this.form.categoryKey !== "") {
        const payload = {
          id: this.form.category,
          speciality: this.form.multipleChoice ? 0 : this.form.speciality ,
        };
        await this.fetchData(payload);
      } else {
        this.returnCategory();
      }
    },
    /////////////////////////
    async fetchData(payload) {
      await this.$store.dispatch('business/listData/documentsAndStaticDataAndImages',payload);
    },
    //////////////////////////////
    ...mapActions('business/register',{
      setForm:'setForm',
    }),
    //////////////////////////////
    register(){
      this.$v.form.$touch();
      if(!this.$v.form.$invalid){
        this.$router.push({name:'verify'})
      }
      else{
        console.log("Not Now")
      } 
    },
    returnCategory(){
      return this.$router.push({name:'category'})
    }
  },
};
</script>
<style lang="scss" scoped>
.custom-zindex{
  position: relative;
  z-index: 10;

}
.register {}

</style>