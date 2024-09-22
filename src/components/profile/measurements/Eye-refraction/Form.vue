<template>
  <div class="pulse-rate-form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        @save="saveForm" 
        :isLoading="isLoading"
        :header="header"
      >
        <slot></slot>
        <div v-if="error">
          <div class="errors" v-if="(typeof error ==='object')">
            <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
              <span v-if="(typeof value ==='string')">{{ value }}</span>
              <span v-else>{{ value[0] }}</span>
            </Message>
          </div>
        </div>
       <div class="row">

        <div class="svg-wrapper">
            <img src="@/assets/profile/measurements/eyes.svg" alt="" class="w-100">
        </div>
       <div class="row">
        <div class="eyes-labels w-100 d-flex justify-content-between">
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('form.od.label')}}</h3></div>
            <div class="label-wrapper flex-grow-1 d-flex justify-content-center"><h3>{{$t('form.os.label')}}</h3></div>
        </div>
       </div>
        <Divider></Divider>
           <!-- /////////////Doctors-name///////////////////////// -->
        <div class="row">
          <div class="col-lg-7 col-md-12"> 
              <div class="d-flex justify-content-center align-items-center my-2 ">
                <label class="form-label mx-2">{{$t('form.doctors.title')}}</label>
                <div class="d-flex justify-content-start  align-items-start text-success  custom-border " >
                  <p class="m-auto px-2 ">{{$t('form.doctors.name')}}</p> 
                </div>
              </div>
          </div>
          <div class="col-lg-5 col-md-12">
            <div class="d-flex justify-content-center align-items-center  my-2 "> 
              <label class="form-label mx-2">{{$t('form.doctors.referal')}}</label> 
              <InputText 
              type="text" name="" id="" 
              :placeholder="$t('form.doctors.nameCenter')"/> 
          </div>
          </div> 
      
        </div>
   
        <Divider></Divider>
        <!-- ///////////////////////// -->
        <div class="row">
            <div class="col-md-8 ">
                <!-- Input Switch -->
                <div class="row">
                  <div class="col-md-12">
                      <div class="d-flex align-items-center my-5">
                    <span class="me-2">{{ $t('measurementsLabels.near') }}</span>
                    <InputSwitch v-model="switchChecked" class="me-2" />
                    <span class="me-8">{{ $t('measurementsLabels.distant') }}</span>
                    <div class="d-flex align-items-center justify-content-center ">
                        <RadioButton inputId="simple" name="simple" value="simple" v-model="toggleSimpleOrAdvanced" />
                        <span class="ms-2 me-2"> {{ $t('measurementsLabels.simple') }}</span>
                        <span class="ms-2 me-2"></span>
                        <RadioButton inputId="advanced" name="advanced" value="advanced" v-model="toggleSimpleOrAdvanced" />
                        <span class="ms-2"> {{ $t('measurementsLabels.advanced') }}</span>
                    </div>
                    </div>
                  </div>
                  <div class="col-md-12">

                  </div>
                </div>
              
                <!-- Near -->
                <!-- Od Row -->
                <div class="row" v-if="!switchChecked">

                    <h4>{{ $t('measurementsLabels.od') }}</h4>
                    <!-- Spherical -->
                    <div class="col-md-6 col-xxl-3"> 
                        <div class="form-group">
                            <!-- <Dropdown 
                            v-model="form.near.od.spherical" 
                            :options="sphericalOptions" 
                            optionLabel="value" 
                            optionValue="value" 
                            placeholder="Select" 
                            /> -->
                           
                            <CustomDropMenu 
                                v-model="form.near.od.spherical"
                                :label="$t('measurementsLabels.spherical')"
                                :options="sphericalOptions"
                                :excludeColumn="0"
                                :invalid=" ($v.form.near.od.spherical.$error)"   
                            > 
                            <div 
                                v-if="$v.form.near.od.spherical.$error && !$v.form.near.od.spherical.required"   class="invalid-feedback">
                                {{requiredError($t('measurementsLabels.spherical'))}}
                            </div>
                            <!-- <div v-else-if="! v.near.od.spherical.minLength &&  v.near.od.spherical.$error" class="invalid-feedback">
                                    {{minLengthError($t('measurementsLabels.spherical'), v.near.od.spherical.$params.minLength.min)}}
                            </div>
                            <div v-else-if="! v.near.od.spherical.maxLength &&  v.near.od.spherical.$error" class="invalid-feedback">
                                    {{maxLengthError($t('measurementsLabels.spherical'), v.near.od.spherical.$params.maxLength.max)}}
                            </div>                  
                                 -->
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Cylindrical -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Cylindrical -->
                            <!-- <Dropdown 
                            v-model="form.near.od.cylindrical" 
                            :options="sphericalOptions" 
                            optionLabel="value" 
                            optionValue="value" 
                            placeholder="Select" 
                            /> -->
                            <CustomDropMenu 
                                v-model="form.near.od.cylindrical"
                                :label="$t('measurementsLabels.cylindrical')"
                                :options="cylindricalOptions"
                                :excludeColumn="0"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Axis -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Axis -->
                            <!-- <Dropdown 
                            v-model="form.near.od.axis" 
                            :options="sphericalOptions" 
                            optionLabel="value" 
                            optionValue="value" 
                            placeholder="Select" 
                            /> -->
                            <CustomDropMenu 
                                v-model="form.near.od.axis"
                                :label="$t('measurementsLabels.axis')"
                                :options="axisOptions"
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Add -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Add -->
                    
                            <CustomDropMenu 
                                v-model="form.near.od.add"
                                :label="$t('measurementsLabels.add')"
                                :options="addOptions"
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Prism -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                        <!-- <label for=""> {{"$t('measurementsLabels.prism')"}}</label>
                            <Dropdown 
                            v-model="form.near.od.prism" 
                            :options="sphericalOptions" 
                            optionLabel="value" 
                            optionValue="value" 
                            placeholder="Select" 
                            /> -->
                            <CustomDropMenu 
                                v-model="form.near.od.prism"
                                :label="$t('measurementsLabels.prism')"
                                :options="prismOptions"
        
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- NVA -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                            <!-- NVA -->
                            <CustomDropMenu 
                                v-model="form.near.od.nva"
                                :label="$t('measurementsLabels.nva')"
                                :options="nvaOptions"
                            
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                </div>
                <!-- Copy Buttons -->
                <div class="row mt-4" v-if="!switchChecked">
                    <div class="col-12" >
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="form-group mb-0 ">
                                <button class="btn btn-icon rounded-circle btn-success me-3" @click="copyToOdNear">
                                    <i class="fa fa-angle-up fa-md"></i> 
                                </button>
                            </div>
                            <div class="form-group mb-0">
                                <button class="btn btn-icon rounded-circle btn-success" @click="copyToOsNear">
                                    <i class="fa fa-angle-down fa-md"></i>
                                </button>
                            </div>
                        </div>
                    </div>                    
                </div>    
                <!-- Os Row -->
                <div class="row" v-if="!switchChecked">
                    <h4>{{ $t('measurementsLabels.os') }}</h4>
                    <!-- Spherical -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <CustomDropMenu 
                                v-model="form.near.os.spherical"
                                :label="$t('measurementsLabels.spherical')"
                                :options="sphericalOptions"
                                :excludeColumn="0"
                            
                            >   
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Cylindrical -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Cylindrical -->
                            <CustomDropMenu 
                                v-model="form.near.os.cylindrical"
                                :label="$t('measurementsLabels.cylindrical')"
                                :options="cylindricalOptions"
                                :excludeColumn="0"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Axis -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Axis -->
                            <CustomDropMenu 
                                v-model="form.near.os.axis"
                                :label="$t('measurementsLabels.axis')"
                                :options="axisOptions"    
                            >                    
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Add -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Add -->
                            <CustomDropMenu 
                                v-model="form.near.os.add"
                                :label="$t('measurementsLabels.add')"
                                :options="addOptions"
                            
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Prism -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                            <!-- Prism -->
                            <CustomDropMenu 
                                v-model="form.near.os.prism"
                                :label="$t('measurementsLabels.prism')"
                                :options="prismOptions"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- NVA -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                            <!-- NVA -->
                            <CustomDropMenu 
                                v-model="form.near.os.nva"
                                :label="$t('measurementsLabels.nva')"
                                :options="nvaOptions"
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                </div>
                <!-- Ou Row -->
                <div class="row" v-if="!switchChecked">
                    <h4 class="mt-6">{{ $t('measurementsLabels.ou') }}</h4>
                    <!-- Dva -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Dva -->
                            <CustomDropMenu 
                                v-model="form.near.ou.dva"
                                :label="$t('measurementsLabels.dva')"
                                :options="dvaOptions"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- NVA -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- NVA -->
                            <CustomDropMenu 
                                v-model="form.near.ou.nva"
                                :label="$t('measurementsLabels.nva')"
                                :options="nvaOptions"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                </div>
                <!-- Distant -->
                <!-- Od Row -->
                <div class="row" v-if="switchChecked">
                    <h4>{{ $t('measurementsLabels.od') }}</h4>
                    <!-- Spherical -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <CustomDropMenu 
                                v-model="form.distant.od.spherical"
                                :label="$t('measurementsLabels.spherical')"
                                :options="sphericalOptions"
                                :excludeColumn="0"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Cylindrical -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Cylindrical -->
                            <CustomDropMenu 
                                v-model="form.distant.od.cylindrical"
                                :label="$t('measurementsLabels.cylindrical')"
                                :options="cylindricalOptions"
                                :excludeColumn="0"
                        
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Axis -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Axis -->
                            <CustomDropMenu 
                                v-model="form.distant.od.axis"
                                :label="$t('measurementsLabels.axis')"
                                :options="axisOptions"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Add -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Add -->
                            <CustomDropMenu 
                                v-model="form.distant.od.add"
                                :label="$t('measurementsLabels.add')"
                                :options="addOptions"
                                
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Prism -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                            <!-- Prism -->
                            <CustomDropMenu 
                                v-model="form.distant.od.prism"
                                :label="$t('measurementsLabels.prism')"
                                :options="prismOptions"
                                
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Dva -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                            <!-- Dva -->
                            <CustomDropMenu 
                                v-model="form.distant.od.dva"
                                :label="$t('measurementsLabels.dva')"
                                :options="dvaOptions"
                            
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                </div>
                <!-- Copy Buttons -->
                <div class="row mt-4" v-if="switchChecked">
                    <div class="col-12" >
                        <div class="d-flex justify-content-center align-items-center">
                            <div class="form-group mb-0 ">
                                <button class="btn btn-icon rounded-circle btn-success me-2" @click="copyToOdDistant">
                                    <i class="fa fa-angle-up fa-md"></i> 
                                </button>
                            </div>
                            <div class="form-group mb-0">
                                <button class="btn btn-icon rounded-circle btn-success" @click="copyToOsDistant">
                                    <i class="fa fa-angle-down fa-md"></i>
                                </button>
                            </div>
                        </div>
                    </div>                    
                </div> 
                <!-- Os Row -->
                <div class="row" v-if="switchChecked">
                    <h4>{{ $t('measurementsLabels.os') }}</h4>
                    <!-- Spherical -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <CustomDropMenu 
                                v-model="form.distant.os.spherical"
                                :label="$t('measurementsLabels.spherical')"
                                :options="sphericalOptions"
                                :excludeColumn="0"
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Cylindrical -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Cylindrical -->
                            <CustomDropMenu 
                                v-model="form.distant.os.cylindrical"
                                :label="$t('measurementsLabels.cylindrical')"
                                :options="cylindricalOptions"
                                :excludeColumn="0"
                            
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Axis -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Axis -->
                            <CustomDropMenu 
                                v-model="form.distant.os.axis"
                                :label="$t('measurementsLabels.axis')"
                                :options="axisOptions"
                            
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Add -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Add -->
                            <CustomDropMenu 
                                v-model="form.distant.os.add"
                                :label="$t('measurementsLabels.add')"
                                :options="addOptions"
                            
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Prism -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                            <!-- Prism -->
                            <CustomDropMenu 
                                v-model="form.distant.os.prism"
                                :label="$t('measurementsLabels.prism')"
                                :options="prismOptions"
                                
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- Dva -->
                    <div class="col-md-6 col-xxl-3" v-if="toggleSimpleOrAdvanced == 'advanced'">
                        <div class="form-group">
                            <!-- Dva -->
                            <CustomDropMenu 
                                v-model="form.distant.os.dva"
                                :label="$t('measurementsLabels.dva')"
                                :options="dvaOptions"
                                
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                </div>
                <!-- Ou Row -->
                <div class="row" v-if="switchChecked">
                    <h4 class="mt-6">{{ $t('measurementsLabels.ou') }}</h4>
                    <!-- Dva -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- Dva -->
                            <CustomDropMenu 
                                v-model="form.distant.ou.dva"
                                :label="$t('measurementsLabels.dva')"
                                :options="dvaOptions"
                                
                            >                    
                                
                            </CustomDropMenu>
                        </div>
                    </div>
                    <!-- NVA -->
                    <div class="col-md-6 col-xxl-3">
                        <div class="form-group">
                            <!-- NVA -->
                            <CustomDropMenu 
                                v-model="form.distant.ou.nva"
                                :label="$t('measurementsLabels.nva')"
                                :options="nvaOptions"
                            
                            >                    
                            
                            </CustomDropMenu>
                        </div>
                    </div>
                </div>

            </div>
            <!-- <div class="col-md-4">
                <Divider :alignment="vertical">
                  
                </Divider> 
                         <Form 
                        :formOptions="formStaticData"
                        v-model="form.uploadeImage" 
                        :v="$v.ophthalmicObject.form"
                        :check_error="check_error.form ? check_error.form : {}"
                        :serializer_error="serializer_error.form ? serializer_error.form : {}" 
                    />
            </div> -->
         </div>
        <!-- //////////////////////////// -->
                <!-- <div class="col-md-12">
                <div class="form-group">
                <label for="" class="form-label">{{$t('form.beats.label')}}</label>
                <input 
                    type="number" 
                    :placeholder="$t('form.beats.placeholder')" 
                    v-model="form.beats"
                    class="form-control" 
                    :class="{'is-invalid':$v.form.beats.$error}"
                >
                <div v-if="$v.form.beats.$error && !$v.form.beats.required " class="invalid-feedback">
                    {{requiredError($t('form.beats.label'))}}
                </div>
                <div v-else-if="$v.form.beats.$error && !$v.form.beats.numeric" class="invalid-feedback">
                    {{numericError($t('form.beats.label'))}}
                </div>
                <div v-else-if="$v.form.beats.$error && !$v.form.beats.maxValue" class="invalid-feedback">
                    {{maxValueError($t('form.beats.label'), $v.form.beats.$params.maxValue.max)}}
                </div>
                </div>
                </div>
            <div class="col-md-12">
                <div class="form-group">
                <label for="" class="form-label">{{$t('form.comment.label')}}</label>
                <input 
                    type="text" 
                    :placeholder="$t('form.comment.placeholder')" 
                    v-model="form.comment"
                    class="form-control" 
                    :class="{'is-invalid':$v.form.comment.$error}"
                >
                <div v-if="$v.form.comment.$error && !$v.form.comment.notContainsHtmlTags" class="invalid-feedback">
                    {{htmlTagsError($t('form.comment.label'))}}
                </div>
                <div v-if="$v.form.comment.$error && !$v.form.comment.maxLength" class="invalid-feedback">
                    {{maxLengthError($t('form.comment.label'), $v.form.comment.$params.maxLength.max)}}
                </div>
                </div>
            </div> -->
        </div>
        <Divider></Divider>
    
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/profile/measurements/EyeRefraction.json"></i18n>
<script>
import EditDialog from '@/components/global/utilities/EditDialog.vue';
import Divider from "@/components/global/utilities/Divider.vue";
import CustomDropMenu from "@/components/global/custom/CustomDropMenu.vue";
// import Form from "@/components/mr/global/Form.vue";
import {htmlTagsError,maxLengthError,requiredError,maxValueError, numericError} from "@/validation/errors";
import {required,} from "vuelidate/lib/validators";
import InputText from 'primevue/inputtext/InputText';
import measurementsOptions from "@/mixins/mr/ophthalmic/options/measurementsOptions"
   
