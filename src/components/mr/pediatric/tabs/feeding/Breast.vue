<template>
    <div class="breast-feeding">
        <Base>        
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                    <label class="form-label">{{$t('breast.label')}}</label>
                    <textarea
                        class="form-control"
                        v-model.trim="breast" 
                        :placeholder="$t('breast.placeholder')"
                        :class="{
                            'is-invalid':
                            v.$invalid  && v.$anyError
                        }"
                        ></textarea>
                        <div v-if="!v.notContainsHtmlTags &&  v.$error" class="invalid-feedback">
                                {{htmlTagsError($t('breast.label'))}}
                        </div>
                        <div v-else-if="!v.minLength &&  v.$error" class="invalid-feedback">
                                {{maxLengthError($t('breast.label'), v.$params.minLength.min)}}
                        </div>
                        <div v-else-if="!v.maxLength &&  v.$error" class="invalid-feedback">
                                {{minLengthError($t('breast.label'), v.$params.maxLength.max)}}
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    </div>
</template>
<i18n src="@/lang/mr/pediatric/feeding.json"></i18n>

<script>
import {htmlTagsError,minLengthError,maxLengthError,} from "@/validation/errors";
import {minLength,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue"
export default {
    props: {
         v: {
            type: Object,
            required: true,
        },
        check_error:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },
    },
    components: {
        Base,
    },    
    data(){
        return{
            htmlTagsError,
            maxLengthError,
            minLengthError,
            
        }
    },
    
    computed: {
        breast: {
            get() {
                return this.$store.getters['detailsPediatric/pediatric/breast'];
            },
            set(value) {
                this.$store.dispatch('detailsPediatric/pediatric/setBreast', value);
            }
        },
    },
}
</script>

<style>

</style>