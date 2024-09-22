<template>
  <div class="mic">
    <Base>
    <div class="row">
      <div class="col-lg-6 col-md-12">
        <Base>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="d-grid">
            <h6>Indication</h6>
            <h6>Contra Indication</h6>
            <h6>Precaution</h6>
          </div>
          <div class="d-grid">
            <h6>{{ form.mic.indication }}</h6>
            <h6>{{ form.mic.contra_indication }}</h6>
            <h6>{{ form.mic.precaution }}</h6>
          </div>
        </div>
        </Base>
      </div>
      <div class="col-lg-6 col-md-12">
        <Base>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="d-grid">
            <h6>Pharmaceutical Group</h6>
            <h6>Pharmacological Group</h6>
          </div>
          <div class="d-grid">
            <h6>{{ form.mic.pharmaceutical_group }}</h6>
            <h6>{{ form.mic.pharmacological_group }}</h6>
          </div>
        </div>
        </Base>
      </div>
      <div class="col-lg-6 col-md-12">
        <Base>
        <div class="d-flex flex-wrap justify-content-between">
          <div class="d-grid">
            <h6>Active Ingredient</h6>
            <h6>Side Effects</h6>
            <h6>Pregnancy</h6>
            <h6>Dose</h6>
            <h6>Other</h6>
          </div>
          <div class="d-grid">
            <h6>{{ form.mic.active_ingredient }}</h6>
            <h6>{{ form.mic.side_effect }}</h6>
            <h6>{{ form.mic.pregnancy }}</h6>
            <h6>{{ form.mic.dose }}</h6>
            <h6>{{ form.mic.other }}</h6>
          </div>
        </div>
        </Base>
      </div>
    </div>

    </Base>
  </div>
</template>

<i18n src="@/lang/erp_v2/items/product.json"></i18n>

<i18n src="@/lang/global/global.json"></i18n>

<script>
import Base from "@/components/global/utilities/Base.vue";
export default {
  props: {
    value: {
      type: Object,
    },
  },
  components: {
    Base,
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
};
</script>