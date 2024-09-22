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
        $t("form.group.label")
      }}</label>
      <div class="autocomplete-container">
        <AutoComplete
          v-model="group"
          :suggestions="groupParams.suggestions"
          :forceSelection="true"
          field="name_en"
          complete-method="filter"
          :placeholder="$t('form.group.placeholder')"
          @complete="search($event, groupParams)"
          :class="{ 'p-invalid': $v.group.$error }"
        />
        <i class="pi pi-search"></i>
      </div>
      <div class="error">
        <small
          class="p-invalid"
          v-if="
            !$v.group.required &&
            $v.group.$error
          "
        >
          {{ requiredError($t("form.group.label")) }}
        </small>
      </div>
    </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/b2b/b2b.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import groupSuggestions from "@/mixins/erp_v2/b2b/groupSuggestions.js";
import { required } from "vuelidate/lib/validators";
import { requiredError } from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
  },
  mixins: [groupSuggestions],
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
      group: null,
    };
  },
  validations: {
    group: {
      required,
    },
  },
  methods: {
    requiredError,
    saveForm() {
      this.$v.group.$touch();
      if (!this.$v.group.$invalid) {
        this.$emit("saveMove", this.group);
        this.group = null;
        this.$v.group.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancelMove");
      this.group = null;
      this.$v.group.$reset();
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
