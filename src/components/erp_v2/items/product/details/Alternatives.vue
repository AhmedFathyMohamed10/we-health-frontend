<template>
  <div class="general">

    <Base>
      <div class="row" >
        <div class="col-12">
          <div v-if="form.length > 0" class="table-responsive">
            <table class="table table-sm text-center">
              <thead>
                <tr>
                  <th scope="col">{{ $t("form.name_en.label") }}</th>
                  <th scope="col">{{ $t("form.name_ar.label") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in form" :key="index">
                  <td class="align-middle fw-bold">
                    <span>{{ item.material.name_en }}</span>
                  </td>
                  <td class="align-middle fw-bold">
                    <span>{{ item.material.name_ar }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
      type: Array,
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
};
</script>
  