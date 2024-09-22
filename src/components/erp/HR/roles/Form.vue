<template>
    <div class="form">
      <EditDialog 
        :display="displayForm" 
        @close="cancelForm" 
        @cancel="cancelForm" 
        @save="saveForm" 
        :isLoading="isLoading"
        :header="header"
      >
        <slot></slot>
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
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{ $t("form.name.label") }}</label>
              <input
                type="text"
                v-model="form.name"
                :placeholder="$t('form.name.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid':
                    $v.form.name.$error,
                }"
              />
              <div
                v-if="!$v.form.name.required && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{ requiredError($t("form.name.label")) }}
              </div>
              <div
                v-else-if="!$v.form.name.minLength && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.name.label"),
                    $v.form.name.$params.minLength.min
                  )
                }}
              </div>
              <div
                v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
                class="invalid-feedback"
              >
                {{
                  minLengthError(
                    $t("form.name.label"),
                    $v.form.name.$params.maxLength.max
                  )
                }}
              </div>
              <div v-else-if="! $v.form.name.notContainsHtmlTags &&  $v.form.name.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.name.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.department.label")
              }}</label>
              <Dropdown
                v-model="form.department"
                :options="departmentOptions"
                optionValue="id"
                dataKey="id"
                :value="form.department"
                optionLabel="name"
                :placeholder="$t('form.department.placeholder')"
                :class="{
                  'p-invalid':
                    $v.form.department.$error,
                }"
              />
              <div class="error">
                <small 
                    class="d-block text-danger" 
                    v-if="!$v.form.department.required && $v.form.department.$error">
                     {{ requiredError($t("form.department.label")) }}
                </small>
            </div>
            </div>
          </div>
          <div class="col-md-2 d-flex">
                <div class="form-group ">
                    <label for="" class="form-label invisible ">{{$t("btns.addDep")}}</label>
                    <button class="btn btn-icon rounded-circle btn-success" @click="addRow">
                        <i class="fa fa-plus fa-md"></i>
                    </button>
                </div>
              </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">{{ $t("form.description.label") }}</label>
              <input
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.description"
                :placeholder="$t('form.description.placeholder')"
                :class="{
                  'is-invalid':
                    $v.form.description.$error,
                }"
              />
              <div v-if="! $v.form.description.notContainsHtmlTags &&  $v.form.description.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.description.label'))}}
              </div>
            </div>
          </div>
        </div>
        <Form v-model="departmentForm" :isLoading="upsertLoading" :displayForm="displayFormDerpatment" @close="resetForm" @cancel="resetForm" @save="upsert" :error="upsertError" :header="isUpdating?$t('dialog.title.edit'):$t('dialog.title.new')"> 
        </Form>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/departments/Department.json"></i18n>
  <i18n src="@/lang/erp/roles/Role.json"></i18n>
  <script>
  import EditDialog from '@/components/global/utilities/EditDialog.vue';
  import { required, minLength, maxLength } from "vuelidate/lib/validators";
  import {notContainsHtmlTags} from "@/validation/customValidators";
  import Form from "@/components/erp/HR/departments/Form.vue";
  import { mapGetters,mapActions  } from 'vuex'
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    htmlTagsError,
    
  } from "@/validation/errors.js";
  export default {
    components: { 
      EditDialog,
      Form,
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
      value:{
        type:Object,
        required:true,
      },
      error:{
        type:Object,
      },
      header:{
        type:String,
      },
  
    },
    watch: {
      value(){
        this.form = this.value;
      },
    },
    data() {
      return {
        form:this.value,
        displayFormDerpatment: false,
        isUpdating : false,
        departmentForm :{
        name:"",
        description:"",
      }
      };
    },
    computed:{
        ...mapGetters("erp/hr/departments", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
  
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
    departmentOptions() {
      if (this.$store.getters["erp/hr/departments/getListResponse"])
        return (this.$store.getters["erp/hr/departments/getListResponse"].results)
      else {
        return []
      }
    },
      listResponse() {
      return this.getListResponse;
    },
    upsertResponse: {
      get() {
        return this.getUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },
    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
    },
    created(){
      if (!this.departmentOptions.Length >0)
      {
        let params = {pageNumber:1,rows:1000000,name:""};
        this.$store.dispatch("erp/hr/departments/list", params)
      }
    },
    validations: {
      form: {
        name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
        notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
        }
      },
      department: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      description: {
        minLength: minLength(1),
        maxLength: maxLength(600),
        notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
        }
      },
      },
    },
    
    methods: {
    ...mapActions("erp/hr/departments",
    ["setUpsertResponse","setUpsertError","setDeleteResponse","setDeleteError","setStatusResponse","setStatusError"]),
      requiredError,
      minLengthError,
      maxLengthError,
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
       ////////// UPSERT ///////////////////
      addRow(){
      this.displayFormDerpatment = true;
    },
    closeForm() {
      this.displayFormDerpatment=false;
    },
    openUpdate(item){
      this.isUpdating=true;
      this.departmentForm={...item};
      this.openForm();
    },
    resetForm(){
      this.departmentForm={
        name: "",
        description: "",
      }
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },
    create(){
      this.$store.dispatch("erp/hr/departments/create", this.departmentForm)
      .then((res) => {
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        const summery = err.statusText; 
        const details =  err.data.message;
        this.errorToast(summery,details)
      })
    },
    update(){
      this.$store.dispatch("erp/hr/departments/update", this.departmentForm
      )
      .then((res) => {
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        const summery = err.statusText; 
        const details =  err.data.message;
        this.errorToast(summery,details)
      })
    },
    upsert() {
      if(this.isUpdating){
        this.update();
      }
      else {
        this.create();
      }
    },
    },
  };
  </script>
  