<template>
  <div class="equipment-section">
    <Base>
      <div class="row">
          <div class="col-md-7">                
              <div class="form-group">
                  <label class="form-label">{{$t('form.equipmentCompanies.label')}}</label>
                  <div class="p-inputgroup">
                      <span class="p-inputgroup-addon" :class="{'p-invalid':$v.equipment.$error}">
                          <i class="pi pi-desktop"></i>
                      </span>
                      <InputText 
                            type="text"  
                            :placeholder="$t('form.equipmentCompanies.placeholder')" 
                            v-model.trim="equipment"
                            :class="{'p-invalid':$v.equipment.$error}"
                        ></InputText>
                  </div>
                  <div class="error">
                    <small class="p-invalid" v-if="$v.equipment.$error&&!$v.equipment.required">
                        {{requiredError($t('form.equipmentCompanies.label'))}}
                    </small>
                    <small class="p-invalid" v-else-if="$v.equipment.$error && !$v.equipment.maxLength">
                        {{ maxLengthError($t('form.equipmentCompanies.label'),$v.equipment.$params.maxLength.max) }}
                    </small>  
                 </div>
              </div>
          </div>
          <div class="col-md-5">
              <AddButton @add="addEquipment"></AddButton>
          </div>
          <div class="col-12">
              <div v-for="(equipment, index) in form.equipments" :key="equipment.name" class="my-2">
                  <Chip :label="equipment.name" removable  @remove="deleteEquipment(index)" />
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
				equipment:"",
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
    validations:{
			equipment:{
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
			addEquipment(){
				this.$v.equipment.$touch();
				if (!this.$v.equipment.$invalid) {
					if(typeof this.equipment == 'string'){
							this.form.equipments.push({name: this.equipment});
					}
					else {
							this.form.equipments.push({...this.equipment});
					}
					this.equipment = ""
					this.$v.equipment.$reset(); 
				}
			},
			deleteEquipment(index){
				this.form.equipments.splice(index,1)
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