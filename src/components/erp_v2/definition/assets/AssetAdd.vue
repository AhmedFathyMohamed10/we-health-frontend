<template>
  <div class="asset">
    <Form 
      v-model="form" 
      :isLoading="upsertLoading" 
      :isUpdating="isUpdating"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm" 
      @save="create" 
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')">
    </Form>
  </div>
</template>
<i18n src="@/lang/erp_v2/assets/fixedAsset.json"></i18n>
<script>
import Form from "@/components/erp_v2/assets/fixedAsset/Form.vue";
import toast from "@/mixins/global/toast";
import { mapGetters, mapActions } from "vuex";
import pagination from "@/mixins/global/pagination";

export default {
  mixins: [toast, pagination],
  props: {
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    }
  },
  watch: {
    display() {
      this.displayForm=this.display;
    }
  },
  components: {
    Form,
  },
  data() {
    return {
      displayForm: this.display,
      isUpdating: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    assets() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    ...mapGetters("erp_v2/assets/fixedAsset", {
      getForm: "getForm",
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

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
    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        name_en: "",
        group_id: "",
      };
    },
  },
  mounted() {
      if (!this.assets.length > 0) {
        this.list();
      }
    },
  methods: {
    ...mapActions("erp_v2/assets/fixedAsset", [
      "setUpsertResponse",
      "setUpsertError",
      "setForm",
    ]),
    closeForm() {
      this.isUpdating = false;
      this.displayForm = false;
      this.$emit('close');
    },
    resetForm() {
      console.log("tests")
      this.form = {
        name_en: "",
        name_ar: "",
        group: "",
        location: "",
        serial: 111111,
        account: null,
        description: "",
        purchasing_date: null,
        expiration_date: null,
        price: null,
        barcode: null,
        in_active: false,
        in_maintenance: false,
        total_destruction: false,
        last_supplier: null,
        employee_custody: null,
        last_purchasing_date_warranty: null,
        end_in_selection: null,
        end_in_value: null,
        last_purchasing_date_maintenance: null,
        maintenance_every_value: null,
        maintenance_every_selection: null,
        next_maintenance: "",
        uploaded_files: [],
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.form.group.parent = this.form.group.parent_data
      if (this.form.last_purchasing_date_maintenance) {
        this.form.last_purchasing_date_maintenance = this.$moment(this.form.last_purchasing_date_maintenance).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.expiration_date) {
        this.form.expiration_date = this.$moment(this.form.expiration_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.purchasing_date) {
        this.form.purchasing_date = this.$moment(this.form.purchasing_date).format(
          "YYYY-MM-DD"
        );
      }
      if (this.form.last_purchasing_date_warranty) {
        this.form.last_purchasing_date_warranty = this.$moment(this.form.last_purchasing_date_warranty).format(
          "YYYY-MM-DD"
        );
      }
      
      let formData = new FormData();
      if (this.form.uploaded_files) {
        this.form.uploaded_files.forEach((element) => {
          formData.append("uploaded_files", element.file);
        });
      } else {
        formData.append("uploaded_files", []);
      }

      delete this.form.uploaded_files;
      delete this.form.saved_files;
      delete this.form.deleted_files;
      
      let data = JSON.stringify({...this.form});
      formData.append("data", data);
      this.$store.dispatch("erp_v2/assets/fixedAsset/create", formData)
        .then((res) => {
          console.log(res);
          this.resetForm();
          const summery = res.statusText;
          const details = res.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.error(err);
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
    ///////////////// LIST /////////////////////////////
    list() {
      let params = {pageNumber:1,rows:1000000,name_en:""}
      this.$store.dispatch("erp_v2/assets/fixedAsset/list", this.filterParams)
    },
  },
};
</script>