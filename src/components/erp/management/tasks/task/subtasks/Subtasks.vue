<template>
<div class="subtask">
    <!-- <Base>   -->
    <!-- Form of task -->
    <!-- Form -->
    <div class="row">
      <div class="col-md-6 col-xl-4">
        <!-- title -->
        <div class="form-group">
          <label for="" class="form-label">{{$t("form.title.label")}}</label>
          <input
            type="text"
            v-model="rowToAdd.title"
            :placeholder="$t('form.title.placeholder')"
            class="form-control"
            :class="{'is-invalid': $v.rowToAdd.title.$error}"
          />
          <div v-if="!$v.rowToAdd.title.required && $v.rowToAdd.title.$error " class="invalid-feedback">
            {{ requiredError($t("form.title.label")) }}
          </div>
          <div v-else-if="!$v.rowToAdd.title.minLength && $v.rowToAdd.title.$error" class="invalid-feedback" >
            {{minLengthError($t("form.title.label"),$v.rowToAdd.title.$params.minLength.min)}}
          </div>
          <div v-else-if=" !$v.rowToAdd.title.maxLength && $v.rowToAdd.title.$error " class="invalid-feedback" >
            {{ maxLengthError($t("form.title.label"),$v.group.title.$params.maxLength.max)}}
          </div>
          <div v-else-if="! $v.rowToAdd.title.notContainsHtmlTags &&  $v.rowToAdd.title.$error" class="invalid-feedback">
            {{htmlTagsError($t('form.title.label'))}}
          </div>
        </div>
      </div>
      <!-- Description -->
      <div class="col-12">
        <div class="form-group">
          <label for="" class="form-label">{{$t("form.description.label")}}</label>
            <textarea
            class="form-control"
            rows="5"
            cols="30"
            v-model="rowToAdd.description"
            :placeholder="$t('form.description.placeholder')"
            :class="{
              'is-invalid': $v.rowToAdd.description.$error,
            }"></textarea>
          <div v-if="! $v.rowToAdd.description.notContainsHtmlTags &&  $v.rowToAdd.description.$error" class="invalid-feedback">
            {{htmlTagsError($t('form.description.label'))}}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-3">
          <AddButton @add="addRow"></AddButton>
        </div>
    </div>
    <!-- </Base> -->
    <div class="table-wrapper my-2" v-if="form.subtasks.length>0">
        <!-- <Base > -->
        <div class="row my-2">      
            <div class="col-12">
                <div class="table-responsive">
                    <table class="table table-sm text-center">
                        <thead>
                            <tr>
                                <th scope="col">{{$t('table.thead.count')}}</th>
                                <th scope="col">{{$t('form.title.label')}}</th>
                                <th scope="col">{{$t('form.description.label')}}</th>
                                <th scope="col">{{$t('table.thead.controls')}}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(val, index) in form.subtasks" :key="index">
                                <td class="align-middle custom-width">{{parseInt(index)+1}}</td>
                                <td class="align-middle">
                                  {{val.title}}
                                </td>
                                <td class="align-middle">
                                  {{val.description}}
                                </td>
                                <td class="align-middle">
                                    <div class="d-flex justify-content-center align-items-center">
                                        <EditButton class="me-2" @edit="openEditDialog(val,index)"></EditButton>
                                        <DeleteButton @delete="openDeleteDialog(index,val.code)"></DeleteButton>
                                    </div>
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>    
        <!-- </Base> -->
    </div>

    <EditDialog :display="displayEditDialog" @close="closeEditDialog" :header="$t('subtask.header')" @cancel="closeEditDialog" @save="editRow">
      <div class="row">
          <div class="col-12">
            <!-- title -->
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.title.label")}}</label>
              <input
                type="text"
                v-model="rowToEdit.title"
                :placeholder="$t('form.title.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.rowToEdit.title.$error}"
              />
              <div v-if="!$v.rowToEdit.title.required && $v.rowToEdit.title.$error " class="invalid-feedback">
                {{ requiredError($t("form.title.label")) }}
              </div>
              <div v-else-if="!$v.rowToEdit.title.minLength && $v.rowToEdit.title.$error" class="invalid-feedback" >
                {{minLengthError($t("form.title.label"),$v.rowToEdit.title.$params.minLength.min)}}
              </div>
              <div v-else-if=" !$v.rowToEdit.title.maxLength && $v.rowToEdit.title.$error " class="invalid-feedback" >
                {{ maxLengthError($t("form.title.label"),$v.group.title.$params.maxLength.max)}}
              </div>
              <div v-else-if="! $v.rowToEdit.title.notContainsHtmlTags &&  $v.rowToEdit.title.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.title.label'))}}
              </div>
            </div>
          </div>
          <!-- Description -->
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.description.label")}}</label>
                <textarea
                class="form-control"
                rows="5"
                cols="30"
                v-model="rowToEdit.description"
                :placeholder="$t('form.description.placeholder')"
                :class="{
                  'is-invalid': $v.rowToEdit.description.$error,
                }"></textarea>
              <div v-if="! $v.rowToEdit.description.notContainsHtmlTags &&  $v.rowToEdit.description.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.description.label'))}}
              </div>
            </div>
          </div>
        </div>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
