<template>
    <div class="Perepation-receipt">
      <!-- ///////////////////// Start paying-method///////////////////////// -->
      <div class="paying-method my-4  z-1">
         <Base>
           <div class="row z-1">
                 <div class=" col-md-6 col-xl-3">
                     <div class="paying-method">
                         <label class="form-label">{{$t('otc.paymentMethod.label')}}</label>
                         <Dropdown
                            v-model="activeInvoice.paymentMethod"
                             :options="payingMethodOptions"
                             optionLabel="value" 
                             :placeholder="$t('otc.paymentMethod.dropdownPlaceholder')" 
                         />
                     </div>
                 </div>
                 <div class=" col-md-6 col-xl-3">
                     <div class="total-discount">
                         <CustomInputGroup
                            v-model="activeInvoice.totalDiscount"
                             :label="$t('otc.totalDiscount.label')"
                             :inputType="'text'" 
                             :valuePlaceholder="$t('otc.totalDiscount.placeholder')" 
                             :placeholder="$t('otc.totalDiscount.dropdownPlaceholder')"
                             :options="totalDiscountOptions" />
                     </div>  
                 </div>
                 <div class=" col-md-6 col-xl-3">
                     <label class="form-label">{{$t('otc.vat.label')}}</label>   
                     <div class=" custom-input-group">
                         <div class="p-inputgroup  w-100">
                         <InputText class=" w-70 p-inputgroup-addon "
                             v-model="activeInvoice.vat"
                             :placeholder="$t('otc.vat.placeholder')"
                             />
                         <InputText class=" w-20 btn-success-gradient custom-placeholder  "  
                           :placeholder="$t('otc.vat.dropdownPlaceholder')"
                           disabled />
                    </div>
                     </div>
                 </div>
                 <div class=" col-md-6 col-xl-3">
                     <div class="d-flex  justify-content-end align-items-center ">
                         <div class="border border-success custom-rounded  my-3 " >
                             <span class="fw-bold">{{$t('total.label')}}</span><br/>
                             <span class=" fw-bold text-danger">{{$t('total.value')}}</span>
 
                         </div>
                     </div>
                 </div>
           </div>
         </Base>
    <!--///////////////////// End  paying-method//////////////////////// -->
     </div>
      <!-- ///////////////////// Start  perepation//////////gradient//////////////////// -->
     <div class="perepation my-4">
         <div class="row">
             <div class="col-md-6 custom-size ">
                     <Base>
                         <div class="d-flex justify-content-between  custom-gradient   align-items-center p-3">
                             <h5 class=" mb-0" > {{$t('perepation.label')}} </h5> 
                             <ResetButton @reset="reset" class="mb-0"></ResetButton>
                         </div>
                         <!-- /////////////Start  perepation medical//////////////////////// -->
                         <div class="row">
                             <div class="col-md-12  col-lg-12  edit-media col-xxl-6  ">
                                 <div class="form-group drug-name">
                                     <label class="form-label">{{$t('otc.drugName.label')}}</label>
                                     <div class="p-inputgroup">
                                         <span 
                                             class="p-inputgroup-addon bg-light" 
                                              :class="{'p-invalid':
                                                 $v.rowToAdd.drugName.$error 
                                             }">
                                             <i class="mdi mdi-pill"></i>
                                         </span>
                                         <AutoComplete
                                             v-model="rowToAdd.drugName"
                                             :suggestions="drugNameParams.suggestions"  
                                             :class="{'p-invalid':$v.rowToAdd.drugName.$error}"              
                                             field="value"  
                                             :placeholder="$t('otc.drugName.placeholder')" 
                                             @complete="search($event,drugNameParams)"
                                          />
                                        
                                     </div>
                                     <div class="error">
                                         <small class="p-invalid" v-if="$v.rowToAdd.drugName.$error&&!$v.rowToAdd.drugName.validator">
                                             {{inputError($t('otc.drugName.label'))}}
                                         </small>
                                         <small class="p-invalid" v-else-if="$v.rowToAdd.drugName.$error&&!$v.rowToAdd.drugName.required">
                                             {{requiredError($t('otc.drugName.label'))}}
                                         </small>
                                     </div>
                                 </div>                 
                             </div>
                             <div class="col-md-12  col-lg-12 edit-media  col-xxl-6">
                               <div class="form-group">
                                 <CustomInpSearGroup 
                                     v-model="rowToAdd.dose"
                                     :placeholder="$t('otc.dose.dropdownPlaceholder')"
                                     :label="$t('otc.dose.label')" 
                                     :valuePlaceholder="$t('otc.dose.valuePlaceholder')" 
                                     :dropdownPlaceholder="$t('otc.dose.dropdownPlaceholder')"
                                     :options="doseOptions"
                                     :icon="'pi pi-pencil'"
                                     :showIcons=true
                                 />
                               </div>
                             </div> 
                         </div>
                         <div class="row">
                             <div class="col-md-12  col-lg-12  edit-media  col-xxl-6">
                               <div class="form-group drug-frequency">
                                   <label class="form-label">{{$t('otc.frequency.label')}}</label>
                                   <div class="p-inputgroup">
                                       <span class="p-inputgroup-addon bg-light"
                                         :class="{'p-invalid':$v.rowToAdd.frequency.$error }">
             
                                           <i class="mdi mdi-pill"></i>
                                       </span>
                                       <Dropdown
                                       :class="{'p-invalid': $v.rowToAdd.frequency.$error}"
                                       v-model="rowToAdd.frequency"
                                       optionLabel="value" 
                                       :placeholder="$t('otc.frequency.dropdownPlaceholder')" 
                                       :options="frequencyOptions"
                                       />
                                       
                                   </div>
                                   <small class="p-invalid" v-if="$v.rowToAdd.frequency.$error &&! $v.rowToAdd.frequency.required">
                                          {{requiredError($t('otc.frequency.label'))}}
                                   </small>
                               </div>
                             </div>
                             <div class="col-md-12  col-lg-12 edit-media   col-xxl-6">
                                <div class="form-group">
                                 <CustomInpSearGroup 
                                     v-model="rowToAdd.period"
                                     :placeholder="$t('otc.period.dropdownPlaceholder')"
                                     :label="$t('otc.period.label')" 
                                     :valuePlaceholder="$t('otc.period.valuePlaceholder')" 
                                     :dropdownPlaceholder="$t('otc.period.dropdownPlaceholder')"
                                     :options="periodOptions"
                                     :icon="'pi pi-clock'"
                                     :showIcons=true
                                 />
                                </div>
                             </div>
                         </div> 
                         <div class="row">
                             <div class="col-md-12  col-lg-12 edit-media col-xxl-6">
                                 <div class="form-group drug-route">
                                     <label class="form-label">{{$t('otc.route.label')}}</label>
                                     <div class="p-inputgroup">
                                         <span class="p-inputgroup-addon bg-light">
                                             <i class="mdi mdi-pill"></i>
                                         </span>
                                         <Dropdown
                                         v-model=" rowToAdd.route"
                                         :options="routeOptions"
                                         optionLabel="value" 
                                         :placeholder="$t('otc.route.placeholder')" 
                                     
                                         />
                                     </div>
                                 </div>
                             </div>
                             <div class="col-md-12  col-lg-12 edit-media  col-xxl-6">
                                 <div class="form-group comment">
                                     <label class="form-label">{{$t('otc.comment.label')}}</label>
                                     <div class="p-inputgroup">
                                         <span class="p-inputgroup-addon bg-light">
                                             <i class="mdi mdi-pill"></i>
                                         </span>
                                         <InputText
                                           v-model="rowToAdd.comment"
                                             type="text" 
                                             class="form-control" 
                                             :placeholder="$t('otc.comment.placeholder')"
                                         
                                         />
                                     </div>
                     
                                 </div>
                             </div>
                         </div> 
     
                         <!-- /////////////Start perepation Receipt//////////////////////// -->
                         <div class="row">
                             <div class="col-md-12  col-lg-12 edit-media col-xxl-6">
                                 <div class="form-group drug-unit">
                                     <label class="form-label">{{$t('otc.unit.label')}}</label>
                                     <div class="p-inputgroup">
                                         <span class="p-inputgroup-addon bg-light"
                                         :class="{'p-invalid': $v.rowToAdd.unit.$error}">
                                             <i class="pi pi-tag"></i>
                                         </span>
                                         <Dropdown
                                         :class="{'p-invalid': $v.rowToAdd.unit.$error}"
                                         v-model="rowToAdd.unit"
                                         :options="UnitOptions"
                                         optionLabel="value" 
                                         :placeholder="$t('otc.unit.placeholder')" 
                                     
                                         />
                                     </div>
                                     <small class="p-invalid" v-if="$v.rowToAdd.unit.$error &&! $v.rowToAdd.unit.required">
                                          {{requiredError($t('otc.unit.label'))}}
                                     </small>
                         
                                 </div>
                     
                             </div>
                             <div class="col-md-12  col-lg-12 edit-media col-xxl-6">
                                 <div class="form-group drug-amount">
                                     <div class="  d-flex justify-content-between  align-items-center ">
                                             <label class="form-label">{{$t('otc.amount.label1')}} </label>                                                                     
                                             <label class="form-label ">{{$t('otc.amount.label2')}}</label>  
                                     </div> 
                                        
                                     <div class="p-inputgroup">
                                         <span class="p-inputgroup-addon bg-light"
                                          :class="{'p-invalid':$v.rowToAdd.amount.$error}">
                                             <i class="mdi mdi-pill"></i>
                                         </span>
                                         <div class=" w-60 d-flex justify-content-center  align-items-center  p-inputgroup-addon bg-color-white" 
                                             :class="{'p-invalid':$v.rowToAdd.amount.$error}" >
                                                 <i @click="decrement" class=" px-2  fw-bold pi pi-minus-circle cursor-pointer"></i>
                                                 <input v-model="rowToAdd.amount" class="px-2 text-center border-0 fw-bold text-success w-50 custom-outline"  >
                                                 <i  @click="increment" class=" px-2   fw-bold pi pi-plus-circle cursor-pointer"></i>
                                         </div>
                                         <InputText class="w-40 btn-success-gradient custom-placeholder" 
                                                                           
                                         :placeholder="$t('otc.amount.dropdownPlaceholder')"
                                         disabled  />
                                    
                                     </div>
                                     <div class="error">
                                         <small class="p-invalid" v-if="$v.rowToAdd.amount.$error &&! $v.rowToAdd.amount.required">
                                          {{requiredError($t('otc.amount.label1'))}}
                                         </small>
                                         <small class="p-invalid" 
                                           v-else-if="$v.rowToAdd.amount.$error && !$v.rowToAdd.amount.maxValue">
                                           {{maxValueError($t('otc.amount.label1'),$v.rowToAdd.amount.$params.maxValue.max)}}
                                       </small>
                                      
                                      <small class="p-invalid" 
                                             v-else-if="$v.rowToAdd.amount.$error && !$v.rowToAdd.amount.minValue">
                                             {{minValueError($t('otc.amount.label1'),$v.rowToAdd.amount.$params.minValue.min)}}
                                         </small>
                                     </div> 
                             
                                 </div>  
                             </div>
                         </div>
                         <div class="row">
                             <div class="col-md-12  col-lg-12 edit-media  col-xxl-6">
                                 <div class="form-group price">
                                     <label class="form-label">{{$t('otc.price.label')}}</label>
                                     <div class="p-inputgroup">
                                         <span class="p-inputgroup-addon bg-light"
                                         :class="{'p-invalid': $v.rowToAdd.price.$error}">
                                             <i class="pi pi-tag"></i>
                                         </span>
                                         <InputText 
                                            v-model="rowToAdd.price"
                                             type="number" 
                                             class="form-control" 
                                             :class="{'p-invalid': $v.rowToAdd.price.$error}"
                                             :placeholder="$t('otc.price.placeholder')"
                                         
                                         />
 
                                     </div>
                                     <small class="p-invalid" v-if="$v.rowToAdd.price.$error &&! $v.rowToAdd.price.required">
                                                     {{requiredError($t('otc.price.label'))}}
                                   </small>
                                 </div>
                             </div>       
                             <div class="col-md-12  col-lg-12 edit-media  col-xxl-6">
                               <div class="form-group">
                                 <CustomInpSearGroup 
                                     v-model="rowToAdd.discount"
                                     :placeholder="$t('otc.discount.dropdownPlaceholder')"
                                     :label="$t('otc.discount.label')" 
                                     :valuePlaceholder="$t('otc.discount.placeholder')" 
                                     :dropdownPlaceholder="$t('otc.discount.dropdownPlaceholder')"
                                     :options="discountOptions"
                                     :icon="'pi pi-calculator'"
                                     :showIcons=true
                                 />
                               </div>
                             </div>
                         </div> 
                         <div class="row">
                             <div class="col-md-12  col-lg-12  edit-media col-xxl-6">
                                 <div class="form-group total">
                                     <label class="form-label">{{$t('otc.total.label')}}</label>
                                     <div class="p-inputgroup">
                                         <span class="p-inputgroup-addon bg-light">
                                             <i class="mdi mdi-pill"></i>
                                         </span>
                                         <InputText 
                                         v-model="rowToAdd.total"
                                             type="number" 
                                             class="form-control" 
                                             :placeholder="$t('otc.total.placeholder')"
                                         />
                                     </div>
                                  </div>
                             </div>
                             <div class="col-md-12  col-lg-12 edit-media col-xxl-6">
                                 <div class="form-group batch-date">
                                     <div class="form-group ">   
                                         <div class="  d-flex justify-content-between  align-items-center ">
                                             <label class="form-label">{{$t('otc.batch.label1')}}</label>                                                                   
                                             <label class="form-label">{{$t('otc.batch.label2')}}</label>
                                         </div> 
                                         <!-- {{ $v.rowToAdd.exDate }} -->
                                         <div class="p-inputgroup custom-input-group">
                                             <Dropdown
                                                 v-model="rowToAdd.batchNo"
                                                 :class="{'p-invalid': $v.rowToAdd.batchNo.$error}"
                                                 class="p-inputgroup-addon bg-color-white"
                                                 :options="batchOptions"
                                                 optionLabel="value" 
                                                 :placeholder="$t('otc.batch.dropdownPlaceholder1')" 
                                         
                                             />
                                             <Dropdown
                                             v-model="rowToAdd.exDate"
                                             :options="dateOptions"
                                             :class="{'p-invalid': $v.rowToAdd.exDate.$error}"
                                             optionLabel="value" 
                                             :placeholder="$t('otc.batch.dropdownPlaceholder2')" 
                                          
                                             />
                                            
                                         </div>
                                         <small class="p-invalid" v-if="$v.rowToAdd.batchNo.$error &&! $v.rowToAdd.batchNo.required">
                                                 {{requiredError($t('otc.batch.label1'))}}
                                         </small>
                                         <div class="error">
                                           <small class="p-invalid" v-if="$v.rowToAdd.exDate.$error &&! $v.rowToAdd.exDate.required">
                                                 {{requiredError($t('otc.batch.label2'))}}
                                           </small>
                                         </div>
                                       
                                     </div>
                                     
                                  </div>
                             </div>
                         </div>
                         <!-- /////////////////////Add///////////////// -->
                         <!-- <div class="row">
                             <div  class="col-12">
                                 <button  @click="addRow" class="btn btn-success-gradient btn-pill  btn-pill w-lg my-2 my-sm-0 w-100">
                                     <i class="fa fa-plus fa-md"></i> {{$t('perepation.add')}} 
                                 </button>
                             </div>
                         </div> -->
                          <!-- /////////////////////Add///////////////// -->
                        <div class="">   
                            <div  class="col-12 custom-add-gradient ">
                                <button  @click="addRow" class="btn btn-pill w-lg my-2 my-sm-0 w-100 text-white fw-bold">
                                    <i class="fa fa-plus fa-md"></i> {{$t('perepation.add')}} 
                                </button>
                            </div>
                        </div>
 
                     </Base>
                          <!--////////////// Start  Medical instruction//////containsCashpoint[activeNum].otc.////// -->
                     <div class="medical-instruction m-4 ">
                         <div class="row" v-if="activeInvoice.preparation.length > 0 ">
                             <Base>
                                 <h5 class="text-center gradient p-4">{{$t('header1')}}</h5>
                                     <div class="row my-2">
                                         <div class="col-md-12">
                                             <div class="table-responsive">
                                             <table class=" table table-striped table-sm text-center">
                                                 <thead>
                                                     <tr  class="">
                                                         <th scope="col">{{$t('table.thead.count')}}</th>
                                                         <th scope="col">{{$t('otc.drugName.label')}}</th>
                                                         <th scope="col">{{$t('otc.dose.label')}}</th>
                                                         <th scope="col">{{$t('otc.frequency.label')}}</th>
                                                         <th scope="col">{{$t('otc.period.label')}}</th>
                                                         <th scope="col">{{$t('otc.route.label')}}</th>
                                                         <th scope="col">{{$t('otc.comment.label')}}</th>
                                                         <th scope="col">{{$t('table.thead.controls')}}</th>
                                                     </tr>
                                                 </thead>
                                                 <tbody> 
                                                     <tr  v-for="(val, index) in activeInvoice.preparation"  :key="index">
                                                         <td class="align-middle"> {{ parseInt(index) + 1 }}</td>
                                                         <td class="align-middle">
                                                             <div v-if="val.drugName">
                                                             {{ val.drugName.value }}
                                                             </div>
                                                         </td>
                                                         <td class="align-middle"> 
                                                             <div v-if="val.dose">
                                                                 <span v-if="val.dose">{{val.dose.value}}</span> /
                                                                     <span v-if="val.dose.selection">{{val.dose.selection.value}}</span>            
                                                             </div>
                                                         </td>
                                                         <td class="align-middle"> 
                                                             <div v-if="val.frequency">{{val.frequency.value}}</div>
                                                         </td>
                                                         <td class="align-middle">
                                                             <div v-if="val.period">
                                                                 <span v-if="val.period">{{val.period.value}}</span> /
                                                                 <span v-if="val.period.selection">{{val.period.selection.value}}</span>
                                                             </div>
                                                         </td>
                                                         <td class="align-middle">
                                                             <div v-if="val.route">{{val.route.value}}</div>
                                                         </td>
                                                         <td class="align-middle"> 
                                                             <div v-if="val.comment">{{val.comment}}</div>
                                                         </td>
                                                         <td class="align-middle"> 
                                                             <div class="d-flex justify-content-center align-items-center">
                                                                 <EditButton class="me-2" @edit="openEditDialog(val,index, 1)"></EditButton>
                                                                 <DeleteButton @delete="openDeleteDialog(index)"></DeleteButton>
                                                             </div>
                                                         </td>
                                                     
                                                     </tr>
                                                 </tbody>
                                             </table>
                                             </div>
                                         </div>
                                     </div>
                                     <!-- ///////////////////  Print Instruction////////////////////// -->
                                     <div class="d-flex justify-content-center">
                                     <button class="btn  btn-success-gradient btn-pill  btn-pill w-md my-2 my-sm-0 ">
                                     <i class="pi pi-check-square mx-2"></i> {{$t('perepation.printInstructions')}}
                                     </button>
                                 </div>
                             </Base>  
                         </div>
                         <EditDialog :display="displayEditDialog" @close="closeEditDialog"  @cancel="closeEditDialog" @save="editRow" :header="$t(showTitle)">
                             <div  v-if="rowToEdit">
                                 <div v-if="hideTable1">
                                 <div class="row">
                                     <div class="col-md-12  col-lg-6 ">
                                         <div class="form-group drug-name">
                                             <label class="form-label">{{$t('otc.drugName.label')}}</label>
                                             <div class="p-inputgroup"
                                         
                                                 >
                                                 <span 
                                                     class="p-inputgroup-addon bg-light" 
                                                     :class="{'p-invalid': $v.rowToEdit.drugName.$error}" >
                                                     <i class="mdi mdi-pill"></i>
                                                 </span>
                                                 <AutoComplete
                                                     v-model="rowToEdit.drugName"
                                                     :class="{'p-invalid': $v.rowToEdit.drugName.$error}"
                                                     :suggestions="drugNameParams.suggestions"                
                                                     field="value"  
                                                     :placeholder="$t('otc.drugName.placeholder')" 
                                                     @complete="search($event,drugNameParams)"
                                                 />
 
                                             </div>
                                             <div class="error">
                                                 <small class="p-invalid" v-if="$v.rowToEdit.drugName.$error&&!$v.rowToEdit.drugName.validator">
                                                     {{inputError($t('otc.drugName.label'))}}
                                                 </small>
                                                 <small class="p-invalid" v-else-if="$v.rowToEdit.drugName.$error&&!$v.rowToEdit.drugName.required">
                                                     {{requiredError($t('otc.drugName.label'))}}
                                                 </small>    
                                             </div>
 
                                         </div>
                                     </div>
                                     <div class="col-md-12  col-lg-6">
                                     <div class="form-group">
                                         <CustomInpSearGroup 
                                             v-model="rowToEdit.dose"
                                             :placeholder="$t('otc.dose.dropdownPlaceholder')"
                                             :label="$t('otc.dose.label')" 
                                             :valuePlaceholder="$t('otc.dose.valuePlaceholder')" 
                                             :dropdownPlaceholder="$t('otc.dose.dropdownPlaceholder')"
                                             :options="doseOptions"
                                             :icon="'pi pi-pencil'"
                                             :showIcons=true
                                         />
                                     </div>
                                     </div> 
                                 </div>
                                 <div class="row">
                                     <div class="col-md-12  col-lg-6">
                                     <div class="form-group drug-frequency">
                                         <label class="form-label">{{$t('otc.frequency.label')}}</label>
                                         <div class="p-inputgroup">
                                             <span class="p-inputgroup-addon bg-light"
                                             :class="{'p-invalid': $v.rowToEdit.frequency.$error}">
                                                 <i class="mdi mdi-pill" ></i>
                                             </span>
                                             <!-- ///////////     optionLabel="value" /////////////// -->
                                             <Dropdown
                                             :class="{'p-invalid': $v.rowToEdit.frequency.$error}"
                                             v-model=" rowToEdit.frequency"
                                             optionLabel="value" 
                                             :placeholder="$t('otc.frequency.dropdownPlaceholder')" 
                                             :options="frequencyOptions"
                                             />
                                             
                                         </div>
                                         <small class="p-invalid" v-if="$v.rowToEdit.frequency.$error &&! $v.rowToEdit.frequency.required">
                                                 {{requiredError($t('otc.frequency.label'))}}
                                         </small>
                                     </div>
                                     </div>
                                     <div class="col-md-12 col-lg-6">
                                         <div class="form-group">
                                         <CustomInpSearGroup 
                                             v-model="rowToEdit.period"
                                             :placeholder="$t('otc.period.dropdownPlaceholder')"
                                             :label="$t('otc.period.label')" 
                                             :valuePlaceholder="$t('otc.period.valuePlaceholder')" 
                                             :dropdownPlaceholder="$t('otc.period.dropdownPlaceholder')"
                                             :options="periodOptions"
                                             :icon="'pi pi-clock'"
                                             :showIcons=true
                                         />
                                         </div>
                                     </div>
                                 </div> 
                                 <div class="row">
                                     <div class="col-md-12  col-lg-6">
                                         <div class="form-group drug-route">
                                             <label class="form-label">{{$t('otc.route.label')}}</label>
                                             <div class="p-inputgroup">
                                                 <span class="p-inputgroup-addon bg-light">
                                                     <i class="mdi mdi-pill"></i>
                                                 </span>
                                                 <Dropdown
                                                 v-model="rowToEdit.route"
                                                 :options="routeOptions"
                                                 optionLabel="value" 
                                                 :placeholder="$t('otc.route.placeholder')" 
                                             
                                                 />
                                             </div>
                                         </div>
                                     </div>
                                     <div class="col-md-12  col-lg-6">
                                         <div class="form-group comment">
                                             <label class="form-label">{{$t('otc.comment.label')}}</label>
                                             <div class="p-inputgroup">
                                                 <span class="p-inputgroup-addon bg-light">
                                                     <i class="mdi mdi-pill"></i>
                                                 </span>
                                         
                                     
                                                 <InputText
                                                 v-model="rowToEdit.comment"
                                                     type="text" 
                                                     class="form-control" 
                                                     :placeholder="$t('otc.comment.placeholder')"
                                                 
                                                 />
                                             </div>
                             
                                         </div>
                                     </div>
                                 </div> 
                                 </div>
                             <!-- /////////////////////Receipt/////////////////////////////// -->
                             <div  v-if="hideTable2">
                             <div class="row">
                                     <div class="col-md-12  col-lg-6">
                                     <div class="form-group drug-unit">
                                         <label class="form-label">{{$t('otc.unit.label')}}</label>
                                         <div class="p-inputgroup">
                                             <span class="p-inputgroup-addon bg-light"
                                                 :class="{'p-invalid': $v.rowToEdit.unit.$error}"
                                             >
                                                 <i class="pi pi-tag"></i>
                                             </span>
                                             <Dropdown
                                             :class="{'p-invalid': $v.rowToEdit.unit.$error}"
                                             v-model="rowToEdit.unit"
                                             :options="UnitOptions"
                                             optionLabel="value" 
                                             :placeholder="$t('otc.unit.placeholder')" 
                                         
                                             />
                                         </div>
                                         <small class="p-invalid" v-if="$v.rowToEdit.unit.$error &&! $v.rowToEdit.unit.required">
                                                 {{requiredError($t('otc.unit.label'))}}
                                         </small>
                             
                                     </div>
                         
                                     </div>
                                 <div class="col-md-12  col-lg-6 edit-media col-xxl-6 ">
                                 
                                     <div class="form-group drug-route">
                                                 <div class="  d-flex justify-content-between  align-items-center ">
                                                         <label class="form-label">{{$t('otc.amount.label1')}} </label>                                                                     
                                                         <label class="form-label ">{{$t('otc.amount.label2')}}</label>  
                                                 </div> 
                                             
                                                 <div class="p-inputgroup">
                                                     <span class="p-inputgroup-addon bg-light"
                                                     :class="{'p-invalid':$v.rowToEdit.amount.$error}">
                                                         <i class="mdi mdi-pill"></i>
                                                     </span>
                                                     <div class=" w-60 d-flex justify-content-center  align-items-center  p-inputgroup-addon bg-color-white"
                                                     :class="{'p-invalid': $v.rowToEdit.amount.$error}">
                                                         <i @click="decrementEdit()" class=" px-2  fw-bold pi pi-minus-circle cursor-pointer"></i>
                                                         <input v-model="rowToEdit.amount" class="px-2 text-center border-0 fw-bold text-success w-50 custom-outline"  >
                                                         <i  @click="incrementEdit()" class=" px-2   fw-bold pi pi-plus-circle cursor-pointer"></i>
                                                     </div>
                                                     <InputText class="w-40"
                                                     
                                                        :placeholder="$t('otc.amount.dropdownPlaceholder')"
                                                         disabled  
                                                     />
                                                 </div>
                                                 <div class="error">
                                                     <small class="p-invalid" v-if="$v.rowToEdit.amount.$error &&! $v.rowToEdit.amount.required">
                                                         {{requiredError($t('otc.amount.label1'))}}
                                                     </small>
                                                     <small class="p-invalid" 
                                                         v-else-if="$v.rowToEdit.amount.$error && !$v.rowToEdit.amount.maxValue">
                                                         {{maxValueError($t('otc.amount.label1'),$v.rowToEdit.amount.$params.maxValue.max)}}
                                                     </small>
                                                     
                                                     <small class="p-invalid" 
                                                             v-else-if="$v.rowToEdit.amount.$error && !$v.rowToEdit.amount.minValue">
                                                             {{minValueError($t('otc.amount.label1'),$v.rowToEdit.amount.$params.minValue.min)}}
                                                     </small>
                                                 </div> 
                                                 
                                 
                                     </div>  
                                 </div>
                             </div>
                             <div class="row">
                                 <div class="col-md-12  col-lg-6">
                                     <div class="form-group price">
                                         <label class="form-label">{{$t('otc.price.label')}}</label>
                                         <div class="p-inputgroup">
                                             <span class="p-inputgroup-addon bg-light"
                                             :class="{'p-invalid': $v.rowToEdit.price.$error}">
                                                 <i class="pi pi-tag"></i>
                                             </span>
                                     
                                 
                                             <InputText
                                             :class="{'p-invalid': $v.rowToEdit.price.$error}" 
                                                 v-model="rowToEdit.price"
                                                 type="number" 
                                                 class="form-control" 
                                                 :placeholder="$t('otc.price.placeholder')"
                                             
                                             />
                                         </div>
                                         <small class="p-invalid" v-if="$v.rowToEdit.price.$error &&! $v.rowToEdit.price.required">
                                                 {{requiredError($t('otc.price.label'))}}
                                         </small>
                                         
                                     </div>
                                 </div>      
                                 <div class="col-md-12  col-lg-6">
                                     <div class="form-group">
                                         <CustomInpSearGroup 
                                         v-model="rowToEdit.discount"
                                         :placeholder="$t('otc.discount.dropdownPlaceholder')"
                                         :label="$t('otc.discount.label')" 
                                         :valuePlaceholder="$t('otc.discount.placeholder')" 
                                         :dropdownPlaceholder="$t('otc.discount.dropdownPlaceholder')"
                                         :options="discountOptions"
                                         :icon="'pi pi-calculator'"
                                         :showIcons=true
                                     />
                                     </div>
                                 </div>
                             </div> 
                             <div class="row">
                                 <div class="col-md-12  col-lg-6 edit-media col-xxl-6">
                                     <div class="form-group total">
                                         <label class="form-label">{{$t('otc.total.label')}}</label>
                                         <div class="p-inputgroup">
                                             <span class="p-inputgroup-addon bg-light">
                                                 <i class="mdi mdi-pill"></i>
                                             </span>
                                             <InputText 
                                                 v-model="rowToEdit.total"
                                                 type="number" 
                                                 class="form-control" 
                                                 :placeholder="$t('otc.total.placeholder')"
                                         
                                             
                                             />
                                         </div>
                         
                                     </div>
                                 </div>
                                 <div class="col-md-12  col-lg-6">
                                     <div class="form-group batch-date">
                                         <div class="form-group ">
                                         
                                             <div class="  d-flex justify-content-between  align-items-center ">
                                                 <label class="form-label">{{$t('otc.batch.label1')}}</label>                                                                   
                                                 <label class="form-label">{{$t('otc.batch.label2')}}</label>
                                                 </div> 
                                             <div class="p-inputgroup custom-input-group">
                                                 <Dropdown
                                                     v-model="rowToEdit.batchNo"
                                                     class="p-inputgroup-addon bg-color-white"
                                                     :class="{'p-invalid': $v.rowToEdit.batchNo.$error}"
                                                     :options="batchOptions"
                                                     optionLabel="value" 
                                                     :placeholder="$t('otc.batch.dropdownPlaceholder1')" 
                                             
                                                 />
                                                 <Dropdown
                                                 v-model="rowToEdit.exDate"
                                                 :options="dateOptions"
                                                 :class="{'p-invalid': $v.rowToEdit.exDate.$error}"
                                                 optionLabel="value" 
                                                 :placeholder="$t('otc.batch.dropdownPlaceholder1')" 
 
                                                 />
                                             </div>
                                             <!-- ///////////////// -->
                                         
                                         <small class="p-invalid" v-if="$v.rowToEdit.batchNo.$error &&! $v.rowToEdit.batchNo.required">
                                             {{requiredError($t('otc.batch.label1'))}}
                                         </small>
                                         <div class="error">
                                             <small class="p-invalid" v-if="$v.rowToEdit.exDate.$error &&! $v.rowToEdit.exDate.required">
                                                 {{requiredError($t('otc.batch.label2'))}}
                                             </small>
                                         </div>
 
                                         </div>
                             
                                     </div>
                                 </div>
                             </div>
                             </div>
 
                             </div>
                         </EditDialog>
                         <DeleteDialog :display="displayDeleteDialog"  @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
                     </div>
 
             </div> 
             <!-- ////////////////Receipt//////////////// -->
             <div class="col-md-6 col-sm-12" >
                 <div class="row mb-3" v-if="activeInvoice.preparation.length > 0 ">
                     <Base>
                         <h5 class="text-center gradient p-4">{{$t('perepation.receipt')}}</h5>
                             <div class="row ">
                                 <div class="col-sm-12">
                                     <div class="table-responsive">
                                         <table class="table table-striped table-sm text-center">
                                             <thead>
                                             <tr>
                                                 <th scope="col">{{$t('table.thead.count')}}</th>
                                                 <th scope="col">{{$t('otc.unit.label')}}</th>
                                                 <th scope="col">{{$t('otc.amount.label1')}} </th>
                                                 <th scope="col">{{$t('otc.price.label')}}</th>
                                                 <th scope="col">{{$t('otc.discount.label')}}</th>
                                                 <th scope="col">{{$t('otc.total.label')}}</th>
                                                 <th scope="col">{{$t('otc.batch.label1')}}/{{$t('otc.batch.label1')}}</th>
                                                 <th scope="col">{{$t('table.thead.controls')}}</th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             <tr v-for="(val, index) in activeInvoice.preparation"  :key="index">
                         
                                                 <td class="align-middle">{{parseInt(index)+1}}</td>
                                                 <td class="align-middle">
                                                     <div v-if="val.unit">{{val.unit.value}}</div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.amount">{{val.amount}}</div>
                                                 </td>
                                                 <td class="align-middle">   
                                                     <div v-if="val.price">{{val.price}}</div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.discount">
                                                     
                                                     <span  v-if="val.discount.value">{{val.discount.value}} </span>
                                                     <span v-if="val.discount.selection"> {{val.discount.selection.value}}</span>
                                                 
                                                     </div>
                                                 </td>
                                                 <td class="align-middle">
                                                     <div v-if="val.total">{{val.total}}</div>
                                                 </td>
                                                 <td class="align-middle">  
                                                     <div v-if="val.batchNo">
                                                     <span  v-if="val.batchNo.value">{{val.batchNo.value}} </span>
                                                         -
                                                     </div>     
                                                     <div  v-if="val.exDate">
                                                     <span v-if="val.exDate.value"> {{val.exDate.value}}</span>
                                                     </div>
 
                                                 </td>
                                                 <td class="align-middle"> 
                                                     <div class="d-flex justify-content-center align-items-center">
                                                     <EditButton class="me-2" @edit="openEditDialog(val,index,2)"></EditButton>
                                                     <DeleteButton @delete="openDeleteDialog(index)"></DeleteButton>
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
             <!-- ////////////////Invoice//////////gradient///////// -->
                 <div class="row">
                     <Base>
                         <h4 class="text-center  custom-gradient p-4"> {{ $t("invoice.header") }} </h4>
                         <!-- ////// table///////////// -->
                         <div class="row my-2">
                             <div class="col-12">
                                 <div class="table-responsive">
                                     <table class="table table-borderless text-start">
                                         <tbody>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.invoiceNo.label")}}</th>
                                                 <td class="align-middle  text-success fw-bold"> {{$t("invoice.invoiceNo.value")}}</td>
                                             </tr>
                                             <tr>
                                                 <th scope="col">{{$t("invoice.date.label")}}</th>
                                                 <td class="align-middle  text-success fw-bold">{{$t("13/3/2023")}}</td>
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.clientName.label")}}</th>
                                                 <td class="align-middle "> 
                                                     <div class="d-flex align-items-center justify-content-start ">
                                                         <Avatar :image="require('@/assets/global/logo/1.jpg')" class=" mr-1" shape="circle" />
                                                         <span class="fw-bold text-success  mx-2">{{$t("invoice.casherName.name")}} </span>
                                                         <!-- {{ invoice.clientName }} -->
                                                 </div>    
                                                 </td>
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.casherName.label")}}</th>
                                                 <td class="align-middle ">
                                                 <div class="d-flex align-items-center justify-content-start ">
                                                         <Avatar :image="require('@/assets/global/logo/1.jpg')" class=" mr-1" shape="circle" />
                                                         <!-- {{$t("invoice.casherName.name")}}{{ invoice.clientName }} -->
                                                     <span class="fw-bold text-success mx-2"> {{$t("invoice.casherName.name")}} </span>
                                                 </div>
                                                 </td>
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.itemNumber.label")}}</th>
                                                 <!-- {{$t("invoice.itemNumber.num")}}  -->
                                                 <td class="align-middle text-success fw-bold"> {{$t("invoice.itemNumber.num")}}</td>
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.sum.label")}}</th>
                                                 <!--  {{$t("invoice.sum.value")}} -->
                                                 <td class="align-middle text-success fw-bold">{{$t("invoice.sum.value")}}</td>
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.vat.label")}}</th>
                                                 <!--  {{$t("invoice.vat.value")}} -->
                                                 <td class="align-middle text-success fw-bold">{{$t("invoice.sum.value")}}</td>
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.totalDiscount.label")}}</th>
                                                 <td class="align-middle text-success fw-bold">{{$t("invoice.sum.value")}}</td>
                                                 <!-- {{invoice.totalDiscount.value}} {{invoice.totalDiscount.selection.value}} -->
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{$t("invoice.totalAmount.label")}}</th>
                                                 <!-- {{$t("invoice.totalAmount.value")}}  -->
                                                 <td class="align-middle text-success fw-bold ">  {{$t("invoice.totalAmount.value")}} </td>
                                             </tr>           
                                             <!-- ////////Payment Method////////// -->
                                             <tr >
                                                 <th scope="col">{{ $t('otc.paymentMethod.label') }}</th>
                                                 <td class="align-middle text-success fw-bold "> 
                                                     <Dropdown
                                                     v-model="activeInvoice.paymentMethod"
                                                         :options="payingMethodOptions"
                                                         optionLabel="value"
                                                         :placeholder="$t('otc.paymentMethod.dropdownPlaceholder')" 
                                                     
                                                     />
                                                 </td>
                                             </tr>
                                             <tr >
                                                 <th scope="col">{{ $t('otc.amount.label1') }}</th>
                                                 <td class="align-middle text-success fw-bold "> 
                                                     <InputText     
                                                     :placeholder="$t('otc.amount.placeholder')" 
                                                     />
 
                                                 </td>
                                             </tr>
                                             <tr>
                                                 <th scope="col">{{$t("invoice.remaining.label")}}</th>
                                                 <td class="align-middle  fw-bold ">
                                                     <!-- {{$t("invoice.remaining.value")}} -->
                                                     <span class="btn-info-gradient p-2 btn-pill"> {{$t("invoice.remaining.value")}} </span>
                                     
                                                 </td>
                                             </tr>
                                         
                                         </tbody>
                                     </table>
                                 </div>
                         
                             </div>
                             <!-- /////////////////Buttons//////////////// -->
                             <div class=" btns-wrapper justify-content-center  d-flex gap-2 flex-wrap my-2"   > 
                                 <div>
                                     <button class="btn btn-success-gradient btn-pill  btn-pill w-sm my-2 my-sm-0 ">
                                         <i class=" pi pi-save "></i> {{$t('invoice.preview.label')}}
                                     </button>
                                 </div>
                                 <div>
                                     <button class="btn  btn-success-gradient btn-pill  btn-pill w-sm my-2 my-sm-0 ">
                                         <i class=" pi pi-save mx-1 "></i>{{$t('invoice.print.label')}} 
                                     </button>
                                 </div>
                                 <div>
                                     <button class="btn btn-success-gradient btn-pill w-sm my-2 my-sm-0 btn-pill">
                                         <i class=" pi pi-save  mx-1"></i>{{$t('invoice.done.label')}} 
                                     </button>
                                 </div>
                             </div>  
                         </div>
                     </Base>
                 </div>
             </div>
     
         </div>
 
      <!-- ///////////////////// End perepation//////////////// -->
     </div>
     <!-- ///////////////////// End  perepation////////////////////////////// -->
     </div>
 
 
 </template>
 
 <i18n src="@/lang/global/global.json"></i18n>
 <i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>
 <script>
 //////////////////////////////////////////
 import Base from "@/components/global/utilities/Base.vue";
 import ResetButton from "@/components/global/utilities/ResetButton.vue";
 import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
 import CustomInpSearGroup from "@/components/pharmacy/cashpoint/custom/CustomInpSearGroup.vue"
 import cashpointOption from '@/mixins/pharmacy/cashpoint/cashpointOption'
 import EditButton from "@/components/global/utilities/EditButton.vue"
 import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
 import EditDialog from "@/components/global/utilities/EditDialog.vue"
 import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
 ////////////////////////////////////////////
 import { mapGetters  } from "vuex";
 import
    {  required, 
       maxValue,
       minValue
    } from "vuelidate/lib/validators";
 import {notContainsHtmlTags} from "@/validation/customValidators";
 import 
   {   htmlTagsError,
       inputError,
       numericError,
       maxRecordsError,
       requiredError,
       maxValueError,
       minValueError,
   } from '@/validation/errors'
 ////////////////////////////////////
 import {cloneDeep} from 'lodash';
 export default {
     mixins:[cashpointOption],
     name:'CallCenter',
     components:{
         Base,
         ResetButton,
         CustomInputGroup,
         CustomInpSearGroup,
         EditButton,
         EditDialog,
         DeleteDialog,
         DeleteButton,
     },
     props:{
         label:{
             type:String,
         },
         valuePlaceholder:{
             type:String,
             default(){
                 return this.locale=='ar'?'القيمة':'Value'
             },
         },
 
 
 
     },
     data(){
         return{
             rowToAdd:{
                     drugName:"",
                     route:"",
                     frequency:"",
                     dose:{
                         selection:"",
                         value:''
                     },
                     period:{
                         selection:"",
                         value:''
                     },
                     comment:"",
                     unit:"",
                 
                     amount:1,
                     total:"",
                     price:"",
                     discount:{
                      selection:"",
                      value:'',
                     },
                     batchNo:"",
                    
                     exDate:"",
                     
             },
             rowToEdit:{
                     drugName:"",
                     route:"",
                     frequency:"",
                     dose:{
                         selection:"",
                         value:''
                     },
                     period:{
                         selection:"",
                         value:''
                     },
                     comment:"",
                     unit:"",
                     amount:1,
                     total:"",
                     price:"",
                     discount:{
                      selection:"",
                      value:'',
                     },
                     batchNo:"",
                    
                     exDate:""
                     
             },
             indexToEdit:null,
             displayEditDialog: false,
             indexToDelete:null,
             displayDeleteDialog: false, 
             hideTable2: true,
             hideTable1: true,
             showTitle:"",
     
               
         }
     },
     validations:{
         rowToAdd:{
             drugName:{
                 required,
                 validator: (value) => {
                     if(typeof value == 'object' || value == null || value == '')
                     return true;
                     else {
                         return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                     }
                 },
             },
             frequency:{
                     required,
                 },
             unit:{
                     required,
                 },
             // amount:{
             //         required,
             //     },
             price:{
                     required,
                 },
             amount:{
                     required,
                     minValue: minValue(1),
                     maxValue: maxValue(100)
                 },
             exDate:{
                     required,
                 },
             batchNo:{
                     required,
                 },
 
         },
         rowToEdit:{
             drugName:{
                 required,
                 validator: (value) => {
                     if(typeof value == 'object' || value == null || value == '')
                     return true;
                     else {
                         return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                     }
                 },
             },
             frequency:{
                     required,
                 },
             unit:{
                     required,
                 },
             amount:{
                     required,
                     minValue: minValue(1),
                     maxValue: maxValue(100)
                 },
             price:{
                     required,
                 },
         
             exDate:{
                     required,
                 },
             batchNo:{
                     required,
                 },
 
         }
     },
     computed: { 
         ...mapGetters("allPharmacy/pharmacy",["getActiveInvoice"]),
         activeInvoice: {
             get() {
                 return this.getActiveInvoice;
             },
             set(value) {
                 this.$store.dispatch("allPharmacy/pharmacy/setActiveInvoice", value);
             },
         },
 
       },
     methods:{
             htmlTagsError,
             requiredError,
             inputError,
             numericError,
             maxValueError,
             maxRecordsError,
             minValueError,
            /////////////////////////
             decrement(){
                 this.rowToAdd.amount--;
             },
             decrementEdit(){
             this.rowToEdit.amount--;
             },
             increment(){
 
                 this.rowToAdd.amount++;
             },
             incrementEdit(){
 
                 this.rowToEdit.amount++;
             },
             reset(){
                 this.resetForm();
             },
             //////////////////////////
             resetForm(){
                 this.rowToAdd={
                     drugName:"",
                     route:"",
                     frequency:"",
                     dose:{
                         selection:"",
                         value:''
                     },
                     period:{
                         selection:"",
                         value:''
                     },
                     comment:"",
                     unit:"",
                 
                     amount:1,
                     total:"",
                     price:"",
                     discount:{
                         selection:"",
                         value:'',
                     },
                     batchNo:"",
                     
                     exDate:"" ,         
                 };
                 this.$v.rowToAdd.$reset();
             },
             ///////////////////////
             addRow(){
                 this.$v.rowToAdd.$touch();
                 if(!this.$v.rowToAdd.$invalid ){
                     let cashpoint = cloneDeep(this.rowToAdd );
                     this.activeInvoice.preparation.push(cashpoint);
                     this.resetForm();
                 }
             },
             ///////////////////////////
             openEditDialog(val,index, num) {
                 console.log(num);
                 this.showTitle = 'header' + num;  
                 if(num == 2){
                     this.hideTable1= false;
                     this.hideTable2= true;
                     }
                     else if(num == 1){
                     this.hideTable2= false;
                     this.hideTable1= true;
                     }
                     this.displayEditDialog = true;
                     this.indexToEdit = index;
                     this.rowToEdit = cloneDeep(val);
                 },
             closeEditDialog() {
             this.rowToEdit= {}
             this.indexToEdit = null;
             this.displayEditDialog = false;
             },
             editRow(){
                 console.log('Edit Row Clicked');
                 this.$v.rowToEdit.$touch();
                 if(! this.$v.rowToEdit.$invalid ){
                     let cashpoint = cloneDeep(this.rowToEdit );
                     this.activeInvoice.preparation.splice(this.indexToEdit,1,cashpoint);
                     this.closeEditDialog();
                 }
         
             },
             ////////////////////////////
             openDeleteDialog(index) {
                 this.displayDeleteDialog = true;
                 this.indexToDelete =index;
             },
             closeDeleteDialog() {
                 this.displayDeleteDialog = false;
                 this.indexToDelete =null;
             },
             deleteRow(){  
                 this.activeInvoice.preparation.splice(this.indexToDelete,1);
                 this.closeDeleteDialog();
             },
     },
 
 }
 </script>
 
 
 <style scoped>
 
 .custom-gradient {
    background-image: url("@/assets/Rectangle.svg");
    background-position: center;
    background-repeat: no-repeat;
}
.custom-add-gradient {
    background-image: url("@/assets/Group 2148.svg");
    background-position: center;
    background-repeat: no-repeat;
}
 .bg-color-white{
     background: #fff;
 }
 .cursor-pointer{
     cursor: pointer;  
 }
 .gradient{
     background-image: linear-gradient(90deg, #56C596 0%, white 100%);
 }
 .custom-rounded{
     border-radius: 20px;
 }
 .custom-size{
     height: max-content;
 }
 .custom-placeholder::placeholder { 
   color: white;
   opacity: 1; 
 }
 
 .custom-outline{
     outline: none;
 }
 .custom-input-group {
         display: flex;
         .p-dropdown {
           border-radius: 0px 2rem 2rem 0px;
           margin-right:-1px;
           .p-dropdown-panel{ 
             .p-dropdown-header{
               padding: 0;
             }
           }
         }
         .p-inputgroup-addon{
             border-radius: 2rem 0px 0px 2rem;
             margin-right:-1px;
         }
        
     }
 .rtl .custom-input-group {
     .p-dropdown {
         border-radius: 2rem 0px 0px 2rem;
     }
     .p-inputgroup-addon{
         border-radius: 0px 2rem 2rem 0px;
     }
     .custom-text{
         border-radius: 0px 0px 0px 0px;
     }
 }
 .p-component:disabled {
     opacity: 1.5;
     padding: 0px 8px;
 }
 /* /////////////////////////////////// */
 @media (min-width: 1390px) and (max-width: 1750px) {
   .edit-media {
     min-width: 100%;
   }
 }
 </style>