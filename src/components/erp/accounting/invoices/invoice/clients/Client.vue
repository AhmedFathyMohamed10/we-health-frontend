<template>
  <div class="client">
    <AddButton @add="openForm"></AddButton>
    <Form v-model="form" :isLoading="upsertLoading" :displayForm="displayForm" @close="resetForm" @cancel="resetForm" @save="create" :error="upsertError" :header="$t('newClient')"> 
    </Form>    
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newClient":"New Client"
      },
      "ar":{
        "newClient":"عميل جديد"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp/clients/Form.vue";
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
        name: "",
        mobile: "",
        address: "",
        group: "",
        discount_ratio: "",
        maximum_debt: "",
        job_title: "",
        pricing_pattern: "",
        status: 1,
      },
      displayForm: false,
    }
  },
  computed:{
    ...mapGetters("erp/clients", {
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
    ...mapActions("erp/clients", [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.displayForm = false;
    },
    resetForm(){
      this.form={
        name: "",
        mobile: "",
        address: "",
        group: "",
        discount_ratio: "",
        maximum_debt: "",
        job_title: "",
        pricing_pattern: "",
        status: 1,
      }
      this.closeForm();
      this.upsertResponse=null;
      this.upsertError=null;
    },    
    create(){
      this.form['nameValue']=this.form.name
      if (typeof this.form.name === 'object'){
        this.form.name=this.form.name.fullname
      }
      else if (typeof this.form.name === 'string'){
        this.form.name=this.form.name
      }
      this.$store.dispatch("erp/clients/create", this.form)
      .then((res) => {
        this.resetForm();
        const summery = res.statusText; 
        const details =  res.data.message;
        this.successToast(summery,details)
      })
      .catch((err) => {
        const summery = err.statusText; 
        const details =  err.response.data;
        this.errorToast(summery,details)
      })
    },
    list() {
      let params = {pageNumber:1,rows:1,name:""}
      this.$store.dispatch("erp/clients/list", params)
    },    
  },
}
</script>