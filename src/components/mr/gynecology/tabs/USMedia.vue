<template>
    <div class="us-media">
        <CustomTabs 
          v-model="selectedTab" 
          :tabs="tabs" 
          :checkError="check_error" 
          :serializerError="serializer_error" 
          :bgClass="'btn-success'"
          :outlineClass="'btn-outline-success'">
        </CustomTabs>
        <div class="category-content my-2">
          <Pregnancy
            v-show="selectedTab == 'pregnancy'" 
            :check_error="check_error.pregnancy ? check_error.pregnancy : {} "  
            :serializer_error="serializer_error.pregnancy ? serializer_error.pregnancy : {}"
            :v="v.pregnancy"
          />
        </div>
        <!-- <div class="category-content my-2">
          <Media
            v-show="selectedTab == 'pelvic'" 
            :check_error="check_error.pregnancy ? check_error.pregnancy : {} "  
            :serializer_error="serializer_error.pregnancy ? serializer_error.pregnancy : {}"
            :v="v.pregnancy"
          />
        </div> -->
        </div>
    </template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";  
/////////////////////////////////////////////////
import Pregnancy from "./us-media/Pregnancy.vue";
// import Media from "./us-media/Media.vue";
export default {
    name: "USMedia",
    props: {
        v: {
            type: Object,
            required: true,
        },
        check_error: {
            type: Object,
        },
        serializer_error: {
            type: Object,
        },
    },
    components: {
        CustomTabs,
        ///////////////
        Pregnancy,
        // Media,
    },
    data() {
        return {
            selectedTab:"pregnancy",
            tabs: [
                {
                    en: "Pregnancy US",
                    ar: "Pregnancy US",
                    id: 1,
                    key: "pregnancy",
                },
                {
                    en: "Pelvic US",
                    ar: "Pelvic US",
                    id: 2,
                    key: "pelvic",
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
    .gyn {}
</style>
