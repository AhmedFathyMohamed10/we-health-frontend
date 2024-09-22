<template>
  <div class="pBleeding">
    <Base>    
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <h4>{{ $t('pBleeding.header') }}</h4>
            <ResetButton @reset="reset"></ResetButton>            
          </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                  <label class="form-label">{{ $t('pBleeding.date.label') }}</label>
                  <Calendar
                      v-model="rowToAdd.date"
                      :placeholder="$t('pBleeding.date.placeholder')"
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
                        class="p-invalid">
                      {{ requiredError($t('pBleeding.date.label'))}}
                  </small>
                  <small v-if="$v.rowToAdd.date.$error && !$v.rowToAdd.date.validDate"
                        class="p-invalid">
                      {{ dateError($t('pBleeding.date.label'))}}
                  </small>
                </div>
            </div>
            <!-- fibroid -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pBleeding.fibroid.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.fibroid" 
                        :placeholder="$t('pBleeding.fibroid.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.fibroid.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.fibroid.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.fibroid.$error && !$v.rowToAdd.fibroid.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pBleeding.fibroid.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.fibroid.minLength &&  $v.rowToAdd.fibroid.$error" class="invalid-feedback">
                            {{minLengthError($t('pBleeding.fibroid.label'), $v.rowToAdd.fibroid.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.fibroid.maxLength &&  $v.rowToAdd.fibroid.$error" class="invalid-feedback">
                            {{maxLengthError($t('pBleeding.fibroid.label'), $v.rowToAdd.fibroid.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- endometrium -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pBleeding.endometrium.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.endometrium" 
                        :placeholder="$t('pBleeding.endometrium.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.endometrium.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.endometrium.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.endometrium.$error && !$v.rowToAdd.endometrium.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pBleeding.endometrium.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.endometrium.minLength &&  $v.rowToAdd.endometrium.$error" class="invalid-feedback">
                            {{minLengthError($t('pBleeding.endometrium.label'), $v.rowToAdd.endometrium.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.endometrium.maxLength &&  $v.rowToAdd.endometrium.$error" class="invalid-feedback">
                            {{maxLengthError($t('pBleeding.endometrium.label'), $v.rowToAdd.endometrium.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- rightOv -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pBleeding.rightOv.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.rightOv" 
                        :placeholder="$t('pBleeding.rightOv.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.rightOv.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.rightOv.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.rightOv.$error && !$v.rowToAdd.rightOv.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pBleeding.rightOv.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.rightOv.minLength &&  $v.rowToAdd.rightOv.$error" class="invalid-feedback">
                            {{minLengthError($t('pBleeding.rightOv.label'), $v.rowToAdd.rightOv.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.rightOv.maxLength &&  $v.rowToAdd.rightOv.$error" class="invalid-feedback">
                            {{maxLengthError($t('pBleeding.rightOv.label'), $v.rowToAdd.rightOv.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- leftOv -->
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-label">{{$t('pBleeding.leftOv.label')}}</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="rowToAdd.leftOv" 
                        :placeholder="$t('pBleeding.leftOv.placeholder')" 
                        :class="{
                            'is-invalid':
                            ($v.rowToAdd.leftOv.$error)
                            ||
                            (serializer_error.rowToAdd?serializer_error.rowToAdd.leftOv.length>0:false)
                        }" 
                    >
                    <div v-if="$v.rowToAdd.leftOv.$error && !$v.rowToAdd.leftOv.notContainsHtmlTags" class="invalid-feedback">
                            {{htmlTagsError($t('pBleeding.leftOv.label'))}}
                    </div>
                    <div v-if="! $v.rowToAdd.leftOv.minLength &&  $v.rowToAdd.leftOv.$error" class="invalid-feedback">
                            {{minLengthError($t('pBleeding.leftOv.label'), $v.rowToAdd.leftOv.$params.minLength.min)}}
                    </div>
                    <div v-if="! $v.rowToAdd.leftOv.maxLength &&  $v.rowToAdd.leftOv.$error" class="invalid-feedback">
                            {{maxLengthError($t('pBleeding.leftOv.label'), $v.rowToAdd.leftOv.$params.maxLength.max)}}
                    </div> 
                </div>
            </div>
            <!-- nextVisit -->
            <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('pBleeding.nextVisit.label') }}</label>
                <Calendar
                    v-model="rowToAdd.nextVisit"
                    :placeholder="$t('pBleeding.nextVisit.placeholder')"
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
                    {{ dateError($t('pBleeding.nextVisit.label'))}}
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
    <div class="table-wrapper my-2" v-if="pBleeding.length>0">
      <Base >
        <div class="row my-2">      
          <div class="col-12">
            <div class="table-responsive">
                <table class="table table-sm text-center">
                    <thead>
                        <tr>
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('pBleeding.date.label')}}</th>
                            <th scope="col">{{$t('pBleeding.fibroid.label')}}</th>
                            <th scope="col">{{$t('pBleeding.endometrium.label')}}</th>
                            <th scope="col">{{$t('pBleeding.rightOv.label')}}</th>
                            <th scope="col">{{$t('pBleeding.leftOv.label')}}</th>
                            <th scope="col">{{$t('pBleeding.nextVisit.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(val, index) in pBleeding" :key="index">
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
                                <span>{{val.rightOv}}</span>
                            </td>
                            <td class="align-middle">
                                <span>{{val.leftOv}}</span>
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
    <EditDialog :header="$t('pBleeding.header')"  :display="displayEditModal" @cancel="closeEditDialog" @close="closeEditDialog" @save="editRow">    
      <div class="row">
          <div class="col-md-4">
              <div class="form-group">
                <label class="form-label">{{ $t('pBleeding.date.label') }}</label>
                <Calendar
                    v-model="rowToEdit.date"
                    :placeholder="$t('pBleeding.date.placeholder')"
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
                        class="p-invalid">
                      {{ requiredError($t('pBleeding.date.label'))}}
                  </small>
                <small v-if="$v.rowToEdit.date.$error && !$v.rowToEdit.date.validDate"
                      class="p-invalid">
                    {{ dateError($t('pBleeding.date.label'))}}
                </small>
              </div>
          </div>
          <!-- fibroid -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pBleeding.fibroid.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.fibroid" 
                      :placeholder="$t('pBleeding.fibroid.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.fibroid.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.fibroid.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.fibroid.$error && !$v.rowToEdit.fibroid.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pBleeding.fibroid.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.fibroid.minLength &&  $v.rowToEdit.fibroid.$error" class="invalid-feedback">
                          {{minLengthError($t('pBleeding.fibroid.label'), $v.rowToEdit.fibroid.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.fibroid.maxLength &&  $v.rowToEdit.fibroid.$error" class="invalid-feedback">
                          {{maxLengthError($t('pBleeding.fibroid.label'), $v.rowToEdit.fibroid.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- endometrium -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pBleeding.endometrium.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.endometrium" 
                      :placeholder="$t('pBleeding.endometrium.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.endometrium.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.endometrium.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.endometrium.$error && !$v.rowToEdit.endometrium.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pBleeding.endometrium.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.endometrium.minLength &&  $v.rowToEdit.endometrium.$error" class="invalid-feedback">
                          {{minLengthError($t('pBleeding.endometrium.label'), $v.rowToEdit.endometrium.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.endometrium.maxLength &&  $v.rowToEdit.endometrium.$error" class="invalid-feedback">
                          {{maxLengthError($t('pBleeding.endometrium.label'), $v.rowToEdit.endometrium.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- rightOv -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pBleeding.rightOv.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.rightOv" 
                      :placeholder="$t('pBleeding.rightOv.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.rightOv.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.rightOv.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.rightOv.$error && !$v.rowToEdit.rightOv.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pBleeding.rightOv.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.rightOv.minLength &&  $v.rowToEdit.rightOv.$error" class="invalid-feedback">
                          {{minLengthError($t('pBleeding.rightOv.label'), $v.rowToEdit.rightOv.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.rightOv.maxLength &&  $v.rowToEdit.rightOv.$error" class="invalid-feedback">
                          {{maxLengthError($t('pBleeding.rightOv.label'), $v.rowToEdit.rightOv.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- leftOv -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{$t('pBleeding.leftOv.label')}}</label>
                  <input
                      type="text"
                      class="form-control"
                      v-model="rowToEdit.leftOv" 
                      :placeholder="$t('pBleeding.leftOv.placeholder')" 
                      :class="{
                          'is-invalid':
                          ($v.rowToEdit.leftOv.$error)
                          ||
                          (serializer_error.rowToEdit?serializer_error.rowToEdit.leftOv.length>0:false)
                      }" 
                  >
                  <div v-if="$v.rowToEdit.leftOv.$error && !$v.rowToEdit.leftOv.notContainsHtmlTags" class="invalid-feedback">
                          {{htmlTagsError($t('pBleeding.rightOv.label'))}}
                  </div>
                  <div v-if="! $v.rowToEdit.leftOv.minLength &&  $v.rowToEdit.leftOv.$error" class="invalid-feedback">
                          {{minLengthError($t('pBleeding.leftOv.label'), $v.rowToEdit.leftOv.$params.minLength.min)}}
                  </div>
                  <div v-if="! $v.rowToEdit.leftOv.maxLength &&  $v.rowToEdit.leftOv.$error" class="invalid-feedback">
                          {{maxLengthError($t('pBleeding.leftOv.label'), $v.rowToEdit.leftOv.$params.maxLength.max)}}
                  </div> 
              </div>
          </div>
          <!-- nextVisit -->
          <div class="col-md-4">
              <div class="form-group">
                  <label class="form-label">{{ $t('pBleeding.nextVisit.label') }}</label>
                  <Calendar
                      v-model="rowToEdit.nextVisit"
                      :placeholder="$t('pBleeding.nextVisit.placeholder')"
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
                      {{ dateError($t('pBleeding.nextVisit.label'))}}
                  </small>
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
        fibroid: "",
        endometrium: "", // text
        rightOv: "", // text
        leftOv: "", // text
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
        rightOv: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        leftOv: {
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
        rightOv: {
            minLength: minLength(1),
            maxLength: maxLength(255),
            notContainsHtmlTags(value) {
                return notContainsHtmlTags(value);
            },
        },
        leftOv: {
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
        'getPBleeding':'getPBleeding',
    }),
    pBleeding:{
      get() {
          return this.getPBleeding;
      },
      set(value) {
          this.setPBleeding(value);
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
            "setPBleeding",
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
            fibroid: "",  
            endometrium: "", // text
            rightOv: "", // text
            leftOv: "", // text
            nextVisit: "" // date
          }
          this.$v.rowToAdd.$reset();
        },
        reset(){
            this.resetForm();
            this.pBleeding=[]
        },
        /////////////////////////
        addRow(){
          this.v.$touch();
          this.$v.rowToAdd.$touch();
          if(!( this.v.$invalid ||  this.$v.rowToAdd.$invalid )){
            this.pBleeding.push({...this.rowToAdd});
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
            // this.pBleeding[this.indexToEdit]={...this.rowToEdit};
            this.pBleeding.splice(this.indexToEdit,1,{...this.rowToEdit});
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
            this.pBleeding.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
    },
};
</script>
<style scoped>

</style>
