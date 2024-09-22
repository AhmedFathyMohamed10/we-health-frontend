<template>
  <div class="labs">
      <div class="row">
        <div class="col-lg-9 col-sm-12 col-md-12" >
          <Login />
          <!-- **********selectedNum & tabs"****** ** -->
          <div class="holded-btns my-2">
            <Base>
              <div class="row">
                <div class="col-md-5">
                  <div class="d-flex  justify-content-start align-items-center ">
                    <button 
                      v-for="num in numbers_btn" :key="num.val"
                      @click="selectedNum = num.numb"
                        class="btn m-1 rounded-circle btn-success-gradient" 
                        :class="[ selectedNum != num.numb ? `disabled-btn  `:'',
                            isActiveRed ? ' btn m-1 rounded-circle btn-danger-gradient ' :''
                        ] "
                      > 
                        {{num['val']}} 
                    </button>
                  </div>
                </div>
                <div class=" col-md-7">
                  <div class="d-flex  justify-content-lg-end  justify-content-md-start align-items-center ">
                    <CustomTabsNumbers
                    v-model="selectedTab"
                    :tabs="tabs" 
                    :checkError="check_error" 
                    :serializerError="serializer_error"
                    />
                  </div>
                </div>
              </div>
            </Base>
          </div>
          <!-- //////////////////CashPoint Tab//////////////////////// -->
          <CashPoint
            v-if="selectedTab == 'CashPoint'"
          >
          </CashPoint>
          <!-- ///////////Requests////////////// -->
          <Requests  v-show="selectedTab == 'Requests'"  >
          </Requests>
           <!--*************End Requests********************-->
          <!-- *********** Start CallCenter************ -->
          <div v-show="selectedTab == 'CallCenter'" >
          </div>
          <!-- ***********End CallCenter************ -->
          <!-- ***************** Start cash-back************** -->
          <div class="cash-back my-4">
            <Base>
              <!-- <div class="row">
                <div class="col-md-2 col-xl-2 my-2">
                   <button @click="changeCashBack" class="btn btn-danger-gradient btn-pill"> {{$t('cashPoint.cashback.label')}} </button>
                </div>
                <div class="col-md-5 col-xl-4 my-2">
                <div class="d-flex justify-content-start  align-items-center fw-bold edit-border custom-width " >
                  <button   @click="openEditCashier" class="btn btn-info-gradient btn-pill my-0 "> {{$t('cashPoint.cashback.Cashier')}} </button>
                  <Avatar :image="require('@/assets/global/logo/1.jpg')" class="mx-1 " shape="circle" />
                  <p class="my-auto"> {{$t('cashPoint.cashback.nameCashier')}} </p>
                  <div class="rounded-circle bg-info mx-3"> <i class="mx-2 pi pi-user text-white fw-bold"></i></div>
                </div>
                </div>
                <div class="col-md-5 col-xl-4 my-2">
                  <div class="d-flex justify-content-start  align-items-center fw-bold edit-border custom-width " >
                    <button @click="openEditReviewer" class="btn btn-secondary-gradient btn-pill my-0"> {{$t('cashPoint.cashback.reviewer')}}</button>
                    <Avatar :image="require('@/assets/global/logo/1.jpg')" class="mx-1 " shape="circle" />
                    <p class="my-auto"> {{$t('cashPoint.cashback.nameReviewer')}}</p>
                    <div class="rounded-circle bg-info mx-3"> <i class="mx-2 pi pi-user text-white fw-bold"></i></div>
                  
                  </div>
                </div>
                <div class="col-md-3  col-xl-2 my-2 ">
                   <button  @click="changeCashDoor" class="btn btn-success btn-pill">{{$t('cashPoint.cashback.cashDoor')}}</button>
                </div>
                <div class="col-sm-3 col-md-3 my-2 ">
                  <div class="d-flex align-items-center justify-content-start">
                    <i @click="decrumentNmber" class="pi pi-caret-left text-success fw-bold mx-2"></i> 
                    <InputText type="number"  v-model="activeLab.numValue" />  
                    <i  @click="incrumentNmber"  class="pi pi-caret-right text-success fw-bold  mx-2"></i> 
                  </div>
                </div>
              </div> -->
              <!-- ////////////// -->
              <div class="d-flex align-items-center justify-content-start flex-wrap gap-1">
                <div class="">
                   <button @click="changeCashBack" class="btn btn-danger-gradient btn-pill"> {{$t('cashPoint.cashback.label')}} </button>
                </div>
                <div class="">
                <div class="d-flex justify-content-start  align-items-center fw-bold edit-border custom-width " >
                  <button   @click="openEditCashier" class="btn btn-info-gradient btn-pill my-0 "> {{$t('cashPoint.cashback.Cashier')}} </button>
                  <Avatar :image="require('@/assets/global/logo/1.jpg')" class="mx-1 " shape="circle" />
                  <p class="my-auto"> {{$t('cashPoint.cashback.nameCashier')}} </p>
                  <div class="rounded-circle bg-info mx-2"> <i class="mx-1 pi pi-user text-white fw-bold"></i></div>
                </div>
                </div>
                <div class="">
                  <div class="d-flex justify-content-start  align-items-center fw-bold edit-border custom-width " >
                    <button @click="openEditReviewer" class="btn btn-secondary-gradient btn-pill my-0"> {{$t('cashPoint.cashback.reviewer')}}</button>
                    <Avatar :image="require('@/assets/global/logo/1.jpg')" class="mx-1 " shape="circle" />
                    <p class="my-auto"> {{$t('cashPoint.cashback.nameReviewer')}}</p>
                    <div class="rounded-circle bg-info mx-2"> <i class="mx-1 pi pi-user text-white fw-bold"></i></div>
                  
                  </div>
                </div>
                <div class="">
                   <button  @click="changeCashDoor" class="btn btn-success btn-pill">{{$t('cashPoint.cashback.cashDoor')}}</button>
                </div>
                <!-- <div class="col-sm-3 col-md-3 my-2 ">
                  <div class="d-flex align-items-center justify-content-start">
                    <i @click="decrumentNmber" class="pi pi-caret-left text-success fw-bold mx-2"></i> 
                    <InputText type="number"  v-model="activeLab.numValue" />  
                    <i  @click="incrumentNmber"  class="pi pi-caret-right text-success fw-bold  mx-2"></i> 
                  </div>
                </div> -->
              </div>

              <!-- //////////////////////////////// -->
              <div class="send-to-Reviewer">
                <EditDialog 
                  :display="displayEditReviewer"
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
                              class="p-inputgroup-addon bg-light" >
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
                    <div class="col-md-12 invisible">
                      <div class="form-group search">
                        <div class="p-inputgroup">
                          <span 
                            class="p-inputgroup-addon bg-light" >
                            <i class="pi pi-search"></i>
                          </span>
                          <AutoComplete
                            v-model="activeLab.reviewer"
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
              <div class="send-for-Cashier">
                <EditDialog
                 :display="displayEditCashier"
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
                            class="p-inputgroup-addon bg-light" >
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
                            class="p-inputgroup-addon bg-light" >
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
          <!-- ***************** End cash-back************** -->
        </div>
      </div>
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/medicalLabs/lab.json"></i18n>
<script>
import labOption from '@/mixins/medicalLabs/labOption'
import Base from "@/components/global/utilities/Base.vue";
import CustomTabsNumbers from "@/components/labs/lab/custom/CustomTabsNumbers.vue"
import CashPoint from "@/components/labs/lab/CashPoint.vue";
import Requests from "@/components/labs/lab/Requests.vue";
import Login from "@/components/labs/lab/Login.vue";
import EditDialog from "@/components/global/utilities/EditDialog.vue"

