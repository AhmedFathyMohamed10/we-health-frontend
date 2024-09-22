<template>
  <div class="mic">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message severity="error" v-for="(value, key) in error.Contact" :key="key" :closable="false">
            <span v-if="typeof value === 'string'">{{ value }}</span>
            <span v-else>{{ value[0] }}</span>
          </Message>
        </div>
      </div>
    </div>

    <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.indication.label")
              }}</label>
                <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.indication"
                :placeholder="$t('mic.indication.placeholder')"
                :class="{
                    'is-invalid': v.indication.$error,}"
                  ></textarea>
                <div v-if="! v.indication.minLength && v.indication.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.indication.label"),v.indication.$params.minLength.min)}}
                </div>
                <div v-else-if="! v.indication.maxLength && v.indication.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.indication.label"),v.indication.$params.maxLength.max)}}
                </div>
                <div v-else-if="! v.indication.notContainsHtmlTags &&v.indication.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.indication.label")) }}
                </div>

      
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.pharmaceutical_group.label")
              }}</label>
                <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.pharmaceutical_group"
                :placeholder="$t('mic.pharmaceutical_group.placeholder')"
                :class="{
                    'is-invalid': v.pharmaceutical_group.$error,
                  }" />

                <div v-if="!v.pharmaceutical_group.minLength && v.pharmaceutical_group.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.pharmaceutical_group.label"),v.pharmaceutical_group.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.pharmaceutical_group.maxLength && v.pharmaceutical_group.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.pharmaceutical_group.label"),v.pharmaceutical_group.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.pharmaceutical_group.notContainsHtmlTags &&v.pharmaceutical_group.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.pharmaceutical_group.label")) }}
                </div>

            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.dose.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.dose"
                :placeholder="$t('mic.dose.placeholder')"
                :class="{'is-invalid': v.dose.$error,}" 
                />
                <div v-if="!v.dose.minLength && v.dose.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.dose.label"),v.dose.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.dose.maxLength && v.dose.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.dose.label"),v.dose.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.dose.notContainsHtmlTags &&v.dose.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.dose.label")) }}
                </div>
           
            </div>
          </div>

        </div>
       

        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.contra_indication.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.contra_indication"
                :placeholder="$t('mic.contra_indication.placeholder')"
                :class="{
                    'is-invalid': v.contra_indication.$error,
                  }" />
                <div v-if="!v.contra_indication.minLength && v.contra_indication.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.contra_indication.label"),v.contra_indication.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.contra_indication.maxLength && v.contra_indication.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.contra_indication.label"),v.contra_indication.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.contra_indication.notContainsHtmlTags &&v.contra_indication.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.contra_indication.label")) }}
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.pharmacological_group.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.pharmacological_group"
                :placeholder="$t('mic.pharmacological_group.placeholder')"
                :class="{
                    'is-invalid': v.pharmacological_group.$error,
                  }" />
                <div v-if="!v.pharmacological_group.minLength && v.pharmacological_group.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.pharmacological_group.label"),v.pharmacological_group.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.pharmacological_group.maxLength && v.pharmacological_group.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.pharmacological_group.label"),v.pharmacological_group.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.pharmacological_group.notContainsHtmlTags &&v.pharmacological_group.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.pharmacological_group.label")) }}
                </div>
        
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.other.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.other"
                :placeholder="$t('mic.other.placeholder')"
                :class="{
                    'is-invalid': v.other.$error,
                  }" />
                <div v-if="!v.other.minLength && v.other.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.other.label"),v.other.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.other.maxLength && v.other.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.other.label"),v.other.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.other.notContainsHtmlTags &&v.other.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.other.label")) }}
                </div>
          
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.precaution.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.precaution"
                :placeholder="$t('mic.precaution.placeholder')"
                :class="{
                    'is-invalid': v.precaution.$error,
                  }" />
                <div v-if="!v.precaution.minLength && v.precaution.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.precaution.label"),v.precaution.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.precaution.maxLength && v.precaution.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.precaution.label"),v.precaution.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.precaution.notContainsHtmlTags &&v.precaution.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.precaution.label")) }}
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.side_effect.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.side_effect"
                :placeholder="$t('mic.side_effect.placeholder')"
                :class="{
                    'is-invalid': v.side_effect.$error,
                  }" />
                <div v-if="!v.side_effect.minLength && v.side_effect.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.side_effect.label"),v.side_effect.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.side_effect.maxLength && v.side_effect.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.side_effect.label"),v.side_effect.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.side_effect.notContainsHtmlTags &&v.side_effect.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.side_effect.label")) }}
                </div>
            </div>
          </div> 
          </div>
          <div class="row">
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.active_ingredient.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.active_ingredient"
                :placeholder="$t('mic.active_ingredient.placeholder')"
                :class="{
                    'is-invalid': v.active_ingredient.$error,
                  }" />
                <div v-if="!v.active_ingredient.minLength && v.active_ingredient.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.active_ingredient.label"),v.active_ingredient.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.active_ingredient.maxLength && v.active_ingredient.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.active_ingredient.label"),v.active_ingredient.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.active_ingredient.notContainsHtmlTags &&v.active_ingredient.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.active_ingredient.label")) }}
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("mic.pregnancy.label")
              }}</label>
              <textarea 
                class="form-control" 
                rows="3" cols="30" 
                v-model.trim="form.pregnancy"
                :placeholder="$t('mic.pregnancy.placeholder')"
                :class="{
                    'is-invalid': v.pregnancy.$error,
                  }" />
                <div v-if="!v.pregnancy.minLength && v.pregnancy.$error" class="invalid-feedback">
                  {{maxLengthError($t("mic.pregnancy.label"),v.pregnancy.$params.minLength.min)}}
                </div>
                <div v-else-if="!v.pregnancy.maxLength && v.pregnancy.$error" class="invalid-feedback">
                  {{minLengthError($t("mic.pregnancy.label"),v.pregnancy.$params.maxLength.max)}}
                </div>
                <div v-else-if="!v.pregnancy.notContainsHtmlTags &&v.pregnancy.$error" class="invalid-feedback">
                  {{ htmlTagsError($t("mic.pregnancy.label")) }}
                </div>
            </div>
          </div>
       
    </div>
  
  </div>
</template>
<i18n src="@/lang/erp_v2/items/product.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import {
  htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
} from "@/validation/errors.js";
export default {
  props: {
    error: {
      type: Object,
    },
    v: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("erp_v2/items/product", {
      getMic: "getMic",
    }),

    form: {
      get() {
        return this.getMic;
      },
      set(value) {
        this.setMic(value);
      },
    },
  },

  methods: {
    htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
    ...mapActions("erp_v2/items/product", [
      "setMic",
    ]),

   


  },
};
</script>
  