<template>
	<div class="conditions">
		<CustomTabs class="text-center" :tabs="tabs" v-model="selectedTab"></CustomTabs>
		<Conditions v-if="selectedTab == 'conditions'" />
		<Accidents v-if="selectedTab == 'accidents'" />
    <Disabilities v-if="selectedTab == 'disabilities'" />
    <SocialLife v-if="selectedTab == 'socialLife'" />
	</div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Conditions from "@/components/patient/medicalHistory/conditions/mconditions/index.vue";
import Accidents from "@/components/patient/medicalHistory/conditions/accidents/index.vue";
import Disabilities from "@/components/patient/medicalHistory/conditions/disabilities/index.vue";
import SocialLife from "@/components/patient/medicalHistory/conditions/socialLife/index.vue";
export default {
  components: {
    CustomTabs,
    Conditions,
    Accidents,
    Disabilities,
    SocialLife
  },
  data() {
    return {
    	selectedTab: "conditions",
      tabs: [
        { en: "Conditions", key: "conditions" },
        { en: "Accidents", key: "accidents" },
        { en: "Disabilities", key: "disabilities" },
        { en: "Social life", key: "socialLife" },
        { en: "Surgeries", key: "surgeries" },
      ],
      
    };
  },
}
</script>