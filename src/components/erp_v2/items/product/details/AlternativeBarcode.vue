<template>
  <div class="general">

    <Base>
    <div class="row">
      <div class="col-4">
        <Base :title="$t('pricing.units')">
        <button v-for="unit in units" :key="unit.id" @click="selectedUnit(unit)"
          class="btn btn-background btn-pill mt-1 w-100"
          :class="[selectUnit == unit.id ? `btn-success-gradient text-white ` : '']">
          {{ unit.name_en }}
        </button>
        </Base>
      </div>
      <div class="col-8" v-if="selectUnit">
        <Base :title="$t('pricing.unit_barcode.label')">
        <div class="row">
          <div v-if="selectedUnitArr.length > 0" class="table-responsive">
            <table class="table table-sm text-center">
              <thead>
                <tr>
                  <th scope="col">{{ $t("pricing.unit_barcode.label") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in selectedUnitArr" :key="index">
                  <td class="align-middle fw-bold">
                    <span>{{ item.barcode }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
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
      type: Array,
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
      arr:[],
      selectUnit:null,
      isDuplicate:false,
      selectedUnitArr:[]
    };
  },
  computed: {
    unitOptions() {
      if (this.$store.getters["erp_v2/items/unit/getListResponse"]) {
        return this.$store.getters["erp_v2/items/unit/getListResponse"].results;
      }
      else return [];
    },
    units() {
      if (this.unitOptions.length > 0) {
        this.unitOptions.forEach(item=> {
          this.isDuplicate = this.form.some(i => i.unit === item.id);
          if (this.isDuplicate) { this.arr.push(item) };
        })
      }
      return this.arr
    },
  },
  created() {
    if (! this.unitOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name_en: "" };
      this.$store.dispatch("erp_v2/items/unit/list", params);
    }
  },
  methods:{
    selectedUnit(value) {
      this.selectUnit=value.id;
      this.selectedUnitArr = this.form.filter(item => item.unit === value.id);
    },
  }
};
</script>