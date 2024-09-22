<template>
    <div class="">
        <div class="content">
            <CashPoint />
        </div>
        <div class="content">
            <cashBack />
        </div>
        <div class="content">
              <!-- *****************cash-back************** -->
            
                <div class="cash-back my-4">
                    <Base>
                        <div class="row">
                            <div class="col-md-3 col-xl-2 my-2">
                            <button class="btn btn-danger-gradient btn-pill"> {{$t('cashPoint.cashback.label')}} </button>
                            </div>
                            <div class="col-md-8 col-xl-4  my-2">
                            <div class="d-flex justify-content-start  align-items-center fw-bold edit-border " >
                                <button  @click="openEditCashier" class="btn btn-info-gradient btn-pill my-0 "> {{$t('cashPoint.cashback.Cashier')}} </button>
                                <Avatar :image="require('@/assets/global/logo/1.jpg')" class="mx-1 " shape="circle" />
                                <p class="my-auto"> {{$t('cashPoint.cashback.nameCashier')}} </p>
                                <div class="rounded-circle bg-info mx-3"> <i class="mx-2 pi pi-user text-white fw-bold"></i></div>
                            
                            </div>
                            </div>
                            <div class="col-md-8 col-xl-4 my-2">
                            <div class="d-flex justify-content-start  align-items-center fw-bold edit-border " >
                                <button @click="openEditReviewer" class="btn btn-secondary-gradient btn-pill my-0"> {{$t('cashPoint.cashback.reviewer')}}</button>
                                <Avatar :image="require('@/assets/global/logo/1.jpg')" class="mx-1 " shape="circle" />
                                <p class="my-auto"> {{$t('cashPoint.cashback.nameReviewer')}}</p>
                                <div class="rounded-circle bg-info mx-3"> <i class="mx-2 pi pi-user text-white fw-bold"></i></div>
                            
                            </div>
                            </div>
                            <div class="col-md-3 col-xl-2 my-2 ">
                            <button  @click="displayCashDoor" class="btn btn-success btn-pill">{{$t('cashPoint.cashback.cashDoor')}}</button>
                            </div>
                            <div class="col-sm-3 col-md-3 my-2 ">
                            <div class="d-flex align-items-center justify-content-start">
                                <i @click="decrumentNmber" class="pi pi-caret-left text-success fw-bold mx-2"></i> 
                                <InputText type="number"  v-model="activeLab.numValue" />  
                                <i  @click="incrumentNmber"  class="pi pi-caret-right text-success fw-bold  mx-2"></i> 
                            </div>
                            </div>
                    
                        </div>
                        <div class="send-to-Reviewer">
                            <EditDialog :display="displayEditReviewer"
                            @close="closeEditReviewer"
                            @cancel="closeEditReviewer"
                            @save="editReviewer" 
                            :header="$t(' Search For a Reviewer')"
                        >
                            <div class="row">
                            <div class="col-md-12  ">
                                <div class="form-group search">
                                <div class="p-inputgroup">
                                    <span 
                                        class="p-inputgroup-addon bg-light" 
                                            >
                                        <i class="pi pi-search"></i>
                                    </span>
                                    <AutoComplete
                                        v-model="activeLab.reviewer"
                                        :suggestions="drugNameParams.suggestions"             
                                        field="value"  
                                        :placeholder="$t('Search For a Reviewer')" 
                                        @complete="search($event,drugNameParams)"
                                        />
                                    
                                </div>
                                
                                </div>                 
                            </div>
                
                            </div>
                            </EditDialog>
                        </div>
                        <div class="send-for-Cashier">
                            <EditDialog :display="displayEditCashier"
                            @close="closeEditCashier"
                            @cancel="closeEditCashier"
                            @save="editCashier" 
                            :header="$t(' Search For a Cashier')"
                        >
                            <div class="row">
                            <div class="col-md-12  ">
                                <div class="form-group search">
                                <div class="p-inputgroup">
                                    <span 
                                        class="p-inputgroup-addon bg-light" 
                                            >
                                        <i class="pi pi-search"></i>
                                    </span>
                                    <AutoComplete
                                        v-model="activeLab.Cashier"
                                        :suggestions="drugNameParams.suggestions"             
                                        field="value"  
                                        :placeholder="$t('Search For a Cashier')" 
                                        @complete="search($event,drugNameParams)"
                                        />
                                    
                                </div>
                                
                                </div>                 
                            </div>
                            <div class="col-md-12 invisible">
                                <div class="form-group search">
                                <div class="p-inputgroup">
                                    <span 
                                        class="p-inputgroup-addon bg-light" 
                                            >
                                        <i class="pi pi-search"></i>
                                    </span>
                                    <AutoComplete
                                        v-model="activeLab.Cashier"
                                        :suggestions="drugNameParams.suggestions"             
                                        field="value"  
                                        :placeholder="$t('Search For a Cashier')" 
                                        @complete="search($event,drugNameParams)"
                                        />
                                    
                                </div>
                                
                                </div>                 
                            </div>
                
                            </div>
                            </EditDialog>
                        </div>
                    </Base>
               </div>
        </div>
    </div>
</template>
<script>
import CashPoint from "@/components/labs/lab/CashPoint.vue";
import cashBack from "@/components/labs/lab/custom/cashBack.vue"
////////////////////////////////////
import labOption from '@/mixins/medicalLabs/labOption'
import Base from "@/components/global/utilities/Base.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue"
export default{
    mixins:[labOption],
    name:"CashBackDoor",
    components:{
        cashBack,
        CashPoint,
        Base,
        EditDialog,
    },



}
</script>
<style lang="scss" scoped>


</style>
