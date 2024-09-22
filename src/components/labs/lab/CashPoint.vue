<template>
  <!-- *********** Start CashPoint************ -->
  <div class="cashpoint" >
    <!-- /////////////Cashier-name///////////////////////// -->
    <div class="Cashier-name my-2">
      <Base>
        <div class="row">
          <div class="d-flex align-items-center justify-content-md-start flex-wrap"> 
            <div class="mx-2">
              <label class="form-label">{{$t('login.CashierName')}}</label>
            </div>
            <div class="d-flex justify-content-start  align-items-start text-success  custom-border " >
              <Avatar :image="require('@/assets/global/logo/1.jpg')" class="m-1" shape="circle" />
              <p class="m-auto px-2 ">{{$t('login.CashierNamePlaceholder')}} </p> 
            </div>
            <div class=" d-flex flex-sm-wrap justify-content-start m-1"> 
              <button class="btn btn-success-gradient font-bold btn-pill w-sm m-1 my-sm-0">
              <i class="pi pi-arrow-circle-right mx-1"></i> {{ $t("login.signin") }} </button>     
            </div> 
          </div>     
        </div>
      </Base>
    </div>
    <!-- *****************patient-name************** -->
    <div class="patient-name  my-2">
      <Base>
        <div class="row ">
          <div class=" col-lg-5 col-md-10 col-sm-10 "> 
            <div class="my-2">
              <label class="form-label">{{ $t('cashPoint.patientName.label') }}</label>
              <span class="p-input-icon-right">
                <i class="pi pi-search font-bold text-success" ></i>
                <InputText 
                  :placeholder="$t('cashPoint.patientName.placeholder')"
                  v-model.trim="activeLab.patientName"                           
                />
            </span>
            </div>
          </div> 
          <div class="col-lg-1 col-md-2  col-sm-2">       
            <AddButton @add="addName"></AddButton>
          </div>
          <div class="  col-md-12 col-lg-6 ">
            <div class="d-flex align-items-center justify-content-md-start justify-content-lg-end  gap-1 flex-wrap">
              <div class="">  
                  <label class="form-label invisible" for="">{{$t('cashPoint.insurance')}}</label>
                  <button class="btn btn-success-gradient btn-pill  ">
                   <i class="pi pi-save mx-1"></i>{{$t('cashPoint.insurance')}}
                  </button>
              </div>
              <div class="">
                <label class="form-label invisible" for="">{{$t('cashPoint.labPatient')}}</label>
                <button class="btn btn-success-gradient btn-pill   ">
                  <i class="pi pi-tablet mx-1"></i>{{$t('cashPoint.labPatient')}}
                </button>
              </div> 
            </div>
          </div> 
        </div>        
      </Base>
    </div>
    <!-- ***********patient-wallet******************* -->
    <div class=" patient-wallet  my-2 ">
      <Base>
        <div class="row">
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="d-flex align-items-start justify-content-start ">     
              <span class="fw-bold"> {{ $t('cashPoint.PatientWallet.label') }} </span>
              <span class="fw-bold btns-gradient px-4 custom-rounded mb-3"> {{ $t('cashPoint.PatientWallet.value') }}{{ $t('cashPoint.PatientWallet.exp') }}</span >
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="d-flex align-items-start justify-content-start ">     
              <span class="fw-bold">{{ $t('cashPoint.lastOperation.label') }}</span>
              <span class=" fw-bold btns-gradient px-4 custom-rounded mb-3">{{ $t('cashPoint.lastOperation.value') }}</span>
            </div>
          </div>
          <div class="col-md-6 col-lg-6 col-xl-4">
            <div class="d-flex align-items-start justify-content-start ">            
              <span class="fw-bold"> {{ $t('cashPoint.insurancySync.label') }} </span>
              <div>  
                <button  class=" mx-4 btn btn-icon rounded-circle btn-success-gradient" > 
                  <i class="pi pi-check"></i>
                </button>
              </div>
              <span class=" fw-bold btns-gradient  px-4 custom-rounded mb-3"> {{ $t('cashPoint.insurancySync.value') }} </span>
            </div>
          </div>
        </div> 
      </Base>
    </div>
    <!-- ****************Cash Point*************** -->
    <div class="Cash Point my-4">
      <div class="row">
        <div class="col-md-6 custom-size ">
          <Base>
            <div class="d-flex justify-content-center custom-gradient  align-items-center p-3">
              <h5 class=" mb-0" > {{ $t('cashPoint.header') }} </h5> 
              <ResetButton @reset="reset" class="mb-0 mx-4"></ResetButton>
            </div>   
            <!-- /////////////Start Cash Point //////////////////////// -->
            <div class="row">
              <div class="col-md-12  col-lg-12  col-xxl-6  ">
                <div class="form-group test-name">
                  <label class="form-label">{{$t('cashPoint.testName.label')}}</label>
                  <div class="p-inputgroup"> 
                    <span 
                        class="p-inputgroup-addon bg-light" 
                        :class="{'p-invalid': $v.rowToAdd.testName.$error}" >
                        <i class="mdi mdi-pill"></i>
                    </span> 
                      <AutoComplete
                        v-model="rowToAdd.testName"
                        :suggestions="drugNameParams.suggestions"  
                        :class="{'p-invalid':$v.rowToAdd.testName.$error}"              
                        field="value"  
                        placeholder="Search" 
                        @complete="search($event,drugNameParams)"
                      />
                      
                  </div>
                  <div class="error">
                    <small class="p-invalid" v-if="$v.rowToAdd.testName.$error&&!$v.rowToAdd.testName.validator">
                        {{inputError($t('cashPoint.testName.label'))}}
                    </small>
                    <small class="p-invalid" v-else-if="$v.rowToAdd.testName.$error&&!$v.rowToAdd.testName.required">
                        {{requiredError($t('cashPoint.testName.label'))}}
                    </small>
                  </div>
                </div>                 
              </div>
              <div class="col-md-12  col-lg-12  col-xxl-6">
                <div class="form-group sample">
                  <label class="form-label">{{$t('cashPoint.sample.label')}}</label>
                  <div class="p-inputgroup">
                    <span class="p-inputgroup-addon bg-light"
                    :class="{'p-invalid': $v.rowToAdd.sample.$error}">
                        <i class="pi pi-chevron-left "> 
                          <i class="pi pi-chevron-right"></i>
                        </i>
                    </span>
                    <InputText 
                      v-model="rowToAdd.sample"
                      type="text" 
                      class="form-control" 
                      :class="{'p-invalid': $v.rowToAdd.sample.$error}"
                      :placeholder="$t('cashPoint.sample.placeholder')"
                    
                    />
                  </div>
                  <small class="p-invalid" v-if="$v.rowToAdd.sample.$error &&! $v.rowToAdd.sample.required">
                      {{requiredError($t('cashPoint.sample.label'))}}
                  </small>
                </div>
              </div> 
              <div class="col-md-12  col-lg-12  col-xxl-6">
                <div class="form-group price">
                  <label class="form-label">{{$t('cashPoint.price.label')}}</label>
                  <div class="p-inputgroup"> 
                    <span class="p-inputgroup-addon bg-light"
                    :class="{'p-invalid': $v.rowToAdd.price.$error}">
                      <i class="pi pi-bitcoin ">  </i>
                    </span>  
                    <InputText 
                      v-model="rowToAdd.price"
                      type="number" 
                      class="form-control" 
                      :class="{'p-invalid': $v.rowToAdd.price.$error}"
                      :placeholder="$t('cashPoint.price.placeholder')"
                    
                    />

                  </div>
                  <small class="p-invalid" v-if="$v.rowToAdd.price.$error &&! $v.rowToAdd.price.required">
                    {{requiredError($t('cashPoint.price.label'))}}
                  </small>
                </div>
              </div> 
              <div class="col-md-12  col-lg-12  col-xxl-6"> 
                <div class="form-group">
                  <CustomInpSearGroup 
                    v-model="rowToAdd.discount"
                    :placeholder="$t('cashPoint.discount.dropdownPlaceholder')"
                    :label="$t('cashPoint.discount.label')" 
                    :valuePlaceholder="$t('cashPoint.discount.placeholderValue')" 
                    :dropdownPlaceholder="$t('cashPoint.discount.dropdownPlaceholder')"
                    :options="discountOptions"
                    :showIcons=false
                  />
                </div>
              </div>
              <div class="col-md-12  col-lg-12  col-xxl-6  ">
                  <div class="form-group drug-name">
                    <label class="form-label">{{$t('cashPoint.assignedTechnician.label')}}</label>
                    <div class="p-inputgroup">
                      <span 
                          class="p-inputgroup-addon bg-light" 
                          :class="{'p-invalid': $v.rowToAdd.assignedTechnician.$error}" >
                          <i class="pi pi-search-plus"></i>
                      </span> 
                      <AutoComplete
                          v-model="rowToAdd.assignedTechnician"
                          :suggestions="drugNameParams.suggestions"  
                          :class="{'p-invalid':$v.rowToAdd.assignedTechnician.$error}"              
                          field="value"  
                          placeholder="Search" 
                          @complete="search($event,drugNameParams)"
                      />  
                    </div>
                    <div class="error">
                        <small class="p-invalid" v-if="$v.rowToAdd.assignedTechnician.$error&&!$v.rowToAdd.assignedTechnician.validator">
                            {{inputError($t('cashPoint.assignedTechnician.label'))}}
                        </small>
                        <small class="p-invalid" v-else-if="$v.rowToAdd.assignedTechnician.$error&&!$v.rowToAdd.assignedTechnician.required">
                            {{requiredError($t('cashPoint.assignedTechnician.label'))}}
                        </small>
                    </div>
                  </div>                 
              </div>
              <div class="col-md-12  col-lg-12  col-xxl-6  ">
                <div class="form-group drug-name">
                  <label class="form-label">{{$t('cashPoint.assignedNurse.label')}}</label>
                  <div class="p-inputgroup">
                    <span 
                      class="p-inputgroup-addon bg-light" 
                      :class="{'p-invalid': $v.rowToAdd.assignedNurse.$error}" >
                      <i class="pi pi-search"></i>
                    </span> 
                    <AutoComplete
                        v-model="rowToAdd.assignedNurse"
                        :suggestions="drugNameParams.suggestions"  
                        :class="{'p-invalid':$v.rowToAdd.assignedNurse.$error}"              
                        field="value"  
                        placeholder="Search" 
                        @complete="search($event,drugNameParams)"
                    />
                      
                  </div>
                  <div class="error">
                    <small class="p-invalid" v-if="$v.rowToAdd.assignedNurse.$error&&!$v.rowToAdd.assignedNurse.validator">
                       {{inputError($t('cashPoint.assignedNurse.label'))}}
                    </small>
                    <small class="p-invalid" v-else-if="$v.rowToAdd.assignedNurse.$error&&!$v.rowToAdd.assignedNurse.required">
                      {{requiredError($t('cashPoint.assignedNurse.label'))}}
                    </small>
                  </div>
                </div>                 
              </div>
              <!-- //////////Add///// -->
              <div class="col-md-12">
                  <!-- <AddButton  :class="{ 'text-danger': isActiveRed }" @add="addRow"></AddButton> -->
                  <button @click="addRow" class="btn m-1 rounded-circle btn-success-gradient " :class="[isActiveRed? 'btn-danger-gradient ' :'']"  > 
                    <i class="fa fa-plus fa-md"></i> 
                  </button>
              </div>
            </div>
          </Base>
          <!-- **********Editdialog-cashpoint & table************ -->
          <div class="editdialog-cashpoint  my-4 mx-2">
            <div class="row" v-if="activeLab.preparation.length > 0 ">
              <Base>
                <div class="row m-2">
                  <div class="col-md-12">
                    <div class="table-responsive">
                      <table class=" table table-striped table-sm text-center">
                        <thead>
                          <tr  class="">
                            <th scope="col">{{$t('table.thead.count')}}</th>
                            <th scope="col">{{$t('cashPoint.testName.label')}}</th>
                            <th scope="col">{{$t('cashPoint.sample.label')}}</th>
                            <th scope="col">{{$t('cashPoint.price.label')}}</th>
                            <th scope="col">{{$t('cashPoint.discount.label')}}</th>
                            <th scope="col">{{$t('cashPoint.assignedTechnician.label')}}</th>
                            <th scope="col">{{$t('cashPoint.assignedNurse.label')}}</th>
                            <th scope="col">{{$t('table.thead.controls')}}</th>
                          </tr>
                        </thead>
                        <tbody> 
                          <tr  v-for="(val, index) in activeLab.preparation"  :key="index">
                            <td class="align-middle"> {{ parseInt(index) + 1 }}</td>
                            <td class="align-middle">
                              <div v-if="val.testName">
                              {{ val.testName.value }}
                              </div>
                            </td>

                            <td class="align-middle">   
                              <div v-if="val.sample">{{val.sample}}</div>
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
                              <div v-if="val.assignedTechnician">
                              {{ val.assignedTechnician.value }}
                              </div>
                            </td>
                            <td class="align-middle">
                              <div v-if="val.assignedNurse">
                              {{ val.assignedNurse.value }}
                              </div>
                            </td>
                            <td class="align-middle"> 
                              <div class="d-flex justify-content-center align-items-center">
                                <EditButton class="me-2" @edit="openEditDialog(val,index)"></EditButton>
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
            <!-- ***************EditDialog***************** -->
            <EditDialog :display="displayEditDialog" @close="closeEditDialog"  @cancel="closeEditDialog" @save="editRow">
              <div  v-if="rowToEdit">                   
                <div class="row">
                  <div class="col-md-6  ">
                    <div class="form-group test-name">
                        <label class="form-label">{{$t('cashPoint.testName.label')}}</label>
                        <div class="p-inputgroup"> 
                          <span 
                            class="p-inputgroup-addon bg-light" 
                            :class="{'p-invalid': $v.rowToEdit.testName.$error}" >
                            <i class="pi pi-search"></i>
                          </span>         
                            <AutoComplete
                              v-model="rowToEdit.testName"
                              :suggestions="drugNameParams.suggestions"  
                              :class="{'p-invalid':$v.rowToEdit.testName.$error}"              
                              field="value"  
                              placeholder="Search" 
                              @complete="search($event,drugNameParams)"
                            />
                          
                        </div>
                        <div class="error">
                          <small class="p-invalid" v-if="$v.rowToEdit.testName.$error&&!$v.rowToEdit.testName.validator">
                              {{inputError($t('cashPoint.testName.label'))}}
                          </small>
                          <small class="p-invalid" v-else-if="$v.rowToEdit.testName.$error&&!$v.rowToEdit.testName.required">
                              {{requiredError($t('cashPoint.testName.label'))}}
                          </small>
                        </div>
                    </div>                 
                  </div>
                  <div class="col-md-6">
                    <div class="form-group sample">
                      <label class="form-label">{{$t('cashPoint.sample.label')}}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon "
                        :class="{'p-invalid': $v.rowToEdit.sample.$error}">
                          <i class="pi pi-chevron-left "> 
                            <i class="pi pi-chevron-right"></i>
                          </i>
                        </span>
                        <InputText 
                          v-model="rowToEdit.sample"
                          type="text" 
                          class="form-control" 
                          :class="{'p-invalid': $v.rowToEdit.sample.$error}"
                          :placeholder="$t('cashPoint.sample.placeholder')"
                        
                        />

                      </div>
                      <small class="p-invalid" v-if="$v.rowToEdit.sample.$error &&! $v.rowToEdit.sample.required">
                              {{requiredError($t('cashPoint.sample.label'))}}
                      </small>
                    </div>
                  </div> 
                  <div class="col-md-6">
                    <div class="form-group price">
                      <label class="form-label">{{$t('cashPoint.price.label')}}</label>
                      <div class="p-inputgroup">   
                        <InputText 
                          v-model="rowToEdit.price"
                            type="number" 
                            class="form-control" 
                            :class="{'p-invalid': $v.rowToEdit.price.$error}"
                            :placeholder="$t('cashPoint.price.placeholder')"
                        />
                      </div>
                      <small class="p-invalid" v-if="$v.rowToEdit.price.$error &&! $v.rowToEdit.price.required">
                        {{requiredError($t('cashPoint.price.label'))}}
                      </small>
                    </div>
                  </div> 
                  <div class="col-md-6"> 
                    <div class="form-group">
                      <CustomInpSearGroup 
                        v-model="rowToEdit.discount"
                        :placeholder="$t('cashPoint.discount.dropdownPlaceholder')"
                        :label="$t('cashPoint.discount.label')" 
                        :valuePlaceholder="$t('cashPoint.discount.placeholderValue')" 
                        :dropdownPlaceholder="$t('cashPoint.discount.dropdownPlaceholder')"    
                        :options="discountOptions"
                        :showIcons=false
                      />
                    </div>
                  </div>
                  <div class="col-md-6  ">
                    <div class="form-group drug-name">
                        <label class="form-label">{{$t('cashPoint.assignedTechnician.label')}}</label>
                        <div class="p-inputgroup">
                          <span 
                            class="p-inputgroup-addon bg-light" 
                            :class="{'p-invalid': $v.rowToEdit.assignedTechnician.$error}" >
                            <i class="pi pi-search"></i>
                          </span> 
                          <AutoComplete
                            v-model="rowToEdit.assignedTechnician"
                            :suggestions="drugNameParams.suggestions"  
                            :class="{'p-invalid':$v.rowToEdit.assignedTechnician.$error}"              
                            field="value"  
                            placeholder="Search" 
                            @complete="search($event,drugNameParams)"
                          />
                          
                        </div>
                        <div class="error">
                            <small class="p-invalid" v-if="$v.rowToEdit.assignedTechnician.$error&&!$v.rowToEdit.assignedTechnician.validator">
                                {{inputError($t('cashPoint.assignedTechnician.label'))}}
                            </small>
                            <small class="p-invalid" v-else-if="$v.rowToEdit.assignedTechnician.$error&&!$v.rowToEdit.assignedTechnician.required">
                                {{requiredError($t('cashPoint.assignedTechnician.label'))}}
                            </small>
                        </div>
                    </div>                 
                  </div>
                  <div class="col-md-6  ">
                    <div class="form-group drug-name">
                      <label class="form-label">{{$t('cashPoint.assignedNurse.label')}}</label>
                      <div class="p-inputgroup">
                        <span 
                            class="p-inputgroup-addon bg-light" 
                            :class="{'p-invalid': $v.rowToEdit.assignedNurse.$error}" >
                            <i class="pi pi-search"></i>
                        </span> 
                          <AutoComplete
                              v-model="rowToEdit.assignedNurse"
                              :suggestions="drugNameParams.suggestions"  
                              :class="{'p-invalid':$v.rowToEdit.assignedNurse.$error}"              
                              field="value"  
                              placeholder="Search" 
                              @complete="search($event,drugNameParams)"
                          />
                        
                      </div>
                      <div class="error">
                          <small class="p-invalid" v-if="$v.rowToEdit.assignedNurse.$error&&!$v.rowToEdit.assignedNurse.validator">
                              {{inputError($t('cashPoint.drugName.label'))}}
                          </small>
                          <small class="p-invalid" v-else-if="$v.rowToEdit.assignedNurse.$error&&!$v.rowToEdit.assignedNurse.required">
                              {{requiredError($t('cashPoint.drugName.label'))}}
                          </small>
                      </div>
                    </div>                 
                  </div>
                </div> 
              </div>                       
            </EditDialog>
            <DeleteDialog :display="displayDeleteDialog"  @cancel="closeDeleteDialog" @delete="deleteRow" ></DeleteDialog>
          </div>
        </div> 
        <!-- ////////////////Invoice/////////////////// -->
        <div class="col-md-6 col-sm-12">
          <div class="row" :class="{ 'custom-area': isActiveRed }">
            <Base>
              <h4 class="text-center  custom-gradient p-4"   :class="{ 'btns-danger': isActiveRed }"> {{ $t("cashPoint.invoice.header") }} </h4>
              <!-- ////// table///////////// -->
              <div class="row my-2">
                <div class="col-12">
                  <div class="table-responsive">
                    <table class="table table-borderless text-start">
                      <tbody>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.invoiceNo.label")}}</th>
                          <td class="align-middle  text-success fw-bold" :class="[isActiveRed? 'text-danger' :'']"  > {{$t("cashPoint.invoice.invoiceNo.value")}}</td>
                        </tr>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.accountName.label")}}</th>
                          <td class="align-middle "> 
                            <div class="d-flex align-items-center justify-content-start ">
                              <Avatar :image="require('@/assets/global/logo/1.jpg')" class=" mr-1" shape="circle" />
                              <span class="fw-bold text-success  mx-2">{{$t("cashPoint.invoice.accountName.name")}} </span>     
                            </div>    
                          </td>
                        </tr>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.CashierName.label")}}</th>
                          <td class="align-middle ">
                            <div class="d-flex align-items-center justify-content-start ">
                              <Avatar :image="require('@/assets/global/logo/1.jpg')" class=" mr-1" shape="circle" />
                              <span class="fw-bold text-success mx-2"> {{$t("cashPoint.invoice.CashierName.name")}} </span>
                            </div>
                          </td>
                        </tr>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.itemNumber.label")}}</th>
                          <td class="align-middle text-success fw-bold" :class="[isActiveRed? 'text-danger ' :'']"  > {{$t("cashPoint.invoice.itemNumber.num")}}</td>
                        </tr>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.sum.label")}}</th>
                          <td class="align-middle text-success fw-bold"  :class="[isActiveRed? 'text-danger ' :'']">{{$t("cashPoint.invoice.sum.value")}}</td>
                        </tr>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.vat.label")}}</th>
                          <td class="align-middle text-success fw-bold"  :class="[isActiveRed? 'text-danger ' :'']">{{$t("cashPoint.invoice.vat.value")}}</td>
                        </tr>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.totalDiscount.label")}}</th>
                          <td class="align-middle text-success fw-bold"  :class="[isActiveRed? 'text-danger ' :'']">{{$t("cashPoint.invoice.totalDiscount.value")}}</td>
                        </tr>
                        <tr >
                          <th scope="col">{{$t("cashPoint.invoice.totalAmount.label")}}</th>
                          <td class="align-middle text-success fw-bold "  :class="[isActiveRed? 'text-danger ' :'']">  {{$t("cashPoint.invoice.totalAmount.value")}} </td>
                        </tr>           
                        <tr >
                          <th scope="col">{{ $t('cashPoint.invoice.paymentMethod.label') }}</th>
                          <td class="align-middle text-success fw-bold "> 
                            <Dropdown
                              v-model="activeLab.paymentMethod"
                              :options="payingMethodOptions"
                              optionLabel="value"
                              :placeholder="$t('cashPoint.invoice.paymentMethod.dropdownPlaceholder')" 
                            
                            />
                          </td>
                        </tr>
                        <tr >
                          <th scope="col"  class="align-middle ">{{ $t('cashPoint.invoice.amount.label1') }}</th>
                          <td class="align-middle text-success fw-bold "> 
                            <InputText 
                            v-model="activeLab.amount"    
                            :placeholder="$t('cashPoint.invoice.amount.placeholder')" 
                            />

                          </td>
                        </tr>
                        <tr>
                          <th scope="col">{{$t("cashPoint.invoice.remaining.label")}}</th>
                          <td class="align-middle  fw-bold ">
                            <span class="btns-gradient  custom-rounded p-2 px-4 "  :class="[isActiveRed? 'btns-danger ' :'']"> {{$t("cashPoint.invoice.remaining.value")}} </span>
                          </td>
                        </tr>
                        <tr > 
                          <th  class="align-middle" scope="col">{{$t("cashPoint.invoice.totalDiscount.label")}}</th>
                          <td class="align-middle  fw-bold">
                              <div class="form-group totalDiscount">
                                <CustomInpSearGroup 
                                    v-model="activeLab.totalDiscount"
                                    :placeholder="$t('cashPoint.invoice.totalDiscount.dropdownPlaceholder')"
                                    :label="$t('cashPoint.invoice.totalDiscount.labelhide')" 
                                    :valuePlaceholder="$t('cashPoint.invoice.totalDiscount.placeholder')" 
                                    :dropdownPlaceholder="$t('cashPoint.invoice.totalDiscount.dropdownPlaceholder')"    
                                    :options="totalDiscountOptions"
                                    :showIcons=false
                                />
                              </div>
                          </td>

                        </tr>
                        <tr class="align-middle fw-bold "> 
                          <th class="align-middle" scope="col">{{$t("cashPoint.invoice.vat.label")}}</th>
                          <td class="align-middle">
                            <div class="form-group vat ">
                              <CustomInpSearGroup 
                                v-model="activeLab.totalVat"
                                :placeholder="$t('cashPoint.invoice.vat.dropdownPlaceholder')"
                                :label="$t('cashPoint.invoice.vat.labelhide')" 
                                :valuePlaceholder="$t('cashPoint.invoice.vat.placeholder')" 
                                :dropdownPlaceholder="$t('cashPoint.invoice.vat.dropdownPlaceholder')"    
                                :options="totalDiscountOptions"
                                :showIcons=false
                                /> 
                            </div>
          
                          </td>

                        </tr>
                        <tr class="align-middle ">
                          <th class="align-middle " scope="col">{{$t("cashPoint.invoice.dueDate.label")}}</th>
                          <td>
                            <div class="form-group">   
                              <Calendar
                                v-model="activeLab.dueDate"
                                :placeholder="$t('cashPoint.invoice.dueDate.placeholder')"
                                :showIcon="true"
                                dateFormat="mm-dd-yy"
                                @date-select="formateDate"
                              />      
                              </div> 
                          </td>
                        </tr>
                        <tr class="align-middle">
                          <th class="align-middle " scope="col">{{$t("cashPoint.invoice.note.label")}}</th>
                          <td>
                            <div class="form-group">   
                              <InputText type="text" 
                              :placeholder="$t('cashPoint.invoice.note.placeholder')"
                              v-model="activeLab.invoiceNote" />    
                              </div> 
                          </td>
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
            
                </div>
                <!-- /////////////////Buttons//////////////// -->
                <div class=" btns-wrapper justify-content-center  d-flex gap-2 flex-wrap my-2"   > 
                  <div>
                    <button class="btn btn-info-gradient btn-pill  btn-pill w-sm my-2 my-sm-0 ">
                      <i class=" pi pi-save "></i> {{$t('cashPoint.invoice.preview.label')}}
                    </button>
                  </div>
                  <div>
                    <button class="btn  btn-secondary-gradient btn-pill  btn-pill w-sm my-2 my-sm-0 ">
                      <i class=" pi pi-print mx-1 "></i>{{$t('cashPoint.invoice.print.label')}} 
                    </button>
                  </div>
                  <div>
                    <button class="btn btn-success-gradient btn-pill w-sm my-2 my-sm-0 btn-pill">
                      <i class=" pi pi-check  mx-1"></i>{{$t('cashPoint.invoice.done.label')}} 
                    </button>
                  </div>
                </div>  
              </div>
            </Base>
          </div>
        </div>
      </div>

    </div>
    
  </div>
  <!-- ************* End cashPoint********** -->

