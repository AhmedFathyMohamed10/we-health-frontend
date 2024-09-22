<template>
    <!-- ///////////////////// Start patient-complaint////////////////// -->
    <div class=" patient-complaint  my-2 ">
        <Base>
            <div class="row">
                <div class="col-md-6 col-xl-4">
                    <div class="d-flex align-items-start justify-content-start my-2 ">     
                    <span class="fw-bold"> {{ $t('PatientWallet.label') }} </span>
                    <span class="mx-2 fw-bold  text-danger"> {{ $t('PatientWallet.value') }}</span ><span class=" fw-bold text-success">{{ $t('PatientWallet.exp') }}</span>
                </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="d-flex align-items-start justify-content-start my-2 ">     
                        <span class="fw-bold">{{ $t('lastOperation.label') }}</span>
                        <span class=" mx-2 fw-bold text-success">{{ $t('lastOperation.value') }}</span>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="d-flex align-items-start justify-content-start my-1 ">            
                        <span class="fw-bold"> {{ $t('insurancySync.label') }} </span>
                        <div>  
                            <button  class=" mx-4 btn btn-icon rounded-circle btn-success-gradient" > 
                                <i class="pi pi-check"></i>
                            </button>
                        </div>
                        <span class=" mx-2 fw-bold text-success"> {{ $t('insurancySync.value') }} </span>
                    </div>
                </div>
            </div> 
            <!-- //////////////////complaints///////////////// -->
            <div class="row ">
                <div class="col-md-9 col-sm-12 col-lg-6 ">
                    <label class="form-label ">{{$t("PatientComplaint.label")}} </label>
                    <div class="d-flex ">
                        <span class="p-input-icon-right">
                            <i class="pi pi-search font-bold text-success" ></i>
                            <InputText
                                v-model.trim="activeInvoice.complaintText"
                                placeholder="Patient Complaint" 
                                
                                />
                        </span>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="my-2 edit-margin ">
                        <AddButton  @add="addComplaint" ></AddButton>
                    </div>
                </div>
                <div  v-if="activeInvoice.complaints"  class="">
                    <div v-if="activeInvoice.complaints.length > 0 "  class="d-flex  d-flex align-items-center justify-content-start flex-wrap">
                       <p v-for="(result, index) in activeInvoice.complaints"  :key="index" class=" bg-success fw-bold text-light custom-rounded px-3 m-2" >
                        {{ result }} <i @click="removeComplaint(index)" class=" p-2 pi pi-times-circle fw-bold text-danger"></i>
                       </p>
                        
                       <!-- <div>
                        **************issues=====> put same result text write event problem ========>*****************
                        <Chip :label="result"  v-for="(result, index) in  activeInvoice.complaints" :key="result" 
                             @remove="removeComplaint(index)"  removable class=" m-2 bg-success fw-bold text-light"
                         />
                       </div> -->
                    
    
                    </div>  
                </div>  
            </div> 
        </Base> 
    <!-- ///////////////////// End patient-complaint//////////////////////// -->
     <!-- //////////////////// patient-search///////////////////////////// -->
        <div class=" patient-search my-4">
             <Base>
                <div class="row">
                    <div class="col-md-9 col-sm-12 col-lg-8 ">
                    <label class="form-label ">Search <span class="mx-3 fw-normal" >Name/Barcode/Item code</span></label>
                    <div class="d-flex ">
                        <span class="p-input-icon-right">
                            <i class="pi pi-search font-bold text-success" ></i>
                            <InputText
                                v-model.trim="activeInvoice.search"
                                placeholder="Search" 
                                
                                />
                        </span>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="my-2 edit-margin ">
                        <AddButton  @add="addSearch" ></AddButton>
                    </div>
                </div>
                </div>
            </Base>

        </div>
        <!-- END*************** -->
    </div>
 
</template>
<i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue"
////////////////////////////////////////////
import { mapGetters  } from "vuex";

 export default {
  
    name:'PatientComplaint',

    components:{
        Base,
        AddButton,    
    },
    computed:{
        ...mapGetters("allPharmacy/pharmacy",["getActiveInvoice"]),
        activeInvoice: {
            get() {
                return this.getActiveInvoice;
            },
            set(value) {
                this.$store.dispatch("allPharmacy/pharmacy/setActiveInvoice", value);
            },
        },
    },
        
    methods:{
        addComplaint() {
            if(this.activeInvoice.complaintText){
                let id=2;
                this.activeInvoice.complaints.push(this.activeInvoice.complaintText) ;
                this.activeInvoice.complaintText ="";
            }
        },
        removeComplaint(index){
            this.activeInvoice.deleteComplaint = index ;
            console.log(index);
            this.activeInvoice.complaints.splice(this.activeInvoice.deleteComplaint,1);
        },
        addSearch(){
            console.log("addSearch")
        }

    } 
 }
</script>
<!-- /////////////////////////////// -->
<style>
</style>