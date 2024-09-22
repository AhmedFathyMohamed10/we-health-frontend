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
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("general.mainCompany.label")
          }}</label>
          <input
            type="text"
            v-model="form.mainCompany"
            :placeholder="$t('general.mainCompany.placeholder')"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("general.materialType.label")
          }}</label>
          <Dropdown
            v-model="form.materialType"
            :options="materialTypeChoose"
            :optionValue="'id'"
            :optionLabel="locale"
            :placeholder="$t('general.materialType.placeholder')"
          />
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label class="form-label">{{ $t("general.provider.label") }}</label>
          <div class="p-inputgroup">
            <span
              class="p-inputgroup-addon"
              :class="{ 'p-invalid': v.provider.$error }"
            >
              <i class="pi pi-search"></i>
            </span>
            <AutoComplete
              v-model="form.provider"
              :suggestions="providerParams.suggestions"
              :class="{ 'p-invalid': v.provider.$error }"
              field="name"
              :placeholder="$t('general.provider.placeholder')"
              @complete="search($event, providerParams)"
              :forceSelection="true"
            />
          </div>
          <div class="error">
            <small
              class="p-invalid"
              v-if="v.provider.$error && !v.provider.required"
            >
              {{ requiredError($t("general.provider.label")) }}
            </small>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("general.shortcutKey.label")
          }}</label>
          <input
            type="text"
            v-model="form.shortcutKey"
            :placeholder="$t('general.shortcutKey.placeholder')"
            class="form-control"
          />
        </div>
      </div>
      <div class="col-lg-12 col-md-12">
        <div class="row">
          <div class="col-md-12 mt-md-3">
            <div class="form-group">
              <div class="field-checkbox d-flex">
                <Checkbox
                  inputId="binary"
                  class="me-2"
                  v-model="form.negativeDrawPrevention"
                  :binary="true"
                  :trueValue="1"
                  :falseValue="2"
                />
                <label for="binary">{{
                  $t("general.negativeDrawPrevention.label")
                }}</label>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-md-3">
            <div class="form-group">
              <div class="field-checkbox d-flex">
                <Checkbox
                  inputId="binary"
                  class="me-2"
                  v-model="form.stopSelling"
                  :binary="true"
                  :trueValue="1"
                  :falseValue="2"
                />
                <label for="binary">{{
                  $t("general.stopSelling.label")
                }}</label>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-md-3">
            <div class="form-group">
              <div class="field-checkbox d-flex">
                <Checkbox
                  inputId="binary"
                  class="me-2"
                  v-model="form.checkExpiryDate"
                  :binary="true"
                  :trueValue="1"
                  :falseValue="2"
                />
                <label for="binary">{{
                  $t("general.checkExpiryDate.label")
                }}</label>
              </div>
            </div>
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
import providerOption from "@/mixins/erp/providers/providerSuggestions";
export default {
  mixins: [providerOption],
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
      materialTypeChoose: [
        { en: "store it", ar: "مخزني", id: 1 },
        { en: "My service", ar: "خدمي", id: 2 },
        { en: "vehicle", ar: "مركب", id: 3 },
      ],
    };
  },
  computed: {
    ...mapGetters("erp/ProductAndService/productAndService/product", {
      getGeneral: "getGeneral",
    }),

    form: {
      get() {
        return this.getGeneral;
      },
      set(value) {
        this.setGeneral(value);
      },
    },
  },

  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    ...mapActions("erp/ProductAndService/productAndService/product", [
      "setGeneral",
    ]),
  },
};
</script>
