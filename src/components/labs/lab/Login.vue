<template>
    <div class="Login my-2">
        <Base>
             <div class="row">
                <div class="col-md-4 col-sm-12  ">
                    <div class="d-flex align-items-center justify-content-start my-1 ">  
                          <Avatar :image="require('@/assets/global/logo/1.jpg')" class="" size="large" shape="circle" />
                            <p class="fw-bold m-2">{{$t('login.drname')}} </p>  
                    </div> 
                </div>
                 <!-- <div class="col-md-8  col-sm-12  ">
                    <div class="d-flex align-items-center justify-content-md-end   justify-content-sm-start my-1  flex-wrap"> 
                          <div class="d-flex justify-content-start  align-items-start text-success  edit-border " >
                                <Avatar :image="require('@/assets/global/logo/1.jpg')" class="m-1" shape="circle" />
                                <p class="m-auto px-2 ">{{$t('login.casherName')}} </p> 
                           </div>
                           <div class=" d-flex flex-sm-wrap justify-content-start m-1"> 
                                <button class="btn btn-success-gradient font-bold btn-pill w-sm m-1 my-sm-0">
                                <i class="pi pi-arrow-circle-right mx-1"></i> {{ $t("login.signin") }} </button>     
                            </div> 
                      
                    </div>     
                </div>  -->
             </div>
        </Base>
    </div>
</template>

<i18n src="@/lang/medicalLabs/lab.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";

export default {
    name:'Login',
    components:{
        Base
    },
       
}
</script>

<style>
    .edit-border{
        border:1px solid #56c956;
        border-radius:2rem;
    }
    /* .custom-border{
        border: none;
        outline:  none;
        padding:0px 77px;
    } */
</style>
