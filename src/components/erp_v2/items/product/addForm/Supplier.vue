<template>
  <div class="group">
    <AddButton @add="openForm"></AddButton>
    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :error="upsertError"
      :isUpdating="isUpdating"
      :category="2"
      :genderOptions="genderOptions"
      :maritalStatusOptions="maritalStatusOptions"
      :paymentMethodOptions="paymentMethodOptions"
      :header="$t('newSupplier')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newSupplier":"New Supplier"
      },
      "ar":{
        "newSupplier":"مورد جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/clients/client/Form.vue";
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
      form:{
        category: 2,
        userdata: null,
        name: "",
        group: null,
        gender: "",
        dob: null,
        profession: "",
        marital_status: null,
        phone_number: "",
        other_phone_number: "",
        home_phone_number: "",
        address: "",
        city: "",
        discount: null,
        profit: null,
        max_debit: null,
        insurance_name: "",
        card_name: "",
        member_id: "",
        plan: "",
        expiration_date: null,
        payment_method: null,
        files: null,
        serial: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        saved_files: [],
        uploaded_files: [],
      },
      displayForm: false,
      isUpdating:false,
    }
  },
  computed:{
    ...mapGetters("erp_v2/clients", {
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),
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
    ...mapActions("erp_v2/clients", [
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
        category: 2,
        userdata: null,
        name: "",
        group: null,
        gender: "",
        dob: null,
        profession: "",
        marital_status: null,
        phone_number: "",
        other_phone_number: "",
        home_phone_number: "",
        address: "",
        city: "",
        discount: null,
        profit: null,
        max_debit: null,
        insurance_name: "",
        card_name: "",
        member_id: "",
        plan: "",
        expiration_date: null,
        payment_method: null,
        files: null,
        serial: null,
        treat_as: null,
        prevent_dealing: false,
        alert_dealing: false,
        prevent_give: false,
        alert_give: false,
        saved_files: [],
        uploaded_files: [],
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$emit('setSelected', this.form.group);
      if (typeof this.form.group === "object") {
        this.form.group = this.form.group;
      } 
      let formData = new FormData();
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          console.log()
          formData.append("uploaded_files", element.file);
        });
      } else {
        formData.append("uploaded_files", []);
      }
      delete this.form.uploaded_files;
      delete this.form.saved_files;
      let data = JSON.stringify(this.form);
      formData.append("data", data);
      this.$store
        .dispatch(`erp_v2/clients/create`, formData)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    // create() {
    //   this.$store
    //     .dispatch("erp_v2/clients/create", this.form)
    //     .then((res) => {
    //       this.resetForm();
    //       const summery = res.statusText;
    //       const details = res.data.message;
    //       this.successToast(summery, details);
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       const summery = err.statusText;
    //       const details = err.message;
    //       this.errorToast(summery, details);
    //     });
    // },
  },
}
</script>