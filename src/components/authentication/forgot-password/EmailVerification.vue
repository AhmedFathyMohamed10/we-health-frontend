<template>
  <div class="email-verification">
    <h2 class="mb-1 mt-3">{{ $t("title") }}</h2>
    <h6>{{ $t("text") }}</h6>
    <p class="text-muted my-4">{{ $t("hint") }}</p>
    <div class="d-flex justify-content-between align-items-center flex-wrap">
        <div class="remaining-time-wrapper my-2">
            <h6 class="mb-0">
                <strong>{{ $t('remaining')}} :</strong>
                <span class="me-1 text-primary">{{ countDown }} {{ $t('second')}}</span>
            </h6>
        </div>
        <button
        :disabled="countDown != 0"
        class="btn btn-success-gradient btn-pill"
        @click.prevent="resend"
        >
        {{ $t("resend") }}
        </button>
    </div>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/emailVerification.json"></i18n>
<script>
export default {
  name: "EmailVerification",
  components: {
  },
  data() {
    return {
      countDown: 60,
    };
  },
  mounted() {
    this.countDownTimer();
  },
  methods: {
    countDownTimer () {
        if (this.countDown > 0) {
            setTimeout(() => {
                this.countDown -= 1
                this.countDownTimer()
            }, 1000)
        }
    },
    resend() {
      if (this.countDown === 0) {
        this.countDown = 60
        this.countDownTimer();
        console.log("resend email")
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.email-verification {
}
</style>
