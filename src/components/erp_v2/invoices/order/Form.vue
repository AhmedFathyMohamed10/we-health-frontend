<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :min-width="'80'"
      :max-width="'100'"
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
        <Base>
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.branch.label") }}</label>
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.form.branch.$error }" >
                        <Avatar :image="require('@/assets/9.jpg')" class=" mr-1" shape="circle"/>
                      </span> 
                      <!-- <i class="mdi mdi-pill"></i> -->
                      
                      <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                        <i class="pi" :class="[typeof form.branch === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                        <AutoComplete
                          v-model="form.branch"
                          :suggestions="clientParams.suggestions"
                          :class="{ 'p-invalid': $v.form.branch.$error }"
                          field="name_ar"
                          :placeholder="$t('form.branch.placeholder')"
                          @complete="searchClient($event, clientParams)"
                          :forceSelection="true" 
                          class="w-100"
                          @item-select="setNameClient"
                        />
                      </span>      
                    </div>
                    <div class="error">
                      <small class="p-invalid" v-if=" $v.form.branch.$error && !$v.form.branch.required">
                        {{ requiredError($t("form.branch.label")) }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.employee.label") }}</label>
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.form.employee.$error }" >
                        <i class="mdi mdi-pill"></i>
                      </span>
                      <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                        <i class="pi" :class="[typeof form.employee === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                        <AutoComplete
                          v-model="form.employee"
                          :suggestions="employeeParams.suggestions"
                          :class="{ 'p-invalid': $v.form.employee.$error }"
                          field="name"
                          :placeholder="$t('form.employee.placeholder')"
                          @complete="searchEmployee($event, employeeParams)"
                          :forceSelection="true" 
                          class="w-100"
                          @item-select="setNameCasher"
                        />
                      </span> 
                    </div>
                    <div class="error">
                      <!-- <small class="p-invalid" v-if=" $v.form.employee.$error && !$v.form.employee.validator">
                        {{ inputError($t("form.employee.label")) }}
                      </small> -->
                      <small class="p-invalid" v-if=" $v.form.employee.$error && !$v.form.employee.required">
                        {{ requiredError($t("form.employee.label")) }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.dateAndTime.label") }}</label>
                    <InputGroupWrapper>
                      <Calendar 
                        v-model="form.date" 
                        :showIcon="true" 
                        dateFormat="yy-mm-dd"
                        :placeholder="$t('form.date.placeholder')" 
                        :class="{'p-invalid': $v.form.date.$error,}"
                        class="custom-input-date"
                        />
                        <Calendar 
                        :timeOnly="true" hourFormat="24"
                        v-model="form.time" 
                        :showSeconds="true" 
                        :showIcon="true" 
                        :placeholder="$t('form.time.placeholder')" 
                        class="custom-input-time"
                        :class="{'p-invalid': $v.form.time.$error,}"
                        />
                    </InputGroupWrapper>
                    <!-- <InputText v-model.trim="item.value" type="number" min="0" @input="index_of_pricing(index)"
                      :placeholder="$t('input.value.placeholder')" />
                    <InputText type="number" v-model="item.profitRatio" :placeholder="$t('pricing.profitRatio.label')"
                      @input="index_of_pricing(index)" class="custom-group" /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Base>
        <Base :title="$t('order.details')" icon="fa-solid fa-layer-group" :showAction="true">
          <template #custom-header>
            <i class="fa-solid fa-puzzle-piece"></i>
          </template>
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.item.label") }}</label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.rowToAdd.item.$error }" >
                    <i class="mdi mdi-pill"></i>
                  </span>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.trainee === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete
                      v-model="rowToAdd.item"
                      :suggestions="productParams.suggestions"
                      :class="{ 'p-invalid': $v.rowToAdd.item.$error }"
                      field="name_en"
                      :placeholder="$t('form.item.placeholder')"
                      @complete="searchProduct($event, productParams)"
                      :forceSelection="true" 
                      class="w-100"
                    />
                  </span>              
                </div>
                <div class="error">
                  <small class="p-invalid" v-if=" $v.rowToAdd.item.$error && !$v.rowToAdd.item.required">
                    {{ requiredError($t("form.item.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.unit.label") }}</label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.rowToAdd.unit.$error }" >
                    <i class="mdi mdi-pill"></i>
                  </span>
                  <Dropdown
                    v-model="rowToAdd.unit"
                    :options="unitOptions"
                    optionLabel="unit" 
                    :placeholder="$t('form.unit.placeholder')" 
                    :class="{'p-invalid': $v.rowToAdd.unit.$error,}"
                  />
                </div>
                <div class="error">
                  <!-- <small class="p-invalid" v-if=" $v.rowToAdd.unit.$error && !$v.rowToAdd.unit.validator">
                    {{ inputError($t("form.unit.label")) }}
                  </small> -->
                  <small class="p-invalid" v-if=" $v.rowToAdd.unit.$error && !$v.rowToAdd.unit.required">
                    {{ requiredError($t("form.unit.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.quantity.label") }}</label>
                
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon"><i class="fa-solid fa-cart-plus"></i></span>
                    <InputText 
                        type="number" 
                        class="form-control" 
                        v-model="rowToAdd.quantity"
                        :placeholder="$t('form.quantity.placeholder')"
                        :class="{'p-invalid':$v.rowToAdd.quantity.$error}"
                    />
                </div>
                <div class="p-error" v-if="!$v.rowToAdd.quantity.decimal && $v.rowToAdd.quantity.$invalid">
                    {{ inputError($t("form.quantity.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.rowToAdd.quantity.minValue && $v.rowToAdd.quantity.$invalid">
                  {{minValueError($t("form.quantity.label"), $v.rowToAdd.quantity.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.rowToAdd.quantity.maxValue &&$v.rowToAdd.quantity.$invalid" >
                  {{maxValueError($t("form.quantity.label"),$v.rowToAdd.quantity.$params.maxValue.max)}}
                </div> 
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.branch_quantity.label") }}</label>
                
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon"><i class="fa-solid fa-cart-plus"></i></span>
                    <InputText 
                        type="number" 
                        class="form-control" 
                        v-model="rowToAdd.branch_quantity"
                        :placeholder="$t('form.branch_quantity.placeholder')"
                        :class="{'p-invalid':$v.rowToAdd.branch_quantity.$error}"
                    />
                </div>
                <div class="p-error" v-if="!$v.rowToAdd.branch_quantity.decimal && $v.rowToAdd.branch_quantity.$invalid">
                    {{ inputError($t("form.branch_quantity.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.rowToAdd.branch_quantity.minValue && $v.rowToAdd.branch_quantity.$invalid">
                  {{minValueError($t("form.branch_quantity.label"), $v.rowToAdd.branch_quantity.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.rowToAdd.branch_quantity.maxValue &&$v.rowToAdd.branch_quantity.$invalid" >
                  {{maxValueError($t("form.branch_quantity.label"),$v.rowToAdd.branch_quantity.$params.maxValue.max)}}
                </div> 
              </div>
            </div>
            <div class="col-md-4 col-lg-8">
              <div class="form-group">
                  <label class="form-label">{{$t('form.note.label')}}</label>
                  <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">
                          <i class="mdi mdi-pill"></i>
                      </span>
                      <InputText 
                          type="text" 
                          class="form-control" 
                          v-model="rowToAdd.note"
                          :placeholder="$t('form.note.placeholder')"
                          :class="{'p-invalid':$v.rowToAdd.note.$error}"
                      />
                  </div>
                  <div 
                      v-if="$v.rowToAdd.note.$error && !$v.rowToAdd.note.notContainsHtmlTags" 
                      class="text-danger d-block"
                      >{{htmlTagsError($t('form.note.label'))}}
                  </div>
                  <div 
                      v-if="! $v.rowToAdd.note.minLength &&  $v.rowToAdd.note.$error" 
                      class="text-danger d-block"
                      >{{minLengthError($t('form.note.label'), $v.rowToAdd.note.$params.minLength.min)}}
                  </div>
                  <div 
                      v-if="! $v.rowToAdd.note.maxLength &&  $v.rowToAdd.note.$error" 
                      class="text-danger d-block">{{maxLengthError($t('form.note.label'), $v.rowToAdd.note.$params.maxLength.max)}}
                  </div> 
              </div>
            </div>

            <div class="col-lg-2 col-sm-6 col-md-4 align-self-end">
              <div class="custom-footer d-flex justify-content-end">
                <Button 
                  :label="isUpdatingItem ? $t('btns.save') : $t('btns.add')" 
                  :icon="isUpdatingItem ? 'pi pi-check' : 'pi pi-plus'"
                  :iconPos="locale == 'ar' ? 'right' : 'left'" 
                  @click="isUpdatingItem ? save_edit() : addItems()" 
                />
                  <!-- <Button class="" :label="$t('btns.add')" icon="pi pi-plus" :iconPos="locale == 'ar' ? 'right' : 'left'" @click="addItems"/>  -->
              </div>
            </div>
          </div>
        </Base>
        <Base v-if="form.order_items.length > 0">
          <div class="row">
            <div v-if="form.order_items.length > 0" class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("form.item.labelHead") }}</th>
                    <th scope="col">{{ $t("form.unit.label") }}</th>
                    <th scope="col">{{ $t("form.quantity.label") }}</th>
                    <th scope="col">{{ $t("form.branch_quantity.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in form.order_items" :key="index">
                    
                    <td class="align-middle fw-bold"><span>{{ item.item.name_en }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.unit.unit }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.quantity }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.branch_quantity }}</span></td>
                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <EditButton @edit="openEditItemInvoice(item, index)"></EditButton>
                        <DeleteButton  @delete="openDeleteRow(item, index)"></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Base>
        <Base :title="$t('order.invoice')">
         
          <div class="row">
            <div class="col-md-4">
              <Base>
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive">
                      <table class="table table-borderless text-nowrap mb-0">
                        <tbody>
                          <tr v-for="(value, key) in recordDetails" :key="key">
                            <td class="p-1">
                              {{ $t(`order.key.${key}`) }}:
                            </td>
                            <td class="p-1">
                              <span v-if="!value" class="text-muted">------</span>
                              <span v-if="key != 'branch' && key != 'employee'" >{{ value }}</span >
                              <span v-if="key == 'branch' || key == 'employee'">
                                <div class="d-flex align-items-center justify-content-start " v-if="value">
                                  <Avatar :image="require('@/assets/9.jpg')" class=" mr-1" shape="circle"/>
                                  <span class="fw-bold text-success  mx-2">{{ value }} </span>
                                </div> 
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Base>
              <Base>
                <div class="row">
                  <div class="col-6">
                    <label class="mb-0">{{$t('purchase.key.items_no')}} :</label>
                  </div>
                  <div class="col-6 d-flex ">
                    <label class="mb-0">{{recordDetailsMore.items_no}}</label>
                  </div>
                </div>
              </Base>
            </div>
            <div  class="col-md-8">
              <Base>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                        <label class="form-label">{{$t('form.description.label')}}</label>
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="mdi mdi-pill"></i>
                            </span>
                            <InputText 
                                type="text" 
                                class="form-control" 
                                v-model="form.description"
                                :placeholder="$t('form.description.placeholder')"
                                :class="{'p-invalid':$v.form.description.$error}"
                            />
                        </div>
                        <div 
                            v-if="$v.form.description.$error && !$v.form.description.notContainsHtmlTags" 
                            class="text-danger d-block"
                            >{{htmlTagsError($t('form.description.label'))}}
                        </div>
                        <div 
                            v-if="! $v.form.description.minLength &&  $v.form.description.$error" 
                            class="text-danger d-block"
                            >{{minLengthError($t('form.description.label'), $v.form.description.$params.minLength.min)}}
                        </div>
                        <div 
                            v-if="! $v.form.description.maxLength &&  $v.form.description.$error" 
                            class="text-danger d-block">{{maxLengthError($t('form.description.label'), $v.form.description.$params.maxLength.max)}}
                        </div> 
                    </div>
                  </div>
                </div>
              </Base>
            </div>
          </div>
        </Base>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/invoices/order.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Base from "@/components/global/utilities/Base.vue";
import productSuggestions from "@/mixins/erp_v2/items/productSuggestions.js";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import clientSuggestions from "@/mixins/erp_v2/clients/clientSuggestions.js";
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper';
import { required, minLength, maxLength, decimal, minValue, maxValue} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import {
  htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    minValueError,
    inputError,
    timeDateError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  mixins: [toast, productSuggestions, employeeSuggestions, clientSuggestions],
  components: {
    EditDialog,
    Base,
    InputGroupWrapper,
    DeleteButton,
    EditButton,
    DeleteDialog,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isUpdating: {
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
      paymentMethodOptions:[
        { name: "Debit", en: "اجل", id: 1 },
        { name: "Cash", en: "كاش", id: 2 },
        { name: "Both", en: "كلاهما", id: 3 },
      ],
      isUpdatingItem: false,
      displayDeleteDialog: false,
      index_of_edit_row: null,
      form: this.value,
      rowToAdd:{
        item:null,
        unit:null,
        quantity:null,
        branch_quantity:null,
        note:"",
      },
      discountOptions: [
        { en: "%", ar: "%", id: 1 },
        { en: "EGP", ar: "EGP", id: 2 },
        { en: "$", ar: "$", id: 3 },
        ],
      recordDetails: {
          "invoice_no": "#144644744",
          "date":"22-25-2800",
          "branch":"",
          "employee":""
        },
        recordDetailsMore:{
          "items_no":25,
          "sum":25,
          "vat":25,
          "total_discount":25,
          "total_amount":25,
        }
    };
  },
  computed: {
    unitOptions(){
      if (typeof this.rowToAdd.item === 'object' && this.rowToAdd.item !== null){
        if (this.rowToAdd.item.pricing_and_unit.length > 0){
          return this.rowToAdd.item.pricing_and_unit
        }
        else return [];
      }
      else return [];
    }
  },
  validations: {
    form: {
            branch:{required},
            employee:{required},
            date:{},
            time:{},
            description:{
              minLength: minLength(4),
              maxLength: maxLength(255),
              notContainsHtmlTags: (value) => {
                return notContainsHtmlTags(value);
              },
            },
    },
    rowToAdd: {
      item: {
        required,
      },
      unit: {
        required,
      },
      quantity:{
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
      },
      branch_quantity:{
          minValue:minValue(1),
          decimal,
      },
    note:{
        minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
    },

    },
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    minValueError,
    inputError,
    timeDateError,
    ...mapActions("erp_v2/invoices/purchase", [
      "setDeleteInvoiceItem",
    ]),
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

    resetForm() {
      this.rowToAdd = {
        item:null,
        unit:null,
        quantity:null,
        branch_quantity:null,
        note:"",
      };
      this.$v.rowToAdd.$reset();
    },
    addItems(){
      this.$v.rowToAdd.$touch();
      if (this.rowToAdd.expiration_date) {
        this.rowToAdd.expiration_date = this.$moment(this.rowToAdd.expiration_date).format("YYYY-MM-DD");
      }
      if (!this.$v.rowToAdd.$invalid) {
        this.form.order_items.push(this.rowToAdd);
        this.resetForm()
      }
    },

    openEditItemInvoice(data, index) {
      this.rowToAdd = data;
      this.index_of_edit_row = index;
      this.isUpdatingItem = true;
    },
    save_edit() {
      if (this.rowToAdd.expiration_date) {
        this.rowToAdd.expiration_date = this.$moment(this.rowToAdd.expiration_date).format("YYYY-MM-DD");
      }
      this.form.order_items[this.index_of_edit_row] = this.rowToAdd;
      this.isUpdatingItem = false;
      this.resetForm();
    },

    openDeleteRow(record, index) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
      this.deleteRecord = record;
    },
    deleteRow() {
      this.form.order_items.splice(this.indexToDelete, 1);
      this.rowToAdd.equivalent_to_selection = this.deleteRecord.equivalent_to_selection
      // const unit_deleted = this.unitOptions.filter(item => item.id === this.deleteRecord.unit)
      this.deletedUnitArr = [];
      if ("id" in this.deleteRecord) {
        this.deletedUnitArr.push(this.deleteRecord);
        this.setDeleteInvoiceItem(this.deletedUnitArr);
      }
      this.closeDeleteDialog();
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false
      this.indexToDelete = null;
      this.deleteRecord = null;
    },

    setNameClient(){
      this.recordDetails.branch = this.form.client.name;
    },
    setNameCasher(){
      this.recordDetails.employee = this.form.employee.name;
    }

  },
};
</script>
<style lang="scss" scoped>
.custom-input-group{
  border-radius: 0rem;
}
/deep/.p-chip{
    height: 36px;
    padding-left: 0rem;
    width: 100%;
}
/deep/.p-chip-text{
    padding: 1rem;
}
.custom-chip{
  opacity: 0.25;
}
/deep/.p-input-icon-right .p-autocomplete-input {
    border-top-left-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}
</style>
