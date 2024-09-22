<template>
  <div class="jop-title">
    <div class="row">
      <div class="col-md-4">
        <div class="label-wrapper d-flex align-items-center mb-2">
          <i class="fa fa-solid fa-wine-bottle fs-5 mx-1"></i>
          <label class="mx-1 form-label">{{ $t('form.title.label') }}</label>
        </div>
      </div>
      <div class="col-md-8">
        <div class="title-dropdown form-group">
          <Dropdown
            v-model="form.title"
            :placeholder="$t('form.title.placeholder')"
            :options="titleTypesOptions"
            optionLabel="name"
            optionValue="title__id"
            :class="{'p-invalid':v.title.$error}"
          />
          <div class="errors">
            <small class="p-invalid" v-if="v.title.$error && !v.title.required">
              {{ requiredError($t('form.title.label')) }}
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import {requiredError} from "@/validation/errors.js";
import { mapGetters } from "vuex";

export default {
  components: {

  },
  props: {
    v:{
      type:Object,
    },
    titleTypesOptions:{
      type: Array,
      default: () => [],
    },
  
  },
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters('business/register', {
      getForm: 'getForm',
    }),
      form: {
        get() {
            return this.getForm;
        },
        set(value) {
            this.setForm(value);
        }
      },
    },
  methods:{
    requiredError,
  },
};
</script>
<style lang="scss" scoped>

</style>