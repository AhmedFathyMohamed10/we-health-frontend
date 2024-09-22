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
      <div class="col-4">
        <Base :title="$t('pricing.units')">
          <button
            v-for="unit in units" :key="unit.id"
              @click="selectedUnit(unit)"
              class="btn btn-background btn-pill mt-1 w-100"
              :class="[selectUnit == unit.id  ?`btn-success-gradient text-white `:'']"
          >
          {{ unit.name_en }} 
          </button>
        </Base>
      </div>
      <div class="col-8" v-if="selectUnit ">

        <Base :title="$t('pricing.unit_barcode.label')">
        <div class="row">
          <!-- <div class="col-md-9"> -->
          <!-- <div class="d-flex align-items-center flex-wrap flex-sm-nowrap gap-2"> -->
          <div class="d-flex align-items-center  gap-2">
            <label for="">{{ $t('pricing.unit_barcode.placeholder') }}</label>
              <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                <i class="pi pi-plus-circle" @click="generateBarcode()"></i>
                <!-- <svg  class="custom-barcode" id="barcode" @click="generateBarcode()"></svg>  -->
                <input type="text" v-model="barcodeContent" :placeholder="$t('pricing.unit_barcode.placeholder')" class="form-control" 
                :class="{'is-invalid': $v.barcodeContent.$error,}" 
                />
                <div v-if="!$v.barcodeContent.required && $v.barcodeContent.$error" class="invalid-feedback">
                    {{ requiredError($t("pricing.unit_barcode.label")) }}
                  </div> 
              </span>
   
            <!-- <div class="align-items-end"> -->
            <div class="">
              <Button :label="$t('btns.add')" icon="pi pi-plus" :iconPos="locale == 'ar' ? 'right' : 'left'"
                @click="addAlternativeBarcode" />
            </div>
          </div>
          <!-- table -->
          <div v-if="selectedUnitArr.length > 0" class="table-responsive">
            <table class="table table-sm text-center">
              <thead>
                <tr>
                  <th scope="col">{{ $t("pricing.unit_barcode.label") }}</th>
                  <th scope="col">{{ $t("pricing.units") }}</th>
                  <th scope="col">{{ $t("table.thead.controls") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in selectedUnitArr" :key="index">
                  <td class="align-middle fw-bold">
                    <span>{{ item.barcode }}</span>
                  </td>
                  <td class="align-middle fw-bold">
                    <span>{{findLocaleOption(units, item.unit) }}</span>
                  </td>


                  <td class="align-middle">
                    <div class="d-flex justify-content-center align-items-center">
                      <DeleteButton @delete="openDeleteRow(item, index)"></DeleteButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
        </Base>
      </div>

    </div>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRecords"
       />
  </div>
</template>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import { requiredError, inputError } from "@/validation/errors.js";
import Base from "@/components/global/utilities/Base.vue";
import JsBarcode from 'jsbarcode';
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { required } from "vuelidate/lib/validators";

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
    DeleteButton,
    DeleteDialog,
  },
  data() {
    return {
      displayDeleteDialog:false,
      deleteRecord: null,
      selectedUnitArr:[],
      deletedAlternativeBarcode:[],
      indexToDelete:null,
      selectUnit:null,
      barcode: null,
      barcodeContent: '',
      searchQuery: {
        item_name_en: "",
      },
      barcodeImageUrl:''
    };
  },
  computed: {
    listResponse() {
      return this.getListResponse;
    },
    units() {
      if (this.listResponse) return this.listResponse.results;
      else return [];
    },

    ...mapGetters("erp_v2/items/unit", {
      getListResponse: "getListResponse",
    }),

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
    barcodeContent:{
      required,
    }
  },
  methods: {
    requiredError,
    inputError,
    ...mapActions("erp_v2/items/product", [
      "setDeletedAlternativeBarcode",
    ]),
    findLocaleOption(list, value) {
      let item = list.find((item) => item.id == value || item.code == value);
      if (item) return item["name_en"];
      else return value;
    },
    addAlternativeBarcode() {
      this.$v.barcodeContent.$touch();
      if (!this.$v.barcodeContent.$invalid) {
      this.selectedUnitArr.push({
        unit:this.selectUnit,
        barcode:this.barcodeContent
      })
      this.form.push({
        unit:this.selectUnit,
        barcode:this.barcodeContent
      })
      this.barcodeContent = ''
      this.$v.barcodeContent.$reset();
    }
  },

    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.deleteRecord = null;
      this.indexToDelete = null;
    },
    deleteRecords(){
      this.form.splice(this.indexToDelete, 1);
      this.selectedUnitArr.splice(this.indexToDelete, 1);
      this.deletedAlternativeBarcode = [];
      if ("id" in this.deleteRecord) {
        this.deletedAlternativeBarcode.push(this.deleteRecord);
        this.setDeletedAlternativeBarcode(this.deletedAlternativeBarcode);
      }
      this.closeDeleteDialog();
    },
    openDeleteRow(value, index) {
      this.displayDeleteDialog = true;
      this.deleteRecord =value;
      this.indexToDelete = index
    },




    selectedUnit(value) {
      this.selectUnit=value.id;
      this.selectedUnitArr = this.form.filter(item => item.unit === value.id);
    },
    generateBarcode() {
      const uniqueId = new Date().getTime();
      // Generate a random number
      const randomNumber = Math.floor(Math.random() * 1000);
      // Combine the unique identifier and random number
      this.barcodeContent = `${uniqueId}${randomNumber}`;
      JsBarcode('#barcode', this.barcodeContent, {
        format: 'CODE128',
        displayValue: true,
      });
    },
  },
};
</script>
<style>

.custom-barcode {
  width:100px;
  height: 50px;
}

.input-wrapper {
  position: relative;
}

.barcode-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
</style>