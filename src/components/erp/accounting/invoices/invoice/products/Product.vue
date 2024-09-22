<template>
<div class="product">
    <Base :class="{'border-danger':!v.required && v.$error}">  
        <div class="row" v-if="!v.required && v.$error">
          <div class="col-12">
            <small class="p-invalid">{{ requiredError($t("form.products.label")) }}</small>
          </div>
        </div>         
        <div class="row">       
            <div class="col-md-6 col-xl-3">                
                <div class="form-group">
                    <label class="form-label">{{$t('form.product.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon" :class="{'p-invalid':$v.rowToAdd.product.$error}">
                            <i class="pi pi-search"></i>
                        </span>
                        <AutoComplete
                            v-model="rowToAdd.product"
                            :suggestions="productParams.suggestions"
                            :class="{'p-invalid':$v.rowToAdd.product.$error}"                          
                            field="name_en"  
                            :placeholder="$t('form.product.placeholder')" 
                            @complete="search($event,productParams)"
                            :forceSelection="true"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToAdd.product.$error&&!$v.rowToAdd.product.required">
                            {{requiredError($t('form.product.label'))}}
                        </small>
                    </div>
                </div>
            </div>            
            <div class="col-md-6 col-xl-3">
              <div class="form-group">
                <label for="" class="form-label">{{$t('form.unit.label')}}</label>
                <Dropdown 
                  v-model="rowToAdd.unit"
                  :options="unitOptions" 
									optionLabel="name"
              		optionValue="id"
                  :placeholder="$t('form.unit.placeholder')" 
                 />
              </div>
            </div>     
            <div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">{{ $t("form.expiration_date.label") }}</label>
								<Calendar
                    v-if="isPurchase"
										v-model="expiration_date"
										hourFormat="12" 
										:showIcon="true" 
										:icon="'pi pi-clock'"  
										:placeholder="$t('form.expiration_date.placeholder')"
										:class="{'p-invalid':$v.rowToAdd.expiration_date.$error}"
                    />
                    <Dropdown
                    v-if="isSaleOrReturns"
                    v-model="expiration_date"
                    :placeholder="$t('form.expiration_date.placeholder')"
                    :options="expiration_dates"
                    optionLabel="expiration_date" 
                    optionValue="id"
                    dataKey="id" 
                    :class="{'p-invalid':$v.rowToAdd.expiration_date.$error}"
                />
								<div v-if="!$v.rowToAdd.expiration_date.required && $v.rowToAdd.expiration_date.$error" class="invalid-feedback">
									{{ requiredError($t("form.expiration_date.label")) }}
								</div>
							</div>
						</div>               
						<div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">{{ $t("form.unit_price.label") }}</label>
								<input
									type="number"
									min="0"
									v-model="rowToAdd.unit_price"
									:placeholder="$t('form.unit_price.placeholder')"
									class="form-control"
									:class="{ 'is-invalid': $v.rowToAdd.unit_price.$error }"
								/>
								<div v-if="!$v.rowToAdd.unit_price.required && $v.rowToAdd.unit_price.$error" class="invalid-feedback">
									{{ requiredError($t("form.unit_price.label")) }}
								</div>
							</div>
						</div>     
						<div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">
                  {{ $t("form.quantity.label") }}
                  <span v-if="isSaleOrPurchaseReturns && rowToAdd.unit && rowToAdd.expiration_date">
                    <small>Available :</small>
                    <Badge :value="maxQuantity" :severity="maxQuantity>0?'success':'danger'" class="mx-2"></Badge>
                  </span>
                </label>
								<input
									type="number"
									min="0"
									v-model="rowToAdd.quantity"
									:placeholder="$t('form.quantity.placeholder')"
									class="form-control"
									:class="{ 'is-invalid': $v.rowToAdd.quantity.$error }"
								/>
								<div v-if="!$v.rowToAdd.quantity.required && $v.rowToAdd.quantity.$error" class="invalid-feedback">
									{{ requiredError($t("form.quantity.label")) }}
								</div>
								<div v-else-if="!$v.rowToAdd.quantity.maxValue && $v.rowToAdd.quantity.$error" class="invalid-feedback">
									{{ maxValueError($t("form.quantity.label"),maxQuantity) }}
								</div>
							</div>
						</div>   
  
            <div class="col-md-6 col-xl-3">
              <div class="form-group discount">
                <label class="form-label">{{ $t('form.discount.label') }}</label>
                <InputGroupWrapper>
                    <InputText
                    v-model.trim="rowToAdd.discount_value"
                    type="number"
                    min="0"
                    :placeholder="$t('form.discount.valuePlaceholder')"
                    :class="{'p-invalid':$v.rowToAdd.discount_value.$error}" 
                    />
                    <Dropdown
                    v-model="rowToAdd.discount_method"
                    :placeholder="$t('form.discount.dropdownPlaceholder')"
                    :options="discountMethods"
                    optionLabel="name" 
                    optionValue="id" 
                    dataKey="id"
                    :class="{'p-invalid':$v.rowToAdd.discount_method.$error}"
                    />
                </InputGroupWrapper>
                <div class="error">
                  <small class="p-invalid" 
                      v-if="$v.rowToAdd.discount_method.$error && !$v.rowToAdd.discount_method.required">
                      {{requiredError($t('form.discount.dropdownPlaceholder'))}}
                  </small>
                  <small class="p-invalid" 
                      v-else-if="$v.rowToAdd.discount_value.$error && !$v.rowToAdd.discount_value.required">
                      {{requiredError($t('form.discount.valuePlaceholder'))}}
                  </small>
                  <small class="p-invalid" 
                      v-else-if="$v.rowToAdd.discount_value.$error && !$v.rowToAdd.discount_value.numeric">
                      {{numericError($t('form.discount.valuePlaceholder'))}}
                  </small>
                </div>
              </div>
            </div>     
						<div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">{{ $t("form.total_price.label") }}</label>
								<input
									type="number"
									min="0"
									v-model="rowToAdd.total_price "
									:placeholder="$t('form.total_price.placeholder')"
									class="form-control"
									:class="{ 'is-invalid': $v.rowToAdd.total_price.$error }"
								/>
								<div v-if="!$v.rowToAdd.total_price.required && $v.rowToAdd.total_price.$error" class="invalid-feedback">
									{{ requiredError($t("form.total_price.label")) }}
								</div>
							</div>
						</div>                  
            <div class="col-md-6 col-xl-3">
              <AddButton @add="addRow"></AddButton>
            </div>
        </div>

    </Base>
    <div class="table-wrapper my-2" v-if="form.products.length>0">
        <Base >
            <div class="row my-2">      
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-sm text-center">
                            <thead>
                                <tr>
                                    <th scope="col">{{$t('table.thead.count')}}</th>
                                    <th scope="col">{{$t('form.product.label')}}</th>
                                    <th scope="col">{{$t('form.unit.label')}}</th>
                                    <th scope="col">{{$t('form.unit_price.label')}}</th>
                                    <th scope="col">{{$t('form.quantity.label')}}</th>
                                    <th scope="col">{{$t('form.expiration_date.label')}}</th>
                                    <th scope="col">{{$t('form.discount_value.label')}}</th>
                                    <th scope="col">{{$t('form.discount_method.label')}}</th>
                                    <th scope="col">{{$t('form.total_price.label')}}</th>
                                    <th scope="col">{{$t('table.thead.controls')}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(val, index) in form.products" :key="index">
                                    <td class="align-middle custom-width">{{parseInt(index)+1}}</td>
                                    <td class="align-middle">
                                      {{val.product[`name_${locale}`]}}
                                    </td>
                                    <td class="align-middle">
                                      <span v-if="val.product.unit_data">
                                        {{ findOptionNameById(val.product.unit_data,id=val.unit) }}
                                      </span>
                                    </td>
                                    <td class="align-middle">
                                      {{val.unit_price}}
                                    </td>
                                    <td class="align-middle">
                                      {{val.quantity}}
                                    </td>
                                    <td class="align-middle">
                                      {{val.expiration_date}}
                                    </td>
                                    <td class="align-middle">
                                        {{ val.discount_value }} 
                                    </td>
                                    <td class="align-middle">
                                        {{ findOptionNameById(discountMethods,id=val.discount_method) }}
                                    </td>
                                    <td class="align-middle">
                                      {{val.total_price}}
                                    </td>
                                    <td class="align-middle">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <EditButton class="me-2" @edit="openEditDialog(val,index)"></EditButton>
                                            <DeleteButton @delete="openDeleteDialog(index,val.code)"></DeleteButton>
                                        </div>
                                    </td> 
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>    
        </Base>
    </div>

    <EditDialog :display="displayEditDialog" @close="closeEditDialog" :header="$t('product.header')" @cancel="closeEditDialog" @save="editRow">
        <div class="row">
          <div class="col-md-6 col-xl-3">                
                <div class="form-group">
                    <label class="form-label">{{$t('form.product.label')}}</label>
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon" :class="{'p-invalid':$v.rowToEdit.product.$error}">
                            <i class="pi pi-search"></i>
                        </span>
                        <AutoComplete
                            v-model="rowToEdit.product"
                            :suggestions="productParams.suggestions"
                            :class="{'p-invalid':$v.rowToEdit.product.$error}"                          
                            field="name_en"  
                            :placeholder="$t('form.product.placeholder')" 
                            @complete="search($event,productParams)"
                            :forceSelection="true"
                        />
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToEdit.product.$error&&!$v.rowToEdit.product.required">
                            {{requiredError($t('form.product.label'))}}
                        </small>
                    </div>
                </div>
            </div>            
            <div class="col-md-6 col-xl-3">
              <div class="form-group">
                <label for="" class="form-label">{{$t('form.unit.label')}}</label>
                <Dropdown 
                  v-model="rowToEdit.unit"
                  :options="unitOptions" 
									optionLabel="name"
              		optionValue="id"
                  :placeholder="$t('form.unit.placeholder')" 
                 />
              </div>
            </div>     
            <div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">{{ $t("form.expiration_date.label") }}</label>
								<Calendar
                    v-if="isPurchase"
										v-model="expiration_date"
										hourFormat="12" 
										:showIcon="true" 
										:icon="'pi pi-clock'"  
										:placeholder="$t('form.expiration_date.placeholder')"
										:class="{'p-invalid':$v.rowToEdit.expiration_date.$error}"
                    />
                    <Dropdown
                    v-if="isSaleOrReturns"
                    v-model="expiration_date"
                    :placeholder="$t('form.expiration_date.placeholder')"
                    :options="expiration_dates"
                    optionLabel="expiration_date" 
                    optionValue="id"
                    dataKey="id" 
                    :class="{'p-invalid':$v.rowToEdit.expiration_date.$error}"
                />
								<div v-if="!$v.rowToEdit.expiration_date.required && $v.rowToEdit.expiration_date.$error" class="invalid-feedback">
									{{ requiredError($t("form.expiration_date.label")) }}
								</div>
							</div>
						</div>                 
						<div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">{{ $t("form.unit_price.label") }}</label>
								<input
									type="number"
									min="0"
									v-model="rowToEdit.unit_price"
									:placeholder="$t('form.unit_price.placeholder')"
									class="form-control"
									:class="{ 'is-invalid': $v.rowToEdit.unit_price.$error }"
								/>
								<div v-if="!$v.rowToEdit.unit_price.required && $v.rowToEdit.unit_price.$error" class="invalid-feedback">
									{{ requiredError($t("form.unit_price.label")) }}
								</div>
							</div>
						</div>    
						<div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">
                  {{ $t("form.quantity.label") }}
                  <span v-if="isSaleOrPurchaseReturns && rowToEdit.unit && rowToEdit.expiration_date">
                    <small>Available :</small>
                    <Badge :value="maxQuantity" :severity="maxQuantity>0?'success':'danger'" class="mx-2"></Badge>
                  </span>
                </label>
								<input
									type="number"
									min="0"
									v-model="rowToEdit.quantity"
									:placeholder="$t('form.quantity.placeholder')"
									class="form-control"
									:class="{ 'is-invalid': $v.rowToEdit.quantity.$error }"
								/>
								<div v-if="!$v.rowToEdit.quantity.required && $v.rowToEdit.quantity.$error" class="invalid-feedback">
									{{ requiredError($t("form.quantity.label")) }}
								</div>
								<div v-else-if="!$v.rowToEdit.quantity.maxValue && $v.rowToEdit.quantity.$error" class="invalid-feedback">
									{{ maxValueError($t("form.quantity.label"),maxQuantity) }}
								</div>
							</div>
						</div>             
            <div class="col-md-6 col-xl-3">
              <div class="form-group discount">
                <label class="form-label">{{ $t('form.discount.label') }}</label>
                <InputGroupWrapper>
                    <InputText
                    v-model.trim="rowToEdit.discount_value"
                    type="number"
                    min="0"
                    :placeholder="$t('form.discount.valuePlaceholder')"
                    :class="{'p-invalid':$v.rowToEdit.discount_value.$error}" 
                    />
                    <Dropdown
                    v-model="rowToEdit.discount_method"
                    :placeholder="$t('form.discount.dropdownPlaceholder')"
                    :options="discountMethods"
                    optionLabel="name" 
                    optionValue="id" 
                    :class="{'p-invalid':$v.rowToEdit.discount_method.$error}"
                    />
                </InputGroupWrapper>
                <div class="error">
                  <small class="p-invalid" 
                      v-if="$v.rowToEdit.discount_method.$error && !$v.rowToEdit.discount_method.required">
                      {{requiredError($t('form.discount.dropdownPlaceholder'))}}
                  </small>
                  <small class="p-invalid" 
                      v-else-if="$v.rowToEdit.discount_value.$error && !$v.rowToEdit.discount_value.required">
                      {{requiredError($t('form.discount.valuePlaceholder'))}}
                  </small>
                  <small class="p-invalid" 
                      v-else-if="$v.rowToEdit.discount_value.$error && !$v.rowToEdit.discount_value.numeric">
                      {{numericError($t('form.discount.valuePlaceholder'))}}
                  </small>
                </div>
              </div>
            </div>     
						<div class="col-md-6 col-xl-3">
							<div class="form-group">
								<label for="" class="form-label">{{ $t("form.total_price.label") }}</label>
								<input
									type="number"
									min="0"
									v-model="rowToEdit.total_price "
									:placeholder="$t('form.total_price.placeholder')"
									class="form-control"
									:class="{ 'is-invalid': $v.rowToEdit.total_price.$error }"
								/>
								<div v-if="!$v.rowToEdit.total_price.required && $v.rowToEdit.total_price.$error" class="invalid-feedback">
									{{ requiredError($t("form.total_price.label")) }}
								</div>
							</div>
						</div> 
        </div>      
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
</div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/accounting/invoices/product.json"></i18n>
<script>
import {cloneDeep} from 'lodash';
//////////////////////////////////////////////////////////
import {htmlTagsError,minLengthError,maxLengthError,requiredError,maxValueError,maxRecordsError} from "@/validation/errors";
import {minLength,maxLength,numeric,required,minValue} from "vuelidate/lib/validators";
import {notContainsHtmlTags} from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue"
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper'
import AddButton from "@/components/global/utilities/AddButton.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
import EditDialog from "@/components/global/utilities/EditDialog.vue"
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import productSuggestions from "@/mixins/erp/accounting/invoices/invoice/product/productSuggestions"
import discountMethods from "@/mixins/erp/accounting/invoices/invoice/discountMethods"
import moment from "moment"
import {findOptionNameById} from "@/helpers/utilities";
import { mapGetters, mapActions } from "vuex";
import definition from "@/mixins/erp/accounting/invoices/definition/definition"


/////////////////////////////////////////////////////////////
export default {
		mixins:[productSuggestions,discountMethods,definition],
    props: {
        v:{
          type:Object,
        },
    },
    components: {
        Base,
        InputGroupWrapper,
        AddButton,
        EditButton,
        DeleteButton,
        EditDialog,
        DeleteDialog,
    },
    data(){
        return {
          total_price :null,
					rowToAdd:{
							product:null,
							unit:null,
							discount_method:1,
              discount_value:0,
							expiration_date:null,
							unit_price:null,
							total_price:null,
              code:null,
          },
          rowToEdit:{
              product:null,
              unit:null,
              discount_method:1,
              discount_value:0,
              expiration_date:null,
              unit_price:null,
              total_price:null,
              code:null,
					},
					indexToEdit:null,
					displayEditDialog: false,
					indexToDelete:null,
					displayDeleteDialog: false,
          codeToDelete:null,
					////////////////////////
					expiration_date:null,
        }
    },
    validations:{
        	rowToAdd:{
            product:{
                required,
            },
            unit:{
                required,
            },
            discount_method:{
              required
            },    
            discount_value:{
              required,
              numeric,
            },
						expiration_date:{
							required,
							date: (value) => {
								if(value == null || value == ''){
									return true;
								}
								else {
									return moment(value).isValid();
								}
							},
						},      
						quantity:{
								required,
                minValue:minValue(1),
                maxValue: function (value) {
                  if(this.isSaleOrPurchaseReturns){
                    // Sales
                    return value <= this.maxQuantity
                  }
                  else{
                    // Purchase
                    return value <=1000000
                  } 
                }
            },
						unit_price:{
								required,
						},
						total_price:{
							required,
						},
					},
        	rowToEdit:{
            product:{
                required,
            },
            unit:{
                required,
            },
            discount_method:{
              required
            },    
            discount_value:{
              required,
              numeric,
            },
						expiration_date:{
							required,
							date: (value) => {
								if(value == null || value == ''){
									return true;
								}
								else {
									return moment(value).isValid();
								}
							},
						},      
						quantity:{
								required,
                minValue:minValue(1),
                maxValue: function (value) {
                  if(this.isSaleOrPurchaseReturns){
                    // Sales
                    return value <= this.maxQuantity
                  }
                  else{
                    // Purchase
                    return value <=1000
                  } 
                }
            },
						unit_price:{
								required,
						},
						total_price:{
							required,
						},
					},
    },
		computed:{
      ...mapGetters("erp/accounting/invoices/invoice", {
        getForm: "getForm",
      }),
      form:{
        get(){
          return this.getForm;
        },
        set(){
          return this.setForm;
        },
      },  
      selectedDefinition(){
        let definition = this.form.definition;
        if(definition){
          definition = this.definitions.filter(d=>d.id==definition)[0];
        }
        return definition
      }, 
      unitOptions(){
        let options = []
        let product = this.rowToAdd.product || this.rowToEdit.product
        if(product){
          let units = product.unit_data
          if(units){
            options = units
          }
        }
        return options
      },
      unitPrice(){
          let unitPrice = 0
          let product = this.rowToAdd.product || this.rowToEdit.product
          let unit = this.rowToAdd.unit || this.rowToEdit.unit
          if(product){
            if(product.unit_data){
              let selectedUnit = product.unit_data.filter(item=>item.id===unit)[0]
              if(selectedUnit && this.selectedDefinition){
                if(selectedUnit['unit_price'] && this.selectedDefinition['policy']){
                  let price = selectedUnit['unit_price'].filter(price=>price.pricingPolicy===this.selectedDefinition['policy'])[0]
                  if(price){
                    unitPrice = price['value']
                  }
                }
              }
            }
          }
          return unitPrice
      },    
      expiration_dates(){
        let dates = []
        let product = this.rowToAdd.product || this.rowToEdit.product
        let store = this.form.store
        if(product&&store){
          if(product.expiration_dates){
            dates = product.expiration_dates
          }
        }
        return dates
      },  
      expiration_code(){
        let code = null;
        let expiration_date = this.rowToAdd.expiration_date || this.rowToEdit.expiration_date
        if(this.expiration_dates.length>0){
          let date = this.expiration_dates.filter(e=>e.expiration_date == expiration_date)[0]
          if(date){
            code = date.code
          }
        }
        return code
      },
      maxQuantity(){
          let maxQuantity = 0
          let product = this.rowToAdd.product || this.rowToEdit.product
          let unit_id = this.rowToAdd.unit || this.rowToEdit.unit
          let expiration_date = this.rowToAdd.expiration_date || this.rowToEdit.expiration_date
          let store = this.form.store
          
          if(product&&store&&unit_id&&expiration_date){
            if(product.expiration_dates){
              let max = product.expiration_dates.filter(item=>item.product_id==product.id && item.store==store && item.expiration_date==expiration_date)[0]
              let unit = this.unitOptions.filter(u=>u.id==unit_id)[0]
              // selected unit and its related product quantity
              if(unit && max){
                // calculate user quantity in the table of the same product and expiration date
                let userQuantity = 0
                let products = [...this.form.products];
                if(this.displayEditDialog){
                  // exclude current updating products from user entered quantity case he need to update it if there is available quantity in the store
                  products = this.form.products.filter((val, idx) => idx != this.indexToEdit);
                }
                for (const product of products){
                  if(product.product.id==max.product_id && product.expiration_date==max.expiration_date){
                    // calculate the net quantity for every product in the table by its equivalent units
                    const productUnit = product.product.unit_data.filter(u=>u.id==product.unit)[0]
                    const netQuantity = product.quantity*productUnit.equivalentQuantity
                    userQuantity += netQuantity
                  }
                }
                // the max available quantity in the store for the product and its related expiry date
                maxQuantity = max.quantity
                // subtract the max available quantity in the store for the product and its related expiry date by the quantity entered by the user in the table
                maxQuantity -= userQuantity
                // the max available quantity in the store for the product and its related expiry date at current unit selected by the user
                maxQuantity = parseInt(maxQuantity)/parseInt(unit.equivalentQuantity)
                if(maxQuantity<0){
                  maxQuantity = 0
                }
              }
            }
          } 

        return maxQuantity
      },  
      selectedExpirationDate(){
        let date = null;
        if (this.expiration_date)  {
          const filtered = this.expiration_dates.filter(e=>e.id==this.expiration_date)[0]
          if(filtered){
            date = filtered['expiration_date']
          }
        } 
        return date;
      },    
			formattedDate() {
        let date = null;
				if (this.expiration_date)  {
					if(this.$moment(this.expiration_date).isValid()){
						date = this.$moment(this.expiration_date, 'YYYY-MM-DD', true).format('YYYY-MM-DD');
					}
				} 
				return date;
    	},
      total(){
          let total = 0
          let unit_price = this.rowToAdd.unit_price || this.rowToEdit.unit_price
          let quantity = this.rowToAdd.quantity || this.rowToEdit.quantity
          let discount_value = this.rowToAdd.discount_value || this.rowToEdit.discount_value
          let discount_method = this.rowToAdd.discount_method || this.rowToEdit.discount_method

          if(unit_price>0){
            total = unit_price ;
          }
          if(total > 0 && quantity>0){
            total = unit_price*quantity;
          }
          if(total > 0 && discount_method && discount_value){
            if(discount_method===1){
              total -= discount_value
            }
            else if(discount_method===2){
              total -= (discount_value*total/100)
            }
          }
          return total
      },
      isSaleOrReturns(){
        const saleOrReturnsIds = [1,2,4,5,7,10] 
        if(saleOrReturnsIds.includes(this.form.invoice_type)){
          return true;
        }
        else return false;
      },
      isSaleOrPurchaseReturns(){
        const saleOrPurchaseReturnsIds = [1,4,5,7,10] 
        if(saleOrPurchaseReturnsIds.includes(this.form.invoice_type)){
          return true;
        }
        else return false;
      },
      isPurchase(){
        const purchaseIds = [3,6,8,11]
        if(purchaseIds.includes(this.form.invoice_type)){
          return true;
        }
        else return false;
      },
		},
    watch: {
        unitPrice(newValue,oldValue){
          this.rowToAdd.unit_price = newValue ;
          this.rowToEdit.unit_price = newValue ;
        },
        expiration_code(newValue,oldValue){
          this.rowToAdd.code = newValue ;
          this.rowToEdit.code = newValue ;
        },
        total(newValue,oldValue){
          this.rowToAdd.total_price = newValue ;
          this.rowToEdit.total_price = newValue ;
        },
        formattedDate(newVal, oldVal){
            this.rowToAdd.expiration_date = newVal;
            this.rowToEdit.expiration_date = newVal;
        },
        selectedExpirationDate(newVal, oldVal){
            this.rowToAdd.expiration_date = newVal;
            this.rowToEdit.expiration_date = newVal;
        },
    },
    methods: {
        ...mapActions("erp/accounting/invoices/invoice", [
          "setForm"
        ]),         
        /////////////////////////
        htmlTagsError,
        maxLengthError,
        minLengthError,
        requiredError,
        maxValueError,
        maxRecordsError,
        findOptionNameById,
        /////////////////////////
        resetForm(){
            this.rowToAdd ={
							product:null,
							unit:null,
              discount_method:1,
              discount_value:0,
							expiration_date:null,
							unit_price:null,
							total_price:null,
              code:null,
            }
            this.expiration_date = null;
            this.$v.rowToAdd.$reset();
        },
        addRow(){
            this.$v.rowToAdd.$touch();
            if(!(this.$v.rowToAdd.$invalid )){
                this.form.products.push({...this.rowToAdd});
                this.resetForm();
            }
        },
        /////////////////////
        openEditDialog(val,index) {
            this.displayEditDialog = true;
            this.indexToEdit = index;
            this.rowToEdit = cloneDeep(val)
						this.expiration_date = val.expiration_date;
        },
        closeEditDialog() {
            this.rowToEdit= {
							product:null,
							unit:null,
              discount_method:1,
              discount_value:0,
							expiration_date:null,
							unit_price:null,
							total_price:null,
              code:null,
						}
            this.indexToEdit = null;
            this.expiration_date = null;
            this.$v.rowToEdit.$reset()
            this.displayEditDialog = false;
        },
        editRow(){
            this.v.$touch();
            this.$v.rowToEdit.$touch();
            if(!(this.v.$invalid || this.$v.rowToEdit.$invalid )){
                this.form.products.splice(this.indexToEdit,1,{...this.rowToEdit});
                this.closeEditDialog();
            }
        },
        ////////////////////////
        openDeleteDialog(index,code) {
            this.displayDeleteDialog = true;
            this.indexToDelete =index;
            this.codeToDelete = code;
        },
        closeDeleteDialog() {
            this.displayDeleteDialog = false;
            this.indexToDelete =null;
            this.codeToDelete =null;
        },
        deleteRow(){
            this.form.products.splice(this.indexToDelete,1);
            this.form['deleted_products']=[];
            this.form['deleted_products'].push(this.codeToDelete)
            this.closeDeleteDialog();
        },
    },

};
</script>
<style lang="scss" scoped>
.custom-width{
	max-width: 30px;
}
</style>
