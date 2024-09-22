<template>
  <div class="signin">
    <Base v-if="!user">
        <h2 class="">{{ $t('signIn') }}</h2>
        <div class="error" v-if="serverError">
            <Message severity="error" v-for="(value, key) in serverError.response.data" :key="key" :closable="false">
                        <span v-if="(typeof value ==='string')">{{ value }}</span>
                        <span v-else>{{ value[0] }}</span>
            </Message>
        </div>
        <span>{{ $t('first') }} <router-link :to="{name:'signup'}">{{ $t('signUp') }}</router-link></span>
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
                            {{ $t('continue') }}
                        </button>
                    </div>
                </div>
            </div>
            <router-link :to="{name:'findAccount'}" >{{ $t('forgetPassword') }}</router-link>
            <div><Divider :label="$t('or')"></Divider></div>
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
                <a href="javascript:void(0)">
                    <div class="social-login me-4 text-center green-color-palette">
                        <i class="fa fa-twitter"></i>
                    </div>
                </a>
            </div>
            <div class="mt-4">
                <span @click.prevent="checkAuth" class="text-success custom-cursor">{{$t("business.link")}}</span>
				        <ConfirmPopup :target="'signin'"></ConfirmPopup>
                <span>{{ $t("business.text") }}</span>
            </div>
        </form>
    </Base>

    <Base v-if="user">
        <div class="back-btn">
                <button @click="back" class="btn btn-icon btn-success-gradient">
                        <i class="fs-4 fa fa-angle-left" aria-hidden="true"></i>
                </button>
            </div>
        <div class="error" v-if="serverError">
            <Message severity="error" v-for="(value, key) in serverError.data" :key="key" :closable="false">
                        <span v-if="(typeof value ==='string')">{{ value }}</span>
                        <span v-else>{{ value[0] }}</span>
            </Message>
        </div>
        <div class="user text-center">
						<Avatar :image="user.image" class="mr-2" size="xlarge" shape="circle" v-if="user.image" />
						<Avatar icon="pi pi-user" class="mr-2" size="xlarge" v-else />
            <h5 class="mb-1">{{user.fullName}}</h5>
        </div>
        <form>
            <div class="form-group mt-4">
                <label><strong>{{ $t('form.password.label') }}</strong></label>
                <div class="d-flex gap-3 align-items-sm-start flex-wrap flex-sm-nowrap">
                    <div class="flex-grow-1">
											<Password 
												v-model="form.password"
												:placeholder="$t('form.password.placeholder')"  
												:class="{'p-invalid':$v.form.password.$error}"
												toggleMask 
												@keyup.enter.prevent="signIn"
											>
											</Password>
											<small v-if="!$v.form.password.required && $v.form.password.$error" class="p-invalid">
													{{ requiredError($t("form.password.label")) }}
											</small>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-success-gradient btn-pill" @click.prevent="signIn" >
                            {{ $t('signIn') }}
                        </button>
                    </div>
                </div>
            </div>
            <router-link :to="{name:'findAccount'}" >{{ $t('forgetPassword') }}</router-link>
            <div class="form-group mt-2">
                <label class="custom-switch">
                    <input type="checkbox" 
                    name="custom-switch-checkbox" 
                    class="custom-switch-input" 
                    v-model="rememberMe">
                    <span class="custom-switch-indicator green-bg-color-palette"></span>
                    <span class="custom-switch-description blue-navy-color-palette">{{$t('stay')}}</span>
                </label>
            </div>
            <div><Divider :label="$t('or')"></Divider></div>
            <div class="mt-4  d-flex justify-content-center align-items-center">
                <span><i class="fa fa-refresh fa-lg green-color-palette" aria-hidden="true"></i></span> 
                <a class="nav-link" @click="switchAccount" >{{$t('differentAccount')}}</a>
            </div>
        </form>
    </Base>
  </div>
</template>
<i18n src="@/lang/authentication/signin/signin.json"></i18n>

