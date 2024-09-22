
<template>
  <div class="container d-flex gap-3 flex-wrap justify-content-start">
    <BaseWrapper
      :title="$t('header.definition')"
      :icon="'fa-solid fa-bookmark'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
    <div class="d-flex gap-3 flex-wrap justify-content-center">
      <a @click="openRewardDefinition" class="">
        <BaseItem :title="$t('header.reward')" icon="fa-solid fa-award" :active="displayRewardDefinition" />
      </a>
      <a @click="openShiftDefinition" class="">
        <BaseItem :title="$t('header.shift')" icon="fa-solid fa-hourglass-start" :active="displayShiftDefinition" />
      </a>
      <a @click="openVariableShift" class="">
        <BaseItem :title="$t('header.variableShift')" icon="fa-solid fa-clock" :active="displayVariableShift" />
      </a>
      <a @click="openFixedShift" class="">
        <BaseItem :title="$t('header.fixedShift')" icon="fa-solid fa-stopwatch" :active="displayFixedShift" />
      </a>
      <a @click="openAllowanceDefinition" class="">
        <BaseItem :title="$t('header.allowance')" icon="fa-solid fa-right-to-bracket" :active="displayAllowanceDefinition" />
      </a>
      
      <a @click="openDayOffDefinition" class="">
        <BaseItem :title="$t('header.dayOff')" icon="fa-solid fa-plane-departure" :active="displayDayOffDefinition" />
      </a> 
      <a @click="openOvertimeAndOverdueDefinition" class="">
        <BaseItem :title="$t('header.overtimeAndOverdue')" icon="fa-solid fa-money-bill-transfer" :active="displayOvertimeAndOverdueDefinition" />
      </a>
      <a @click="openDepartment" class="">
        <BaseItem :title="$t('header.department')" icon="fa-solid fa-arrows-split-up-and-left" :active="displayDepartment" />
      </a>
      <a @click="openRole" class="">
        <BaseItem :title="$t('header.role')" icon="fa-solid fa-sliders" :active="displayRole" />
      </a>
      <a @click="openPackage" class="">
        <BaseItem :title="$t('header.package')" icon="pi pi-book" :active="displayPackage" />
      </a>
      <a @click="openInsurance" class="">
        <BaseItem :title="$t('header.insurance')" icon="pi pi-book" :active="displayInsurance" />
      </a>
      <a @click="openImprest" class="">
        <BaseItem :title="$t('header.imprest')" icon="pi pi-book" :active="displayImprest" />
      </a>
      <a @click="openSalaryRaise" class="">
        <BaseItem :title="$t('header.salaryRaise')" icon="fa-solid fa-money-bill-trend-up" :active="displaySalaryRaise" />
      </a>
      <a @click="openCourse" class="">
        <BaseItem :title="$t('header.course')" icon="fa-solid fa-book-journal-whills" :active="displayCourse" />
      </a>
      <a @click="openInternship" class="">
        <BaseItem :title="$t('header.internship')" icon="fa-solid fa-shuffle" :active="displayInternship" />
      </a>
      <a @click="openErrands" class="">
        <BaseItem :title="$t('header.errands')" icon="pi pi-book" :active="displayErrands" />
      </a>
    </div>
    </BaseWrapper>
      
    <BaseWrapper
      :title="$t('header.record')"
      :icon="'fa-solid fa-file-export'"
      :showBreadCrumb="false"
      :showToggleContent="true"
      :showFullScreen="false"
    >
    <div class="d-flex gap-3 flex-wrap justify-content-center">
    
      <a @click="openRewardRecord" class="">
        <BaseItem :title="$t('header.reward')" icon="fa-solid fa-award" :active="displayRewardRecord" />
      </a>
   
      <a @click="openAllowanceRecord" class="">
        <BaseItem :title="$t('header.allowance')" icon="fa-solid fa-right-to-bracket" :active="displayAllowanceRecord" />
      </a>
   
      
    
      <a @click="openDayOffRecord" class="">
        <BaseItem :title="$t('header.dayOff')" icon="fa-solid fa-plane-departure" :active="displayDayOffRecord" />
      </a>
 
      <a @click="openHrDaysOff" class="">
        <BaseItem :title="$t('header.hrDaysOff')" icon="fa-solid fa-plane-departure" :active="displayHrDaysOff" />
      </a>
      <a @click="openEmployeeDaysOff" class="">
        <BaseItem :title="$t('header.employeeDaysOff')" icon="fa-solid fa-plane-departure" :active="displayEmployeeDaysOff" />
      </a>


      <a @click="openOvertimeAndOverdueRecord" class="">
        <BaseItem :title="$t('header.overtimeAndOverdue')" icon="fa-solid fa-money-bill-transfer" :active="displayOvertimeAndOverdueRecord" />
      </a>

    
      <a @click="openAttendance" class="">
        <BaseItem :title="$t('header.attendance')" icon="fa-solid fa-clipboard-user" :active="displayAttendance" />
      </a>

    </div>
    </BaseWrapper>  
    
    <ShiftDefinition :header="$t('header.shift')" :display="displayShiftDefinition" @close="closeShiftDefinition"/>
    <VariableShift :header="$t('header.variableShift')" :display="displayVariableShift" @close="closeVariableShift" :type_shift="typeShiftRecord"/>
    <AllowanceRecord :header="$t('header.allowance')" :display="displayAllowanceRecord" @close="closeAllowanceRecord" />
    <FixedShift :header="$t('header.fixedShift')" :display="displayFixedShift" @close="closeFixedShift" :type_shift="typeShiftRecord"/>
    <AllowanceDefinition :header="$t('header.allowance')" :display="displayAllowanceDefinition" @close="closeAllowanceDefinition"/>
    <RewardDefinition :header="$t('header.reward')" :display="displayRewardDefinition" @close="closeRewardDefinition"/>
    <RewardRecord :header="$t('header.reward')" :display="displayRewardRecord" @close="closeRewardRecord"/>
    <DayOffDefinition :header="$t('header.dayOff')" :display="displayDayOffDefinition" @close="closeDayOffDefinition"/>
    <DayOffRecord :header="$t('header.dayOff')" :display="displayDayOffRecord" @close="closeDayOffRecord"/>
    <hrDaysOff :header="$t('header.hrDaysOff')" :display="displayHrDaysOff" @close="closeHrDaysOff"/>
    <EmployeeDaysOff :header="$t('header.employeeDaysOff')" :display="displayEmployeeDaysOff" @close="closeEmployeeDaysOff"/>

    <OverTimeAndOverDueDefinition :header="$t('header.overtimeAndOverdue')" :display="displayOvertimeAndOverdueDefinition" @close="closeOvertimeAndOverdueDefinition"/>
    <OverTimeAndOverDueRecord :header="$t('header.overtimeAndOverdue')" :display="displayOvertimeAndOverdueRecord" @close="closeOvertimeAndOverdueRecord"/>
    
    
    <Department :header="$t('header.department')" :display="displayDepartment" @close="closeDepartment"/>
    <Role :header="$t('header.role')" :display="displayRole" @close="closeRole"/>
    <Package :header="$t('header.package')" :display="displayPackage" @close="closePackage"/>
    <Insurance :header="$t('header.insurance')" :display="displayInsurance" @close="closeInsurance"/>
    <Imprest :header="$t('header.imprest')" :display="displayImprest" @close="closeImprest"/>
    <SalaryRaise :header="$t('header.salaryRaise')" :display="displaySalaryRaise" @close="closeSalaryRaise"/>
    <Course :header="$t('header.course')" :display="displayCourse" @close="closeCourse"/>
    <Attendance :header="$t('header.attendance')" :display="displayAttendance" @close="closeAttendance"/>
    <Internship :header="$t('header.internship')" :display="displayInternship" @close="closeInternship"/>
    <Errands :header="$t('header.errands')" :display="displayErrands" @close="closeErrands"/>
    
  </div>
