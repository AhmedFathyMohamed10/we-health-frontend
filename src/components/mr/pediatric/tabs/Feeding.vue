<template>
    <div class="feeding">
        <CustomTabs 
            :v = "v"
            v-model="selectedTab" 
            :tabs="tabs" 
            :checkError="check_error" 
            :serializerError="serializer_error" 
            :bgClass="'btn-success'"
            :outlineClass="'btn-outline-success'">
        </CustomTabs>
        <div class="row tabs-content my-2">
            <div v-show="selectedTab=='formula'" class="col-12">
                <Formula 
                    :v = "v.formula"
                    :check_error="check_error.formula?check_error.formula:{}" 
                    :serializer_error="serializer_error.formula?serializer_error.formula:{}"
                />
            </div>
            <div v-show="selectedTab=='diet'" class="col-12">
                <Diet 
                    :dietOptions="dietOptions"
                    v-model="diet"
                    :v="v.diet"
                    :check_error="check_error.diet?check_error.diet:{}" 
                    :serializer_error="serializer_error.diet?serializer_error.diet:{}"
                />
            </div>
            <div v-show="selectedTab=='breast'" class="col-12">
                <Breast 
                    :v="v.breast"
                    :check_error="check_error.breast?check_error.breast:{}" 
                    :serializer_error="serializer_error.breast?serializer_error.breast:{}"
                />
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Formula from '@/components/mr/pediatric/tabs/feeding/Formula.vue'
import Diet from '@/components/mr/global/Diet.vue'
import Breast from '@/components/mr/pediatric/tabs/feeding/Breast.vue'
////////////////////////////
import { mapGetters } from 'vuex'
export default {
    props:{

        v:{
            type:Object,
            required:true,
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
        Formula,
        Diet,
        Breast,
    },
    data(){
        return {
            selectedTab:"breast",
            tabs:[
                {en:'Formula',ar:'Formula',key:"formula"},
                {en:'Diet Content',ar:'Diet Content',key:"diet"},
                {en:'Breast Feeding',ar:'Breast Feeding',key:"breast"},
            ],
           
        }
    },
    computed: {
           diet: {
            get() {
                return this.$store.getters['detailsPediatric/pediatric/diet'];
            },
            set(value) {
                this.$store.dispatch('detailsPediatric/pediatric/setDiet', value);
            }
        },
    ...mapGetters("detailsPediatric/pediatricStaticData", ["dietData"]),
    dietOptions: {
      get() {
          return this.dietData;
      }
    },
    },
    methods:{
        ...mapActions("detailsPediatric/pediatric", [
            "setFeeding",
        ]),  
    },  

}
</script>