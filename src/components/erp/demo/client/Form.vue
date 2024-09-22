<template>
    <div class="form">
      <EditDialog
        :display="displayForm"
        @close="cancelForm"
        @cancel="cancelForm"
        @save="saveForm"
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
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.name.label")}}</label>
              <input
                type="text"
                v-model="form.name"
                :placeholder="$t('form.name.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.form.name.$error}"
              />
              <div v-if="!$v.form.name.required && $v.form.name.$error " class="invalid-feedback">
                {{ requiredError($t("form.name.label")) }}
              </div>
              <div v-else-if="!$v.form.name.minLength && $v.form.name.$error" class="invalid-feedback" >
                {{minLengthError($t("form.name.label"),$v.form.name.$params.minLength.min)}}
              </div>
              <div v-else-if=" !$v.form.name.maxLength && $v.form.name.$error " class="invalid-feedback" >
                {{ maxLengthError($t("form.name.label"),$v.group.name.$params.maxLength.max)}}
              </div>
              <div v-else-if="! $v.form.name.notContainsHtmlTags &&  $v.form.name.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.name.label'))}}
              </div>
            </div>
          </div>
          <div class="col-md-6" v-if="form.id">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.group.label")}}</label>
              <div class="p-inputgroup">
                <span
                  class="p-inputgroup-addon"
                  :class="{ 'p-invalid': $v.form.group.$error }"
                >
                  <i class="mdi mdi-pill"></i>
                </span>
                <AutoComplete
                  v-model="form.group"
                  :suggestions="groupParams.suggestions"
                  :class="{ 'p-invalid': $v.form.group.$error  }"
                  field="name"
                  :placeholder="$t('form.group.placeholder')"
                  @complete="search($event, groupParams)"
                />
                
              </div>
              <div class="error">
                <small
                  class="p-invalid"
                  v-if="
                    $v.form.group.$error &&
                    !$v.form.group.validator
                  "
                >
                  {{ requiredError($t("form.group.label")) }}
                </small>
                </div>
              <!-- <AutoComplete
                v-if="!form.id"
                v-model="form.group"
                :suggestions="groupParams.suggestions"
                    
                field="name"
                :placeholder="$t('form.group.placeholder')"
                @complete="search($event, groupParams)"
                /> -->
              <!-- <input
                type="number"
                v-model="form.group"
                :placeholder="$t('form.group.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.form.group.$error}"
              /> -->
              <!-- <div v-if="!$v.form.group.numeric && $v.form.group.$error" class="invalid-feedback">
                {{numericError($t('form.group.label'))}}
              </div> -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="" class="form-label">{{$t("form.client_serial.label")}}</label>
              <input
                type="text"
                v-model="form.client_serial"
                :placeholder="$t('form.client_serial.placeholder')"
                class="form-control"
                :class="{'is-invalid': $v.form.client_serial.$error}"
              />
              <div v-if="!$v.form.client_serial.required && $v.form.client_serial.$error " class="invalid-feedback">
                {{ requiredError($t("form.client_serial.label")) }}
              </div>
              <div v-else-if="!$v.form.client_serial.minLength && $v.form.client_serial.$error" class="invalid-feedback" >
                {{minLengthError($t("form.client_serial.label"),$v.form.client_serial.$params.minLength.min)}}
              </div>
              <div v-else-if=" !$v.form.client_serial.maxLength && $v.form.client_serial.$error " class="invalid-feedback" >
                {{ maxLengthError($t("form.client_serial.label"),$v.form.client_serial.$params.maxLength.max)}}
              </div>
              <div v-else-if="! $v.form.client_serial.notContainsHtmlTags &&  $v.form.client_serial.$error" class="invalid-feedback">
                {{htmlTagsError($t('form.client_serial.label'))}}
              </div>
            </div>
          </div>
        </div>
      </EditDialog>
    </div>
  </template>
  <i18n src="@/lang/erp/demo/client/client.json"></i18n>
  <script>
  import EditDialog from "@/components/global/utilities/EditDialog.vue";
  import ProviderOptions from "@/mixins/erp/providers/providerSuggestions.js";
  import groupOptions from "@/mixins/erp/demo/group/groupSuggestions";
  import {
    notContainsHtmlTags,
  } from "@/validation/customValidators";
  import {
    required,
    minLength,
    maxLength,
    email,
    numeric,
  } from "vuelidate/lib/validators";
  import {
    htmlTagsError,
    requiredError,
    minLengthError,
    maxLengthError,
    numericError,
    emailError,
  } from "@/validation/errors.js";

  export default {
    mixins: [groupOptions],
    components: {
      EditDialog,
    },
    props: {
      group_id:{
        type:Number,
        default(){
          return 0;
        },
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
        form: this.value,
      };
    },
    validations: {
      form: {
        name: {
          required,
          minLength: minLength(4),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
        },
        client_serial:{
            required,
          minLength: minLength(4),
          maxLength: maxLength(255),
          notContainsHtmlTags(value) {
              return notContainsHtmlTags(value);
            }
        },
        group:{
          required
        }
      },
    },
  
    methods: {
      htmlTagsError,
      requiredError,
      minLengthError,
      maxLengthError,
      numericError,
      emailError,
      saveForm() {
        console.log("save")
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
    },
  };
  </script>
  