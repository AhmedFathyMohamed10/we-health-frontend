<template>
  <div class="pmBleeding">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('pmBleeding.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('pmBleeding.date.label') }}</label>
                  <Calendar
                      v-model="rowToAdd.date"
                      :placeholder="$t('pmBleeding.date.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToAdd.date.$error) ||
                          (serializer_error.expirationDate? serializer_error.rowToAdd.date.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateDate($event)"
                  />
                  <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.required" 
                  class="p-invalid" >
                      {{ requiredError($t('pmBleeding.date.label'))}}
                  </small>
                  <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate" 
                  class="p-invalid" >
                      {{ dateError($t('pmBleeding.date.label'))}}
                  </small>
                </div>
            </div>
            <!-- fibroid -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pmBleeding.fibroid.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.fibroid" 
                        :placeholder="$t('pmBleeding.fibroid.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.fibroid.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.fibroid.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.fibroid.$error && !$v.rowToAdd.fibroid.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pmBleeding.fibroid.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.fibroid.minLength &&  $v.rowToAdd.fibroid.$error" class="invalid-feedback">
                            {{minLengthError($t('pmBleeding.fibroid.label'), $v.rowToAdd.fibroid.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.fibroid.maxLength &&  $v.rowToAdd.fibroid.$error" class="invalid-feedback">
                            {{maxLengthError($t('pmBleeding.fibroid.label'), $v.rowToAdd.fibroid.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- endometrium -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pmBleeding.endometrium.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.endometrium" 
                        :placeholder="$t('pmBleeding.endometrium.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.endometrium.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.endometrium.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.endometrium.$error && !$v.rowToAdd.endometrium.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pmBleeding.endometrium.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.endometrium.minLength &&  $v.rowToAdd.endometrium.$error" class="invalid-feedback">
                            {{minLengthError($t('pmBleeding.endometrium.label'), $v.rowToAdd.endometrium.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.endometrium.maxLength &&  $v.rowToAdd.endometrium.$error" class="invalid-feedback">
                            {{maxLengthError($t('pmBleeding.endometrium.label'), $v.rowToAdd.endometrium.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- ovaries -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pmBleeding.ovaries.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.ovaries" 
                        :placeholder="$t('pmBleeding.ovaries.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.ovaries.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.ovaries.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.ovaries.$error && !$v.rowToAdd.ovaries.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pmBleeding.ovaries.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.ovaries.minLength &&  $v.rowToAdd.ovaries.$error" class="invalid-feedback">
                            {{minLengthError($t('pmBleeding.ovaries.label'), $v.rowToAdd.ovaries.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.ovaries.maxLength &&  $v.rowToAdd.ovaries.$error" class="invalid-feedback">
                            {{maxLengthError($t('pmBleeding.ovaries.label'), $v.rowToAdd.ovaries.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- nextVisit -->
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('pmBleeding.nextVisit.label') }}</label>
                <Calendar
                    v-model="rowToAdd.nextVisit"
                    :placeholder="$t('pmBleeding.nextVisit.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToAdd.nextVisit.$error && !$v.rowToAdd.nextVisit.validDate) ||
                        (serializer_error.expirationDate? serializer_error.rowToAdd.nextVisit.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateNextVisitDate"
                />
                <small
                    class="p-invalid"
                    v-if="$v.rowToAdd.nextVisit.$error && !$v.rowToAdd.nextVisit.validDate"
                >
                    {{ dateError($t('pmBleeding.nextVisit.label'))}}
                </small>
                
              </div>
            </div>
            <!-- addRow btn -->
            <div class="col-md-4">
                <AddButton @add="addRow"></AddButton>
            </div>
        </div>
    </Base>
    <!-- Table -->
    <div class="table-wrapper my-2" v-if="pmBleeding.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('pmBleeding.date.label')}}</th>
                            <th scope="col">{{$t('pmBleeding.fibroid.label')}}</th>
                            <th scope="col">{{$t('pmBleeding.endometrium.label')}}</th>
                            <th scope="col">{{$t('pmBleeding.ovaries.label')}}</th>
                            <th scope="col">{{$t('pmBleeding.nextVisit.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in pmBleeding" :key="index">
                            <td class="align-middle">{{parseInt(index)+1}}</td>
                            <td class="align-middle">
                                <span>{{val.date}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.fibroid}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.endometrium}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.ovaries}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.nextVisit}}</span>
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
    <EditDialog :header="$t('pmBleeding.header')" :display="displayEditModal" @cancel="closeEditDialog" @close="closeEditDialog" @save="editRow">    
      <div class="row">
          <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('pmBleeding.date.label') }}</label>
                <Calendar
                    v-model="rowToEdit.date"
                    :placeholder="$t('pmBleeding.date.placeholder')"
                    :showIcon="true"
                    :class="{
                    'p-invalid':
                        ($v.rowToEdit.date.$error) ||
                        (serializer_error.expirationDate? serializer_error.rowToEdit.date.length > 0: false)
                    }"
                    dateFormat="mm-dd-yy"
                    @date-select="formateDateEdit($event)"
                />
                <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.required" 
                  class="p-invalid" >
                      {{ requiredError($t('pmBleeding.date.label'))}}
                </small>
                <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
                   class="p-invalid">
                    {{ dateError($t('pmBleeding.date.label'))}}
                </small>
              </div>
          </div>
          <!-- fibroid -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pmBleeding.fibroid.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.fibroid" 
                      :placeholder="$t('pmBleeding.fibroid.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.fibroid.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.fibroid.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.fibroid.$error  && !$v.rowToEdit.fibroid.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pmBleeding.fibroid.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.fibroid.minLength &&  $v.rowToEdit.fibroid.$error" class="invalid-feedback">
                          {{minLengthError($t('pmBleeding.fibroid.label'), $v.rowToEdit.fibroid.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.fibroid.maxLength &&  $v.rowToEdit.fibroid.$error" class="invalid-feedback">
                          {{maxLengthError($t('pmBleeding.fibroid.label'), $v.rowToEdit.fibroid.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- endometrium -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pmBleeding.endometrium.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.endometrium" 
                      :placeholder="$t('pmBleeding.endometrium.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.endometrium.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.endometrium.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.endometrium.$error && !$v.rowToEdit.endometrium.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pmBleeding.endometrium.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.endometrium.minLength &&  $v.rowToEdit.endometrium.$error" class="invalid-feedback">
                          {{minLengthError($t('pmBleeding.endometrium.label'), $v.rowToEdit.endometrium.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.endometrium.maxLength &&  $v.rowToEdit.endometrium.$error" class="invalid-feedback">
                          {{maxLengthError($t('pmBleeding.endometrium.label'), $v.rowToEdit.endometrium.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- ovaries -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pmBleeding.ovaries.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.ovaries" 
                      :placeholder="$t('pmBleeding.ovaries.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.ovaries.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.ovaries.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.ovaries.$error && !$v.rowToEdit.ovaries.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pmBleeding.ovaries.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.ovaries.minLength &&  $v.rowToEdit.ovaries.$error" class="invalid-feedback">
                          {{minLengthError($t('pmBleeding.ovaries.label'), $v.rowToEdit.ovaries.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.ovaries.maxLength &&  $v.rowToEdit.ovaries.$error" class="invalid-feedback">
                          {{maxLengthError($t('pmBleeding.ovaries.label'), $v.rowToEdit.ovaries.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- nextVisit -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{ $t('pmBleeding.nextVisit.label') }}</label>
                  <Calendar
                      v-model="rowToEdit.nextVisit"
                      :placeholder="$t('pmBleeding.nextVisit.placeholder')"
                      :showIcon="true"
                      :class="{
                      'p-invalid':
                          ($v.rowToEdit.nextVisit.$error && !$v.rowToEdit.nextVisit.validDate) ||
                          (serializer_error.expirationDate? serializer_error.rowToEdit.nextVisit.length > 0: false)
                      }"
                      dateFormat="mm-dd-yy"
                      @date-select="formateNextVisitDateEdit"
                  />
                  <small
                      class="p-invalid"
                      v-if="$v.rowToEdit.nextVisit.$error && !$v.rowToEdit.nextVisit.validDate"
                  >
                      {{ dateError($t('pmBleeding.nextVisit.label'))}}
                  </small>
              </div>
          </div>
      </div>
    </EditDialog>
    <!-- Delete -->
    <DeleteDialog :display="displayDeleteModal" @cancel="closeDeleteDialog"  @delete="deleteRow"></DeleteDialog> 
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/mr/gynecology/gyn.json"></i18n>
<script>
import { mapActions,mapGetters } from "vuex";
// ////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,dateError,requiredError} from '@/validation/errors'
import {minLength,maxLength,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags, validDate} from "@/validation/customValidators";
import { convertDate } from "@/helpers/utilities";
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
        date: "", // date 
        fibroid: "", // date 
        endometrium: "", // text
        ovaries: "", // text
        nextVisit: "" // date
      },
      rowToEdit:{

      },
      indexToEdit:null,
      displayEditModal: false,
      indexToDelete:null,
      displayDeleteModal: false,
      errorDate: false,
      errorDateEdit: false
    }
  },
  validations:{
    rowToAdd:{
        date: {
          required,
          validDate(value) {
              return validDate(value);
          },
        }, // date 
        fibroid: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        endometrium: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        ovaries: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        nextVisit: {
            validDate(value) {
                return validDate(value);
            },
        }
    },
    rowToEdit:{ 
        date: {
          required,
          validDate(value) {
              return validDate(value);
          },
        }, // date 
        fibroid: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        endometrium: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        ovaries: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        nextVisit: {
            validDate(value) {
                return validDate(value);
            },
        }
    }
  },
  

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters('detailsGynecology/gynecology',{
        'getPmBleeding':'getPmBleeding',
    }),
    pmBleeding:{
      get() {
          return this.getPmBleeding;
      },
      set(value) {
          this.setPmBleeding(value);
      }
    },
  },
  watch: {},
  methods: {
        dateError,
        htmlTagsError,
        maxLengthError,
        minLengthError,
        requiredError,
        ...mapActions("detailsGynecology/gynecology", [
            "setPmBleeding",
        ]),
        formateDate(event){
          this.rowToAdd.date = convertDate(event);  
        },
        formateNextVisitDate(event){
          this.rowToAdd.nextVisit = convertDate(event);
        },
        formateDateEdit(event){
          this.rowToEdit.date = convertDate(event);  
        },
        formateNextVisitDateEdit(event){
          this.rowToEdit.nextVisit = convertDate(event);
        },
        resetForm(){
          this.rowToAdd = {
            date: "", // date 
            fibroid: "", // date 
            endometrium: "", // text
            ovaries: "", // text
            nextVisit: "" // date
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.pmBleeding=[]
        },
        /////////////////////////
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.pmBleeding.push({...this.rowToAdd});
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
            // this.pmBleeding[this.indexToEdit]={...this.rowToEdit};
            this.pmBleeding.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.pmBleeding.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },
};
</script>
<style scoped>

</style>
