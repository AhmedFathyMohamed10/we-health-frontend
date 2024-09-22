<template>
    <div class="fees-section">
      <Base>
			<div class="col-lg-6">
          <div class="form-group">
              <CustomInputGroup
                  v-model="form.fees"
                  :label="$t('form.fees.label')" 
                  :inputType="'number'" 
                  :valuePlaceholder="$t('form.fees.placeholder')" 
                  :dropdownPlaceholder="$t('form.fees.placeholder')"
                  :options="currencyOptions" 
                  :invalidValue="v.fees.value.$error"
                  :optionValue="'id'"

              />
              <div class="error">
                  <small class="p-invalid" v-if="v.fees.value.$error && !v.fees.value.required">
                    {{requiredError($t('form.fees.label'))}}
                  </small>
                  <small class="p-invalid" v-if="v.fees.value.$error && !v.fees.value.numeric">
                      {{numericError($t('form.fees.label'))}}
                  </small>
                  <small class="p-invalid" v-else-if="v.fees.value.$error && !v.fees.value.maxValue">
                    {{maxValueError($t('form.fees.label'),v.fees.value.$params.maxValue.max)}}
                  </small>  
              </div>
          </div>
				</div>
      </Base>
    </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import {requiredError,numericError,maxValueError} from '@/validation/errors.js'
import CustomInputGroup from '@/components/global/custom/CustomInputGroup.vue'
import Base from "@/components/global/utilities/Base.vue"
import { mapGetters,mapActions } from "vuex";
export default {
    props: { 
      v:{
        type:Object,
      },
    },
    components:{ 
			CustomInputGroup,
      Base,
		},
    data() {
      return {
        currencyOptions:[
          {
            id:1,
            value:"EGP"	,
          },
          {
            id:2,
            value:"Dollar",
          },
        ],
      }
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
      numericError,
      maxValueError,
      ...mapActions('business/register',{
        setForm:'setForm',
      }),
    },
}
</script>
<style lang="scss" scoped>

</style>