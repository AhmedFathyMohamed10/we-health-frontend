<template>
  <div class="common-steps ">
        <router-view></router-view>  
        <Steps :model="steps" :readonly="isReadOnlySteps" class="my-3" :exact="true"/> 
  </div>
</template>
<i18n lang="json5">
  {
    "en":{
      "specialty":"Specialty", 
      "register":"Register",
      "verify":"Verify"
    },
    "ar":{
      "specialty":"التخصص",
      "register":"تسجيل العمل",
      "verify":"تأكيد"
    }
  }
</i18n>
<script>
import { mapGetters } from "vuex";
export default {
  name: 'CommonSteps',
  data() {
    return {
    };
  },
  watch:{
    'form.displaySpecialty':{
        deep:true,
        handler(newValue,oldValue){
            this.form.displaySpecialty = newValue ;
        }
    },
    'form.isReadOnly':{
      deep:true,
      handler(newValue,oldValue){
         this.form.isReadOnly = newValue;
      }
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
      isReadOnlySteps() {
         return this.form.isReadOnly;
      },
      steps() {
        let specialityRoute = "/business/specialty";
        let registerRoute = "/business/register";
        let verifyRoute = "/business/verify";
        let stepsArray = [
          {
            to: `${registerRoute}`,
            label: this.$t('register'),
          },
          {
            to: `${verifyRoute}`,
            label: this.$t('verify'),
          },
        ];
        if(this.form.displaySpecialty === true){
          // console.log("from category",this.form.categoryKey)
          // console.log("from isReadOnly",this.form.isReadOnly)
          // console.log("from multipleChoice",this.form.multipleChoice)
          // console.log("specialityRoute==> "+ specialityRoute)         
          stepsArray.unshift({
            to: `${specialityRoute}`,
            label: this.$t('specialty'),
          })  
        } 
        return stepsArray;
      }, 
  },
  methods:{
  },
  mounted(){
  },
 
};
</script>

<style lang="scss" scoped>
  /deep/.p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
    box-shadow: none !important; 
  } 
  /deep/.p-steps .p-steps-item .p-menuitem-link{
       background: none;
  }
</style>  