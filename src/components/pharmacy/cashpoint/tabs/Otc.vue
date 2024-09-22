
<template>
    <div class="otc">
        <PatientName
            :valuePlaceholder="$t('otc.totalDiscount.placeholder')" 
            :label="$t('patientName.label')"
        >
        </PatientName>

        <PatientComplaint>
        </PatientComplaint>
        
        <PerepationReceipt>
        </PerepationReceipt>

    </div>
   
</template>

<i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>

<script>
import PatientName from "@/components/pharmacy/cashpoint/custom/PatientName.vue";
import PatientComplaint from "@/components/pharmacy/cashpoint/custom/PatientComplaint.vue";
import PerepationReceipt from "@/components/pharmacy/cashpoint/custom/PerepationReceipt.vue";
import { mapGetters, mapState } from "vuex";
    export default {
       name:'Otc',
       components:{
            PatientName,
            PatientComplaint,
            PerepationReceipt,
            
        },
       computed: {
        // ...mapState('pharmacy', ['containsCashpoint']),
        ...mapGetters("allPharmacy/pharmacy", ["diet"]),
        FirstInvoice: {
            get() {
                return this.diet;
            },
          
        },
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
        },
       }
    }
</script>

<style lang="scss" scoped>
 
  
</style>