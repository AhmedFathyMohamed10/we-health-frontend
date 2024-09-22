<template>
  <div class="color-vision">
    <Base>
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t("colourVision.header") }}</h4>
            <ResetButton @reset="reset"></ResetButton>
        </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <!-- Test -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToAdd.test"
                    :label="$t('colourVision.test.label')"
                    :placeholder="$t('colourVision.test.placeholder')"
                    :otherPlaceholder="$t('colourVision.test.otherPlaceholder')"
                    :options="colorVisionTestOptions"
                    :inputType="'text'"
                    :invalidSelection=" $v.rowToAdd.test.selection.$error"
                    :invalidOther="$v.rowToAdd.test.other.$error "
                    >
                    <small
                        v-if="
                            $v.rowToAdd.test.selection.$error &&
                            !$v.rowToAdd.test.selection.required
                        "
                        class="p-invalid"
                        >
                        {{ requiredError($t("colourVision.test.label")) }}
                   </small>
                    <div v-else-if="$v.rowToAdd.test.other.$error && !$v.rowToAdd.test.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.test.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.test.other.minLength &&  $v.rowToAdd.test.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.test.label'), $v.rowToAdd.test.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.test.other.maxLength &&  $v.rowToAdd.test.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.test.label'), $v.rowToAdd.test.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <!-- Od -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToAdd.od"
                    :label="$t('colourVision.od.label')"
                    :placeholder="$t('colourVision.od.placeholder')"
                    :otherPlaceholder="$t('colourVision.od.otherPlaceholder')"
                    :options="colorVisionOdOptions"
                    :inputType="'text'"
                    :invalidSelection="$v.rowToAdd.od.selection.$error "
                    :invalidOther="$v.rowToAdd.od.other.$error  "
                    >
                    <div v-if="$v.rowToAdd.od.other.$error && !$v.rowToAdd.od.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.od.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.od.other.minLength &&  $v.rowToAdd.od.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.od.label'), $v.rowToAdd.od.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.od.other.maxLength &&  $v.rowToAdd.od.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.od.label'), $v.rowToAdd.od.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <!-- Os -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToAdd.os"
                    :label="$t('colourVision.os.label')"
                    :placeholder="$t('colourVision.os.placeholder')"
                    :otherPlaceholder="$t('colourVision.os.otherPlaceholder')"
                    :options="colorVisionOsOptions"
                    :inputType="'text'"
                    :invalidSelection=" $v.rowToAdd.os.selection.$error  "
                    :invalidOther="$v.rowToAdd.os.other.$error  "
                    >
                    <div v-if="$v.rowToAdd.os.other.$error && !$v.rowToAdd.os.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.os.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.os.other.minLength &&  $v.rowToAdd.os.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.os.label'), $v.rowToAdd.os.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.os.other.maxLength &&  $v.rowToAdd.os.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.os.label'), $v.rowToAdd.os.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <!-- Ou -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToAdd.ou"
                    :label="$t('colourVision.ou.label')"
                    :placeholder="$t('colourVision.ou.placeholder')"
                    :otherPlaceholder="$t('colourVision.test.otherPlaceholder')"
                    :options="colorVisionOuOptions"
                    :inputType="'text'"
                    :invalidSelection=" $v.rowToAdd.ou.selection.$error "
                    :invalidOther=" $v.rowToAdd.ou.other.$error "
                    >
                    <div v-if="$v.rowToAdd.ou.other.$error && !$v.rowToAdd.ou.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.ou.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.ou.other.minLength &&  $v.rowToAdd.ou.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.ou.label'), $v.rowToAdd.ou.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToAdd.ou.other.maxLength &&  $v.rowToAdd.ou.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.ou.label'), $v.rowToAdd.ou.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-4">
                <div class="d-flex justify-content-between">
                    <div class="form-group ">
                        <label for="" class="form-label invisible ">{{$t('colourVision.aquired.label')}}</label>
                        <div class="field-checkbox">
                            <Checkbox id="binary" v-model="rowToAdd.aquired" :binary="true" />
                            <label class="mb-0 ms-2" for="binary">{{$t('colourVision.aquired.label')}}</label>
                        </div>
                    </div>
                    <div>
                        <AddButton @add="addRow"></AddButton>
                        <small v-if="v.tests.$error && !v.tests.maxLength" class="p-invalid">
                        {{
                            maxRecordsError(
                            $t("colourVision.header"),
                            v.tests.$params.maxLength.max
                            )
                        }}
                        </small>
                    </div>
                    
                </div>


            </div>
        </div>
    <div class="table-wrapper my-2" v-if="colourVision.tests.length>0">
        <Base >
            <div class="row my-2" >      
            <div class="col-12">
                <div class="table-responsive"  >
                    <table class="table table-sm text-center">
                        <thead>
                            <tr>
                                <th scope="col">{{$t('table.thead.count')}}</th>
                                <th scope="col">{{$t('colourVision.test.label')}}</th>
                                <th scope="col">{{$t('colourVision.od.label')}}</th>
                                <th scope="col">{{$t('colourVision.os.label')}}</th>
                                <th scope="col">{{$t('colourVision.ou.label')}}</th>
                                <th scope="col">{{$t('colourVision.aquired.label')}}</th>
                                <th scope="col">{{$t('table.thead.controls')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(val, index) in colourVision.tests" :key="index">
                                <td class="align-middle">{{parseInt(index)+1}}</td>
                                <td class="align-middle">
                                    <div v-if="val.test.other">
                                    {{val.test.other}}
                                    </div>
                                    <div v-if="val.test.selection" >
                                    {{val.test.selection.value}}
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <div v-if="val.od.other">
                                    {{val.od.other}}
                                    </div>
                                    <div v-if="val.od.selection" >
                                    {{val.od.selection.value}}
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <div v-if="val.os.other">
                                    {{val.os.other}}
                                    </div>
                                    <div v-if="val.os.selection" >
                                    {{val.os.selection.value}}
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <div v-if="val.ou.other">
                                    {{val.ou.other}}
                                    </div>
                                    <div v-if="val.ou.selection" >
                                    {{val.ou.selection.value}}
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <span>{{val.aquired}}</span>
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
        <div class="row">
            <div class="col-md-6">
                    <h4 class="text-center">{{ $t('visualField.amslerGrid.heading') }}</h4>
                    <div class="form-group">
                        <ImageEditor
                            v-model="colourVision.d15_image"
                            :editorControls="colorVisionControls"
                            :staticRef="'colorVision'"
                            :uploadOnly="false"
                        >
                        </ImageEditor>
                    </div>   
                </div>    
        </div>      
        <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{$t('colourVision.note.label')}}</label>
                  <textarea
                    class="form-control"
                    v-model.trim="colourVision.note" 
                    :placeholder="$t('colourVision.note.placeholder')"
                    :class="{
                          'is-invalid':
                          v.note.$invalid  && v.note.$anyError
                      }"
                    ></textarea>
                    <div v-if="! v.note.notContainsHtmlTags &&  v.note.$error" class="invalid-feedback">
                            {{htmlTagsError($t('colourVision.note.label'))}}
                    </div>
                    <div v-else-if="! v.note.minLength &&  v.note.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.note.label'), v.note.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! v.note.maxLength &&  v.note.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.note.label'), v.note.$params.maxLength.max)}}
                    </div>
                </div>
              </div>
        </div>
    </Base>
    <EditDialog :display="displayEditDialog" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow" :header="$t('colourVision.header')">
        <div class="row" v-if="rowToEdit">
            <div class="col-md-12 col-xxl-4">
                <!-- Test -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToEdit.test"
                    :label="$t('colourVision.test.label')"
                    :placeholder="$t('colourVision.test.placeholder')"
                    :otherPlaceholder="$t('colourVision.test.otherPlaceholder')"
                    :options="colorVisionTestOptions"
                    :inputType="'text'"
                    :invalidSelection=" $v.rowToEdit.test.selection.$error  "
                    :invalidOther=" $v.rowToEdit.test.other.$error "
                    >
                    <div v-if="$v.rowToEdit.test.other.$error && !$v.rowToEdit.test.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.test.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.test.other.minLength &&  $v.rowToEdit.test.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.test.label'), $v.rowToEdit.test.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.test.other.maxLength &&  $v.rowToEdit.test.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.test.label'), $v.rowToEdit.test.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-12 col-xxl-4">
                <!-- Od -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToEdit.od"
                    :label="$t('colourVision.od.label')"
                    :placeholder="$t('colourVision.od.placeholder')"
                    :otherPlaceholder="$t('colourVision.od.Placeholder')"
                    colourVision
                    :options="colorVisionOdOptions"
                    :inputType="'text'"
                    :invalidSelection=" $v.rowToEdit.od.selection.$error "
                    :invalidOther=" $v.rowToEdit.od.other.$error "
                    >
                    <div v-if="$v.rowToEdit.od.other.$error && !$v.rowToEdit.od.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.od.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.od.other.minLength &&  $v.rowToEdit.od.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.od.label'), $v.rowToEdit.od.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.od.other.maxLength &&  $v.rowToEdit.od.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.od.label'), $v.rowToEdit.od.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-12 col-xxl-4">
                <!-- Os -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToEdit.os"
                    :label="$t('colourVision.os.label')"
                    :placeholder="$t('colourVision.os.placeholder')"
                    :otherPlaceholder="$t('colourVision.os.Placeholder')"
                    :options="colorVisionOsOptions"
                    :inputType="'text'"
                    :invalidSelection=" $v.rowToEdit.os.selection.$error  "
                    :invalidOther=" $v.rowToEdit.os.other.$error  "
                    >
                    <div v-if="$v.rowToEdit.os.other.$error && !$v.rowToEdit.os.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.os.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.os.other.minLength &&  $v.rowToEdit.os.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.os.label'), $v.rowToEdit.os.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.os.other.maxLength &&  $v.rowToEdit.os.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.os.label'), $v.rowToEdit.os.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-12 col-xxl-4">
                <!-- Ou -->
                <div class="form-group">
                    <CustomDropdown
                    v-model="rowToEdit.ou"
                    :label="$t('colourVision.ou.label')"
                    :placeholder="$t('colourVision.ou.placeholder')"
                    :otherPlaceholder="$t('colourVision.ou.Placeholder')"
                    :options="colorVisionOuOptions"
                    :inputType="'text'"
                    :invalidSelection=" $v.rowToEdit.ou.selection.$error "
                    :invalidOther="$v.rowToEdit.ou.other.$error "
                    >
                    <div v-if="$v.rowToEdit.ou.other.$error && !$v.rowToEdit.ou.other.notContainsHtmlTags" class="invalid-feedback">
                                {{htmlTagsError($t('colourVision.ou.label'))}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.ou.other.minLength &&  $v.rowToEdit.ou.other.$error" class="invalid-feedback">
                            {{minLengthError($t('colourVision.ou.label'), $v.rowToEdit.ou.other.$params.minLength.min)}}
                    </div>
                    <div v-else-if="! $v.rowToEdit.ou.other.maxLength &&  $v.rowToEdit.ou.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('colourVision.ou.label'), $v.rowToEdit.ou.other.$params.maxLength.max)}}
                    </div>                 
                    </CustomDropdown>
                </div>
            </div>
            <div class="col-md-12 col-xxl-4  d-flex align-items-center justify-content-between mt-6">
                <!-- aquired -->
                <div class="form-group">
                    <div class="field-checkbox">
                        <Checkbox id="binary" v-model="rowToEdit.aquired" :binary="true" />
                        <label class="mb-0 ms-2" for="binary">{{$t('colourVision.aquired.label')}}</label>
                    </div>
                </div>

            </div>
        </div>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/ophthalmic/entrance.json"></i18n>
<script>
///////////////////////////////////
import { cloneDeep } from "lodash";
/////////////////////////////////////
import Base from '@/components/global/utilities/Base.vue'
import CustomDropdown from "@/components/global/custom/CustomDropdown.vue";
import { mapGetters } from "vuex";
import entranceOptions from '@/mixins/mr/ophthalmic/options/entranceOptions'
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
import d15Test from "@/assets/global/image-plugin-templates/d15Test.png"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"    
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import ResetButton from "@/components/global/utilities/ResetButton.vue";
// ////////////////////////////////////////////////////////
import {inputError,htmlTagsError,minLengthError,maxLengthError,requiredError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,requiredIf} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
export default {
  mixins: [ entranceOptions],
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
    CustomDropdown,
    Base,
    AddButton,
    EditButton,
    DeleteButton,    
    ImageEditor,
    EditDialog,
    DeleteDialog,
    ResetButton,
  },
  data(){
    return {
    colorVisionControls:{
        templateImage:d15Test,
    },
      rowToAdd: {
        test: {
            selection: null,
            other: "",
        },
        os: {
            selection: null,
            other: "",
        },
        od: {
            selection: null,
            other: "",
        },
        ou: {
            selection: null,
            other: "",
        },
        aquired: false
      },
      rowToEdit:{

      },
      indexToEdit:null,
      displayEditDialog: false,
      indexToDelete:null,
      displayDeleteDialog: false,
    }
  },

////////////////////////////////
  computed: {
    ...mapGetters("detailsOphthalmic/ophthalmic", ["getColorVision"]),
    colourVision: {
      get() {
        return this.getColorVision;
      },
      set(value) {
        this.$store.dispatch("detailsOphthalmic/ophthalmic/setColorVision", value);
      },
    }
  },
  ////////////////////////////
  validations:{
    rowToAdd:{
        test: {
            selection:{
                required: requiredIf(function () {
                 return !this.rowToAdd.test.other;
          }),
            },
            other: {
                required: requiredIf(function () {
                return !this.rowToAdd.test.selection;
          }),
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
        os: {
            selection:{},
            other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
        od: {
            selection:{},
            other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
        ou: {
            selection:{},
            other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
    },
    rowToEdit:{
        test: {
            selection:{
                required: requiredIf(function () {
                 return !this.rowToEdit.test.other;
                }),
            },
            other: {
                required: requiredIf(function () {
                 return !this.rowToEdit.test.selection;
                }),
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
        os: {
            selection:{},
            other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
        od: {
            selection:{},
            other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
        ou: {
            selection:{},
            other: {
                minLength: minLength(1),
                maxLength: maxLength(255),
                notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
                },
            },
        },
    },
  },
////////////////////////////
  methods: {
        inputError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
        requiredError,
        maxRecordsError,

///////////////////////////////////////
resetForm() { 
      this.rowToAdd = {
        test: {
                selection: null,
                other: "",
            },
            os: {
                selection: null,
                other: "",
            },
            od: {
                selection: null,
                other: "",
            },
            ou: {
                selection: null,
                other: "",
            },
            aquired: false
        };
      this.$v.rowToAdd.$reset();
    },
    reset() {
      this.resetForm();
     this.colourVision= {
        tests:[],
        d15_image: "",
        note: "",
      },
      this.v.$reset();
    },
        /////////////////////////
        addRow(){
            this.v.$touch();
            this.$v.rowToAdd.$touch();
            if (!(this.v.$invalid || this.$v.rowToAdd.$invalid)) {
                this.colourVision.tests.push({ ...this.rowToAdd });
                this.resetForm();
            }
          
        },
        /////////////////////
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
          if (!this.$v.rowToEdit.$invalid){
            this.colourVision.tests[this.indexToEdit]={...this.rowToEdit};
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
            this.colourVision.tests.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },

};
</script>

<style>
.editw40{
     height: 40% !important;
     width: 40% !important;
     display: block;

}
</style>