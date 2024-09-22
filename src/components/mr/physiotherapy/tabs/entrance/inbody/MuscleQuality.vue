<template>
  <div class="muscle-quality">
    <div class="row">
        <h4>Muscle Quality</h4>
        <div class="col-4 text-center">
            <h4>Right Hand</h4>
            <h6 class="text-success">383 ~ 468 N</h6>
            <h6 class="text-success">39 ~ 48  kgf</h6>
        </div>
        <div class="col-4 text-center">
            <div class="img-wrapper">
                <img src="@/assets/mr/physiotherapy/entrance-test/inbody/muscle.svg" class="h-100 w-100">
            </div>
        </div>
        <div class="col-4 text-center">
            <h4>Left Hand</h4>
            <h6 class="text-success">357 ~ 436 N</h6>
            <h6 class="text-success">36 ~ 44  kgf</h6>
        </div>
        <div class="col-12">
            <Divider></Divider>
            <h4 class="muscle-score text-center mb-0">
                Muscle Quality Score: <span class="text-success">78/100</span> Points
            </h4>
        </div>
    </div>
  </div>
</template>

<script>
import Divider from "@/components/global/utilities/Divider.vue"
export default {
    components:{
        Divider,
    },
}
</script>

<style lang="scss" scoped>
.img-wrapper{
    width:100%;
    height:5rem;
}
.muscle-score{

}
</style>