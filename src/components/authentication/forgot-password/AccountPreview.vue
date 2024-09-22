<template>
  <div class="account-preview">
    <div class="">
      <h2 class="mb-1">{{ $t('title') }}</h2>
      <h6>{{ $t('text') }}</h6>
      <div class="user d-flex justify-content-end">
        <div class="text-center" v-if="user">
          <Avatar :image="user.image" class="mr-2" size="xlarge" shape="circle" v-if="user.image" />
          <Avatar icon="pi pi-user" class="mr-2" size="xlarge" v-else />
          <h5 class="mb-1">{{user.fullName}}</h5>
        </div>
      </div>
    </div>
        <div class="mt-3 d-flex justify-content-end gap-2">
            <button type="submit" class="btn btn-success-gradient btn-pill" 
            @click.prevent="goNext">
                {{ $t('yes') }}
            </button>
            <button type="submit" class="btn btn-danger-gradient btn-pill" 
            @click.prevent="tryAgain">
                {{ $t('try') }}
            </button>
        </div>
  </div>
</template>
<i18n src="@/lang/authentication/forgot-password/accountPreview.json"></i18n>
<script>
import { mapGetters,mapActions } from "vuex";

export default {
  name: 'AccountPreview',
  data(){
    return {

    }
  },
  computed:{
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
    ...mapActions('auth/user',{
      setUser:'setUser',
    }),
    tryAgain(){
      this.$router.push({name:'findAccount'})
    },
    goNext(){
      this.$router.push({name:'verificationMethod'})
    },
  }
};
</script>
<style lang="scss" scoped>
.account-preview {

}

</style>
