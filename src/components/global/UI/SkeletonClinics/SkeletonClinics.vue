<template>
<div class="Skeleton my-2">
    <div class="row">
        <div class="col-xl-9">
            <div class="row">
                <Base>
                <div class="col-md-3">
                <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
                </div>
                <div class="col-md-9">
                <div style="flex: 1">
                    <Skeleton width="100%" class="mb-2"></Skeleton>
                    <Skeleton width="75%"></Skeleton>
                </div>
                </div>
            </Base>
            </div>

            <div class="row my-2">
                <Base>
                    <div class="col-12">
                    <div class="d-flex justify-content-between ">
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px" ></Skeleton>
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px" ></Skeleton>
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px"></Skeleton>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="d-flex justify-content-between ">
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px" ></Skeleton>
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px" ></Skeleton>
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px"></Skeleton>
                    </div>
                    </div>
                    <div class="col-12">
                    <div class="d-flex justify-content-center ">
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px"></Skeleton>
                        <Skeleton width="10rem" height="2rem" class="m-3" borderRadius="16px" ></Skeleton>
                    </div>
                    </div>
                </Base>
            </div>
            <!-- ////////////// -->
            <div class="row my-2">
                <Base>
                <div class="d-flex justify-content-start  ">
                    <Skeleton width="10rem" height="2rem" class="mx-3" borderRadius="16px"></Skeleton>
                    <Skeleton width="10rem" height="2rem" borderRadius="16px"></Skeleton>
                </div>
                </Base>

            </div>

            <div class="row my-2">
                <Base> 
                <div class="col-12">
                    <div class="custom-skeleton p-4">
                    <div class="flex mb-3">
                        <Skeleton width="100%" height="150px"  borderRadius="16px"></Skeleton>
                    </div>
                    <div class="flex mb-3">
                        <Skeleton width="100%" height="150px" borderRadius="16px"></Skeleton>
                    </div>
                    <div class="flex mb-3">
                        <Skeleton width="100%" height="150px" borderRadius="16px"></Skeleton>
                    </div>
                    </div>
                </div>
                </Base>
            </div>


            <!-- //end -->
            <div class="row my-2">
                <Base>
                <div class="d-flex justify-content-end  ">
                    <Skeleton width="10rem" height="3rem" borderRadius="16px" class="mx-3"></Skeleton>
                    <Skeleton width="10rem" height="3rem"  borderRadius="16px"></Skeleton>
                </div>
                </Base>

            </div>
        </div>
    </div>
</div>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue";
export default {
  name:"SkeletonClinics",
  components: {
    Base,
    }
}

</script>
<style>
</style>