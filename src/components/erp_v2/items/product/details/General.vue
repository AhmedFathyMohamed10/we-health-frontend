<template>
  <div class="general">

    <Base :title="$t('pricing.units')" :showBreadCrumb="false" :showToggleContent="false" :showFullScreen="false">
      <div class="d-flex flex-wrap justify-content-between">
          <div class="d-grid">
            <label for="" class="form-label">{{$t("general.min_limit.label")}}</label>
            <label for="" class="form-label">{{$t("general.max_limit.label")}}</label>
            <label for="" class="form-label">{{$t("general.last_supplier.label")}}</label>

          </div>
          <div class="d-grid">
            <label>{{ form.general.min_limit }}</label>
            <label>{{ form.general.max_limit }}</label>
            <label>{{ form.general.last_supplier }}</label>
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
    value:{
      type: Object,
    },
  },
  components:{
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
  computed: {
  },
  methods: {
  },
};
</script>
  