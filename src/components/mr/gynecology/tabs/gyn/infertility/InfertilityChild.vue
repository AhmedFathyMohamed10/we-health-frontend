<template>
  <div class="infertility-child">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
                <h4>{{ $t('infertility.header') }}</h4>
                <ResetButton @reset="reset"></ResetButton>            
            </div>
        </div>
        <div class="row">
            <!-- Duration -->
            <div class="col-md-4">
                <div class="form-group duration">
                    <CustomInputGroup
                        v-model="rowToAdd.duration"
                        :label="$t('infertility.duration.label')"
                        :valueType="'number'" 
                        :valuePlaceholder="$t('infertility.duration.valuePlaceholder')" 
                        :dropdownPlaceholder="$t('infertility.duration.dropdownPlaceholder')"
                        :options="durationUnitOptions" 
                        :invalidValue="$v.rowToAdd.duration.value.$error"
                    />
                    <div class="error">
                      <small class="p-invalid" 
                      v-if="$v.rowToAdd.duration.value.$error && !$v.rowToAdd.duration.value.numeric">
                      {{numericError($t('infertility.duration.label'))}}
                    </small>
                    <small class="p-invalid"
                          v-else-if="!$v.rowToAdd.duration.value.maxLength && $v.rowToAdd.duration.value.$error">
                          {{ maxValueError($t("infertility.duration.label")) }}
                    </small>
                    </div>
                </div>
            </div>
            <!-- Semen -->
            <div class="col-md-4">
                <div class="form-group">
                  <CustomDropdown
                  v-model="rowToAdd.semen"
                  :label="$t('infertility.semen.label')"
                  :placeholder="$t('infertility.semen.placeholder')"
                  :otherPlaceholder="$t('infertility.semen.otherPlaceholder')"
                  :options="semenOptions"
                  :invalidSelection="$v.rowToAdd.semen.selection.$error"
                  :invalidOther="$v.rowToAdd.semen.other.$error"
                >
                <small v-if="$v.rowToAdd.semen.selection.$error&&!$v.rowToAdd.semen.selection.required"
                  class="p-invalid">
                  {{ requiredError($t("infertility.semen.label")) }}
                </small>
                <div v-else-if="$v.rowToAdd.semen.other.$error && !$v.rowToAdd.semen.other.required"       class="invalid-feedback">
                  {{ requiredError($t("infertility.semen.label")) }}
                </div>
                </CustomDropdown>
              </div>
            </div>
            <!-- Wife -->
            <div class="col-md-4">
                <div class="form-group">
                <CustomDropdown
                v-model="rowToAdd.wife"
                :label="$t('infertility.wife.label')"
                :placeholder="$t('infertility.wife.placeholder')"
                :otherPlaceholder="$t('infertility.wife.otherPlaceholder')"
                :options="wifeOptions"
                :invalidSelection="$v.rowToAdd.wife.selection.$invalid"
                :invalidOther="$v.rowToAdd.wife.other.$invalid"
              />
                </div>
            </div>
            <!-- Cycle -->
            <div class="col-md-4">
                <div class="form-group">
                <CustomDropdown
                v-model="rowToAdd.cycle"
                :label="$t('infertility.cycle.label')"
                :placeholder="$t('infertility.cycle.placeholder')"
                :otherPlaceholder="$t('infertility.cycle.otherPlaceholder')"
                :options="cycleOptions"
                :invalidSelection="$v.rowToAdd.cycle.selection.$invalid"
                :invalidOther="$v.rowToAdd.cycle.other.$invalid"
              />
                </div>
            </div>
            <!-- UltraSound -->
            <div class="col-md-4">
                <div class="form-group">
                <CustomDropdown
                v-model="rowToAdd.ultraSound"
                :label="$t('infertility.ultraSound.label')"
                :placeholder="$t('infertility.ultraSound.placeholder')"
                :otherPlaceholder="$t('infertility.ultraSound.otherPlaceholder')"
                :options="ultraSoundOptions"
                :invalidSelection="$v.rowToAdd.ultraSound.selection.$invalid"
                :invalidOther="$v.rowToAdd.ultraSound.other.$invalid"
              />
                </div>
            </div>
            <!-- Hsg -->
            <div class="col-md-4">
                <div class="form-group">
                <CustomDropdown
                v-model="rowToAdd.hsg"
                :label="$t('infertility.hsg.label')"
                :placeholder="$t('infertility.hsg.placeholder')"
                :otherPlaceholder="$t('infertility.hsg.otherPlaceholder')"
                :options="hsgOptions"
                :invalidSelection="$v.rowToAdd.hsg.selection.$invalid"
                :invalidOther="$v.rowToAdd.hsg.other.$invalid"
              />
                </div>
            </div>
            <!-- RightTube -->
            <div class="col-md-4">
                <div class="form-group">
                <CustomDropdown
                v-model="rowToAdd.rightTube"
                :label="$t('infertility.rightTube.label')"
                :placeholder="$t('infertility.rightTube.placeholder')"
                :otherPlaceholder="$t('infertility.rightTube.otherPlaceholder')"
                :options="rightTubeOptions"
                :invalidSelection="$v.rowToAdd.rightTube.selection.$invalid"
                :invalidOther="$v.rowToAdd.rightTube.other.$invalid"
              />
                </div>
            </div>
            <!-- LeftTube -->
            <div class="col-md-4">
                <div class="form-group">
                <CustomDropdown
                v-model="rowToAdd.leftTube"
                :label="$t('infertility.leftTube.label')"
                :placeholder="$t('infertility.leftTube.placeholder')"
                :otherPlaceholder="$t('infertility.leftTube.otherPlaceholder')"
                :options="leftTubeOptions"
                :invalidSelection="$v.rowToAdd.leftTube.selection.$invalid"
                :invalidOther="$v.rowToAdd.leftTube.other.$invalid"
              />
                </div>
            </div>
            <!-- laparoscopy -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('infertility.laparoscopy.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.laparoscopy" 
                        :placeholder="$t('infertility.laparoscopy.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.laparoscopy.$invalid)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.laparoscopy.length>0:false)
                        }" 
                    >
                    <div v-if="!$v.rowToAdd.laparoscopy.$error && $v.rowToAdd.laparoscopy.$invalid && !$v.rowToAdd.laparoscopy.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('infertility.laparoscopy.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.laparoscopy.minLength &&  $v.rowToAdd.laparoscopy.$error" class="invalid-feedback">
                            {{minLengthError($t('infertility.laparoscopy.label'), $v.rowToAdd.laparoscopy.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.laparoscopy.maxLength &&  $v.rowToAdd.laparoscopy.$error" class="invalid-feedback">
                            {{maxLengthError($t('infertility.laparoscopy.label'), $v.rowToAdd.laparoscopy.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- addRow btn -->
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
            </div>
        </div>
    </Base>
    <!-- Table -->
    <div class="table-wrapper my-2" v-if="infertility.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('infertility.duration.label')}}</th>
                            <th scope="col">{{$t('infertility.semen.label')}}</th>
                            <th scope="col">{{$t('infertility.wife.label')}}</th>
                            <th scope="col">{{$t('infertility.cycle.label')}}</th>
                            <th scope="col">{{$t('infertility.ultraSound.label')}}</th>
                            <th scope="col">{{$t('infertility.hsg.label')}}</th>
                            <th scope="col">{{$t('infertility.rightTube.label')}}</th>
                            <th scope="col">{{$t('infertility.leftTube.label')}}</th>
                            <th scope="col">{{$t('infertility.laparoscopy.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in infertility" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <div v-if="val.duration.value">{{val.duration.value}}</div>
                                <div v-if="val.duration.selection">{{val.duration.selection.value}}</div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.semen.other">
                                  {{val.semen.other}}
                                </div>
                                <div v-if="val.semen.selection">
                                  {{val.semen.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.wife.other">
                                  {{val.wife.other}}
                                </div>
                                <div v-if="val.wife.selection">
                                  {{val.wife.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.cycle.other">
                                  {{val.cycle.other}}
                                </div>
                                <div v-if="val.cycle.selection">
                                  {{val.cycle.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.ultraSound.other">
                                  {{val.ultraSound.other}}
                                </div>
                                <div v-if="val.ultraSound.selection">
                                  {{val.ultraSound.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.hsg.other">
                                  {{val.hsg.other}}
                                </div>
                                <div v-if="val.hsg.selection">
                                  {{val.hsg.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.rightTube.other">
                                  {{val.rightTube.other}}
                                </div>
                                <div v-if="val.rightTube.selection">
                                  {{val.rightTube.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <div v-if="val.leftTube.other">
                                  {{val.leftTube.other}}
                                </div>
                                <div v-if="val.leftTube.selection">
                                  {{val.leftTube.selection.value}}
                                </div>
                            </td>
                            <td class="align-middle">
                                <span>{{val.laparoscopy}}</span>
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
    <EditDialog :header="$t('infertility.header')" :display="displayEditModal" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow">    
      <div class="row">
          <!-- Duration -->
          <div class="col-md-4">
              <div class="form-group duration">
                  <CustomInputGroup
                      v-model="rowToEdit.duration"
                      :label="$t('infertility.duration.label')"
                      :valueType="'number'" 
                      :valuePlaceholder="$t('infertility.duration.valuePlaceholder')" 
                      :dropdownPlaceholder="$t('infertility.duration.dropdownPlaceholder')"
                      :options="durationUnitOptions" 
                      :invalidValue="$v.rowToEdit.duration.value.$error"
                  />
                  <div class="error">
                      <small class="p-invalid" 
                          v-if="$v.rowToEdit.duration.value.$error && !$v.rowToEdit.duration.value.numeric">
                          {{numericError($t('infertility.duration.label'))}}
                      </small>
                      <small class="p-invalid"
                            v-else-if="!$v.rowToEdit.duration.value.maxLength && $v.rowToEdit.duration.value.$error">
                            {{ maxValueError($t("infertility.duration.label")) }}
                      </small>
                  </div>
              </div>
          </div>
          <!-- Semen -->
          <div class="col-md-4">
              <div class="form-group">
                <CustomDropdown
                v-model="rowToEdit.semen"
                :label="$t('infertility.semen.label')"
                :placeholder="$t('infertility.semen.placeholder')"
                :otherPlaceholder="$t('infertility.semen.otherPlaceholder')"
                :options="semenOptions"
                :invalidSelection="$v.rowToEdit.semen.selection.$error"
                    :invalidOther="$v.rowToEdit.semen.other.$error"
                  >
                  <small v-if="$v.rowToEdit.semen.selection.$error&&!$v.rowToEdit.semen.selection.required"
                    class="p-invalid">
                    {{ requiredError($t("infertility.semen.label")) }}
                  </small>
                  <div v-else-if="$v.rowToEdit.semen.other.$error && !$v.rowToEdit.semen.other.required"       class="invalid-feedback">
                    {{ requiredError($t("infertility.semen.label")) }}
                  </div>
                </CustomDropdown>
              </div>
          </div>
          <!-- Wife -->
          <div class="col-md-4">
              <div class="form-group">
              <CustomDropdown
              v-model="rowToEdit.wife"
              :label="$t('infertility.wife.label')"
              :placeholder="$t('infertility.wife.placeholder')"
              :otherPlaceholder="$t('infertility.wife.otherPlaceholder')"
              :options="wifeOptions"
              :invalidSelection="$v.rowToEdit.wife.selection.$invalid"
              :invalidOther="$v.rowToEdit.wife.other.$invalid"
            />
              </div>
          </div>
          <!-- Cycle -->
          <div class="col-md-4">
              <div class="form-group">
              <CustomDropdown
              v-model="rowToEdit.cycle"
              :label="$t('infertility.cycle.label')"
              :placeholder="$t('infertility.cycle.placeholder')"
              :otherPlaceholder="$t('infertility.cycle.otherPlaceholder')"
              :options="cycleOptions"
              :invalidSelection="$v.rowToEdit.cycle.selection.$invalid"
              :invalidOther="$v.rowToEdit.cycle.other.$invalid"
            />
              </div>
          </div>
          <!-- UltraSound -->
          <div class="col-md-4">
              <div class="form-group">
              <CustomDropdown
              v-model="rowToEdit.ultraSound"
              :label="$t('infertility.ultraSound.label')"
              :placeholder="$t('infertility.ultraSound.placeholder')"
              :otherPlaceholder="$t('infertility.ultraSound.otherPlaceholder')"
              :options="ultraSoundOptions"
              :invalidSelection="$v.rowToEdit.ultraSound.selection.$invalid"
              :invalidOther="$v.rowToEdit.ultraSound.other.$invalid"
            />
              </div>
          </div>
          <!-- Hsg -->
          <div class="col-md-4">
              <div class="form-group">
              <CustomDropdown
              v-model="rowToEdit.hsg"
              :label="$t('infertility.hsg.label')"
              :placeholder="$t('infertility.hsg.placeholder')"
              :otherPlaceholder="$t('infertility.hsg.otherPlaceholder')"
              :options="hsgOptions"
              :invalidSelection="$v.rowToEdit.hsg.selection.$invalid"
              :invalidOther="$v.rowToEdit.hsg.other.$invalid"
            />
              </div>
          </div>
          <!-- RightTube -->
          <div class="col-md-4">
              <div class="form-group">
              <CustomDropdown
              v-model="rowToEdit.rightTube"
              :label="$t('infertility.rightTube.label')"
              :placeholder="$t('infertility.rightTube.placeholder')"
              :otherPlaceholder="$t('infertility.rightTube.otherPlaceholder')"
              :options="rightTubeOptions"
              :invalidSelection="$v.rowToEdit.rightTube.selection.$invalid"
              :invalidOther="$v.rowToEdit.rightTube.other.$invalid"
            />
              </div>
          </div>
          <!-- LeftTube -->
          <div class="col-md-4">
              <div class="form-group">
              <CustomDropdown
              v-model="rowToEdit.leftTube"
              :label="$t('infertility.leftTube.label')"
              :placeholder="$t('infertility.leftTube.placeholder')"
              :otherPlaceholder="$t('infertility.leftTube.otherPlaceholder')"
              :options="leftTubeOptions"
              :invalidSelection="$v.rowToEdit.leftTube.selection.$invalid"
              :invalidOther="$v.rowToEdit.leftTube.other.$invalid"
            />
              </div>
          </div>
          <!-- laparoscopy -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('infertility.laparoscopy.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.laparoscopy" 
                      :placeholder="$t('infertility.laparoscopy.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.laparoscopy.$invalid)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.laparoscopy.length>0:false)
                      }" 
                  >
                  <div v-if="!$v.rowToEdit.laparoscopy.$error && $v.rowToEdit.laparoscopy.$invalid && !$v.rowToEdit.laparoscopy.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('infertility.laparoscopy.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.laparoscopy.minLength &&  $v.rowToEdit.laparoscopy.$error" class="invalid-feedback">
                          {{minLengthError($t('infertility.laparoscopy.label'), $v.rowToEdit.laparoscopy.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.laparoscopy.maxLength &&  $v.rowToEdit.laparoscopy.$error" class="invalid-feedback">
                          {{maxLengthError($t('infertility.laparoscopy.label'), $v.rowToEdit.laparoscopy.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
      </div>
    </EditDialog>
    <!-- Delete -->
    <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog> 
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/gynecology/gyn.json"></i18n>
<script>
///////////////////////////////////
import {cloneDeep} from 'lodash';
///////////////////////////////////
import { mapActions,mapGetters } from "vuex";
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,requiredError,maxValueError} from '@/validation/errors'
import {minLength,maxLength,numeric,requiredIf,maxValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
import CustomDropdown from '@/components/global/custom/CustomDropdown.vue'
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
  mixins: [gynecologyOptions],
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
    CustomInputGroup,
    CustomDropdown,
  },
  data(){
    return {

      rowToAdd:{
        duration:{
            selection:"",
            value:''
        },
        semen: {
            selection:"",
            other: ""
        },
        wife: {
            selection:"",
            other: ""
        },
        cycle: {
            selection:"",
            other: ""
        },
        ultraSound: {
            selection:"",
            other: ""
        },
        hsg: {
            selection:"",
            other: ""
        },
        rightTube: {
            selection:"",
            other: ""
        },
        leftTube: {
            selection:"",
            other: ""
        },
        laparoscopy: ""
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
        duration:{
          value:{
            numeric,
            maxValue: maxValue(100),
          }
        },
        semen: {
          selection: {
            required: requiredIf(function () {
              return !this.rowToAdd.semen.other;
            }),
          },
          other: {
            required: requiredIf(function () {
              return !this.rowToAdd.semen.selection;
            }),
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        wife: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        cycle: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        ultraSound: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        hsg: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        rightTube: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        leftTube: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        laparoscopy: {
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
      duration:{
          value:{
            numeric,
            maxValue: maxValue(100),
          }
        },
        semen: {
            selection: {
              required: requiredIf(function () {
                return !this.rowToEdit.semen.other;
              }),
            },
            other: {
              required: requiredIf(function () {
                return !this.rowToEdit.semen.selection;
              }),
              minLength: minLength(1),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
              },
            },
        },
        wife: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        cycle: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        ultraSound: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        hsg: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        rightTube: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        leftTube: {
          selection:{},
          other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            },
          },
        },
        laparoscopy: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                if (value == '' || typeof(value)=="object")
                    return true ; 
                return notContainsHtmlTags(value);
                
            },
        }
    },
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGynecology/gynecology',{
        'getInfertility':'getInfertility',
    }),
    infertility:{
      get() {
          return this.getInfertility;
      },
      set(value) {
          this.setInfertility(value);
      }
    },
  },
  methods: {
      htmlTagsError,
      maxLengthError,
      minLengthError,
      numericError,
      requiredError,
      maxValueError,
        ...mapActions("detailsGynecology/gynecology", [
          "setInfertility",
        ]),
        resetForm(){
            this.rowToAdd= {
                duration:{
                    selection:"",
                    value:''
                },
                semen: {
                    selection:"",
                    other: ""
                },
                wife: {
                    selection:"",
                    other: ""
                },
                cycle: {
                    selection:"",
                    other: ""
                },
                ultraSound: {
                    selection:"",
                    other: ""
                },
                hsg: {
                    selection:"",
                    other: ""
                },
                rightTube: {
                    selection:"",
                    other: ""
                },
                leftTube: {
                    selection:"",
                    other: ""
                },
                laparoscopy: ""
            };
            this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.infertility=[]
        },
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.infertility.push({...this.rowToAdd});
            this.resetForm();
          }
        },
        /////////////////////
        openEditDialog(val,index) {
          this.displayEditModal = true;
          this.indexToEdit = index;
          // this.rowToEdit ={...val}
          this.rowToEdit = cloneDeep(val)
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
            // this.infertility[this.indexToEdit]={...this.rowToEdit};
            this.infertility.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.infertility.splice(this.indexToDelete,1);
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
