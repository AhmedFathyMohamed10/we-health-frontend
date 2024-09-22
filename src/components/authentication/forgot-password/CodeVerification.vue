<template>
  <div class="code-verification">
    <h2 class="mb-1 mt-3">{{ $t("title") }}</h2>
    <h6>{{ $t(`${type}.text`) }}</h6>
    <p class="text-muted my-4">{{ $t(`${type}.hint`) }}</p>
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <input
            v-model.trim="form.code"
            type="number"
            class="form-control"
            @keyup.enter.prevent="next"
            :placeholder="$t('code.placeholder')"
            :class="{
              'is-invalid':
                $v.form.code.$invalid && $v.form.code.$anyDirty && $v.form.code.$anyError,
            }"
          >
          <div v-if="!$v.form.code.required && $v.form.code.$error" class="invalid-feedback">
            {{
              requiredError($t("code.label"))}}
          </div>
          <div v-else-if="!$v.form.code.numeric && $v.form.code.$error" class="invalid-feedback">
            {{
              numericError($t("code.label"))}}
          </div>
          <div v-else-if="!$v.form.code.minLen && $v.form.code.$error" class="invalid-feedback">
            {{
              minLengthError($t("code.label"),$v.form.code.$params.minLen.min)}}
          </div>
          <div v-else-if="!$v.form.code.maxLen && $v.form.code.$error" class="invalid-feedback">
            {{
              maxLengthError($t("code.label"),$v.form.code.$params.maxLen.max)}}
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div class="remaining-time-wrapper my-2">
            <h6 class="mb-0">
                <strong>{{ $t('remaining')}} :</strong>
                <span class="me-1 text-primary">{{ countDown }} {{ $t('second')}}</span>
            </h6>
        </div>
        <div class="d-flex gap-3">
          <button
            :disabled="countDown != 0"
            class="btn btn-info-gradient btn-pill"
            @click.prevent="resend"
          >
          {{ $t("resend") }}
          </button>
          <button
            class="btn btn-success-gradient btn-pill"
            @click.prevent="next"
            >
            {{ $t("next") }}
          </button>
        </div>
    </div>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/codeVerification.json"></i18n>
<script>
import { required,numeric,minLength, maxLength } from "vuelidate/lib/validators";
import { requiredError,numericError,minLengthError, maxLengthError } from "@/validation/errors.js";
import { mapGetters,mapActions } from "vuex";

export default {
  name: "CodeVerification",
  components: {
  },
  data() {
    return {
      countDown: 60,
    };
  },
  computed:{
    ...mapGetters('auth/changePassword', {
        getForm: 'getForm',
      }),
      form: {
        get() {
            return this.getForm;
        },
        set(value) {
            this.setForm(value);
        }
      },
      type() {
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
        return emailPattern.test(this.form.phoneOrEmail)? 'email' :'phone';
			},
  },
  validations: {
    form:{
      code: {
        required,
        numeric,
        minLen:minLength(6),
        maxLen: maxLength(6),
      },
    }
  },
  mounted() {
    this.countDownTimer();
  },
  methods: {
    requiredError,
    numericError,
    minLengthError,
    maxLengthError,
    //////////////////
    ...mapActions('auth/changePassword',{
      setForm:'setForm',
    }),
    countDownTimer () {
        if (this.countDown > 0) {
            setTimeout(() => {
                this.countDown -= 1
                this.countDownTimer()
            }, 1000)
        }
    },
    async resend() {
      this.countDown = 60
      this.countDownTimer();
      await this.sendVerification({phoneOrEmail:this.form.phoneOrEmail})
      .then(res=>{
        console.log(res);
        const summary = res.statusText
        const details = "We have sent verification code for you successfully"
        this.successToast(summary,details);
        this.form.token = res.data.restPasswordCodeToken;
        this.$router.push({name:"phoneVerification"})
      })
    },
    next(){
      this.$v.$touch();
      if(!this.$v.$invalid){
        this.$router.push({name:'newPassword'})
      }
      else 
        console.log("Try Again Later")
    },
  },
};
</script>
<style lang="scss" scoped>
.code-verification {
}
</style>
