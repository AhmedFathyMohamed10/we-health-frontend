<template>
  <div class="warranty">
    <div class="row" v-if="error">
      <div class="col-12">
        <div class="errors" v-if="typeof error === 'object'">
          <Message
            severity="error"
            v-for="(value, key) in error.Contact"
            :key="key"
            :closable="false"
          >
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
                $t("warranty.last_purchasing_date.label")
              }}</label>
               <Calendar v-model="form.last_purchasing_date_warranty" :showIcon="true" dateFormat="yy-mm-dd"
                  :placeholder="$t('warranty.last_purchasing_date.placeholder')"  />           
            </div>
          </div>
          <div class="col-6">
            <label for="" class="form-label">{{
                $t("warranty.ended_in.label")
              }}</label>
        <div class="form-group">
          <InputGroupWrapper>
                    <InputText
                    v-model.trim="form.end_in_value"
                    type="number"
                    min="0"
                    :placeholder="$t('input.value.placeholder')"
                    :class="{'p-invalid':v.end_in_value.$error}" 
                    />
                    <Dropdown
                    v-model="form.end_in_selection"
                    :placeholder="$t('input.selection.placeholder')"
                    :options="ended_in_options"
                    optionLabel="name" 
                    optionValue="id" 
                    :class="{'p-invalid':v.end_in_selection.$error}"
                    />
                </InputGroupWrapper>
        </div>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/erp_v2/assets/fixedAsset.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper'
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
      form: this.value,
      ended_in_options: [
        { name: "Days", en: "Days", ar: "يوم", id: 1 },
        { name: "Weeks", en: "Weeks", ar: "اسبوع", id: 2 },
        { name: "Months", en: "Months", ar: "شهر", id: 3 },
        { name: "Years", en: "Years", ar: "سنه", id: 4 },
      ],
    };
  },
};
</script>
  