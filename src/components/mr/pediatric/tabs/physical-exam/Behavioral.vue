<template>
  <div class="behavioral">
    <Base>
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
              <h4>{{ $t("Behavioral") }}</h4>
              <ResetButton @reset="reset"></ResetButton>
            </div>
          </div>
        <div class="row">
            <div v-for="option in $v.behavioralOptions.$each.$iter" :key="option.id" class="col-md-4">
                <div class="field-checkbox my-2">
                    <Checkbox 
                        :id="option.$model.id" 
                        name="option" 
                        :value="option.$model"
                        v-model="selectedOptions" 
                        @click="option.$model.checked = !option.$model.checked" 
                    />
                    <label :for="option.$model.id" class="mb-0 ms-2">{{option.$model.value}}</label>
                </div>
                <div class="form-group" v-if="option.$model.checked">
                    <input 
                    type="text" 
                    class="form-control" placeholder="comment" 
                    :class="{'is-invalid':option.comment.$error}"
                    v-model =  option.$model.comment
                   
                    >
                    <div class="invalid-feedback" v-if="!option.comment.notContainsHtmlTags && option.comment.$error">
                        {{ htmlTagsError($t('comment.label')) }}
                    </div>
                    <div class="invalid-feedback" v-else-if="!option.comment.minLength && option.comment.$error">
                        {{ minLengthError($t('comment.label'),option.comment.$params.minLength.min) }}
                    </div>
                    <div class="invalid-feedback" v-else-if="!option.comment.maxLength && option.comment.$error">
                        {{ maxLengthError($t('comment.label'),option.comment.$params.maxLength.max) }}
                    </div>
                </div>
                <div class="form-group">
            </div>                
            </div>
        </div>
    </Base>
  </div>
</template>
<i18n src="@/lang/mr/pediatric/physicalExam.json"></i18n>
<script>
import Base from '@/components/global/utilities/Base.vue'
import { maxLength, minLength } from "vuelidate/lib/validators";
import { minLengthError, maxLengthError, htmlTagsError } from "@/validation/errors";
import { notContainsHtmlTags } from "@/validation/customValidators";
import ResetButton from "@/components/global/utilities/ResetButton.vue";
/////////////////////////////////
import physicalExamOptions from '@/mixins/mr/pediatric/options/physicalExamOptions'
export default {
    mixins: [physicalExamOptions],
    props: {
        v: {
            type: Object,
        }
    },
    check_error:{
        type:Object,
    },
    serializer_error:{
        type:Object,
    },      
    
    components:{
        Base,
        ResetButton,
    },
    data() {
        return {
            // behavioral:[],
            // behavioral:this.value,  
            selected: false ,         
            minLengthError,
            maxLengthError,
            htmlTagsError,
            selectedOptions:[],
        };
    },
    computed: {
        behavioral: {
            get() {
                return this.$store.getters["detailsPediatric/pediatric/behavioral"];
            },
            set(value) {
                this.$store.dispatch("detailsPediatric/pediatric/setBehavioral", value);
            },
        },
        
    },
    watch: {
        // needed watch because behavioral data dosen't change directly  
        selectedOptions:{
            deep: true,
            handler(newValue, oldValue) {
               this.behavioral = newValue
            },
        },
    },
    methods: {
     resetForm() {

            this.selectedOptions = []

            for (let option in this.behavioralOptions) {
                console.log(option)
                this.behavioralOptions[option].checked = false;
                this.behavioralOptions[option].comment = "";

            }
            // this.$v.behavioralOptions.$reset();
        },
        reset() {
            this.resetForm();
            this.v.$reset();

        },
    },
    validations: {
        behavioralOptions: {
            $each: {
                comment: {
                    minLength: minLength(1),
                    maxLength: maxLength(255),
                    notContainsHtmlTags(value) {
                        return notContainsHtmlTags(value);
                    },
                }
            }
        },
    },
}
</script>

<style>

</style>