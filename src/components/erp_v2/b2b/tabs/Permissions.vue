<template>
    <div class="permissions">
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
          <div class='col-12'>
            <Base
              :title="'Permissions'"
              :showBreadCrumb="false"
              :showToggleContent="false"
              :showFullScreen="false"
            >
              <div class="row">
                <div class="col-4"  >
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
                            'p-invalid': v.discount.$error,
                          }"
                        />
                        <div class="error">
                          <small
                            class="p-invalid"
                            v-if="
                              !v.discount.maxLength &&
                              v.discount.$error
                            "
                          >
                            {{
                              maxLengthError(
                                $t("form.discount.label"),
                                v.discount.$params.maxLength.max
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
                <div class='col-4' >
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
                          <label for="binary" >{{
                            $t("form.treat_as.label")
                          }}</label>
                        
                        </div>
                      </div>
  
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
                <div class='col-4' >
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
    </div>
    
  </template>
  <i18n src="@/lang/erp_v2/b2b/b2b.json"></i18n>
  <i18n src="@/lang/global/global.json"></i18n>
  <script>
  import { mapGetters, mapActions } from "vuex";
  import { requiredError, inputError } from "@/validation/errors.js";
  import Divider from "@/components/global/utilities/Divider.vue";
  import Base from "@/components/global/utilities/Base.vue";
import { locale } from "moment";
  
  export default {
    mixins: [],
    props: {
      error: {
        type: Object,
      },
      v: {
        type: Object,
        required: true,
      },
      paymentMethodOptions: {
      type: Array,
    },

    },
    components: {
      Base
    },
  
    data() {
      return {
      
      };
    },
    computed: {
      ...mapGetters("erp_v2/b2b/", {
        getPermission: "getPermission",
      }),
  
      form: {
        get() {
          return this.getPermission;
        },
        set(value) {
          this.setPermission(value);
        },
      },
    },
  
    created() {},
    validations: {

    },
    methods: {
      requiredError,
      inputError,
      ...mapActions("erp_v2/b2b/", ["setPermission"]),
    },
  };
  </script>
  <style lang="scss">
  .radio-button {
    border: 1px solid $primary;
    border-radius: 1rem;
    padding: 0.5rem;
  }</style>
  