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
                    <label for="" class="form-label">{{ $t("form.request.label") }} 
                      <span class="badge-fs-custom badge bg-danger-gradient header-badge rounded">4</span>
                    </label>
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.form.branch.$error }" >
                        <i class="fa-regular fa-bell"></i>
                      </span> 
                        <Dropdown
                          v-model="form.request"
                          :options="shippingOptions"
                          :optionLabel="locale" 
                          :placeholder="$t('form.request.placeholder')" 
                        />
                    </div>
                    <!-- <div class="error">
                      <small class="p-invalid" v-if=" $v.form.branch.$error && !$v.form.branch.required">
                        {{ requiredError($t("form.request.label")) }}
                      </small>
                    </div> -->
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Base>

        <Base class="my-0">
          <div class="d-flex justify-content-between flex-wrap ">
            <div class="d-flex gap-2 flex-wrap">
              <div>
                <Base>
                  <div class="d-flex justify-content-between gap-1">  
                    <label class="mb-0 fw-semibold">{{$t('order.key.lastRequest')}}</label>
                      <label class="mb-0 fw-semibold">{{"22-2-2002"}}</label>
                  </div>
                </Base>
              </div>
              <div>
                <Base>
                  <div class="d-flex justify-content-between gap-1">  
                    <label class="mb-0 fw-semibold">{{$t('order.key.branchName')}}</label>
                    <label class="mb-0 fw-semibold">{{ "mohamed" }}</label>
                  </div>
                </Base>
              </div>
              <div>
                <Base>
                  <div class="d-flex justify-content-between gap-1">  
                      <label class="mb-0 fw-semibold">{{$t('order.key.requestVendor')}}</label>
                      <label class="mb-0 fw-semibold">{{"ahmed"}}</label>
                  </div>
                </Base>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="field ">
            </div>
            </div>
          </div>
        </Base>

        <Base v-if="form.review_list.length > 0">
          <div class="row">
            <div v-if="form.review_list.length > 0" class="table-responsive">
              <table class="table table-sm text-center">
                <thead class="bg-danger-gradient">
                  <tr>
                    <th scope="col">{{ $t("form.item.labelHead") }}</th>
                    <th scope="col">{{ $t("form.unit.label") }}</th>
                    <th scope="col">{{ $t("form.quantity.label") }}</th>
                    <th scope="col">{{ $t("form.branch_quantity.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in form.accepted_list" :key="index" class="">
                    
                    <td class="align-middle fw-bold"><span>{{ item.item.name_en }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.unit }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.quantity }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.branch_quantity }}</span></td>
                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center gap-1">
                        <ResetButton  @reset="openSubstituent(item, index)"></ResetButton>
                        <DownloadButton @download="openDownload(item, index)"></DownloadButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Base>
        <Base v-if="form.accepted_list.length > 0">
          <div class="row">
            <div v-if="form.accepted_list.length > 0" class="table-responsive">
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
                  <tr v-for="(item, index) in form.accepted_list" :key="index">
                    
                    <td class="align-middle fw-bold"><span>{{ item.item.name_en }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.unit }}</span></td>
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
                    <label class="mb-0">{{$t('order.key.items_no')}} :</label>
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
                  <!-- shipping -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.shipping.label") }}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                          <i class="fa-solid fa-truck-moving"></i>
                        </span>
                        <Dropdown
                          v-model="form.shipping"
                          :options="shippingOptions"
                          :optionLabel="locale" 
                          :placeholder="$t('form.shipping.placeholder')" 
                        />
                      </div>
                      <!-- <div class="error">
                        <small class="p-invalid" v-if=" $v.form.shipping.$error && !$v.form.shipping.required">
                          {{ requiredError($t("form.shipping.label")) }}
                        </small>
                      </div> -->
                    </div>
                  </div>
                  <div class="col-md-2">
                    <AddButton @add="addShipping"></AddButton>
                  </div>
                  <!-- amount -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.expected_time.label") }}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon"><i class="fa-regular fa-clock"></i></span>
                        <InputText 
                          type="number" 
                          class="form-control" 
                          v-model="form.expected_time"
                          :placeholder="$t('form.expected_time.placeholder')"
                          :class="{'p-invalid':$v.form.expected_time.$error}"
                        />
                      </div>
                      <div class="p-error" v-if="!$v.form.expected_time.decimal && $v.form.expected_time.$invalid">
                          {{ inputError($t("form.equivalency.label"))}}
                      </div> 
                      <div class="p-error" v-else-if="!$v.form.expected_time.minValue && $v.form.expected_time.$invalid">
                        {{minValueError($t("form.equivalency.label"), $v.form.expected_time.$params.minValue.min )}}
                      </div>
                      <div class="p-error" v-else-if="!$v.form.expected_time.maxValue &&$v.form.expected_time.$invalid" >
                        {{maxValueError($t("form.expected_time.label"),$v.form.expected_time.$params.maxValue.max)}}
                      </div> 
                    </div>
                  </div>
                  <div class="col-md-10">
                    <div class="form-group">
                        <label class="form-label">{{$t('form.description.label')}}</label>
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                              <i class="fa-solid fa-paragraph"></i>
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
    <Download
      :displayForm="displayDownloadDialog"
      :header="$t('dialog.header.download')"
      @cancel="closeDownload"
      @save="saveDownload"
    >
    </Download>
    <Substituent
      :displayForm="displaySubstituentDialog"
      :header="$t('dialog.header.substituent')"
      @cancel="closeSubstituent"
      @save="saveSubstituent"
    >
    </Substituent>
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
import DownloadButton from "@/components/global/utilities/DownloadButton.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import Download from "@/components/erp_v2/invoices/orderReview/Download.vue";
import Substituent from "@/components/erp_v2/invoices/orderReview/Substituent.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";

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
    DownloadButton,
    ResetButton,
    Download,
    Substituent,
    AddButton,
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
      shippingOptions:[
        { en: "Internal", ar: "داخلي", id: 1 },
        { en: "External", ar: "خارجي", id: 2 },
      ],
      isUpdatingItem: false,
      displayDeleteDialog: false,
      displayDownloadDialog: false,
      displaySubstituentDialog: false,
      index_of_edit_row: null,
      form: this.value,
      rowToAdd:{
        item:null,
        unit:null,
        quantity:null,
        branch_quantity:null,
        note:"",
      },
  
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
            shipping:{},
            expected_time:{
              minValue:minValue(1),
              maxValue:maxValue(220),
              decimal,
            },
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
        this.form.accepted_list.push(this.rowToAdd);
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
      this.form.accepted_list[this.index_of_edit_row] = this.rowToAdd;
      this.isUpdatingItem = false;
      this.resetForm();
    },

    openDeleteRow(record, index) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
      this.deleteRecord = record;
    },
    deleteRow() {
      this.form.accepted_list.splice(this.indexToDelete, 1);
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
    //////////////////////// Download ////////////////////////////////
    openDownload(){
    console.log("openDownload")
      this.displayDownloadDialog = true;
    },
    saveDownload() {
      this.closeDownload();
    },
    closeDownload() {
      this.displayDownloadDialog = false
    },
    ///////////////////// Substituents  ////////////////
    openSubstituent(){
      this.displaySubstituentDialog = true;
    },
    saveSubstituent() {
      this.closeSubstituent();
    },
    closeSubstituent() {
      this.displaySubstituentDialog = false
    },
    /////////////////////////////
    setNameClient(){
      this.recordDetails.branch = this.form.client.name;
    },
    setNameCasher(){
      this.recordDetails.employee = this.form.employee.name;
    },
    //////////////////////
    addShipping(){
      console.log("addShipping");
    }

  },
};
</script>
<style lang="scss" scoped>
// .custom-review-table{
//   background-color: bg-danger-gradientred;
// }
/deep/.p-input-icon-right .p-autocomplete-input {
    border-top-left-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}
</style>
