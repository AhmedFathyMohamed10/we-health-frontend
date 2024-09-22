<template>
  <div class="pregFollowUp">
    <Base>    
      <div class="row">
        <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('pregFollowUp.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>
        <div class="row">
          <!-- pregNo -->
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('pregFollowUp.pregNo.label')}}</label>
                <input 
                  type="number" 
                  v-model="rowToAdd.pregNo"
                  :placeholder="$t('pregFollowUp.pregNo.placeholder')"
                  class="form-control" 
                  :class="{'is-invalid':$v.rowToAdd.pregNo.$error}"
                  >
                  <div v-if="$v.rowToAdd.pregNo.$error && !$v.rowToAdd.pregNo.required" class="invalid-feedback">
                    {{requiredError($t('pregFollowUp.pregNo.label'))}}
                  </div>
                  <div v-else-if="$v.rowToAdd.pregNo.$error && !$v.rowToAdd.pregNo.numeric" class="invalid-feedback">
                    {{numericError($t('pregFollowUp.pregNo.label'))}}
                  </div>
                  <div v-else-if="$v.rowToAdd.pregNo.$error && !$v.rowToAdd.pregNo.maxValue" class="invalid-feedback">
                    {{maxValueError($t('pregFollowUp.pregNo.label'),$v.rowToAdd.pregNo.$params.maxValue.max)}}
                  </div>
              </div>
          </div>
          <!-- fetusesNo -->
          <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t('pregFollowUp.fetusesNo.label')}}</label>
              <input 
                  type="number" 
                  v-model="rowToAdd.fetusesNo"
                  :placeholder="$t('pregFollowUp.fetusesNo.placeholder')"
                  class="form-control" 
                  :class="{'is-invalid':$v.rowToAdd.fetusesNo.$invalid && $v.rowToAdd.fetusesNo.$anyDirty &&
                    $v.rowToAdd.fetusesNo.$anyError
                  }"
                >
                <div v-if="$v.rowToAdd.fetusesNo.$error && !$v.rowToAdd.fetusesNo.numeric" class="invalid-feedback">
                  {{numericError($t('pregFollowUp.fetusesNo.label'))}}
                </div>
                <div v-else-if="$v.rowToAdd.fetusesNo.$error && !$v.rowToAdd.fetusesNo.maxValue" class="invalid-feedback">
                    {{maxValueError($t('pregFollowUp.fetusesNo.label'),$v.rowToAdd.fetusesNo.$params.maxValue.max)}}
                  </div>                
              </div>
          </div>
          <!-- Blood Group -->
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('pregFollowUp.bloodGroup.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.bloodGroup"
                  :options="bloodGroupOptions" 
                  optionLabel="value" 
                  
                  :placeholder="$t('pregFollowUp.bloodGroup.placeholder')"
                />
              </div>
          </div>
          <!-- RH -->
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('pregFollowUp.rh.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.rh"
                  :options="rhOptions" 
                  optionLabel="value" 
                  
                  :placeholder="$t('pregFollowUp.rh.placeholder')"
                />
              </div>
          </div>
          <!-- Previous Labors -->
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('pregFollowUp.previousLabors.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.previousLabors"
                  :options="previousLaborsOptions" 
                  optionLabel="value" 
                  
                  :placeholder="$t('pregFollowUp.previousLabors.placeholder')"
                />
              </div>
          </div>
          <!-- Sex -->
          <div class="col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{$t('pregFollowUp.sex.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.sex"
                  :options="sexOptions" 
                  optionLabel="value" 
                  
                  :placeholder="$t('pregFollowUp.sex.placeholder')"
                />
              </div>
          </div>
          <!-- addRow btn -->
          <div class="col-md-4">
            <AddButton @add="addRow"></AddButton>
          </div>
        </div>
    </Base>
    <!-- Table -->
    <div class="table-wrapper my-2" v-if="pregFollowUp.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('pregFollowUp.pregNo.label')}}</th>
                            <th scope="col">{{$t('pregFollowUp.fetusesNo.label')}}</th>
                            <th scope="col">{{$t('pregFollowUp.bloodGroup.label')}}</th>
                            <th scope="col">{{$t('pregFollowUp.rh.label')}}</th>
                            <th scope="col">{{$t('pregFollowUp.previousLabors.label')}}</th>
                            <th scope="col">{{$t('pregFollowUp.sex.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in pregFollowUp" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.pregNo}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.fetusesNo}}</span>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.bloodGroup">
                                  {{val.bloodGroup.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                              <div v-if="val.rh">
                                {{val.rh.value}}
                              </div>
                            </td>
                            <td class="align-middle">
                              <div v-if="val.previousLabors">
                                {{val.previousLabors.value}}
                              </div>
                            </td>
                            <td class="align-middle">
                              <div v-if="val.sex">
                                {{val.sex.value}}
                              </div>
                            </td>
                            <td class="align-middle">
                                <div class="d-flex justify-content-center align-items-center">
                                  <EditButton class="me-2" @edit="openEditDialog(val,index)"></EditButton>
                                  <DeleteButton @delete="openDeleteDialog(index)"></DeleteButton>
                                </div>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>    
      </Base>
    </div>
    <!-- Edit Modal -->
    <EditDialog :header="$t('pregFollowUp.header')" :display="displayEditModal" @cancel="closeEditDialog" @close="closeEditDialog" @save="editRow">    
      <div class="row">
        <!-- pregNo -->
        <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t('pregFollowUp.pregNo.label')}}</label>
              <input 
                type="number" 
                v-model="rowToEdit.pregNo"
                :placeholder="$t('pregFollowUp.pregNo.placeholder')"
                class="form-control" 
                :class="{'is-invalid':$v.rowToEdit.pregNo.$error}"
                >
                <div v-if="$v.rowToAdd.pregNo.$error && !$v.rowToAdd.pregNo.required" class="invalid-feedback">
                    {{requiredError($t('pregFollowUp.pregNo.label'))}}
                </div>
                <div v-if="$v.rowToEdit.pregNo.$error && !$v.rowToEdit.pregNo.numeric" class="invalid-feedback">
                        {{numericError($t('pregFollowUp.pregNo.label'))}}
                </div>
                <div v-else-if="$v.rowToEdit.pregNo.$error && !$v.rowToEdit.pregNo.maxValue" class="invalid-feedback">
                    {{maxValueError($t('pregFollowUp.pregNo.label'),$v.rowToEdit.pregNo.$params.maxValue.max)}}
                </div>
            </div>
        </div>
        <!-- fetusesNo -->
        <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t('pregFollowUp.fetusesNo.label')}}</label>
              <input 
                type="number" 
                v-model="rowToEdit.fetusesNo"
                :placeholder="$t('pregFollowUp.fetusesNo.placeholder')"
                class="form-control" 
                :class="{'is-invalid':$v.rowToEdit.fetusesNo.$error}"
              >
              <div v-if="$v.rowToEdit.fetusesNo.$error && !$v.rowToEdit.fetusesNo.numeric" class="invalid-feedback">
                {{numericError($t('pregFollowUp.fetusesNo.label'))}}
              </div>
              <div v-else-if="$v.rowToEdit.pregNo.$error && !$v.rowToEdit.pregNo.maxValue" class="invalid-feedback">
                {{maxValueError($t('pregFollowUp.pregNo.label'),$v.rowToEdit.pregNo.$params.maxValue.max)}}
              </div>
            </div>
        </div>
        <!-- Blood Group -->
        <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t('pregFollowUp.bloodGroup.label')}}</label>
              <Dropdown 
                v-model="rowToEdit.bloodGroup"
                :options="bloodGroupOptions" 
                optionLabel="value"
                
                :placeholder="$t('pregFollowUp.bloodGroup.placeholder')"
              />
            </div>
        </div>
        <!-- RH -->
        <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t('pregFollowUp.rh.label')}}</label>
              <Dropdown 
                v-model="rowToEdit.rh"
                :options="rhOptions" 
                optionLabel="value" 
                
                :placeholder="$t('pregFollowUp.rh.placeholder')"
              />
            </div>
        </div>
        <!-- Previous Labors -->
        <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t('pregFollowUp.previousLabors.label')}}</label>
              <Dropdown 
                v-model="rowToEdit.previousLabors"
                :options="previousLaborsOptions" 
                optionLabel="value" 
                
                :placeholder="$t('pregFollowUp.previousLabors.placeholder')"
              />
            </div>
        </div>
        <!-- Sex -->
        <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{$t('pregFollowUp.sex.label')}}</label>
              <Dropdown 
                v-model="rowToEdit.sex"
                :options="sexOptions" 
                optionLabel="value" 
                
                :placeholder="$t('pregFollowUp.sex.placeholder')"
              />
            </div>
        </div>
      </div>
    </EditDialog>
    <!-- Delete -->
    <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>  
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/gynecology/obstetric.json"></i18n>
<script>
import { mapGetters,mapActions } from "vuex";

