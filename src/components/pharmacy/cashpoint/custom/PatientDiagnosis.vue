<template>      
  <!-- ********************* Test Diagnosis Rx***************** -->
  <div class=" patient-diagnosis  my-2 position-relative ">
    <Base>
        <!-- /////////////////////////////////////////// -->
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
                    <span class="fw-bold">{{ $t('insurancySync.label') }} </span>
                    <div>
                            <button  class=" mx-4 btn btn-icon rounded-circle btn-success-gradient" > 
                            <i class="pi pi-check"></i>
                        </button>
                    </div>
                    <span class=" mx-2 fw-bold text-success"> {{ $t('insurancySync.value') }} </span>


            </div>
            </div>
        </div>
            <!-- //////////////////Custom Dialog////////////////// -->
        <div class="row custom-margin" >
            <div class="col-md-7 col-lg-4 col-sm-12 col-xl-4 ">
                <label class="form-label ">{{$t("PatientDiagnosis.clinicName")}}</label>
                <div class="d-flex ">
                    <span class="p-input-icon-right">
                        <InputText
                            v-model.trim="activeInvoice.clinicName"
                            :placeholder="$t('PatientDiagnosis.placeholdere')"  />
                    </span>
                </div>
            </div>

            <div class="col-md-3 col-lg-1 col-xl-1 ">
                <div class="my-2 ">
                    <AddButton></AddButton>
                </div>
            </div>
            <!-- *******Patient Diagnosis******** -->
            <div class="col-md-7 col-lg-5 col-sm-12 col-xl-5 ">
                <label class="form-label ">{{$t("PatientDiagnosis.label")}}</label>
                <div class="d-flex ">
                    <span class="p-input-icon-right">
                        <i class="pi pi-search font-bold text-success" ></i>
                        <InputText
                        
                            v-model.trim="activeInvoice.diagnosisText"
                            :placeholder="$t('PatientDiagnosis.placeholdereValue')"  />
                    </span>
                </div>
                     <!-- ///////////////diagnosis/////////////// -->
                <div v-if="activeInvoice.diagnosis">
                    <div v-if="activeInvoice.diagnosis.length > 0 "  class="d-flex align-items-center justify-content-start justify-content-lg-center flex-wrap ">
                        <p v-for="(result, index) in activeInvoice.diagnosis"  :key="index" class=" bg-success fw-bold text-light  px-3 m-2" >
                            {{ result }} <i @click="removeDiagnosis(index)" class=" p-2 pi pi-times-circle fw-bold text-danger"></i>
                        </p>
                        <!-- **************issues=====> put same result text write event problem==>solve :key="result" *************** -->
                        <!-- <Chip :label="result" v-for="(result, index) in activeInvoice.diagnosis" :key="index" removable 
                        @remove="removeDiagnosis(index)" class=" m-2 bg-success fw-bold text-light"
                        /> -->
                    </div>

                </div>  
                <!-- ////////////////////////  -->
            </div>
            <div class="col-md-3  col-lg-1 col-xl-1  ">
                <div class="my-2 ">
                    <AddButton  @add="addDiagnosis" ></AddButton>
                </div>
            </div>
            <!-- ////////////////// -->
            <!-- <div class="col-md-1 col-xl-1 custom-vertical-btn "  >
                    <button  @click="openDialog()" class="vertical-button  rounded-5 rounded-top-0 btn btn-success  button-responsive  border border-success">
                        <span>{{ $t("PatientDiagnosis.request") }}</span>
                    </button>
            </div>     -->
        </div> 
        <div class="vertical-button ">
            <!-- <button  @click="openDialog()" class="vertical-button  rounded-5 rounded-top-0 btn btn-success  button-responsive  border border-success">
                <span>{{ $t("PatientDiagnosis.request") }}</span>
            </button> -->
            <button  @click="openDialog()" class="btn btn-success-gradient btn-pill   w-sm  ">{{ $t("PatientDiagnosis.request") }}</button>
        </div>    
        <!-- ****************Container Dialog***************** -->
        <div  class="container-d position-absolute top-0  left-0 p-5 " v-if="showDialog || showDetails">
            <div   v-if="showDialog" class="row">
                <!-- *****************icons************ -->
                <div class="row">
                    <div class="col-md-11"> <div class="fw-bold mb-4">{{ $t("PatientDiagnosis.nameRequest") }}</div></div>
                    <div class="col-md-1 "> <div class="fw-bold mb-4  d-flex justify-content-end "> <i  @click="hideDialog()" class="pi pi-times "></i></div></div>

                </div>
                <!-- ************************************* -->
                <!-- <div  class="gradient border-radius ml-3 mb-3" v-for='request in containsrequests' :key='request.id'>
                    <div class="d-flex align-items-center justify-content-between  ">
                        <div class="d-flex align-items-center fw-bold ">
                          {{ $t('PatientDiagnosis.nameDr') }}
                        <div class="d-flex align-items-center justify-content-start">  
                            <Avatar :image="require('@/assets/global/logo/1.jpg')" class="" shape="circle" />
                           <p class="fw-bold m-2">{{ request.name }} </p>  
                        </div> 
                        </div>
                        <div class="fw-bold"> {{ $t('PatientDiagnosis.date') }} <span>{{ request.date }}</span></div>
                        <div class="fw-bold"> <i @click="openDetails(request)" class="pi pi-external-link"></i></div>
                    </div>
                </div> -->
                <div  class="gradient border-radius p-3 mb-3" v-for='request in containsrequests' :key='request.id'>
                    <div class="d-flex justify-content-between">
                        <div class="d-flex  justify-content-bettween  align-items-center flex-wrap f-grow ">
                            <div class="flex-grow-1 d-flex align-items-center flex-wrap  fw-bold ">
                                <div>{{ $t('PatientDiagnosis.nameDr') }}</div>
                                <div class="d-flex align-items-center justify-content-start"> 
                                    <Avatar :image="require('@/assets/global/logo/1.jpg')" class="m-2" shape="circle" />
                                </div> 
                                <div>
                                    <p class="fw-bold mb-0">{{ request.name }} </p>  
                                </div>
                            </div>
                            <div class="fw-bold"> {{ $t('PatientDiagnosis.date') }} <span>{{ request.date }}</span></div>
                        </div>
                        <div class="fw-bold hight-btn"> <i @click="openDetails(request)" class="pi pi-external-link"></i></div>
                    </div>

                </div>
            </div>
            <!-- **********************custom details************ -->
            <div   v-if="showDetails" class="row ">
                <!-- *****************icons details************ -->
                <div class="row">
                    <div class="col-md-11  "> <div class="fw-bold  mb-4"><i  @click="hideDetails()" class="pi pi-angle-double-left fw-bold "></i></div></div>
                    <div class="col-md-1  "> <div class=" fw-bold  mb-4 d-flex justify-content-end"> <i  @click="hideALL()" class="pi pi-times fw-bold "></i></div></div>
                </div> 
                <!-- ************************************* -->
                <div class="gradient row ">
                    <div class="col-12  col-sm-12 ">
                        <div class="d-flex align-items-center fw-bold ">
                            <span class="fw-bold "> {{ $t("PatientDiagnosis.nameDr") }}</span>  
                                <div class="d-flex align-items-center justify-content-start">  
                                    <Avatar :image="require('@/assets/global/logo/1.jpg')" class="" shape="circle" />
                                    <p class="fw-bold m-2"> {{ requestDetails.name }}</p>  
                                </div> 
                        </div>
                        <div class="fw-bold "> {{ $t("PatientDiagnosis.diagnosis") }}<span class="fw-bold mx-3"> {{ $t("PatientDiagnosis.icd") }}</span>
                                <span class="fw-bold text-white "> {{requestDetails.diagnosis.icd}}</span> <span class="fw-bold mx-3"> {{ $t("PatientDiagnosis.name") }}</span> 
                                <span class="fw-bold text-white">{{requestDetails.diagnosis.name}}</span>
                        </div>
                        <div class="fw-bold "> 
                            {{ $t("PatientDiagnosis.date") }} <span class="mx-3">{{requestDetails.date}}</span>
                        </div>
                    </div>            
                </div>
                <!-- ******************table******************* -->
                <div class="row my-2">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class=" table table-striped table-sm text-center">
                                <thead>
                                    <tr  class="">
                                        <th scope="col">{{$t('table.thead.count')}}</th>
                                        <th scope="col">{{$t('otc.drugName.label')}}</th>
                                        <th scope="col">{{$t('otc.dose.label')}}</th>
                                        <th scope="col">{{$t('otc.frequency.label')}}</th>
                                        <th scope="col">{{$t('otc.period.label')}}</th>
                                        <th scope="col">{{ $t('otc.route.lable') }}</th>
                                        <th scope="col">{{$t('otc.comment.label')}}</th>
                                        <th scope="col">{{ $t('invoice.remaining.label') }}</th>
                                        <th scope="col">{{$t('table.thead.controls')}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr class="" v-for="(val,index) in requestDetails.rx" :key="val.index">
                                        <td class="align-middle"> {{index+1}}</td>
                                        <td class="align-middle"> {{val.DrugName}}</td>
                                        <td class="align-middle"> {{val.Dose}}</td>
                                        <td class="align-middle"> {{val.Frequency}}</td>
                                        <td class="align-middle"> {{val.Period}} </td>
                                        <td class="align-middle"> {{val.Route}} </td>
                                        <td class="align-middle"> {{val.Comment}} </td>
                                        <td class="align-middle"> {{val.remaining}} </td>
                                        <td class="align-middle"> 
                                            <div class="d-flex justify-content-center align-items-center">
                                                <i class="pi pi-arrow-circle-down fw-bold mx-2 "></i>
                                                <i class="pi pi-sync fw-bold  mx-2"></i>
                                                <i class="pi pi-chart-pie fw-bold  mx-2"></i>
                                        
                                            </div>
                                        </td>
                                        
                                    </tr>
                            
            
                                </tbody>
                            </table>


                            <!-- /////////////////Buttons/////////btns-wrapper justify-content-center  d-flex gap-2 flex-wrap my-2/////// -->
                             <div class=" d-flex align-items-center justify-content-center  gap-2"> 
                                 <div class=" d-flex flex-wrap ">
                                     <button class="btn  btn-success-gradient btn-pill  btn-pill w-sm my-2">
                                         <i class=" pi pi-save mx-1 "></i>{{$t('invoice.print.label')}} 
                                     </button>
                                 </div>
                                 <div class=" d-flex flex-wrap ">
                                     <button   @click="hideALL()" class="btn  btn-success-gradient btn-pill  btn-pill w-sm my-2">
                                         <i class=" pi pi-times-circle mx-1 "></i>{{$t('invoice.cancel.label')}}
                                     </button>
                                 </div>
                                 <div class=" d-flex flex-wrap ">
                                     <button  @click="hideALL()" class="btn btn-success-gradient btn-pill w-sm my-2  btn-pill">
                                     <i class=" pi pi-check  mx-1"></i>{{$t('invoice.done.label')}} 
                                     </button>
                                 </div>
                             </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <!-- ///////////////////// End patient-Complaint//////////////////////// -->
    </Base>      
       <!-- //////////////////// patient-search///////////////////////////// -->
        <!-- <div class=" patient-search my-4">
             <Base>
                <div class="row">
                    <div class="col-md-9 col-sm-12 col-lg-8 ">
                    <label class="form-label ">Search</label><h5 class="form-label">Name/Barcode/Item code</h5>
                    <div class="d-flex ">
                        <span class="p-input-icon-right">
                            <i class="pi pi-search font-bold text-success" ></i>
                            <InputText
                                v-model.trim="activeInvoice.complaintText"
                                placeholder="Search" 
                                
                                />
                        </span>
                    </div>
                </div>
                <div class="col-md-3 ">
                    <div class="my-2 edit-margin ">
                        <AddButton  @add="addComplaint" ></AddButton>
                    </div>
                </div>
                </div>
            </Base>

        </div> -->
        <!-- END*************** -->
  </div>
</template>

<i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue"
import cashpointOption from '@/mixins/pharmacy/cashpoint/cashpointOption'
//////////////////////////////////
import { mapGetters  } from "vuex";
export default {
    mixins:[cashpointOption],
    name:'PatientDiagnosis',
    components:{
        Base,
        AddButton  
    },
        
    data(){
        return{
     
            showDialog:false,
            showDetails:false,
            requestDetails:null,
            containsrequests:[],
        }
    },
        
    created(){                                     
        var requestNum = 6;
            for( let request= 0; request < requestNum; request++ ){
            this.containsrequests.push(this.requests());
        }
        console.log(this.containsrequests);
    },

    computed: { 
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
         addDiagnosis() {
            console.log('addDiagnosis');
            if(this.activeInvoice.diagnosisText){
                this.activeInvoice.diagnosis.push(this.activeInvoice.diagnosisText);
                this.activeInvoice.diagnosisText="";
            }
        },
        removeDiagnosis(index){
                this.activeInvoice.deleteDiagnosis = index ;
                this.activeInvoice.diagnosis.splice(this.activeInvoice.deleteDiagnosis, 1);
        },
      /////////////return backend////////////////////
        requests(){
            return{
                   
                img:"",
                name:'Hossam El-Bokhary Pharmacy',
                date:' 13/3/2023',
                diagnosis:{
                    icd:'14245',
                    name:"Gout"
                },
                rx:[
                    {
                    DrugName:'New York',
                    Dose:'test1',
                    Frequency:'test1',
                    Period:'test1',
                    Route :'test1',
                    Comment:'test1',
                    remaining:'test1',
                    } ,     
                    {
                    DrugName:'Landon',
                    Dose:'test2',
                    Frequency:'test2',
                    Period:'test2',
                    Route :'test2',
                    Comment:'test2',
                    remaining:'test2',
                    }, 
                    {
                    DrugName:'Landon',
                    Dose:'test3',
                    Frequency:'test3',
                    Period:'test3',
                    Route :'test3',
                    Comment:'test3',
                    remaining:'test3',
                    } 
                ],
            }
        },
        ///////////////////////////////////
        openDialog(){
            this.showDialog=true;
        },
        hideDialog(){
            this.showDialog=false;
        },
        openDetails(request){
         this.requestDetails=request
         this.showDetails=true;
         this.showDialog=false;
        },
        hideALL(){
            this.showDialog=false;
            this.showDetails=false;
        },
        hideDetails(){
            this.showDialog=true;
            this.showDetails=false;
        }

    }
 }
</script>


<style scoped>
.gradient{
    background-image: linear-gradient(90deg, #56C596 0%, white 100%);
}
.vertical-button {
    transform: rotate(270deg);
    position: absolute;
    right: -36px;
    bottom: 40px; 
}
.rtl .vertical-button {
    left: -36px ;
    right:auto ;
}
.f-grow{
    flex-grow: 0.5;
}
.hight-btn{
    height: 48px;
    display: flex;
    align-items: center;
}
.border-radius{
    border-radius: 1rem;
}
.container-d {
    z-index:999;
    background-color: #ececf6;
    border-radius: 1rem;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5);
}  
/* ///////////////media///////////////////   */
@media  (max-width:425px) {
    .custom-margin {
      margin-bottom: 5rem !important;
   
    }

}
</style>