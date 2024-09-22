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
      :header="$t('newOverTime')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newOverTime":"New OverTime And OverDue"
      },
      "ar":{
        "newOverTime":"العمل الإضافي والمتأخر جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/hr/overTimeAndOverDue/Form.vue";
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
        over_time_name: "",
        account: null,
        serial_code: 123456,
        hour_equivalency:null,
        hour_equivalency_money:null,
        description: "",
      },
      displayForm: false,
      isUpdating:false,
    }
  },
  computed:{
    ...mapGetters("erp_v2/hr/overTimeAndOverDue", {
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
    ...mapActions("erp_v2/hr/overTimeAndOverDue", [
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
        over_time_name: "",
        account: null,
        serial_code: 123456,
        hour_equivalency:null,
        hour_equivalency_money:null,
        description: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/hr/overTimeAndOverDue/create", this.form)
        .then((res) => {
          console.log(res)
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
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
      let params = {pageNumber:1,rows:1000000,over_time_name:""}
      this.$store.dispatch("erp_v2/hr/overTimeAndOverDue/list", params)
    },   
  },
}
</script>