<template>
  <div class="form">
    <div class="row">
      <div class="col-lg-4 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.job_start_date.label")
              }}</label>
              <Calendar
                v-model="job_start_date"
                @input="selectDate($event)"
                dateFormat="yy-mm-dd"
                :placeholder="$t('form.job_start_date.placeholder')"
                :class="{
                  'p-invalid': v.job_start_date.$error,
                }"
              />

              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.job_start_date.required && v.job_start_date.$error"
                >
                  {{ requiredError($t("form.job_start_date.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="
                    !v.job_start_date.validDateTime && v.job_start_date.$error
                  "
                >
                  {{ timeDateError($t()) }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-lg-4 col-sm-6">
        <Base>
          <div class="col-12">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.job_end_date.label")
              }}</label>
              <Calendar
                v-model="job_end_date"
                @input="selectEndDate($event)"
                dateFormat="yy-mm-dd"
                :placeholder="$t('form.job_end_date.placeholder')"
                :class="{
                  'p-invalid': v.job_end_date.$error,
                }"
              />

              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!v.job_end_date.required && v.job_end_date.$error"
                >
                  {{ requiredError($t("form.job_end_date.label")) }}
                </small>
                <small
                  class="p-invalid"
                  v-if="!v.job_end_date.validDateTime && v.job_end_date.$error"
                >
                  {{ timeDateError($t()) }}
                </small>
              </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12">
        <Base>
          <UploadFile
            v-model="form.contract.contract_files"
            :saved_files="form.contract.contract_saved_files"
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
import clientsOptions from "@/mixins/erp/clients/clientsOptions";
import Base from "@/components/global/utilities/Base.vue";
// import Dropdown from "primevue/dropdown";
import UploadFile from "@/components/erp/HR/employees/UploadFile.vue";
import whiteBackground from "@/assets/global/image-plugin-templates/White-Background.svg";
import ImageEditor from "@/components/global/image-plugin/ImageEditor.vue";
import { urls } from '@/backend/urls';
import {
  requiredError,
  minLengthError,
  maxLengthError,
  numericError,
  htmlTagsError,
  timeDateError,
  inputError,
} from "@/validation/errors.js";
export default {
  mixins: [clientsOptions],
  components: {
    Base,
    UploadFile,
  },
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

  data() {
    return {
      mediaUrl:urls.business.mediaUrl,
      job_start_date: "",
      job_end_date: "",
      genderChoices_en: [
        { name: "Male", value: "Male" },
        { name: "Female", value: "Female" },
      ],
      genderChoices_ar: [
        { name: "ذكر", value: "Male" },
        { name: "انثي", value: "Female" },
      ],
      maritalStatusChoices_en: [
        { name: "Married", value: "Married" },
        { name: "Single", value: "Single" },
      ],
      maritalStatusChoices_ar: [
        { name: "متزوج", value: "Married" },
        { name: "اعزب", value: "Single" },
      ],

      ImageControls: {
        templateImage: whiteBackground,
      },
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
  },
  created() {
    if (this.form.id) {
      this.job_start_date = this.$moment(
        this.form.contract.job_start_date
      ).format("YYYY-MM-DD");
      this.job_end_date = this.$moment(this.form.contract.job_end_date).format(
        "YYYY-MM-DD"
      );
    }
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    htmlTagsError,
    timeDateError,
    inputError,
    ...mapActions("erp/hr/employees", ["setForm"]),
    removePath(index) {
      this.form.contract.contract_deleted_files.push(
        this.form.contract.contract_saved_files[index]
        
      );
      this.form.contract.contract_saved_files.splice(index, 1);
    },


    selectDate(event) {
      this.form.contract.job_start_date =
        this.$moment(event).format("YYYY-MM-DD");
    },
    selectEndDate(event) {
      this.form.contract.job_end_date =
        this.$moment(event).format("YYYY-MM-DD");
    },
  },
};
</script>
