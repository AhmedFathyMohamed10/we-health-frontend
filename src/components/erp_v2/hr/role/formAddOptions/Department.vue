<template>
  <div class="department">
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
      :role_options="role_options"
      :header="$t('newDepartment')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newDepartment":"New Department"
      },
      "ar":{
        "newDepartment":"العمل الإضافي والمتأخر جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/hr/department/Form.vue";
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
      form: {
        department_name: "",
        parent: null,
        serial_code: 11144,
        role: null,
        description: "",
      },
      role_options: [
        { en: "Management", ar: "منتجي", id: 1 },
        { en: "Supplier", ar: "خدمي", id: 2 },
        { en: "Cashier", ar: "خدمي", id: 3 },
      ],
      displayForm: false,
      isUpdating:false,
    }
  },
  computed:{
    ...mapGetters("erp_v2/hr/department", {
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
  created(){
    this.list()
  },
  methods:{
    ...mapActions("erp_v2/hr/department", [
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
        department_name: "",
        parent: null,
        serial_code: 11144,
        role: null,
        description: "",
      },
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/hr/department/create", this.form)
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
    list() {
      let params = {pageNumber:1,rows:1000000,department_name:""}
      this.$store.dispatch("erp_v2/hr/department/list", params)
    },   
  },
}
</script>