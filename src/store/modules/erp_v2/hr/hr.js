import reward from "./reward";
import rewardSearch from "./rewardSearch";
import rewardRecord from "./rewardRecord";
import dayOffDefinition from "./dayOffDefinition";
import employeeDayOff from "./employeeDayOff";
import allowanceDefinition from "./allowanceDefinition";
import allowanceDefinitionSearch from "./allowanceDefinitionSearch";
import allowance from "./allowance";
import department from "./department";
import overTimeAndOverDue from "./overTimeAndOverDue";
import overTimeAndOverDueSearch from "./overTimeAndOverDueSearch";
import overTimeAndOverDueRecord from "./overTimeAndOverDueRecord";
import roles from "./roles";
import departmentSearch from "./departmentSearch";
import salaryRaise from "./salaryRaise";
import shiftDefinition from "./shiftDefinition";
import shiftRecord from "./shiftRecord";
import courses from "./courses";
import internship from "./internship";
import insurance from "./insurance";
import imprest from "./imprest";
import attendance from "./attendance";
import roleSearch from "./roleSearch"
import employees from "./employees/employee";
import errands from "./errnads/errands";
import employeeSearch from "./employees/employeeSearch";
import employeeGroup from "./employees/groups"
import employeeDepartment from "./employees/department";
import Package from "./package"
import employeeRole from "./roles";
import official_vacations from "./daysOff/official_vacations"
import daysOff from "./daysOff/vacation"


import attendanceEmployeeSearch from "./shiftRecord/attendanceEmployeeSearch";
export default {
  namespaced: true,
  state: {},
  // get the currant state value
  getters: {},
  // use to perform un mutate or change states
  mutations: {},
  // use to perform un asynchronous tasks
  actions: {},
  // to import child modules here
  modules: {
      reward,
      rewardSearch,
      rewardRecord,
      dayOffDefinition,
      employeeDayOff,
      allowanceDefinition,
      allowanceDefinitionSearch,
      allowance,
      department,
      roles,
      overTimeAndOverDue,
      overTimeAndOverDueSearch,
      overTimeAndOverDueRecord,
      departmentSearch,
      salaryRaise,
      shiftDefinition,
      shiftRecord,
      courses,
      internship,
      imprest,
      Package,
      insurance,
      attendance,
      roleSearch,
      employees,
      employeeSearch,
      employeeGroup,
      employeeDepartment,
      employeeRole,
      errands,
      official_vacations,
      daysOff,



      attendanceEmployeeSearch,
  },
};
