<template>
    <!--*************Start Requests********************-->
    <div class="requests" >
          <!-- ///////////////Scanning//////////////// -->
        <div v-show="hideDataScanning" class="analysis">
            <Base>
                <!-- /////////////row1////////////////// -->
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <div class=""><button class="btn btn-success">Done</button> <span class=" fw-bold gradient px-4 py-2 ">2</span></div>
                    <div class=""><span class="fw-bold">Booking Time</span> <span class="fw-bold text-success mx-3">17/6/2023</span></div>
                    <div class=""><span class="fw-bold">Due date </span> <span class="fw-bold text-success mx-3">29/6/2023</span></div>
                    <div class=""><button @click="deleteDoneScanning" class="btn btn-icon rounded-circle btn-danger-gradient"><i class="fa fa-trash fa-md"></i></button></div>

                </div>
                <div class="col-12">
                    <Divider></Divider>
                </div>
                    <!-- /////////////row2////////////////// -->
                <div class="d-flex justify-content-between align-items-center my-3  flex-wrap">
                    <div class="d-flex align-items-center justify-content-start ">  
                        <Avatar :image="require('@/assets/global/logo/1.jpg')" class=""  shape="circle" />
                            <h6 class="fw-bold mb-0 mx-1"> Mohamed Ali Mohamed </h6>  
                    </div>
                    <div class=""><span class="fw-bold">Gender </span> 
                        <span class="fw-bold text-success mx-1">Male</span>
                        <span class="fw-bold">.</span>
                    </div>
                    <div class=""><span class="fw-bold">Age </span> 
                        <span class="fw-bold text-success mx-1">31Years</span>
                        <span class="fw-bold">.</span>
                    </div>
                    <div class=""><span class="fw-bold">Address </span> 
                        <span class="fw-bold text-success mx-1">Banha-Belissimo</span>
                        <span class="fw-bold">.</span>
                    </div>
                    <!-- <div class=""><span class="fw-bold">Services Required </span> 
                        <span class="fw-bold text-success mx-1">Banha-Belissimo</span>
                    </div> -->
                
                </div> 
                <!-- / buttons///////////// -->
                <div  v-show="hideDownScanning" class="row">
                    <div  class="col-12">
                        <button @click="showDoneScanning" class="btn gradient btn-pill  text-white w-100">
                            <i class=" pi pi-chevron-down"></i>  
                        </button>
                    </div>
                        
                </div>
                <!-- /////////////////////// -->
                <div  v-show="showDetailsScanning" class="content-analysis my-2">
                    <div class="col-12">
                            <Divider></Divider>
                    </div>
                    <div class="d-flex justify-content-start align-items-center">
                        <div class="mx-2">
                            <h5 class="mb-0" for="">Requests</h5>
                        </div>
                        <div class="mx-3">
                            <span class="gradient custom-rounded px-4" for="">CT</span>
                        </div>
                        <div class="mx-3">
                            <span class="gradient custom-rounded px-4" for="">MRI</span>
                        </div>
                        
                    </div>
                    <div class="col-12">
                        <Divider></Divider>
                    </div>
                    <div class="row">
                    
                        <div class="col-md-6  col-lg-6  col-xl-3">
                            <div class="form-group subtest">
                                <label class="form-label">{{$t('otc.subtest.label')}}</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon "
                                    :class="{'p-invalid': $v.rowToAdd.subtest.$error}">
                                        <i class="pi pi-tag"></i>
                                    </span>
                                    <InputText 
                                        v-model="rowToAdd.subtest"
                                        type="text" 
                                        class="form-control" 
                                        :class="{'p-invalid': $v.rowToAdd.subtest.$error}"
                                        :placeholder="$t('otc.subtest.placeholder')"
                                    
                                    />

                                </div>
                                <small class="p-invalid" v-if="$v.rowToAdd.subtest.$error &&! $v.rowToAdd.subtest.required">
                                                {{requiredError($t('otc.subtest.label'))}}
                                </small>
                            </div>
                        </div> 
    
                    </div>
                    <div class="col-12">
                        <Divider></Divider>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="d-flex justify-content-between align-items-center my-3">
                                    <div>
                                        <label class="form-label">
                                         {{$t("analysis.comment.label")}}
                                       </label>
                                    </div>
                                    <div class="">
                                        <button class="btn btn-success-gradient btn-pill  w-sm">
                                          Autofill
                                        </button>
                                    </div>
                               </div>
                                <textarea
                                    class="form-control"
                                    v-model.trim="note"
                                    :placeholder="$t('analysis.comment.placeholder')"
                                    :class="{
                                    'is-invalid': $v.note.$invalid && $v.note.$anyError,
                                    }">
                                    </textarea>
                                <div
                                    v-if="!$v.note.notContainsHtmlTags && $v.note.$error"
                                    class="invalid-feedback"
                                >
                                    {{ htmlTagsError($t("analysis.comment.label")) }}
                                </div>
                                <div
                                    v-else-if="!$v.note.minLength && $v.note.$error"
                                    class="invalid-feedback"
                                >
                                    {{
                                    maxLengthError(
                                        $t("analysis.comment.label"),
                                        $v.note.$params.minLength.min
                                    )
                                    }}
                                </div>
                                <div
                                    v-else-if="!$v.note.maxLength && v.note.$error"
                                    class="invalid-feedback"
                                >
                                    {{
                                    minLengthError(
                                        $t("analysis.comment.label"),
                                        $v.note.$params.maxLength.max
                                    )
                                    }}
                                </div>
                                </div>
                        </div>
                       
                     </div>

                <!-- /////////////////////buttons pended///////////////// -->    
                <div  v-show="hideUpScanning" class="row">
                    <div  class="col-12 " >
                        <button @click="hideDoneScanning" class="btn gradient btn-pill  text-white w-100">
                            <i class=" pi pi-chevron-up"></i>  
                        </button>
                    </div>
                        
                </div>
                </div>
            </Base>
        </div>


        <!-- ///////////////Analysis//////////////// -->
        <div v-show="hideDataAnalysis" class="requests my-2">
            <Base>
                <!-- /////////////row1////////////////// -->
                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <div class=""><button class="btn btn-warning"> Pended</button> <span class=" fw-bold gradient px-4 py-2 ">2</span></div>
                    <div class=""><span class="fw-bold">Booking Time</span> <span class="fw-bold text-success mx-3">17/6/2023</span></div>
                    <div class=""><span class="fw-bold">Due date </span> <span class="fw-bold text-success mx-3">29/6/2023</span></div>
                    <div class=""><button @click="deleteDataAnalysis" class="btn btn-icon rounded-circle btn-danger-gradient"><i class="fa fa-trash fa-md"></i></button></div>

                </div>
                <div class="col-12">
                    <Divider></Divider>
                </div>
                 <!-- /////////////row2////////////////// -->
                <div class="d-flex justify-content-between align-items-center my-3  flex-wrap">
                    <div class="d-flex align-items-center justify-content-start ">  
                        <Avatar :image="require('@/assets/global/logo/1.jpg')" class=""  shape="circle" />
                            <h6 class="fw-bold mb-0 mx-1"> Mohamed Ali Mohamed </h6>  
                    </div>
                    <div class=""><span class="fw-bold">Gender </span> 
                        <span class="fw-bold text-success mx-1">Male</span>
                        <span class="fw-bold">.</span>
                    </div>
                    <div class=""><span class="fw-bold">Age </span> 
                        <span class="fw-bold text-success mx-1">31Years</span>
                        <span class="fw-bold">.</span>
                    </div>
                    <div class=""><span class="fw-bold">Address </span> 
                        <span class="fw-bold text-success mx-1">Banha-Belissimo</span>
                        <span class="fw-bold">.</span>
                    </div>
                    <!-- <div class=""><span class="fw-bold">Services Required </span> 
                        <span class="fw-bold text-success mx-1">Banha-Belissimo</span>
                    </div> -->
                
                </div> 
                <!-- / buttons///////////// -->
                <div  v-show="hideDownAnalysis" class="row">
                    <div  class="col-12">
                        <button @click="showPendedAnalysis" class="btn gradient btn-pill  text-white w-100">
                            <i class=" pi pi-chevron-down"></i>  
                        </button>
                    </div>
                        
                </div>
                <!-- /////////////////////// -->
                <div  v-show="showDetailsAnalysis" class="content-analysis my-2">
                    <div class="col-12">
                            <Divider></Divider>
                    </div>
                    <div class="d-flex justify-content-start align-items-center">
                        <div class="mx-2">
                            <h5 class="mb-0" for="">Test name</h5>
                        </div>
                        <div class="mx-3">
                            <span class="gradient custom-rounded px-4" for="">CBC</span>
                        </div>
                        
                    </div>
                    <div class="col-12">
                            <Divider></Divider>
                    </div>
                    <div class="row">
                    
                        <div class="col-md-6  col-lg-6  col-xl-3">
                            <div class="form-group subtest">
                                <label class="form-label">{{$t('otc.subtest.label')}}</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon "
                                    :class="{'p-invalid': $v.rowToAdd.subtest.$error}">
                                        <i class="pi pi-tag"></i>
                                    </span>
                                    <InputText 
                                        v-model="rowToAdd.subtest"
                                        type="text" 
                                        class="form-control" 
                                        :class="{'p-invalid': $v.rowToAdd.subtest.$error}"
                                        :placeholder="$t('otc.subtest.placeholder')"
                                    
                                    />

                                </div>
                                <small class="p-invalid" v-if="$v.rowToAdd.subtest.$error &&! $v.rowToAdd.subtest.required">
                                                {{requiredError($t('otc.subtest.label'))}}
                                </small>
                            </div>
                        </div> 

                        <div class="col-md-6  col-lg-6  col-xl-3">
                            <div class="form-group result">
                                <label class="form-label">{{$t('otc.result.label')}}</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon "
                                    :class="{'p-invalid': $v.rowToAdd.result.$error}">
                                        <i class="pi pi-tag"></i>
                                    </span>
                                    <InputText 
                                        v-model="rowToAdd.result"
                                        type="number" 
                                        class="form-control" 
                                        :class="{'p-invalid': $v.rowToAdd.result.$error}"
                                        :placeholder="$t('otc.result.placeholder')"
                                    
                                    />

                                </div>
                                <small class="p-invalid" v-if="$v.rowToAdd.result.$error &&! $v.rowToAdd.result.required">
                                     {{requiredError($t('otc.result.label'))}}
                                </small>
                            </div>
                        </div> 
                        <!-- //////////////dropdown///////////////////////  -->
                        <div class="col-md-6  col-lg-6  col-xl-3">
                            <div class="form-group">
                                <label for="" class="form-label">{{$t('otc.reference.label')}}</label>
                                <Dropdown 
                                v-model="rowToAdd.reference"
                                :options="referenceOptions" 
                                optionLabel="value" 
                                :placeholder="$t('otc.reference.placeholder')" 
                                />
                            </div>
                        </div>

                        <div class="col-md-6  col-lg-6  col-xl-3">
                            <div class="form-group unit">
                                <label class="form-label">{{$t('otc.unit.label')}}</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon "
                                    :class="{'p-invalid': $v.rowToAdd.unit.$error}">
                                        <i class="pi pi-tag"></i>
                                    </span>
                                    <InputText 
                                        v-model="rowToAdd.unit"
                                        type="number" 
                                        class="form-control" 
                                        :class="{'p-invalid': $v.rowToAdd.unit.$error}"
                                        :placeholder="$t('otc.unit.placeholdereValue')"
                                    
                                    />

                                </div>
                                <small class="p-invalid" v-if="$v.rowToAdd.unit.$error &&! $v.rowToAdd.unit.required">
                                                {{requiredError($t('otc.unit.label'))}}
                                </small>
                            </div>
                        </div> 
                        <div class="col-md-6  col-lg-6  col-xl-3">
                            <div class="form-group comment">
                                <label class="form-label">{{$t('otc.comment.label')}}</label>
                                <div class="p-inputgroup">
                                    <span class="p-inputgroup-addon "
                                    :class="{'p-invalid': $v.rowToAdd.comment.$error}">
                                        <i class="pi pi-tag"></i>
                                    </span>
                                    <InputText 
                                        v-model="rowToAdd.comment"
                                        type="number" 
                                        class="form-control" 
                                        :class="{'p-invalid': $v.rowToAdd.comment.$error}"
                                        :placeholder="$t('otc.comment.placeholder')"
                                    
                                    />

                                </div>
                                <small class="p-invalid" v-if="$v.rowToAdd.comment.$error &&! $v.rowToAdd.comment.required">
                                                {{requiredError($t('otc.comment.label'))}}
                                </small>
                            </div>
                        </div> 
                        <div  class="col-md-3">
                                <!-- <button  @click="addRow" class="btn btn-success-gradient btn-pill  btn-pill w-lg my-2 my-sm-0 w-100">
                                    <i class="fa fa-plus fa-md"></i> {{$t('perepation.add')}} 
                                </button>  -->
                                <AddButton @add="addRow"></AddButton>
                            </div>
                    </div>
                <!-- /////////////////////buttons pended///////////////// -->    
                <div  v-show="hideUpAnalysis" class="row">
                    <div  class="col-12 " >
                        <button @click="hidePendedAnalysis" class="btn gradient btn-pill text-white w-100">
                            <i class=" pi pi-chevron-up"></i>  
                        </button>
                    </div>
                        
                </div>
                </div>
            </Base>
        </div>
    <!--*************End Requests********************-->
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>
<script>
// import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue"
import Divider from "@/components/global/utilities/Divider.vue"
import cashpointOption from '@/mixins/pharmacy/cashpoint/cashpointOption'
// import ResetButton from "@/components/global/utilities/ResetButton.vue";
// import CustomInpSearGroup from "@/components/pharmacy/cashpoint/custom/CustomInpSearGroup.vue"
// import EditButton from "@/components/global/utilities/EditButton.vue"
// import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
/////////////////////////////
// import EditDialog from "@/components/global/utilities/EditDialog.vue"
// import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import {cloneDeep} from 'lodash';
import {notContainsHtmlTags} from "@/validation/customValidators";
import
   {  required, 
    minLength,
    maxLength,
    
   } from "vuelidate/lib/validators";
