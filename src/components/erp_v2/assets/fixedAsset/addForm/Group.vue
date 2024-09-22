<template>
  <div class="group">
    <AddButton @add="openForm"></AddButton>
    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :displayFormGroup="displayForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :error="upsertError"
      :isUpdating="isUpdating"
      :header="$t('newGroup')"
    >
    </Form>
  </div>
</template>
<i18n lang="json5">
  {
      "en":{
        "newGroup":"New Group"
      },
      "ar":{
        "newGroup":"مجموعه جديدة"
      }
  }
  </i18n>
<script>
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/group/Form.vue";
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
        name_en: "",
        name_ar: "",
        serial: 12345678.333,
        parent: null,
      },
      displayForm: false,
      isUpdating:false,
    }
  },
  computed:{
    ...mapGetters("erp_v2/assets/assetGroup", {
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
    ...mapActions("erp_v2/assets/assetGroup", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setTreeNodes",
    ]),
    openForm() {
      this.displayForm = true;
    },
    closeForm() {
      this.displayForm = false;
    },
    resetForm() {
      this.form= {
        name_en: "",
        name_ar: "",
        serial: 12345678.333,
        parent: null,
      },
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      if (this.form.parent){
        delete this.form.parent.parent
      }
      this.$store
        .dispatch("erp_v2/assets/assetGroup/create", this.form)
        .then((res) => {
          this.resetForm();
          this.nodes = this.groups

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
      let params = {pageNumber:1,rows:1000000,name_en:""}
      this.$store.dispatch("erp_v2/assets/assetGroup/list", params)
    }, 
  },
}
</script>