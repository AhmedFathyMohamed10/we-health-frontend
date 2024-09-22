<template>
  <div class="contact">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message severity="error" v-for="(value, key) in error.Contact" :key="key" :closable="false">
            <span v-if="typeof value === 'string'">{{ value }}</span>
            <span v-else>{{ value[0] }}</span>
          </Message>
        </div>
      </div>
    </div>
    <div class="row">
      
      <div class="col-8">

        <Base :title="$t('statusItem.patchNo')">
          <div class="row">
    
          </div>
        </Base>
      </div>
      <div class="col-4">
        <Base :title="$t('statusItem.chart')">
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <label>{{$t('statusItem.totalCost')}}</label>
              <Chip :label="test1+ ' LE'"  class="custom-chip" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <label>{{$t('statusItem.totalAmount')}}</label>
              <Chip :label="test2+ ' LE'"  class="custom-chip" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <label>{{$t('statusItem.totalSell')}}</label>
              <Chip :label="test3+ ' LE'"  class="custom-chip" />
            </div>
          </div>
          <div class="row">
            <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <label>{{$t('statusItem.totalProfit')}}</label>
              <Chip :label="test4+ ' LE'"  class="custom-chip" />
            </div>
          </div>
        </Base>
      </div>
    </div>
    <div class="row">
      
      <div class="col-12">

        <Base :title="$t('statusItem.log')">
          <div class="row">
            <div class="col-12">
            <div class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr >
                    <th  >{{ $t("statusItem.dateTime")}}</th>
                    <th >{{ $t("statusItem.actionType") }}</th>
                    <th >{{ $t("statusItem.user") }}</th>
                    <th >{{ $t("statusItem.reference") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(log, index) in logs" :key="index">
                    <td class="align-middle fw-bold">
                      {{ log.dateTime}}
                    </td>
                    <td class="align-middle fw-bold">
                    {{ log.actionType }}
                    </td>
                    <td class="align-middle fw-bold">
                       {{ log.user }} 
                    </td>
                    <td class="align-middle fw-bold">
                     {{ log.reference }} 
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </Base>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import { requiredError, inputError } from "@/validation/errors.js";
import Base from "@/components/global/utilities/Base.vue";
import Chip from "primevue/chip";

export default {
  props: {
    error: {
      type: Object,
    },
    v: {
      type: Object,
      required: true,
    },
  },
  components: {
    Base,
    Chip,
  },
  data() {
    return {
      test1:12,
      test2:12,
      test3:12,
      test4:12,
      logs:[{
        dateTime:"2018-12-21",
        actionType:"purchasing",
        user:"Ahmed Hatem",
        reference:"invoice no 10",

      }
        
      ]
    };
  },
  computed: {
    ...mapGetters("erp_v2/items/product", {
      getAlternative_barcode: "getAlternative_barcode",
    }),

    form: {
      get() {
        return this.getAlternative_barcode;
      },
      set(value) {
        this.setAlternative_barcode(value);
      },
    },
  },
  validations: {
  },
  methods: {
    requiredError,
    inputError,
    ...mapActions("erp_v2/items/product", [
      "setAlternative_barcode",
    ]),
  },
};
</script>