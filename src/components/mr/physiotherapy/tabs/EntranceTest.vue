<template>
  <div class="entrance-test">
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
      <div v-show="selectedTab == 'physicalExamination'" class="col-12">
        <PhysicalExamination
          :v="v.physicalExamination"
          :check_error="
            check_error.physicalExamination
              ? check_error.physicalExamination
              : {}
          "
          :serializer_error="
            serializer_error.physicalExamination
              ? serializer_error.physicalExamination
              : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'bodyChart'" class="col-12">
        <BodyChart
          :v="v.bodyChart"
          :check_error="check_error.bodyChart ? check_error.bodyChart : {}"
          :serializer_error="
            serializer_error.bodyChart ? serializer_error.bodyChart : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'motion'" class="col-12">
        <Motion
          :v="v.motion"
          :check_error="check_error.motion ? check_error.motion : {}"
          :serializer_error="
            serializer_error.motion ? serializer_error.motion : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'muscleTest'" class="col-12">
        <MuscleTest
          :v="v.muscleTest"
          :check_error="check_error.muscleTest ? check_error.muscleTest : {}"
          :serializer_error="
            serializer_error.muscleTest ? serializer_error.muscleTest : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'muscleTone'" class="col-12">
        <MuscleTone
          :v="v.muscleTone"
          :check_error="check_error.muscleTone ? check_error.muscleTone : {}"
          :serializer_error="
            serializer_error.muscleTone ? serializer_error.muscleTone : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'functionalEvaluation'" class="col-12">
        <FunctionalEvaluation
          :v="v.functionalEvaluation"
          :check_error="
            check_error.functionalEvaluation
              ? check_error.functionalEvaluation
              : {}
          "
          :serializer_error="
            serializer_error.functionalEvaluation
              ? serializer_error.functionalEvaluation
              : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'inbody'" class="col-12">
        <Inbody
          :v="v.inbody"
          :check_error="check_error.inbody ? check_error.inbody : {}"
          :serializer_error="
            serializer_error.inbody ? serializer_error.inbody : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'physicalMeasuring'" class="col-12">
        <PhysicalMeasuring
          :v="v.physicalMeasuring"
          :check_error="
            check_error.physicalMeasuring ? check_error.physicalMeasuring : {}
          "
          :serializer_error="
            serializer_error.physicalMeasuring
              ? serializer_error.physicalMeasuring
              : {}
          "
        />
      </div>
      <div v-show="selectedTab == 'conclusion'" class="col-12">
        <Conclusion
          :v="v.conclusion"
          :check_error="check_error.conclusion ? check_error.conclusion : {}"
          :serializer_error="
            serializer_error.conclusion ? serializer_error.conclusion : {}
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import PhysicalExamination from "./entrance/PhysicalExamination.vue";
import BodyChart from "./entrance/BodyChart.vue";
import Motion from "./entrance/Motion.vue";
import MuscleTest from "./entrance/MuscleTest.vue";
import MuscleTone from "./entrance/MuscleTone.vue";
import FunctionalEvaluation from "./entrance/FunctionalEvaluation.vue";
import Inbody from "./entrance/Inbody.vue";
import PhysicalMeasuring from "./entrance/PhysicalMeasuring.vue";
import Conclusion from "./entrance/Conclusion.vue";
export default {
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
    PhysicalExamination,
    BodyChart,
    Motion,
    MuscleTest,
    MuscleTone,
    FunctionalEvaluation,
    Inbody,
    PhysicalMeasuring,
    Conclusion,
  },
  data() {
    return {
      selectedTab: "conclusion",
      tabs: [
        {
          en: "Physical Examination",
          ar: "Physical Examination",
          key: "physicalExamination",
        },
        {
          en: "Body Chart Of Pain",
          ar: "Body Chart Of Pain",
          key: "bodyChart",
        },
        { en: "Range Of Motion", ar: "Range Of Motion", key: "motion" },
        { en: "Muscle Test", ar: "Muscle Test", key: "muscleTest" },
        { en: "Muscle Tone", ar: "Muscle Tone", key: "muscleTone" },
        {
          en: "Functional Evaluation",
          ar: "Functional Evaluation",
          key: "functionalEvaluation",
        },
        { en: "Inbody", ar: "Inbody", key: "inbody" },
        {
          en: "Physical Measuring",
          ar: "Physical Measuring",
          key: "physicalMeasuring",
        },
        { en: "Conclusion", ar: "Conclusion", key: "conclusion" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.entrance-test {
}
</style>
