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
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <div class="row">
        <!-- Band Name -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.bondName.label")
            }}</label>
            <input
              type="text"
              v-model="form.bondName"
              :placeholder="$t('form.bondName.placeholder')"
              class="form-control"
              :class="{
                'is-invalid': $v.form.bondName.$error,
              }"
            />
            <div
              v-if="!$v.form.bondName.required && $v.form.bondName.$error"
              class="invalid-feedback"
            >
              {{ requiredError($t("form.bondName.label")) }}
            </div>
            <div
              v-else-if="!$v.form.bondName.minLength && $v.form.bondName.$error"
              class="invalid-feedback"
            >
              {{
                maxLengthError(
                  $t("form.bondName.label"),
                  $v.form.bondName.$params.minLength.min
                )
              }}
            </div>
            <div
              v-else-if="!$v.form.bondName.maxLength && $v.form.bondName.$error"
              class="invalid-feedback"
            >
              {{
                minLengthError(
                  $t("form.bondName.label"),
                  $v.form.bondName.$params.maxLength.max
                )
              }}
            </div>

            <div
              v-else-if="
                !$v.form.bondName.notContainsHtmlTags && $v.form.bondName.$error
              "
              class="invalid-feedback"
            >
              {{ htmlTagsError($t("form.bondName.label")) }}
            </div>
          </div>
        </div>
        <!-- Band Type -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.bondType.label")
            }}</label>
            <Dropdown
              v-model="form.bondType"
              :options="typeOption"
              :optionLabel="locale"
              optionValue="id"
              :placeholder="$t('form.bondType.placeholder')"
              :class="{
                'p-invalid': $v.form.bondType.$error,
              }"
            />
            <div
              v-if="!$v.form.bondType.required && $v.form.bondType.$error"
              class="p-error"
            >
              {{ requiredError($t("form.bondType.label")) }}
            </div>
          </div>
        </div>

        <!-- Corresponding Account -->
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <label class="form-label">{{
              $t("form.correspondingAccount.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.form.correspondingAccount.$error }"
              >
                <i class="pi pi-search"></i>
              </span>
              <AutoComplete
                v-model="form.correspondingAccount"
                :suggestions="accountParams.suggestions"
                :class="{ 'p-invalid': $v.form.correspondingAccount.$error }"
                field="name"
                optionValue="id"
                :placeholder="$t('form.correspondingAccount.placeholder')"
                @complete="search($event, accountParams)"
                :forceSelection="true"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.form.correspondingAccount.$error &&
                  !$v.form.correspondingAccount.required
                "
              >
                {{ requiredError($t("form.correspondingAccount.label")) }}
              </small>
            </div>
          </div>
        </div>

        <!-- Tax Account -->
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <label class="form-label">{{ $t("form.taxAccount.label") }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.form.taxAccount.$error }"
              >
                <i class="pi pi-search"></i>
              </span>
              <AutoComplete
                v-model="form.taxAccount"
                :suggestions="accountParams.suggestions"
                :class="{ 'p-invalid': $v.form.taxAccount.$error }"
                field="name"
                :placeholder="$t('form.taxAccount.placeholder')"
                @complete="search($event, accountParams)"
                :forceSelection="true"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="$v.form.taxAccount.$error && !$v.form.taxAccount.required"
              >
                {{ requiredError($t("form.taxAccount.label")) }}
              </small>
            </div>
          </div>
        </div>
        <!-- group -->
        <div class="col-md-5 col-lg-5"> 
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.group.label")
            }}</label>
            <Dropdown
              v-model="form.group"
              :options="groupOption"
              optionLabel="name"
              optionValue="id"
              :placeholder="$t('form.group.placeholder')"
              :class="{
                'p-invalid': $v.form.group.$error,
              }"
            />
            <div
              v-if="!$v.form.group.required && $v.form.group.$error"
              class="p-error"
            >
              {{ requiredError($t("form.group.label")) }}
            </div>
          </div>
        </div>

        <!-- add -->
        <div class="col-1">
          <AddButton @add="addRow"></AddButton>
          <!-- <div class="error">
              <small class="d-block text-danger" v-if="!v.$error && !v.maxLength">
                {{
                  maxRecordsError($t("category.header"), v.$params.maxLength.max)
                }}
              </small>
            </div> -->
        </div>
      </div>
      <Form
        v-model="group"
        :isLoading="upsertLoading"
        :displayForm="displayFormGroup"
        @close="resetForm"
        :error="upsertError"
        @cancel="resetForm"
        @save="create"
        :header="$t('dialog.header.newGroup')"
      >
      </Form>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/restrictions/RestrictionsGroup.json"></i18n>
<i18n src="@/lang/erp/restrictions/TypesOfRestrictions.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Form from "@/components/erp/restrictions/restrictionsGroup/Form";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import AddButton from "@/components/global/utilities/AddButton.vue";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast],
  components: {
    EditDialog,
    AddButton,
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
    typeOption: {
      type: Array,
    },
    value: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
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
      displayFormGroup: false,
      displayFormTable: false,
      accountParams: {
        url: "Account",
        suggestions: [],
      },
      form: this.value,
      group: {
        name: "",
        description: "",
      },
    };
  },
  computed: {
    ...mapGetters("erp/Restrictions/RestrictionsGroup", {
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
    groupOption() {
      if (this.$store.getters["erp/Restrictions/RestrictionsGroup/getListResponse"])
        return this.$store.getters["erp/Restrictions/RestrictionsGroup/getListResponse"].results;
      else return [];
    },
  },
  created() {
    if (!this.groupOption.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp/Restrictions/RestrictionsGroup/list", params);
    }
  },

  validations: {
    form: {
      bondName: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
      bondType: {required,},
      group: {
        required,
      },
      taxAccount: { required },
      correspondingAccount: { required },
    },
  },

  methods: {
    ...mapActions("RestrictionsGroup", ["setUpsertError"]),
    htmlTagsError,
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
    /////////// Search //////////////////
    async search(event, params) {
      console.log(event.query);
      try {
        await this.$store
          .dispatch("erp/Accounts/Account/search", {
            url: params.url,
            name: event.query,
          })
          .then((res) => {
            console.log(res);
            params.suggestions = [...res.data];
          });
      } catch (error) {
        console.log(error);
      }
    },
    ////////// UPSERT ///////////////////

    addRow() {
      this.displayFormGroup = true;
    },
    closeForm() {
      this.upsertError = null;
      this.displayFormGroup = false;
    },

    resetForm() {
      this.closeForm();
      this.group = {
        name: "",
        description: "",
      };
    },
    create() {
      this.$store
        .dispatch("RestrictionsGroup/create", this.group)
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
