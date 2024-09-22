<template>
  <div class="product">

    <Form 
      v-model="form" 
      :isLoading="upsertLoading" 
      :isUpdating="isUpdating" 
      :displayForm="displayForm" 
      :itemTypeOption="itemTypeOption" 
      @close="resetForm"
      @cancel="resetForm" 
      @save="create" 
      :error="upsertError"
      :header="isUpdating ? $t('dialog.header.edit') : $t('dialog.header.new')"
    ></Form>
  </div>
</template>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<script>
import Form from "@/components/erp_v2/items/product/Form.vue";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";
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
      displayForm:this.display,
      isUpdating: false,
      itemTypeOption: [
        { en: "product", ar: "منتجي", id: "1" },
        { en: "service", ar: "خدمي", id: "2" },
      ],
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    products() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },
    ...mapGetters("erp_v2/items/product", {
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
        account_name_en: "",
        final_account_id:"",
        parent_account_id:"",
      };
    },
  },
  mounted() {
      if (!this.products.length > 0) {
        this.list();
      }
    },
  methods: {
    ...mapActions("erp_v2/items/product", [
      "setForm",
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
        name_en: "",
        name_ar: "",
        group: null,
        location: null,
        serial: 111111,
        accounting_code: 1111,
        status: 1,
        item_type:null,
        file: null,
        general: {
          min_limit: null,
          max_limit: null,
          last_supplier: null,
          in_active: false,
          prevent_give_discount: false,
          prevent_negative_quantity_take_out: false,
          stop_selling: false,
          prevent_price_modification: false,
          tax_free: false,
          alert_before_expiration_date: false,
          expiration_date_value: null,
          expiration_date_selection: null,
        },
        mic: {
          indication: "",
          pharmaceutical_group: "",
          dose: "",
          contra_indication: "",
          pharmacological_group: "",
          other: "",
          precaution: "",
          side_effect: "",
          active_ingredient: "",
          pregnancy: "",
        },
        pricing_and_unit: [],
        alternatives: [],
        alternative_barcode: [],
      },
        this.closeForm();
      this.upsertResponse = null;
      this.upsertError = null;
    },
    create() {
      this.form.group.parent = this.form.group.parent_data
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
      let data = JSON.stringify(this.form);
      formData.append("data", data);

      // this.$emit('setSelected', this.form.final_account);
      this.$store
        .dispatch("erp_v2/items/product/create", formData)
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
      let params = {pageNumber:1,rows:1000000,name_en:""}
      this.$store.dispatch("erp_v2/items/product/list", params)
    }, 
    // list() {
    //   this.$store
    //     .dispatch("erp_v2/items/product/list", this.filterParams)
    //     .then(() => {
    //       if (this.getItems == true) {
    //         this.$emit("setItems");
    //       }
    //       if (!this.isPaginating) {
    //         this.pagination.offset = 0;
    //         this.pagination.pageNumber = 0;
    //       }
    //       this.isSearching = false;
    //       this.isPaginating = false;
    //     });
    // },
    // search() {
    //   this.isSearching = true;
    //   this.isSearch = true;
    //   if (this.filterParams.name_en) {
    //     this.filterParams.pageNumber = 1;
    //     this.list();
    //   } else {
    //     this.infoToast(
    //       this.$t("toast.search.summery"),
    //       this.$t("toast.search.details")
    //     );
    //   }
    // },
    
    // fetchAll() {
    //   this.isSearch = false;
    //   this.searchQuery = { name_en: "" };
    //   this.list();
    // },
    // onPage(event) {
    //   this.isPaginating = true;
    //   this.pagination.pageNumber = event.page;
    //   this.list();
    // },
  },
};
</script>