import 
  {   htmlTagsError,
      inputError,
      numericError,
      maxLengthError,
      maxRecordsError,
      requiredError,
      maxValueError,
      minValueError,
      minLengthError,
  } from '@/validation/errors'
  //////////////////////////////
import { mapGetters } from "vuex";
 export default {
    mixins:[cashpointOption],
    name:"Requests",
    components: {
      Base,
      AddButton,
      Divider,
    //   CustomInputGroup,
    //   ResetButton,
    //   CustomInpSearGroup,
    //   EditButton,
    //   DeleteButton,
    //   EditDialog,
    //   DeleteDialog,


    },
    data() {
      return {
    
        indexToEdit:null,
        displayEditDialog: false,
        indexToDelete:null,
        displayDeleteDialog: false,
        ///////////////////
        showDetailsAnalysis:false,
        hideDownAnalysis:true,
        hideUpAnalysis:true,
        hideDataAnalysis:true,
        //////////////////////
        showDetailsScanning:false,
        hideDownScanning:true,
        hideUpScanning:true,
        hideDataScanning:true,
        // hideDataRequests:true,Scanning
        note:'',
        ///////////////////

        rowToAdd:{
              drugName:"",
              price:"",
              sample:"",
              discount:{
                  selection:"",
                  value:'',
              },
              /////////////////
              subtest:"",
              unit:"",
              result:"",
              reference:"",
              comment:"",

                    
            },
            rowToEdit:{
              drugName:"",
              price:"",
              sample:"",
              discount:{
                  selection:"",
                  value:'',
              },
             subtest:"",
              unit:"",
              result:"",
              reference:"",
              comment:""
           

                    
            },
      };
    },
    validations:{
        rowToAdd:{
            drugName:{
                required,
                validator: (value) => {
                    if(typeof value == 'object' || value == null || value == '')
                    return true;
                    else {
                        return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                    }
                },
            }, 
            price:{
                    required,
                },
            sample:{
                required,
            },
            subtest:{
                required,
            },
            
            unit:{
                required,
            },
        
            result:{
                required,
            },
        
            comment:{
                required,
            }
    

        },
        rowToEdit:{
            drugName:{
                required,
                validator: (value) => {
                    if(typeof value == 'object' || value == null || value == '')
                    return true;
                    else {
                        return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                    }
                },
            }, 
            price:{
                    required,
                },
            sample:{
               required,
            },
            subtest:{
                required,
            },
            
            unit:{
                required,
            },
        
            result:{
                required,
            },
        
            comment:{
                required,
            }
        

        },
        note:{
            minLength:minLength(4),
            maxLength:maxLength(256)
        },
    },
    computed: { 
      ...mapGetters("labs", ["getSelectedNumber","getSelectedTab","getActiveLab"]),
        selectedNum: {
            get() {
                return this.getSelectedNumber;
            },
            set(value) {
                this.$store.dispatch("labs/setSelectedNumber", value);
            },
        },
        selectedTab: {
            get() {
                return this.getSelectedTab;
            },
            set(value) {
                this.$store.dispatch("labs/setSelectedTab", value);
            },
        },
        activeLab: {
            get() {
                return this.getActiveLab;
            },
            set(value) {
                this.$store.dispatch("labs/setActiveLab", value);
            },
        },

      },
    
    methods:{
        htmlTagsError,
        requiredError,
        inputError,
        numericError,
        maxValueError,
        maxRecordsError,
        minValueError,
        maxLengthError,
        minLengthError,
        //////////////Analysis////////
        showPendedAnalysis(){
         this.showDetailsAnalysis = true ;
         this.hideDownAnalysis = false;
         this.hideUpAnalysis = true;

        },
        hidePendedAnalysis(){
            this.showDetailsAnalysis = false ;
            this.hideUpAnalysis = false;
            this.hideDownAnalysis = true;
        },
        deleteDataAnalysis(){
          this.hideDataAnalysis = false;
        },
        /////////////Scanning/////////////////////
        showDoneScanning(){
         this.showDetailsScanning = true ;
         this.hideDownScanning = false;
         this.hideUpScanning = true;

        },
        hideDoneScanning(){
            this.showDetailsScanning = false ;
            this.hideUpScanning = false;
            this.hideDownScanning = true;
        },
        deleteDoneScanning(){
          this.hideDataScanning = false;
        },
        //////////////////////
      addName(){
        console.log("add Name")
      },
      reset(){
          this.resetForm();
      },
      //////////////////////////
      resetForm(){
        this.rowToAdd={
            drugName:"",
            price:"",
            discount:{
                selection:"",
                value:'',
            },    
        };
        this.$v.rowToAdd.$reset();
      },
      ///////////////////////
      addRow(){
        console.log("addRow");
          this.$v.rowToAdd.$touch();
          if(!this.$v.rowToAdd.$invalid ){
              let cashpoint = cloneDeep(this.rowToAdd );
              this.activeLab.preparation.push(cashpoint);
              this.resetForm();
          }
      },
        ///////////////////////////
        openEditDialog(val,index) { 
          this.displayEditDialog = true;
          this.indexToEdit = index;
          this.rowToEdit = cloneDeep(val);
        },
        closeEditDialog() {
        this.rowToEdit= {}
        this.indexToEdit = null;
        this.displayEditDialog = false;
        },
        editRow(){
            console.log('Edit Row Clicked');
            this.$v.rowToEdit.$touch();
            if(! this.$v.rowToEdit.$invalid ){
                let cashpoint = cloneDeep(this.rowToEdit );
                this.activeLab.preparation.splice(this.indexToEdit,1,cashpoint);
                this.closeEditDialog();
            }
    
        },
        ////////////////////////////
        openDeleteDialog(index) {
            this.displayDeleteDialog = true;
            this.indexToDelete =index;
        },
        closeDeleteDialog() {
            this.displayDeleteDialog = false;
            this.indexToDelete =null;
        },
        deleteRow(){  
            this.activeLab.preparation.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },

    }
  };
</script>
<style lang="scss">
.custom-gradient {
    background-image: url("@/assets/Rectangle.svg");
    background-position: center;
    background-repeat: no-repeat;
}
.heading-gradient{
    background: linear-gradient(0.25turn, #fff, rgba($primary,0.25),#fff);
}
.custom-span-gradient{
    background-image: url("@/assets/span.svg");
    background-position: center;
    background-repeat: no-repeat;
}
.custom-rounded{
    border-radius:20px !important;
}
.gradient{
    background-image: linear-gradient(90deg, rgba($primary,0.8) 0%, white 100%);
    // background-image: linear-gradient(90deg, #56C596 0%, white 100%);
}

</style>