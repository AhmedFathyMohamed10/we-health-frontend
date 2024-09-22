<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :min-width="'80'"
      :max-width="'100'"
      :isLoading="isLoading"
      :header="header"
    >
    <div class="row">
      <div class="col-12">
        <div class="form-group ">
            <label class="form-label">{{$t('form.quantity.label')}} </label>                                                                     
            <div class="p-inputgroup">
              <span class="p-inputgroup-addon bg-light" :class="{'p-invalid':$v.form.amount.$error}">
                <i class="mdi mdi-pill"></i>
              </span>
              <span class="w-60 d-flex justify-content-center  align-items-center  p-inputgroup-addon bg-color-white" 
              :class="{'p-invalid':$v.form.amount.$error}" >
              <i @click="decrement" class=" px-2  fw-bold pi pi-minus-circle cursor-pointer"></i>
              <input type="number" v-model="form.amount" class="px-2 text-center border-0 fw-bold text-success w-50 custom-outline"  >
              <i  @click="increment" class=" px-2   fw-bold pi pi-plus-circle cursor-pointer"></i>
            </span>
              <Chip class="w-40 btn-success-gradient">
                <label class="form-label text-white">{{$t('form.remaining.label')}} : {{ form.remaining }}</label>           
              </Chip>
            </div>
                                    <!-- <div class="error">
                                        <small class="p-invalid" v-if="$v.form.amount.$error &&! $v.form.amount.required">
                                         {{requiredError($t('otc.amount.label1'))}}
                                        </small>
                                        <small class="p-invalid" 
                                          v-else-if="$v.form.amount.$error && !$v.form.amount.maxValue">
                                          {{maxValueError($t('otc.amount.label1'),$v.form.amount.$params.maxValue.max)}}
                                      </small>
                                     
                                     <small class="p-invalid" 
                                            v-else-if="$v.form.amount.$error && !$v.form.amount.minValue">
                                            {{minValueError($t('otc.amount.label1'),$v.form.amount.$params.minValue.min)}}
                                        </small>
                                    </div>  -->
                            
                                </div>  
                            </div>
                          </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/invoices/order.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required } from "vuelidate/lib/validators";
import { requiredError } from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
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
    header: {
      type: String,
    },
  },
  data() {
    return {
      form:{
        remaining:1000,
        amount:0
      },
    };
  },
  validations: {
    form:{
      amount: {
        required,
      },
    }
  },
  methods: {
    requiredError,
    saveForm() {
        this.$emit("save", this.group);
        this.form.amount = 0;
    },
    cancelForm() {
      this.$emit("cancel");
      this.form.amount = 0;
    },

    decrement(){
        this.form.amount--;
    },
    increment(){
      this.form.amount++;
    },
  },
};
</script>

