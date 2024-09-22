<template>
    <div class="planning">
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
                    :v="v.sessions" 
                    :check_error="check_error.sessions?check_error.sessions:{}" 
                    :serializer_error="serializer_error.sessions?serializer_error.sessions:{}"
                />
            </div>
            <div v-show="selectedTab=='diet'" class="col-12">
                <Diet 
                    :dietOptions="dietOptions"
                    v-model="diet"
                    :v="v.diet"
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
import Sessions from './planning/Sessions.vue';
import Diet from "@/components/mr/global/Diet.vue";
import { mapGetters,mapActions } from 'vuex'
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
            selectedTab:"sessions",
            tabs:[
                {en:'Sessions',ar:'Sessions',key:"sessions"},
                {en:'Diet To Follow',ar:'Diet To Follow',key:"diet"},
            ],
        }
    },
    computed: {
      // mix the getters into computed with object spread operator
      ...mapGetters('detailsGeneral/general',{
          'getDiet':'getDiet'
      }),
      diet:{
          get() {
              return this.getDiet;
            },
            set(value) {
                this.setDiet(value);
            }
        },
        ////////////pediatricStaticData///////////
        ...mapGetters("detailsPhysiotherapy/physiotherapyStaticData", ["dietData"]),
        dietOptions: {
            get() {
                return this.dietData;
            }
        }
   
    },
    methods:{
        ...mapActions('general',{
            'setDiet':'setDiet'
        }),
    },
}
</script>
<style lang="scss" scoped>
.planning{
    
}
</style>