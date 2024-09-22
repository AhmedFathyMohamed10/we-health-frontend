<template>
    <!-- /////////////////////Start patient-Name////////////////////// -->
    <div class="patient-name  my-4">
        <Base>
            <div class="row ">
                <div class="col-lg-10 col-xl-4  col-md-8 col-sm-10"> 
                        <div class="my-2">
                            <label class="form-label">{{label}}</label>
                            <span class="p-input-icon-right">
                                <i class="pi pi-search font-bold text-success" ></i>
                                <InputText 
                                    :placeholder="$t('patientName.placeholdere')"
                                    v-model.trim="ActiveInvoice.patientName"                           
                                />
                      
                           </span>
                        </div>
                </div> 
                <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2">       
                     <AddButton @add="addName"></AddButton>
                </div>
                <div class="col-lg-12  col-sm-12  col-xl-7">
                    <div class="d-xl-flex align-items-center justify-content-center">
                        <label class="form-label text-lg-center  ">{{$t("PatientInfo.label")}}</label>
                    </div>
                    <div class="d-flex  flex-wrap align-items-center justify-content-lg-center ">
                        <div class="">
                            <button  class="btn btn-success-gradient  btn-pill m-1 w-sm  ">
                            <i class="pi pi-file"></i> {{$t("PatientInfo.history.label")}} </button>
                        </div>
                        <div class="">
                            <button   class="btn btn-success-gradient btn-pill  m-1 w-sm  ">
                            {{$t("PatientInfo.PhPota.label")}} </button>
                        </div>
                        <div class="">
                            <button  class="btn btn-success-gradient btn-pill  m-1 w-sm    ">
                            <i class=" pi pi-bolt"></i>{{$t("PatientInfo.allergies.label")}} </button>
                        </div>
                        <div class="">
                            <button   class="btn btn-success-gradient   btn-pill m-1 w-sm   ">
                            <i class="pi pi-save"></i> {{$t("PatientInfo.insurance.label")}}</button>
                        </div>
                    </div>
                </div>  
                
                
            </div>
        </Base>
    <!-- ///////////////////// End patient-info//////////////////////// -->
    </div>
</template>
<i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>

<script>
import AddButton from "@/components/global/utilities/AddButton.vue"
import Base from "@/components/global/utilities/Base.vue"
   ////////////////////////////////////////////
   import { mapGetters  } from "vuex";

export default {
    name:'PatientName',
    components:{
        AddButton,
        Base,
    },
    props:{
        label:{
            type:String,
        },
        valuePlaceholder:{
            type:String,
            default(){
                return this.locale=='ar'?'القيمة':'Value'
            },
        },



    },
    methods:{
      
        addName(){
           console.log('Addd');
        },
    },
    computed: { 
        ...mapGetters("allPharmacy/pharmacy",["getActiveInvoice"]),
        ActiveInvoice: {
            get() {
                return this.getActiveInvoice;
            },
            set(value) {
                this.$store.dispatch("allPharmacy/pharmacy/setActiveInvoice", value);
            },
        },

      },
}
</script>
<style lang="scss" scoped>
   
</style>
