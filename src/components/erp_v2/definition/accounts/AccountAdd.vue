<template>
  <div class="account">
    <Form
      v-model="form"
      :isLoading="upsertLoading"
      :isUpdating="isUpdating"
      :account_type_options="account_type_options"
      :account_disposition_options="account_disposition_options"
      :displayForm="displayForm"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    />
  </div>
</template>
<i18n src="@/lang/erp_v2/accounts/account.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";
import Form from "@/components/erp_v2/accounts/account/Form.vue";
import pagination from "@/mixins/global/pagination";

export default {
  name: "account",
  mixins: [pagination, toast],
  props: {
    display: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
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
      account_type_options: [
        { name: "Credit", en: "Credit", ar: "دائن", id: 1 },
        { name: "Debit", en: "Debit", ar: "مدين", id: 2 },
        { name: "Both", en: "Both", ar: "كلاهما", id: 3 },
      ],
      account_disposition_options: [
        { name: "Primary", en: "Primary", ar: "رئيسي", id: 1 },
        { name: "Secondary", en: "Secondary", ar: "فرعي", id: 2 },
      ],
      displayForm: this.display,
      form: {
        account_name_en: "",
        account_name_ar: "",
        account_code: null,
        parent_account: null,
        final_account: null,
        account_type: null,
        account_disposition: null,
        description: "",
      },
      isUpdating: false,
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    accounts() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
  
    ...mapGetters("erp_v2/accounts/accountAdd", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",

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

  
    filterParams() {
      return {
        pageNumber: this.pagination.pageNumber + 1,
        rows: this.pagination.rows,
        account_name_en: "",
        final_account_id:"",
        parent_account_id:"",
      };
    },
  },
  mounted() {
      if (!this.accounts.length > 0) {
        this.list();
      }
    },
  methods: {
    ...mapActions("erp_v2/accounts/accountAdd", [
      "setUpsertResponse",
      "setUpsertError",
    ]),
    closeForm() {
      this.isUpdating = false;
      this.displayForm = false;
      this.$emit('close');
    },
    resetForm() {
      this.form = {
        account_name_en: "",
        account_name_ar: "",
        account_code: null,
        parent_account: null,
        final_account: null,
        account_type: null,
        account_disposition: null,
        description: "",
      };
      this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.$store
        .dispatch("erp_v2/accounts/accountAdd/create", this.form)
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
      this.$store
        .dispatch("erp_v2/accounts/accountAdd/list", this.filterParams)
        .then(() => {
          if (!this.isPaginating) {
            this.pagination.offset = 0;
            this.pagination.pageNumber = 0;
          }
          this.isSearching = false;
          this.isPaginating = false;
        });
    },
  },

};
</script> 
