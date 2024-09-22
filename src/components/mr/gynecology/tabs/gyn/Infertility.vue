<template>
  <div class="infertility">
    <InfertilityChild 
      :check_error="check_error.infertility ? check_error.infertility : {}"
      :serializer_error="serializer_error.infertility ? serializer_error.infertility: {}"
      :v="v.infertility"
      >
    </InfertilityChild> 
    <Hormones 
      :check_error="check_error.hormones ? check_error.hormones : {}"
      :serializer_error="serializer_error.hormones ? serializer_error.hormones: {}"
      :v="v.hormones"
      >
    </Hormones> 
  </div>
</template>
<script>
import Hormones from './infertility/Hormones.vue'
import InfertilityChild from './infertility/InfertilityChild.vue'
/////////////////////////////////////////////////////////////
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
    Hormones,
    InfertilityChild
  },
  data(){
    return {}
  },
  methods: {},
};
</script>
<style scoped>
</style>
