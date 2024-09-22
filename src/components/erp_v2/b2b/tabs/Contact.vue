<template>
    <div class="contact">
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
        <div class="col-lg-4 col-sm-6">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.city.label")
                }}</label>
                <span :class="locale=='ar'?'p-input-icon-right':'p-input-icon-left'" >
                            <i class="pi pi-search"></i>
                            <AutoComplete
                                :placeholder="$t('form.city.placeholder')"
                                v-model="selectedCity" 
                                :class="{'p-invalid':v.city.$error}"
                                :suggestions="citiesOPtions"
                                @item-select="handleCity"
                                @complete="searchCity($event)" 
                                :field="locale" 
                            />
                        </span>
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!v.city.required && v.city.$error"
                  >
                    {{ requiredError($t("form.city.label")) }}
                  </small>
                
                </div>
            </div>
            </div>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.address.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.address"
                  :placeholder="$t('form.address.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': v.address.$error,
                  }"
                />
                <div class="error">
                  
                  <small
                  class="p-invalid"
                  v-if="!v.address.maxLength && v.address.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.address.label"),
                      v.address.$params.maxLength.max
                    )
                  }}
                </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !v.address.notContainsHtmlTags && v.address.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.email.label")
                  }}</label>
                  <input
                  type="text"
                  v-model="form.email"
                  :placeholder="$t('form.email.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': v.email.$error,
                  }"
                />
                <div class="error">
                  <small
                  class="p-invalid"
                  v-if="!v.email.required && v.email.$error"
                >
                  {{ requiredError($t("form.email.label")) }}
                </small>
                  <small
                  class="p-invalid"
                  v-if="!v.email.maxLength && v.email.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.email.label"),
                      v.email.$params.maxLength.max
                    )
                  }}
                </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !v.email.notContainsHtmlTags && v.email.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                  <small
                  class="p-invalid"
                  v-else-if="v.email.$error && !v.email.email"
                >
                  {{ emailError($t("form.email.label")) }}
                </small>
                </div>
                </div>
              </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base>
            <div class="row">
              <!-- group -->
           
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.phone_number.label")
                  }}</label>
                  <input
                  type="number"
                  v-model="form.phone_number"
                  :placeholder="$t('form.phone_number.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': v.phone_number.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!v.phone_number.required && v.phone_number.$error"
                  >
                    {{ requiredError($t("form.phone_number.label")) }}
                  </small>
                  <small
                  class="p-invalid"
                  v-if="!v.phone_number.maxLength && v.phone_number.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.phone_number.label"),
                      v.phone_number.$params.maxLength.max
                    )
                  }}
                </small>
                <small
                class="p-invalid"
                v-if="!v.phone_number.minLength && v.phone_number.$error"
              >
                {{
                  minLengthError(
                    $t("form.name.label"),
                    v.phone_number.$params.minLength.min
                  )
                }}
              </small>
                <small
                class="p-invalid"
                v-if="
                  !v.phone_number.numeric &&
                  v.phone_number.$error
                "
              >
                {{ numericError($t("form.phone_number.label")) }}
              </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !v.phone_number.notContainsHtmlTags && v.phone_number.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.other_phone_number.label")
                  }}</label>
                  <input
                  type="text"
                  v-model="form.other_phone_number"
                  :placeholder="$t('form.other_phone_number.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': v.other_phone_number.$error,
                  }"
                />
                <div class="error">
                  <small
                  class="p-invalid"
                  v-if="
                    !v.other_phone_number.numeric &&
                    v.other_phone_number.$error
                  "
                >
                  {{ numericError($t("form.other_phone_number.label")) }}
                </small>
                  <small
                  class="p-invalid"
                  v-else-if="!v.other_phone_number.maxLength && v.other_phone_number.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.other_phone_number.label"),
                      v.other_phone_number.$params.maxLength.max
                    )
                  }}
                </small>
                <small
                class="p-invalid"
                v-else-if="!v.other_phone_number.minLength && v.other_phone_number.$error"
              >
                {{
                  minLengthError(
                    $t("form.other_phone_number.label"),
                    v.other_phone_number.$params.minLength.min
                  )
                }}
              </small>
              
                  <small
                    class="p-invalid"
                    v-else-if="
                      !v.other_phone_number.notContainsHtmlTags && v.other_phone_number.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
                </div>
              </div>
             
            </div>
          </Base>
        </div>
        <div class="col-lg-4 col-sm-6">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.industry_type.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.industry_type"
                  :placeholder="$t('form.industry_type.placeholder')"
                  class="form-control"
                  :disable="true"
                  :class="{
                    'is-invalid': v.industry_type.$error,
                  }"
                  
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!v.industry_type.required && v.industry_type.$error"
                  >
                    {{ requiredError($t("form.industry_type.label")) }}
                  </small>
                  <small
                  class="p-invalid"
                  v-if="!v.industry_type.maxLength && v.industry_type.$error"
                >
                  {{
                    maxLengthError(
                      $t("form.industry_type.label"),
                      v.industry_type.$params.maxLength.max
                    )
                  }}
                </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !v.industry_type.notContainsHtmlTags && v.industry_type.$error
                    "
                  >
                    {{ htmlTagsError($t()) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>
      </div>
     
    </div>
  </template>
  <i18n src="@/lang/erp_v2/b2b/b2b.json"></i18n>
  <i18n src="@/lang/global/global.json"></i18n>
  <script>
  import { required } from "vuelidate/lib/validators";
  import { mapGetters, mapActions } from "vuex";
  import { requiredError, inputError , htmlTagsError, numericError, maxLengthError, minLengthError,emailError} from "@/validation/errors.js";
  import Base from "@/components/global/utilities/Base.vue";
  import cities from '@/mixins/business/cities.js';
import governorate from '@/mixins/business/governorate.js';
  export default {
    mixins: [ cities,governorate],
    props: {
      error: {
        type: Object,
      },
      v: {
      type: Object,
      required: true,
    },
    },
    components: {
      Base,
    },
  
    data() {
      return {  
        selectedCity: "",
					filteredCities: [],
					citiesOPtions: [], 
        cityOptions: [
        { en: "New York",ar:"نيويورك", key: "New York" },
        { en: "Rome", ar:"روما",key: "Rome" },
        { en: "London", ar:"لندن",key: "London" },
        { en: "Istanbul", ar:"اسطنبول",key: "Istanbul" },
        { en: "Paris", ar:"باريس",key: "Paris" },
      ],  
      };
    },
    computed: {
      ...mapGetters("erp_v2/b2b/", {
        getContact: "getContact",
      }),
  
      form: {
        get() {
          return this.getContact;
        },
        set(value) {
          this.setContact(value);
        },
      },
    },
    created() {},
    validations: {
      rowToAdd: {
        unit: {
          required,
        },
        barcode: {},
      },
    },
    methods: {
      requiredError,
      inputError,
      htmlTagsError,
      numericError,
      maxLengthError,
      minLengthError,
      emailError,
  
      ...mapActions("erp_v2/b2b", [
        "setContact",
      ]),
      searchCity(event){
		setTimeout(()=>{
      console.log("cities",this.cities)
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
			this.form.city = this.selectedCity.en;
		},  
    
   
    },
  };
  </script>
    