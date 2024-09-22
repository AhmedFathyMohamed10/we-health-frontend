<template>
  <div class="new-password">
    <h2 class="mb-0">{{ $t("title") }}</h2>
    <h5>{{ $t("text") }}</h5>
    <div class="error" v-if="serverError">
      <Message severity="error" v-for="(value, key) in serverError.response.data" :key="key" :closable="false">
          <span v-if="(typeof value ==='string')">{{ value }}</span>
          <span v-else>{{ value[0] }}</span>
      </Message>
    </div>
    <div class="form-group">
      <label class="form-label">{{ $t("form.password.label") }}</label>
      <Password 
        v-model="form.password"
        :placeholder="$t('form.password.placeholder')"  
        :class="{'p-invalid':$v.form.password.$error}"
        toggleMask 
      >
      </Password>
      <small v-if="!$v.form.password.required && $v.form.password.$error" class="p-invalid">
          {{ requiredError($t("form.password.label")) }}
      </small>

      <small v-else-if="!$v.form.password.minLength && $v.form.password.$error" class="p-invalid">
          {{minLengthError($t("form.password.label"),$v.form.password.$params.minLength.min)}}
      </small>
 
      <small v-else-if="!$v.form.password.maxLength && $v.form.password.$error"	class="p-invalid">
          {{maxLengthError($t("form.password.label"),$v.form.password.$params.maxLength.max)}}
      </small>
    </div>
    <div class="form-group">
      <label class="form-label">{{ $t("form.confirmPassword.label") }}</label>
      <Password 
        v-model="form.confirmPassword"
        :placeholder="$t('form.confirmPassword.placeholder')"  
        :class="{'p-invalid':$v.form.confirmPassword.$error}"
        toggleMask 
      >
      </Password>
      <small v-if="!$v.form.confirmPassword.sameAs && $v.form.confirmPassword.$error" class="p-invalid">
          {{ sameAsError($t("form.password.label")) }}
      </small>
    </div>
    <div class="d-flex justify-content-end gap-3">
      <button class="btn btn-success-gradient btn-pill" @click.prevent="newPassword">
        {{ $t("done") }}
      </button>
      <button
        class="btn btn-danger-gradient btn-pill"
        @click.prevent="$router.push({ name: 'login' })"
      >
        {{ $t("cancel") }}
      </button>
    </div>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/newPassword.json"></i18n>
<script>
import {required,minLength,maxLength,sameAs} from "vuelidate/lib/validators";
import {requiredError,minLengthError,maxLengthError,sameAsError} from "@/validation/errors.js";
import { mapGetters,mapActions } from "vuex";
import toast from "@/mixins/global/toast"
export default {
  name: "NewPassword",
  mixins:[toast],
  components: {},
  data() {
    return {
      // form:{
      //   password: "",
      //   confirmPassword: "",
      // },
    };
  },
  computed:{
    ...mapGetters('auth/changePassword', {
        getForm: 'getForm',
        getServerError: 'getServerError',
      }),
      serverError: {
        get() {
          return this.getServerError;
        },
        // set(value) {
        // 	this.setServerError(value);
        // },
      },
      form: {
        get() {
            return this.getForm;
        },
        set(value) {
            this.setForm(value);
        }
      },
  },
  validations: {
    form:{
      password: {
        required,
        maxLength: maxLength(255),
        minLength: minLength(8)
      },
      confirmPassword: {
        sameAs: sameAs("password"),
      },
    },
  },
  methods: {
    requiredError,
    minLengthError,
    maxLengthError,
    sameAsError,
    ////////////////////
    ...mapActions('auth/changePassword',{
      setForm:'setForm',
      changePassword:'changePassword',
    }),
    async newPassword() {
      this.$v.form.$touch();
      if (!this.$v.form.$invalid) {
        await this.changePassword(this.form)
        .then(res=>{
          console.log(res);
          const summary = res.statusText
          const details = res.data.success
          this.successToast(summary,details);
          this.$router.push({name:"home"})
        })
      } 
      else console.log("Try Again Later");
    },
  },
};
</script>
<style lang="scss" >
.new-password {}
</style>
