
<template>
    <div class="Maintenance-Settings">
      <div class="company-wrapper my-2">
        <Base class="my-2">
          <div class="row">
            <div class="col-12">
              <h1 class="text-center text-danger fw-bold my-4">RedFoxes</h1>
              <h2 class="text-center">Welcome To RedFoxes ERP System</h2>
            </div>
          </div>
        </Base>
      </div>
      <div class="search-wrapper my-2">
        <Base>
          <div class="row">
            <div class="col-12">
              <h4>{{ $t("settings.header") }}</h4>
            </div>
          </div>
          <div class="row" v-if="upsertError">
            <div class="col-12">
              <div class="errors" v-if="typeof upsertError === 'object'">
                <Message
                  severity="error"
                  v-for="(value, key) in upsertError"
                  :key="key"
                  :closable="false"
                >
                  <span v-if="key != 'errors'"
                    >{{ $t(`form.${key}.label`) }}:
                  </span>
                  <span v-if="typeof value === 'string'">{{ value }}</span>
                  <span v-else>{{ value[0] }}</span>
                </Message>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label">
                  {{ $t("form.remind_before_appearing.label") }} ({{ $t("day") }})
                </label>
                <input
                  type="number"
                  v-model="form.remind_before_appearing"
                  :placeholder="$t('form.remind_before_appearing.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.remind_before_appearing.$error,
                  }"
                />
                <!-- </span> -->
                <div
                  v-if="
                    !$v.form.remind_before_appearing.required &&
                    $v.form.remind_before_appearing.$error
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.remind_before_appearing.label")) }}
                </div>
                <div
                  v-else-if="
                    !$v.form.remind_before_appearing.decimal &&
                    $v.form.remind_before_appearing.$error
                  "
                  class="invalid-feedback"
                >
                  {{ numericError($t("form.remind_before_appearing.label")) }}
                </div>
              </div>
            </div>
            <div class="col-md-5 col-xxl-3">
              <div class="form-group">
                <label class="form-label">
                  {{ $t("form.report_continues_to_appear.label") }} ({{
                    $t("day")
                  }})</label
                >
                <input
                  type="number"
                  v-model="form.report_continues_to_appear"
                  :placeholder="$t('form.report_continues_to_appear.placeholder')"
                  class="form-control"
                  :class="{
                    'is-invalid': $v.form.report_continues_to_appear.$error,
                  }"
                />
                <div
                  v-if="
                    !$v.form.report_continues_to_appear.required &&
                    $v.form.report_continues_to_appear.$error
                  "
                  class="invalid-feedback"
                >
                  {{ requiredError($t("form.report_continues_to_appear.label")) }}
                </div>
                <div
                  v-else-if="
                    !$v.form.report_continues_to_appear.decimal &&
                    $v.form.report_continues_to_appear.$error
                  "
                  class="invalid-feedback"
                >
                  {{ numericError($t("form.report_continues_to_appear.label")) }}
                </div>
              </div>
            </div>
            <div class="col-md-2 d-flex align-items-end">
              <div class="form-group">
                <button
                  class="btn btn-pill btn-success-gradient"
                  @click.prevent="upsert"
                >
                  <span class="mx-2">{{ $t("btns.save") }}</span>
                </button>
              </div>
            </div>
          </div>
        </Base>
      </div>
    </div>
  </template>
    <i18n src="@/lang/global/global.json"></i18n>
    <i18n src="@/lang/erp/assets/settings/maintenance.json"></i18n>
    <script>
  import { required, decimal } from "vuelidate/lib/validators";
  import { requiredError, numericError } from "@/validation/errors.js";
  import Base from "@/components/global/utilities/Base.vue";
  
  import { mapGetters, mapActions } from "vuex";
  import pagination from "@/mixins/global/pagination";
  import toast from "@/mixins/global/toast";
  export default {
    mixins: [pagination, toast],
    components: {
      Base,
    },
    data() {
      return {
        form: {
          remind_before_appearing: null,
          report_continues_to_appear: null,
        },
        displayForm: false,
        isUpdating: false,
      };
    },
    validations: {
      form: {
        remind_before_appearing: {
          required,
          decimal,
        },
        report_continues_to_appear: {
          required,
          decimal,
        },
      },
    },
    computed: {
      listResponse() {
        return this.getListResponse;
      },
      settings() {
        if (this.listResponse) return this.listResponse.data;
        else return {};
      },
   
      ...mapGetters("erp/Assets/setting/maintenance", {
        getListResponse: "getListResponse",
        listLoading: "getListLoading",
        getListError: "getListError",
  
        getUpsertResponse: "getUpsertResponse",
        upsertLoading: "getUpsertLoading",
        getUpsertError: "getUpsertError",
      }),
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
    },
    mounted() {
      if (!this.settings.length > 0) {
        this.list();
      }
    },
    methods: {
      requiredError,
      numericError,
      ...mapActions("erp/Assets/setting/maintenance", [
        "setformResponse",
        "setUpsertResponse",
        "setUpsertError",
      ]),
      /////////////////////////////////////////
      ////////// UPSERT ///////////////////
  
      openUpdate(item) {
        this.isUpdating = true;
        this.form = { ...item };
        this.update();
      },
      update() {
        console.log(this.form);
        this.$v.form.$touch();
        if (!this.$v.form.$invalid) {
          this.$store
            .dispatch("erp/Assets/setting/maintenance/update", this.form)
            .then((res) => {
              this.form = { ...res.data.data[0] };
              const summery = res.statusText;
              const details = res.data.message;
              this.successToast(summery, details);
            })
            .catch((err) => {
              const summery = err.statusText;
              const details = err.data.message;
              this.errorToast(summery, details);
            });
        }
      },
      upsert() {
        this.update();
      },
  
      list() {
        this.$store.dispatch("erp/Assets/setting/maintenance/list").then((res) => {

          console.log(res)
          this.form = { ...res.data[0] };
            console.log(this.form)

        });
        // if (this.settings) {
        //   console.log(this.settings)
        //   this.form = { ...this.settings[0] };
        // }
      },
  
      fetchAll() {
        this.list();
      },
    },
  };
  </script>
    <style></style>
    
    