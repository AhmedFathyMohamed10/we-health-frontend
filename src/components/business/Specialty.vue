<template>
  <div>
    <div v-if="!isLoading && specialties.length > 0 ">
      <List v-model="form.speciality" :options="specialties" :multiple="form.multipleChoice" @next="goNext"></List>
      <CommonSteps></CommonSteps>
    </div>
</div>
</template>
<script>
import List from "@/components/business/specialty/List.vue"
import CommonSteps from "@/components/business/common/CommonSteps.vue"
import { mapGetters,mapActions } from "vuex";

export default {
  components: {
    List,
    CommonSteps,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters('business/specialties', {
        isLoading: 'getServerLoading',
        serverResponse: 'getServerResponse',
        serverError: 'getServerError',
    }),
    ...mapGetters('business/register', {
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
    specialties(){
      let options = []
        if(this.serverResponse){
          let options = this.serverResponse["data"]["specialities"];
          return options;
        }
        else {
          return options;
        }
    },
  },
  created(){
  },
  watch:{
    'form.categoryKey':{
        deep:true,
        handler(newValue, oldValue){
            this.form.categoryKey = newValue; 
        }
      },
    'form.multipleChoice':{
        deep:true,
        handler(newValue, oldValue){
          this.form.multipleChoice = newValue;   
        }
      }
  },
  methods: {
    ...mapActions('business/register',{
      setForm:'setForm',
    }),
    goNext() {
       if(this.form.displaySpecialty === true && this.form.categoryKey != ""){
          if(this.form.speciality > 0 || this.form.speciality.length > 0){
            this.$router.push({name: "register"});
          }  
        }
       else  this.$router.push({name: "category"});
    },
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
  .specialty {
    width: 100%;

    .specialties {
      min-height: 50vh;
      max-height: 50vh;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .cursor-pointer{
      cursor: pointer;
    }
    .active{
      outline: 3px solid $primary;
    }
  }

  .fade-enter-active,.fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,.fade-leave-to
  {
    opacity: 0;
  }

  @media (max-width: 768px) {
    .specialty {
      .specialties {
        min-height: 30vh;
        max-height: 30vh;
      }
    }
  }

</style>