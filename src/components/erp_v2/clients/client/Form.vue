<template>
  <div class="form">
    <EditDialog
      :display="displayForm"
      @close="cancelForm"
      @cancel="cancelForm"
      @save="saveForm"
      :min-width="'80'"
      :max-width="'100'"
      :isLoading="isLoading"
      :header="header"
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
     
      <div class="row">
        <div class="col-lg-5 col-sm-6">
          <Base>
            <div class="col-12">
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.searchUser.label")
                }}</label>
                <!-- <span class="search-icon">
                <i
                class="pi pi-search"
               
              ></i>
            </span> -->
                <div class="autocomplete-container">
                  <AutoComplete
                    v-model="user"
                    :suggestions="userParams.suggestions"
                    field="fullname"
                    :placeholder="$t('form.searchUser.placeholder')"
                    @complete="searchUser($event, userParams)"
                    @item-select="selectUser()"
                  />
                  <i class="pi pi-search"></i>
                </div>
                <!-- <AutoComplete
                
                v-model="user"
                :suggestions="userParams.suggestions"
                field="fullname"
                :placeholder="$t('form.searchUser.placeholder')"
                @complete="searchUser($event, userParams)"
              /> -->
              </div>
            </div>
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
        <div class="col-lg-5 col-sm-6">
          <Base>
            <div class="row">
              <!-- group -->
              <div class="col-10">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.group.label")
                  }}</label>
                  <div class="autocomplete-container">
                    <AutoComplete
                      v-model="form.group"
                      :suggestions="groupParams.suggestions"
                      :forceSelection="true"
                      field="name_en"
                      complete-method="filter"
                      :placeholder="$t('form.group.placeholder')"
                      @complete="search($event, groupParams, category)"
                      :class="{ 'p-invalid': $v.form.group.$error }"
                    />
                    <i class="pi pi-search"></i>
                  </div>
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="!$v.form.group.required && $v.form.group.$error"
                    >
                      {{ requiredError($t("form.group.label")) }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        !$v.form.group.invalidChoice && $v.form.group.$error
                      "
                    >
                      {{ invalidChoiceError($t()) }}
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-2">
                <AddButton @add="addGroup"></AddButton>
              </div>

              <!-- client Code -->
              <div class="col-10" v-if="isUpdating">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.client_code.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.client_code"
                    class="form-control"
                    :placeholder="$t('form.client_code.placeholder')"
                    :disabled="true"
                  />
                </div>
              </div>
              <!-- accounting_code -->
              <div class="col-10" v-if="isUpdating">
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.accounting_code.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.accounting_code"
                    :placeholder="$t('form.accounting_code.placeholder')"
                    class="form-control"
                    :disabled="true"
                  />
                </div>
              </div>
            </div>
          </Base>
        </div>
        <div class="col-lg-2 col-sm-6">
          <Base
            :title="'Name Client'"
            :showBreadCrumb="false"
            :showToggleContent="false"
            :showFullScreen="false"
          >
            <div class="d-flex justify-content-center">
              <Avatar
                :image="require('@/assets/global/logo/tempImg.jpg')"
                class=""
                size="xlarge"
                shape="circle"
              />
            </div>
          </Base>
        </div>
      </div>
      <Base
        :title="$t('Client.basic_info')"
        :icon="'pi pi-check-square'"
        :showBreadCrumb="false"
        :showToggleContent="false"
        :showFullScreen="false"
      >
        <div class="row">
          <div class="col-4">
            <Base>
              <!-- gender -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.gender.label")
                }}</label>
                <Dropdown
                  v-model="form.gender"
                  :options="genderOptions"
                  :optionLabel="locale"
                  optionValue="name"
                  :placeholder="$t('form.gender.placeholder')"
                />
                <!-- :class="{
                    'p-invalid': $v.form.gender.$error,
                  }" -->
                <!-- <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.gender.required && $v.form.gender.$error"
                  >
                    {{ requiredError($t("form.gender.label")) }}
                  </small>
                </div> -->
              </div>
              <!-- dob -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.dob.label")
                }}</label>

                <Calendar
                  v-model="dob"
                  :showIcon="true"
                  dateFormat="yy-mm-dd"
                  @input="selectDate($event)"
                  :placeholder="$t('form.dob.placeholder')"
                  :class="{
                    'p-invalid': $v.form.dob.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.dob.validDateTime && $v.form.dob.$error"
                  >
                    {{ timeDateError($t()) }}
                  </small>
                </div>
                <!-- <div class="error">
                  <small
                    class="p-invalid"
                    v-if="$v.form.dob.error && !$v.form.dob.validDateTime"
                  >
                  {{timeDateError($t()) }}
                  </small>
                 
                </div> -->
                <!-- <small
                class="p-invalid"
                v-else-if="$v.form.dob.error && !$v.form.dob.validDateTime"
              >
              {{timeDateError($t()) }}
              </small> -->
                <!-- <div
                v-if="!$v.form.dob.required && $v.form.dob.$error"
                class="p-error"
              >
              
                {{ requiredError($t("form.dob.label")) }}
              </div> -->
                <!-- <div
              class="p-error"
              v-else-if="$v.form.dob.error && !$v.form.dob.validDateTime"
              
              >
              {{timeDateError($t()) }}
            </div> -->
                <!-- <div
                  v-if="!$v.form.dob.required && $v.form.dob.$error"
                  class="p-error"
                >
                  {{ requiredError($t("form.dob.label")) }}
                </div> -->
              </div>
              <!-- profession -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.profession.label")
                }}</label>
                <inputText
                  v-model="form.profession"
                  :placeholder="$t('form.profession.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.profession.$error,
                  }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.profession.maxLength && $v.form.profession.$error
                    "
                  >
                    {{
                      maxLengthError(
                        $t("form.profession.label"),
                        $v.form.profession.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.profession.notContainsHtmlTags &&
                      $v.form.profession.$error
                    "
                  >
                    {{ htmlTagsError($t("form.profession.label")) }}
                  </small>
                </div>
              </div>
              <!-- marital_status -->
              <div
                class="form-group"
                v-if="category != 2 || form.treat_as == 1"
              >
                <label for="" class="form-label">{{
                  $t("form.marital_status.label")
                }}</label>
                <Dropdown
                  v-model="form.marital_status"
                  :options="maritalStatusOptions"
                  :optionLabel="locale"
                  optionValue="name"
                  :placeholder="$t('form.marital_status.placeholder')"
                />
                <!-- :class="{
                  'p-invalid': $v.form.marital_status.$error,
                }"
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="!$v.form.marital_status.required && $v.form.marital_status.$error"
                >
                  {{ requiredError($t("form.marital_status.label")) }}
                </small>
              </div> -->
              </div>
            </Base>
          </div>
          <div class="col-4">
            <Base>
              <!-- phone Number -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.phone_number.label")
                }}</label>
                <input
                  type="number"
                  v-model="form.phone_number"
                  :placeholder="$t('form.phone_number.placeholder')"
                  class="form-control"
                  :class="{ 'is-invalid': $v.form.phone_number.$error }"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.phone_number.required &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{ requiredError($t("form.phone_number.label")) }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.phone_number.minLength &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{
                      minLengthError(
                        $t("form.phone_number.label"),
                        $v.form.phone_number.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.phone_number.maxLength &&
                      $v.form.phone_number.$error
                    "
                  >
                    {{
                      maxLengthError(
                        $t("form.phone_number.label"),
                        $v.form.phone_number.$params.maxLength.max
                      )
                    }}
                  </small>
                </div>
                <!-- <div
                  v-if="
                    !$v.form.phone_number.required &&
                    $v.form.phone_number.$error
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.phone_number.label")) }}
                </div> -->
                <!-- <div
                  v-else-if="
                    !$v.form.phone_number.minLength &&
                    $v.form.phone_number.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    minLengthError(
                      $t("form.phone_number.label"),
                      $v.form.phone_number.$params.minLength.min
                    )
                  }}
                </div> -->
                <!-- <div
                  v-else-if="
                    !$v.form.phone_number.maxLength &&
                    $v.form.phone_number.$error
                  "
                  class="invalid-feedback"
                >
                  {{
                    maxLengthError(
                      $t("form.phone_number.label"),
                      $v.form.phone_number.$params.maxLength.max
                    )
                  }}
                </div> -->
                <!-- <div
                  v-if="
                    !$v.form.phone_number.numeric && $v.form.phone_number.$error
                  "
                  class="invalid-feedback"
                >
                  {{ numericError($t("form.phone_numbers.label")) }}
                </div> -->
              </div>
              <!--  other phone Number -->
              <div class="form-group">
                <label class="form-label">{{
                  $t("form.other_phone_number.label")
                }}</label>
                <input
                  type="number"
                  class="form-control"
                  :placeholder="$t('form.other_phone_number.placeholder')"
                  v-model.trim="form.other_phone_number"
                  :class="{ 'is-invalid': $v.form.other_phone_number.$error }"
                />
                <div class="error">
                  <!-- <small
                    class="p-invalid"
                    v-if="
                    !$v.form.other_phone_number.required &&
                    $v.form.other_phone_number.$error
                  "
                  >
                    {{ requiredError($t("form.other_phone_number.label")) }}
                  </small> -->
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.other_phone_number.minLength &&
                      $v.form.other_phone_number.$error
                    "
                  >
                    {{
                      minLengthError(
                        $t("form.other_phone_number.label"),
                        $v.form.other_phone_number.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.other_phone_number.maxLength &&
                      $v.form.other_phone_number.$error
                    "
                  >
                    {{
                      maxLengthError(
                        $t("form.other_phone_number.label"),
                        $v.form.other_phone_number.$params.maxLength.max
                      )
                    }}
                  </small>
                </div>
              </div>
              <!--  Home phone Number -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.home_phone_number.label")
                }}</label>
                <input
                  type="number"
                  v-model="form.home_phone_number"
                  class="form-control"
                  :placeholder="$t('form.home_phone_number.placeholder')"
                  :class="{ 'is-invalid': $v.form.home_phone_number.$error }"
                />
                <div class="error">
                  <!-- <small
                    class="p-invalid"
                    v-if="
                    !$v.form.home_phone_number.required &&
                    $v.form.home_phone_number.$error
                  "
                  >
                    {{ requiredError($t("form.home_phone_number.label")) }}
                  </small> -->
                  <small
                    class="p-invalid"
                    v-if="
                      !$v.form.home_phone_number.minLength &&
                      $v.form.home_phone_number.$error
                    "
                  >
                    {{
                      minLengthError(
                        $t("form.home_phone_number.label"),
                        $v.form.home_phone_number.$params.minLength.min
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.home_phone_number.maxLength &&
                      $v.form.home_phone_number.$error
                    "
                  >
                    {{
                      maxLengthError(
                        $t("form.home_phone_number.label"),
                        $v.form.home_phone_number.$params.maxLength.max
                      )
                    }}
                  </small>
                </div>
              </div>
            </Base>
          </div>
          <div class="col-4">
            <Base>
              <!-- city -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.city.label")
                }}</label>
                <div class="autocomplete-container">
                  <AutoComplete
                    v-model="selectedCity"
                    :suggestions="citiesOPtions"
                    :forceSelection="true"
                    complete-method="filter"
                    @item-select="handleCity"
                    @complete="searchCity($event)" 
                    :field="locale"
                    :placeholder="$t('form.city.placeholder')"
                    :class="{ 'p-invalid': $v.form.city.$error }"
                  />
                  <i class="pi pi-search"></i>
                </div>
              
              </div>
              <!-- address -->
              <div class="form-group">
                <label for="" class="form-label">{{
                  $t("form.address.label")
                }}</label>
                <inputText
                  type="text"
                  v-model="form.address"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.address.$error,
                  }"
                  :placeholder="$t('form.address.placeholder')"
                />
                <div class="error">
                  <small
                    class="p-invalid"
                    v-if="!$v.form.address.maxLength && $v.form.address.$error"
                  >
                    {{
                      maxLengthError(
                        $t("form.address.label"),
                        $v.form.address.$params.maxLength.max
                      )
                    }}
                  </small>
                  <small
                    class="p-invalid"
                    v-else-if="
                      !$v.form.address.notContainsHtmlTags &&
                      $v.form.address.$error
                    "
                  >
                    {{ htmlTagsError($t("form.address.label")) }}
                  </small>
                </div>
              </div>
            </Base>
          </div>
        </div>
      </Base>
      <div class="row">
        <div class="col-6" v-if="isUpdating">
          <Base
            :title="'Accounting chart'"
            :showBreadCrumb="false"
            :showToggleContent="false"
            :showFullScreen="false"
          >
            <div class="d-flex flex-wrap justify-content-between">
              <div class="d-grid">
                <h6>Accounting Code</h6>
                <h6 class="">Invoices</h6>
                <h6 class="">Total Operations</h6>
              </div>
              <div class="d-grid">
                <!-- <div class="flex align-items-center"> -->
                <Chip label="Action" class="custom-chip" />
                <Chip label="Onyama Limba" icon="" class="custom-chip" />
                <Chip label="Apple" icon="" class="custom-chip" />
                <!-- </div> -->
              </div>
              <div class="d-grid current-balance">
                <label class="form-label">Current Balance</label>
                <Chip label="00 LE" class="custom-chip chip" />
              </div>
            </div>
            <Chart type="line" :data="basicData" class="w-100" />

            <template v-slot:footer>
              <div class="d-flex justify-content-center">
                <h5>Log</h5>
              </div>
            </template>
          </Base>
        </div>
        <div :class="isUpdating ? 'col-md-6' : 'col-12'">
          <!-- :title="'Permissions'" -->
          <Base
          :title="$t('Client.permissions')"
            :showBreadCrumb="false"
            :showToggleContent="false"
            :showFullScreen="false"
          >
            <div class="row">
              <div class="col-4"  v-if="category != 2 || form.treat_as == 1">
                <Base>
                  <div
                    class="col-12"
                   
                  >
                    <div class="form-group">
                      <label for="" class="form-label">{{
                        $t("form.discount.label")
                      }}</label>
                      <InputNumber
                        id="discount"
                        v-model="form.discount"
                        suffix="%"
                        :placeholder="$t('form.discount.placeholder')"
                        :class="{
                          'p-invalid': $v.form.discount.$error,
                        }"
                      />
                      <div class="error">
                        <small
                          class="p-invalid"
                          v-if="
                            !$v.form.discount.maxLength &&
                            $v.form.discount.$error
                          "
                        >
                          {{
                            maxLengthError(
                              $t("form.discount.label"),
                              $v.form.discount.$params.maxLength.max
                            )
                          }}
                        </small>
                      </div>

                      <label for="" class="form-label">{{
                        $t("form.profit.label")
                      }}</label>
                      <InputNumber
                        v-model="form.profit"
                        suffix="%"
                        :placeholder="$t('form.profit.placeholder')"
                      />

                      <!-- <input
                        type="number"
                        v-model="form.profit"
                        :placeholder="$t('form.profit.placeholder')"
                        class="form-control"
                        :class="{
                          'is-invalid': $v.form.profit.$error,
                        }"
                      /> -->

                      <label for="" class="form-label">{{
                        $t("form.max_debit.label")
                      }}</label>
                      <InputNumber
                        v-model="form.max_debit"
                        mode="currency"
                        currency="EGP"
                        :placeholder="$t('form.max_debit.placeholder')"
                      />
                      <!-- :locale="en-US" -->

                      <!-- <input
                        type="number"
                        v-model="form.max_debit"
                        :placeholder="$t('form.max_debit.placeholder')"
                        class="form-control"
                        :class="{
                          'is-invalid': $v.form.max_debit.$error,
                        }"
                      /> -->
                    </div>
                  </div>
                </Base>
              </div>
              <div :class="category != 2 || form.treat_as == 1 ? 'col-4' :'col-6'">
                <Base>
                  <div class="col-12">
                    <div class="form-group">
                      <div class="field-checkbox d-flex">
                        <Checkbox
                          id="binary"
                          class="me-2"
                          v-model="form.treat_as"
                          :trueValue="1"
                          :binary="true"
                        />
                        <label for="binary" v-if="category == 2">{{
                          $t("form.treat_as_client.label")
                        }}</label>
                        <label v-else for="binary">
                          {{ $t("form.treat_as_supplier.label") }}
                        </label>
                      </div>
                    </div>

                    <!-- <div class="form-group" v-if="form.treat_as && !form.alert_dealing"> -->
                    <div class="form-group" v-if="form.treat_as">
                      <div class="field-checkbox d-flex">
                        <Checkbox
                          id="binary"
                          class="me-2"
                          v-model="form.prevent_dealing"
                          :trueValue="true"
                          :falseValue="false"
                          :binary="true"
                          :disabled="form.alert_dealing"
                        />
                        <label
                          for="binary"
                          :class="[
                            form.alert_dealing
                              ? 'text-decoration-line-through'
                              : '',
                          ]"
                          >{{ $t("form.prevent_dealing.label") }}</label
                        >
                      </div>
                    </div>

                    <!-- <div class="form-group" v-if="form.treat_as && !form.prevent_dealing"> -->
                    <div class="form-group" v-if="form.treat_as">
                      <div class="field-checkbox d-flex">
                        <Checkbox
                          id="binary"
                          class="me-2"
                          v-model="form.alert_dealing"
                          :binary="true"
                          :trueValue="true"
                          :falseValue="false"
                          :disabled="form.prevent_dealing"
                        />
                        <label
                          for="binary"
                          :class="[
                            form.prevent_dealing
                              ? 'text-decoration-line-through'
                              : '',
                          ]"
                          >{{ $t("form.alert_dealing.label") }}</label
                        >
                      </div>
                    </div>

                    <div class="form-group" v-if="form.treat_as">
                      <div class="field-checkbox d-flex">
                        <Checkbox
                          id="binary"
                          class="me-2"
                          v-model="form.prevent_give"
                          :trueValue="true"
                          :falseValue="false"
                          :binary="true"
                          :disabled="form.alert_give"
                        />
                        <label
                          for="binary"
                          :class="[
                            form.alert_give
                              ? 'text-decoration-line-through'
                              : '',
                          ]"
                          >{{ $t("form.prevent_give.label") }}</label
                        >
                      </div>
                    </div>

                    <div class="form-group" v-if="form.treat_as">
                      <div class="field-checkbox d-flex">
                        <Checkbox
                          id="binary"
                          class="me-2"
                          v-model="form.alert_give"
                          :trueValue="true"
                          :falseValue="false"
                          :binary="true"
                          :disabled="form.prevent_give"
                        />
                        <label
                          for="binary"
                          :class="[
                            form.prevent_give
                              ? 'text-decoration-line-through'
                              : '',
                          ]"
                          >{{ $t("form.alert_give.label") }}</label
                        >
                      </div>
                    </div>
                  </div>
                </Base>
              </div>
              <div :class="category != 2 || form.treat_as == 1 ? 'col-4' :'col-6'">
                <Base>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="" class="form-label">{{
                      $t("form.payment_method.label")
                    }}</label>
                    <div
                      class="d-flex flex-wrap radio-button justify-content-between"
                    >
                      <div
                        v-for="option of paymentMethodOptions"
                        :key="option.id"
                        class="field-radiobutton d-flex gap-1 align-items-center"
                      >
                      <label class="mt-2" v-if="locale == 'en'">{{ option.en }} </label>
                      <label class="mt-2" v-if="locale == 'ar'">{{ option.ar }} </label>
                        <RadioButton
                          :id="option.name"
                          name="option"
                          :value="option.name"
                          v-model="form.payment_method"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Base>
              </div>
            </div>
          </Base>
        </div>
      </div>
      <div v-if="form.treat_as == 1 || category != 2">
        <Base
          :title="$t('Client.insurance')"
          :icon="'pi pi-check-square'"
          :showBreadCrumb="false"
          :showToggleContent="false"
          :showFullScreen="false"
        >
          <div class="row">
            <div class="col-4">
              <Base>
                <!-- insurance_name -->
                <div class="row">
                  <div class="form-group col-9">
                    <label for="" class="form-label">{{
                      $t("form.insurance_name.label")
                    }}</label>
                    <div class="autocomplete-container">
                      <AutoComplete
                        v-model="form.insurance_name"
                        :suggestions="groupParams.suggestions"
                        :forceSelection="true"
                        field="name_en"
                        :placeholder="$t('form.insurance_name.placeholder')"
                        @complete="search($event, groupParams)"
                        :class="{
                          'p-invalid': $v.form.insurance_name.$error,
                        }"
                      />
                      <i class="pi pi-search"></i>
                    </div>
                    <div class="error">
                      <small
                        class="p-invalid"
                        v-if="
                          !$v.form.insurance_name.maxLength &&
                          $v.form.insurance_name.$error
                        "
                      >
                        {{
                          maxLengthError(
                            $t("form.insurance_name.label"),
                            $v.form.insurance_name.$params.maxLength.max
                          )
                        }}
                      </small>
                      <small
                        class="p-invalid"
                        v-else-if="
                          !$v.form.insurance_name.notContainsHtmlTags &&
                          $v.form.insurance_name.$error
                        "
                      >
                        {{ htmlTagsError($t("form.insurance_name.label")) }}
                      </small>
                    </div>
                  </div>
                  <div class="col-3">
                    <AddButton @add="addGroup"></AddButton>
                  </div>
                </div>

                <!-- card Number -->
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.card_name.label")
                  }}</label>
                  <inputText
                    type="text"
                    v-model="form.card_name"
                    :placeholder="$t('form.card_name.placeholder')"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.card_name.$error,
                    }"
                  />
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        !$v.form.card_name.maxLength && $v.form.card_name.$error
                      "
                    >
                      {{
                        maxLengthError(
                          $t("form.card_name.label"),
                          $v.form.card_name.$params.maxLength.max
                        )
                      }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        !$v.form.card_name.notContainsHtmlTags &&
                        $v.form.card_name.$error
                      "
                    >
                      {{ htmlTagsError($t("form.card_name.label")) }}
                    </small>
                  </div>
                </div>
                <!-- member_id -->
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.member_id.label")
                  }}</label>
                  <inputText
                    type="number"
                    v-model="form.member_id"
                    :placeholder="$t('form.member_id.placeholder')"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.member_id.$error,
                    }"
                  />
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        !$v.form.member_id.maxLength && $v.form.member_id.$error
                      "
                    >
                      {{
                        maxLengthError(
                          $t("form.member_id.label"),
                          $v.form.member_id.$params.maxLength.max
                        )
                      }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        !$v.form.member_id.notContainsHtmlTags &&
                        $v.form.member_id.$error
                      "
                    >
                      {{ htmlTagsError($t("form.member_id.label")) }}
                    </small>
                  </div>
                </div>
              </Base>
            </div>
            <div class="col-4">
              <Base>
                <!-- plane -->
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.plan.label")
                  }}</label>
                  <input
                    type="text"
                    v-model="form.plan"
                    :placeholder="$t('form.plan.placeholder')"
                    class="form-control"
                    :class="{
                      'is-invalid': $v.form.plan.$error,
                    }"
                  />
                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="!$v.form.plan.maxLength && $v.form.plan.$error"
                    >
                      {{
                        maxLengthError(
                          $t("form.plan.label"),
                          $v.form.plan.$params.maxLength.max
                        )
                      }}
                    </small>
                    <small
                      class="p-invalid"
                      v-else-if="
                        !$v.form.plan.notContainsHtmlTags && $v.form.plan.$error
                      "
                    >
                      {{ htmlTagsError($t("form.plan.label")) }}
                    </small>
                  </div>
                </div>
                <!--  expiration_date -->
                <div class="form-group">
                  <label for="" class="form-label">{{
                    $t("form.expiration_date.label")
                  }}</label>
                  <Calendar
                    v-model="form.expiration_date"
                    dateFormat="yy-mm-dd"
                    @input="selectExpirationDate($event)"
                    :showIcon="true"
                    :placeholder="$t('form.expiration_date.placeholder')"
                    :class="{
                      'p-invalid': $v.form.expiration_date.$error,
                    }"
                  />

                  <div class="error">
                    <small
                      class="p-invalid"
                      v-if="
                        !$v.form.expiration_date.validDateTime &&
                        $v.form.expiration_date.$error
                      "
                    >
                      {{ timeDateError($t()) }}
                    </small>
                  </div>
                  <!-- :class="{
                      'p-invalid': $v.form.expiration_date.$error,
                    }" -->
                </div>
              </Base>
            </div>
            <div class="col-4">
              <Base>
                <UploadFile
                  v-model="form.uploaded_files"
                  :saved_files="form.saved_files"
                  @removePath="removePath"
                  :mediaUrl="mediaUrl"
                >
                  <!-- <div class="error">
                  <small
                  class="p-invalid"
                  v-if="
                  !$v.form.uploaded_files.maxLength &&
                  $v.form.uploaded_files.$error
                "
                >
                {{
                  maxLengthError(
                    $t("form.uploaded_files.label"),
                    $v.form.uploaded_files.$params.maxLength.max
                  )
                }}
                </small>
                </div> -->
                </UploadFile>
              </Base>
            </div>
          </div>
        </Base>
      </div>
    </EditDialog>
    <Form
      v-model="group"
      :displayForm="displayFormGroup"
      :typeAdd="typeAddGroup"
      :error="upsertError"
      :isUpdating="isUpdatingGroup"
      @close="resetForm"
      @cancel="resetForm"
      @save="create"
      :isLoading="upsertLoading"
      :header="$t('dialog.header.new')"
    >
    </Form>
  </div>
