<template>
    <div class="form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        @save="saveForm" 
        :isLoading="isLoading"
        :header="header"
        :minWidth="'10vw'"
        :maxWidth="'90vw'"
      >
        <slot></slot>
        <!-- Errors -->
        <div class="row" v-if="error">
          <div class="col-12">
            <div class="errors" v-if="(typeof error ==='object')">
              <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
                <span v-if="key !='errors'" >{{ $t(`form.${key}.label`) }}: </span>
                <span v-if="(typeof value ==='string')">{{ value }}</span>
                <span v-else>{{ value[0] }}</span>
              </Message>
            </div>
          </div>
        </div>
        <!-- Form -->
        <div class="row">
          <div class="col-md-6 col-xl-4">
            <!-- title -->
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.title.label")}}</label>
              <input
                type="text"
                v-model="form.title"
                :placeholder="$t('form.title.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.form.title.$error}"
              />
              <div v-if="!$v.form.title.required && $v.form.title.$error " class="invalid-feedback">
                {{ requiredError($t("form.title.label")) }}
              </div>
              <div v-else-if="!$v.form.title.minLength && $v.form.title.$error" class="invalid-feedback" >
                {{minLengthError($t("form.title.label"),$v.form.title.$params.minLength.min)}}
              </div>
              <div v-else-if=" !$v.form.title.maxLength && $v.form.title.$error " class="invalid-feedback" >
                {{ maxLengthError($t("form.title.label"),$v.group.title.$params.maxLength.max)}}
              </div>
              <div v-else-if="! $v.form.title.notContainsHtmlTags &&  $v.form.title.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.title.label'))}}
              </div>
            </div>
          </div>
          <!-- Add Group -->
          <div class="col-md-6 col-xl-4">
            <div class="d-flex gap-2">
              <div class="form-group flex-grow-1">
                <label for="" class="form-label">
                  {{$t("form.group.label")}}
                </label>
                <Dropdown
                  v-model="form.group"
                  :options="groups"
                  optionLabel="name"
                  optionValue="id"
                  dataKey="id"
                  :placeholder="$t('form.group.placeholder')"
                  :class="{
                    'p-invalid': $v.form.group.$error,
                  }"
                />
                <div class="error">
                  <small class="p-invalid" v-if="!$v.form.group.required && $v.form.group.$error">
                    {{ requiredError($t("form.group.label")) }}
                  </small>
                </div>
              </div>
              <Group></Group>
            </div>
          </div>
          <!-- Add Status -->
          <div class="col-md-6 col-xl-4">
            <div class="d-flex gap-2">
              <div class="form-group flex-grow-1">
                <label for="" class="form-label">
                  {{$t("form.status.label")}}
                </label>
                <Dropdown
                  v-model="form.status"
                  :options="statuses"
                  optionLabel="name"
                  optionValue="id"
                  dataKey="id"
                  :placeholder="$t('form.status.placeholder')"
                  :class="{
                    'p-invalid': $v.form.status.$error,
                  }"
                />
                <div class="error">
                  <small class="p-invalid" v-if="!$v.form.status.required && $v.form.status.$error">
                    {{ requiredError($t("form.status.label")) }}
                  </small>
                </div>
              </div>
              <Status></Status>
            </div>
          </div>
          <!-- employee -->
        <div class="col-md-6 col-xl-4">
          <div class="form-group">
            <label class="form-label">{{ $t("form.employee.label") }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.form.employee.$error }"
              >
                <i class="pi pi-search"></i>
              </span>
              <AutoComplete
                v-model="form.employee"
                :suggestions="employeeParams.suggestions"
                :class="{ 'p-invalid': $v.form.employee.$error }"
                field="name"
                :placeholder="$t('form.employee.placeholder')"
                @complete="search($event, employeeParams)"
                :forceSelection="true"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="$v.form.employee.$error && !$v.form.employee.required"
              >
                {{ requiredError($t("form.employee.label")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- Description -->
        <div class="col-12">
          <!-- description -->
          <div class="form-group">
            <label for="" class="form-label">{{$t("form.description.label")}}</label>
              <textarea
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.description"
              :placeholder="$t('form.description.placeholder')"
              :class="{
                'is-invalid': $v.form.description.$error,
              }"></textarea>
            <div v-if="! $v.form.description.notContainsHtmlTags &&  $v.form.description.$error" class="invalid-feedback">
              {{htmlTagsError($t('form.description.label'))}}
            </div>
          </div>
        </div>
        <!-- Subtasks -->
        <!-- add subtasks -->
        <div class="col-12">
          <a @click="displaySubtasks=!displaySubtasks"><span>{{!displaySubtasks? 'Add Subtasks': 'Hide Subtasks' }}</span></a>
        </div>
        <div class="col-12 my-2">
          <Subtasks v-if="displaySubtasks"/>
        </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/management/tasks/task.json"></i18n>
  <script>
  import Group from "./Group.vue";
  import Status from "./Status.vue";
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, minLength, maxLength, decimal} from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import groups from "@/mixins/erp/management/tasks/group/groups";
  import statuses from "@/mixins/erp/management/tasks/status/status";
  import EmployeeSuggestions from "@/mixins/erp/employees/EmployeeSuggestions.js";
  import Subtasks from "./subtasks/Subtasks.vue"
  import { mapGetters, mapActions } from "vuex";
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    
  } from "@/validation/errors.js";
  export default {
    data(){
      return {
        displaySubtasks: false,
      };
    },
    mixins:[groups, statuses, EmployeeSuggestions],
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
    components: { 
      EditDialog,
      Group,
      Status,
      Subtasks
     },
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
      error:{
        type:Object,
      },
      header:{
        type:String,
      },
  
    },
    validations: {
      form: {
        title: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
        },
        employee:{
          required
        },
        group:{
          required
        },
        status:{
          required
        },
        description:{
            notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
        }
      },
    },
    
    methods: {
      ...mapActions("erp/management/tasks/task", [
        "setForm"
      ]),
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      htmlTagsError,
    
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
  