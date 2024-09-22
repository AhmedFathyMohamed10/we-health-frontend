<template>
    <div class="cl-habits">
        <Base> 
            <div class="row">
                <div class="col-12 d-flex justify-content-between">
                  <h4>{{$t('clHabits.header')}}</h4>
                  <ResetButton @reset="reset"></ResetButton>            
                </div> 
           </div>   
          <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                <CustomDropdown
                    v-model="rowToAdd.typeReplacement"
                    :label="$t('clHabits.typeReplacement.label')"
                    :placeholder="$t('clHabits.typeReplacement.placeholder')"
                    :options="typeReplacementOptions"
                    :v="$v.rowToAdd.typeReplacement"
                    :inputType="'text'"
                    :invalidSelection="$v.rowToAdd.typeReplacement.selection.$error "
                    :invalidOther=" $v.rowToAdd.typeReplacement.other.$error "
                >
                    <small v-if="$v.rowToAdd.typeReplacement.selection.$error && !$v.rowToAdd.typeReplacement.selection.required" class="p-invalid">
                                    {{requiredError($t('clHabits.typeReplacement.label'))}}
                    </small>
                    <div v-else-if="$v.rowToAdd.typeReplacement.other.$error && !$v.rowToAdd.typeReplacement.other.required" class="invalid-feedback">
                                    {{requiredError($t('clHabits.typeReplacement.label'))}}
                        </div>
                    <div v-else-if="$v.rowToAdd.typeReplacement.other.$error && !$v.rowToAdd.typeReplacement.other.notContainsHtmlTags" class="invalid-feedback">
                                    {{htmlTagsError($t('clHabits.typeReplacement.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.typeReplacement.other.minLength &&  $v.rowToAdd.typeReplacement.other.$error" class="invalid-feedback">
                            {{minLengthError($t('clHabits.typeReplacement.label'), $v.rowToAdd.typeReplacement.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.typeReplacement.other.maxLength &&  $v.rowToAdd.typeReplacement.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('clHabits.typeReplacement.label'), $v.rowToAdd.typeReplacement.other.$params.maxLength.max)}}
                    </div>         

                </CustomDropdown>

                </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <CustomDropdown
                    v-model="rowToAdd.comfort"
                    :label="$t('clHabits.comfort.label')"
                    :placeholder="$t('clHabits.comfort.placeholder')"
                    :options="comfortOptions"
                    :v="$v.rowToAdd.comfort"
                    :inputType="'text'"
                    :invalidSelection="$v.rowToAdd.comfort.selection.$error "
                    :invalidOther="$v.rowToAdd.comfort.other.$error"
   
                >
                  <div v-if="$v.rowToAdd.comfort.other.$error && !$v.rowToAdd.comfort.other.notContainsHtmlTags" class="invalid-feedback">
                                      {{htmlTagsError($t('clHabits.comfort.label'))}}
                  </div>
                  <div v-else-if="! $v.rowToAdd.comfort.other.minLength &&  $v.rowToAdd.comfort.other.$error" class="invalid-feedback">
                              {{minLengthError($t('clHabits.comfort.label'), $v.rowToAdd.comfort.other.$params.minLength.min)}}
                  </div>
                  <div v-else-if="! $v.rowToAdd.comfort.other.maxLength &&  $v.rowToAdd.comfort.other.$error" class="invalid-feedback">
                              {{maxLengthError($t('clHabits.comfort.label'), $v.rowToAdd.comfort.other.$params.maxLength.max)}}
                  </div>         

                </CustomDropdown>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <CustomDropdown
                    v-model="rowToAdd.wearingHabits"
                    :label="$t('clHabits.wearingHabits.label')"
                    :placeholder="$t('clHabits.wearingHabits.placeholder')"
                    :options="wearingHabitsOptions"
                    :v="$v.rowToAdd.wearingHabits"
                    :inputType="'text'"
                    :invalidSelection="$v.rowToAdd.wearingHabits.selection.$error"
                    :invalidOther=" $v.rowToAdd.wearingHabits.other.$error "
                  >
                    <div v-if="$v.rowToAdd.wearingHabits.other.$error && !$v.rowToAdd.wearingHabits.other.notContainsHtmlTags" class="invalid-feedback">
                                        {{htmlTagsError($t('clHabits.wearingHabits.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.wearingHabits.other.minLength &&  $v.rowToAdd.wearingHabits.other.$error" class="invalid-feedback">
                                {{minLengthError($t('clHabits.wearingHabits.label'), $v.rowToAdd.wearingHabits.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.wearingHabits.other.maxLength &&  $v.rowToAdd.wearingHabits.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('clHabits.wearingHabits.label'), $v.rowToAdd.wearingHabits.other.$params.maxLength.max)}}
                    </div>         
                  </CustomDropdown>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <CustomDropdown
                    v-model="rowToAdd.cleaningHabits"
                    :label="$t('clHabits.cleaningHabits.label')"
                    :placeholder="$t('clHabits.cleaningHabits.placeholder')"
                    :options="cleaningHabitsOptions"
                    :v="$v.rowToAdd.cleaningHabits"
                    :inputType="'text'"
                    :invalidSelection="$v.rowToAdd.cleaningHabits.selection.$error  "
                    :invalidOther=" $v.rowToAdd.cleaningHabits.other.$error  "
                    >
                  <div v-if="$v.rowToAdd.cleaningHabits.other.$error && !$v.rowToAdd.cleaningHabits.other.notContainsHtmlTags" class="invalid-feedback">
                                      {{htmlTagsError($t('clHabits.cleaningHabits.label'))}}
                  </div>
                  <div v-else-if="! $v.rowToAdd.cleaningHabits.other.minLength &&  $v.rowToAdd.cleaningHabits.other.$error" class="invalid-feedback">
                              {{minLengthError($t('clHabits.cleaningHabits.label'), $v.rowToAdd.cleaningHabits.other.$params.minLength.min)}}
                  </div>
                  <div v-else-if="! $v.rowToAdd.cleaningHabits.other.maxLength &&  $v.rowToAdd.cleaningHabits.other.$error" class="invalid-feedback">
                              {{maxLengthError($t('clHabits.cleaningHabits.label'), $v.rowToAdd.cleaningHabits.other.$params.maxLength.max)}}
                  </div>         
               </CustomDropdown>
              </div>
            </div>
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
                <small
                        v-if="v.habits.$error && !v.habits.maxLength"
                        class="p-invalid"
                        >
                        {{
                            maxRecordsError(
                            $t("clHabits.header"),
                            v.habits.$params.maxLength.max
                            )
                        }}    
                </small>
            </div>
          </div>
          <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-label">{{$t('clHabits.note.label')}}</label>
                        <textarea 
                            v-model="clHabits.note" 
                            :placeholder="$t('clHabits.note.placeholder')" 
                            class="form-control"
                            :class="{
                                'is-invalid':
                                (v.note.$error)
                                ||
                                (serializer_error.note?serializer_error.note.length>0:false)
                            }" 
                        ></textarea>
                        <div v-if="v.note.$error && !v.note.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('clHabits.note.label'))}}
                        </div>
                        <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                                {{minLengthError($t('clHabits.note.label'), v.note.$params.minLength.min)}}
                        </div>
                        <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                                {{maxLengthError($t('clHabits.note.label'), v.note.$params.maxLength.max)}}
                        </div> 
                    </div>
                </div>
        </div>
      </Base>
      <div class="table-wrapper my-2" v-if="clHabits.habits.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive"  >
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('clHabits.typeReplacement.label')}}</th>
                            <th scope="col">{{$t('clHabits.comfort.label')}}</th>
                            <th scope="col">{{$t('clHabits.wearingHabits.label')}}</th>
                            <th scope="col">{{$t('clHabits.cleaningHabits.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in clHabits.habits" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <div v-if="val.typeReplacement.other">
                                  {{val.typeReplacement.other}}
                                </div>
                                <div v-if="val.typeReplacement.selection" >
                                  {{val.typeReplacement.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.comfort.other">
                                  {{val.comfort.other}}
                                </div>
                                <div v-if="val.comfort.selection" >
                                  {{val.comfort.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.wearingHabits.other">
                                  {{val.wearingHabits.other}}
                                </div>
                                <div v-if="val.wearingHabits.selection" >
                                  {{val.wearingHabits.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.cleaningHabits.other">
                                  {{val.cleaningHabits.other}}
                                </div>
                                <div v-if="val.cleaningHabits.selection" >
                                  {{val.cleaningHabits.selection.value}}
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
    <EditDialog :display="displayEditDialog" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow" :header="$t('clHabits.header')">
        <div class="row" v-if="this.rowToEdit">
            <div class="col-md-12 col-xxl-6" v-if="this.rowToEdit.typeReplacement">
                <div class="form-group">
                  <CustomDropdown
                      v-model="rowToEdit.typeReplacement"
                      :label="$t('clHabits.typeReplacement.label')"
                      :placeholder="$t('clHabits.typeReplacement.placeholder')"
                      :options="typeReplacementOptions"
                      :v="$v.rowToEdit.typeReplacement"
                      :inputType="'text'"
                      :invalidSelection=" $v.rowToEdit.typeReplacement.selection.$error "
                      :invalidOther=" $v.rowToEdit.typeReplacement.other.$error  "
                      >
                      <small v-if="$v.rowToEdit.typeReplacement.selection.$error && !$v.rowToEdit.typeReplacement.selection.required" class="p-invalid">
                                      {{requiredError($t('clHabits.typeReplacement.label'))}}
                      </small>
                      <div v-else-if="$v.rowToEdit.typeReplacement.other.$error && !$v.rowToEdit.typeReplacement.other.required" class="invalid-feedback">
                                      {{requiredError($t('clHabits.typeReplacement.label'))}}
                          </div>
                      <div v-else-if="$v.rowToEdit.typeReplacement.other.$error && !$v.rowToEdit.typeReplacement.other.notContainsHtmlTags" class="invalid-feedback">
                                      {{htmlTagsError($t('clHabits.typeReplacement.label'))}}
                      </div>
                      <div v-else-if="! $v.rowToEdit.typeReplacement.other.minLength &&  $v.rowToEdit.typeReplacement.other.$error" class="invalid-feedback">
                              {{minLengthError($t('clHabits.typeReplacement.label'), $v.rowToEdit.typeReplacement.other.$params.minLength.min)}}
                      </div>
                      <div v-else-if="! $v.rowToEdit.typeReplacement.other.maxLength &&  $v.rowToEdit.typeReplacement.other.$error" class="invalid-feedback">
                              {{maxLengthError($t('clHabits.typeReplacement.label'), $v.rowToEdit.typeReplacement.other.$params.maxLength.max)}}
                      </div>         

                  </CustomDropdown>
                </div>
            </div>
            <div class="col-md-12 col-xxl-6" v-if="this.rowToEdit.comfort">
                <div class="form-group">
                  <CustomDropdown
                      v-model="rowToEdit.comfort"
                      :label="$t('clHabits.comfort.label')"
                      :placeholder="$t('clHabits.comfort.placeholder')"
                      :options="comfortOptions"
                      :v="$v.rowToEdit.comfort"
                      :inputType="'text'"
                      :invalidSelection="$v.rowToEdit.comfort.selection.$error "
                      :invalidOther="$v.rowToEdit.comfort.other.$error "
                  >
                    <div v-if="$v.rowToEdit.comfort.other.$error && !$v.rowToEdit.comfort.other.notContainsHtmlTags" class="invalid-feedback">
                                        {{htmlTagsError($t('clHabits.comfort.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.comfort.other.minLength &&  $v.rowToEdit.comfort.other.$error" class="invalid-feedback">
                                {{minLengthError($t('clHabits.comfort.label'), $v.rowToEdit.comfort.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.comfort.other.maxLength &&  $v.rowToEdit.comfort.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('clHabits.comfort.label'), $v.rowToEdit.comfort.other.$params.maxLength.max)}}
                    </div>           

                  </CustomDropdown>
                </div>
            </div>
            <div class="col-md-12 col-xxl-6" v-if="this.rowToEdit.wearingHabits">
                <div class="form-group">
                  <CustomDropdown
                      v-model="rowToEdit.wearingHabits"
                      :label="$t('clHabits.wearingHabits.label')"
                      :placeholder="$t('clHabits.wearingHabits.placeholder')"
                      :options="wearingHabitsOptions"
                      :v="$v.rowToEdit.wearingHabits"
                      :inputType="'text'"
                      :invalidSelection=" $v.rowToEdit.wearingHabits.selection.$error "
                      :invalidOther=" $v.rowToEdit.wearingHabits.other.$error  "
                  >
                    <div v-if="$v.rowToEdit.wearingHabits.other.$error && !$v.rowToEdit.wearingHabits.other.notContainsHtmlTags" class="invalid-feedback">
                                        {{htmlTagsError($t('clHabits.wearingHabits.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.wearingHabits.other.minLength &&  $v.rowToEdit.wearingHabits.other.$error" class="invalid-feedback">
                                {{minLengthError($t('clHabits.wearingHabits.label'), $v.rowToEdit.wearingHabits.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.wearingHabits.other.maxLength &&  $v.rowToEdit.wearingHabits.other.$error" class="invalid-feedback">
                                {{maxLengthError($t('clHabits.wearingHabits.label'), $v.rowToEdit.wearingHabits.other.$params.maxLength.max)}}
                    </div>         

                  </CustomDropdown> 
              </div>
            </div>
            <div class="col-md-12 col-xxl-6" v-if="this.rowToEdit.cleaningHabits">
                <div class="form-group">
                    <CustomDropdown
                        v-model="rowToEdit.cleaningHabits"
                        :label="$t('clHabits.cleaningHabits.label')"
                        :placeholder="$t('clHabits.cleaningHabits.placeholder')"
                        :options="cleaningHabitsOptions"
                        :v="$v.rowToEdit.cleaningHabits"
                        :inputType="'text'"
                        :invalidSelection=" $v.rowToEdit.cleaningHabits.selection.$error"
                        :invalidOther=" $v.rowToEdit.cleaningHabits.other.$error "
                    >
                      <div v-if="$v.rowToEdit.cleaningHabits.other.$error && !$v.rowToEdit.cleaningHabits.other.notContainsHtmlTags" class="invalid-feedback">
                                          {{htmlTagsError($t('clHabits.cleaningHabits.label'))}}
                      </div>
                      <div v-else-if="! $v.rowToEdit.cleaningHabits.other.minLength &&  $v.rowToEdit.cleaningHabits.other.$error" class="invalid-feedback">
                                  {{minLengthError($t('clHabits.cleaningHabits.label'), $v.rowToEdit.cleaningHabits.other.$params.minLength.min)}}
                      </div>
                      <div v-else-if="! $v.rowToEdit.cleaningHabits.other.maxLength &&  $v.rowToEdit.cleaningHabits.other.$error" class="invalid-feedback">
                                  {{maxLengthError($t('clHabits.cleaningHabits.label'), $v.rowToEdit.cleaningHabits.other.$params.maxLength.max)}}
                      </div>         

                  </CustomDropdown>  
               </div>
            </div>
        </div>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog"  @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/history.json"></i18n>
<script>
///////////////////////////////////
import {cloneDeep} from 'lodash';
///////////////////////////////////

import { mapGetters } from "vuex";
import historyOptions from '@/mixins/mr/ophthalmic/options/historyOptions'
import {
    htmlTagsError,
    minLengthError,
    maxLengthError,
    inputError,
    requiredError,
    maxRecordsError,
} from '@/validation/errors'
import {notContainsHtmlTags} from "@/validation/customValidators";
import {minLength,maxLength,requiredIf} from "vuelidate/lib/validators";
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue"    
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import ResetButton from "@/components/global/utilities/ResetButton.vue"
export default {
    mixins:[historyOptions],
    props:{
        v:{
            type:Object,
            required:true
        },
        check_error:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },
    },
    components:{
        Base,
        CustomDropdown,
        AddButton,
        EditButton,
        DeleteButton,   
        EditDialog,
        DeleteDialog,
        ResetButton
    },
    data() {
        return {
            rowToAdd:{
                typeReplacement: {
                    selection: null,
                    other: "",
                },
                comfort: {
                    selection:null,
                    other: "",
               },
                wearingHabits: {
                    selection: null,
                    other: "",
                },
                cleaningHabits: {
                    selection:null,
                    other: "",
                },
            },
            rowToEdit:{

            },
            indexToEdit:null,
            displayEditDialog: false,
            indexToDelete:null,
            displayDeleteDialog: false,
            }
    },
    /////////////////////////////////
    computed:{
        ...mapGetters('detailsOphthalmic/ophthalmic',['getClHabits'] ),
        clHabits:{
            get() {
                return this.getClHabits;
            },
            set(value) {
                this.$store.dispatch('detailsOphthalmic/ophthalmic/setClHabits', value);
            }
        },
    },
    validations:{
        rowToAdd:{
            typeReplacement: {
                selection: {
                    required: requiredIf(function () {
                    return !this.rowToAdd.typeReplacement.other
                    })
                },
                other: {
                    required: requiredIf(function () {
                    return !this.rowToAdd.typeReplacement.selection
                    }),
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
            comfort: {
              selection: {
                 
                },
                
                other: {
                    minLength: minLength(1),
                    minLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
            wearingHabits: {
                selection: {
               
                },
                other: {
      
                    minLength: minLength(1),
                    minLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
            cleaningHabits: {
                selection: {

                },
                other: {
          
                    minLength: minLength(1),
                    minLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
        },
        rowToEdit:{
          typeReplacement: {
                selection: {
                    required: requiredIf(function () {
                    return !this.rowToEdit.typeReplacement.other
                    })
                },
                other: {
                    required: requiredIf(function () {
                    return !this.rowToEdit.typeReplacement.selection
                    }),
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
            comfort: {
              selection: {
                 
                },
                
                other: {
                    minLength: minLength(1),
                    minLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
            wearingHabits: {
                selection: {
               
                },
                other: {
      
                    minLength: minLength(1),
                    minLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
            cleaningHabits: {
                selection: {

                },
                other: {
          
                    minLength: minLength(1),
                    minLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                },                
            },
        },
    },
    methods:{
        htmlTagsError,
        minLengthError,
        maxLengthError,
        inputError,
        requiredError,
        maxRecordsError,
        /////////////////////////
        resetForm(){
            this.rowToAdd={
                typeReplacement: {
                    selection:null,
                    other: "",
                },
                comfort: {
                    selection:null,
                    other: "",
                },
                wearingHabits: {
                    selection: null,
                    other: "",
                },
                cleaningHabits: {
                    selection: null,
                    other: "",
                },
            }
            this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.v.$reset();
            this.clHabits= {
                habits: [],
                note: "",
            };
       },
        ////////////////////////////
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!(this.v.$invalid || this.$v.rowToAdd.$invalid )){
            this.clHabits.habits.push({...this.rowToAdd});
              this.resetForm();
            }
          
        },
        ////////////////////////////
        openEditDialog(val,index) {
          this.displayEditDialog = true;
          this.indexToEdit = index;
          this.rowToEdit = cloneDeep(val);
        },
        closeEditDialog() {
          this.rowToEdit= {}
          this.indexToEdit = null;
          this.$v.rowToEdit.$reset()
          this.displayEditDialog = false;
        },
        editRow(){
            this.$v.rowToEdit.$touch();
            this.v.$touch();
           if(!(this.v.$invalid || this.$v.rowToEdit.$invalid ) ){
            this.clHabits.habits[this.indexToEdit]={...this.rowToEdit};
            this.closeEditDialog();
          }  
        },
        ///////////////////////////////
        openDeleteDialog(index) {
          this.displayDeleteDialog = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteDialog = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.clHabits.habits.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    }
    
}
</script>