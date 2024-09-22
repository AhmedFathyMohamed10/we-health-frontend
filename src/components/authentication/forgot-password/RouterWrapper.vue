<template>
  <Base>
    <div class="back-btn mb-3">
      <!-- <button type="button" class="btn btn-icon btn-primary btn-sm asset-bg-green-linear-gradient w-10" @click.prevent="goBack">
        <i class="fs-4 fa fa-angle-left" aria-hidden="true"></i>
      </button> -->
      <button @click="goBack" class="btn btn-icon btn-success-gradient">
        <i class="fs-4 fa fa-angle-left" aria-hidden="true"></i>
      </button>
    </div>
    <router-view></router-view>
  </Base>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue";
export default {
  name: "RouterWrapper",
  components: {
    Base,
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
