import departments from "./departments/departments";
import roles from "./roles/roles";
import shifts from "./shifts/shifts";
import employees from "./employees/employees";
import vacations from "./vacation/vacation";
import official_vacation from "./vacation/official_vacations";
import categories from "./overtime/categories/categories";
import overtime from "./overtime/overtime/overtime";
import liabilities from "./liabilities/liabilities/liabilities";
import liabilities_categories from "./liabilities/categories/categories";
import courses from "./interships/courses/courses";
import internships from "./interships/internships/internships";
import promotions from "./promotions/promotions";
import policies from "./insurance/policies";
import insurances from "./insurance/insurances";
import settings from "./settings/settings";
import vacation_settings from "./settings/vacation_settings";
import bonus_groups from "./bonus/group";
import bonus from "./bonus/bonus";
import errands from "./errnads/errands";
import imprests from "./imprests/imprests";
import imprests_reports from "./imprests/hr_imprests";
import hr_salary_report from "./reports/salary-entitlement-reports";
import custodies from "./custodies/custodies";
import Evaluation from "./evaluation/Evaluations";
import attendanceAndDeparture from "./attendanceAndDeparture/attendanceAndDeparture";

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
    departments,
    roles,
    shifts,
    employees,
    vacations,
    official_vacation,
    categories,
    overtime,
    liabilities,
    liabilities_categories,
    courses,
    internships,
    promotions,
    policies,
    insurances,
    settings,
    bonus_groups,
    bonus,
    imprests,
    imprests_reports,
    hr_salary_report,
    Evaluation,
    errands,
    custodies,
    vacation_settings,
    attendanceAndDeparture,
  },
};
