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
        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.name_en.label")
            }}</label>
            <input
              type="text"
              v-model="form.name_en"
              :placeholder="$t('form.name_en.placeholder')"
              :disabled="true"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="" class="form-label">{{
              $t("form.name_ar.label")
            }}</label>
            <input
              type="text"
              v-model="form.name_ar"
              :disabled="true"
              :placeholder="$t('form.name_ar.placeholder')"
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-12 col-xxl-6">
          <div class="form-group discount">
            <label class="form-label">{{
              $t("unit.equivalentQuantity_value.label")
            }}</label>
            <InputGroupWrapper>
              <InputText
                v-model.trim="form.unit.value"
                type="number"
                min="0"
                :placeholder="$t('unit.equivalentQuantity_value.placeholder')"
              />
              <!-- :class="{
                'p-invalid': $v.form.unit.value.$error,
              }" -->
              <Dropdown
                v-model="form.unit.unit"
                :placeholder="$t('unit.equivalentQuantity_unit.placeholder')"
                :options="productUnits"
                optionLabel="name"
                optionValue="id"
                dataKey="id"
              />
              <!-- :class="{
                  'p-invalid': $v.form.unit.unit.$error,
                }" -->
            </InputGroupWrapper>
          </div>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp/productAndService/inventoryManagement.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required } from "vuelidate/lib/validators";
import InputGroupWrapper from "@/components/global/UI/inputs/InputGroupWrapper";

import { requiredError } from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    InputGroupWrapper,
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
    value: {
      type: Object,
      required: true,
    },
    productUnits: {
      type: Array,
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
      form: this.value,
    };
  },
  validations: {
    form: {},
  },

  methods: {
    requiredError,
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
  },
};
</script>
