<template>
    <div class="pharmacy-cashpoint">
      <div class="row">
        <div class="col-lg-9 col-sm-12 col-md-12" >
          <Login />
               <!-- **********selectedNum************** -->
                <RxHoldedBtns
                  class="text-center"
                  v-model="selectedNum"
                  :numbers_btn="numbers_btn"
                  :checkError="check_error"
                  :serializerError="serializer_error"
                />
                <CustomTabs
                  class="text-center"
                  v-model="selectedTab" 
                  :tabs="tabs" 
                  :checkError="check_error" 
                  :serializerError="serializer_error"> 
                </CustomTabs> 
       
                <!-- ******************************* -->
                <!-- <InfoPatient 
                    v-show="selectedTab == 'CallCenter'  "
                    :activeOtc="'activeOtc'"
                    :activeNum='selectedNum'
                /> -->
                <!-- ******************************* -->
                <Otc 
                  v-show="selectedTab == 'OTC'">
                </Otc>
                <Rx 
                  v-show="selectedTab == 'Rx'">
                </Rx>
                <CallCenter 
                  v-show="selectedTab == 'CallCenter'">
                </CallCenter>
               
        </div>
      </div>
    </div>
  </template>
  <script>

  import RxHoldedBtns from "@/components/pharmacy/cashpoint/RxHoldedBtns.vue";
  // import InfoPatient from "@/components/pharmacy/cashpoint/InfoPatient.vue";
  import Login from "@/components/pharmacy/cashpoint/Login.vue";
  import CustomTabs from "@/components/global/custom/CustomTabs.vue";
  import Otc from "@/components/pharmacy/cashpoint/tabs/Otc.vue";
  import CallCenter from "@/components/pharmacy/cashpoint/tabs/CallCenter.vue";
  import Rx from "@/components/pharmacy/cashpoint/tabs/Rx.vue";
  import { mapGetters } from "vuex";
  export default {
    components: {
      RxHoldedBtns,
      Login,
      CustomTabs,
      Otc,
      Rx,
      CallCenter,
      // InfoPatient,
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
          { en: "OTC", ar: "OTC", key: "OTC" },
          { en: "Rx", ar: "وصفة طبية", key: "Rx" },
          { en: "CallCenter", ar: "مركز الاتصال", key: "CallCenter" },
          { en: "Insurance", ar: "تأمين", key: "Insurance" },
        ],
        check_error: {},
        serializer_error: {},
      };
    },
    
    computed: {
      ...mapGetters("allPharmacy/pharmacy", ["getSelectedNumber","getSelectedTab"]),
      selectedNum: {
          get() {
              return this.getSelectedNumber;
          },
          set(value) {
              this.$store.dispatch("allPharmacy/pharmacy/setSelectedNumber", value);
          },
      },
      selectedTab: {
          get() {
              return this.getSelectedTab;
          },
          set(value) {
              this.$store.dispatch("allPharmacy/pharmacy/setSelectedTab", value);
          },
      }
    },
  };
  </script>
<style scoped>

</style>
  