</template>
<i18n src="@/lang/erp_v2/definition.json"></i18n>
<script>
import BaseWrapper from "@/components/global/UI/base/BaseWrapper";
import BaseItem from "@/components/global/UI/base/BaseItem.vue";
import toast from "@/mixins/global/toast";
import DayOffDefinition from "@/components/erp_v2/definition/hr/dayOff/DayOffDefinition.vue";
import DayOffRecord from "@/components/erp_v2/definition/hr/dayOff/DayOffRecord.vue";
import hrDaysOff from "@/components/erp_v2/definition/hr/dayOff/hrDaysOff.vue";
import EmployeeDaysOff from "@/components/erp_v2/definition/hr/dayOff/employeeDaysOff.vue";

import RewardDefinition from "@/components/erp_v2/definition/hr/reward/RewardDefinition.vue";
import RewardRecord from "@/components/erp_v2/definition/hr/reward/RewardRecord.vue";

import ShiftDefinition from "@/components/erp_v2/definition/hr/shift/ShiftDefinition.vue";
import VariableShift from "@/components/erp_v2/definition/hr/shift/VariableShift.vue";
import FixedShift from "@/components/erp_v2/definition/hr/shift/FixedShift.vue";

import AllowanceRecord from "@/components/erp_v2/definition/hr/allowance/AllowanceRecord.vue";
import AllowanceDefinition from "@/components/erp_v2/definition/hr/allowance/AllowanceDefinition.vue";

