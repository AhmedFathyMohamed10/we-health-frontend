<template>
    <div class="gyn">
        <CustomTabs 
            v-model="selectedTab" 
            :tabs="tabs" 
            :checkError="check_error" 
            :serializerError="serializer_error" 
            :bgClass="'btn-success'"
            :outlineClass="'btn-outline-success'">
        </CustomTabs>
        <div class="category-content my-2">
            <Infertility
            v-show="selectedTab == 'infertility'" 
                :check_error="
                    check_error.infertility ? check_error.infertility : {}
                "          :serializer_error="
                    serializer_error.infertility
                    ? serializer_error.infertility
                    : {}
                    "
                :v="v.infertility"
                />
                <Folliculometry
                v-show="selectedTab == 'folliculometry'" 
                :check_error="
                    check_error.folliculometry ? check_error.folliculometry : {}
                    "          :serializer_error="
                    serializer_error.folliculometry
                    ? serializer_error.folliculometry
                    : {}
                    "
                :v="v.folliculometry"
                />
                <PID
                v-show="selectedTab == 'pid'" 
                :check_error="
                    check_error.folliculometry ? check_error.folliculometry : {}
                    "          :serializer_error="
                    serializer_error.folliculometry
                    ? serializer_error.folliculometry
                    : {}
                    "
                :v="v.folliculometry"
                />
                <Contraception
                    v-show="selectedTab == 'contraception'" 
                    :check_error="
                        check_error.contraception ? check_error.contraception : {}
                        "          :serializer_error="
                        serializer_error.contraception
                        ? serializer_error.contraception
                        : {}
                        "
                    :v="v.contraception"
                />
                <PBleeding
                    v-show="selectedTab == 'pBleeding'" 
                    :check_error="
                        check_error.pmBleeding ? check_error.pmBleeding : {}
                        "          :serializer_error="
                        serializer_error.pmBleeding
                        ? serializer_error.pmBleeding
                        : {}
                        "
                    :v="v.pmBleeding"
                />
                <PMBleeding
                v-show="selectedTab == 'pmBleeding'" 
                :check_error="
                    check_error.pmBleeding ? check_error.pmBleeding : {}
                    "          :serializer_error="
                    serializer_error.pmBleeding
                    ? serializer_error.pmBleeding
                    : {}
                    "
                :v="v.pmBleeding"
                />
            </div>
        </div>
    </template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";  
/////////////////////////////////////////////////
import Infertility from "./gyn/Infertility.vue";
import Folliculometry from "./gyn/Folliculometry.vue";
import PID from "./gyn/PID.vue";
import PMBleeding from "./gyn/PMBleeding";
import PBleeding from "./gyn/PBleeding";
import Contraception from "./gyn/Contraception";
export default {
    name: "GYN",
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
        Infertility,
        Folliculometry,
        PID,
        PMBleeding,
        PBleeding,
        Contraception
    },
    data() {
        return {
            selectedTab:"contraception",
            tabs: [
                {
                    en: "Infertility",
                    ar: "Infertility",
                    id: 1,
                    key: "infertility",
                },
                {
                    en: "Folliculometry",
                    ar: "Folliculometry",
                    id: 2,
                    key: "folliculometry",
                },
                {
                    en: "Pid",
                    ar: "Pid",
                    id: 3,
                    key: "pid",
                },
                {
                    en: "Contraception",
                    ar: "Contraception",
                    id: 4,
                    key: "contraception",
                },
                {
                    en: "P.Bleeding",
                    ar: "P.Bleeding",
                    id: 5,
                    key: "pBleeding",
                },
                {
                    en: "Pm.Bleeding",
                    ar: "Pm.Bleeding",
                    id: 6,
                    key: "pmBleeding",
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
    .gyn {}
</style>
