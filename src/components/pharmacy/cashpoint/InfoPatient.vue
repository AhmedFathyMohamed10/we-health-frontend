
<template>
<div>
     <!-- /////////////////////Start patient-Name////////////////////// -->
    <div class="Login  my-4">
        <Base>
            <div class="row ">
                    <div class="col-lg-10 col-xl-4  col-md-8 col-sm-10"> 
                        <div class="my-2">
                            <label class="form-label">{{$t("PatientName.label")}}</label>
                            <span class="p-input-icon-right">
                                <i class="pi pi-search font-bold text-success" ></i>
                                <InputText 
                                  :placeholder="$t('PatientName.placeholdere')"
                                    v-model= "containsCashpoint[activeNum].otc.patientName"
                                />
                            </span>
                        </div>
                   </div> 
                   <div class="col-xl-1 col-lg-2 col-md-2 col-sm-2">       
                         <AddButton ></AddButton>
                    </div>
                    <!-- flex-wrap  w-sm m-1 my-sm-0  flex-wrap w-sm m-1 my-sm-0  w-sm m-1 my-sm-0-->
                    <div class="col-lg-12  col-sm-12  col-xl-7">
                        <!-- <h6 class="text-start"> {{$t("PatientInfo.label")}}</h6> -->
                        <div class="d-xl-flex align-items-center justify-content-center">
                            <label class="form-label text-lg-center  ">{{$t("PatientInfo.label")}}</label>
                        </div>
                        <div class="d-flex  flex-wrap align-items-center justify-content-lg-center ">
                            <div class="">
                                <button  class="btn btn-success-gradient font-bold btn-pill m-1 w-sm  ">
                                <i class="pi pi-file"></i> {{$t("PatientInfo.history.label")}} </button>
                            </div>
                            <div class="">
                                <button   class="btn btn-success-gradient btn-pill font-bold m-1 w-sm  ">
                                {{$t("PatientInfo.PhPota.label")}} </button>
                            </div>
                            <div class="">
                                <button  class="btn btn-success-gradient btn-pill font-bold m-1 w-sm    ">
                                <i class=" pi pi-bolt"></i>{{$t("PatientInfo.allergies.label")}} </button>
                            </div>
                            <div class="">
                                <button   class="btn btn-success-gradient font-bold  btn-pill m-1 w-sm  
                                ">
                                <i class="pi pi-save"></i> {{$t("PatientInfo.insurance.label")}}</button>
                            </div>
                        </div>
                    </div>  
                
                
             </div>
        </Base>
    <!-- ///////////////////// End patient-info//////////////////////// -->
    </div>
     <!-- ///////////////////// Start patient-complaint////////////////// -->
    <div class=" patient-complaint  my-2 ">
            <Base>
                <div class="row">
                    <div class="col-md-6 col-xl-4">
                      <div class="d-flex align-items-start justify-content-start my-2 ">     
                        <span class="fw-bold"> {{ $t('PatientWallet.label') }} </span>
                        <span class="mx-2 fw-bold  text-danger"> {{ $t('PatientWallet.value') }}</span ><span class=" fw-bold text-success">{{ $t('PatientWallet.exp') }}</span>
                    </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="d-flex align-items-start justify-content-start my-2 ">     
                        <span class="fw-bold">{{ $t('lastOperation.label') }}</span>
                        <span class=" mx-2 fw-bold text-success">{{ $t('lastOperation.value') }}</span>
                    </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="d-flex align-items-start justify-content-start my-1 ">     
                          <span class="fw-bold">{{ $t('insurancySync.label') }} </span>
                            <div>
                                  <button  class=" mx-4 btn btn-icon rounded-circle btn-success-gradient" > 
                                 <i class="pi pi-check"></i>
                             </button>
                            </div>
                          <span class=" mx-2 fw-bold text-success"> {{ $t('insurancySync.value') }} </span>

    
                    </div>
                    </div>
                </div> 
                  <!-- ///////////////////////////// v-model="searchText"////// v-if="containsCashpoint[activeNum].otc.searchResults.length>0/////// -->
               <div class="row ">
                    <div class="col-md-9 col-sm-12 col-lg-6 ">
                        <label class="form-label ">{{$t("PatientComplaint.label")}} </label>
                        <div class="d-flex ">
                            <span class="p-input-icon-right">
                                <i class="pi pi-search font-bold text-success" ></i>
                                <InputText
                                    v-model="containsCashpoint[activeNum].otc.complaintText"
                                    placeholder="Patient Complaint"  />
                            </span>
                        </div>
                   </div>
                   <div class="col-md-3 ">
                        <div class="my-2 edit-margin ">
                            <AddButton  @add="addComplaint" ></AddButton>
                        </div>
                    </div>
                    <div v-if="containsCashpoint[activeNum].otc.complaints.length>0"  class="d-flex  d-flex align-items-center justify-content-start flex-wrap">
                       <p v-for="(result, index) in containsCashpoint[activeNum].otc.complaints"  :key="index" class=" bg-success fw-bold text-light custom-rounded px-3 m-2" >
                        {{ result }} <i @click="removeResult(index)" class=" p-2 pi pi-times-circle fw-bold text-danger"></i>
                       </p>
    
                    </div>    
                </div> 
            </Base> 
    <!-- ///////////////////// End patient-complaint//////////////////////// -->
    </div>
    <!-- *************************************test comp diagnosis rx***************** -->
    <div class=" patient-diagnosis  my-2 position-relative z-0">
             <Base>
                <!-- ///////////// dialog prime//////////////// -->
                <!-- <div id="showd">      
                    <div class="row">
                        <div class="col-md-6 col-xl-4">
                          <div class="d-flex align-items-start justify-content-start my-2 ">     
                            <span class="fw-bold"> {{ $t('PatientWallet.label') }} </span>
                            <span class="mx-2 fw-bold  text-danger"> {{ $t('PatientWallet.value') }}</span ><span class=" fw-bold text-success">{{ $t('PatientWallet.exp') }}</span>
                        </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="d-flex align-items-start justify-content-start my-2 ">     
                            <span class="fw-bold">{{ $t('lastOperation.label') }}</span>
                            <span class=" mx-2 fw-bold text-success">{{ $t('lastOperation.value') }}</span>
                        </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="d-flex align-items-start justify-content-start my-1 ">     
                              <span class="fw-bold">{{ $t('insurancySync.label') }} </span>
                                <div>
                                      <button  class=" mx-4 btn btn-icon rounded-circle btn-success-gradient" > 
                                     <i class="pi pi-check"></i>
                                 </button>
                                </div>
                              <span class=" mx-2 fw-bold text-success"> {{ $t('insurancySync.value') }} </span>
    
        
                        </div>
                        </div>
                    </div> -->
                      <!-- ///////////////////////////// v-model="searchText"////// v-if="containsCashpoint[activeNum].otc.searchResults.length>0/////// -->
                    <!-- <div class="row ">
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xl-4 ">
                            <label class="form-label ">{{$t("PatientComplaint.label")}} </label>
                            <div class="d-flex ">
                                <span class="p-input-icon-right">
                                    <i class="pi pi-search font-bold text-success" ></i>
                                    <InputText
                                        v-model="containsCashpoint[activeNum].otc.complaintText"
                                        placeholder="Patient Complaint"  />
                                </span>
                            </div>
                       </div>
                       <div class="col-md-3  col-lg-3 col-xl-2  ">
                            <div class="my-2 edit-margin ">
                                <AddButton  @add="addComplaint" ></AddButton>
                            </div>
                        </div>
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xl-4 ">
                            <label class="form-label ">{{$t("PatientComplaint.label")}} </label>
                            <div class="d-flex ">
                                <span class="p-input-icon-right">
                                    <i class="pi pi-search font-bold text-success" ></i>
                                    <InputText
                                        v-model="containsCashpoint[activeNum].otc.complaintText"
                                        placeholder="Patient Complaint"  />
                                </span>
                            </div>
                       </div>
                       <div class="col-md-3 col-lg-3 col-xl-2 ">
                            <div class="my-2 edit-margin ">
                                <AddButton  @add="addComplaint" ></AddButton>
                            </div>
                        </div>
                        <div v-if="containsCashpoint[activeNum].otc.complaints.length>0"  class="d-flex  d-flex align-items-center justify-content-start flex-wrap">
                           <p v-for="(result, index) in containsCashpoint[activeNum].otc.complaints"  :key="index" class=" bg-success fw-bold text-light custom-rounded px-3 m-2" >
                            {{ result }} <i @click="removeResult(index)" class=" p-2 pi pi-times-circle fw-bold text-danger"></i>
                           </p>
        
                        </div> 
                       
    
                        
                    </div> 
                    <div class="row hidden-element "  >
                        <div class="d-flex justify-content-end position-absolute custom-vertical-btn ">
                            <button @click="openPosition('right')" class="vertical-button rounded-5 rounded-top-0 btn btn-success  border border-success">
                                <span>Request</span>
                            </button>
    
                        </div>
                    </div>
                    <div class="row">
                        <Dialog :visible.sync="displayPosition"  header="Mohamed Bayoumi request RX" appendTo="showd"  :containerStyle="{width: '50vw'}" :position="'right'" >
                            <div class="bg-info form-control p-3 d-flex justify-content-between">
                              <div class="d-flex align-items-center justify-content-start">
                                <div class="d-flex align-items-center justify-content-start">
                                  Dr name:   
                                   <div class="d-flex align-items-center justify-content-start">  
                                          <Avatar :image="require('@/assets/global/logo/1.jpg')" class="" shape="circle" />
                                            <p class="fw-bold m-2"> Hossam El-Bokhary Pharmacy </p>  
                                    </div> 
                                </div>
                                <div class=""> Date: <span>13/3/2023</span></div>
                                <div class=""> <i class="pi pi-external-link"></i>  </div>
                              </div>
                            </div>
                         
                        </Dialog>
              
                   </div>

                </div> -->
                <!-- //////////////////////custom dialog////////////////////// -->
                      
                    <div class="row">
                        <div class="col-md-6 col-xl-4">
                          <div class="d-flex align-items-start justify-content-start my-2 ">     
                            <span class="fw-bold"> {{ $t('PatientWallet.label') }} </span>
                            <span class="mx-2 fw-bold  text-danger"> {{ $t('PatientWallet.value') }}</span ><span class=" fw-bold text-success">{{ $t('PatientWallet.exp') }}</span>
                        </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="d-flex align-items-start justify-content-start my-2 ">     
                            <span class="fw-bold">{{ $t('lastOperation.label') }}</span>
                            <span class=" mx-2 fw-bold text-success">{{ $t('lastOperation.value') }}</span>
                        </div>
                        </div>
                        <div class="col-md-6 col-xl-4">
                            <div class="d-flex align-items-start justify-content-start my-1 ">     
                              <span class="fw-bold">{{ $t('insurancySync.label') }} </span>
                                <div>
                                      <button  class=" mx-4 btn btn-icon rounded-circle btn-success-gradient" > 
                                     <i class="pi pi-check"></i>
                                 </button>
                                </div>
                              <span class=" mx-2 fw-bold text-success"> {{ $t('insurancySync.value') }} </span>
    
        
                        </div>
                        </div>
                    </div>
                      <!-- ///////////////////////////// v-model="searchText"////// v-if="containsCashpoint[activeNum].otc.searchResults.length>0/////// -->
                    <div class="row ">
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xl-4 ">
                            <label class="form-label ">Clinic Name</label>
                            <div class="d-flex ">
                                <span class="p-input-icon-right">
                                    <InputText
                                      
                                        placeholder="Dr Bayoumi AbdelMejeid"  />
                                </span>
                            </div>
                       </div>
                       <div class="col-md-3 col-lg-3 col-xl-2 ">
                            <div class="my-2 edit-margin ">
                                <AddButton  @add="addComplaint" ></AddButton>
                            </div>
                        </div>
                        <!-- *******Patient Diagnosis******** -->
                        <div class="col-md-9 col-lg-9 col-sm-12 col-xl-4 ">
                            <label class="form-label ">Patient Diagnosis</label>
                            <div class="d-flex ">
                                <span class="p-input-icon-right">
                                    <i class="pi pi-search font-bold text-success" ></i>
                                    <InputText
                                        v-model="containsCashpoint[activeNum].otc.complaintText"
                                        placeholder="Search"  />
                                </span>
                            </div>        
                        </div>
                        <div class="col-md-3  col-lg-3 col-xl-2  ">
                            <div class="my-2 edit-margin ">
                                <AddButton  @add="addComplaint" ></AddButton>
                            </div>
                        </div>
                        <!-- ///////////////diagnosis/////////////// -->
                        <div v-if="containsCashpoint[activeNum].otc.complaints.length>0"  class="d-flex align-items-center justify-content-start justify-content-lg-center flex-wrap ">
                            <p v-for="(result, index) in containsCashpoint[activeNum].otc.complaints"  :key="index" class=" bg-success fw-bold text-light custom-rounded px-3 m-2" >
                                {{ result }} <i @click="removeResult(index)" class=" p-2 pi pi-times-circle fw-bold text-danger"></i>
                            </p>
                        </div>
                          
                    </div> 
                    <div class="row  "  >
                        <div class="d-flex justify-content-end position-absolute custom-vertical-btn ">
                            <button  @click="openDialog()" class="vertical-button rounded-5 rounded-top-0 btn btn-success  border border-success">
                                <span>Request</span>
                            </button>
    
                        </div>
                    </div>
                    <!-- ***********************container dialog****************** -->
                    <div  class="container-d position-absolute top-0 p-5 " v-if="showDialog || showDetails">
                 
                          <!-- ***********************custom dialog****************** -->
                        <div   v-if="showDialog" class="row">

                            <!-- *****************icons************ -->
                            <div class="row">
                                <!-- <div class="col-md-12"> <i class="pi pi-angle-double-left fw-bold "></i></div> -->
                                <div class="col-md-11"> <div class="fw-bold mb-4">Mohamed Bayoumi request RX</div></div>

                                <div class="col-md-1 "> <div class="fw-bold mb-4 d-flex justify-content-lg-end"> <i  @click="hideDialog()" class="pi pi-times "></i></div></div>

                            </div>

                            <!-- ************************************* -->
                            <div  class="gradient border-radius ml-3 mb-3" v-for='req in containsrequests' :key='req.id'>
                                <div class="d-flex align-items-center justify-content-between  ">
                                    <div class="d-flex align-items-center fw-bold ">
                                    Dr name:   
                                    <div class="d-flex align-items-center justify-content-start">  
                                            <Avatar :image="require('@/assets/global/logo/1.jpg')" class="" shape="circle" />
                                                <p class="fw-bold m-2">{{ req.name }} </p>  
                                        </div> 
                                    </div>
                                    <div class="fw-bold"> Date: <span>{{ req.date }}</span></div>
                                    <div class="fw-bold"> <i @click="openDetails(req)" class="pi pi-external-link"></i></div>
                                </div>
                            </div>
                            
                        </div>
                        <!-- **********************custom details************ -->
                        <div   v-if="showDetails" class="row">

                            <!-- *****************icons details************ -->
                                <div class="row">
                                    <div class="col-md-10 col-sm-12 "> <div class="fw-bold  mb-4"><i  @click="hideDetails()" class="pi pi-angle-double-left fw-bold "></i></div></div>

                                    <div class="col-md-2  col-sm-12"> <div class=" fw-bold  mb-4 d-flex justify-content-lg-end"> <i  @click="hideALL()" class="pi pi-times fw-bold "></i></div></div>

                                </div> 

                            <!-- ************************************* -->
                                <div class="gradient row">
                                    <div class="col-12  col-sm-12 ">
                                        <div class="d-flex align-items-center fw-bold ">
                                        <span class="fw-bold ">Dr name: </span>  
                                            <div class="d-flex align-items-center justify-content-start">  
                                                    <Avatar :image="require('@/assets/global/logo/1.jpg')" class="" shape="circle" />
                                                        <p class="fw-bold m-2"> {{ requestDetails.name }}</p>  
                                            </div> 
                                        </div>
                                        <div class="fw-bold "> Diagnosis: <span class="fw-bold mx-3">Icd</span>
                                                <span class="fw-bold text-white "> {{requestDetails.diagnosis.icd}}</span> <span class="fw-bold mx-3">Name</span> 
                                                <span class="fw-bold text-white">{{requestDetails.diagnosis.name}}</span>
                                        </div>
                                        <div class="fw-bold "> 
                                            Date: <span class="mx-3">{{requestDetails.date}}</span>
                                        </div>
                                    </div>
                                        
                                </div>
                            <!-- ******************table******************* -->
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
                                                <th scope="col">Route</th>
                                                <th scope="col">{{$t('otc.comment.label')}}</th>
                                                <th scope="col">Remaining</th>
                                                <th scope="col">{{$t('table.thead.controls')}}</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                                
                                            <tr class="" v-for="(val,index) in requestDetails.rx" :key="val.index">
                                                <td class="align-middle"> {{index+1}}</td>
                                                <td class="align-middle"> {{val.DrugName}}</td>
                                                <td class="align-middle"> {{val.Dose}}</td>
                                                <td class="align-middle"> {{val.Frequency}}</td>
                                                <td class="align-middle"> {{val.Period}} </td>
                                                <td class="align-middle"> {{val.Route}} </td>
                                                <td class="align-middle"> {{val.Comment}} </td>
                                                <td class="align-middle"> {{val.remaining}} </td>
                                                <td class="align-middle"> 
                                                    <div class="d-flex justify-content-center align-items-center">
                                                        <i  class="pi pi-arrow-circle-down fw-bold mx-2 "></i>
                                                        <i   class="pi pi-sync fw-bold  mx-2"></i>
                                                        <i   class="pi pi-chart-pie fw-bold  mx-2"></i>
                                                
                                                    </div>
                                                </td>
                                                
                                            </tr>
                                        
                                            
                                            </tbody>
                                        </table>


                                        </div>

                                    </div>
                                </div>

                                <!-- /////////////////Buttons/////////btns-wrapper justify-content-center  d-flex gap-2 flex-wrap my-2/////// -->
                                <div class=" d-flex align-items-center justify-content-center  gap-2   "    > 
                                                <div class=" d-flex flex-wrap ">
                                                    <button class="btn  btn-success-gradient btn-pill  btn-pill w-sm my-2  ">
                                                        <i class=" pi pi-save mx-1 "></i>{{$t('invoice.print.label')}} 
                                                    </button>
                                                </div>
                                                <div class=" d-flex flex-wrap ">
                                                    <button   @click="hideALL()" class="btn  btn-success-gradient btn-pill  btn-pill w-sm my-2  ">
                                                        <i class=" pi pi-times-circle mx-1 "></i>Cancel
                                                    </button>
                                                </div>
                                                <div class=" d-flex flex-wrap ">
                                                    <button  @click="hideALL()" class="btn btn-success-gradient btn-pill w-sm my-2  btn-pill ">
                                                    <i class=" pi pi-check  mx-1"></i>{{$t('invoice.done.label')}} 
                                                    </button>
                                                </div>
                                </div>
                        </div>
                      
                      
                    </div>
             </Base>      
    <!-- ///////////////////// End patient-complaint//////////////////////// -->
    </div>
     <!-- ///////////////////// Start paying-method///////////////////////// -->
    <div class="paying-method my-4  z-1" v-if="containsCashpoint.length>0">
        <Base>
          <div class="row z-1">
                <div class=" col-md-6 col-xl-3">
                    <div class="paying-method">
                        <label class="form-label">{{$t('otc.payingMethod.label')}}</label>
                        <Dropdown
                           v-model="containsCashpoint[activeNum].otc.payingMethod"
                            :options="payingMethodOptions"
                            optionLabel="value" 
                            :placeholder="$t('otc.payingMethod.dropdownPlaceholder')" 
                        />
                    </div>
                </div>
                <div class=" col-md-6 col-xl-3">
                    <div class="total-discount">
                        <CustomInputGroup
                           v-model="containsCashpoint[activeNum].otc.totalDiscount"
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
                        v-model="containsCashpoint[activeNum].otc.vat"
                            placeholder="14"
                            />
                        <InputText class=" w-20 btn-success-gradient custom-placeholder  "  
                          placeholder="%"
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
    <!-- ///////////////////// Start  perepation////////////////////////////// -->
    <div class="perepation my-4">
        <div class="row">
            <div class="col-md-6 custom-size ">
                    <Base>
                        <div class="d-flex justify-content-between gradient  align-items-center p-3">
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
                                          v-model=" rowToAdd.comment"
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
                                        <div class=" w-60 d-flex justify-content-center  align-items-center  p-inputgroup-addon" 
                                            :class="{'p-invalid':$v.rowToAdd.amount.$error}" >
                                                <i @click="decrement" class=" px-2  fw-bold pi pi-minus-circle"></i>
                                                <input v-model="rowToAdd.amount" class="px-2 text-center border-0 fw-bold text-success w-50 custom-outline"  >
                                                <i  @click="increment" class=" px-2   fw-bold pi pi-plus-circle"></i>
                                        </div>
                                        <InputText class="w-40 btn-success-gradient custom-placeholder" 
                                                                          
                                        placeholder="15 item"
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
                                                class="p-inputgroup-addon"
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
                        <div class="row">
                        <div  class="col-12">
                            <button  @click="addRow" class="btn btn-success-gradient btn-pill  btn-pill w-lg my-2 my-sm-0 w-100">
                                <i class="fa fa-plus fa-md"></i> {{$t('perepation.add')}} 
                            </button>
                        </div>
                        </div>

                    </Base>
                         <!--////////////// Start  Medical instruction//////containsCashpoint[activeNum].otc.////// -->
                    <div class="medical-instruction m-4 ">
                            <div class="row" v-if="containsCashpoint[activeNum].otc.preparation.length > 0 ">
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
                                                          
                                                        <tr  v-for="(val, index) in containsCashpoint[activeNum].otc.preparation"  :key="index">
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
                                              v-model=" rowToEdit.dose"
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
                                                  v-model=" rowToEdit.route"
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
                                                    v-model=" rowToEdit.comment"
                                                      type="text" 
                                                      class="form-control" 
                                                      :placeholder="$t('otc.comment.placeholder')"
                                                  
                                                  />
                                              </div>
                              
                                          </div>
                                      </div>
                                  </div> 
                                  </div>
                              <!-- /////////////////////RE/////////////////////////////// -->
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
                                                        :class="{'p-invalid': $v.rowToEdit.amount.$error}">
                                                            <i class="mdi mdi-pill"></i>
                                                        </span>
                                                        <div class=" w-60 d-flex justify-content-center  align-items-center  p-inputgroup-addon"
                                                        :class="{'p-invalid': $v.rowToEdit.amount.$error}">
                                                            <i @click="decrementEdit()" class=" px-2  fw-bold pi pi-minus-circle"></i>
                                                            <input v-model="rowToEdit.amount" class="px-2 text-center border-0 fw-bold text-success w-50 custom-outline"  >
                                                            <i  @click="incrementEdit()" class=" px-2   fw-bold pi pi-plus-circle"></i>
                                                        </div>
                                                        <InputText class="w-40 "
                                                      
                                                        placeholder="15 item"
                                                        disabled  />
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
                                                      class="p-inputgroup-addon"
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
                <div class="row mb-3" v-if="containsCashpoint[activeNum].otc.preparation.length > 0 ">
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
                                          <tr v-for="(val, index) in containsCashpoint[activeNum].otc.preparation"  :key="index">
                    
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
            <!-- ////////////////Invoice/////////////////// -->
                <div class="row">
                    <Base>
                        <h4 class="text-center gradient p-4"> {{ $t("invoice.header") }} </h4>
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
                                            <td class="align-middle  text-success fw-bold">{{ invoice.date }}</td>
                                        </tr>
                                        <tr >
                                            <th scope="col">{{$t("invoice.clientName.label")}}</th>
                                            <td class="align-middle "> 
                                                <div class="d-flex align-items-center justify-content-start ">
                                                    <Avatar :image="require('@/assets/global/logo/1.jpg')" class=" mr-1" shape="circle" />
                                                    <span class="fw-bold text-success ">{{ invoice.clientName }}</span>
                                               </div>    
                                            </td>
                                        </tr>
                                        <tr >
                                            <th scope="col">{{$t("invoice.casherName.label")}}</th>
                                            <td class="align-middle ">
                                               <div class="d-flex align-items-center justify-content-start ">
                                                    <Avatar :image="require('@/assets/global/logo/1.jpg')" class=" mr-1" shape="circle" />
                                                    <!-- {{$t("invoice.casherName.name")}} -->
                                                  <span class="fw-bold text-success "> {{ invoice.clientName }}</span>
                                               </div>
                                            </td>
                                        </tr>
                                        <tr >
                                            <th scope="col">{{$t("invoice.itemNumber.label")}}</th>
                                            <td class="align-middle text-success fw-bold"> {{$t("invoice.itemNumber.num")}} </td>
                                        </tr>
                                        <tr >
                                            <th scope="col">{{$t("invoice.sum.label")}}</th>
                                            <td class="align-middle text-success fw-bold"> {{$t("invoice.sum.value")}}</td>
                                        </tr>
                                        <tr >
                                            <th scope="col">{{$t("invoice.vat.label")}}</th>
                                            <td class="align-middle text-success fw-bold"> {{$t("invoice.vat.value")}}</td>
                                        </tr>
                                        <tr >
                                            <th scope="col">{{$t("invoice.totalDiscount.label")}}</th>
                                            <td class="align-middle text-success fw-bold">{{invoice.totalDiscount.value}} {{invoice.totalDiscount.selection.value}}</td>
                                        </tr>
                                        <tr >
                                            <th scope="col">{{$t("invoice.totalAmount.label")}}</th>
                                            <td class="align-middle text-success fw-bold "> {{$t("invoice.totalAmount.value")}} </td>
                                        </tr>           
                                        <!-- ////////Payment Method////////// -->
                                        <tr >
                                            <th scope="col">{{ $t('otc.payingMethod.label') }}</th>
                                            <td class="align-middle text-success fw-bold "> 
                                                <Dropdown
                                                   v-model="invoice.payingMethod"
                                                    :options="payingMethodOptions"
                                                    optionLabel="value"
                                                    :placeholder="$t('otc.payingMethod.dropdownPlaceholder')" 
                                                
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
                                                <span class="btn-info-gradient p-2 btn-pill">{{$t("invoice.remaining.value")}} </span>
                                
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
</div>  
</template>

