<template>
	<div class="signup">
		<Base>
			<div class="signup-wrapper">

				<div class="heading mb-5">
					<div class="d-flex justify-content-between align-items-center mb-3">
						<div class="back-btn" v-if="step>1">
							<button @click="back" class="btn btn-icon btn-success-gradient">
									<i class="fs-4 fa fa-angle-left" aria-hidden="true"></i>
							</button>
						</div>
						<h6 class="mb-0">{{ $t("step") }} {{ step }} / 3</h6>
					</div>
					<h2 class=""><b>{{ $t("signUp") }}</b></h2>
					<h6>{{ $t("slogan") }}</h6>
				</div>
	
				<div class="error" v-if="serverError">
					<Message severity="error" v-for="(value, key) in serverError.response.data" :key="key" :closable="false">
								<span v-if="(typeof value ==='string')">{{ value }}</span>
								<span v-else>{{ value[0] }}</span>
					</Message>
				</div>
	
				<form v-if="step===1">
					<div class="form-group">
							<label class="form-label">{{ $t("phoneOREmail.label") }}</label>
							<input 
								type="text" 
								class="form-control" 
								:placeholder="$t('phoneOREmail.placeholder')"
								v-model.trim="phoneOREmail"
								:class="{'is-invalid':$v.phoneOREmail.$error}" 
							/>
							<div v-if="!$v.phoneOREmail.required && $v.phoneOREmail.$error " class="invalid-feedback">
								{{ requiredError($t("phoneOREmail.label")) }}
							</div>
							<div v-if="!$v.phoneOREmail.valid && $v.phoneOREmail.$error " class="invalid-feedback">
								{{ inputError($t("phoneOREmail.label")) }}
							</div>
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
	
								<small v-if="!$v.form.password.minLength && $v.form.password.$error" class="p-invalid">
										{{minLengthError($t("form.password.label"),$v.form.password.$params.minLength.min)}}
								</small>
								<small v-else-if="!$v.form.password.maxLength && $v.form.password.$error"	class="p-invalid">
										{{maxLengthError($t("form.password.label"),$v.form.password.$params.maxLength.max)}}
								</small>
					</div>
					<div class="text-center">
								<button type="submit" class="btn btn-secondary-gradient btn-pill w-50 "
										@click.prevent="moveToStep3">
										{{ $t("continue") }}
								</button>
					</div>
					<div class="mt-2">
							<router-link class="custom-responsive-mob-link blue-light-color-palette" :to="{name:'signin'}">
								{{ $t("haveAccount")}}
							</router-link>
						</div>
					<div>
							<Divider :label="$t('or')"></Divider>
					</div>
					<div class="d-flex justify-content-center">
							<a href="javascript:void(0)">
									<div class="social-login me-4 text-center green-color-palette">
											<i class="fa fa-google"></i>
									</div>
							</a>
							<a href="javascript:void(0)">
									<div class="social-login me-4 text-center green-color-palette">
											<i class="fa fa-facebook"></i>
									</div>
							</a>
							<a href="javascript:void(0)">
									<div class="social-login me-4 text-center green-color-palette">
											<i class="fa fa-apple"></i>
									</div>
							</a>
					</div>
					<div class="mt-4 custom-responsive-mob-link">
							<router-link to="/auth">{{
									$t("business.link")
							}}</router-link>
							<span>{{ $t("business.text") }}</span>
					</div>
				</form>
	
				<div v-if="step===2">
					<h4 class="mb-3">{{ $t("verifyHeader") }}</h4>
					<p>{{ $t("verifyMessage") }}</p>
					<form>
							<div class="code w-50 w-sm-100">
								<div class="form-group">
									<input 
										type="tele" 
										class="form-control" 
										:placeholder="$t('code.placeholder')"
										v-model.trim="code"
										:class="{'is-invalid':$v.code.$error}" 
									/>
									<div v-if="!$v.code.numeric && $v.code.$error " class="invalid-feedback">
										{{ numericError($t("code.label")) }}
									</div>
									<div v-else-if="!$v.code.maxLength"	class="invalid-feedback">
										{{maxLengthError($t("code.label"),$v.code.$params.maxLength.max)}}
									</div>
								</div>
								<div class="remaining-time-wrapper">
										<h6 class="mb-0 px-3">
												<span class="">{{ $t('remaining')}}</span>
												<span class="text-primary mx-1">{{ countDown }}</span>
												<span>{{ $t('second')}}</span>
										</h6>
								</div>
							</div>
							<div class="buttons d-flex gap-3 mt-5 justify-content-end">
									<button	@click.prevent="verifyPhone" class="btn btn-success-gradient btn-pill">
											{{ $t("Verify") }}
									</button>
	
									<button @click.prevent="resendCode" :disabled="countDown>0"	class="btn btn-info-gradient btn-pill">
											{{ $t("resend") }}
									</button>
							</div>
					</form>
				</div>
	
				<form v-if="step===3">
					<div class="row">
						<div class="col-md-7">
							<div class="form-group">
									<label class="form-label">{{ $t("form.fullname.label") }}</label>
									<input 
										type="text" 
										class="form-control" 
										:placeholder="$t('form.fullname.placeholder')"
										v-model.trim="form.fullname"
										:class="{'is-invalid':$v.form.fullname.$error}" 
									/>
									<div v-if="!$v.form.fullname.required && $v.form.fullname.$error " class="invalid-feedback">
										{{ requiredError($t("form.fullname.label")) }}
									</div>
									<div v-else-if="!$v.form.fullname.valid && $v.form.fullname.$error " class="invalid-feedback">
										{{ inputError($t("form.fullname.label")) }}
									</div>
									<div v-else-if="!$v.form.fullname.maxLength"	class="invalid-feedback">
										{{maxLengthError($t("form.fullname.label"),$v.form.fullname.$params.maxLength.max)}}
									</div>
							</div>
						</div>
						<div class="col-md-5">
							<div class="form-group">
									<label class="form-label">{{ $t("form.username.label") }}</label>
									<input 
										type="text" 
										class="form-control" 
										:placeholder="$t('form.username.placeholder')"
										v-model.trim="form.username"
										:class="{'is-invalid':$v.form.username.$error}" 
									/>
									<div v-if="!$v.form.username.required && $v.form.username.$error " class="invalid-feedback">
										{{ requiredError($t("form.username.label")) }}
									</div>
							</div>
						</div>
					</div>
					<div class="email" v-if="isPhone">
						<div class="form-group">
								<label class="form-label">{{ $t("form.email.label") }}</label>
								<input 
									type="email" 
									class="form-control" 
									:placeholder="$t('form.email.placeholder')"
									v-model.trim="form.email"
									:class="{'is-invalid':$v.form.email.$error}" 
								/>
								<div v-if="!$v.form.email.required && $v.form.email.$error " class="invalid-feedback">
									{{ requiredError($t("form.email.label")) }}
								</div>
								<div v-else-if="!$v.form.email.email && $v.form.email.$error " class="invalid-feedback">
									{{ emailError($t("form.email.label")) }}
								</div>
						</div>
					</div>
					<div class="mobile" v-if="isEmail">
						<div class="form-group">
								<label class="form-label">{{ $t("form.mobile.label") }}</label>
								<input 
									type="tele" 
									class="form-control" 
									:placeholder="$t('form.mobile.placeholder')"
									v-model.trim="form.mobile"
									:class="{'is-invalid':$v.form.mobile.$error}" 
								/>
								<div v-if="!$v.form.mobile.required && $v.form.mobile.$error " class="invalid-feedback">
									{{ requiredError($t("form.mobile.label")) }}
								</div>
								<div v-else-if="!$v.form.mobile.mobile && $v.form.mobile.$error " class="invalid-feedback">
									{{ inputError($t("form.mobile.label")) }}
								</div>
						</div>
						<div class="send-code" v-if="!codeSent" :class="{'rtl-send-code':locale==='ar'}">
								<button class="btn btn-success-gradient btn-pill" @click.prevent="sendCode">
									{{ $t('send') }}
								</button>
						</div>
						<div class="code-verified px-3 d-flex align-items-center text-primary" v-if="phoneVerified" :class="{'rtl-code-verified':locale==='ar'}">
								<span class="mx-2">{{$t('verified')}}</span>
								<span><i class="pi pi-check-circle"></i></span>
						</div>
						<div class="row" v-if="codeSent && !phoneVerified">
							<div class="col-sm-6">
								<div class="form-group">
									<input 
										type="tele" 
										class="form-control" 
										:placeholder="$t('code.placeholder')"
										v-model.trim="code"
										:class="{'is-invalid':$v.code.$error}" 
									/>
									<div v-if="!$v.code.numeric && $v.code.$error " class="invalid-feedback">
										{{ numericError($t("code.label")) }}
									</div>
									<div v-else-if="!$v.code.maxLength"	class="invalid-feedback">
										{{maxLengthError($t("code.label"),$v.code.$params.maxLength.max)}}
									</div>
								</div>
							</div>
							<div class="col-sm-6" v-if="countDown>0">
								<div class="verify">
									<div class="d-flex justify-content-between align-items-center">
											<div class="remaining-time-wrapper">
													<h6 class="mb-0 px-3">
															<div class="">{{ $t('remaining')}}</div>
															<div class="text-primary">{{ countDown }} {{ $t('second')}}</div>
													</h6>
											</div>
											<button
											class="btn btn-secondary-gradient btn-pill"
											@click.prevent="verifyPhone"
											>
											{{ $t("verify") }}
											</button>
									</div>
								</div>
							</div>
							<div class="col-sm-6" v-if="countDown<=0">
								<div class="verify">
									<div class="d-flex justify-content-between align-items-center">
											<div class="remaining-time-wrapper">
													<h6 class="mb-0 px-3">
															<div class="">{{ $t('Did not get it?')}}</div>
													</h6>
											</div>
											<button
											class="btn btn-success-gradient btn-pill"
											@click.prevent="resendCode"
											>
											{{ $t("Resend") }}
											</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group dob">
						<label class="form-label">{{ $t("form.dob.label") }}</label>
						<Calendar
							v-model="form.dob"
							:placeholder="$t('form.dob.placeholder')"
							:showIcon="true"
							:class="{'p-invalid':$v.form.dob.$error && !$v.form.dob.date}"
							dateFormat="mm-dd-yy"
							@date-select="formateDate($event)"
						/>
						<small class="p-invalid" v-if="$v.form.dob.$error && !$v.form.dob.date">
								{{ dateError($t('form.dob.label'))}}
						</small>
					</div>
					<div class="form-group gender">
						<label class="form-label">{{ $t("form.gender.label") }}</label>
						<Dropdown v-model="form.gender" 
						:options="genderOptions" 
						optionLabel="value" 
						optionValue="value" 
						:placeholder="$t('form.gender.placeholder')"
						:class="{'p-invalid':$v.form.gender.$error && !$v.form.gender.date}"  
						/>
						<small v-if="!$v.form.gender.required && $v.form.gender.$error " class="p-invalid">
									{{ requiredError($t("form.gender.label")) }}
						</small>
					</div>
					<div class="text-center">
								<button type="submit" class="btn btn-secondary-gradient btn-pill w-50" @click.prevent="signup">
										<span v-if="isLoading"><i class="pi pi-spin pi-spinner" style="font-size:1rem"></i></span>
                		<span :class="isLoading ? 'mx-2' : ''">{{ $t('done') }}</span>
								</button>
					</div>
				</form>
			</div>

		</Base>

	</div>