import { mapGetters } from "vuex";
  export default {
  mixins:[labOption],

    components: {
      Login,
    CustomTabsNumbers,
      CashPoint,
      Requests,
      Base,
      EditDialog,

    },
    props:{
        bgClass: {
            type: String,
            default(){
                return 'btn-success-danger'
            }
        },
    },

    data() {
      return {

        numbers_btn: [
          { val:1 , numb:0 },
          { val:2 , numb:1 },
          { val:3 , numb:2 },
          { val:4 , numb:3 },
          { val:5 , numb:4 },
      
        ],
        tabs: [
          { en: "CashPoint", ar: "آلة صرف النقود", key: "CashPoint" },
          { en: "Requests", ar: "الطلبات", key: "Requests" },
          { en: "CallCenter", ar: "مركز الاتصال", key: "CallCenter" },
          { en: "Insurance", ar: "تأمين", key: "Insurance" },
        ],
        check_error: {},
        serializer_error: {},
           /////////////////////
      displayEditCashier:false,
      displayEditReviewer:false,
      

      };
    },
 
    computed: { 
      ...mapGetters("labs", ["getSelectedNumber","getSelectedTab","getActiveLab","getIsActiveRed"]),
        selectedNum: {
            get() {
                return this.getSelectedNumber;
            },
            set(value) {
                this.$store.dispatch("labs/setSelectedNumber", value);
            },
        },
        selectedTab: {
            get() {
                return this.getSelectedTab;
            },
            set(value) {
                this.$store.dispatch("labs/setSelectedTab", value);
            },
        },
        activeLab: {
            get() {
                return this.getActiveLab;
            },
            set(value) {
                this.$store.dispatch("labs/setActiveLab", value);
            },
        },
        isActiveRed: {
            get() {
                return this.getIsActiveRed;
            },
            set(value) {
                this.$store.dispatch("labs/setIsActiveRed", value);
            },
        },



      },
    
    methods:{
    /////////////////////////////

   changeCashBack() {
      this.isActiveRed = true;
    },
    changeCashDoor() {
      this.isActiveRed = false;
    },

    /////////////////////////
    //  incrumentNmber(){
    //   this.activeLab.numValue += 1;
    // },
    // decrumentNmber(){
    //   this.activeLab.numValue -= 1;
    // },
    //////////////////////
    openEditReviewer(){
      this.displayEditReviewer = true;
    },
    openEditCashier(){
      this.displayEditCashier = true;
    },
    closeEditReviewer() {
      this.activeLab.reviewer= ""
     this.displayEditReviewer= false;
    },
    editReviewer() {
      this.activeLab.contentReviewer.push(this.activeLab.reviewer)
      this.closeEditReviewer();
  },
    closeEditCashier() {
      this.activeLab.Cashier= ""
     this.displayEditCashier = false;
    },
    editCashier() {
      this.activeLab.contentCashier.push(this.activeLab.Cashier)
      this.closeEditCashier();
  },
    ////////////////////////////////
   
  
    }
  };
</script>

<style lang="scss" scoped>

    .disabled-btn {
            opacity: 0.5;
            cursor: not-allowed;
        }
 
    .edit-border{
        border:1px solid #63BCC9;
        border-radius:2rem;
 }
 .custom-width {
  width: fit-content !important;
 }

</style>