</div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/management/tasks/task.json"></i18n>
<script>
import {cloneDeep} from 'lodash';
//////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,requiredError} from "@/validation/errors";
import {minLength,maxLength,required} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
// import Base from "@/components/global/utilities/Base.vue"
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import { mapGetters, mapActions } from "vuex";

/////////////////////////////////////////////////////////////
export default {
    components: {
        // Base,
        AddButton,
        EditButton,
        DeleteButton,
        EditDialog,
        DeleteDialog,
    },
    data(){
        return {
					rowToAdd:{
							title: "",
              description: ""
          },
          rowToEdit:{
              title: "",
              description: ""
					},
					indexToEdit:null,
					displayEditDialog: false,
					indexToDelete:null,
					displayDeleteDialog: false,
          codeToDelete:null,
					////////////////////////
					expiration_date:null,
        }
    },
    validations:{
        	rowToAdd: {
            title: {
              required,
              minLength: minLength(4),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                }
            },
            description:{
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                }
            }
          },
        	rowToEdit:{
            title: {
              required,
              minLength: minLength(4),
              maxLength: maxLength(255),
              notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                }
            },
            description:{
                notContainsHtmlTags(value) {
                  return notContainsHtmlTags(value);
                }
            }
          },
    },
		computed:{
      ...mapGetters("erp/management/tasks/task", {
        getForm: "getForm",
      }),
      form:{
        get(){
          return this.getForm;
        },
        set(value){
          return this.setForm(value);
        },
      }
		},
    methods: {
        ...mapActions("erp/management/tasks/task", [
          "setForm"
        ]),
        /////////////////////////
        htmlTagsError,
        maxLengthError,
        minLengthError,
        requiredError,
        /////////////////////////
        resetForm(){
            this.rowToAdd = {
							title: "",
              description: ""
            }
            this.$v.rowToAdd.$reset();
        },
        addRow(){
            this.$v.rowToAdd.$touch();
            if(!(this.$v.rowToAdd.$invalid )){
                this.form.subtasks.push({...this.rowToAdd});
                this.resetForm();
            }
        },
        /////////////////////
        openEditDialog(val,index) {
            this.displayEditDialog = true;
            this.indexToEdit = index;
            this.rowToEdit = cloneDeep(val)
        },
        closeEditDialog() {
            this.rowToEdit = {
							title: "",
              description: ""
            }
            this.indexToEdit = null;
            this.$v.rowToEdit.$reset()
            this.displayEditDialog = false;
        },
        editRow(){
            this.$v.rowToEdit.$touch();
            if(!(this.$v.rowToEdit.$invalid )){
              console.log(this.form);
                this.form.subtasks.splice(this.indexToEdit,1,{...this.rowToEdit});
                this.closeEditDialog();
            }
        },
        ////////////////////////
        openDeleteDialog(index,code) {
            this.displayDeleteDialog = true;
            this.indexToDelete =index;
            this.codeToDelete = code;
        },
        closeDeleteDialog() {
            this.displayDeleteDialog = false;
            this.indexToDelete =null;
            this.codeToDelete =null;
        },
        deleteRow() {
          this.form.subtasks.splice(this.indexToDelete, 1);

          // Check if 'deleted_subtasks' array exists in the form object
          if (!this.form.hasOwnProperty('deleted_subtasks')) {
              this.form['deleted_subtasks'] = [];
          }

          console.log(this.form['deleted_subtasks']);
          this.form['deleted_subtasks'].push(this.codeToDelete);
          this.closeDeleteDialog();
      }
    },
};
</script>
<style lang="scss" scoped>
.custom-width{
	max-width: 30px;
}
</style>