</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/medicalLabs/lab.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import AddButton from "@/components/global/utilities/AddButton.vue"
import labOption from '@/mixins/medicalLabs/labOption'
import ResetButton from "@/components/global/utilities/ResetButton.vue";
import CustomInpSearGroup from "@/components/labs/lab/custom/CustomInpSearGroup.vue"
import EditButton from "@/components/global/utilities/EditButton.vue"
import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
/////////////////////////////
import EditDialog from "@/components/global/utilities/EditDialog.vue"
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
import {cloneDeep} from 'lodash';
import {notContainsHtmlTags} from "@/validation/customValidators";
//////////////////////////////////////////////
import { convertDate } from "@/helpers/utilities";
import {  required} from "vuelidate/lib/validators";
import {  
      htmlTagsError,
      inputError,
      numericError,
      maxRecordsError,
      requiredError,
      maxValueError,
      minValueError,
  } from '@/validation/errors'
  //////////////////////////////
import { mapGetters } from "vuex";
 export default {
    mixins:[labOption],
    name:"CashPoint",
    components: {
      Base,
      AddButton,
      ResetButton,
      CustomInpSearGroup,
      EditButton,
      DeleteButton,
      EditDialog,
      DeleteDialog,
    },
    data() {
      return {
        indexToEdit:null,
        displayEditDialog: false,
        indexToDelete:null,
        displayDeleteDialog: false,
        check_error: {},
        serializer_error: {},
        rowToAdd:{
          testName:"",
            price:"",
            sample:"",
            discount:{
                selection:"",
                value:'',
            }, 
            assignedTechnician:"",
            assignedNurse:"",            
        },
        rowToEdit:{
          testName:"",
            price:"",
            sample:"",
            discount:{
                selection:"",
                value:'',
            },
            assignedTechnician:"",
            assignedNurse:"",
        
        },
      };
    },
    validations:{
        rowToAdd:{
          testName:{
              required,
              validator: (value) => {
                  if(typeof value == 'object' || value == null || value == '')
                  return true;
                  else {
                      return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                  }
              },
          }, 
          price:{
            required,
          },
          sample:{
            required,
          },
          discount:{
            required,
          },
          assignedTechnician:{
            required,
            validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                return true;
                else {
                    return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
            },
          },
          assignedNurse:{
            required,
            validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                return true;
                else {
                    return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
            },
          }
        },
        rowToEdit:{
          testName:{
            required,
            validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                return true;
                else {
                    return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
            },
          }, 
          price:{
            required,
          },
          sample:{
            required,
          },
          discount:{
            required,
          },
          assignedTechnician:{
            required,
            validator: (value) => {
                if(typeof value == 'object' || value == null || value == '')
                return true;
                else {
                    return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                }
            },
          },
          assignedNurse:{
              required,
              validator: (value) => {
                  if(typeof value == 'object' || value == null || value == '')
                  return true;
                  else {
                      return value.length > 0 && value.length < 255 && notContainsHtmlTags(value);
                  }
              },
          }
        }
    },
    computed: { 
      ...mapGetters("labs", ["getSelectedNumber","getSelectedTab","getActiveLab","getIsActiveRed"]),
        selectedNum: {
            get() {
                return this.getSelectedNumber;
            },
            set(value) {
                this.$store.dispatch("labs/setSelectedNumber", value);
            },
        },
        selectedTab: {
            get() {
                return this.getSelectedTab;
            },
            set(value) {
                this.$store.dispatch("labs/setSelectedTab", value);
            },
        },
        activeLab: {
            get() {
                return this.getActiveLab;
            },
            set(value) {
                this.$store.dispatch("labs/setActiveLab", value);
            },
        },
        isActiveRed: {
            get() {
                return this.getIsActiveRed;
            },
            set(value) {
                this.$store.dispatch("labs/setIsActiveRed", value);
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
      //////////////////////
      addName(){
          console.log("add Name")
      },
     ////////////////////////////////
      reset(){
         this.resetForm();
      },
      ///////////////////////////
      formateDate() {
        this.activeLab.dueDate = convertDate(
          this.activeLab.dueDate
        );
      },
      //////////////////////////
      resetForm(){
        this.rowToAdd={
            testName:"",
            price:"",
            discount:{
              selection:"",
              value:'',
            },
            sample:"",
            assignedNurse:"", 
            assignedTechnician:"",
        };
        this.$v.rowToAdd.$reset();
      },
      ///////////////////////
      addRow(){
          console.log("addRow");
          this.$v.rowToAdd.$touch();
          if(!this.$v.rowToAdd.$invalid ){
              let cashpoint = cloneDeep(this.rowToAdd );
              this.activeLab.preparation.push(cashpoint);
              this.resetForm();
          }
      },
      ///////////////////////////
      openEditDialog(val,index) { 
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
          this.$v.rowToEdit.$touch();
          if(! this.$v.rowToEdit.$invalid ){
              let cashpoint = cloneDeep(this.rowToEdit );
              this.activeLab.preparation.splice(this.indexToEdit,1,cashpoint);
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
          this.activeLab.preparation.splice(this.indexToDelete,1);
          this.closeDeleteDialog();
      },

    }
  };
</script>

<style lang="scss" scoped >
.custom-border{
        border:1px solid #56C596;
        border-radius:2rem;
 }
.custom-gradient {
    background-image: url("@/assets/Rectangle.svg");
    background-position: center;
    background-repeat: no-repeat;
}
.btns-gradient{
    background: linear-gradient(0.25turn, #fff, rgba($primary,0.55));
}
.custom-rounded{
    border-radius: 20px;
}
.custom-size{
    height: max-content;
}
.btns-danger{
  background: linear-gradient(0.25turn, #fff, rgba($danger,0.55));
}
.custom-area {
    border-radius: 1.5rem;
    box-shadow: 1px 2px  4px $danger !important;

}
</style>

