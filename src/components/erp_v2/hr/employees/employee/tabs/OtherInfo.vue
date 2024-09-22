<template>
  <div class="form">
    <div class="row">
      <div class="col-12">
        <Base>
          <label for="" class="form-label">{{
            $t("form.emergency_numbers.label")
          }}</label>
          <div class="row">
          <div class="col-5">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.emergency_numbers.name.label")
              }}</label>
              <input
                type="text"
                v-model="addToRow.name"
                :placeholder="$t('form.emergency_numbers.name.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid': $v.addToRow.name.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!$v.addToRow.name.required && $v.addToRow.name.$error"
                >
                  {{ requiredError($t("form.emergency_numbers.name.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!$v.addToRow.name.minLength && $v.addToRow.name.$error"
                >
                  {{
                    minLengthError(
                      $t("form.emergency_numbers.name.label"),
                      $v.addToRow.name.$params.minLength.min
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="!$v.addToRow.name.maxLength && $v.addToRow.name.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.emergency_numbers.name.label"),
                      $v.addToRow.name.$params.maxLength.max
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="
                    !$v.addToRow.name.notContainsHtmlTags && $v.addToRow.name.$error
                  "
                >
                  {{ htmlTagsError($t("form.emergency_numbers.name.label")) }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-5">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.emergency_numbers.number.label")
              }}</label>
              <input
                type="number"
                v-model="addToRow.number"
                :placeholder="$t('form.emergency_numbers.number.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid': $v.addToRow.number.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!$v.addToRow.number.required && $v.addToRow.number.$error"
                >
                  {{ requiredError($t("form.emergency_numbers.number.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!$v.addToRow.number.minLength && $v.addToRow.number.$error"
                >
                  {{
                    minLengthError(
                      $t("form.emergency_numbers.number.label"),
                      $v.addToRow.number.$params.minLength.min
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="!$v.addToRow.number.maxLength && $v.addToRow.number.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.emergency_numbers.number.label"),
                      $v.addToRow.number.$params.maxLength.max
                    )
                  }}
                </small>
              </div>
            </div>
          </div>
          <div class="col-2">
            <AddButton @add="addRow"></AddButton>
          </div>
          <div class="row" v-if="form.otherInfo.emergency_numbers.length > 0">
            <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr >
                    <th  >{{$t("form.emergency_numbers.name.label")}}</th>
                    <th >{{ $t("form.emergency_numbers.number.label")}}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(num, index) in form.otherInfo.emergency_numbers" :key="index">
                    <td class="align-middle fw-bold">
                      {{ num.name}}
                    </td>
                    <td class="align-middle fw-bold">
                    {{ num.number }}
                    </td>
                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center gap-1">
                       
                        <DeleteButton @delete="openDeleteRow(index)"></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
          </div>
        </Base>
      </div>
      
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.graduation_date.label")
              }}</label>
              <Calendar
                v-model="graduation_date"
                @input="selectDate($event)"
                dateFormat="yy-mm-dd"
                :placeholder="$t('form.graduation_date.placeholder')"
                :class="{
                  'is-invalid': v.graduation_date.$error,
                }"
              />

              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.graduation_date.required && v.graduation_date.$error"
                >
                  {{ requiredError($t("form.graduation_date.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="
                    !v.graduation_date.validDateTime && v.graduation_date.$error
                  "
                >
                  {{ timeDateError($t()) }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.profession.label")
              }}</label>
              <input
                type="text"
                v-model="form.otherInfo.profession"
                :placeholder="$t('form.profession.placeholder')"
                class="form-control"
                :class="{
                  'is-invalid': v.profession.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.profession.required && v.profession.$error"
                >
                  {{ requiredError($t("form.profession.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!v.profession.minLength && v.profession.$error"
                >
                  {{
                    minLengthError(
                      $t("form.profession.label"),
                      v.profession.$params.minLength.min
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="!v.profession.maxLength && v.profession.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.profession.label"),
                      v.profession.$params.maxLength.max
                    )
                  }}
                </small>
                <small
                  class="p-invalid"
                  v-else-if="
                    !v.profession.notContainsHtmlTags && v.profession.$error
                  "
                >
                  {{ htmlTagsError($t("form.profession.label")) }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-lg-4 col-md-6 col-sm-6">
        <Base>
          <div class="col-12">
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
                :class="{
                  'is-invalid': v.status.$error,
                }"
              />
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.status.required && v.status.$error"
                >
                  {{ requiredError($t("form.status.label")) }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <div class="field-checkbox d-flex">
                  <Checkbox
                    id="binary"
                    class="me-2"
                    v-model="form.otherInfo.treat_as"
                    :trueValue="3"
                    :binary="true"
                  />
                  <label for="binary">{{
                    $t("form.treat_as_client.label")
                  }}</label>
                 
                </div>
              </div>

              <div class="form-group" v-if="form.otherInfo.treat_as">
                <div class="field-checkbox d-flex">
                  <Checkbox
                    id="binary"
                    class="me-2"
                    v-model="form.otherInfo.prevent_dealing"
                    :trueValue="true"
                    :falseValue="false"
                    :binary="true"
                    :disabled="form.otherInfo.alert_dealing"
                    />
                    <label for="binary" :class="[form.otherInfo.alert_dealing ? 'text-decoration-line-through' : '']">{{
                      $t("form.prevent_dealing.label")
                    }}</label>
                </div>
              </div>
              
                <div class="form-group" v-if="form.otherInfo.treat_as">
                  <div class="field-checkbox d-flex">
                    <Checkbox
                    id="binary"
                    class="me-2"
                    v-model="form.otherInfo.alert_dealing"
                    :binary="true"
                    :trueValue="true"
                    :falseValue="false"
                    :disabled="form.otherInfo.prevent_dealing"
                  />
                  <label for="binary" :class="[form.otherInfo.prevent_dealing ? 'text-decoration-line-through' : '']">{{
                    $t("form.alert_dealing.label")
                  }}</label>
                </div>
              </div>

              <div class="form-group" v-if="form.otherInfo.treat_as">
                <div class="field-checkbox d-flex">
                  <Checkbox
                    id="binary"
                    class="me-2"
                    v-model="form.otherInfo.prevent_give"
                    :trueValue="true"
                    :falseValue="false"
                    :binary="true"
                    :disabled="form.otherInfo.alert_give"
                  />
                  <label for="binary" :class="[form.otherInfo.alert_give ? 'text-decoration-line-through' : '']">{{
                    $t("form.prevent_give.label")
                  }}</label>
                </div>
              </div>

              <div class="form-group" v-if="form.otherInfo.treat_as" >
                <div class="field-checkbox d-flex">
                  <Checkbox
                    id="binary"
                    class="me-2"
                    v-model="form.otherInfo.alert_give"
                    :trueValue="true"
                    :falseValue="false"
                    :binary="true"
                    :disabled="form.otherInfo.prevent_give"

                  />
                  <label for="binary" :class="[form.otherInfo.prevent_give ? 'text-decoration-line-through' : '']">{{
                    $t("form.alert_give.label")
                  }}</label>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-8 col-md-12 ">
          <Base>
            <UploadFile
              v-model="form.otherInfo.files"
              :saved_files="form.otherInfo.saved_files"
              @removePath="removePath"
              :mediaUrl="mediaUrl"
            >
              <!-- <div class="error">
              <small
              class="p-invalid"
              v-if="
              !$v.form.uploaded_files.maxLength &&
              $v.form.uploaded_files.$error
            "
            >
            {{
              maxLengthError(
                $t("form.uploaded_files.label"),
                $v.form.uploaded_files.$params.maxLength.max
              )
            }}
            </small>
            </div> -->
            </UploadFile>
          </Base>
        
        </div>
     
    </div>
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/employees/employee.json"></i18n>
<script>
const erp_employees = "erp_v2/hr/employees/";
import { mapGetters, mapActions } from "vuex";
import Base from "@/components/global/utilities/Base.vue";
import Media from "@/components/erp/HR/employees/Media.vue";
import UploadFile from "@/components/erp/HR/employees/UploadFile.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import { urls } from "@/backend/urls";

import {
  minLength,
  maxLength,
  numeric,
  required,
  
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
  htmlTagsError,
  maxSizeError,
  timeDateError ,
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
    Base,
    UploadFile,
    // Media,
    // UploadFile,
    DeleteButton,
    AddButton,
  },
  data() {
    return {
      addToRow:{name:"",number:null},
      graduation_date: "",
      mediaUrl: urls.business.mediaUrl,
      selectedFiles: [],
      document:
        ".jpg, .jpeg, .png, .gif, .pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .txt, .csv, .zip, .rar, .tar, .gz, .7z, .mp3, .mp4, .avi, .mov",
      emergency_number: "",
      status_en: [
        { name: "Active", value: 1 },
        { name: "suspended", value: 2 },
      ],
      status_ar: [
        { name: "نشط", value: 1 },
        { name: "غير نشط", value: 2 },
      ],
    };
  },
  computed: {
    ...mapGetters(`${erp_employees}`, {
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
    isUpdating() {
      return this.form["id"] ? true : false;
    },
  },
  validations: {
    emergency_number: {
      required,
      numeric,
      minLength: minLength(11),
      maxLength: maxLength(11),
    },
    addToRow:{
       name:{
            required,
            minLength: minLength(4),
            notContainsHtmlTags: (value) => {
              return notContainsHtmlTags(value);
            },
            maxLength: maxLength(255),
          },
          number:{
            required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
          }
    }
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    maxSizeError,
    timeDateError,
    ...mapActions(`${erp_employees}`, ["setForm"]),
    addRow() {
      this.$v.addToRow.$touch();
      if (!this.$v.addToRow.$invalid){

        this.form.otherInfo.emergency_numbers.push(this.addToRow)
        this.addToRow = {name:"",number:null};
        this.$v.addToRow.$reset();
      }
    },
    // addNumber() {
    //   this.$v.emergency_number.$touch();
    //   if (!this.$v.emergency_number.$invalid) {
    //     this.form.otherInfo.emergency_numbers.push(this.emergency_number);
    //     this.emergency_number = "";
    //     this.$v.emergency_number.$reset();
    //   }
    // },
    openDeleteRow(index) {
      this.form.otherInfo.emergency_numbers.splice(index, 1);
      
    },
    selectDate(event) {
      this.form.otherInfo.graduation_date =
        this.$moment(event).format("YYYY-MM-DD");
    },
    removeNumber(index) {
      this.form.otherInfo.emergency_numbers.splice(index, 1);
    },
    removePath(index) {
      this.form.otherInfo.deleted_files.push(
        this.form.otherInfo.saved_files[index]
      );
      this.form.otherInfo.saved_files.splice(index, 1);
    },
  },
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
