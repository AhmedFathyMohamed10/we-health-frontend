<template>
    <div class="authentication">
        <!-- <Loader /> -->
        <video autoplay muted loop plays-inline class="bg-video">
            <source src="@/assets/authentication/bg-vid.mp4">
        </video>
        <div class="content">
            <div class="container">
                <div class="row lang-selection">
                    <div class="col-12">
                        <Language />
                    </div>
                </div>
                <div class="row auth-wrapper d-flex justify-content-center align-items-center">
                    <div class="col-md-4 col-lg-6 col-xxl-7">
                        <div class="app-name d-flex justify-content-center align-items-center">
                            <h1 class="">We Health IT App Dev</h1>
                        </div>
                    </div>
                    <div class="col-md-8 col-lg-6 col-xxl-5">
                        <div class="auth-routes d-flex justify-content-center align-items-center">
                            <router-view class="flex-grow-1"></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Language from '@/components/global/utilities/Language';
// import Loader from '@/components/global/utilities/Loader.vue';
import { mapGetters,mapActions } from "vuex";

export default {
    components:{
        Language,
        // Loader
    },
    computed:{
        ...mapGetters('auth/user', {
            getUser: 'getUser',
            getIsAuthenticated: 'getIsAuthenticated',
        }),
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
    methods:{
        ...mapActions('auth/user',{
            setUser:'setUser',
            setIsAuthenticated:'setIsAuthenticated',
            getProfile:'getProfile',
        }),
    },
    created(){
        if (localStorage.getItem('tokens')) {
            this.getProfile()
						.then(()=>{
							if(this.isAuthenticated){
								this.$router.push({name:'home'});
							}
						})
						.catch(()=>{
								localStorage.removeItem('tokens')
						})
        }
    }

}
</script>
<style lang="scss" scoped>
.authentication{
    width: 100%;
    height: 100vh;
    position: relative;
    padding:10px;
    .bg-video{
        position: absolute;
        right: 0;
        bottom: 0;
        // z-index: -1;
        min-width: 100%; 
        min-height: 100%;
    }
    .content{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        min-width: 100%; 
        min-height: 100%;
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
        overflow: auto;
        .lang-selection{
            
        }
        .app-name{
            color: $primary;
            text-align: center;
        }
        .auth-routes{
        }
        .auth-wrapper{
            min-height: 80vh;
        }
    }
    .auth-routes{
        // max-height: 90vh;
        // overflow-y: auto;
    }
}
@media(min-aspect-ratio:16/9){
    .bg-video{
        width: 100%;
        height: auto;
    }
}
@media(max-aspect-ratio:16/9){
    .bg-video{
        width: auto;
        height: 100%;
    }
}


</style>
