<template>
    <div class="insurance-companies-section">
        <Base>
            <div class="row">
                <div class="col-md-7">                
                    <div class="form-group">
                        <label class="form-label">{{$t('form.insuranceCompanies.label')}}</label>
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon" :class="{'p-invalid':$v.company.$error}">
                                <i class="pi pi-search"></i>
                            </span>
                            <AutoComplete
                                v-model="company"
                                :suggestions="insurances"
                                :class="{'p-invalid':$v.company.$error}"                          
                                field="name"  
                                :placeholder="$t('form.insuranceCompanies.placeholder')" 
                                @complete="search($event,companyParams)"
                            />
                        </div>
                        <div class="error"> 
                            <small class="p-invalid" v-if="$v.company.$error && !$v.company.required">
                                {{requiredError($t('form.insuranceCompanies.label'))}}
                            </small>
                            <small class="p-invalid" v-else-if="$v.company.$error && !$v.company.maxLength">
                                 {{ maxLengthError($t('form.insuranceCompanies.label'),$v.company.$params.maxLength.max) }}
                            </small>  
                            <small class="p-invalid" v-else-if="$v.company.$error && !$v.company.validator">
                                {{inputError($t('form.insuranceCompanies.label'))}}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-md-5">
                    <AddButton @add="addCompany"></AddButton>
                </div>
                <div class="col-12">
                    <div v-for="(company, index) in form.insuranceCompanies" :key="company.name" class="my-2">
                        <Chip :label="company.name" removable  @remove="deleteCompany(index)" />
                    </div>
                </div>
            </div>
        </Base>
    </div>
</template>
<i18n src="@/lang/business/register"></i18n>
<script>
import {required,maxLength} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators"
import {requiredError,inputError,maxLengthError} from "@/validation/errors.js";
import AddButton from "@/components/global/utilities/AddButton.vue"
import Base from "@/components/global/utilities/Base.vue"
import { mapGetters,mapActions } from "vuex";
export default {
    components:{ AddButton ,Base},
    data(){
			return{
				company:"",
				companyParams:{
					url: "search_insurances",
					suggestions:[]
				},
			}
    },
    computed:{
			...mapGetters('business/insuranceSuggestions',{
					searchLoading:'searchLoading',
					searchData:'searchData',
					searchError:'searchError',

			}),
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
			insurances(){
					let options = [];
					if(this.searchData){
							options = this.searchData.insurances;
							return options

					}
					else{
							return options;
					}
			}
    },
    validations:{
			company:{
				required,
				maxLength: maxLength(144),
					validator: (value) => {
					if(typeof value == 'object' || value == null || value == '')
							return true;
					else {
							return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
					}
				},
			},
    },
    methods:{
			requiredError,
			inputError,
			maxLengthError,
			...mapActions('business/register',{
					setForm:'setForm',
			}),
			async search(event,params) {
				console.log(event.query)
				try {
					await this.$store.dispatch('business/insuranceSuggestions/search',{url:params.url,name:event.query})
					.then((res) => {
							console.log("res" +res)
							params.suggestions = [...res]
							console.log("params"+ params.suggestions)
					});
				}
				catch (error) {
					console.error(error)
				}
			},
			addCompany(){
				this.$v.company.$touch();
				if (!this.$v.company.$invalid) {
						if(typeof this.company == 'string'){
								this.form.insuranceCompanies.push({name: this.company});
						}
						else {
								this.form.insuranceCompanies.push({...this.company});
						}
						this.company = ""
						this.$v.company.$reset(); 
				}
			},
			deleteCompany(index){
				this.form.insuranceCompanies.splice(index, 1)
			},
    }

}
</script>
<style lang="scss" scoped>
/deep/ .p-input-icon-left .p-autocomplete .p-inputtext{
    padding-left: 2.5rem;
}
/deep/ .p-input-icon-right .p-autocomplete .p-inputtext{
    padding-right: 2.5rem;
}
/deep/ .p-input-icon-right .p-autocomplete .p-autocomplete-loader {
  left: 1rem;
  right:auto;
}
/deep/ .pi{
    z-index: 10;
}
/deep/ .p-button-icon-only{
    .pi{
        color: white !important;
    }
}
.selected-companies-list{
    .company{
        padding: 5px;
        border-radius: 34px;
        background-color: #f8f9fa;
    }
}
</style>