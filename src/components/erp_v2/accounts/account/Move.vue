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
      <div class="form-group">
        <label for="" class="form-label">{{ $t("form.final_account.label") }}</label>
        <AutoComplete
          v-model="final_account"
          :suggestions="finalAccountParams.suggestions"
          field="name_en"
          :placeholder="$t('form.final_account.placeholder')"
          @complete="searchFinalAccount($event, finalAccountParams)"
          :class="{ 'p-invalid': $v.final_account.$error }"
        />
        <div class="error">
          <small class="p-invalid" v-if="!$v.final_account.required && $v.final_account.$error">
            {{ requiredError($t("form.final_account.label")) }}
          </small>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/erp_v2/accounts/account.json"></i18n>
<i18n src="@/lang/erp_v2/group/group.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import finalAccountSuggestions from "@/mixins/erp_v2/accounts/finalAccountSuggestions";
import { required } from "vuelidate/lib/validators";
import { requiredError } from "@/validation/errors.js";
export default {
  components: {
    EditDialog,
  },
  mixins: [finalAccountSuggestions],
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
      final_account: null,
    };
  },
  validations: {
    final_account: {
      required,
    },
  },
  methods: {
    requiredError,
    saveForm() {
      this.$v.final_account.$touch();
      if (!this.$v.final_account.$invalid) {
        this.$emit("saveMove", this.final_account);
        this.final_account = null;
        this.$v.final_account.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancelMove");
      this.final_account = null;
      this.$v.final_account.$reset();
    },
  },
};
</script>