<template>
    <div class="row custom-zindex">
      <div class="col-lg-4 my-4 ">
        <Base :title="this.form.categoryName + $t('registeration')">
          <Aside 
           v-model="toggler"
           :options="asideHospitalOptions" 
           :v="v"
           ></Aside>
        </Base>
      </div>
      <div class="col-lg-8 my-4">
          <div class="animate__animated  animate__slideInUp" v-show="toggler === 'location' ">
            <LocationSection :v="v"></LocationSection>
            <MapSection :v="v"></MapSection>
          </div>
          <div class="animate__animated  animate__slideInUp" v-show="toggler === 'emails' ">
            <EmailSection :v="v" ></EmailSection>
          </div>
          <div class="animate__animated  animate__slideInUp" v-show="toggler === 'org_phone_numbers' ">
            <PhoneSection :v="v"></PhoneSection>
          </div>
          <div class="animate__animated  animate__slideInUp" v-show="toggler === 'websitesSocialAccounts' ">
            <WebsiteSection ></WebsiteSection>
          </div>      
          <div class="animate__animated  animate__slideInUp" v-show="toggler === 'equipments' ">
            <EquipmentSection ></EquipmentSection>
          </div>
          <div class="animate__animated  animate__slideInUp" v-show="toggler === 'insurance' ">
            <InsuranceCompaniesSection ></InsuranceCompaniesSection>
          </div>
          <div class="animate__animated  animate__slideInUp" v-show="toggler === 'fees' ">
            <FeesSection :v="v"></FeesSection>
          </div>
          
      </div>
    </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>

import Base from "@/components/global/utilities/Base.vue"
import Aside from "@/components/business/common/Aside"
import LocationSection from "@/components/business/common/register/LocationSection"
import MapSection from "@/components/business/common/register/MapSection"
import EmailSection from "@/components/business/common/register/EmailSection"
import PhoneSection from "@/components/business/common/register/PhoneSection"
import WebsiteSection from "@/components/business/common/register/WebsiteSection"
import FeesSection from "@/components/business/common/register/FeesSection"
import InsuranceCompaniesSection from "@/components/business/common/register/InsuranceCompaniesSection"
import EquipmentSection from "@/components/business/common/register/EquipmentSection"
import { mapGetters, } from "vuex";
export default {
  components: {
    Base,
    Aside,
    LocationSection,
    MapSection,
    EmailSection,
    PhoneSection,
    WebsiteSection,
    EquipmentSection,
    InsuranceCompaniesSection,
    FeesSection,
  },
  props:{
    v:{
      type:Object
    }
  },
  data() {
    return {
      toggler: "location",
      asideHospitalOptions:[
        {
            en:'Location',
            ar:'الموقغ الجغرافي',
            key:"location",
            icon:" fa fa-solid fa-location-dot"
            // icon:require('@/assets/icons/business/register/locations.svg')
        },
        {
            en:'Email',
            ar:'البريد الالكتروني',
            key:"emails",
            icon:"fa fa-solid fa-envelope",
            // icon:require('@/assets/icons/business/register/mail.svg')
        },
        {
            en:'Phone Number',
            ar:'الهاتف المحمول',
            key:"org_phone_numbers",
            icon:"fa fa-solid fa-phone",
            // icon:require('@/assets/icons/business/register/phone.svg')
        },
        {
            en:'Web & Social Accounts',
            ar:'المواقع والحسابات الاجتماعية',
            key:"websitesSocialAccounts",
            icon:"fa fa-solid fa-earth-americas",
            // icon:require('@/assets/icons/business/register/world.svg')
        }, 
        {
            en:'Equipment',
            ar:'المعدات',
            key:"equipments",
            icon:"fa fa-solid fa-screwdriver-wrench",
            // icon:require('@/assets/icons/business/register/medal.svg')
        },
        {
            en:'Insurance',
            ar:'التأمين',
            key:"insurance",
            icon:"fa fa-solid fa-passport",
            // icon:require('@/assets/icons/business/register/medical_records.svg')
        },
        {
            en:'Entrance Fees',
            ar:'رسوم الدخول',
            key:"fees",
            icon:"fa fa-solid fa-money-check-dollar",
            // icon:require('@/assets/icons/business/register/money.svg')
        },

      ],
    }
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