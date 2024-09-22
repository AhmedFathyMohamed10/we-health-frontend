<template>
  <div class="shift">
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
      :header="$t('newShift')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newShift":"New Shift"
      },
      "ar":{
        "newShift":"العمل الإضافي والمتأخر جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/hr/shiftDefinition/Form.vue";
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
        name:"",
        shift_day_from: null,
        shift_day_to: null,
        work_hour_from: null,
        work_hour_to: null,
      },
      displayForm: false,
      isUpdating:false,
    }
  },
  computed:{
    ...mapGetters("erp_v2/hr/shiftDefinition", {
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
    ...mapActions("erp_v2/hr/shiftDefinition", [
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
      this.form= {
        name:"",
        shift_day_from: null,
        shift_day_to: null,
        work_hour_from: null,
        work_hour_to: null,
      },
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      if (this.form.shift_day_from) {
        this.form.shift_day_from = this.$moment(this.form.shift_day_from).format("YYYY-MM-DD" );
      }
      if (this.form.shift_day_to) {
        this.form.shift_day_to = this.$moment(this.form.shift_day_to).format("YYYY-MM-DD");
      }
      if (this.form.work_hour_from) {
        this.form.work_hour_from = this.$moment(this.form.work_hour_from).format("hh:mm:ss");
      }
      if (this.form.work_hour_to) {
        this.form.work_hour_to = this.$moment(this.form.work_hour_to).format("hh:mm:ss");
      }
      this.$store
        .dispatch("erp_v2/hr/shiftDefinition/create", this.form)
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
    list() {
      let params = {pageNumber:1,rows:1000000, name:""}
      this.$store.dispatch("erp_v2/hr/shiftDefinition/list", params)
    },   
  },
}
</script>