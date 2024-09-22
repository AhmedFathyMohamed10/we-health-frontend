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
        <!-- Name -->
        <div class="col-md-6">
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
        <!-- Type -->
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="form-label">{{ $t("form.type.label") }}</label>
            <Dropdown
              v-model="form.type"
              :options="typeOption"
              :optionLabel="locale"
              optionValue="id"
              :placeholder="$t('form.type.placeholder')"
              :class="{
                'p-invalid': $v.form.type.$error,
              }"
            />
            <div
              v-if="!$v.form.type.required && $v.form.type.$error"
              class="p-error"
            >
              {{ requiredError($t("form.type.label")) }}
            </div>
          </div>
        </div>

        <!-- Bank CashA ccount -->
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <label class="form-label">{{
              $t("form.bankCashAccount.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.form.bankCashAccount.$error }"
              >
                <i class="pi pi-search"></i>
              </span>
              <AutoComplete
                v-model="form.bankCashAccount"
                :suggestions="accountParams.suggestions"
                :class="{ 'p-invalid': $v.form.bankCashAccount.$error }"
                field="name"
                optionValue="id"
                :placeholder="$t('form.bankCashAccount.placeholder')"
                @complete="search($event, accountParams)"
                :forceSelection="true"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.form.bankCashAccount.$error &&
                  !$v.form.bankCashAccount.required
                "
              >
                {{ requiredError($t("form.bankCashAccount.label")) }}
              </small>
            </div>
          </div>
        </div>

        <!--  Check Storage Account  -->
        <div class="col-md-6 col-lg-6">
          <div class="form-group">
            <label class="form-label">{{
              $t("form.checkStorageAccount.label")
            }}</label>
            <div class="p-inputgroup">
              <span
                class="p-inputgroup-addon"
                :class="{ 'p-invalid': $v.form.checkStorageAccount.$error }"
              >
                <i class="pi pi-search"></i>
              </span>
              <AutoComplete
                v-model="form.checkStorageAccount"
                :suggestions="accountParams.suggestions"
                :class="{ 'p-invalid': $v.form.checkStorageAccount.$error }"
                field="name"
                :placeholder="$t('form.checkStorageAccount.placeholder')"
                @complete="search($event, accountParams)"
                :forceSelection="true"
              />
            </div>
            <div class="error">
              <small
                class="p-invalid"
                v-if="
                  $v.form.checkStorageAccount.$error &&
                  !$v.form.checkStorageAccount.required
                "
              >
                {{ requiredError($t("form.checkStorageAccount.label")) }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/restrictions/TypesOfSecurities.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import AccountOption from "@/mixins/erp/account/AccountOption.js";

import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  mixins: [AccountOption],

  components: {
    EditDialog,
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
      form: this.value,
    };
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
      type: { required },
      checkStorageAccount: { required },
      bankCashAccount: { required },
    },
  },

  methods: {
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
    // async search(event, params) {
    //   console.log(event.query);
    //   try {
    //     await this.$store
    //       .dispatch("Account/search", {
    //         url: params.url,
    //         name: event.query,
    //       })
    //       .then((res) => {
    //         console.log(res);
    //         params.suggestions = [...res.data];
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>