export default {
  name: 'Form',
  mixins:[measurementsOptions],
  props:{
    displayForm:{
      type:Boolean,
      required:true,
      default(){
        return false;
      },
    },
    isLoading:{
      type:Boolean,
      default(){
        return false;
      },
    },
    value:{
      type:Object,
      required:true,
    },
    error:{
      type:Object,
    },
    header:{
      type:String,
    },
  },
  components:{
    EditDialog,
    Divider,
    InputText,
    CustomDropMenu,
},
  data() {
    return {
      form:this.value,
      switchChecked: false,
      toggleSimpleOrAdvanced: 'advanced',
  
    };
  },
  computed:{
   
    age(){
      return 217 ; // 216 month = 18 years 
    },
  },
  watch: {
    value(){
      this.form = this.value;
    },
  },
  validations: {
    form:{
      uploadeImage:'', 
      near: {
          os: {
              spherical: {required},
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
          },
          od: {
              spherical: {required},
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "", 
          },
          ou: {
              dva: "",
              nva: "",
          }
      },
      distant: {
          os: {
              spherical:"",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "",
          },
          od: {
              spherical: "",
              cylindrical: "",
              axis: "",
              prism: "",
              dva: "",
              add: "",
              nva: "", 
          },
          ou: {
              dva: "",
              nva: "",
          }
      },
  
    },
  },
  mounted() {
    
  },

  methods: {
    htmlTagsError,
    maxLengthError,
    requiredError,
    maxValueError,
    numericError,
    ///////////////////////////////
    copyToOdNear(){
                this.form.near.od=JSON.parse(JSON.stringify(this.form.near.os));
    },
    copyToOsNear(){
        this.form.near.os=JSON.parse(JSON.stringify(this.form.near.od));
    },
    copyToOdDistant(){
            this.form.distant.od=JSON.parse(JSON.stringify(this.form.distant.os));
    },
    copyToOsDistant(){
        this.form.distant.os=JSON.parse(JSON.stringify(this.form.distant.od));
    },
    /////////////////////////////
   
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit('save');
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit('cancel');
      this.$v.form.$reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-zindex{
  z-index: 9999;
}
.custom-border{
    border:1px solid #56C596;
    border-radius:2rem;
 }

</style>