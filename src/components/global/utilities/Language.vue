<template>
  <div class="locale d-flex align-items-center">
        <a class="nav-link p-2 m-1 " @click="changeLocale" href="javascript:void(0)">
            <span class="fs-7 me-1 d-xl-block" v-if="locale=='ar'">English</span>
            <span class="fs-5 me-1  d-xl-block" v-else>عربي</span>
            <i class="fe fe-globe fa-lg"></i>
        </a>
    </div>
</template>

<script>
export default {
  methods:{
    changeLocale(){
        if(this.locale=='en'){
            // this.$i18n.locale = 'ar'
            localStorage.setItem("locale",'ar')
            localStorage.setItem("sashrtl",true)
            this.$router.go(0)
        }
        else if(this.locale=='ar'){
            // this.$i18n.locale = 'en'
            localStorage.setItem("locale",'en')
            localStorage.removeItem("sashrtl")
            this.$router.go(0)
        }
    },
  },
}
</script>

<style>
.locale{
    height: 50px !important;
}
</style>