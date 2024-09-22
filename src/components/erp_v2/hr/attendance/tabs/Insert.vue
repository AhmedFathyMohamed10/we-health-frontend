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
      <Base>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.date.label")
              }}</label>
              <Calendar 
                v-model="form.date" 
                :showIcon="true" dateFormat="yy-mm-dd"
                :placeholder="$t('form.date.placeholder')" 
                :class="{'p-invalid': v.date.$error,}"
                />
              <div v-if="!v.date.required && v.date.$error" class="p-error">
                {{ requiredError($t("form.date.label")) }}
              </div>
              <div class="p-error" v-if="v.date.$error && !v.date.validDateTime">
                {{ timeDateError($t()) }}
              </div>
            </div>
            
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.status.label")}}</label>
              <div class="d-flex flex-wrap custom-radio-button justify-content-between" >
                <div
                  v-for="option of status_options"
                  :key="option.id"
                  class="field-radiobutton d-flex gap-1 align-items-center"
                >
                  <RadioButton
                    :id="option.id"
                    name="option"
                    :value="option.id"
                    v-model="form.status"
                    :class="{'p-invalid': v.status.$error}"
                    @input="inputStatus"
                  />
                  <label class="mt-2" :class="{ 'text-danger': v.status.$error && ! v.status.required  }">{{ option[locale] }} </label>
                </div>
              </div>
              <div class="error">
                <small class="p-invalid" v-if="v.status.$error &&!v.status.required">
                  {{ requiredError($t("form.status.label")) }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </Base>
    <div class="row">
      <div class="col-6">
        <Base>
          <div class="row">
            <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{$t("form.employee.label")}}</label>
                    <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                      <i class="pi" :class="[typeof form.employee === 'string' && form.employee !== '' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                      <AutoComplete
                        v-model="form.employee" 
                        :suggestions="employeeParams.suggestions"
                        field="employee__name"
                        :placeholder="$t('form.employee.placeholder')"
                        @complete="searchEmployee($event, employeeParams)"
                        :forceSelection="true" 
                        :class="{ 'p-invalid': v.employee.$error }" 
                        @input="inputEmployee"
                      />
                    </span> 
                    <div class="error">
                      <small class="p-invalid" v-if="!v.employee.required && v.employee.$error">
                        {{ requiredError($t("form.employee.label")) }}
                      </small>
                    </div>
                  </div>
                  <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.shift.label")
                  }}</label>
                  <Dropdown v-model="form.shift" :options="shiftOptions" optionLabel="name" optionValue="code" disabled
                    :placeholder="$t('form.shift.placeholder')" />
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.note.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.note"
                    :placeholder="$t('form.note.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': v.note.$error }"
                  />
                </div>
            </div>
          </div>
        </Base>
      </div>
      <div class="col-6">
        <Base>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.departed.label")
                  }}</label>
                  
                    <Calendar 
                    :timeOnly="true" hourFormat="24"
                    v-model="form.departed" 
                    :showIcon="true"
                    :showSeconds="true" 
                    :placeholder="$t('form.departed.placeholder')" 
                    :class="{'p-invalid': v.departed.$error,}"
                    />
              
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.note.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.note_departed"
                    :placeholder="$t('form.note.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': v.note_departed.$error }"
                    disabled
                  />

                </div>
            </div>
          </div>
        </Base>
        <Base v-if="form.status==2">
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.attended.label")
                  }}</label>
                  
                    <Calendar 
                    :timeOnly="true" hourFormat="24"
                    v-model="form.attended" 
                    :showIcon="true" 
                    :showSeconds="true" 
                    :placeholder="$t('form.attended.placeholder')" 
                    :class="{'p-invalid': v.attended.$error,}"
                    />
                    <!-- <div v-if="!v.attended.required && v.attended.$error" class="p-error">
                      {{ requiredError($t("form.attended.label")) }}
                    </div>
                    <div class="p-error" v-if="v.attended.$error && !v.attended.validDateTime">
                      {{ timeDateError($t()) }}
                    </div> -->
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.note.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.note_attended"
                    :placeholder="$t('form.note.placeholder')"
                    class="form-control"
                    :class="{ 'is-invalid': v.note_attended.$error }"
                  />

                </div>
            </div>
          </div>
        </Base>
      </div>  
    </div>  
  </div>
</template>
<i18n src="@/lang/erp_v2/hr/attendance.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
import { mapGetters, mapActions } from "vuex";
import { requiredError, inputError } from "@/validation/errors.js";
import Base from "@/components/global/utilities/Base.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/attendance/employeeSuggestions.js";
export default {
  mixins:[employeeSuggestions],
  props: {
    error: {
      type: Object,
    },
    v: {
      type: Object,
      required: true,
    },
    shiftOptions: {
      type: Array,
      required: [],
    },
    status_options: {
      type: Array,
      required: [],
    },
  },
  components: {
    Base,

  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("erp_v2/hr/attendance", {
      getForm: "getForm",
    }),
    form: {
      get() {
        return this.getForm;
      },
      set(value) {
        this.setForm(value);
      },
    },
  },

  methods: {
    requiredError,
    inputError,
    ...mapActions("erp_v2/hr/attendance", [
      "setForm",
    ]),
    inputEmployee(){
      if(this.form.employee instanceof Object){
        this.form.shift = this.form.employee.shift__code
        if(this.form.status == 1){
          this.form.departed = this.$moment(this.form.employee.shift__work_hour_to, 'hh:mm:ss', true).format('hh:mm:ss');
        }
        if (this.form.status == 2) {
          this.form.departed = this.$moment(this.form.employee.shift__work_hour_to, 'hh:mm:ss', true).format('hh:mm:ss');
          this.form.attended = this.$moment(this.form.employee.shift__work_hour_from, 'hh:mm:ss', true).format('hh:mm:ss');
        }
      }
    },
    inputStatus(){
      if(this.form.employee){
        if (this.form.status == 1) {
          this.form.departed = this.$moment(this.form.employee.shift__work_hour_to, 'hh:mm:ss', true).format('hh:mm:ss');
        }
        if (this.form.status == 2) {
          this.form.departed = this.$moment(this.form.employee.shift__work_hour_to, 'hh:mm:ss', true).format('hh:mm:ss');
          this.form.attended = this.$moment(this.form.employee.shift__work_hour_from, 'hh:mm:ss', true).format('hh:mm:ss');
        }
      }
    },
   
  },
};
</script>