</template>
<i18n src="@/lang/erp_v2/clients/client.json"></i18n>
<i18n src="@/lang/erp_v2/clients/group.json"></i18n>

<script>
import EditDialog from "@/components/global/utilities/EditDialog.vue";
import { notContainsHtmlTags } from "@/validation/customValidators";
import moment from "moment";
import {
  required,
  minLength,
  numeric,
  maxLength,
} from "vuelidate/lib/validators";
import groupSuggestions from "@/mixins/erp_v2/clients/groupSuggestions.js";
import Base from "@/components/global/utilities/Base.vue";
import Chip from "primevue/chip";
import Divider from "@/components/global/utilities/Divider.vue";
import InputNumber from "primevue/inputnumber";
import userSuggestions from "@/mixins/erp_v2/users/userSuggestions";
import UploadFile from "@/components/erp/HR/employees/UploadFile.vue";
import AddButton from "@/components/global/utilities/AddButton.vue";
import Form from "@/components/erp_v2/clients/group/Form.vue";
import { urls } from "@/backend/urls";
import { mapGetters, mapActions } from "vuex";
import cities from '@/mixins/business/cities.js';
import governorate from '@/mixins/business/governorate.js';
import toast from "@/mixins/global/toast";
import {
  htmlTagsError,
  requiredError,
  inputError,
  minLengthError,
  maxLengthError,
  numericError,
  timeDateError,
  invalidChoiceError,
} from "@/validation/errors.js";
export default {
  mixins: [cities,governorate,toast,userSuggestions,groupSuggestions],
  components: {
    EditDialog,
    Base,
    Chip,
    AddButton,
    InputNumber,
    UploadFile,
    Form,
  },
  // mixins: [, ],
  props: {
    category: {
      type: Number,
    },
    treat_as: {
      type: Number,
    },
    displayForm: {
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
    isUpdating: {
      type: Boolean,
      default() {
        return false;
      },
    },
    genderOptions: {
      type: Array,
    },
    paymentMethodOptions: {
      type: Array,
    },
    maritalStatusOptions: {
      type: Array,
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
    // user(value) {
    //   this.form.userdata = value;
    //   this.form.phone_number = value.mobile;
    //   this.dob = this.$moment(value.dob).format("YYYY-MM-DD");
    //   this.form.name = value.fullname;
    //   this.form.gender = value.gender;
    // },
    category(value) {
      // this.form.category = value;
      console.log(this.category);
      this.group.category = value;
    },
  },
  data() {
    return {
      user: null,
      dob: "",
      selectedCity:"",
      filteredCities: [],
      citiesOPtions: [], 
      mediaUrl: urls.business.mediaUrl,
      cityOptions: [
        { name: "New York", code: "NY", id: 1 },
        { name: "Rome", code: "RM", id: 2 },
        { name: "London", code: "LDN", id: 3 },
        { name: "Istanbul", code: "IST", id: 4 },
        { name: "Paris", code: "PRS", id: 5 },
      ],
      basicData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#42A5F5",
            tension: 0.4,
          },
          {
            label: "Second Dataset",
            data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: "#FFA726",
            tension: 0.4,
          },
        ],
      },
      form: this.value,
      displayFormGroup: false,
      group: {
        name_en: "",
        name_ar: "",
        serial: 12345678.333,
        parent: null,
        category: null,
      },
      typeAddGroup: 1,
      isUpdatingGroup: false,
    };
  },
  validations: {
    form: {
      group: {
        required,
        invalidChoice: (value) => {
          if (typeof value === "string" || value == null || value == "") {
            return false;
          } else {
            return true;
          }
          //  if (value == null || value == "") {
          //    return true;
          //  } else {
          //    return moment(value, "YYYY-MM-DD", true).isValid();
          //  }
        },
      },
      gender: {},
      uploaded_files: {
        // maxLength: maxLength(4),
      },
      dob: {
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },

      profession: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
        maxLength: maxLength(255),
      },
      marital_status: {},
      phone_number: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      other_phone_number: {
        numeric,
        minLength: minLength(0),
        maxLength: maxLength(11),
      },
      home_phone_number: {
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      address: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
        maxLength: maxLength(255),
      },
      city: {},
      discount: {
        maxLength: maxLength(255),
      },
      profit: {
        // notContainsHtmlTags: (value) => {
        //   return notContainsHtmlTags(value);
        // },
        maxLength: maxLength(255),
      },
      max_debit: {
        // notContainsHtmlTags: (value) => {
        //   return notContainsHtmlTags(value);
        // },
        maxLength: maxLength(255),
      },
      insurance_name: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
        maxLength: maxLength(255),
      },
      card_name: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
        maxLength: maxLength(255),
      },
      member_id: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
        maxLength: maxLength(255),
      },
      plan: {
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
        maxLength: maxLength(255),
      },
      expiration_date: {
        validDateTime: (value) => {
          if (value == null || value == "") {
            return true;
          } else {
            return moment(value, "YYYY-MM-DD", true).isValid();
          }
        },
      },
      treat_as: {},
      payment_method: {},
      files: {},
      serial: {},
      name: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(255),
        notContainsHtmlTags: (value) => {
          return notContainsHtmlTags(value);
        },
      },
    },
  },

  computed: {
    ...mapGetters("erp_v2/groups", {
      getListResponse: "getListResponse",
      listLoading: "getListLoading",
      getListError: "getListError",
      getTreeNodes: "getTreeNodes",
      getUpsertResponse: "getUpsertResponse",
      upsertLoading: "getUpsertLoading",
      getUpsertError: "getUpsertError",

      getDeleteResponse: "getDeleteResponse",
      deleteLoading: "getDeleteLoading",
      getDeleteError: "getDeleteError",
    }),
    // ...mapGetters("erp_v2/groups", {
    //   getUpsertResponse: "getUpsertResponse",
    //   upsertLoading: "getUpsertLoading",
    //   getUpsertError: "getUpsertError",
    // }),
    groups() {
      if (this.getListResponse) return this.getListResponse.data;
      else return [];
    },
    upsertResponse: {
      get() {
        return this.getUpsertResponse;
      },
      set(value) {
        this.setUpsertResponse(value);
      },
    },
    upsertError: {
      get() {
        return this.getUpsertError;
      },
      set(value) {
        this.setUpsertError(value);
      },
    },
    nodes: {
      get() {
        return this.getTreeNodes;
      },
      set(value) {
        this.setTreeNodes(value);
      },
    },
  },

  methods: {
    ...mapActions("erp_v2/groups", [
      "setUpsertResponse",
      "setUpsertError",
      "setDeleteResponse",
      "setDeleteError",
      "setTreeNodes",
    ]),
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    inputError,
    timeDateError,
    invalidChoiceError,
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
    selectUser(){
      this.form.userdata = this.user;
      this.form.phone_number = this.user.mobile;
      this.dob = this.$moment(this.user.dob).format("YYYY-MM-DD");
      this.form.name = this.user.fullname;
      this.form.gender = this.user.gender;
    },
    saveForm() {
      this.$v.form.$touch();
      console.log(this.form);
      if (!this.$v.form.$invalid) {
        this.user = null;

        this.$emit("save");
        this.$v.form.$reset();
      }
    },
    cancelForm() {
      this.user = null;
      this.$emit("cancel");
      this.$v.form.$reset();
    },
    removePath(index) {
      this.form.deleted_files.push(this.form.saved_files[index]);
      this.form.saved_files.splice(index, 1);
    },

    /////////////  GROUP  //////////////
    addGroup() {
      this.displayFormGroup = true;
      this.typeAddGroup = 2;
      this.isUpdatingGroup = false;
    },
    closeForm() {
      this.upsertError = null;
      this.displayFormGroup = false;
    },

    resetForm() {
      this.closeForm();
      this.group = {
        name_en: "",
        name_ar: "",
        serial: 645645,
        parent: null,
        category: null,
      };
    },
    create() {
      this.group.category = this.category;
      this.$store
        .dispatch("erp_v2/groups/create", this.group)
        .then((res) => {
          // this.nodes = this.groups
          console.log(this.groups);
          this.nodes = this.groups;
          this.resetForm();
          const summery = res.statusText;
          // const details = res.message;
          // this.successToast(summery);
        })
        .catch((err) => {
          console.log(err);
          const summery = err.statusText;
          // const details = err.message;
          // this.errorToast(summery, details);
        });
    },
    selectDate(event) {
      this.form.dob = this.$moment(event).format("YYYY-MM-DD");
    },
    selectExpirationDate(event) {
      this.form.expiration_date = this.$moment(event).format("YYYY-MM-DD");
    },
  },
};
</script>

<!-- .search-icon {
  position: relative;
  display: inline-block;
}
.search-icon .pi-search {
  position: absolute;
  top: 50%;
  right: 10px;
  color: #ccc;
} -->
<style lang="scss" scoped>
.autocomplete-container {
  position: relative;
}

.autocomplete-container .pi-search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  color: #ccc;
  z-index: 1;
}
/deep/.p-chip {
  background: $primary;
  justify-content: center;
  height: 23px;
  .p-chip-text {
    color: white;
  }
}
.chip {
  background: $secondary-gradient;
  height: auto;
}
.current-balance {
  border: 1px solid #bec7be;
  border-radius: 17px;
}

.radio-button {
  border: 1px solid $primary;
  border-radius: 1rem;
  padding: 0.5rem;
}
:dir(rtl) .autocomplete-container .pi-search {
  left: 15px;
  right : unset;
 
}
</style>
