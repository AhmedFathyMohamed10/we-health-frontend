<template>
  <div id="app" v-if="isAuthenticationRoute">
    <router-view />
    <Toaster></Toaster>
  </div>
  <div class="page" id="app" v-else>
    <div class="page-main">
        <LeftSidebar></LeftSidebar>
        <RightSidebar></RightSidebar>
        <Main>
          <Loader v-if="isLoading"></Loader>
          <router-view v-else />
        </Main>
        <Footer></Footer>
    </div>
    <Toaster></Toaster>
  </div>
</template>
<script>
import Header  from '@/components/global/layout/Header.vue'
import LeftSidebar  from '@/components/global/layout/LeftSidebar.vue'
import Main  from '@/components/global/layout/Main.vue'
import RightSidebar  from '@/components/global/layout/RightSidebar.vue'
import Footer  from '@/components/global/layout/Footer.vue'
import Loader  from '@/components/global/utilities/Loader.vue'
import Toaster  from '@/components/global/utilities/Toaster.vue'
import { mapGetters } from 'vuex'

export default {
    components:{
        // Header,
        LeftSidebar,
        Main,
        RightSidebar,
        Footer,
        Loader,
        Toaster
    },
    data(){
      return { 
        isLoading:false,
       }
    },
    computed: {
      currentRouteName() {
        return this.$route.name;
      },
      isAuthenticationRoute() {
        return this.$route.path.startsWith('/auth') || this.$route.path.startsWith('/business') 
      },
    }
}
</script>
<style lang="scss">
.router-link-exact-active.router-link-active{
  color: $success !important;
}
</style>
