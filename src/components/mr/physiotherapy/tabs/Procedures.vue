<template>
  <div class="procedures">
      <CustomTabs 
          v-model="selectedTab" 
          :tabs="tabs" 
          :checkError="check_error" 
          :serializerError="serializer_error" 
          :v="v"
          :bgClass="'btn-success'"
          :outlineClass="'btn-outline-success'"
      >
      </CustomTabs>
      <div class="row tabs-content my-2">
          <div v-show="selectedTab=='sessions'" class="col-12">
              <Sessions 
                  :check_error="check_error.sessions?check_error.sessions:{}" 
                  :serializer_error="serializer_error.sessions?serializer_error.sessions:{}"
              />
          </div>
          <div v-show="selectedTab=='diet'" class="col-12">
              <Diet
                  :dietOptions="dietOptions"
                  :check_error="check_error.diet ? check_error.diet : {}"
                  :serializer_error="serializer_error.diet ? serializer_error.diet: {}"
                  >
              </Diet>
          </div>
      </div>
  </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";        
import Sessions from './procedures/Sessions.vue';
import Diet from './procedures/Diet.vue';
/////////////////////////
import { mapGetters } from 'vuex'
export default {
  props:{
      v:{
          type:Object,
          required:true
      },
      check_error:{
          type:Object,
      },
      serializer_error:{
          type:Object,
      },
  },
  components:{
      CustomTabs,
      Sessions,
      Diet,
  },
  data(){
      return{
          selectedTab:"diet",
          tabs:[
              {en:'Sessions',ar:'Sessions',key:"sessions"},
              {en:'Diet',ar:'Diet',key:"diet"},
          ],
      }
  },
  computed: {
      ////////////pediatricStaticData///////////
      ...mapGetters("detailsPhysiotherapy/physiotherapyStaticData", ["dietData"]),
        dietOptions: {
            get() {
                return this.dietData;
            }
        }
   
  },
}
</script>
<style lang="scss" scoped>
.procedures{}
</style>