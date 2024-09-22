<template>
  <div class="rx">
    <Base>      
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('rx.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>      
        <div class="row">
            <div class="col-md-4">                
                <div class="form-group drug-name">
                    <label class="form-label">{{$t('rx.drugName.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':
                                $v.rowToAdd.drugName.$error 
                            }"
                            >
                            <i class="mdi mdi-pill"></i>
                            </span>
                            <AutoComplete
                            v-model="rowToAdd.drugName"
                            :suggestions="drugNameParams.suggestions"
                            :class="{'p-invalid':$v.rowToAdd.drugName.$error}"                          
                            field="value"  
                            :placeholder="$t('rx.drugName.placeholder')" 
                            @complete="search($event,drugNameParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToAdd.drugName.$error&&!$v.rowToAdd.drugName.validator">
                            {{inputError($t('rx.drugName.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="$v.rowToAdd.drugName.$error&&!$v.rowToAdd.drugName.required">
                            {{requiredError($t('rx.drugName.label'))}}
                        </small>
                    </div>
                </div>
            </div> 

            <div class="col-md-4">                
                <div class="form-group frequency">
                    <label class="form-label">{{$t('rx.frequency.label')}}</label>
                    <CustomCascade
                      v-model="rowToAdd.frequency" 
                      :placeholder="$t('rx.frequency.dropdownPlaceholder')"
                      :options="frequencyOptions[locale]"
                      :invalid="$v.rowToAdd.frequency.$error"
                    />    
                    <small class="p-invalid" v-if="$v.rowToAdd.frequency.$error&&!$v.rowToAdd.frequency.required">
                        {{requiredError($t('rx.frequency.label'))}}
                    </small>                    
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-group drug-form">
                    <label class="form-label">{{$t('rx.form.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <Dropdown
                        v-model="rowToAdd.form"
                        :options="formOptions"
                        optionLabel="value" 
                        :placeholder="$t('rx.form.placeholder')" 
                        :filter="true"
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group drug-route">
                    <label class="form-label">{{$t('rx.route.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <Dropdown
                        v-model="rowToAdd.route"
                        :options="routeOptions"
                        optionLabel="value" 
                        :placeholder="$t('rx.route.placeholder')" 
                        :filter="true"
                        />
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="form-group dose">
                    <CustomInputGroup
                        v-model="rowToAdd.dose"
                        :label="$t('rx.dose.label')"
                        :inputType="'number'"
                        :valuePlaceholder="$t('rx.dose.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.dose.dropdownPlaceholder')"
                        :options="doseTypeOptions" 
                        :invalidValue="$v.rowToAdd.dose.value.$invalid" 
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToAdd.dose.value.$error && !$v.rowToAdd.dose.value.decimal">
                            {{numericError($t('rx.dose.label'))}}
                        </small>
                    </div>
                </div>
            </div>                
            <div class="col-md-4">
                <div class="form-group strength">
                    <CustomInputGroup
                        v-model="rowToAdd.strength"
                        :label="$t('rx.strength.label')"
                        :inputType="'text'"
                        :valuePlaceholder="$t('rx.strength.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.strength.dropdownPlaceholder')"
                        :options="strengthUnitOptions" 
                        :invalidValue="$v.rowToAdd.strength.value.$invalid" 
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToAdd.strength.value.$error && !$v.rowToAdd.strength.value.validStrength">
                            {{inputError($t('rx.strength.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group period">
                    <CustomInputGroup 
                        v-model="rowToAdd.period"
                        :label="$t('rx.period.label')" 
                        :valueType="'number'" 
                        :valuePlaceholder="$t('rx.period.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.period.dropdownPlaceholder')"
                        :options="periodUnitOptions" 
                        :invalidValue="$v.rowToAdd.period.value.$invalid"
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.numeric">
                            {{numericError($t('rx.period.label'))}}
                        </small>
                        <small class="d-block text-danger" 
                            v-if="$v.rowToAdd.period.value.$error && !$v.rowToAdd.period.value.maxValue">
                            {{maxValueError($t('rx.period.label'),$v.rowToAdd.period.value.$params.maxValue.max)}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group Substituent Permission">
                    <label class="form-label">{{$t('rx.permission.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <Dropdown
                        v-model="rowToAdd.permission"
                        :options="permissionOptions"
                        optionLabel="value" 
                        :placeholder="$t('rx.permission.placeholder')" 
                        />
                    </div>
                </div>
            </div> 
            <!-- ////////////////////////////////
            <div class="col-md-6 col-xxl-4">
                <div class="form-group drug-eye" v-if="rowToEdit.eye">
                    <label class="form-label">{{$t('rx.eye.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <Dropdown
                        v-model="rowToEdit.eye"
                        :class="{'p-invalid':serializer_error.eye?serializer_error.eye:false}"
                        :options="eyeOptions"
                        :optionLabel="locale=='ar'?'arabic':'english'" 
                        :placeholder="$t('rx.eye.placeholder')" 
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group refill">
                    <label class="form-label">{{$t('rx.refill.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <InputText 
                            type="number" 
                            class="form-control" 
                            v-model="rowToEdit.refill"
                            :placeholder="$t('rx.refill.placeholder')"
                            :class="{'is-invalid'
                                :$v.rowToEdit.refill.$error && !$v.rowToEdit.refill.decimal
                            }"
                        />
                    </div>
                    <div class="invalid-feedback d-block"
                            v-if="$v.rowToEdit.refill.$error && !$v.rowToEdit.refill.decimal" >
                            {{numericError($t('rx.refill.label'))}}
                    </div>
                </div>
            </div> -->
            <!-- ///////////////////////////////    -->
            <div class="col-md-4">
                <div class="form-group note">
                    <label class="form-label">{{$t('rx.note.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <InputText 
                            type="text" 
                            class="form-control" 
                            v-model="rowToAdd.note"
                            :placeholder="$t('rx.note.placeholder')"
                            :class="{'p-invalid':$v.rowToAdd.note.$error}"
                        />
                    </div>
                    <div 
                        v-if="$v.rowToAdd.note.$error && !$v.rowToAdd.note.notContainsHtmlTags" 
                        class="text-danger d-block"
                        >{{htmlTagsError($t('rx.note.label'))}}
                    </div>
                    <div 
                        v-if="! $v.rowToAdd.note.minLength &&  $v.rowToAdd.note.$error" 
                        class="text-danger d-block"
                        >{{minLengthError($t('rx.note.label'), $v.rowToAdd.note.$params.minLength.min)}}
                    </div>
                    <div 
                        v-if="! $v.rowToAdd.note.maxLength &&  $v.rowToAdd.note.$error" 
                        class="text-danger d-block">{{maxLengthError($t('rx.note.label'), $v.rowToAdd.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>                
            <div class="col-md-4 d-flex justify-content-between">
              <div>
                <AddButton @add="addRow"></AddButton>
                <small v-if="v.$error&&!v.maxLength" class="p-invalid">
                  {{maxRecordsError($t('rx.header'),v.$params.maxLength.max)}}
                </small>
              </div>
                <div class="form-group ">
                    <label for="" class="form-label invisible ">{{ $t('btns.template') }}</label>
                    <SplitButton 
                        :label="$t('btns.template')" :model="items" 
                        :icon="'pi pi-plus'"
                        class="p-button-success-gradient"
                        @click="saveTemplate"
                    >
                    </SplitButton>
                </div>
            </div>
        </div>
    </Base>
    <div class="table-wrapper my-2" v-if="rx.length>0">
      <Base>
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive"  >
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('rx.drugName.label')}}</th>
                            <th scope="col">{{$t('rx.frequency.label')}}</th>
                            <th scope="col">{{$t('rx.form.label')}}</th>
                            <th scope="col">{{$t('rx.route.label')}}</th>
                            <th scope="col">{{$t('rx.dose.label')}}</th>
                            <th scope="col">{{$t('rx.strength.label')}}</th>
                            <th scope="col">{{$t('rx.period.label')}}</th>
                            <th scope="col">{{$t('rx.permission.label')}}</th>
                            <th scope="col">{{$t('rx.note.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in rx" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <div v-if="val.drugName">
                                  <span v-if="(typeof val.drugName == 'object')">{{val.drugName.value}}</span>
                                  <span v-else>{{val.drugName}}</span>
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.frequency.length">{{val.frequency.join("/")}}</div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.form">
                                    {{val.form.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.route">
                                    {{val.route.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.dose">
                                  <span v-if="val.dose.selection">{{val.dose.selection.value}}</span>
                                  /
                                  <span v-if="val.dose.value">{{val.dose.value}}</span>
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.strength">
                                  <span v-if="val.strength.selection">{{val.strength.selection.value}}</span>
                                  /
                                  <span v-if="val.strength.value">{{val.strength.value}}</span>
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.period">
                                  <span v-if="val.period.selection">{{val.period.selection.value}}</span>
                                  /
                                  <span v-if="val.period.value">{{val.period.value}}</span>
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.permission">
                                    {{val.permission.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.note">{{val.note}}</div>
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

    <EditDialog :display="displayEditDialog" @close="closeEditDialog"  @cancel="closeEditDialog" @save="editRow" :header="$t('rx.header')">
        <div class="row" v-if="rowToEdit">
            <div class="col-md-6 col-xxl-4">                
                <div class="form-group drug-name">
                    <label class="form-label">{{$t('rx.drugName.label')}}</label>
                    <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon" 
                            :class="{'p-invalid':
                                $v.rowToEdit.drugName.$error 
                            }"
                            >
                            <i class="mdi mdi-pill"></i>
                            </span>
                            <AutoComplete
                            v-model="rowToEdit.drugName"
                            :suggestions="drugNameParams.suggestions"
                            :class="{'p-invalid':$v.rowToEdit.drugName.$error}"                          
                            field="value"  
                            :placeholder="$t('rx.drugName.placeholder')" 
                            @complete="search($event,drugNameParams)"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToEdit.drugName.$error&&!$v.rowToEdit.drugName.validator">
                            {{inputError($t('rx.drugName.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="$v.rowToEdit.drugName.$error&&!$v.rowToEdit.drugName.required">
                            {{requiredError($t('rx.drugName.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">                
                <div class="form-group frequency">
                    <label class="form-label">{{$t('rx.frequency.label')}}</label>
                    <CustomCascade
                      v-model="rowToEdit.frequency" 
                      :placeholder="$t('rx.frequency.dropdownPlaceholder')"
                      :options="frequencyOptions[locale]"
                      :invalid="$v.rowToEdit.frequency.$error"
                    />         
                    <small class="p-invalid" v-if="$v.rowToEdit.frequency.$error&&!$v.rowToEdit.frequency.required">
                        {{requiredError($t('rx.frequency.label'))}}
                    </small>                
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
              <div class="form-group drug-form">
                  <label class="form-label">{{$t('rx.form.label')}}</label>
                  <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">
                          <i class="mdi mdi-pill"></i>
                      </span>
                      <Dropdown
                      v-model="rowToEdit.form"
                      :options="formOptions"
                      optionLabel="value" 
                      :placeholder="$t('rx.form.placeholder')" 
                      :filter="true"
                      />
                  </div>
              </div>
            </div>
            <div class="col-md-6 col-xxl-4">
              <div class="form-group drug-route">
                  <label class="form-label">{{$t('rx.route.label')}}</label>
                  <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">
                          <i class="mdi mdi-pill"></i>
                      </span>
                      <Dropdown
                      v-model="rowToEdit.route"
                      :options="routeOptions"
                      optionLabel="value" 
                      :placeholder="$t('rx.route.placeholder')" 
                      :filter="true"
                      />
                  </div>
              </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group dose" v-if="rowToEdit.dose">
                    <CustomInputGroup 
                        v-model="rowToEdit.dose"
                        :label="$t('rx.dose.label')"
                        :inputType="'number'" 
                        :valuePlaceholder="$t('rx.dose.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.dose.dropdownPlaceholder')"
                        :options="doseTypeOptions" 
                        :invalidValue="$v.rowToEdit.dose.value.$invalid"
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToEdit.dose.value.$error && !$v.rowToEdit.dose.value.decimal">
                            {{numericError($t('rx.dose.label'))}}
                        </small>
                    </div>
                </div>
            </div>                               
            <div class="col-md-6 col-xxl-4">
                <div class="form-group strength">
                    <CustomInputGroup 
                        v-if="rowToEdit.strength"
                        v-model="rowToEdit.strength"
                        :label="$t('rx.strength.label')"
                        :inputType="'text'" 
                        :valuePlaceholder="$t('rx.strength.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.strength.dropdownPlaceholder')"
                        :options="strengthUnitOptions" 
                        :invalidValue="$v.rowToEdit.strength.value.$invalid"
                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToEdit.strength.value.$error && !$v.rowToEdit.strength.value.validStrength">
                            {{inputError($t('rx.strength.label'))}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group period">
                    <CustomInputGroup
                      v-if="rowToEdit.period"
                        v-model="rowToEdit.period"
                        :label="$t('rx.period.label')" 
                        :inputType="'number'" 
                        :valuePlaceholder="$t('rx.period.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('rx.period.dropdownPlaceholder')"
                        :options="periodUnitOptions" 
                        :invalidValue="$v.rowToEdit.period.value.$invalid"

                    />
                    <div class="error">
                        <small 
                            class="d-block text-danger" 
                            v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.numeric">
                            {{numericError($t('rx.period.label'))}}
                        </small>
                        <small class="d-block text-danger" 
                            v-if="$v.rowToEdit.period.value.$error && !$v.rowToEdit.period.value.maxValue">
                            {{maxValueError($t('rx.period.label'),$v.rowToEdit.period.value.$params.maxValue.max)}}
                        </small>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group drug-permission">
                    <label class="form-label">{{$t('rx.permission.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <Dropdown
                        v-model="rowToEdit.permission"
                        :options="permissionOptions"
                        optionLabel="value"
                        :placeholder="$t('rx.permission.placeholder')" 
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xxl-4">
                <div class="form-group note">
                    <label class="form-label">{{$t('rx.note.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <InputText 
                            type="text" 
                            class="form-control" 
                            v-model="rowToEdit.note"
                            :placeholder="$t('rx.note.placeholder')"
                            :class="{'p-invalid':$v.rowToEdit.note.$error}"
                        />
                    </div>
                    <div 
                        v-if="$v.rowToEdit.note.$error && !$v.rowToEdit.note.notContainsHtmlTags" 
                        class="text-danger d-block"
                        >{{htmlTagsError($t('rx.note.label'))}}
                    </div>
                    <div 
                        v-if="! $v.rowToEdit.note.minLength &&  $v.rowToEdit.note.$error" 
                        class="text-danger d-block"
                        >{{minLengthError($t('rx.note.label'), $v.rowToEdit.note.$params.minLength.min)}}
                    </div>
                    <div 
                        v-if="! $v.rowToEdit.note.maxLength &&  $v.rowToEdit.note.$error" 
                        class="text-danger d-block">{{maxLengthError($t('rx.note.label'), $v.rowToEdit.note.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
        </div>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog"  @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/global/rx/rx.json"></i18n>
<script>
///////////////////////////////////
import {cloneDeep} from 'lodash';
///////////////////////////////////

import rxOptions from '@/mixins/mr/global/rx/options/rxOptions'
import {minLength,maxLength,decimal,numeric,required,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
import {htmlTagsError,minLengthError,maxLengthError,inputError,numericError,requiredError,maxValueError,maxRecordsError} from '@/validation/errors'
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
import CustomCascade from '@/components/global/custom/CustomCascade.vue'
import Base from '@/components/global/utilities/Base.vue'
import ResetButton from "@/components/global/utilities/ResetButton.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import { locale } from 'moment';
export default {
    mixins:[rxOptions],
    props:{
        rxOptions:{
            required:true,
            type: Object,
        },
        value:{
            required:true,
            type: Array,
            default(){
                return []
            }
        },
        v:{
            type:Object,
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
        CustomInputGroup,
        CustomCascade,
        ResetButton,
        AddButton,
        EditButton,
        DeleteButton,        
        EditDialog,
        DeleteDialog
    },
    data(){
        return{
          items: [
            {
              label: 'Static Template',
              icon: 'pi pi-refresh',
              command: () => {
                            this.rx = [...this.staticTemplate]
                this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
              }
            },
            {
              label: 'Static Template',
              icon: 'pi pi-refresh',
              command: () => {
                            this.rx = [...this.staticTemplate]
                this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
              }
            },
            {
              label: 'Static Template',
              icon: 'pi pi-refresh',
              command: () => {
                            this.rx = [...this.staticTemplate]
                this.$toast.add({severity:'success', summary:'Updated', detail:'Data Updated', life: 3000});
              }
            },
          ],
          ////////////////////////////////////////////////////////////////
          rx:this.value,
          rowToAdd:{
              drugName:null,
              frequency:[],
              form:null,
              route:null,
              strength:{
                  selection:null,
                  value:''
              },
              dose:{
                  selection:null,
                  value:''
              },
              period:{
                  selection:null,
                  value:''
              },
              permission:{
                id: 1,
                value:"Replace"
              },
              note:""
          },
          rowToEdit:{},
          indexToEdit:null,
          displayEditDialog: false,
          indexToDelete:null,
          displayDeleteDialog: false,          
        }
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
            frequency:{
                required,
            },
            strength:{
                value:{
                    validStrength(val){
                        if (val == '')
                            return true ; 
                        const dataRegux = /^(\d{1,4}(\/|:|-)\d{1,5})$|^(\d{1,4})$/g ;
                        if (val.search(dataRegux) !=-1)
                            return true;
                        return false;
                    }
                }
            },
            dose:{
                value:{
                    decimal
                }
            },
            period:{
                value:{
                  numeric,
                  maxValue:maxValue(100)
                }
            },
            note:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    if (value == '' || typeof(value)=="object")
                        return true ; 
                    return notContainsHtmlTags(value);
                    
                },
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
            frequency:{
                required,
            },
            strength:{
                value:{
                    validStrength(val){
                        if (val == '')
                            return true ; 
                        const dataRegux = /^(\d{1,4}(\/|:|-)\d{1,5})$|^(\d{1,4})$/g ;
                        if (val.search(dataRegux) !=-1)
                            return true;
                        return false;
                    }
                }
            },
            dose:{
                value:{
                    decimal
                }
            },
            period:{
                value:{
                  numeric,
                  maxValue:maxValue(100)
                }
            },
            note:{
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                    if (value == '' || typeof(value)=="object")
                        return true ; 
                    return notContainsHtmlTags(value);
                    
                },
            }            
        },
        /////////////////////////////////
    },
    watch:{
        rx:{
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.rx])
            },
        },
        'rowToAdd.period': {
            deep: true,
            handler(newValue, oldValue) {
                this.handlePeriodInput();
            },
        },
        'rowToEdit.period': {
            deep: true,
            handler(newValue, oldValue) {
                this.handlePeriodEditInput();
            },
        },
    },
    methods:{
        /////////////////////////
        htmlTagsError,
        minLengthError,
        maxLengthError,
        inputError,
        numericError,
        requiredError,
        maxValueError,
        maxRecordsError,
        /////////////////////////
        resetForm(){
            this.rowToAdd = {
                drugName:null,
                frequency:[],
                form:null,
                route:null,
                strength:{
                    selection:null,
                    value:''
                },
                dose:{
                    selection:null,
                    value:''
                },
                period:{
                    selection:null,
                    value:''
                },
                permission:{
                  id: 1,
                  value:"Replace"
                },
                note:""
            },
            this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.v.$reset();
          this.rx=[]

        },
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!(this.v.$invalid || this.$v.rowToAdd.$invalid )){
              this.rx.push({...this.rowToAdd});
              this.resetForm();
            }
        },
        /////////////////////
        openEditDialog(val,index) {
          this.displayEditDialog = true;
          this.indexToEdit = index;
          this.rowToEdit = cloneDeep(val);
        //   this.rowToEdit ={...val}
        },
        closeEditDialog() {
          this.rowToEdit= {}
          this.indexToEdit = null;
          this.$v.rowToEdit.$reset()
          this.displayEditDialog = false;
        },
        editRow(){
          this.v.$touch();
          this.$v.rowToEdit.$touch();
          if(!(this.v.$invalid || this.$v.rowToEdit.$invalid )){
            // this.rx[this.indexToEdit]={...this.rowToEdit};
            this.rx.splice(this.indexToEdit,1,{...this.rowToEdit});
            this.closeEditDialog();
          }
        },
        ////////////////////////
        openDeleteDialog(index) {
          this.displayDeleteDialog = true;
          this.indexToDelete =index
        },
        closeDeleteDialog() {
          this.displayDeleteDialog = false;
          this.indexToDelete =null
        },
        deleteRow(){
            this.rx.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
        /////////////////////////////////////////
        handlePeriodInput(){
            if(this.rowToAdd.period.selection=='life time'){
                this.rowToAdd.period.value=''
            }
        },
        handlePeriodEditInput(){
            if(this.rowToEdit.period){
                if(this.rowToEdit.period.selection=='life time'){
                    this.rowToEdit.period.value=''
                }
            }
        },
        saveTemplate(){
            console.log("Template Saved")
        }
    },
}
</script>
<style lang="scss" scoped>
</style>