<i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>
<i18n src="@/lang/global/global.json"></i18n>
<script>
    import Base from "@/components/global/utilities/Base.vue";
    import AddButton from "@/components/global/utilities/AddButton.vue"
    import ResetButton from "@/components/global/utilities/ResetButton.vue";
    import CustomInputGroup from "@/components/global/custom/CustomInputGroup.vue";
    import CustomInpSearGroup from "@/components/pharmacy/cashpoint/custom/CustomInpSearGroup.vue"
    import cashpointOption from '@/mixins/pharmacy/cashpoint/cashpointOption'
    import EditButton from "@/components/global/utilities/EditButton.vue"
    import DeleteButton from "@/components/global/utilities/DeleteButton.vue"
    import EditDialog from "@/components/global/utilities/EditDialog.vue"
    import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue"
    ////////////////////////////////////////////
   import 
   {
      numeric,
      required, 
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
    //////////////////////////////////
    import { mapGetters } from "vuex";
    export default {
      mixins:[cashpointOption],

      name:'InfoPatient',
  
          props: {
            activeNum:{
              required
            },
          
            checkError: {
                type: Object,
                default(){
                    return {}
                }
            },
            serializerError: {
                type: Object,
                default(){
                    return {}
                }
            },

           
        },
        components:{
            Base,
            AddButton,
            ResetButton,
            CustomInpSearGroup,
            CustomInputGroup,
            EditButton,
            DeleteButton,
            EditDialog,
            DeleteDialog,
         
        },
      data(){
            return {
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
              containsCashpoint:[],
              allCash:[],
              indexToEdit:null,
              displayEditDialog: false,
              indexToDelete:null,
              displayDeleteDialog: false, 
              hideTable2: true,
              hideTable1: true,
              showTitle:'',
              displayPosition: false,
               position: 'center',
               showDialog:false,
               showDetails:false,
               requestDetails:null,
               containsrequests:[],
              
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
      computed:{  
       invoice(){
        return {
             invoiceNo:'',
              date:this.$moment(new Date()).format(' DD / MM / YYYY'),
              clientName:this.containsCashpoint[this.activeNum].otc.patientName,

              casher:'',
              payingMethod:this.containsCashpoint[this.activeNum].otc.payingMethod,
              totalDiscount:this.containsCashpoint[this.activeNum].otc.totalDiscount
        }

       },
    //    formattedDate() {
    //        return;
    //    },
      
      },

    //     ...mapGetters("pharmacyStaticData", ["otc"]),
    //     otc: {
    //         get() {
    //             return this.otc;
    //         },
    //         // set(value) {
    //         //     this.$store.dispatch("pharmacy/setOtc", value);
    //         // },
    //     },
     // }
    //  mounted() {
    //   this.containsObj();
    //  },
 
     created(){                                     
       var btnCount = 5;
       var requestNum = 6;
       for(let count= 0; count < btnCount; count++) {
           this.containsCashpoint.push(this.containsObj());
       }
       console.log(this.containsCashpoint);
       for( let request= 0; request < requestNum;request++ ){
         this.containsrequests.push(this.requests());
       }
       console.log(this.containsrequests);
    },

      
      methods: {
        htmlTagsError,
        requiredError,
        inputError,
        numericError,
        maxValueError,
        maxRecordsError,
        minValueError,

        /////////////////////////////
        containsObj(){

            return {
            
            otc:{
                patientName:"",
                complaintText: "",
                deleteComplaint:"",
                complaints:[],
                payingMethod:"",
                totalDiscount:{
                  value:"",
                  selection:""
                },
                vat:"",
                preparation:[],
            },
         /////////////////////// 
            rx:{
                patientName:'',
                complaints:[],
                payingMethod:'',
                totalDiscount:{
                  value:"",
                  selection:""
                },
                vat:'',
                preparation:[],
            },
             cc:{
                patientName:'',
                complaints:[],
                payingMethod:'',
                totalDiscount:{
                  value:"",
                  selection:""
                },
                vat:'',
                preparation:[],
            },
            ins:{
             patientName:'',
             complaints:[],
             payingMethod:'',
             totalDiscount:{
               value:"",
               selection:""
             },
             vat:'',
             preparation:[],
            }
            };
        },
        requests(){
            return{
                   
                    img:"",
                    name:'Hossam El-Bokhary Pharmacy',
                    date:' 13/3/2023',
                    diagnosis:{
                        icd:'14245',
                        name:"Gout"
                    },
                    rx:[
                       {
                        DrugName:'New York',
                        Dose:'test1',
                        Frequency:'test1',
                        Period:'test1',
                        Route :'test1',
                        Comment:'test1',
                        remaining:'test1',
                       } ,     
                       {
                        DrugName:'Landon',
                        Dose:'test2',
                        Frequency:'test2',
                        Period:'test2',
                        Route :'test2',
                        Comment:'test2',
                        remaining:'test2',
                       }, 
                       {
                        DrugName:'Landon',
                        Dose:'test3',
                        Frequency:'test3',
                        Period:'test3',
                        Route :'test3',
                        Comment:'test3',
                        remaining:'test3',
                       } 
                    ],
            }
        },

        addComplaint() {
            if(this.containsCashpoint[this.activeNum].otc.complaintText.length > 0){
                this.containsCashpoint[this.activeNum].otc.complaints.push(this.containsCashpoint[this.activeNum].otc.complaintText) ;
                this.containsCashpoint[this.activeNum].otc.complaintText="";
            }
         },
        removeResult(index){
            this.containsCashpoint[this.activeNum].otc.deleteComplaint = index ;
            this.containsCashpoint[this.activeNum].otc.complaints.splice(this.containsCashpoint[this.activeNum].otc.deleteComplaint, 1);
         },
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
        /////////////////////////
        addRow(){
            this.$v.rowToAdd.$touch();
            if(! this.$v.rowToAdd.$invalid ){
                let cashpoint = cloneDeep(this.rowToAdd );
                this.containsCashpoint[this.activeNum].otc.preparation.push(cashpoint);
                this.resetForm();
                console.log(this.containsCashpoint); 
                console.log(this.activeNum);
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
            this.$v.rowToEdit.$touch();
            if(! this.$v.rowToEdit.$invalid ){
                let cashpoint = cloneDeep(this.rowToEdit );
                this.containsCashpoint[this.activeNum].otc.preparation.splice(this.indexToEdit,1,cashpoint);
                this.closeEditDialog();
            }
      
        },
          ////////////////////////
        openDeleteDialog(index) {
            this.displayDeleteDialog = true;
            this.indexToDelete =index;
        },
        closeDeleteDialog() {
            this.displayDeleteDialog = false;
            this.indexToDelete =null;
        },
        deleteRow(){  
            this.containsCashpoint[this.activeNum].otc.preparation.splice(this.indexToDelete,1);
            this.closeDeleteDialog();
        },
        //////////////////////////////////
        openPosition(position) {
            this.position = position;
            this.displayPosition = true;
        },
        openDialog(){
            this.showDialog=true;
        },
        hideDialog(){
            this.showDialog=false;
        },
        openDetails(request){
         this.requestDetails=request
         this.showDetails=true;
         this.showDialog=false;
        },
        hideALL(){
            this.showDialog=false;
            this.showDetails=false;
        },
        hideDetails(){
            this.showDialog=true;
            this.showDetails=false;
        }
     }

}


</script>

<style lang="scss" scoped>
@media (min-width: 1390px) and (max-width: 1750px) {
  .edit-media {
    min-width: 100%;
  }
}
@media (min-width: 280px) and (max-width:486px) {
    .hidden-element {
      display: none;
    }
}
.gradient{
    background-image: linear-gradient(90deg, #56C596 0%, white 100%);
}
.custom-vertical-btn{
    height: -webkit-fill-available;
    bottom: 5px;
    left:5px;
    padding:8px -6px ;

}
 .vertical-button {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    padding: revert;
    border-radius: 1.5rem;
    margin: -3px -6px;
}
.border-radius{
    border-radius: 5rem;
}
.container-d {
    z-index: 99999;
    background-color: #f0f0f5;
    border-radius: 1.5rem;
}

.edit-margin{
    margin-top: -7px;
}
 .custom-placeholder::placeholder { 
  color: white;
  opacity: 1; 
}

.custom-rounded{
    border-radius: 20px;
}
.custom-size{
    height: max-content;
}
.custom-chip{
    background: color #1fd61f; 
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
      .rtl .vertical-button{
        margin: -3px -17px !important;
      }
      .p-component:disabled {
          opacity: 1.5;
          padding: 0px 8px;

      }

</style>