</template>
<i18n src="@/lang/authentication/signUp/signUp.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from '@/components/global/utilities/Divider'
import { mapGetters,mapActions } from "vuex";
/////////////////////////////////////
import { required, maxLength, minLength,email,numeric } from "vuelidate/lib/validators";
import {requiredError,inputError,maxLengthError,unauthorizedError,minLengthError,dateError, emailError,numericError} from "@/validation/errors.js";
import moment from 'moment';

/////////////////////////////
import axios from "axios";
import { urls } from "@/backend/urls.js";
import toast from "@/mixins/global/toast"
export default {
		name: "Signup",
		mixins:[toast],
    components: {
        Base,
        Divider
    },
    data() {
        return {
					step:1,
					phoneOREmail:"mahmoud1@gmail.com",
					genderOptions:[
						{id:1,value: "Male"},
						{id:2,value: "Female"},
						{id:3,value:"other"}
					],
					codeSent:false,
					code:"",
					phoneVerified:false,
					countDown:60,

        };
    },
		computed: {
			...mapGetters('auth/signup', {
				getForm: 'getForm',
				isLoading: 'getServerLoading',
				getServerResponse: 'getServerResponse',
				getServerError: 'getServerError',
			}),
			serverResponse: {
				get() {
					return this.getServerResponse;
				},
				// set(value) {
				// 	this.setServerResponse(value);
				// },
			},
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
			isEmail() {
				const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
				return emailPattern.test(this.phoneOREmail);
			},
			isPhone() {
				const phonePattern = /^(?:[0-9] ?){6,14}[0-9]$/;
				return phonePattern.test(this.phoneOREmail);
			},
			type() {
				return this.isEmail? 'email' :'mobile';
			},
		},
		validations: {
			phoneOREmail: {
					required,
					valid(value) {
							if (!value) return true;
							else if (this.isEmail || this.isPhone) return true;
							else return false;
					}
			},
			code:{
				numeric,
				maxLength: maxLength(6),
			},
			form: {
				password: {
					required,
					maxLength: maxLength(255),
					minLength: minLength(8)
				},
				fullname: {
					required,
					maxLength: maxLength(255),
				},
				username: {
					required,
					maxLength: maxLength(255),
					valid(value) {
							if (!value) return true;
							if (value.search(/^[a-z0-9_.]+$/g) != -1) return true;
					},
				},
				dob: {
					required,
					date: (value) => {
						if(value === null || value === ''){
							return true;
						}
						else {
							return moment(value).isValid();
						}
          },
				},
				email: {
					email,
					required,
				},
				mobile: {
					required,
					mobile(value) {
						const phonePattern = /^(?:[0-9] ?){6,14}[0-9]$/;
						if (!value) return true;
						else return phonePattern.test(value);
					}
				},
				gender: {
					required,
				},
			}
    },
		watch: {
			phoneOREmail(){
				if(this.isEmail){
					this.form.email = this.phoneOREmail
					this.form.mobile=''
				}
				else if(this.isPhone){
					this.form.mobile = this.phoneOREmail
					this.form.email=''
				}
			},
			'form.mobile'(){
				this.phoneVerified=false;
				this.codeSent=false;
				this.code=null;
			},
		},
    methods: {
			...mapActions('auth/signup',{
          setForm:'setForm',
          signupStep1:'signupStep1',
          sendVerificationCode:'sendVerificationCode',
          verifyPhoneNumber:'verifyPhoneNumber',
          register:'register',
        }),
				//////////////////////////////////
				requiredError,
				inputError,
				unauthorizedError,
				minLengthError,
				maxLengthError,
				dateError,
				emailError,
				numericError,
				///////////////////////////////
				formateDate(event){
          this.form.dob = this.$moment(event, 'YYYY-MM-DD', true).format('YYYY-MM-DD');
				},
				countDownTimer () {
						if (this.countDown > 0) {
								setTimeout(() => {
										this.countDown -= 1
										this.countDownTimer()
								}, 1000)
						}
				},
				back(){
					this.step=1;
				},
				/////////////////////////////////////
        async moveToStep3() {
            this.$v.phoneOREmail.$touch();
            this.$v.form.password.$touch();
            if (!this.$v.phoneOREmail.$invalid && !this.$v.form.password.$invalid) {
                let data = {
                    "type": this.type,
                    "signupField": this.phoneOREmail,
                    "lang": this.$i18n.locale
                };
								await this.signupStep1(data).then((res) => {
									console.log(res)
									if (res.status===200) {
										this.successToast();
										if(this.isEmail){
											this.step=3;	
										}
										else if (this.isPhone){
											this.step=2;	
											this.sendCode();
										}
									}
								})
            }
        },
				async sendCode (){
					await this.sendVerificationCode({mobile:this.form.mobile}).then(() => {
						this.codeSent=true;
						this.successToast();
						this.countDownTimer();
					})
				},
				async verifyPhone() {
					await this.verifyPhoneNumber({code:this.code,mobile:this.form.mobile}).then(() => {
						if(this.step===2){
							this.step=3
						}
						this.phoneVerified=true;
						this.successToast();
					})
				},
				resendCode() {
					this.countDown=60;
					this.sendCode();
				},
				async signup(){
					this.$v.form.$touch();
					if (!this.$v.form.$invalid) {
							localStorage.removeItem("tokens");
							await this.register(this.form).then((res) => {
								// console.log(res)
								if (res.status===200) {
									this.successToast();
									this.$router.push({name:"signin"})
								}
							})
					}
				},

    },
};
</script>

<style lang="scss" scoped>
.signup{
	// .signup-wrapper{
	// 	max-height:90vh;
	// 	overflow-y: auto;
	// }
}
.mobile{
	position: relative;
	.send-code{
		position: absolute;
		top: 28px;
    left: auto;
    right: 0px;
	}
	.rtl-send-code{
		left: 0px;
		right: auto !important;
	}
	.code-verified{
		position: absolute;
		top: 35px;
    left: auto;
    right: 0px;
	}
	.rtl-code-verified{
		left: 0px;
		right: auto !important;
	}
	.verify{
		border: 1px solid $primary;
		border-radius: 2rem;
	}
	
}
</style>
