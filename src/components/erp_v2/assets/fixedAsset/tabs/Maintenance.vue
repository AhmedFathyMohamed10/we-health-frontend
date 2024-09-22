<template>
  <div class="contact">
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
      <div class="col-6">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("maintenance.last_purchasing_date.label")
          }}</label>
            <Calendar v-model="form.last_purchasing_date_maintenance" :showIcon="true" dateFormat="yy-mm-dd"
                  :placeholder="$t('maintenance.last_purchasing_date.placeholder')" />
        
        </div>
      </div>
      <div class="col-6">
        <label for="" class="form-label">{{
            $t("maintenance.maintenance_every.label")
          }}</label>
        <div class="form-group">
          <InputGroupWrapper>
                    <InputText
                    v-model.trim="form.maintenance_every_value"
                    type="number"
                    min="0"
                    :placeholder="$t('input.value.placeholder')"
                    :class="{'p-invalid':v.maintenance_every_value.$error}" 
                    />
                    <Dropdown
                    v-model="form.maintenance_every_selection"
                    :placeholder="$t('input.selection.placeholder')"
                    :options="maintenance_every_options"
                    optionLabel="name" 
                    optionValue="id" 
                    :class="{'p-invalid':v.maintenance_every_selection.$error}"
                    />
                </InputGroupWrapper>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="" class="form-label">{{
            $t("maintenance.next_maintenance.label")
          }}</label>
          <input type="text" 
            v-model="form.next_maintenance" 
            :placeholder="$t('maintenance.next_maintenance.placeholder')"
            class="form-control"  
            :class="{'is-invalid': v.next_maintenance.$error,}" 
          />
          <div v-if="!v.next_maintenance.notContainsHtmlTags &&v.next_maintenance.$error" class="invalid-feedback">
            {{ htmlTagsError($t("maintenance.next_maintenance.label")) }}
          </div>
          <div v-else-if="!v.next_maintenance.minLength && v.next_maintenance.$error" class="invalid-feedback">
            {{maxLengthError($t("maintenance.next_maintenance.label"),v.next_maintenance.$params.minLength.min)}}
          </div>
          <div v-else-if="!v.next_maintenance.maxLength && v.next_maintenance.$error" class="invalid-feedback">
            {{minLengthError($t("maintenance.next_maintenance.label"), v.next_maintenance.$params.maxLength.max)}}
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="" class="form-label invisible">{{
            $t("maintenance.next_maintenance.label")
          }}</label>
          <Button class="w-100" :label="$t('btns.show')"  @click.prevent="save" />
        </div>
      </div>
    </div>
</div></template>
<i18n src="@/lang/erp_v2/assets/fixedAsset.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper'
import {
  htmlTagsError,
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
    value: {
      type: Object,
      required: true,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  components: {
    InputGroupWrapper,
  },

  data() {
    return {
      form : this.value,
      maintenance_every_options: [
        { name: "Days", en: "Days", ar: "يوم", id: 1 },
        { name: "Weeks", en: "Weeks", ar: "اسبوع", id: 2 },
        { name: "Months", en: "Months", ar: "شهر", id: 3 },
        { name: "Years", en: "Years", ar: "سنه", id: 4 },
      ],
    };
  },
  methods:{
    htmlTagsError,
  minLengthError,
  maxLengthError,
  }
};
</script>
  