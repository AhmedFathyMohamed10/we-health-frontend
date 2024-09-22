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

    <Base>
      <div class="d-flex align-items-center flex-wrap flex-sm-nowrap gap-2 my-2">
          <label for="" class="mb-0"> {{ $t("btns.search") }}</label>
          <span class="w-70"  :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
            <i class="pi" :class="[typeof rowToAdd.alternative === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
              <AutoComplete
                v-model="rowToAdd.alternative" 
                :suggestions="productParams.suggestions"
                field="name_en"
                :placeholder="$t('form.name_en.placeholder')"
                @complete="searchProduct($event, productParams)"
                :forceSelection="true" 
                :class="{ 'p-invalid': $v.rowToAdd.alternative.$error }"
                
              />
              <div class="error">
                <small class="p-invalid" v-if="!$v.rowToAdd.alternative.required && $v.rowToAdd.alternative.$error">
                  {{ requiredError($t("form.name_en.label")) }}
                </small>
              </div>
          </span>
            <Button :label="$t('btns.add')" icon="pi pi-plus" :iconPos="locale == 'ar' ? 'right' : 'left'"
            @click="addRow"/>
      </div>
      <div class="row" >
        <div v-if="form.length > 0" class="table-responsive">
          <table class="table table-sm text-center">
            <thead>
              <tr>
                <th scope="col">{{ $t("form.name_en.label") }}</th>
                <th scope="col">{{ $t("table.thead.controls") }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in form" :key="index">
                <td class="align-middle fw-bold">
                  <span>{{ item.material.name_en }}</span>
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
import productSuggestions from "@/mixins/erp_v2/items/productSuggestions.js";
import { required } from "vuelidate/lib/validators";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";


export default {
  mixins:[productSuggestions],
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
      deleteRecord:null,
      deletedAlternative:[],
      indexToDelete:null,
      rowToAdd: {
        alternative: null,
        note:"",
      },
    };
  },
  computed: {
    ...mapGetters("erp_v2/items/product", {
      getAlternatives: "getAlternatives",
    }),

    form: {
      get() {
        return this.getAlternatives;
      },
      set(value) {
        this.setAlternatives(value);
      },
    },
  },
  validations: {
    rowToAdd:{
      alternative:{required},
    }
  },
  methods: {
    requiredError,
    inputError,
    ...mapActions("erp_v2/items/product", [
      "setDeletedAlternative",
    ]),
    resetForm(){
      this.rowToAdd={
        alternative:null,
      }
      this.$v.rowToAdd.$reset();
    },
    addRow() {
      this.$v.rowToAdd.$touch();
      if (!this.$v.rowToAdd.$invalid) {
        this.form.push({ material:this.rowToAdd.alternative });
        this.resetForm();
      }
    },

    openDeleteRow(value, index) {
      this.displayDeleteDialog = true;
      this.deleteRecord =value;
      this.indexToDelete = index
    },
    deleteRecords(){
      this.form.splice(this.indexToDelete, 1);
      this.deletedAlternative = [];
      if ("id" in this.deleteRecord) {
        this.deletedAlternative.push(this.deleteRecord);
        this.setDeletedAlternative(this.deletedAlternative);
      }
      this.closeDeleteDialog();
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false;
      this.deleteRecord =null;
      this.indexToDelete = null
    }, 

    },
   
};
</script>
<style lang="scss" scoped>
/deep/ .p-autocomplete {
    position: initial !important;
}
/deep/.p-input-icon-right .p-autocomplete-input {
    padding-left: 1rem;
}
</style>