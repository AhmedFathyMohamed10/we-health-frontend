<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :min-width="'80'"
      :max-width="'100'"
    >
      <slot></slot>
      <div class="row" v-if="error">
        <div class="col-12">
          <div class="errors" v-if="typeof error === 'object'">
            <Message
              severity="error"
              v-for="(value, key) in error"
              :key="key"
              :closable="false"
            >
              <span v-if="typeof value === 'string'">{{ value }}</span>
              <span v-else>{{ key }} : {{ value[0] }}</span>
            </Message>
          </div>
        </div>
      </div>
      <!-- <Avatar image="/assets/1.jpg" /> -->
        <Base>
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.client.label") }}</label>
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.form.client.$error }" >
                        <Avatar :image="require('@/assets/9.jpg')" class=" mr-1" shape="circle"/>
                      </span> 
                      <!-- <i class="mdi mdi-pill"></i> -->
                      
                      <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                        <i class="pi" :class="[typeof form.client === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                        <AutoComplete
                          v-model="form.client"
                          :suggestions="clientParams.suggestions"
                          :class="{ 'p-invalid': $v.form.client.$error }"
                          field="name_ar"
                          :placeholder="$t('form.client.placeholder')"
                          @complete="searchClient($event, clientParams)"
                          :forceSelection="true" 
                          class="w-100"
                          @item-select="setNameClient"
                        />
                      </span>      
                    </div>
                    <div class="error">
                      <small class="p-invalid" v-if=" $v.form.client.$error && !$v.form.client.required">
                        {{ requiredError($t("form.client.label")) }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.employee.label") }}</label>
                    <div class="p-inputgroup">
                      <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.form.employee.$error }" >
                        <i class="mdi mdi-pill"></i>
                      </span>
                      <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                        <i class="pi" :class="[typeof form.employee === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                        <AutoComplete
                          v-model="form.employee"
                          :suggestions="employeeParams.suggestions"
                          :class="{ 'p-invalid': $v.form.employee.$error }"
                          field="name"
                          :placeholder="$t('form.employee.placeholder')"
                          @complete="searchEmployee($event, employeeParams)"
                          :forceSelection="true" 
                          class="w-100"
                          @item-select="setNameCasher"
                        />
                      </span> 
                    </div>
                    <div class="error">
                      <!-- <small class="p-invalid" v-if=" $v.form.employee.$error && !$v.form.employee.validator">
                        {{ inputError($t("form.employee.label")) }}
                      </small> -->
                      <small class="p-invalid" v-if=" $v.form.employee.$error && !$v.form.employee.required">
                        {{ requiredError($t("form.employee.label")) }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="row">
                <div class="col-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{ $t("form.dateAndTime.label") }}</label>
                    <InputGroupWrapper>
                      <Calendar 
                        v-model="form.date" 
                        :showIcon="true" 
                        dateFormat="yy-mm-dd"
                        :placeholder="$t('form.date.placeholder')" 
                        :class="{'p-invalid': $v.form.date.$error,}"
                        class="custom-input-date"
                        />
                        <Calendar 
                        :timeOnly="true" hourFormat="24"
                        v-model="form.time" 
                        :showSeconds="true" 
                        :showIcon="true" 
                        :placeholder="$t('form.time.placeholder')" 
                        class="custom-input-time"
                        :class="{'p-invalid': $v.form.time.$error,}"
                        />
                    </InputGroupWrapper>
                    <!-- <InputText v-model.trim="item.value" type="number" min="0" @input="index_of_pricing(index)"
                      :placeholder="$t('input.value.placeholder')" />
                    <InputText type="number" v-model="item.profitRatio" :placeholder="$t('pricing.profitRatio.label')"
                      @input="index_of_pricing(index)" class="custom-group" /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Base>
        <Base class="my-0">
          <div class="d-flex justify-content-between flex-wrap ">
            <div class="d-flex gap-2 flex-wrap">
              <div>
                <Base>
                  <div class="d-flex justify-content-between gap-1">  
                    <label class="mb-0 fw-semibold">{{$t('purchase.key.currentBalance')}}</label>
                    <label class="mb-0 fw-semibold">222</label>
                  </div>
                </Base>
              </div>
              <div>
                <Base>
                  <div class="d-flex justify-content-between gap-1">  
                    <label class="mb-0 fw-semibold">{{$t('purchase.key.previousBalance')}}</label>
                    <label class="mb-0 fw-semibold">00.1</label>
                  </div>
                </Base>
              </div>
              <div>
                <Base>
                  <div class="d-flex justify-content-between gap-1">  
                      <label class="mb-0 fw-semibold">{{$t('purchase.key.receiptBalance')}}</label>
                      <label class="mb-0 fw-semibold">0001</label>
                  </div>
                </Base>
              </div>
            </div>
            <div class="d-flex align-items-center">
              <div class="field ">
                <InputNumber id="horizontal" v-model="rowToAdd.quantity" showButtons buttonLayout="horizontal" :step="1"
                  decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success"
                  incrementButtonIcon="fa-solid fa-caret-right"
                  decrementButtonIcon="fa-solid fa-caret-left" />
            </div>
            </div>
          </div>
        </Base>
        <Base :title="$t('purchase.details')" icon="fa-solid fa-layer-group" :showAction="true">
          <template #custom-header>
            <i class="fa-solid fa-puzzle-piece"></i>
          </template>
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.item.label") }}</label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.rowToAdd.item.$error }" >
                    <i class="mdi mdi-pill"></i>
                  </span>
                  <span :class="[locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',]">
                    <i class="pi" :class="[typeof form.trainee === 'string' ? 'pi-spin pi-spinner' : 'pi-search']"></i>
                    <AutoComplete
                      v-model="rowToAdd.item"
                      :suggestions="productParams.suggestions"
                      :class="{ 'p-invalid': $v.rowToAdd.item.$error }"
                      field="name_en"
                      :placeholder="$t('form.item.placeholder')"
                      @complete="searchProduct($event, productParams)"
                      :forceSelection="true" 
                      class="w-100"
                    />
                  </span>              
                </div>
                <div class="error">
                  <small class="p-invalid" v-if=" $v.rowToAdd.item.$error && !$v.rowToAdd.item.required">
                    {{ requiredError($t("form.item.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.expiration_date.label")
                }}</label>
                <Calendar 
                  v-model="rowToAdd.expiration_date" 
                  :showIcon="true" dateFormat="yy-mm-dd"
                  :placeholder="$t('form.expiration_date.placeholder')" 
                  :class="{'p-invalid': $v.rowToAdd.expiration_date.$error,}"
                  />
                  <div v-if="!$v.rowToAdd.expiration_date.required && $v.rowToAdd.expiration_date.$error" class="p-error">
                    {{ requiredError($t("form.expiration_date.label")) }}
                  </div>
                  <div class="p-error" v-if="$v.rowToAdd.expiration_date.$error && !$v.rowToAdd.expiration_date.validDateTime">
                    {{ timeDateError($t()) }}
                  </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.unit.label") }}</label>
                <div class="p-inputgroup">
                  <span class="p-inputgroup-addon" :class="{ 'p-invalid': $v.rowToAdd.unit.$error }" >
                    <i class="mdi mdi-pill"></i>
                  </span>
                  <Dropdown
                    v-model="rowToAdd.unit"
                    :options="unitOptions"
                    optionLabel="unit" 
                    :placeholder="$t('form.unit.placeholder')" 
                    :class="{'p-invalid': $v.rowToAdd.unit.$error,}"
                  />
                </div>
                <div class="error">
                  <!-- <small class="p-invalid" v-if=" $v.rowToAdd.unit.$error && !$v.rowToAdd.unit.validator">
                    {{ inputError($t("form.unit.label")) }}
                  </small> -->
                  <small class="p-invalid" v-if=" $v.rowToAdd.unit.$error && !$v.rowToAdd.unit.required">
                    {{ requiredError($t("form.unit.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.unit_price.label") }}</label>
                
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon"><i class="mdi mdi-pill"></i></span>
                    <InputText 
                        type="number" 
                        class="form-control" 
                        v-model="rowToAdd.unit_price"
                        :placeholder="$t('form.unit_price.placeholder')"
                        :class="{'p-invalid':$v.rowToAdd.unit_price.$error}"
                    />
                </div>

                <div class="p-error" v-if="!$v.rowToAdd.unit_price.decimal && $v.rowToAdd.unit_price.$invalid">
                    {{ inputError($t("form.equivalency.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.rowToAdd.unit_price.minValue && $v.rowToAdd.unit_price.$invalid">
                  {{minValueError($t("form.equivalency.label"), $v.rowToAdd.unit_price.$params.minValue.min )}}
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.quantity.label") }}</label>
                
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon"><i class="fa-solid fa-cart-plus"></i></span>
                    <InputText 
                        type="number" 
                        class="form-control" 
                        v-model="rowToAdd.quantity"
                        :placeholder="$t('form.quantity.placeholder')"
                        :class="{'p-invalid':$v.rowToAdd.quantity.$error}"
                    />
                </div>
                <div class="p-error" v-if="!$v.rowToAdd.quantity.decimal && $v.rowToAdd.quantity.$invalid">
                    {{ inputError($t("form.quantity.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.rowToAdd.quantity.minValue && $v.rowToAdd.quantity.$invalid">
                  {{minValueError($t("form.quantity.label"), $v.rowToAdd.quantity.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.rowToAdd.quantity.maxValue &&$v.rowToAdd.quantity.$invalid" >
                  {{maxValueError($t("form.quantity.label"),$v.rowToAdd.quantity.$params.maxValue.max)}}
                </div> 
              </div>
            </div>
            
            <div class="col-lg-2 col-sm-6 col-md-4">
              <div class="form-group">
                <label for="" class="form-label">{{ $t("form.total.label") }}</label>
                
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon"><i class="fa-solid fa-cart-plus"></i></span>
                    <InputText 
                        type="number" 
                        class="form-control" 
                        v-model="rowToAdd.total"
                        :placeholder="$t('form.total.placeholder')"
                        :class="{'p-invalid':$v.rowToAdd.total.$error}"
                    />
                </div>
                <div class="p-error" v-if="!$v.rowToAdd.total.decimal && $v.rowToAdd.total.$invalid">
                    {{ inputError($t("form.total.label"))}}
                </div> 
                <div class="p-error" v-else-if="!$v.rowToAdd.total.minValue && $v.rowToAdd.total.$invalid">
                  {{minValueError($t("form.total.label"), $v.rowToAdd.total.$params.minValue.min )}}
                </div>
                <div class="p-error" v-else-if="!$v.rowToAdd.total.maxValue &&$v.rowToAdd.total.$invalid" >
                  {{maxValueError($t("form.total.label"),$v.rowToAdd.total.$params.maxValue.max)}}
                </div> 
              </div>
            </div>
            <div class="col-md-8 col-xxl-4">
              <div class="form-group">
                  <label class="form-label">{{$t('form.note.label')}}</label>
                  <div class="p-inputgroup">
                      <span class="p-inputgroup-addon">
                          <i class="mdi mdi-pill"></i>
                      </span>
                      <InputText 
                          type="text" 
                          class="form-control" 
                          v-model="rowToAdd.note"
                          :placeholder="$t('form.note.placeholder')"
                          :class="{'p-invalid':$v.rowToAdd.note.$error}"
                      />
                  </div>
                  <div 
                      v-if="$v.rowToAdd.note.$error && !$v.rowToAdd.note.notContainsHtmlTags" 
                      class="text-danger d-block"
                      >{{htmlTagsError($t('form.note.label'))}}
                  </div>
                  <div 
                      v-if="! $v.rowToAdd.note.minLength &&  $v.rowToAdd.note.$error" 
                      class="text-danger d-block"
                      >{{minLengthError($t('form.note.label'), $v.rowToAdd.note.$params.minLength.min)}}
                  </div>
                  <div 
                      v-if="! $v.rowToAdd.note.maxLength &&  $v.rowToAdd.note.$error" 
                      class="text-danger d-block">{{maxLengthError($t('form.note.label'), $v.rowToAdd.note.$params.maxLength.max)}}
                  </div> 
              </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-md-4 align-self-end">
              <div class="custom-footer d-flex justify-content-end">
                <Button 
                  :label="isUpdatingItem ? $t('btns.save') : $t('btns.add')" 
                  :icon="isUpdatingItem ? 'pi pi-check' : 'pi pi-plus'"
                  :iconPos="locale == 'ar' ? 'right' : 'left'" 
                  @click="isUpdatingItem ? save_edit() : addItems()" 
                />
                  <!-- <Button class="" :label="$t('btns.add')" icon="pi pi-plus" :iconPos="locale == 'ar' ? 'right' : 'left'" @click="addItems"/>  -->
              </div>
            </div>
          </div>
        </Base>
        <Base v-if="form.invoice_items.length > 0">
          <div class="row">
            <div v-if="form.invoice_items.length > 0" class="table-responsive">
              <table class="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">{{ $t("form.item.labelHead") }}</th>
                    <th scope="col">{{ $t("form.expiration_date.label") }}</th>
                    <th scope="col">{{ $t("form.unit.label") }}</th>
                    <th scope="col">{{ $t("form.unit_price.label") }}</th>
                    <th scope="col">{{ $t("form.quantity.label") }}</th>
                    <th scope="col">{{ $t("table.thead.controls") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in form.invoice_items" :key="index">
                    
                    <td class="align-middle fw-bold"><span>{{ item.item.name_en }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.expiration_date }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.unit.unit }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.unit_price }}</span></td>
                    <td class="align-middle fw-bold"><span>{{ item.quantity }}</span></td>
                    <td class="align-middle">
                      <div class="d-flex justify-content-center align-items-center">
                        <EditButton @edit="openEditItemInvoice(item, index)"></EditButton>
                        <DeleteButton  @delete="openDeleteRow(item, index)"></DeleteButton>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Base>
        <Base :title="$t('purchase.invoice')" :showAction="true">
          <template #custom-header>
            <span>delivery</span>
            <InputSwitch v-model="form.delivery" class="h-5"/>
          </template>
          <div class="row">
            <div class="col-md-4">
              <Base>
                <div class="row">
                  <div class="col-md-12">
                    <div class="table-responsive">
                      <table class="table table-borderless text-nowrap mb-0">
                        <tbody>
                          <tr v-for="(value, key) in recordDetails" :key="key">
                            <td class="p-1">
                              {{ $t(`purchase.key.${key}`) }}:
                            </td>
                            <td class="p-1">
                              <span v-if="!value" class="text-muted">------</span>
                              <span v-if="key != 'client_name' && key != 'casher_name'" >{{ value }}</span >
                              <span v-if="key == 'client_name' || key == 'casher_name'">
                                <div class="d-flex align-items-center justify-content-start " v-if="value">
                                  <Avatar :image="require('@/assets/9.jpg')" class=" mr-1" shape="circle"/>
                                  <span class="fw-bold text-success  mx-2">{{ value }} </span>
                                </div> 
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Base>
              <Base>
                <div class="row">
                  <div class="col-6">
                    <label class="mb-0">{{$t('purchase.key.items_no')}} :</label>
                  </div>
                  <div class="col-6 d-flex ">
                    <label class="mb-0">{{recordDetailsMore.items_no}}</label>
                  </div>
                </div>
              </Base>

              <Base>
                <div class="row">
                  <div class="col-6">
                    <label class="mb-0">{{$t('purchase.key.sum')}} :</label>
                  </div>
                  <div class="col-6 d-flex ">
                    <label class="mb-0">{{recordDetailsMore.sum}}</label>
                  </div>
                </div>
              </Base>
              <Base>
                <div class="row">
                  <div class="col-6">
                    <label class="mb-0">{{$t('purchase.key.vat')}} :</label>
                  </div>
                  <div class="col-6 d-flex ">
                    <label class="mb-0">{{recordDetailsMore.vat}}</label>
                  </div>
                </div>
              </Base>
              <Base >
                <div class="row">
                  <div class="col-6">
                    <label class="mb-0">{{$t('purchase.key.total_discount')}} :</label>
                  </div>
                  <div class="col-6 d-flex ">
                    <label class="mb-0">{{recordDetailsMore.total_discount}}</label>
                  </div>
                </div>
              </Base>
              <Base>
                <div class="row ">
                  <div class="col-6">
                    <label class="mb-0">{{$t('purchase.key.total_amount')}} :</label>
                  </div>
                  <div class="col-6 d-flex ">
                    <label class="mb-0">{{recordDetailsMore.total_amount}}</label>
                  </div>
                </div>
              </Base>
            </div>
            <!-- <Divider class="vertical"></Divider> -->
            <div  class="col-md-8">
              <Base>
                <div class="row">
                  <!-- payment_method -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.payment_method.label") }}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="mdi mdi-pill"></i>
                        </span>
                        <Dropdown
                          v-model="form.payment_method"
                          :options="paymentMethodOptions"
                          optionLabel="name_en" 
                          :placeholder="$t('form.payment_method.placeholder')" 
                        />
                      </div>
                      <div class="error">
                        <small class="p-invalid" v-if=" $v.form.payment_method.$error && !$v.form.payment_method.required">
                          {{ requiredError($t("form.payment_method.label")) }}
                        </small>
                      </div>
                    </div>
                  </div>
                  <!-- amount -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.amount.label") }}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon"><i class="mdi mdi-pill"></i></span>
                        <InputText 
                          type="number" 
                          class="form-control" 
                          v-model="form.amount"
                          :placeholder="$t('form.amount.placeholder')"
                          :class="{'p-invalid':$v.form.amount.$error}"
                        />
                      </div>
                      <div class="p-error" v-if="!$v.form.amount.decimal && $v.form.amount.$invalid">
                          {{ inputError($t("form.equivalency.label"))}}
                      </div> 
                      <div class="p-error" v-else-if="!$v.form.amount.minValue && $v.form.amount.$invalid">
                        {{minValueError($t("form.equivalency.label"), $v.form.amount.$params.minValue.min )}}
                      </div>
                      <div class="p-error" v-else-if="!$v.form.amount.maxValue &&$v.form.amount.$invalid" >
                        {{maxValueError($t("form.amount.label"),$v.form.amount.$params.maxValue.max)}}
                      </div> 
                    </div>
                  </div>
                  <!-- discount -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.discount.label") }}</label>
                      
                      <div class="p-inputgroup">
                          <span class="p-inputgroup-addon"><i class="mdi mdi-pill"></i></span>
                          <InputGroupWrapper>
                            <InputText 
                                v-model.trim="form.discount" 
                                type="number" 
                                :placeholder="$t('input.value.placeholder')" 
                                :class="{'p-invalid': $v.form.discount.$error}"
                                class="custom-input-group w-40 form-control" 
                                />
                                <Dropdown
                                  v-model="form.discount"
                                  :placeholder="$t('input.selection.placeholder')"
                                  :options="discountOptions"
                                  :optionLabel="locale" 
                                  optionValue="id" 
                                  class="w-40"
                                  />
                          </InputGroupWrapper>
                      </div>
                      <div class="p-error" v-if="!$v.form.discount.decimal && $v.form.discount.$invalid">
                          {{ inputError($t("form.equivalency.label"))}}
                      </div> 
                      <div class="p-error" v-else-if="!$v.form.discount.minValue && $v.form.discount.$invalid">
                        {{minValueError($t("form.equivalency.label"), $v.form.discount.$params.minValue.min )}}
                      </div>
                    </div>
                  </div>
                  <!-- Vat -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.vat.label") }}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon"><i class="mdi mdi-pill"></i></span>
                        <InputText 
                        type="number" 
                        class="form-control rounded-0" 
                        v-model="form.vat"
                        :placeholder="$t('form.vat.placeholder')"
                        :class="{'p-invalid':$v.form.vat.$error}"
                        />
                        <span class="p-inputgroup-addon btn-success-gradient"><i class="text-white fa-thin fa-percent"></i></span>

                      </div>
                      <div class="p-error" v-if="!$v.form.vat.decimal && $v.form.vat.$invalid">
                          {{ inputError($t("form.vat.label"))}}
                      </div> 
                      <div class="p-error" v-else-if="!$v.form.vat.minValue && $v.form.vat.$invalid">
                        {{minValueError($t("form.vat.label"), $v.form.vat.$params.minValue.min )}}
                      </div>
                      <div class="p-error" v-else-if="!$v.form.vat.maxValue &&$v.form.vat.$invalid" >
                        {{maxValueError($t("form.vat.label"),$v.form.vat.$params.maxValue.max)}}
                      </div> 
                    </div>
                  </div>
                  <!-- total -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.total.label") }}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon"><i class="mdi mdi-pill"></i></span>
                        <InputText 
                          type="number" 
                          class="form-control" 
                          v-model="form.total"
                          :placeholder="$t('form.total.placeholder')"
                          :class="{'p-invalid':$v.form.total.$error}"
                        />
                      </div>
                      <div class="p-error" v-if="!$v.form.total.decimal && $v.form.total.$invalid">
                          {{ inputError($t("form.total.label"))}}
                      </div> 
                      <div class="p-error" v-else-if="!$v.form.total.minValue && $v.form.total.$invalid">
                        {{minValueError($t("form.total.label"), $v.form.total.$params.minValue.min )}}
                      </div>
                    </div>
                  </div>
                  <!-- paid -->
                  <div class="col-lg-4 col-sm-6">
                    <div class="form-group">
                      <label for="" class="form-label">{{ $t("form.paid.label") }}</label>
                      <div class="p-inputgroup">
                        <span class="p-inputgroup-addon"><i class="fa-solid fa-sack-dollar"></i></span>
                        <InputText 
                          type="number" 
                          class="form-control" 
                          v-model="form.paid"
                          :placeholder="$t('form.paid.placeholder')"
                          :class="{'p-invalid':$v.form.paid.$error}"
                        />
                      </div>
                      <div class="p-error" v-if="!$v.form.paid.decimal && $v.form.paid.$invalid">
                          {{ inputError($t("form.paid.label"))}}
                      </div> 
                      <div class="p-error" v-else-if="!$v.form.paid.minValue && $v.form.paid.$invalid">
                        {{minValueError($t("form.paid.label"), $v.form.paid.$params.minValue.min )}}
                      </div>
                    </div>
                  </div>
                  <!-- remaining -->
                  <div class="col-lg-4 col-sm-6 mt-4 ">
                      <Chip label="Action" class="bg-success-gradient custom-chip">
                        <span>
                          <Chip :label="$t('purchase.key.remaining')" class="bg-success text-secondary" />
                        </span>
                        <label class="mb-0 fw-semibold text-white">{{$t('purchase.key.remaining')}}</label>
                      </Chip>
                      <!-- <Base>
                        <div class="d-flex justify-content-between gap-1">  
                        </div>
                      </Base> -->
                  </div>
                  <!-- description -->
                  <div class="col-md-12">
                    <div class="form-group">
                        <label class="form-label">{{$t('form.description.label')}}</label>
                        <div class="p-inputgroup">
                            <span class="p-inputgroup-addon">
                                <i class="mdi mdi-pill"></i>
                            </span>
                            <InputText 
                                type="text" 
                                class="form-control" 
                                v-model="form.description"
                                :placeholder="$t('form.description.placeholder')"
                                :class="{'p-invalid':$v.form.description.$error}"
                            />
                        </div>
                        <div 
                            v-if="$v.form.description.$error && !$v.form.description.notContainsHtmlTags" 
                            class="text-danger d-block"
                            >{{htmlTagsError($t('form.description.label'))}}
                        </div>
                        <div 
                            v-if="! $v.form.description.minLength &&  $v.form.description.$error" 
                            class="text-danger d-block"
                            >{{minLengthError($t('form.description.label'), $v.form.description.$params.minLength.min)}}
                        </div>
                        <div 
                            v-if="! $v.form.description.maxLength &&  $v.form.description.$error" 
                            class="text-danger d-block">{{maxLengthError($t('form.description.label'), $v.form.description.$params.maxLength.max)}}
                        </div> 
                    </div>
                  </div>
                </div>
              </Base>
            </div>
          </div>
        </Base>
    </EditDialog>
    <DeleteDialog :display="displayDeleteDialog" @cancel="closeDeleteDialog" @delete="deleteRow"></DeleteDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/invoices/purchase.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import Base from "@/components/global/utilities/Base.vue";
import productSuggestions from "@/mixins/erp_v2/items/productSuggestions.js";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import clientSuggestions from "@/mixins/erp_v2/clients/clientSuggestions.js";
import InputGroupWrapper from '@/components/global/UI/inputs/InputGroupWrapper';
import { required, minLength, maxLength, decimal, minValue, maxValue} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";
import {
  htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    minValueError,
    inputError,
    timeDateError,
} from "@/validation/errors.js";
import toast from "@/mixins/global/toast";
import InputSwitch from 'primevue/inputswitch';
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import EditButton from "@/components/global/utilities/EditButton.vue";
import DeleteDialog from "@/components/global/utilities/DeleteDialog.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  mixins: [toast, productSuggestions, employeeSuggestions, clientSuggestions],
  components: {
    EditDialog,
    Base,
    InputGroupWrapper,
    InputSwitch,
    DeleteButton,
    EditButton,
    DeleteDialog,
  },
  props: {
    displayForm: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isUpdating: {
      type: Boolean,
      required: true,
      default() {
        return false;
      },
    },
    isLoading: {
      type: Boolean,
      default() {
        return false;
      },
    },
    value: {
      type: Object,
      required: true,
    },
    error: {
      type: Object,
    },
    header: {
      type: String,
    },
  },
  watch: {
    value() {
      this.form = this.value;
    },
  },
  data() {
    return {
      paymentMethodOptions:[
        { name: "Debit", en: "اجل", id: 1 },
        { name: "Cash", en: "كاش", id: 2 },
        { name: "Both", en: "كلاهما", id: 3 },
      ],
      isUpdatingItem: false,
      displayDeleteDialog: false,
      index_of_edit_row: null,
      form: this.value,
      rowToAdd:{
        item:null,
        unit:null,
        unit_price:null,
        quantity:null,
        total:null,
        expiration_date:null,
        note:"",
      },
      discountOptions: [
        { en: "%", ar: "%", id: 1 },
        { en: "EGP", ar: "EGP", id: 2 },
        { en: "$", ar: "$", id: 3 },
        ],
      recordDetails: {
          "invoice_no": "#144644744",
          "date":"22-25-2800",
          "client_name":"",
          "casher_name":""
        },
        recordDetailsMore:{
          "items_no":25,
          "sum":25,
          "vat":25,
          "total_discount":25,
          "total_amount":25,
        }
    };
  },
  computed: {
    unitOptions(){
      if (typeof this.rowToAdd.item === 'object' && this.rowToAdd.item !== null){
        if (this.rowToAdd.item.pricing_and_unit.length > 0){
          return this.rowToAdd.item.pricing_and_unit
        }
        else return [];
      }
      else return [];
    }
  },
  validations: {
    form: {
            client:{required},
            employee:{required},
            date:{},
            time:{},
            payment_method:{},
            amount:{},
            discount:{},
            vat:{},
            total:{},
            paid:{},
            remaining:{},
            description:{
              minLength: minLength(4),
              maxLength: maxLength(255),
              notContainsHtmlTags: (value) => {
                return notContainsHtmlTags(value);
              },
            },
            delivery:{},
    },
    rowToAdd: {
      item: {
        required,
      },
      unit: {
        required,
      },
      quantity:{
        minValue:minValue(1),
        maxValue:maxValue(220),
        decimal,
    },
      unit_price:{
        minValue:minValue(1),
        decimal,
    },
    total:{
        minValue:minValue(1),
        decimal,
    },
    expiration_date:{
      required,
      validDateTime: (value) => {
        if (value == null || value == "") {
          return true;
        } else {
          return moment(value, "YYYY-MM-DD", true).isValid();
        }
      }
    },
    note:{
      minLength: minLength(4),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
    },

    },
  },
  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    minValueError,
    inputError,
    timeDateError,
    ...mapActions("erp_v2/invoices/purchase", [
      "setDeleteInvoiceItem",
    ]),
    saveForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.$emit("cancel");
      this.$v.form.$reset();
    },

    resetForm() {
      this.rowToAdd = {
        item:null,
        unit:null,
        unit_price:null,
        quantity:null,
        total:null,
        expiration_date:null,
        note:"",
      };
      this.$v.rowToAdd.$reset();
    },
    addItems(){
      this.$v.rowToAdd.$touch();
      if (this.rowToAdd.expiration_date) {
        this.rowToAdd.expiration_date = this.$moment(this.rowToAdd.expiration_date).format("YYYY-MM-DD");
      }
      if (!this.$v.rowToAdd.$invalid) {
        this.form.invoice_items.push(this.rowToAdd);
        this.resetForm()
      }
    },

    openEditItemInvoice(data, index) {
      this.rowToAdd = data;
      this.index_of_edit_row = index;
      this.isUpdatingItem = true;
    },
    save_edit() {
      if (this.rowToAdd.expiration_date) {
        this.rowToAdd.expiration_date = this.$moment(this.rowToAdd.expiration_date).format("YYYY-MM-DD");
      }
      this.form.invoice_items[this.index_of_edit_row] = this.rowToAdd;
      // this.data_of_equivalent_to = this.form.invoice_items[this.form.length - 1].unit;
      this.isUpdatingItem = false;
      this.resetForm();
    },

    openDeleteRow(record, index) {
      this.displayDeleteDialog = true;
      this.indexToDelete = index;
      this.deleteRecord = record;
    },
    deleteRow() {
      this.form.invoice_items.splice(this.indexToDelete, 1);
      this.rowToAdd.equivalent_to_selection = this.deleteRecord.equivalent_to_selection
      // const unit_deleted = this.unitOptions.filter(item => item.id === this.deleteRecord.unit)
      this.deletedUnitArr = [];
      if ("id" in this.deleteRecord) {
        this.deletedUnitArr.push(this.deleteRecord);
        this.setDeleteInvoiceItem(this.deletedUnitArr);
      }
      this.closeDeleteDialog();
    },
    closeDeleteDialog() {
      this.displayDeleteDialog = false
      this.indexToDelete = null;
      this.deleteRecord = null;
    },

    setNameClient(){
      this.recordDetails.client_name = this.form.client.name;
    },
    setNameCasher(){
      this.recordDetails.casher_name = this.form.employee.name;
    }

  },
};
</script>
<style lang="scss" scoped>
.custom-input-group{
  border-radius: 0rem;
}
/deep/.p-chip{
    height: 36px;
    padding-left: 0rem;
    width: 100%;
}
/deep/.p-chip-text{
    padding: 1rem;
}
// .custom-chip{
//   opacity: 0.25;
// }
/deep/.p-input-icon-right .p-autocomplete-input {
    border-top-left-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}
</style>
