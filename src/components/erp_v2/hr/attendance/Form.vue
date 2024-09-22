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
      <div class="row">
        <div class="col-12">
          <CustomTabs 
            class="text-center" 
            v-model="selectedTab" 
            :tabs="tabs"  
            >
          </CustomTabs>
          <Insert  
            v-show="selectedTab == 'insert'"  
            :v="$v.attendanceObject ? $v.attendanceObject : {}"
            :shiftOptions="shiftOptions"
            :status_options="status_options"
            :error="error" />
          <Upload
            :v="$v.attendanceObject ? $v.attendanceObject : {}"
            v-show="selectedTab == 'upload'"
            :error="error"
          /> 
         </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/shiftRecord.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
// import Base from "@/components/global/utilities/Base.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Insert from "@/components/erp_v2/hr/attendance/tabs/Insert.vue";
import Upload from "@/components/erp_v2/hr/attendance/tabs/Upload.vue";
// import Variable from "@/components/erp_v2/hr/shiftRecord/tab/Variable.vue";

import attendanceValidation from "@/mixins/erp_v2/hr/attendance/validation/attendanceValidation.js";
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
    // Base,
    CustomTabs,
    Insert,
    Upload,
  },
  mixins: [attendanceValidation],
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
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  data() {
    return {
      selectedTab: "insert",
      tabs: [
        { en: "Insert", ar: "أدخل", key: "insert" },
        { en: "Upload", ar: "تحميل", key: "upload" },
      ],
      status_options: [
        { en: "On time", ar: "في الوقت", id:1 },
        { en: "Late", ar: "متأخر", id:2 },
      ],
      form: this.value,
    };
  },
   computed: {
    shiftOptions() {
      if (this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"]){
        return  this.$store.getters["erp_v2/hr/shiftDefinition/getListResponse"].results;
      }
      else return [];
    },
  },
  created() {
    if (!this.shiftOptions.length > 0) {
      let params = { pageNumber: 1, rows: 1000000, name: "" };
      this.$store.dispatch("erp_v2/hr/shiftDefinition/list", params);
    }
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
    saveForm() {
      this.$v.attendanceObject.$touch();
      if (!this.$v.attendanceObject.$invalid) {
        this.$emit("save");
        this.$v.attendanceObject.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.attendanceObject.$reset();
    },
  },
};
</script>