// ////////////////////////////////////////////////////////
import {numericError,requiredError,maxValueError} from '@/validation/errors'
import {numeric,required,maxValue} from "vuelidate/lib/validators";
import gynecologyOptions from '@/mixins/mr/gynecology/options/gynecologyOptions'
// //////////////////////////////////////////////////////////
import Base from "@/components/global/utilities/Base.vue"
import ResetButton from "@/components/global/utilities/ResetButton.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"    
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"   

/////////////////////////////////////////////////////////////
export default {
  mixins:[gynecologyOptions],
  props: {
    v: {
      type: Object,
      required: true,
    },
    check_error: {
      type: Object,
    },
    serializer_error: {
      type: Object,
    },
  },
  components: {
    Base,
    ResetButton,
    AddButton,
    EditButton,
    DeleteButton,
    EditDialog,
    DeleteDialog,  
  },
  data(){
    return {
      rowToAdd:{
        pregNo: null,
        fetusesNo: null,
        bloodGroup: null,
        rh: null,
        previousLabors: null,
        sex:null,
      },
      rowToEdit:{

      },
      indexToEdit:null,
      displayEditModal: false,
      indexToDelete:null,
      displayDeleteModal: false,
    }
  },
  validations:{
    rowToAdd:{
      pregNo:{
        required,
        maxValue:maxValue(100),
        numeric
      },
      fetusesNo:{
        numeric,
        maxValue:maxValue(100),
      },
      bloodGroup: {},
      rh: {},
      previousLabors: {},
      sex: {}
    },
    rowToEdit:{
      pregNo:{
        required,
        maxValue:maxValue(100),
        numeric
      },
      fetusesNo:{
        numeric,
        maxValue:maxValue(100),
      },
      bloodGroup: {},
      rh: {},
      previousLabors: {},
      sex: {}
    },
  },
  computed: {
    ...mapGetters('detailsGynecology/gynecology',{
        'getPregFollowUp':'getPregFollowUp'
    }),
    pregFollowUp:{
      get() {
          return this.getPregFollowUp;
      },
      set(value) {
          this.setPregFollowUp(value);
      }
    },
  },
  methods: {
        numericError,
        requiredError,    
        maxValueError,    
        ...mapActions("detailsGynecology/gynecology", [
            "setPregFollowUp",
        ]),
        resetForm(){
          this.rowToAdd = {
            pregNo: null,
            fetusesNo: null,
            bloodGroup: null,
            rh: null,
            previousLabors: null,
            sex:null,
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.pregFollowUp=[]
        }, 
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.pregFollowUp.push({...this.rowToAdd});
            this.resetForm();
          }
        },
        /////////////////////
        openEditDialog(val,index) {
          this.displayEditModal = true;
          this.indexToEdit = index;
          this.rowToEdit ={...val}
        },
        closeEditDialog() {
          this.rowToEdit= {}
          this.indexToEdit = null;
          this.$v.rowToEdit.$reset()
          this.displayEditModal = false;
        },
        editRow(){
          this.v.$touch();
          this.$v.rowToEdit.$touch();
          if(!(this.v.$invalid || this.$v.rowToEdit.$invalid )){
            // this.pregFollowUp[this.indexToEdit]={...this.rowToEdit};
            this.pregFollowUp.splice(this.indexToEdit,1,{...this.rowToEdit});
            this.closeEditDialog();
          }
        },
        ////////////////////////
        openDeleteDialog(index) {
          this.displayDeleteModal = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteModal = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.pregFollowUp.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script>
<style scoped>
  .is-invalid{
    border: 1px sloid red;
  }
</style>
