<template>
    <div class="obstetric">
        <CustomTabs 
            v-model="selectedTab" 
            :tabs="tabs" 
            :checkError="check_error" 
            :serializerError="serializer_error" 
            :bgClass="'btn-success'"
            :outlineClass="'btn-outline-success'"
            :v="v"
            >
        </CustomTabs>
        <div class="category-content my-2">
            <PregFollowUp
                v-show="selectedTab == 'pregFollowUp'" 
                :check_error="
                    check_error.pregFollowUp ? check_error.pregFollowUp : {}
                "          :serializer_error="
                    serializer_error.pregFollowUp
                    ? serializer_error.pregFollowUp
                    : {}
                "
                :v="v.pregFollowUp"
            />
            <WomanHealth
                v-show="selectedTab == 'womanHealth'" 
                :check_error="
                    check_error.womanHealth ? check_error.womanHealth : {}
                "          :serializer_error="
                    serializer_error.womanHealth
                    ? serializer_error.womanHealth
                    : {}
                "
                :v="v.womanHealth"
            />
            <Antenatal
                v-show="selectedTab == 'antenatal'" 
                :check_error="
                    check_error.antenatal ? check_error.antenatal : {}
                "          :serializer_error="
                    serializer_error.antenatal
                    ? serializer_error.antenatal
                    : {}
                "
                :v="v.antenatal"
            />
        </div>
    </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";  
////////////////////////////////////////////////////
import PregFollowUp from "./obstetric/PregFollowUp.vue";
import WomanHealth from "./obstetric/WomanHealth.vue";
import Antenatal from "./obstetric/Antenatal.vue";
export default {
    name: "obstetric",
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
        ////////////
        PregFollowUp,
        WomanHealth,
        Antenatal
    },
    data() {
        return {
            selectedTab:"pregFollowUp",
            tabs: [
                {
                    en: "Preg. Follow Up",
                    ar: "Preg. Follow Up",
                    id: 1,
                    key: "pregFollowUp",
                },
                {
                    en: "Woman Health",
                    ar: "Woman Health",
                    id: 2,
                    key: "womanHealth",
                },
                {
                    en: "Antenatal",
                    ar: "Antenatal",
                    id: 3,
                    key: "antenatal",
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
    .obstetric {}
</style>
