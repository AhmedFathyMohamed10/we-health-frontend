
<template>
    <div class="otc">
        <PatientName
            :valuePlaceholder="$t('otc.totalDiscount.placeholder')" 
            :label="$t('patientName.label')"
        >
        </PatientName>
        <PatientDiagnosis
     
          >
        </PatientDiagnosis>

        <SearchDiagnosis>

        </SearchDiagnosis>
        
        <PerepationReceipt>

        </PerepationReceipt>


        
 
        
    </div>
   
</template>

<i18n src="@/lang/pharmacy/cashpoint/otc.json"></i18n>

<script>

import PatientName from "@/components/pharmacy/cashpoint/custom/PatientName.vue";
import PatientDiagnosis from "@/components/pharmacy/cashpoint/custom/PatientDiagnosis.vue";
import SearchDiagnosis from "@/components/pharmacy/cashpoint/custom/SearchDiagnosis.vue";
import PerepationReceipt from "@/components/pharmacy/cashpoint/custom/PerepationReceipt.vue";
  export default {
    name:'Rx',
    components:{
        PatientName,
        PatientDiagnosis,
        PerepationReceipt,
        SearchDiagnosis
      
    },

    }






</script>

<style lang="scss" scoped>
 
  
</style>