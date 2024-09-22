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
    <div class="form-group col-10">
      <label for="" class="form-label">{{
        $t("form.department.label")
      }}</label>
      <div class="autocomplete-container">
        <AutoComplete
          v-model="department"
          :suggestions="departmentParams.suggestions"
          :forceSelection="true"
          field="department_name"
          complete-method="filter"
          :placeholder="$t('form.department.placeholder')"
          @complete="search($event, departmentParams)"
          :class="{ 'p-invalid': $v.department.$error }"
        />
        <i class="pi pi-search"></i>
      </div>
      <div class="error">
        <small
          class="p-invalid"
          v-if="
            !$v.department.required &&
            $v.department.$error
          "
        >
          {{ requiredError($t("form.department.label")) }}
        </small>
      </div>
    </div>
    </EditDialog>
  </div>
</template>
<!-- <i18n src="@/lang/erp_v2/clients/client.json"></i18n> -->
<!-- <i18n src="@/lang/erp_v2/clients/group.json"></i18n> -->
<!-- <i18n src="@/lang/erp_v2/hr/department.json"></i18n> -->
<i18n src="@/lang/erp_v2/hr/employees/employee.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import departmentSuggestions from "@/mixins/erp_v2/hr/department/departmentSuggestions.js";
import groupSuggestions from "@/mixins/erp_v2/clients/groupSuggestions.js";
import { required } from "vuelidate/lib/validators";
import { requiredError } from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
  },
  mixins: [departmentSuggestions],
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
      department: null,
    };
  },
  validations: {
    department: {
      required,
    },
  },
  methods: {
    requiredError,
    saveForm() {
      this.$v.department.$touch();
      if (!this.$v.department.$invalid) {
        this.$emit("saveMove", this.department);
        this.department = null;
        this.$v.department.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancelMove");
      this.department = null;
      this.$v.department.$reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.autocomplete-container {
  position: relative;
}

.autocomplete-container .pi-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: #ccc;
  z-index: 1;
}
</style>
