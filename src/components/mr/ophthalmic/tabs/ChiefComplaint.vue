<template>
  <div class="chief-complaint my-2">
    <CustomTabs 
        v-model="selectedTab" 
        :tabs="tabs" 
        :checkError="check_error" 
        :serializerError="serializer_error" 
        :v="v"
        :bgClass="'btn-success'"
        :outlineClass="'btn-outline-success'">
    </CustomTabs>
    <div class="chiefcomplaint-content my-2">
        <ReasonForVisit
          v-show="selectedTab == 'reasonForVisit'" 
          :check_error="
            check_error.reasonForVisit ? check_error.reasonForVisit : {}
          "          :serializer_error="
            serializer_error.reasonForVisit
              ? serializer_error.reasonForVisit
              : {}
          "
          :v="v.reasonForVisit"
        />
        <ChiefComplaintChild
          v-show="selectedTab == 'chiefComplaint'"
          :check_error="
            check_error.chiefComplaint ? check_error.chiefComplaint : {}
          "
          :serializer_error="
            serializer_error.chiefComplaint
              ? serializer_error.chiefComplaint
              : {}
          "
          :v="v.chiefComplaint"
        />
    </div>
  </div>
</template>
<script>
import ReasonForVisit from "./chief/ReasonForVisit.vue";
import ChiefComplaintChild from "./chief/ChiefComplaintChild.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
export default {
  name: "ChiefComplaint",
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
    ReasonForVisit,
    ChiefComplaintChild,
    CustomTabs
  },
  data() {
    return {
      // local: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
      selectedTab:"reasonForVisit",
      tabs: [
        {
          en: "Reason For Visit",
          ar: "Reason For Visit",
          key: "reasonForVisit",
        },
        {
          en: "Chief Complaint",
          ar: "Chief Complaint",
          key: "chiefComplaint",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.chief-complaint {
}
</style>
