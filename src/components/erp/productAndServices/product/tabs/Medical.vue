<template>
    <div class="form">
      <div class="row">
        <div class="row" v-if="error">
          <div class="col-12">
            <div class="errors" v-if="typeof error === 'object'">
              <Message
                severity="error"
                v-for="(value, key) in error.general"
                :key="key"
                :closable="false"
              >
                <span v-if="typeof value === 'string'">{{ value }}</span>
                <span v-else>{{ value[0] }}</span>
              </Message>
            </div>
          </div>
        </div>
        <div class="col-12 ">
        <div class="form-group">
          <div class="form-group">
            <label class="form-label">{{
              $t("medical.indications.label")
            }}</label>
            <textarea
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.indications"
              :placeholder="$t('medical.indications.placeholder')"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="col-12 ">
        <div class="form-group">
          <div class="form-group">
            <label class="form-label">{{
              $t("medical.sideEffects.label")
            }}</label>
            <textarea
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.sideEffects"
              :placeholder="$t('medical.sideEffects.placeholder')"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="form-group">
          <div class="form-group">
            <label class="form-label">{{
              $t("medical.chemicalComposition.label")
            }}</label>
            <textarea
              class="form-control"
              rows="5"
              cols="30"
              v-model="form.chemicalComposition"
              :placeholder="$t('medical.chemicalComposition.placeholder')"
            ></textarea>
          </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  <i18n src="@/lang/erp/productAndService/product.json"></i18n>
  <script>
  import {
    requiredError,
    minLengthError,
    maxLengthError,
  } from "@/validation/errors.js";
  import { mapGetters, mapActions } from "vuex";
  
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
    },
    data() {
      return {
      };
    },
    computed: {
      ...mapGetters("erp/ProductAndService/productAndService/product", {
        getMedical: "getMedical",
      }),
  
      form: {
        get() {
          return this.getMedical;
        },
        set(value) {
          this.setMedical(value);
        },
      },
    },
    methods: {
      requiredError,
      minLengthError,
      maxLengthError,
      ...mapActions("erp/ProductAndService/productAndService/product", ["setMedical"]),
    },
  };
  </script>
  