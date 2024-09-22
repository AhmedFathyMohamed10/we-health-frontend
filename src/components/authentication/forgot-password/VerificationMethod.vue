<template>
  <div class="verification-method">
    <h2 class="mb-1 mt-3">{{ $t("title") }}</h2>
    <h6>{{ $t("text") }}</h6>
    <form>
        <div class="custom-controls-stacked">
            <label class="custom-control custom-radio-md">
                <input
                type="radio"
                class="custom-control-input"
                name="verification-method"
                value="email"
                v-model="method"
                />
                <span class="custom-control-label">
                    <strong>{{ $t('email') }}: </strong>
                    <small class="text-muted ms-1" v-if="user">{{hideEmail(user.email)}}</small>
                </span>
            </label>
            <label class="custom-control custom-radio-md">
                <input
                type="radio"
                class="custom-control-input"
                name="verification-method"
                value="phone"
                v-model="method"
                />
                <span class="custom-control-label">
                    <strong>{{ $t('phone') }}: </strong>
                    <small class="text-muted ms-1" v-if="user">{{ hidePhone(user.mobile) }}</small>
                </span>
            </label>
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-success-gradient btn-pill" @click.prevent="next">
              {{ $t('next') }}
          </button>
        </div>
    </form>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/verificationMethod.json"></i18n>
<script>
import {hideEmail,hidePhone} from '@/helpers/utilities'
import { mapGetters,mapActions } from "vuex";
import toast from "@/mixins/global/toast"

export default {
  name: "VerificationMethod",
  mixins:[toast],
  components: {},
  data() {
    return {
          method:"email",
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
      ...mapGetters('auth/user', {
        getUser: 'getUser',
      }),
      user: {
        get() {
          return this.getUser;
        },
        set(value) {
          return this.setUser(value);
        }
      },
    },
    created(){
        if(!this.user)
        this.$router.push({name:'findAccount'})
    },
    methods:{
        hideEmail,
        hidePhone,
        ...mapActions('auth/user',{
          setUser:'setUser',
        }),
        ///////////////////////
        ...mapActions('auth/changePassword',{
          setForm:'setForm',
          sendVerification:'sendVerification',
        }),
        async next() {
            if(this.method=="email"){
              this.form.phoneOrEmail=this.user.email;
            }
            else{
                this.form.phoneOrEmail=this.user.mobile;
            }
            await this.sendVerification({phoneOrEmail:this.form.phoneOrEmail})
            .then(res=>{
              console.log(res);
              const summary = res.statusText
              const details = "We have sent verification code for you successfully"
              this.successToast(summary,details);
              this.form.token = res.data.restPasswordCodeToken;
              this.$router.push({name:"codeVerification"})
            })
        },
    }
};
</script>

