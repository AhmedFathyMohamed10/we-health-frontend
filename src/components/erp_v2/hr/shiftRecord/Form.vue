<template>
  <div class="form">
    <EditDialog 
      :display="displayForm"
      @close="cancelForm" 
      @cancel="cancelForm"
      @save="saveForm" 
      :min-width="'80vw'"
      :max-width="'100vw'" 
      :isLoading="isLoading" 
      :header="header"
      >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message severity="error" v-for="(value, key) in error" :key="key" :closable="false">
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
   
        <Fixed  
          v-if="form.type==1" 
          :value="form"
          :data="rowToAdd"
          :shiftOptions="shiftOptions"
          :search_options="search_options"
          :v="$v.rowToAdd"
          :error="error"
          :isUpdating="isUpdating"
          />
          <Variable
          v-if="form.type==2"
          :value="form"
          :data="rowToAdd"
          :shiftOptions="shiftOptions"
          :search_options="search_options"
          :error="error"
          :isUpdating="isUpdating"
        />
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/shiftRecord.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { required } from "vuelidate/lib/validators";
import Variable from "@/components/erp_v2/hr/shiftRecord/tab/Variable.vue";
import Fixed from "@/components/erp_v2/hr/shiftRecord/tab/Fixed.vue";
import { mapGetters, mapActions } from "vuex";

import {
  htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
    Fixed,
    Variable,
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
    isUpdating: {
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
    shiftOptions: {
      type: Array,
      required: [],
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  
  },
  data() {
    return {
      test:true,
      search_options: [
        { en: "employee", ar: "موظف", id: 1 },
        { en: "department", ar: "قسم", id: 2 },
      ],
      form: this.value,

    };
  },
  computed: {
    ...mapGetters("erp_v2/hr/shiftRecord", {
      getRowToAdd: "getRowToAdd",
    }),
    rowToAdd: {
      get() {
        return this.getRowToAdd;
      },
      set(value) {
        this.setRowToAdd(value);
      },
    },

  },
  validations: {
    form:{
      type: {},
      arr:{},
    },
    rowToAdd:{
      employee_or_department:{
        required
      },
      type_of_search:{required,},
      shift:{
        required
      },
    },
  },
  methods: {
  
    ...mapActions("erp_v2/hr/shiftRecord", [
      "setRowToAdd"
    ]),
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
    saveForm() {
      this.$v.form.$touch();
      if (this.form.type == 1){
        this.$v.rowToAdd.$touch();
        this.form.arr[0]= this.rowToAdd
        if (!this.$v.form.$invalid && !this.$v.rowToAdd.$invalid) {
        this.$emit("save");
        }
      }
      if (this.form.type == 2){
        if (!this.$v.form.$invalid ) {
          this.$emit("save");
        }
      }
      this.$v.form.$reset();
      this.$v.rowToAdd.$reset();
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
      this.$v.rowToAdd.$reset();    
    },
  },
};
</script>