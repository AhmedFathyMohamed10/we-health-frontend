<template>
    <div class="location-section">
        <Base  :title="$t('form.location.head')"   :icon="'fa-solid fa-location-dot'">
            <div class="row">
                <div class="col-lg-4">
                    <div class="form-group address">
                        <label class="form-label">{{$t('form.location.address.label')}}</label>
                        <InputText 
                            type="text"
                            :placeholder="$t('form.location.address.placeholder')"
                            :class="{'p-invalid':v.location.address.$error}"
                            v-model="form.location.address"
                        >
                        </InputText>
                        <div class="errors">
                            <small class="p-invalid" v-if="v.location.address.$error && !v.location.address.required">
                                {{requiredError($t('form.location.address.label'))}}
                            </small>
                            <small class="p-invalid" v-else-if="v.location.address.$error && !v.location.address.minLength">
                                {{minLengthError($t('form.location.address.label'),v.location.address.$params.minLength.min)}}
                            </small>
                            <small class="p-invalid" v-else-if="v.location.address.$error && !v.location.address.maxLength">
                                {{maxLengthError($t('form.location.address.label'),v.location.address.$params.maxLength.max)}}
                            </small>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="form-group city">
                        <label class="form-label">{{$t('form.location.city.label')}}</label>
                        <span :class="locale=='ar'?'p-input-icon-right':'p-input-icon-left'" >
                            <i class="pi pi-search"></i>
                            <AutoComplete
                                :placeholder="$t('form.location.city.placeholder')"
                                v-model="selectedCity" 
                                :class="{'p-invalid':v.location.city.$error}"
                                :suggestions="citiesOPtions"
                                @item-select="handleCity"
                                @complete="searchCity($event)" 
                                :field="locale" 
                            />
                        </span>
                        <div class="errors">
                            <small class="p-invalid" v-if="v.location.city.$error && !v.location.city.required">
                                {{requiredError($t('form.location.city.label'))}}
                            </small>
                        </div>

                    </div>
                </div>         
                <div class="col-lg-4">
                    <div class="form-group zip-code">
                        <label class="form-label">{{$t('form.location.zipCode.label')}}</label>
                        <InputText 
                            type="number"
                            :placeholder="$t('form.location.zipCode.placeholder')"
                            v-model="form.location.zipCode"
                        >
                        </InputText>
                        <div class="errors">
                            <small class="p-invalid" v-if="v.location.zipCode.$error && !v.location.zipCode.minLength">
                                {{minLengthError($t('form.location.zipCode.label'),v.location.zipCode.$params.minLength.min)}}
                            </small>
                            <small class="p-invalid" v-else-if="v.location.zipCode.$error && !v.location.zipCode.maxLength">
                                {{maxLengthError($t('form.location.zipCode.label'),v.location.zipCode.$params.maxLength.max)}}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </Base> 
    </div>
</template>
<i18n src="@/lang/business/register"></i18n>

<script>
import cities from '@/mixins/business/cities.js';
import governorate from '@/mixins/business/governorate.js';
import Base from "@/components/global/utilities/Base.vue"
import {requiredError,minLengthError,maxLengthError,numericError}from "@/validation/errors";
import { mapGetters,mapActions } from "vuex";
export default {
    mixins:[cities,governorate],
    props: { 
        v:{
            type:Object,
        },
    },
    components:{
        Base,
    },
    data(){
        return{
					selectedCity: "",
					filteredCities: [],
					citiesOPtions: [], 
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
    watch:{
			selectedCity:{
					imediate:true,
					handler(newValue,oldValue){
							this.handleCity();  
					}
			},
      
    },
    mounted(){
    },
    methods:{
    //////////////////////////////
    ...mapActions('business/register',{
      setForm:'setForm',
    }),
    //////////////////////////////
		requiredError,
		minLengthError,
		maxLengthError,
		numericError,
		searchCity(event){
		setTimeout(()=>{
				this.filteredCities = this.cities.filter(c=>
						c.en.toLowerCase().includes(event.query.toLowerCase()) || c.ar.includes(event.query)
				);
				this.citiesOPtions = this.filteredCities.map((city) => {
						const matchingGovernorate = this.governorate.find((g) => g.id === city.governorate_id);
						return {ar:city.ar + "," + matchingGovernorate.ar, en:city.en + "," + matchingGovernorate.en,id:city.id,governorate_id:city.governorate_id}
				});
		  },200)
    },
		handleCity(){
			this.form.location.city = this.selectedCity.en;
		},  
    }
}
</script>
<style lang="scss" scoped>
/deep/ .pi{
    z-index: 10;
}

</style>