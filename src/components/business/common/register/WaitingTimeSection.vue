<template>
    <div class="waiting-time-section">
        <Base>
            <div class="col-lg-6">
                <div class="form-group">
                <label class="form-label">{{$t('form.waitingTime.label')}} (minute)</label>
                <InputText 
                    type="number"  
                    :placeholder="$t('form.waitingTime.placeholder')" 
                    v-model.trim="form.waiting_time"
                    :class="{'p-invalid':v.waiting_time.$error}"
                ></InputText>
                <div class="errors">
                    <small class="p-invalid" v-if="v.waiting_time.$error && !v.waiting_time.required">
                       {{requiredError($t('form.waitingTime.label'))}}
                    </small>
                    <small class="p-invalid" v-else-if="v.waiting_time.$error && !v.waiting_time.numeric">
                       {{numericError($t('form.waitingTime.label'))}}
                    </small>
                    <small class="p-invalid" v-else-if="v.waiting_time.$error && !v.waiting_time.maxValue">
                        {{maxValueError($t('form.waitingTime.label'),v.waiting_time.$params.maxValue.max)}}
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
import Base from "@/components/global/utilities/Base.vue"
import { mapGetters,mapActions } from "vuex";
export default {
    props: { 
        v:{
            type:Object,
        },
    },
    components:{ Base,},
    data() {
        return {
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