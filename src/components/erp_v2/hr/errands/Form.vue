<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :isLoading="isLoading"
      :header="header"
      :min-width="'250'"
      :max-width="'500'"
      :icon="'pi pi-calendar'"
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
      <Base>
        <div class="d-flex flex-wrap justify-content-between">
          <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" />
        </div>
      </Base>
      <div class="row">
        <div class="col-md-4">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.name.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.name"
                  :placeholder="$t('form.name.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.name.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.name.required && $v.form.name.$error"
                  >
                    {{ requiredError($t("form.name.label")) }}
                  </small>
                  <small
                    class="p-invalid"
                    v-if="!$v.form.name.minLength && $v.form.name.$error"
                  >
                    {{
                      minLengthError(
                        $t("form.name.label"),
                        $v.form.name.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="!$v.form.name.maxLength && $v.form.name.$error"
                  >
                    {{
                      maxLengthError(
                        $t("form.name.label"),
                        $v.form.name.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.name.notContainsHtmlTags && $v.form.name.$error
                    "
                  >
                    {{ htmlTagsError($t("form.name.label")) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>

        <div class="col-md-4">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.employee.label")
                }}</label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      typeof form.employee === 'string'
                        ? 'pi-spin pi-spinner'
                        : 'pi-search',
                    ]"
                  ></i>
                  <AutoComplete
                    v-model="form.employee"
                    :suggestions="employeeParams.suggestions"
                    field="name"
                    :placeholder="$t('form.employee.placeholder')"
                    @complete="searchEmployee($event, employeeParams)"
                    :forceSelection="true"
                    :class="{ 'p-invalid': $v.form.employee.$error }"
                  />
                </span>
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.employee.required && $v.form.employee.$error"
                  >
                    {{ requiredError($t("form.employee.label")) }}
                  </small>
                  
                  
                 
                 
                  <!-- <small
                class="p-invalid"
                v-else-if="
                  !$v.form.employee.notContainsHtmlTags &&
                  $v.form.employee.$error
                "
              >
                {{ htmlTagsError($t("form.employee.label")) }}
              </small> -->
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-4">
          <Base>
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.from_date.label")
                  }}</label>
                  <Calendar
                    v-model="form.from_date"
                    :showIcon="true"
                    dateFormat="yy-mm-dd"
                    :placeholder="$t('form.from_date.placeholder')"
                    :class="{ 'p-invalid': $v.form.from_date.$error }"
                  />
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="!$v.form.from_date.required && $v.form.from_date.$error"
                    >
                      {{ requiredError($t("form.from_date.label")) }}
                    </small>
                  
                    <small
                    class="p-invalid"
                    v-if="
                    $v.form.from_date.$error && !$v.form.from_date.validDateTime
                  "
                  >
                  {{ timeDateError($t()) }}
                  </small>
                   
                   
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.to_date.label")
                  }}</label>
                  <Calendar
                    v-model="form.to_date"
                    :showIcon="true"
                    dateFormat="yy-mm-dd"
                    :placeholder="$t('form.to_date.placeholder')"
                    :class="{ 'p-invalid': $v.form.to_date.$error }"
                  />
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="!$v.form.to_date.required && $v.form.to_date.$error"
                    >
                      {{ requiredError($t("form.to_date.label")) }}
                    </small>
                  
                    <small
                    class="p-invalid"
                    v-if="
                    $v.form.to_date.$error && !$v.form.to_date.validDateTime
                  "
                  >
                  {{ timeDateError($t()) }}
                  </small>
                   
                   
                  </div>
                </div>
              </div>
            </div>
          </Base>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.location.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.location"
                  :placeholder="$t('form.location.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.location.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.location.required && $v.form.location.$error"
                  >
                    {{ requiredError($t("form.location.label")) }}
                  </small>
                  <!-- <small
                    class="p-invalid"
                    v-if="
                      !$v.form.location.minLength && $v.form.location.$error
                    "
                  >
                    {{
                      minLengthError(
                        $t("form.location.label"),
                        $v.form.location.$params.minLength.min
                      )
                    }}
                  </small> -->
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.location.maxLength && $v.form.location.$error
                    "
                  >
                    {{
                      maxLengthError(
                        $t("form.location.label"),
                        $v.form.location.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.location.notContainsHtmlTags &&
                      $v.form.location.$error
                    "
                  >
                    {{ htmlTagsError($t("form.location.label")) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-4">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.location_name.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.location_name"
                  :placeholder="$t('form.location_name.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.location_name.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.location_name.required &&
                      $v.form.location_name.$error
                    "
                  >
                    {{ requiredError($t("form.location_name.label")) }}
                  </small>
                  <!-- <small
                    class="p-invalid"
                    v-if="
                      !$v.form.location_name.minLength &&
                      $v.form.location_name.$error
                    "
                  >
                    {{
                      minLengthError(
                        $t("form.location_name.label"),
                        $v.form.location_name.$params.minLength.min
                      )
                    }}
                  </small> -->
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.location_name.maxLength &&
                      $v.form.location_name.$error
                    "
                  >
                    {{
                      maxLengthError(
                        $t("form.location_name.label"),
                        $v.form.location_name.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.location_name.notContainsHtmlTags &&
                      $v.form.location_name.$error
                    "
                  >
                    {{ htmlTagsError($t("form.location_name.label")) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-md-4">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.result.label")
                }}</label>
                <input
                  type="text"
                  v-model="form.result"
                  :placeholder="$t('form.result.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.result.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.result.maxLength && $v.form.result.$error"
                  >
                    {{
                      maxLengthError(
                        $t("form.result.label"),
                        $v.form.result.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.result.notContainsHtmlTags &&
                      $v.form.result.$error
                    "
                  >
                    {{ htmlTagsError($t("form.result.label")) }}
                  </small>
                </div>
              </div>
            </div>
          </Base>
        </div>
      </div>
      <div>
        <Base
          :title="'Custody Information'"
          :icon="'pi pi-check-square'"
          :showBreadCrumb="false"
          :showToggleContent="false"
          :showFullScreen="false"
        >
          <div class="row">
            <div :class="gridClass">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.custody.label")
                }}</label>
                <Dropdown
                  v-model="type"
                  :options="custodyOptions"
                  optionValue="id"
                  optionLabel="name"
                  dataKey="id"
                  @change="resetVariables($event)"
                  :placeholder="$t('form.custody.placeholder')"
                />
                <!-- <div class="error">
                  <small
                    class="d-block text-danger"
                    v-if="!$v.type.required && $v.type.$error"
                  >
                    {{ requiredError($t("form.type.label")) }}
                  </small>
                </div>  -->
              </div>
            </div>
            <div :class="gridClass" v-if="type == 1 || type == 4">
              <div class="form-group" v-if="type == 1">
                <label for="" class="form-label">{{
                  $t(`form.assetsType.label`)
                }}</label>
                <Dropdown
                  v-model="assetsType"
                  :options="AssetsOptions"
                  :optionLabel="locale"
                  optionValue="id"
                  dataKey="id"
                  @change="resetData($event)"
                  :placeholder="$t('form.assetsType.placeholder')"
                  :class="{
                    'p-invalid': $v.assetsType.$error,
                  }"
                />
                <!-- <div class="error">
              <small
                class="p-invalid"
                v-if="!$v.form.employee.required && $v.form.employee.$error"
              >
                {{ requiredError($t("form.employee.label")) }}
              </small> -->
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.assetsType.required && $v.assetsType.$error"
                  >
                    {{ requiredError($t(`form.assetsType.label`)) }}
                  </small>
                </div>
                <!-- <MultiSelect
                  v-model="form.custody[selectType]"
                  :options="options[selectType]"
                  optionLabel="name "
                  optionValue="id"
                  dataKey="id"
                  ></MultiSelect> -->
                <!-- :class="{
                    'p-invalid': $v.form.custody[selectType].$error,
                  }"  -->

                <!-- <div class="error">
                <small
                  class="d-block text-danger"
                  v-if="!$v.form.custody[selectType].required && $v.form.custody[selectType].$error"
                >
                  {{ requiredError($t(`form.${selectType}.label`)) }}
                </small>
              </div> -->
              </div>
              <div class="form-group" v-if="type == 4">
                <label for="" class="form-label">{{
                  $t(`form.account.label`)
                }}</label>
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      typeof custody === 'string'
                        ? 'pi-spin pi-spinner'
                        : 'pi-search',
                    ]"
                  ></i>
                  <AutoComplete
                    v-model="custody"
                    :suggestions="custodyParams.suggestions"
                    :field="type == 4 ?'account_name_en' : 'name_en'"
                    :placeholder="$t('form.fixed.placeholder')"
                    @complete="searchCustody($event, searchUrl, assetsType)"
                    :forceSelection="true"
                    :class="{
                      'p-invalid': $v.custody.$error,
                    }"
                  />
                </span>
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.custody.required && $v.custody.$error"
                  >
                    {{ requiredError($t("form.custody.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div :class="gridClass" v-if="type != 4 && type">
              <div class="form-group">
                <label for="" class="form-label" v-if="type == 1">{{
                  $t(`form.${selectAssetType}.label`)
                }}</label>
                <label
                  for=""
                  class="form-label"
                  v-if="type == 2 || type == 3"
                  >{{ $t(`form.${selectType}.label`) }}</label
                >
                <span
                  :class="[
                    locale == 'ar' ? 'p-input-icon-left' : 'p-input-icon-right',
                  ]"
                >
                  <i
                    class="pi"
                    :class="[
                      typeof custody === 'string'
                        ? 'pi-spin pi-spinner'
                        : 'pi-search',
                    ]"
                  ></i>
                  <AutoComplete
                    v-model="custody"
                    :suggestions="custodyParams.suggestions"
                    field="name_en"
                    :placeholder="$t('form.fixed.placeholder')"
                    @complete="searchCustody($event, searchUrl, assetsType)"
                    @item-select="onSelection($event)"
                    :class="{
                      'p-invalid': $v.custody.$error,
                    }"
                  />
                </span>
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.custody.required && $v.custody.$error"
                  >
                    {{ requiredError($t("form.custody.label")) }}
                  </small>
                </div>
              </div>
            </div>
            <div :class="gridClass" v-if="type == 4">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.amount.label")
                }}</label>
                <InputNumber
                  v-model="cashToAdd.amount"
                  mode="currency"
                  currency="EGP"
                  locale="de-DE"
                />
              </div>
            </div>
            <div v-if="assetsType == 2 && type == 1">
              <div class="row">
                <div :class="gridClass">
                  <div class="form-group">
                    <label for="" class="form-label" v-if="type == 1">{{
                      $t(`form.unit.label`)
                    }}</label>
                    <Dropdown
                      v-model="itemToAdd.unit"
                      :placeholder="$t('form.unit.placeholder')"
                      :options="unitOptions"
                      optionLabel="name_en"
                      :class="{ 'p-invalid': $v.itemToAdd.unit.$error }"
                    />
                    <div class="error">
                      <small
                        class="p-invalid"
                        v-if="
                          !$v.itemToAdd.unit.required &&
                          $v.itemToAdd.unit.$error
                        "
                      >
                        {{ requiredError($t("form.unit.label")) }}
                      </small>
                    </div>
                  </div>
                </div>
                <div :class="gridClass">
                  <div class="col-md-12 col-lg-12 edit-media col-xxl-6">
                    <div class="form-group drug-amount">
                      <div
                        class="d-flex justify-content-between align-items-center"
                      >
                        <label class="form-label"
                          >{{ $t("form.itemAmount.label1") }}
                        </label>
                        <label class="form-label">{{
                          $t("form.itemAmount.label2")
                        }}</label>
                      </div>

                      <div class="p-inputgroup">
                        <span
                          class="p-inputgroup-addon bg-light"
                          :class="{
                            'p-invalid': $v.itemToAdd.itemAmount.$error,
                          }"
                        >
                          <i class="mdi mdi-pill"></i>
                        </span>
                        <div
                          class="w-60 d-flex justify-content-center align-items-center p-inputgroup-addon"
                          :class="{
                            'p-invalid': $v.itemToAdd.itemAmount.$error,
                          }"
                        >
                          <i
                            @click="decrement"
                            class="px-2 fw-bold pi pi-minus-circle"
                          ></i>
                          <input
                            v-model="itemToAdd.itemAmount"
                            class="px-2 text-center border-0 fw-bold text-success w-50 custom-outline"
                          />
                          <i
                            @click="increment"
                            class="px-2 fw-bold pi pi-plus-circle"
                          ></i>
                        </div>
                        <InputText
                          class="w-40 btn-success-gradient placeholder-color"
                          :placeholder="`${items_count}item`"
                          
                        />
                      </div>
                      <div class="error">
                        <small
                          class="p-invalid"
                          v-if="
                            $v.itemToAdd.itemAmount.$error &&
                            !$v.itemToAdd.itemAmount.required
                          "
                        >
                          {{ requiredError($t("form.itemAmount.label1")) }}
                        </small>
                        <small
                          class="p-invalid"
                          v-else-if="
                            $v.itemToAdd.itemAmount.$error &&
                            !$v.rowToAdd.itemToAdd.itemAmount.maxValue
                          "
                        >
                          {{
                            maxValueError(
                              $t("form.itemAmount.label1"),
                              $v.itemToAdd.itemAmount.$params.maxValue.max
                            )
                          }}
                        </small>

                        <small
                          class="p-invalid"
                          v-else-if="
                            $v.itemToAdd.itemAmount.$error &&
                            !$v.itemToAdd.itemAmount.minValue
                          "
                        >
                          {{
                            minValueError(
                              $t("form.itemAmount.label1"),
                              $v.itemToAdd.itemAmount.$params.minValue.min
                            )
                          }}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div :class="gridClass" class="my-auto">
                  <Button
                    class="mt-3"
                    :label="$t('btns.add')"
                    icon="pi pi-plus"
                    :iconPos="locale == 'ar' ? 'right' : 'left'"
                    @click="addToRow"
                  />
                </div>
              </div>
            </div>
            <!-- <div
            :class="gridClass"
            class="my-auto"
              v-if="type == 1 && assetsType == 1 "
            >
              <Button  class="mt-3" :label="$t('btns.add')" icon="pi pi-plus" :iconPos="locale == 'ar' ? 'right' : 'left'"
              @click="addToRow"/>
            </div> -->
            <div
              :class="gridClass"
              class="my-auto"
              v-if="type && assetsType != 2"
            >
              <!-- <AddButton @add="addToRow"></AddButton> -->
              <Button
                class="mt-3"
                :label="$t('btns.add')"
                icon="pi pi-plus"
                :iconPos="locale == 'ar' ? 'right' : 'left'"
                @click="addToRow"
              />
            </div>
          </div>
          <div class="row" v-if="custodies.length > 0">
            <!-- {{form.custody[selectType]}} -->
            <div class="col-12">
              <Base>
                <div class="table-responsive">
                  <table class="table table-sm text-center">
                    <thead>
                      <tr>
                        <th v-if="type !=1">{{ $t(`form.${selectType}.label`) }}</th>
                        <th v-if="type==1">{{ $t(`form.${selectAssetType}.label`) }}</th>
                        <th v-if="assetsType == 2">{{ $t(`form.unit.label`) }}</th>
                        <th v-if="assetsType == 2">{{ $t(`form.amount.label`) }}</th>
                        <th v-if="assetsType == 1">{{ $t(`form.code.label`) }}</th>
                        <th v-if="type == 4">{{ $t(`form.amount.label`) }}</th>
                        <th scope="col">{{ $t("table.thead.controls") }}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in custodies" :key="index">
                        <td class="align-middle fw-bold">
                          <span v-if="type == 1 && assetsType == 1">{{
                            item.name_en
                          }}</span>
                          <span v-if="type == 1 && assetsType == 2">
                            {{item.item.name_en}}
                          </span>
                          <span v-if="type == 4 ">{{
                            item.account.account_name_en
                          }}</span>
                        </td>
                        <td class="align-middle fw-bold" >
                          <span v-if="type == 1 && assetsType == 2">{{item.unit.name_en}}</span>
                          <span v-if="type == 1 && assetsType == 1">{{item.code}}</span>
                          <span v-if="type == 4">{{item.amount}}</span>
                        </td>
                        <td class="align-middle fw-bold" v-if="type == 1 && assetsType == 2">
                          <span v-if="type == 1 && assetsType == 2">{{ item.itemAmount }}</span>
                        </td>
                        <td class="align-middle">
                          <div
                            class="d-flex justify-content-center align-items-center gap-1"
                          >
                            <DeleteButton
                              @delete="openDeleteRow(index)"
                            ></DeleteButton>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Base>
            </div>
          </div>
        </Base>
      </div>

      <div class="row">
        <div class="col-12">
          <Base>
            <div class="form-group">
              <label for="" class="form-label">{{
                $t("form.description.label")
              }}</label>
              <textarea
                class="form-control"
                rows="5"
                cols="30"
                v-model="form.description"
                :placeholder="$t('form.description.placeholder')"
                :class="{ 'is-invalid': $v.form.description.$error }"
              >
              </textarea>
              <div
                v-if="
                  !$v.form.description.minLength && $v.form.description.$error
                "
                class="invalid-feedback"
              >
                {{
                  maxLengthError(
                    $t("form.description.label"),
                    $v.form.description.$params.minLength.min
                  )
                }}
              </div>

              <div
                v-else-if="
                  !$v.form.description.notContainsHtmlTags &&
                  $v.form.description.$error
                "
                class="invalid-feedback"
              >
                {{ htmlTagsError($t("form.description.label")) }}
              </div>
            </div>
          </Base>
        </div>
      </div>
    </EditDialog>
  </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp_v2/hr/errands.json"></i18n>
<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import {
  required,
  minLength,
  maxLength,
  requiredIf,
  minValue,
  maxValue,
} from "vuelidate/lib/validators";
import { notContainsHtmlTags } from "@/validation/customValidators";
import Base from "@/components/global/utilities/Base.vue";
import employeeSuggestions from "@/mixins/erp_v2/hr/employees/employeeSuggestions.js";
import custodySuggestions from "@/mixins/erp_v2/hr/errands/custodySuggestions";
import AddButton from "@/components/global/utilities/AddButton.vue";
import DeleteButton from "@/components/global/utilities/DeleteButton.vue";
import moment from "moment";
import {
  htmlTagsError,
  requiredError,
  minLengthError,
  maxLengthError,
  maxValueError,
  minValueError,
  timeDateError,
} from "@/validation/errors.js";
import { mapGetters, mapActions } from "vuex";
import toast from "@/mixins/global/toast";

export default {
  mixins: [toast, employeeSuggestions, custodySuggestions],
  components: {
    EditDialog,
    Base,
    DeleteButton,
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
    // custody(value){
    //   if(this.assetsType == 2){
    //     if (!this.unitOptions.length > 0) {
    //       let params = {}
    //       if(value){
    //         console.log("value ",value)
    //       params = { pageNumber: 1, rows: 1000000, name_en: "" , item_id:value.id};
    //   this.$store.dispatch("erp_v2/items/unit/list", params);
    //       }
    // }
    //   }
    // },
    value() {
      this.form = this.value;
      if (this.value.id) {
        this.to_date = this.$moment(this.value.to_date).format("YYYY-MM-DD");
        this.from_date = this.$moment(this.value.from_date).format(
          "YYYY-MM-DD"
        );
        if (this.value.custody.assets.fixed.length > 0 ) {
          this.type = 1;
          this.assetsType = 1;
        }else if(this.value.custody.assets.items.length > 0){
          this.type = 1;
          this.assetsType = 2;
        }else if (this.value.custody.cash.length > 0 ){
          this.type = 4
        }
          // this.form.type[selectType]
        // } else if (this.value.custody.invoice.length > 0 {
        //   this.type = 2;
        //   // console.log( this.value.type[this.selectType][0].id)
        //   // this.form.type[this.selectType] = [this.value.type[this.selectType][0].id]
        // } else if (this.value.custody.bonds.length > 0) {
        //   this.type = 3;
        // }
      }
    },
    displayForm(value) {
      if (!value) {
        this.to_date = "";
        this.from_date = "";
      }
    },
  },
  data() {
    return {
      cashToAdd:{
        account:null,
        amount:null,
      },
      itemToAdd: {
        itemAmount: 1,
        unit: null,
      },
      unitName:"",
      amount: null,
      breadcrumbHome: { icon: "pi pi-home", to: "/" },
      breadcrumbItems: [
        { label: "Computer" },
        { label: "Notebook" },
        { label: "Accessories" },
      ],
      assetOption: "",
      AssetsOptions: [
        { id: 1, name: "Fixed", en: "Fixed", ar: "ثابت" },
        { id: 2, name: "Items", en: "Items", ar: "عنصر" },
      ],
      custody: "",

      form: this.value,
      type: null,
      assetsType: null,
    };
  },
  computed: {
    ...mapGetters("erp_v2/items/unit", {
      getReponse: "getListResponse",
      
    }),
    ...mapGetters("erp_v2/items/product", {
      getProductReponse: "getItemsCount",
      
    }),
    items_count(){
      if(this.getProductReponse){

        return this.getProductReponse.data;
      }
      return 0
    },
    unitOptions: {
      get() {
        if(this.getReponse){

          return this.getReponse.results;
        }else{
          return []
        }
      },
      set(value) {
        this.setListResponse(value);
      },
    },
    gridClass() {
      if (this.type == 4) {
        return "col-3";
      }
      if (this.type == 1) {
        if (this.assetsType != 2) {
          return "col-3";
        }
        return "col-4";
      } else if (this.type == 2 || this.type == 3) {
        return "col-4";
      } else if (this.assetsType == 2) {
        return "col-4";
      }
      return "";
    },
    // unitOptions() {
    //   if (this.$store.getters["erp_v2/items/unit/getListResponse"]) {
    //     return this.$store.getters["erp_v2/items/unit/getListResponse"].results;
    //   } else return [];
    // },
   
    searchUrl() {
      let url = "";
      if (this.type == 2) {
        url = "erp_v2/invoices/list";
      }
      if (this.type == 3) {
        url = "erp_v2/bonds/list";
      }
      if (this.type == 4) {
        url = "erp_v2/accounts/accountSearch/search";
      }
      if (this.assetsType === 1 && this.type == 1) {
        url = "erp_v2/assets/fixedAsset/list";
      } else if (this.assetsType == 2 && this.type == 1) {
        url = "erp_v2/items/product/list";
      }
      return url;
    },
    custodyOptions() {
      return [
        { id: 1, name: "Assets" },
        { id: 2, name: "Invoice" },
        { id: 3, name: "Bonds" },
        { id: 4, name: "Cash" },
      ];
    },
    assetsOptions() {
      return [];
      // if (this.$store.getters["erp/Assets/FixedAssets/getListResponse"])
      //   return this.$store.getters["erp/Assets/FixedAssets/getListResponse"].results;
      // else {
      //   return [];
      // }
    },
    invoicesOptions() {
      // if (this.$store.getters["erp/accounting/invoices/invoice/getListResponse"])
      //   return this.$store.getters["erp/accounting/invoices/invoice/getListResponse"].results;
      // else {
      //   return [];
      // }
      return [];
    },
    bondsOptions() {
      // if (this.$store.getters["erp/Restrictions/Bond/getListResponse"])
      //   return this.$store.getters["erp/Restrictions/Bond/getListResponse"].results;
      // else {
      //   return [];
      // }
      return [];
    },
    options() {
      return {
        assets: this.assetsOptions,
        invoice: this.invoicesOptions,
        bonds: this.bondsOptions,
      };
    },
    selectAssetType() {
      let type = "fixed";
      if (this.assetsType == 1) {
        type = "fixed";
      } else if (this.assetsType == 2) {
        type = "items";
      }
      return type;
    },
    custodies() {
      if (this.selectType === "assets") {
        return this.form.custody.assets[this.selectAssetType];
      } else {
        return this.form.custody[this.selectType];
      }
    },
    selectType() {
      let type = "assets";
      if (this.type == 1) {
        type = "assets";
        // return type
      } else if (this.type == 2) {
        type = "invoice";
        // return type
      } else if (this.type == 3) {
        type = "bonds";
        // return type
      } else if (this.type == 4) {
        type = "cash";
        // return type
      }
      return type;
    },
  },
  validations() {
    return {
      itemToAdd: {
        itemAmount: {
          required: requiredIf(() => {
            if (this.assetsType == 2) {
              return true;
            } else {
              return false;
            }
          }),
          minValue: minValue(1),
          maxValue: maxValue(100),
        },
        unit: {
          required: requiredIf(() => {
            if (this.assetsType == 2) {
              return true;
            } else {
              return false;
            }
          }),
        },
      },

      assetsType: {
        required: requiredIf(() => {
          if (this.type == 1) {
            return true;
          } else {
            return false;
          }
        }),
      },
      custody: {
        required: requiredIf(() => {
          if (this.type == 1) {
            if(!(this.form.custody[this.selectType][this.selectAssetType].length > 0)){

              return true;
            }else{
              return false
            }
          } else if( this.type && this.type !=1){
            if(!(this.form.custody[this.selectType].length > 0)){
              return true;  
            }
            return false;
          }else{
            return false
          }
        }),
      },
      form: {
        employee: {
          required,
         
          // notContainsHtmlTags: (value) => {
          //   console.log('value',value)
          //   return notContainsHtmlTags(value);
          // },
        },
        name: {
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
        location_name: {
          required,
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
        location: {
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },
        result: {
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
            return notContainsHtmlTags(value);
          },
        },

        custody: {
          //   required,
          // },
          // custody :{
          // validateType :(value)=>{
          //   if (value == 1){
          //   }
          // }
          // required:requiredIf(function () {
          //     if(!this.form.type) {
          //       return false
          //     }else{
          //       return true
          //     }
          //   }),
          // assets :{
          //   required:requiredIf (function () {
          //     return (!this.form.type.invoice && !this.form.type.bonds );
          //   }),
          // },
          // invoice :{
          //   required:requiredIf (function () {
          //     return (!this.form.type.assets && !this.form.type.bonds  );
          //   }),
          // },
          // bonds :{
          //   required:requiredIf (function () {
          //     return (!this.form.type.invoice && !this.form.type.assets );
          //   }),
          // }
        },
        from_date: {
          required,
          validDateTime: (value) => {
            if (value == null || value == "") {
              return true;
            } else {
              return moment(value, "YYYY-MM-DD HH:mm:ss", true).isValid();
            }
          },
        },
        to_date: {
          required,
          validDateTime: (value) => {
            if (value == null || value == "") {
              return true;
            } else {
              return moment(value, "YYYY-MM-DD HH:mm:ss", true).isValid();
            }
          },
        },
        description: {
          maxLength: maxLength(255),
          notContainsHtmlTags: (value) => {
            return notContainsHtmlTags(value);
          },
        },
      },
    };
  },
  created() {
    // if (!this.priceOptions.length > 0) {
    //   let params = { pageNumber: 1, rows: 1000000, name_en: "" };
    //   this.$store.dispatch("erp_v2/items/price/list", params);
    // }
    // if (!this.unitOptions.length > 0) {
    //   let params = { pageNumber: 1, rows: 1000000, name_en: "" };
    //   this.$store.dispatch("erp_v2/items/unit/list", params);
    // }
  },

  methods: {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    maxValueError,
    minValueError,
    timeDateError,
    ...mapActions("erp_v2/items/unit", [
      "setListResponse",
    ]),
    resetData(event){
     this.resetItemToAdd()
     this.custody = null
     if(event.value == 1){

       this.form.custody.assets.items = []
       this.unitOptions = []
     }else{
      this.form.custody.assets.fixed = []
     }
    },
    onSelection(event) {
      // Perform actions when a selection is made
      if (this.assetsType == 2) {
        let params = {};
        if (event.value) {
          params = {
            pageNumber: 1,
            rows: 1000000,
            name_en: "",
            item_id: event.value.id,
            group_id:event.value.group_data.id
          };
          this.$store.dispatch("erp_v2/items/unit/getItemUnit", params);
          this.$store.dispatch("erp_v2/items/product/getItemCount", params);
        }

        // You can add your custom actions here
      }
    },
    resetVariables($event) {
      this.assetsType = null;
      if(this.type ==1){
        this.custody = null
        this.form.custody.invoice = []
        this.form.custody.bonds = []
        this.form.custody.cash = []
      }else if(this.type == 2){
        this.custody = null
        this.form.custody.assets.fixed = []
        this.form.custody.assets.items = []
        this.form.custody.bonds = []
        this.form.custody.cash = []
      }else if(this.type == 3){
        this.custody = null
        this.form.custody.assets.fixed = []
        this.form.custody.assets.items = []
        this.form.custody.invoice = []
        this.form.custody.cash = []
      }else if(this.type == 4){
        this.custody = null
        this.form.custody.assets.fixed = []
        this.form.custody.assets.items = []
        this.form.custody.invoice = []
        this.form.custody.bonds = []
      }

   
    },
    resetItemToAdd (){

      this.itemToAdd = {
          itemAmount: 1,
          unit: null
        }
        this.cashToAdd = {
          amount :null
        }
        
    },
    addToRow() {
      if (this.type === 1 && this.custody) {
        if (this.assetsType === 2) {
          // let objToAdd =
          this.itemToAdd["item"] = this.custody;
          // console.log("this.itemToAdd.unit",this.itemToAdd.unit)
          // console.log("this.unitOptions",this.unitOptions)
          // let obj = this.unitOptions.filter(el => el.id == this.itemToAdd.unit)
          // this.unitName = obj[0].name_en
          // // console.log("obj[0].name_en",obj[0].name_en)
          // // if(obj){
          // //   this.unitName == obj[0].name_en
          // // }
         
          this.form.custody[this.selectType][this.selectAssetType].push(
            this.itemToAdd
          );
        } else {
          this.form.custody[this.selectType][this.selectAssetType].push(
            this.custody
          );
        }
      }else if(this.type == 4){
         
         this.cashToAdd['account'] = this.custody
         this.form.custody[this.selectType].push(
         this.cashToAdd
       );
       console.log("cash",this.form.custody[this.selectType])
     } else {
        if(this.type != 1 && this.type != 4)
        this.form.custody[this.selectType].push(this.custody);
      }
      this.custody = null;
      this.resetItemToAdd()
    },
    saveForm() {
      this.$v.form.$touch();
      this.$v.assetsType.$touch();
      this.$v.custody.$touch();
      this.$v.itemToAdd.$touch();

      if (!this.$v.form.$invalid) {
        this.$emit("save");
        this.$v.form.$reset();
        this.$v.assetsType.$reset();
        this.$v.custody.$reset();
        this.$v.itemToAdd.$reset();
      }
    },
    increment() {
      this.itemToAdd.itemAmount++;
    },
    decrement() {
      this.itemToAdd.itemAmount--;
    },
    openDeleteRow(index) {
      if(this.type == 1){

        this.form.custody[this.selectType][this.selectAssetType].splice(index, 1);
      }else{
        this.form.custody[this.selectType].splice(index, 1);
      }
      
    },
    cancelForm() {
      this.$emit("cancel");
      this.type = null;
      this.assetsType = null;
      this.$v.form.$reset();
      this.$v.assetsType.$reset();
      this.$v.custody.$reset();
      this.$v.itemToAdd.$reset();
    },
  },
};
</script>
<style lang="scss" scoped>
.placeholder-color::placeholder { 
  color: white;
  font-size: 12px;
  opacity: 1; 
}
/deep/ .p-autocomplete {
  position: initial !important;
}
/deep/.p-input-icon-right .p-autocomplete-input {
  padding-left: 1rem;
}
</style>
