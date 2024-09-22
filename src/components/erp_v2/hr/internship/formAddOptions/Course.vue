<template>
  <div class="course">
    <AddButton @add="openForm"></AddButton>
    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :payment_type_options="payment_type_options"
      :course_type_options="course_type_options"
      :error="upsertError"
      :isUpdating="isUpdating"
      :header="$t('newCourse')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newCourse":"New OverTime And OverDue"
      },
      "ar":{
        "newCourse":"العمل الإضافي والمتأخر جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/hr/courses/Form.vue";
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
        course_type:null,
        duration:null,
        payment_type:null,
        entity_name:null, 
        description:""
      },
      payment_type_options:[
          { en: "Total", ar: "كلي", id: 1 },
          { en: "partial", ar: "جزئي", id: 2 },
          { en: "Leave request only", ar: "طلب اجازة فقط", id: 3 },
      ],
      course_type_options:[
          { en: "Indoor", ar: "داخلي", id: 1 },
          { en: "Outdoor", ar: "في الخارج", id: 2 },
          { en: "Online", ar: "متصل", id: 3 },
      ],
      displayForm: false,
      isUpdating:false,
    }
  },
  computed:{
    ...mapGetters("erp_v2/hr/courses", {
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
    ...mapActions("erp_v2/hr/courses", [
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
        name:"",
        course_type:null,
        duration:null,
        payment_type:null,
        entity_name:null, 
        description:""
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/hr/courses/create", this.form)
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
      let params = {pageNumber:1,rows:1000000,name:""}
      this.$store.dispatch("erp_v2/hr/courses/list", params)
    }, 
  },
}
</script>