import OverTimeAndOverDueDefinition from "@/components/erp_v2/definition/hr/overTimeAndOverDue/OverTimeAndOverDueDefinition.vue";
import OverTimeAndOverDueRecord from "@/components/erp_v2/definition/hr/overTimeAndOverDue/OverTimeAndOverDueRecord.vue";

import Department from "@/components/erp_v2/definition/hr/Department.vue";
import Role from "@/components/erp_v2/definition/hr/Role.vue";
import Package from "@/components/erp_v2/definition/hr/Package.vue";
import Insurance from "@/components/erp_v2/definition/hr/Insurance.vue";
import Imprest from "@/components/erp_v2/definition/hr/Imprest.vue";
import SalaryRaise from "@/components/erp_v2/definition/hr/SalaryRaise.vue";
import Course from "@/components/erp_v2/definition/hr/Course.vue";
import Attendance from "@/components/erp_v2/definition/hr/Attendance.vue";
import Internship from "@/components/erp_v2/definition/hr/Internship.vue";
import Errands from "@/components/erp_v2/definition/hr/Errands.vue"
export default {
  mixins: [toast],
  components: {
    BaseWrapper,
    BaseItem,

    DayOffDefinition,
    DayOffRecord,
    hrDaysOff,
    EmployeeDaysOff,

    RewardDefinition,
    RewardRecord,

    ShiftDefinition,
    VariableShift,
    FixedShift,

    AllowanceRecord,
    AllowanceDefinition,

    OverTimeAndOverDueDefinition,
    OverTimeAndOverDueRecord,
    
    Department,
    Role,
    Package,
    Insurance,
    Imprest,
    SalaryRaise,
    Course,
    Attendance,
    Internship,
    Errands,

  },
  data() {
    return {
      display:false,
      searchCategory: 'employee', // Default to searching by employee
      searchQuery: '',
      searchResults: [],
      displayErrands : false,
      displayDayOffDefinition:false,
      displayDayOffRecord:false,
      displayHrDaysOff:false,
      displayEmployeeDaysOff:false,

      displayRewardDefinition:false,
      displayRewardRecord:false,

      displayShiftDefinition:false,
      displayVariableShift:false,
      displayFixedShift:false,
      typeShiftRecord:null,

      displayAllowanceRecord:false,
      displayAllowanceDefinition:false,
      
      displayOvertimeAndOverdueDefinition:false,
      displayOvertimeAndOverdueRecord:false,


      displayDepartment:false,
      displayRole:false,
      displayInsurance:false,
      displayPackage:false,
      displayImprest:false,
      displaySalaryRaise:false,
      displayCourse:false,
      displayAttendance:false,
      displayInternship:false,
    }
  },

  methods: {
    openErrands(){
      this.displayErrands = true;
    },
    closeErrands(){
      this.displayErrands = false;
    },
    openAttendance(){
      this.displayAttendance = true;
    },
    closeAttendance(){
      this.displayAttendance = false;
    },
    openInternship(){
      this.displayInternship = true;
    },
    closeInternship(){
      this.displayInternship = false;
    },
    openCourse(){
      this.displayCourse = true;
    },
    closeCourse(){
      this.displayCourse = false;
    },
    openSalaryRaise(){
      this.displaySalaryRaise = true;
    },
    closeSalaryRaise(){
      this.displaySalaryRaise = false;
    },
    openImprest(){
      this.displayImprest = true;
    },
    closeImprest(){
      this.displayImprest = false;
    },
    openPackage(){
      this.displayPackage = true;
    },
    closePackage(){
      this.displayPackage = false;
    },
    openDepartment(){
      this.displayDepartment = true;
    },
    closeDepartment(){
      this.displayDepartment = false;
    },
    openInsurance(){
      this.displayInsurance = true;
    },
    closeInsurance(){
      this.displayInsurance = false;
    },
    openRole(){
      this.displayRole = true;
    },
    closeRole(){
      this.displayRole = false;
    },
    //////////////Overtime & Overdue/////////////////////
    openOvertimeAndOverdueDefinition(){
      this.displayOvertimeAndOverdueDefinition = true;
    },
    closeOvertimeAndOverdueDefinition(){
      this.displayOvertimeAndOverdueDefinition = false;
    },
    openOvertimeAndOverdueRecord(){
      this.displayOvertimeAndOverdueRecord = true;
    },
    closeOvertimeAndOverdueRecord(){
      this.displayOvertimeAndOverdueRecord = false;
    },
    //////////// Day off//////////////////
    openDayOffDefinition(){
      this.displayDayOffDefinition = true;
    },
    closeDayOffDefinition(){
      this.displayDayOffDefinition = false;
    },

    openDayOffRecord(){
      this.displayDayOffRecord = true;
    },
    closeDayOffRecord(){
      this.displayDayOffRecord = false;
    },
    openEmployeeDaysOff(){
      this.displayEmployeeDaysOff = true;
    },
    closeEmployeeDaysOff(){
      this.displayEmployeeDaysOff = false;
    },
    openHrDaysOff(){
      this.displayHrDaysOff = true;
    },
    closeHrDaysOff(){
      this.displayHrDaysOff = false;
    },
    /////////////// Reward ////////////////////
    openRewardDefinition(){
      this.displayRewardDefinition = true;
    },
    closeRewardDefinition(){
      this.displayRewardDefinition = false;
    },
    openRewardRecord(){
      this.displayRewardRecord = true;
    },
    closeRewardRecord(){
      this.displayRewardRecord = false;
    },
    //////////////// Shift //////////////////
    openShiftDefinition(){
      this.displayShiftDefinition = true;
    },
    closeShiftDefinition(){
      this.displayShiftDefinition = false;
    },
    openVariableShift(){
      this.typeShiftRecord = 2
      this.displayVariableShift = true;
    },
    closeVariableShift(){
      this.typeShiftRecord=null
      this.displayVariableShift = false;
    },
    openFixedShift(){
      this.typeShiftRecord = 1
      this.displayFixedShift = true;
    },
    closeFixedShift(){
      this.typeShiftRecord=null
      this.displayFixedShift = false;
    },
    /////////////// Allowance ///////////////
    openAllowanceRecord(){
      this.displayAllowanceRecord = true;
    },
    closeAllowanceRecord(){
      this.displayAllowanceRecord = false;
    },
    openAllowanceDefinition(){
      this.displayAllowanceDefinition = true;
    },
    closeAllowanceDefinition(){
      this.displayAllowanceDefinition = false;
    },
  },
};
</script>
