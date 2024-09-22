<template>
  <div class="form">
    <slot></slot>

    <div class="row">
      <div class="col-md-12 mt-1">
        <label for="binary">{{ $t("product.header") }}</label>
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
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("mainData.name_en.label")
          }}</label>
          <input
            type="text"
            v-model="form.name_en"
            :placeholder="$t('mainData.name_en.placeholder')"
            class="form-control"
            :class="{
              'is-invalid': v.name_en.$error,
            }"
          />
          <div
            v-if="!v.name_en.required && v.name_en.$error"
            class="invalid-feedback"
          >
            {{ requiredError($t("mainData.name_en.label")) }}
          </div>
          <div
            v-if="!v.name_en.minLength && v.name_en.$error"
            class="invalid-feedback"
          >
            {{
              maxLengthError(
                $t("mainData.name_en.label"),
                v.name_en.$params.minLength.min
              )
            }}
          </div>
          <div
            v-if="!v.name_en.maxLength && v.name_en.$error"
            class="invalid-feedback"
          >
            {{
              minLengthError(
                $t("mainData.name_en.label"),
                v.name_en.$params.maxLength.max
              )
            }}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("mainData.name_ar.label")
          }}</label>
          <input
            type="text"
            v-model="form.name_ar"
            :placeholder="$t('mainData.name_ar.placeholder')"
            class="form-control"
            :class="{
              'is-invalid': v.name_ar.$error,
            }"
          />
          <div
            v-if="!v.name_ar.required && v.name_ar.$error"
            class="invalid-feedback"
          >
            {{ requiredError($t("mainData.name_ar.label")) }}
          </div>
          <div
            v-if="!v.name_ar.minLength && v.name_ar.$error"
            class="invalid-feedback"
          >
            {{
              maxLengthError(
                $t("mainData.name_ar.label"),
                v.name_ar.$params.minLength.min
              )
            }}
          </div>
          <div
            v-if="!v.name_ar.maxLength && v.name_ar.$error"
            class="invalid-feedback"
          >
            {{
              minLengthError(
                $t("mainData.name_ar.label"),
                v.name_ar.$params.maxLength.max
              )
            }}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("mainData.subCategory.label")
          }}</label>

          <Dropdown
            v-model="form.subCategory"
            :options="subCategoryOptions"
            optionLabel="name"
            optionValue="id"
            :placeholder="$t('mainData.subCategory.placeholder')"
            :class="{
              'p-invalid': v.subCategory.$error,
            }"
          />
          <div
            v-if="!v.subCategory.required && v.subCategory.$error"
            class="p-error"
          >
            {{ requiredError($t("mainData.subCategory.label")) }}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("mainData.productClassification.label")
          }}</label>

          <Dropdown
            v-model="form.productClassification"
            :options="productClassificationOptions"
            optionLabel="name"
            optionValue="id"
            :placeholder="$t('mainData.productClassification.placeholder')"
            :class="{
              'p-invalid': v.productClassification.$error,
            }"
          />
          <div
            v-if="!v.productClassification.required && v.productClassification.$error"
            class="p-error"
          >
            {{ requiredError($t("mainData.productClassification.label")) }}
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("mainData.codeProduct.label")
          }}</label>
          <span
            :class="[
              locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
            ]"
          >
            <i class="bi bi-plus-circle" @click="generatedRandomCode()" />
            <input
              id="uid-42-field2"
              type="text"
              v-model="form.codeProduct"
              :placeholder="$t('mainData.codeProduct.placeholder')"
              class="form-control"
            />
          </span>
        </div>
      </div>

      <div class="col-md-6 col-xl-4">
        <div class="form-group mt-7">
          <div class="field-checkbox d-flex">
            <Checkbox
              inputId="binary"
              class="me-2"
              v-model="form.status"
              :binary="true"
              :trueValue="1"
              :falseValue="2"
            />
            <label for="binary" class="ms-0">{{
              $t("mainData.status.label")
            }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/erp/productAndService/product.json"></i18n>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  requiredError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  components: {},
  props: {
    v: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
    },
    subCategoryOptions:{
      type: Array,
    },
    productClassificationOptions:{
      type: Array,
    },
  },
  data() {
    return {
      data: {},
    };
  },
  computed: {
    ...mapGetters("erp/ProductAndService/productAndService/product", {
      getForm: "getForm",
    }),

    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    ...mapActions("erp/ProductAndService/productAndService/product", ["setForm"]),
    generatedRandomCode() {
      this.form.codeProduct = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        (c) =>
          (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
          ).toString(16)
      );
      return this.form.codeProduct;
    },
  },
};
</script>
