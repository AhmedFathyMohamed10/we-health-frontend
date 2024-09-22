<template>
    <div>
        <Base class="my-2">
          <h4>{{ $t("employee.otherInfo") }}</h4>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">{{
                  $t("employee.emNumbers.label")
                }}</label>
                <input
                  type="text"
                  v-model="emNumber"
                  :placeholder="$t('employee.emNumbers.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                      ($v.emNumber.$invalid &&
                      $v.emNumber.$anyDirty &&
                      $v.emNumber.$anyError) ||error.emNumber
                  }"
                />
                <div
                  v-if="error.emNumber"
                  class="invalid-feedback"
                >
                  {{
                    error.emNumber[0]
                  }}
                </div>
                <div
                  v-if="
                    !$v.emNumber.minLength &&
                    $v.emNumber.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("employee.emNumbers.label"),
                      $v.emNumber.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-if="
                    !$v.emNumber.maxLength &&
                    $v.emNumber.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("employee.emNumbers.label"),
                      $v.emNumber.$params.maxLength.max
                    )
                  }}
                </div>
              </div>
            </div>
            
          </div>
          <div class="row">
                <FileUpload name="demo[]" url="./upload.php" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
            <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                    <div class="flex gap-2">
                        <Button @click="chooseCallback()" icon="pi pi-images" class="p-button-rounded"></Button>
                        <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" class="p-button-rounded p-button-success" :disabled="!files || files.length === 0"></Button>
                        <Button @click="clearCallback()" icon="pi pi-times" class="p-button-rounded p-button-danger" :disabled="!files || files.length === 0"></Button>
                    </div>
                    <ProgressBar :value="totalSizePercent" :showValue="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', {'exceeded-progress-bar': (totalSizePercent > 100)}]"><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar>
                </div>
            </template>
            <template #content="{ files, uploadedFiles, removeUploadedFileCallback, fileRemoveCallback }">
                <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap p-5 gap-5">
                        <div v-for="(file, index) of files" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Pending" severity="warning" />
                            <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, fileRemoveCallback, index)" class="p-button-outlined p-button-danger p-button-rounded" />
                        </div>
                    </div>
                </div>

                <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap p-0 sm:p-5 sm:p-5 gap-5">
                        <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size" class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                            <div>
                                <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" class="shadow-2" />
                            </div>
                            <span class="font-semibold">{{ file.name }}</span>
                            <div>{{ formatSize(file.size) }}</div>
                            <Badge value="Completed" class="mt-3" severity="success" />
                            <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" class="p-button-outlined p-button-danger p-button-rounded" />
                        </div>
                    </div>
                </div>
            </template>
            <template #empty>
                <div class="flex align-items-center justify-content-center flex-column">
                    <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
                    <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
                </div>
            </template>
                </FileUpload>



              <!-- </div> -->
            </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("employee.education.label")
                }}</label>
                <input
                  type="text"
                  v-model="otherInfo.education"
                  :placeholder="$t('employee.education.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid':
                     ( v.education.$invalid &&
                      v.education.$anyDirty &&
                      v.education.$anyError)|| error.education
                  }"
                />
                <div
                  v-if="
                    error.education
                  "
                  class="invalid-feedback"
                >
                  {{
                   error.education[0]
                  }}
                </div>
                <div
                  v-if="
                    !v.education.minLength &&
                    v.education.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("employee.education.label"),
                      v.education.$params.minLength.min
                    )
                  }}
                </div>
                <div
                  v-if="
                    !v.education.maxLength &&
                    v.education.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("employee.education.label"),
                      v.education.$params.maxLength.max
                    )
                  }}
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("employee.status.label")
                }}</label>
                <Dropdown
                  v-model="statusValue"
                  :options="[locale] == 'ar' ? status_ar : status_en"
                  optionLabel="name"
                  :placeholder="$t('employee.status.placeholder')"
                />
              </div>
            </div>
          </div>
        </Base>
       
      </div>
</template>
<i18n src="@/lang/erp/employees/employees.json"></i18n>
<script src="https://unpkg.com/vue-upload-multiple-image@1.1.6/dist/vue-upload-multiple-image.js"></script>
<script>
import { mapActions } from "vuex";
/////////////////////////////////////////////////////////////////////////
import {
  required,
  minLength,
  maxLength,
  decimal,
  numeric
} from "vuelidate/lib/validators";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
} from "@/validation/errors.js";
////////////////////////////////////////////////////////////////////////
import Page from "@/components/global/layout/Page.vue";
import Base from "@/components/global/utilities/Base.vue";
import Dropdown from "primevue/dropdown";
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg"
import ImageEditor from '@/components/global/image-plugin/ImageEditor.vue'
 
