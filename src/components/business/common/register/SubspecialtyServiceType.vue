<template>
  <div class="sub-specialties w-100">
      <div  v-if="subOptionsValue.length > 0" class="row sub-specialties">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <i class=" fa fa-solid fa-magnifying-glass-plus fs-5 mx-1"></i>
            <label class="mx-1 form-label">{{ $t('form.subspecialty.label') }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="subspecialty-dropdown form-group">
            <MultiSelect
              v-model="form.subspeciality"
              :options="subOptionsValue"
              optionLabel="name"
              optionValue="subspeciality__id"
              :placeholder="$t('form.subspecialty.placeholder')"
              :class="{'p-invalid':v.subspeciality.$error}"
            />
            
            <div class="errors">
              <small class="p-invalid" v-if="v.subspeciality.$error && !v.subspeciality.required">
                {{ requiredError($t('form.subspecialty.label')) }}
              </small>
            </div>
          </div>
        </div>
      </div>
      <div v-if="serviceTypesValue.length > 0" class="row service-type">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <i class=" fa fa-brands fa-servicestack fs-5 mx-1"></i>
            <label class="mx-1 form-label">{{ $t('form.serviceType.label') }}</label>
          </div>
        </div>
        <div  class="col-md-8">
          <div class="service-type-dropdown form-group">
            <MultiSelect
              v-model="form.service_type"
              :options="serviceTypesValue"
              optionLabel="name"
              optionValue="service_type__id"
              :placeholder="$t('form.serviceType.placeholder')"
               :class="{'p-invalid':v.service_type.$error}"
            >
            </MultiSelect>
            <div class="errors">
              <small class="p-invalid" v-if="v.service_type.$error && !v.service_type.required">
                {{ requiredError($t('form.serviceType.label')) }}
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
import { mapGetters, } from "vuex";

export default {
  components: {
  },
  props: {
    v:{
      type:Object,
    },
    subOptionsValue:{
      type: Array,
      default: () => [],
    },
    serviceTypesValue:{
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