<template>
  <div class="group">
    <AddButton @add="openForm"></AddButton>
    <Form
        v-model="form"
        :isLoading="upsertLoading"
        :isUpdating="isUpdating"
        :displayForm="displayForm"
        :genderOptions="genderOptions"
        :maritalStatusOptions="maritalStatusOptions"
        :paymentMethodOptions="paymentMethodOptions"
        @close="resetForm"
        @cancel="resetForm"
        @save="create"
        :error="upsertError"
        :header="$t('newEmployee')"      >
      </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newEmployee":"New Employee"
      },
      "ar":{
        "newEmployee":"موظف جديد"
      }
  }
  </i18n>
<script>
const erp_employees= "erp_v2/hr/employees/";
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/hr/employees/employee/Form.vue";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";

export default {
  mixins:[toast],
  components: {
    AddButton,
    Form,
  },
  data(){
    return {
      displayForm: false,
      isUpdating:false,
      genderOptions: [
          { name: "Male", en: "Male", ar: "ذكر" },
          { name: "Female", en: "Female", ar: "انثي" },
      ],
      paymentMethodOptions: [
        { name: "Credit", en: "Credit", ar: "دائن" },
        { name: "Debit", en: "Debit", ar: "مدين" },
        { name: "Both", en: "Both", ar: "كلاهما" },
      ],
      maritalStatusOptions: [
        { name: "Married", en: "Married", ar: "متزوج مغفل" },
        { name: "Single", en: "Single", ar: "ملهوش كتكوته" },
        { name: "Divorced", en: "Divorced", ar: "ملهي علي عينه" },
        { name: "Other", en: "Other", ar: "خنزير" },
      ],
    }
  },
  computed:{
    ...mapGetters(`${erp_employees}`, {
        getForm: "getForm",
        getUpsertResponse: "getUpsertResponse",
        upsertLoading: "getUpsertLoading",
        getUpsertError: "getUpsertError",
      }),
    form: {
        get() {
          return this.getForm;
        },
        set(value) {
          this.setForm(value);
        },
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
  methods:{
    ...mapActions(`${erp_employees}`, [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.displayForm = false;
    },
    resetForm() {
      this.form = {
        userdata: null,
        name:"",
        phone_number:"",
        gender:"",
        dob:"",
        marital_status:"",
        department:"",
        role:"",
        address:"",
        email:"",
        contract: { 
          job_start_date:"",
          job_end_date:"",
          contract_files:[],
          contract_saved_files:[],
          contract_deleted_files:[]
          },
        empolymentInfo:{ 
          username:"",
          password:"",
          salary:"",
          hourly_pay:"",
          direct_manager:"",
          weekend_days:[],
          annual_increase:null,
        },
        otherInfo: {
          profession:"",
          treat_as:"",
          prevent_dealing:"",
          alert_dealing:"",
          prevent_give:"",
          alert_give:"",
          serial:"",
          graduation_date:"",
          files:[],
          saved_files:[],
          deleted_files:[],
          emergency_numbers:[],
          status:1
        }
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/hr/employees/create", this.form)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err)
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
  },
}
</script>