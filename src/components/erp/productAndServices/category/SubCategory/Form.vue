<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
    >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message
              severity="error"
              v-for="(value, key) in error"
              :key="key"
              :closable="false"
            >
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} :{{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.name.label") }}</label>
            <input
              type="text"
              v-model="form.name"
              :placeholder="$t('form.name.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.name.$error,
              }"
            />
            <div
              v-if="!$v.form.name.required && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.name.label")) }}
            </div>
            <div
              v-else-if="!$v.form.name.minLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.name.label"),
                  $v.form.name.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("form.name.label"),
                  $v.form.name.$params.maxLength.max
                )
              }}
            </div>
            <div
              v-else-if="
                !$v.form.name.notContainsHtmlTags && $v.form.name.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.name.label")) }}
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.category.label")
            }}</label>
            <Dropdown
              v-model="form.main_category"
              :options="mainCategoryChoose"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.category.placeholder')"
              :class="{
                'p-invalid': $v.form.main_category.$error,
              }"
            />
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  !$v.form.main_category.required &&
                  $v.form.main_category.$error
                "
              >
                {{ requiredError($t("form.category.label")) }}
              </small>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label data-v-2a5c4c3c="" for="" class="form-label invisible"
              >Add</label
            >
            <button
              md-4
              data-v-2a5c4c3c=""
              class="btn btn-icon rounded-circle btn-success"
              @click="addRow"
            >
              <i data-v-2a5c4c3c="" class="fa fa-plus fa-md"></i>
            </button>
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label class="form-label">{{ $t("form.description.label") }}</label>
            <textarea
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.description"
              :placeholder="$t('form.description.placeholder')"
              :class="{
                'is-invalid': $v.form.description.$error,
              }"
            ></textarea>
            <div
              v-if="
                !$v.form.description.notContainsHtmlTags &&
                $v.form.description.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.description.label")) }}
            </div>
          </div>
        </div>
      </div>
      <Form
        v-model="mainCategory"
        :isLoading="upsertLoading"
        :displayForm="displayFormMainCategory"
        @close="resetForm"
        :error="upsertError"
        @cancel="resetForm"
        @save="create"
        :header="$t('dialog.header.new')"
      >
      </Form>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/productAndService/SubCategory.json"></i18n>
<i18n src="@/lang/erp/productAndService/MainCategory.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import Form from "@/components/erp/productAndServices/category/MainCategory/Form.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import toast from "@/mixins/global/toast";
import {
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import { mapGetters, mapActions } from "vuex";

export default {
  mixins: [toast],
  components: {
    EditDialog,
    Form,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    error: {
      type: Object,
    },
    value: {
      type: Object,
      required: true,
    },
    header: {
      type: String,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  data() {
    return {
      displayFormMainCategory: false,
      form: this.value,
      mainCategory: {
        name: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapGetters("erp/ProductAndService/Category/MainCategory", {
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",
    }),

    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
    mainCategoryChoose() {
      if (this.$store.getters["erp/ProductAndService/Category/MainCategory/getListResponse"]){
        console.log(this.$store.getters["erp/ProductAndService/Category/MainCategory/getListResponse"].results)
        return this.$store.getters["erp/ProductAndService/Category/MainCategory/getListResponse"].results;}
      else return [];
    },
  },

  created() {
    if (!this.mainCategoryChoose.length > 0) {
      let params = { pageNumber:1, rows:1000000 ,name:"" };
      this.$store.dispatch("erp/ProductAndService/Category/MainCategory/list", params);
    }
  },

  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      main_category: {
        required,
      },
      description: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },

  methods: {
    ...mapActions("erp/ProductAndService/Category/MainCategory", ["setUpsertError"]),
    requiredError,
    minLengthError,
    maxLengthError,
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
    },

    ////////// UPSERT ///////////////////

    addRow() {
      this.displayFormMainCategory = true;
    },
    closeForm() {
      this.upsertError = null;
      this.displayFormMainCategory = false;
    },

    resetForm() {
      this.closeForm();
      this.mainCategory = {
        name: "",
        description: "",
      };
    },
    create() {
      this.$store
        .dispatch("erp/ProductAndService/Category/MainCategory/create", this.mainCategory)
        .then((res) => {
          this.resetForm();
          const summery = res.statusText;
          const details = res.data.message;
          this.successToast(summery, details);
        })
        .catch((err) => {
          console.log(err);
          const summery = err.statusText;
          const details = err.message;
          this.errorToast(summery, details);
        });
    },
  },
};
</script>
