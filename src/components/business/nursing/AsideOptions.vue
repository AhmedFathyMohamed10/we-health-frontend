<template>
  <div class="row custom-zindex">
    <div class="col-lg-4 my-4 ">
      <Base :title="this.form.categoryName + $t('registeration')">
        <Aside 
         v-model="toggler"
         :options="asideNurseOptions" 
         :v="v"
         ></Aside>
      </Base>
    </div>
    <div class="col-lg-8 my-4">
        <div class="animate__animated  animate__slideInUp" v-show="toggler === 'location' ">
          <LocationSection :v="v"></LocationSection>
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
        <div class="animate__animated  animate__slideInUp" v-show="toggler === 'businessHours' ">
          <BusinessHoursSection :v="v" ></BusinessHoursSection>
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
import EmailSection from "@/components/business/common/register/EmailSection"
import PhoneSection from "@/components/business/common/register/PhoneSection"
import WebsiteSection from "@/components/business/common/register/WebsiteSection"
import BusinessHoursSection from "@/components/business/common/register/BusinessHoursSection"
import FeesSection from "@/components/business/common/register/FeesSection"
import { mapGetters } from "vuex";
export default {
  components: {
    Base,
    Aside,
    LocationSection,
    EmailSection,
    PhoneSection,
    WebsiteSection,
    BusinessHoursSection,
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
      asideNurseOptions:[
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
            en:'Business Hours',
            ar:'ساعات العمل',
            key:"businessHours",
            icon:"fa fa-solid fa-business-time",
            // icon:require('@/assets/icons/business/register/schedule.svg')
        },
        {
            en:'Visit Fees',
            ar:'رسوم الزيارة',
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