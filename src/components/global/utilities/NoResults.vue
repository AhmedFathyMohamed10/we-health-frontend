<template>
  <div class="no-results">
    <!-- <h6 class="mb-0 text-center">{{$t('message')}}</h6> -->
    <h6 class="mb-0 text-center">{{message}}</h6>
    <div class="img-wrapper mt-5">
      <img src="@/assets/global/utilities/no_results.svg" alt="">
    </div>
  </div>
</template>

<i18n lang="json5">
  {
    "en":{
      "message":"Sorry, There Is No Results for This Section Right Now ..."
    },
    "ar":{
      "message":"عذرا ، لا توجد نتائج لهذا القسم الآن ..."
    }
  }
</i18n>
<script>
export default {
  name: 'NoResults',
  props:{
    message:{
      type:String,
      default(){
        return this.locale==='ar' ? "Sorry, There Is No Results for This Section Right Now ...":"عذرا ، لا توجد نتائج لهذا القسم الآن ...";
      }
    }
  },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.no-results{
  .img-wrapper{
    aspect-ratio: 6/1;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>