<template>
  <div class="infertility">
    <!-- Hormone -->
    <Base class="my-2">    
      <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <h4>{{ $t('hormone.header') }}</h4>
                <ResetButton @reset="reset"></ResetButton>            
            </div>
        </div>
        <div class="row">
            <!-- count -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.count.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.count"
                    :placeholder="$t('hormone.count.placeholder')"
                    class="form-control" 
                    :class="{  'is-invalid': $v.rowToAdd.count.$error}"
                    >
                    <div v-if="$v.rowToAdd.count.$error && !$v.rowToAdd.count.required" class="invalid-feedback">
                            {{requiredError($t('hormone.count.label'))}}
                    </div>
                    <div v-else-if="$v.rowToAdd.count.$error && !$v.rowToAdd.count.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.count.label'))}}
                    </div>
                </div>
            </div>
            <!-- gradeA -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.gradeA.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.gradeA"
                    :placeholder="$t('hormone.gradeA.placeholder')" 
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToAdd.gradeA.$error}"
                    >
                    <div v-if="$v.rowToAdd.gradeA.$error && !$v.rowToAdd.gradeA.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.gradeA.label'))}}
                    </div>
                </div>
            </div>
            <!-- gradeB -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.gradeB.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.gradeB"
                    :placeholder="$t('hormone.gradeB.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToAdd.gradeB.$error}"
                    >
                    <div v-if="$v.rowToAdd.gradeB.$error && !$v.rowToAdd.gradeB.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.gradeB.label'))}}
                    </div>
                </div>
            </div>
            <!-- Other -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('hormone.other.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.other" 
                        :placeholder="$t('hormone.other.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.other.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.other.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.other.$error && !$v.rowToAdd.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('hormone.other.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.other.minLength &&  $v.rowToAdd.other.$error" class="invalid-feedback">
                            {{minLengthError($t('hormone.other.label'), $v.rowToAdd.other.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.other.maxLength &&  $v.rowToAdd.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('hormone.other.label'), $v.rowToAdd.other.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- lh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.lh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.lh"
                    :placeholder="$t('hormone.lh.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToAdd.lh.$error  }"
                    >
                    <div v-if="$v.rowToAdd.lh.$error && !$v.rowToAdd.lh.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.lh.label'))}}
                    </div>
                </div>
            </div>
            <!-- fsh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.fsh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.fsh"
                    :placeholder="$t('hormone.fsh.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToAdd.fsh.$error}"
                    >
                    <div v-if="$v.rowToAdd.fsh.$error && !$v.rowToAdd.fsh.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.fsh.label'))}}
                    </div>
                </div>
            </div>
            <!-- tsh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.tsh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.tsh"
                    :placeholder="$t('hormone.tsh.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToAdd.tsh.$error }"
                    >
                    <div v-if="$v.rowToAdd.tsh.$error && !$v.rowToAdd.tsh.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.tsh.label'))}}
                    </div>
                </div>
            </div>
            <!-- amh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.amh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.amh"
                    :placeholder="$t('hormone.amh.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToAdd.amh.$error}"
                    >
                    <div v-if="$v.rowToAdd.amh.$error && !$v.rowToAdd.amh.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.amh.label'))}}
                    </div>
                </div>
            </div>
            <!-- prolactin -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.prolactin.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.prolactin"
                    :placeholder="$t('hormone.prolactin.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToAdd.prolactin.$error}"
                    >
                    <div v-if="$v.rowToAdd.prolactin.$error && !$v.rowToAdd.prolactin.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.prolactin.label'))}}
                    </div>
                </div>
            </div>
            <!-- progestron -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.progestron.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.progestron"
                    :placeholder="$t('hormone.progestron.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToAdd.progestron.$error}"
                    >
                    <div v-if="$v.rowToAdd.progestron.$error && !$v.rowToAdd.progestron.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.progestron.label'))}}
                    </div>
                </div>
            </div>
            <!-- e2 -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.e2.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToAdd.e2"
                    :placeholder="$t('hormone.e2.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToAdd.e2.$error}"
                    >
                    <div v-if="$v.rowToAdd.e2.$error && !$v.rowToAdd.e2.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.e2.label'))}}
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
    <div class="table-wrapper my-2" v-if="hormones.length>0">
      <Base >
        <div class="row my-2">
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('hormone.count.label')}}</th>
                            <th scope="col">{{$t('hormone.gradeA.label')}}</th>
                            <th scope="col">{{$t('hormone.gradeB.label')}}</th>
                            <th scope="col">{{$t('hormone.other.label')}}</th>
                            <th scope="col">{{$t('hormone.lh.label')}}</th>
                            <th scope="col">{{$t('hormone.fsh.label')}}</th>
                            <th scope="col">{{$t('hormone.tsh.label')}}</th>
                            <th scope="col">{{$t('hormone.amh.label')}}</th>
                            <th scope="col">{{$t('hormone.prolactin.label')}}</th>
                            <th scope="col">{{$t('hormone.progestron.label')}}</th>
                            <th scope="col">{{$t('hormone.e2.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in hormones" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.count}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.gradeA}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.gradeB}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.other}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.lh}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.fsh}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.tsh}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.amh}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.prolactin}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.progestron}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.e2}}</span>
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
    <EditDialog :header="$t('hormone.header')" :display="displayEditModal" @close="closeEditDialog" @cancel="closeEditDialog" @save="editRow">    
        <div class="row">
            <!-- count -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.count.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.count"
                    :placeholder="$t('hormone.count.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToEdit.count.$error}"
                    >
                    <div v-if="$v.rowToEdit.count.$error && !$v.rowToEdit.count.required" class="invalid-feedback">
                            {{requiredError($t('hormone.count.label'))}}
                    </div>
                    <div v-if="$v.rowToEdit.count.$error && !$v.rowToEdit.count.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.count.label'))}}
                    </div>
                </div>
            </div>
            <!-- gradeA -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.gradeA.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.gradeA"
                    :placeholder="$t('hormone.gradeA.placeholder')" 
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.gradeA.$error }"
                    >
                    <div v-if="$v.rowToEdit.gradeA.$error && !$v.rowToEdit.gradeA.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.gradeA.label'))}}
                    </div>
                </div>
            </div>
            <!-- gradeB -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.gradeB.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.gradeB"
                    :placeholder="$t('hormone.gradeB.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid': $v.rowToEdit.gradeB.$error }"
                    >
                    <div v-if="$v.rowToEdit.gradeB.$error && !$v.rowToEdit.gradeB.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.gradeB.label'))}}
                    </div>
                </div>
            </div>
            <!-- Other -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('hormone.other.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToEdit.other" 
                        :placeholder="$t('hormone.other.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToEdit.other.$error)
                            ||
                            (serializer_error.rowToEdit?serializer_error.rowToEdit.other.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToEdit.other.$error && !$v.rowToEdit.other.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('hormone.other.label'))}}
                    </div>
                    <div v-if="! $v.rowToEdit.other.minLength &&  $v.rowToEdit.other.$error" class="invalid-feedback">
                            {{minLengthError($t('hormone.other.label'), $v.rowToEdit.other.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToEdit.other.maxLength &&  $v.rowToEdit.other.$error" class="invalid-feedback">
                            {{maxLengthError($t('hormone.other.label'), $v.rowToEdit.other.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- lh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.lh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.lh"
                    :placeholder="$t('hormone.lh.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.lh.$error }"
                    >
                    <div v-if="$v.rowToEdit.lh.$error && !$v.rowToEdit.lh.numeric" class="invalid-feedback">
                        {{numericError($t('hormone.lh.label'))}}
                    </div>
                </div>
            </div>
            <!-- fsh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.fsh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.fsh"
                    :placeholder="$t('hormone.fsh.placeholder')"
                    class="form-control" 
                    :class="{'is-invalid':$v.rowToEdit.fsh.$error}"
                    >
                    <div v-if="$v.rowToEdit.fsh.$error && !$v.rowToEdit.fsh.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.fsh.label'))}}
                    </div>
                </div>
            </div>
            <!-- tsh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.tsh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.tsh"
                    :placeholder="$t('hormone.tsh.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToEdit.tsh.$error}"
                    >
                    <div v-if="$v.rowToEdit.tsh.$error && !$v.rowToEdit.tsh.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.tsh.label'))}}
                    </div>
                </div>
            </div>
            <!-- amh -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.amh.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.amh"
                    :placeholder="$t('hormone.amh.placeholder')"
                    class="form-control" 
                    :class="{  'is-invalid':$v.rowToEdit.amh.$error}"
                    >
                    <div v-if="$v.rowToEdit.amh.$error && !$v.rowToEdit.amh.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.amh.label'))}}
                    </div>
                </div>
            </div>
            <!-- prolactin -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.prolactin.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.prolactin"
                    :placeholder="$t('hormone.prolactin.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid': $v.rowToEdit.prolactin.$error}"
                    >
                    <div v-if="$v.rowToEdit.prolactin.$error && !$v.rowToEdit.prolactin.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.prolactin.label'))}}
                    </div>
                </div>
            </div>
            <!-- progestron -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.progestron.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.progestron"
                    :placeholder="$t('hormone.progestron.placeholder')"
                    class="form-control" 
                    :class="{  'is-invalid': $v.rowToEdit.progestron.$error }"
                    >
                    <div v-if="$v.rowToEdit.progestron.$error && !$v.rowToEdit.progestron.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.progestron.label'))}}
                    </div>
                </div>
            </div>
            <!-- e2 -->
            <div class="col-md-4">
                <div class="form-group">
                <label for="" class="form-label">{{$t('hormone.e2.label')}}</label>
                <input 
                    type="number" 
                    v-model="rowToEdit.e2"
                    :placeholder="$t('hormone.e2.placeholder')"
                    class="form-control" 
                    :class="{ 'is-invalid':  $v.rowToEdit.e2.$error }"
                    >
                    <div v-if="$v.rowToEdit.e2.$error && !$v.rowToEdit.e2.numeric" class="invalid-feedback">
                            {{numericError($t('hormone.e2.label'))}}
                    </div>
                </div>
            </div>
            <!-- addRow btn -->
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
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
import { mapActions,mapGetters } from "vuex";
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,numericError,requiredError} from '@/validation/errors'
import {minLength,maxLength,numeric,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
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
        count: null, // number
        gradeA: null, // number
        gradeB: null, // number
        other: "",
        lh: null, // number
        fsh: null, // number
        tsh: null, // number
        amh: null, // number
        prolactin: null, // number
        progestron: null, // number
        e2: null // number
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
        count: {
            numeric,
            required
        },
        gradeA: {
            numeric
        },
        gradeB: {
            numeric
        },
        other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        lh: {
            numeric
        },
        fsh: {
            numeric
        },
        tsh: {
            numeric
        },
        amh: {
            numeric
        },
        prolactin: {
            numeric
        },
        progestron: {
            numeric
        },
        e2: {
            numeric
        }
    },
    rowToEdit:{
        count: {
            numeric,
            required
        },
        gradeA: {
            numeric
        },
        gradeB: {
            numeric
        },
        other: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        lh: {
            numeric
        },
        fsh: {
            numeric
        },
        tsh: {
            numeric
        },
        amh: {
            numeric
        },
        prolactin: {
            numeric
        },
        progestron: {
            numeric
        },
        e2: {
            numeric
        }
    },
  },
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGynecology/gynecology',{
        'getHormones':'getHormones'
    }),
    hormones:{
      get() {
          return this.getHormones;
      },
      set(value) {
          this.setHormones(value);
      }
    },
  },
  methods: {
        htmlTagsError,
        maxLengthError,
        minLengthError,
        numericError,
        requiredError,
        ...mapActions("detailsGynecology/gynecology", [
          "setHormones"
        ]),
        resetForm(){
          this.rowToAdd ={
              count: null,
              gradeA: null,
              gradeB: null,
              other: "",
              lh: null,
              fsh: null,
              tsh: null,
              amh: null,
              prolactin: null,
              progestron: null,
              e2: null
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
          this.resetForm();
          this.hormones =[]
        },
        // Hormone
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.hormones.push({...this.rowToAdd});
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
            // this.diagnosis[this.indexToEdit]={...this.rowToEdit};
            this.hormones.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.hormones.splice(this.indexToDelete,1);
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
