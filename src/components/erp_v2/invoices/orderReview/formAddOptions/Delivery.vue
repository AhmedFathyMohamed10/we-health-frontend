<template>
  <div class="allowance-definition">
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
      :header="$t('newAllowanceDefinition')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newAllowanceDefinition":"New Allowance Definition"
      },
      "ar":{
        "newAllowanceDefinition":"العمل الإضافي والمتأخر جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/hr/allowanceDefinition/Form.vue";
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
        allowance_name:"",
        account:null,
        allowance_code:123456,
        description:"",
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
    ...mapGetters("erp_v2/hr/allowanceDefinition", {
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
    ...mapActions("erp_v2/hr/allowanceDefinition", [
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
        allowance_name:"",
        account:null,
        allowance_code:123456,
        description:"",
      },
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/hr/allowanceDefinition/create", this.form)
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
      let params = {pageNumber:1,rows:1000000,allowance_name:""}
      this.$store.dispatch("erp_v2/hr/allowanceDefinition/list", params)
    }, 
  },
}
</script>