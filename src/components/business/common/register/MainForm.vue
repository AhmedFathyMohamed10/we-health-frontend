<template>
  <div class="main-form">
    <div class="clinic-name w-100">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <i class=" fa fa-solid fa-user fs-5 mx-1"></i>
            <label class="mx-1 form-label">{{ $t("form.name.label") }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="en-name form-group">
                <InputText
                  type="text"
                  :placeholder="$t('form.name.englishPlaceholder')"
                  v-model="form.name.enName"
                  :class="{'p-invalid':v.name.enName.$error}"
                />
                <div class="errors">
                  <small class="p-invalid" v-if="v.name.enName.$error && !v.name.enName.required">
                    {{requiredError($t('form.name.englishPlaceholder'))}}
                  </small>
                  <small class="p-invalid" v-else-if=" v.name.enName.$error && !v.name.enName.english">
                    {{englishError($t('form.name.englishPlaceholder'))}}
                  </small>
                  <small class="p-invalid" v-else-if="v.name.enName.$error && !v.name.enName.minLength">
                    {{minLengthError($t('form.name.englishPlaceholder'),v.name.enName.$params.minLength.min)}}
                  </small>
                  <small class="p-invalid" v-else-if="v.name.enName.$error && !v.name.enName.maxLength">
                    {{ maxLengthError($t('form.name.englishPlaceholder'),v.name.enName.$params.maxLength.max)}}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="ar-name form-group">
                <InputText
                  type="text"
                  :placeholder="$t('form.name.arabicPlaceholder')"
                  v-model="form.name.otherName"
                  :class="{'p-invalid':v.name.otherName.$error}"
                />
                <div class="errors">
                  <small class="p-invalid" v-if="v.name.otherName.$error && !v.name.otherName.required">
                    {{requiredError($t('form.name.arabicPlaceholder'))}}
                  </small>
                  <small class="p-invalid" v-if=" v.name.otherName.$error && !v.name.otherName.arabic">
                    {{arabicError($t('form.name.arabicPlaceholder'))}}
                  </small>
                  <small class="p-invalid" v-else-if="v.name.otherName.$error && !v.name.otherName.minLength">
                    {{minLengthError($t('form.name.arabicPlaceholder'),v.name.otherName.$params.minLength.min)}}
                  </small>
                  <small class="p-invalid" v-else-if="v.name.otherName.$error && !v.name.otherName.maxLength">
                    {{ maxLengthError($t('form.name.arabicPlaceholder'),v.name.otherName.$params.maxLength.max)}}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot></slot>
    <div class="bio">
      <div class="row">
        <div class="col-md-4">
          <div class="label-wrapper d-flex align-items-center mb-2">
            <i class=" fa fa-solid fa-comment-dots fs-5 mx-1"></i>
            <label class="mx-1 form-label">{{ $t('form.bio.label') }}</label>
          </div>
        </div>
        <div class="col-md-8">
          <div class="bio-wrapper form-group">
            <Textarea
              rows="2"
              v-model="form.bio"
              :placeholder="$t('form.bio.placeholder')"
              :class="{'p-invalid':v.bio.$error}"
            >
            </Textarea>
            <div class="errors"> 
              <small class="p-invalid" v-if="v.bio.$error && !v.bio.maxLength">
                {{ maxLengthError($t('form.bio.label'),v.bio.$params.maxLength.max)}}
              </small>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import {requiredError,minLengthError,maxLengthError,arabicError,englishError} from "@/validation/errors.js";

import { mapGetters,mapActions } from "vuex";

export default {
  components: {

  },
  props: {
    v:{
      type:Object,
    }
  },
  data() {
    return {};
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
    minLengthError,
    maxLengthError,
    arabicError,
    englishError,
    ...mapActions('business/register',{
      setForm:'setForm',
    }),
  },
};
</script>
<style lang="scss" scoped>
.main-form {
  width: 100%;
}
</style>