<template>
  <div class="d-flex country">
    <a class="nav-link icon" 
        href="javascript:void(0)" @click="toggleTheme">
      <span v-if="!sashdarkMode"  class="dark-layout"><i class="fe fe-moon"></i></span>
      <span v-if="sashdarkMode"  class="light-layout"><i class="fe fe-sun"></i></span>
    </a>
  </div>
</template>

<script>
export default {
    data(){
        return {
            sashdarkMode: localStorage.getItem("sashdarkMode")
        }
    },
methods:{
    toggleTheme(){
        if(this.sashdarkMode){
            localStorage.removeItem("sashdarkMode");
            this.$router.go(0)
        }
        else if(!this.sashdarkMode){
        localStorage.setItem("sashdarkMode",true);
        this.$router.go(0)
        }
    },
  },
};
</script>

<style></style>