export default {
  components: {
    Page,
    Base,
    ImageEditor,
   
  },
  props: {
    otherInfo:{
      type: Object,
      required: true,
    },
    employees: {
      type: Array
      
    },
    v: {
      type: Object,
      required: true,
    }
  },
  watch: {
   
    // employees: function (newVal, oldVal) {
    //   // console.log(newVal)
    //   for (var emp in newVal) {
    //     this.Managers.push({ name: newVal[emp].name, id: newVal[emp].id });
    //   }

    //   // this.employee.department = newVal.id;
    // },
    
    
    // gendervalue: function (newVal, oldVal) {
    //   // console.log(newVal)

    //   this.otherInfo.gender = newVal.value;
    // },
    // maritalStatusValue: function (newVal, oldVal) {
    //   console.log(newVal)

    //   this.employee.maritalStatus = newVal.value;
    // },
    statusValue: function (newVal, oldVal) {
      // console.log(newVal)

      this.otherInfo.status = newVal.value;
    },
    // roleId: function (newVal, oldVal) {
    //   // console.log(newVal)

    //   this.employee.role = newVal.id;
    // },
    // shiftId: function (newVal, oldVal) {
    //   // console.log(newVal)

    //   this.employee.shift = newVal.id;
    // },
    // directManagerValue:function (newVal, oldVal) {
    //   // console.log(newVal)

    //   this.employee.directManager = newVal.id;
    // },
    

    departs: function (newVal, oldVal) {
      this.departments = newVal;
      console.log(newVal);
    },
    
    // emNumber : function (newVal, oldVal) {
    //   console.log(newVal)
    //   this.employee.emNumbers.push(newVal)
    //   // console.log(this.employee.image);
    // },
    // otherInfo: {
    //   deep: true,
    //   handler(newValue, oldValue) {
    //     this.setOtherInfo(newValue);
    //     // this.v.$touch();
    //   },
    // },
    
  },
  data() {
    return {
      // otherInfo: {
      //     emNumbers: [],
      //     files: [],
      //     education: "",
      //     status: "",
      //     description: ""
      // },
      uploadedFiles: [],
      files: [],
      totalSize: 0,
      totalSizePercent: 0,
      displayNewModalParent: false,
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      emNumber:"",
      gendervalue: "",
      maritalStatusValue: "",
      statusValue: "",
      directManagerValue:"",
      roleId: "",
      shiftId: "",
      status_en: [
        { name: "Active", value: 1 },
        { name: "suspended", value: 2 },
      ],
      status_ar: [
        { name: "نشط", value: 1 },
        { name: "غير نشط", value: 2 },
      ],
      displayNewModal: false,
      employeeMobile: "",
      depart: "",
      Managers: [],
      searchQuery: {
        name: "",
      },
      flag: "",
      mobileError: {},
    
      Roles: [],
      shifts: [],
     
      ImageControls:{
            templateImage:whiteBackground,
        },

     
    };
  },
  validations: {
    emNumber:{
      minLength: minLength(4),
        maxLength: maxLength(11),
    },
    
    gendervalue: {
      required,
    },
    roleId: {
      required,
    },
  
    otherInfo: {
      name: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      mobile: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      dob: {
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      address: {
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      
      email: {
        required,
      },
     
      username: {
        required,
        minLength: minLength(1),
        maxLength: maxLength(255),
      },
      salary: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
      jobStartDate: {
        required,
      },
      emNumbers: {
        numeric
      },
      education: {
        minLength: minLength(1),
        maxLength: maxLength(600),
      },
    },
  },
  computed: {
    error() {
      // console.log(this.$store.state.employees.error)
      return this.$store.state.employees.error;
    },
    // otherInfo() {
    //     return this.$store.getters["employees/getEmployee"].otherInfo;
    //   },
    
  },
 
  methods: {
    
        // ...mapActions("employees", [
        //   "setOtherInfo",
        // ]),
    ////////////// file upload  ////////
    onRemoveTemplatingFile(file, onFileRemove, index) {
            onFileRemove(index);
            this.totalSize -= parseInt(this.formatSize(file.size));
            this.totalSizePercent = this.totalSize / 10;
        },
        onClearTemplatingUpload(clear) {
            clear();
            this.totalSize = 0;
            this.totalSizePercent = 0;
        },
        onSelectedFiles(event) {
          console.log(event.files)
            let fileData=[]
            var newFiles=event.files
            newFiles.forEach((file) => {
                this.totalSize += parseInt(this.formatSize(file.size));
            });
            for(var i=0; newFiles.length >i ;i++){
            let File= newFiles[i];
            const fileReader = new FileReader();
            fileReader.onload = () => {
              fileData.push(fileReader.result);
              this.otherInfo.files.push(fileReader.result)
            
              
            };
      fileReader.readAsDataURL(File);
       }
        },
        onAdvancedUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        uploadEvent(callback) {
            this.totalSizePercent = this.totalSize / 10;
            callback();
        },
        onTemplatedUpload() {
            this.totalSize = 0;
            this.totalSizePercent = 0;
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        onUpload() {
            this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
        },
        formatSize(bytes) {
            if (bytes === 0) {
                return '0 B';
            }

            let k = 1000,
                dm = 3,
                sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
    
    /////////////////// end of file upload /////
   
   
  
    },
  }
// };
</script>
