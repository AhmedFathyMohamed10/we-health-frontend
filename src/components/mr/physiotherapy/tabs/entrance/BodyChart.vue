<template>
  <div class="body-child-wrapper">
    <BodyChartChild
      :v="v.bodyOfChart"
      :check_error="check_error"
      :serializer_error="serializer_error"
    />
    

    <!-- <Divider></Divider> -->
    <NeurodynamicsVue
      :v="v.neurodynamics"
      :check_error="check_error"
      :serializer_error="serializer_error"
    />
  </div>
</template>
<script>
import BodyChartChild from "./body-chart/BodyChartChild.vue";
// import Divider from "@/components/global/utilities/Divider.vue"
import NeurodynamicsVue from "./body-chart/Neurodynamics.vue";
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
    BodyChartChild,
    // Divider,
    NeurodynamicsVue,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