<script>
import Base from "@/components/global/utilities/Base.vue";
import Divider from '@/components/global/utilities/Divider'
/////////////////////////////////////
import {required} from "vuelidate/lib/validators";
import {requiredError,inputError}from "@/validation/errors.js";
/////////////////////////////
import { mapGetters,mapActions } from "vuex";
import axios from 'axios';
import {urls} from "@/backend/urls.js";
import toast from "@/mixins/global/toast"
export default {
		name: 'Signin',
		mixins:[toast],
    components:{
        Base,
        Divider,
    },
    data(){
        return {
			rememberMe:true,
            // user:null,         
			// isAuthenticated:false,   
        }
    },
		computed:{
			...mapGetters('auth/signin', {
				getForm: 'getForm',
				serverLoading: 'getServerLoading',
				getServerResponse: 'getServerResponse',
				getServerError: 'getServerError',
			}),
			...mapGetters('auth/user', {
				getUser: 'getUser',
				getIsAuthenticated: 'getIsAuthenticated',
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
			user: {
				get() {
					return this.getUser;
				},
				set(value) {
					return this.setUser(value);
				}
			},
			isAuthenticated: {
				get() {
					return this.getIsAuthenticated;
				},
				set(value) {
					return this.setIsAuthenticated(value);
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
				password:{
						required,
				},
			},
    },
    created(){
        // console.log(urls)
        // create axios instance
        this.myAxios =axios.create({
            baseURL: `${urls.auth.baseUrl}`,
        });
    },
    methods:{
			requiredError,
			inputError,
			///////////////////////
			...mapActions('auth/signin',{
					setForm:'setForm',
					login:'login',
					findUser:'findUser',
			}),
			...mapActions('auth/user',{
				setUser:'setUser',
                setIsAuthenticated:'setIsAuthenticated',
				setTokens:'setTokens',
			}),
			//////////////////////////////////
			back(){
					this.user=null;
			},
			async checkUserExists(){
					this.$v.form.phoneOrEmailOrUsername.$touch()
					if (!this.$v.form.phoneOrEmailOrUsername.$invalid) {
							await this.findUser({lang:"en",phoneOrEmailOrUsername:this.form.phoneOrEmailOrUsername}).then(res=>{
									console.log(res);
									this.successToast();
									this.user = res.data.user;
							})
					}
			},
			async signIn(){
					this.$v.form.$touch()
					if (!this.$v.$invalid) {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
							await this.login(this.form)
							.then(res=>{
									console.log(res);
									this.successToast();
									this.setUser(res.data.user);
									const {access,refresh} = res.data.user.tokens; 
									localStorage.setItem("accessToken",access);
									localStorage.setItem("refreshToken",refresh);
									this.setTokens({access:access,refresh:refresh});
									this.setIsAuthenticated(true);
                                    const queryExists = this.$route.query.redirect
                                    if(queryExists){
                                        this.$router.push(this.$route.query.redirect)
                                    }
                                    else {
                                        window.location.href = "/profile"
                                    }

									// this.$router.push({name:'home'})
							})
					}
			},
			switchAccount(){
					this.$router.push({name:'signin'})
					this.user=null;
			},
			checkAuth(){
				if(!this.isAuthenticated){
          let message = {
              en:"You need to be logged in to continue",
              ar:"تحتاج الي تسجيل الدخول للاستمرار"
          }
          this.$confirm.require({
              target: event.currentTarget,
              message:message[this.locale],
              icon: 'pi pi-exclamation-triangle',
              accept: () => {
                  this.$confirm.close();
                  this.$router.push({name: 'signin',query: { redirect:'/business'}})
              },
              reject: () => {
                  this.$confirm.close();
                  //callback to execute when user rejects the action
              }
          })
        }
        else {
          this.$router.push({name:'business'});
        }
			},
    }
}
</script>

<style scoped>
.custom-cursor{
    cursor: pointer;
}
</style>
