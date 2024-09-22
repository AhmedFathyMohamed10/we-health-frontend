<template>
    <div class="form">
        <div class="row">
            <h4 class="mt-5">{{ $t("form.otherInfo") }}</h4>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="form-label">{{
                    $t("form.emergency_numbers.label")
                  }}</label>
                  <input
                    type="number"
                    v-model="emergency_number"
                    :placeholder="$t('form.emergency_numbers.placeholder')"
                    class="form-control"
                    :class="{
                      'is-invalid':
                        $v.emergency_number.$error || v.emergency_numbers.$error
                      
                    }"
                  />
                  <div
                  v-if="
                  !$v.emergency_number.numeric &&
                  $v.emergency_number.$error
                  "
                  class="invalid-feedback"
                  >
                  {{
                    numericError(
                      $t("form.emergency_numbers.label")
                     
                      )
                    }}
                  </div>
                  <div
                  v-else-if="
                  !$v.emergency_number.maxLength &&
                  $v.emergency_number.$error
                  "
                  class="invalid-feedback"
                  >
                  {{
                    maxLengthError(
                      $t("form.emergency_numbers.label"),
                      $v.emergency_number.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div
                  v-else-if="
                    !$v.emergency_number.minLength && $v.emergency_number.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("form.emergency_numbers.label"),
                      $v.emergency_number.$params.minLength.min
                    )
                  }}
                </div>

                <div
                  v-else-if="
                  !v.emergency_numbers.maxLength &&
                  v.emergency_numbers.$error
                  "
                  class="invalid-feedback"
                  >
                  {{
                    maxSizeError(
                      $t("form.emergency_numbers.label"),
                      v.emergency_numbers.$params.maxLength.max
                      )
                    }}
                  </div>
                  <Chip v-for="(num,index) in form.otherInfo.emergency_numbers "  :key="num" :label="num" removable @remove="removeNumber(index)" 
                  class="my-2"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <AddButton @add="addNumber()"></AddButton>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.status.label")
                  }}</label>
                  <Dropdown
                    v-model="form.otherInfo.status"
                    :options="[locale] == 'ar' ? status_ar : status_en"
                    optionValue="value"
                    optionLabel="name"
                    :placeholder="$t('form.status.placeholder')"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.education.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.otherInfo.education"
                    :placeholder="$t('form.education.placeholder')"
                    class="form-control"
                    :class="{
                      'is-invalid':
                         v.education.$error 
                       
                    }"
                  />
                 
                  <div
                    v-if="
                      !v.education.minLength &&
                      v.education.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      minLengthError(
                        $t("form.education.label"),
                        v.education.$params.minLength.min
                      )
                    }}
                  </div>
                  <div
                    v-else-if="
                      !v.education.maxLength &&
                      v.education.$error
                    "
                    class="invalid-feedback"
                  >
                    {{
                      maxLengthError(
                        $t("form.education.label"),
                        v.education.$params.maxLength.max
                      )
                    }}
                  </div>
                  <div v-else-if="! v.education.notContainsHtmlTags &&  v.education.$error" class="invalid-feedback">
                    {{htmlTagsError($t('form.education.label'))}}
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <!-- <Media v-model="form.otherInfo.files" :v="v.files" :isUpdating="isUpdating">
                </Media> -->
                <UploadFile v-model="form.otherInfo.uploaded_files" :saved_files="form.otherInfo.saved_files" @removePath="removePath" :mediaUrl="mediaUrl"></UploadFile>
               
              </div>
            </div>
  
        </div>
    </div>
  </template>
  <i18n src="@/lang/erp/employees/employees.json"></i18n>
  <script>
  import { mapGetters, mapActions } from "vuex";
  import Media from '@/components/erp/HR/employees/Media.vue';
  import UploadFile from '@/components/erp/HR/employees/UploadFile.vue';
  import AddButton from '@/components/global/utilities/AddButton.vue';
  import { urls } from '@/backend/urls';

  import {
    minLength,
    maxLength,
    numeric,
    required

  } from "vuelidate/lib/validators";
  
  import {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    maxSizeError,
    
  } from "@/validation/errors.js";
  export default {
    props: {
  
  v: {
    type: Object,
    default() {
      return {};
    },
  },
  // error: {
  //   type: Object,
  // },

},
components: {
  // Media,
  UploadFile,
  AddButton,
},
data(){
  return{
    mediaUrl:urls.business.mediaUrl,
    selectedFiles: [],
    document:".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt, .csv, .zip, .rar, .tar, .gz, .7z, .mp3, .mp4, .avi, .mov",
   emergency_number:"",
    status_en: [
        { name: "Active", value: 1 },
        { name: "suspended", value: 2 },
      ],
      status_ar: [
        { name: "نشط", value: 1 },
        { name: "غير نشط", value: 2 },
      ],

  }
},
computed:{
  ...mapGetters("erp/hr/employees", {
     getForm: "getForm",
   }),
  form: {
   get() {
     return this.getForm;
   },
   set(value) {
     this.setForm(value);
   },
 },
 isUpdating(){
  return this.form['id']?true:false;
 },
},
validations:{
  emergency_number:{
    required,
    numeric,
    minLength: minLength(11),
    maxLength: maxLength(11),

  }
},
 methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError, 
    maxSizeError,
    ...mapActions("erp/hr/employees",
    ["setForm"]),
    
    addNumber(){
      this.$v.emergency_number.$touch()
      if(!this.$v.emergency_number.$invalid ){

        this.form.otherInfo.emergency_numbers.push(this.emergency_number)
        this.emergency_number = "";
        this.$v.emergency_number.$reset()
      }
    },
    removeNumber(index){
      this.form.otherInfo.emergency_numbers.splice(index, 1)
    },
    removePath(index){
      this.form.otherInfo.deleted_files.push(this.form.otherInfo.saved_files[index])
      this.form.otherInfo.saved_files.splice(index,1)
    }
    }



  };
  </script>
  
<!-- <style>
.custom-file-upload {
  display: flex;
  align-items: center;
}
.custom-file-upload input[type="file"] {
  display: none;
}
</style> -->