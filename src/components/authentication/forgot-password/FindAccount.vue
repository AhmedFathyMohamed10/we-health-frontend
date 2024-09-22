<template>
  <div class="find-account">
        <h2 class="mb-1 mt-3 blue-navy-color-palette"><b>{{ $t('title') }}</b></h2>
        <h6>{{ $t('text') }}</h6>
        <div class="error" v-if="serverError">
            <Message severity="error" v-for="(value, key) in serverError.response.data" :key="key" :closable="false">
                        <span v-if="(typeof value ==='string')">{{ value }}</span>
                        <span v-else>{{ value[0] }}</span>
            </Message>
        </div>
        <form>
            <div class="form-group mt-4">
                <label><strong>{{ $t('form.phoneOrEmailOrUsername.label') }}</strong></label>
                <div class="d-flex gap-3 align-items-sm-start flex-wrap flex-sm-nowrap">
                    <div class="flex-grow-1">
                        <input
                            type="text"
                            class="form-control"
                            :placeholder="$t('form.phoneOrEmailOrUsername.placeholder')"
                            v-model.trim="form.phoneOrEmailOrUsername"
                            :class="{'is-invalid':$v.form.phoneOrEmailOrUsername.$error}"
                            @keyup.enter.prevent="checkUserExists"
                        >
                        <div v-if="!$v.form.phoneOrEmailOrUsername.required && $v.form.phoneOrEmailOrUsername.$error" class="invalid-feedback">
                            {{requiredError($t('form.phoneOrEmailOrUsername.label'))}}
                        </div>
                        <div v-else-if="!$v.form.phoneOrEmailOrUsername.valid && $v.form.phoneOrEmailOrUsername.$error" class="invalid-feedback">
                            {{inputError($t('form.phoneOrEmailOrUsername.label'))}}
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-secondary-gradient btn-pill" @click.prevent="checkUserExists">
                            {{ $t('next') }}
                        </button>
                    </div>
                </div>
            </div>
        </form>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/findAccount.json"></i18n>
<script>
import {required} from "vuelidate/lib/validators";
import {requiredError,inputError}from "@/validation/errors.js";
/////////////////////////////
import axios from 'axios';
import {urls} from "@/backend/urls.js";
import { mapGetters,mapActions } from "vuex";
import toast from "@/mixins/global/toast"
export default {
    name: 'login',
    mixins:[toast],
    components:{
    },
    data(){
        return {
            form:{
              phoneOrEmailOrUsername:'',
            },
        }
    },
    computed:{
        ...mapGetters('auth/user', {
            getUser: 'getUser',
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
      user: {
				get() {
					return this.getUser;
				},
				set(value) {
					return this.setUser(value);
				}
			},
    },
    validations:{
        form:{
          phoneOrEmailOrUsername:{
            required,
            valid(value){
              if(!value)
                  return true
              else if (value.search( /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}/g) != -1)
                  return true
              else if (value.search( /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/gi) != -1)
                  return true
              else if (value.search( /^[a-z0-9_.]+$/g) != -1)
                  return true
              else
                  return false
            },
          },
        },
    },
    methods:{
      requiredError,
      inputError,
      ///////////////////////
      ...mapActions('auth/user',{
				findUser:'findUser',
        setUser:'setUser',
      }),
      async checkUserExists(){
					this.$v.form.phoneOrEmailOrUsername.$touch()
					if (!this.$v.form.phoneOrEmailOrUsername.$invalid) {
						await this.findUser({lang:"en",phoneOrEmailOrUsername:this.form.phoneOrEmailOrUsername}).then(res=>{
							console.log(res);
							this.successToast();
							this.user = res.data.user;
              this.$router.push({name:"accountPreview"})
						})
					}
				},
    }
}
</script>
<style lang="scss" scoped>
.find-account {}

</style>
