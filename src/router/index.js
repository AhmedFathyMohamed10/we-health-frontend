import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
Vue.use(VueRouter);

function lazyLoadView(view) {
  return () => import(`@/views/${view}.vue`);
}
function lazyLoadComponent(view) {
  return () => import(`@/components/${view}.vue`);
}

//*! requireAuth Navigation Guard //
const requireAuth = async (to, from, next) => {
  try {
    // wait for the store to initialize
    await store.dispatch("auth/user/getProfile");
    // check if the user is authenticated
    if (!store.getters["auth/user/getIsAuthenticated"]) {
      next({
        name: "signin",
        query: { redirect: to.fullPath },
      });
    }
    next();
  } catch (err) {
    next({
      name: "signin",
      query: { redirect: to.fullPath },
    });
  }
};

const routes = [
  {
    path: "/demo",
    name: "demo",
    component: lazyLoadComponent("erp/core/accounts/twww"),
  },
  {
    path: "/test",
    name: "test",
    component: lazyLoadView("Test"),
  },
  {
    path: "/",
    name: "home",
    component: lazyLoadView("Home"),
    redirect: { name: "profile" },
  },
  {
    path: "/employee-profile/:id",
    name: "employee-profile",
    component: lazyLoadComponent("erp/core/Employee_Profile"),
  },
    // {
    //     path: "/calender",
    //     name: "/calender",
    //     component: lazyLoadComponent(`erp/core/Calender`),
    // },
    {
        path: "/calender",
        name: "/calender",
        component: lazyLoadComponent(`erp/core/Calender2`),
    },
  {
    path: "/patient",
    name: "patient",
    component: lazyLoadView("Patient"),
    children: [
      {
        path: "rx",
        name: "rx",
        component: lazyLoadComponent("patient/medicalHistory/rx/list"),
      },
      {
        path: "current-rx",
        name: "current-rx",
        component: lazyLoadComponent("patient/recentCase/currentRX/list"),
      },
      {
        path: "medical-test",
        name: "medical-test",
        component: lazyLoadComponent("patient/medicalHistory/medicalTest/list"),
      },
      {
        path: "conditions",
        name: "conditions",
        component: lazyLoadComponent("patient/medicalHistory/conditions/list"),
      },
    ],
  },
  {
    path: "/pharmacy",
    name: "pharmacy",
    component: lazyLoadView("Pharmacy"),
    children: [
      {
        path: "cashpoint",
        name: "cashpoint",
        component: lazyLoadComponent("pharmacy/cashpoint/Core"),
      },
      {
        path: "learn",
        name: "learn",
        component: lazyLoadComponent("pharmacy/learn/Core"),
      },
    ],
  },
  {
    path: "/labs",
    name: "labs",
    component: lazyLoadView("lab"),
    children: [
      {
        path: "lab",
        name: "lab",
        component: lazyLoadComponent("labs/lab/Core"),
      },
    ],
  },
  {
    path: "/auth",
    name: "authentication",
    component: lazyLoadView("Authentication"),
    redirect: { name: "signin" },
    children: [
      {
        path: "signin",
        name: "signin",
        component: lazyLoadComponent("authentication/signin/Signin"),
      },
      {
        path: "signup",
        name: "signup",
        component: lazyLoadComponent("authentication/signup/Signup"),
      },
      {
        path: "forgot-password",
        name: "forgotPassword",
        component: lazyLoadComponent(
          "authentication/forgot-password/RouterWrapper"
        ),
        redirect: { name: "findAccount" },
        children: [
          {
            path: "find-account",
            name: "findAccount",
            component: lazyLoadComponent(
              "authentication/forgot-password/FindAccount"
            ),
          },
          {
            path: "account-preview",
            name: "accountPreview",
            component: lazyLoadComponent(
              "authentication/forgot-password/AccountPreview"
            ),
          },
          {
            path: "verification-method",
            name: "verificationMethod",
            component: lazyLoadComponent(
              "authentication/forgot-password/VerificationMethod"
            ),
          },
          // {
          //   path: "email-verification",
          //   name: "emailVerification",
          //   component: lazyLoadComponent("authentication/forgot-password/EmailVerification"),
          // },
          // {
          //   path: "phone-verification",
          //   name: "phoneVerification",
          //   component: lazyLoadComponent("authentication/forgot-password/phoneVerification"),
          // },
          {
            path: "code-verification",
            name: "codeVerification",
            component: lazyLoadComponent(
              "authentication/forgot-password/CodeVerification"
            ),
          },
          {
            path: "new-password",
            name: "newPassword",
            component: lazyLoadComponent(
              "authentication/forgot-password/NewPassword"
            ),
          },
        ],
      },
    ],
  },
  {
      path: "/business",
      name: "business",
      component: lazyLoadView("Business"),
      beforeEnter: requireAuth,
      redirect: { name: "businessList" },
      children: [{
              path: "business-list",
              name: "businessList",
              component: lazyLoadComponent("business/BusinessList"),
          },
          {
              path: "category",
              name: "category",
              component: lazyLoadComponent("business/Category"),
          },
          {
              path: "specialty",
              name: "specialty",
              component: lazyLoadComponent("business/Specialty"),
          },
          {
              path: "register",
              name: "register",
              component: lazyLoadComponent("business/Register"),
          },
          {
              path: "verify",
              name: "verify",
              component: lazyLoadComponent("business/Verify"),
          },
          
      ],
  },
  {
      path: "/profile",
      name: "profile",
      component: lazyLoadView("Profile"),
      children: [{
          path: "measurements",
          name: "measurements",
          component: lazyLoadComponent("profile/measurements/Core"),
      }, ],
  },
  {
    path: "/search",
    name: "search",
    component: lazyLoadView("Search"),
    children: [
      {
        path: "clinics",
        name: "clinics",
        component: lazyLoadComponent("search/clinics/Core"),
      },
      {
        path: 'mic',
        name: 'mic',
        component: lazyLoadComponent('search/mic/drugs-search/search-drugs'),
      },
      {
        path: 'drugs-interactions',
        name: 'drugs-interactions',
        component: lazyLoadComponent('search/mic/drugs-interactions/interactions-drugs'),
      },
      {
        path: 'disease-search',
        name: 'disease-search',
        component: lazyLoadComponent('search/mic/diseases/Search'),
      },
    ],
  },
  // EMR
  {
    path: "/mr",
    name: "medicalRecords",
    component: lazyLoadView("MedicalRecords"),
    children: [
      {
        path: "ophthalmic",
        name: "ophthalmic",
        component: lazyLoadComponent("mr/ophthalmic/Core"),
      },
      {
        path: "general",
        name: "general",
        component: lazyLoadComponent("mr/general/Core"),
      },
      {
        path: "pediatric",
        name: "pediatric",
        component: lazyLoadComponent("mr/pediatric/Core"),
      },
      {
        path: "physiotherapy",
        name: "physiotherapy",
        component: lazyLoadComponent("mr/physiotherapy/Core"),
      },
      {
        path: "gynecology-obstetric",
        name: "gynecology",
        component: lazyLoadComponent("mr/gynecology/Core"),
      },
      {
        path: "dental",
        name: "dental",
        component: lazyLoadComponent("mr/dental/Core"),
      },
    ],
  },
  // erp
  {
    path: "/erp",
    name: "erp",
    component: lazyLoadView("Erp"),
    children: [
      {
        path: "insurance",
        name: "insurance",
        component: lazyLoadComponent(`erp/core/InsuranceAgents`),
      },
      {
        path: "provider",
        name: "provider",
        component: lazyLoadComponent(`erp/core/Provider`),
      },

      {
        path: "cabinets",
        name: "cabinets",
        component: lazyLoadComponent(`erp/core/cabinets/Main`),
        redirect: {
          name: "partners",
        },
        children: [
          {
            path: "cabinet",
            name: "cabinet",
            component: lazyLoadComponent(`erp/core/cabinets/Cabinets`),
          },
          {
            path: "withdrawal-and-deposit",
            name: "withdrawal-and-deposit",
            component: lazyLoadComponent(
              `erp/core/cabinets/WithdrawalAndDeposit`
            ),
          },
        ],
      },
      {
        path: "partners-and-ratios",
        name: "partnersAndRatios",
        component: lazyLoadComponent(`erp/core/partnersAndRatios/Main`),
        redirect: {
          name: "partners",
        },
        children: [
          {
            path: "partners",
            name: "partners",
            component: lazyLoadComponent(`erp/core/partnersAndRatios/Partners`),
          },
          {
            path: "partner-ratios",
            name: "partner-ratios",
            component: lazyLoadComponent(
              `erp/core/partnersAndRatios/PartnerRatios`
            ),
          },
        ],
      },
      {
        path: "regular-Periodic-Maintenance",
        name: "regular-Periodic-Maintenance",
        component: lazyLoadComponent(
          `erp/core/regularPeriodicMaintenance/Main`
        ),
        redirect: {
          name: "partners",
        },
        children: [
          {
            path: "Maintenance-Group",
            name: "Maintenance-Group",
            component: lazyLoadComponent(
              `erp/core/regularPeriodicMaintenance/MaintenanceGroup`
            ),
          },
          {
            path: "Maintenance",
            name: "Maintenance",
            component: lazyLoadComponent(
              `erp/core/regularPeriodicMaintenance/Maintenance`
            ),
          },
        ],
      },
      {
        path: "accounts",
        name: "accounts",
        component: lazyLoadComponent(`erp/core/accounts/Main`),
        redirect: {
          name: "account",
        },
        children: [
          {
            path: "account",
            name: "account",
            component: lazyLoadComponent(`erp/core/accounts/Account`),
          },
          {
            path: "final-account",
            name: "final-account",
            component: lazyLoadComponent(`erp/core/accounts/FinalAccount`),
          },
          {
            path: "accounting-period",
            name: "accounting-period",
            component: lazyLoadComponent(`erp/core/accounts/AccountingPeriod`),
          },
        ],
      },
      {
        path: "restrictions",
        name: "restrictions",
        component: lazyLoadComponent(`erp/core/restrictions/Main`),
        redirect: {
          name: "restrictions-group",
        },
        children: [
          {
            path: "restrictions-group",
            name: "restrictions-group",
            component: lazyLoadComponent(
              `erp/core/restrictions/RestrictionsGroup`
            ),
          },
          {
            path: "type-restrictions",
            name: "type-restrictions",
            component: lazyLoadComponent(
              `erp/core/restrictions/TypesOfRestrictions`
            ),
          },
          {
            path: "type-securities",
            name: "type-securities",
            component: lazyLoadComponent(
              `erp/core/restrictions/TypesOfSecurities`
            ),
          },
          {
            path: "bonds",
            name: "bonds",
            component: lazyLoadComponent(`erp/core/restrictions/Bonds`),
          },
        ],
      },
      // {
      //   path: "assets",
      //   name: "assets",
      //   component: lazyLoadComponent(`erp/core/assets/Main`),
      //   redirect: {
      //     name: "fixed-assets",
      //   },
      //   children: [
      //     {
      //       path: "settings",
      //       name: "settings",
      //       component: lazyLoadComponent(`erp/core/assets/settings/Main`),
      //       redirect: {
      //         name: "setting-rentals",
      //       },
      //       children: [
      //         {
      //           path: "rentals",
      //           name: "setting-rentals",
      //           component: lazyLoadComponent(
      //             `erp/core/assets/settings/Rentals`
      //           ),
      //         },
      //         {
      //           path: "installments",
      //           name: "setting-installments",
      //           component: lazyLoadComponent(
      //             `erp/core/assets/settings/Installments`
      //           ),
      //         },
      //         {
      //           path: "maintenance",
      //           name: "setting-maintenance",
      //           component: lazyLoadComponent(
      //             `erp/core/assets/settings/Maintenance`
      //           ),
      //         },
      //       ],
      //     },
      //     {
      //       path: "reports",
      //       name: "reports",
      //       component: lazyLoadComponent(`erp/core/assets/reports/Main`),
      //       redirect: {
      //         name: "report-rentals",
      //       },
      //       children: [
      //         {
      //           path: "rentals",
      //           name: "report-rentals",
      //           component: lazyLoadComponent(`erp/core/assets/reports/Rentals`),
      //         },
      //         {
      //           path: "installments",
      //           name: "report-installments",
      //           component: lazyLoadComponent(
      //             `erp/core/assets/reports/Installments`
      //           ),
      //         },
      //         {
      //           path: "maintenance",
      //           name: "report-maintenance",
      //           component: lazyLoadComponent(
      //             `erp/core/assets/reports/Maintenance`
      //           ),
      //         },
      //       ],
      //     },
      //     {
      //       path: "fixed-assets",
      //       name: "fixed-assets",
      //       component: lazyLoadComponent(`erp/core/assets/FixedAssets`),
      //     },
      //     {
      //       path: "Installments",
      //       name: "Installments",
      //       component: lazyLoadComponent(
      //         `erp/core/assets/reports/Installments`
      //       ),
      //     },

      //     {
      //       path: "depreciation-table",
      //       name: "Depreciation-table",
      //       component: lazyLoadComponent(`erp/core/assets/DepreciationTable`),
      //     },
      //     {
      //       path: "assets-group",
      //       name: "Assets-group",
      //       component: lazyLoadComponent(`erp/core/assets/AssetsGroup`),
      //     },
      //     {
      //       path: "Destruction",
      //       name: "Destruction",
      //       component: lazyLoadComponent(`erp/core/assets/Destruction`),
      //     },
      //   ],
      // },
      {
        path: "product-or-service",
        name: "product-or-service",
        component: lazyLoadComponent(`erp/core/productsAndServices/Main`),
        redirect: {
          name: "product",
        },
        children: [
          {
            path: "product-classification",
            name: "product-classification",
            component: lazyLoadComponent(
              `erp/core/productsAndServices/ProductClassification`
            ),
          },
          {
            path: "product",
            name: "product",
            component: lazyLoadComponent(
              `erp/core/productsAndServices/Product`
            ),
          },
          {
            path: "store",
            name: "store",
            component: lazyLoadComponent(`erp/core/productsAndServices/Stores`),
          },
          {
            path: "category",
            name: "",
            component: lazyLoadComponent(
              `erp/core/productsAndServices/category/Main`
            ),
            children: [
              {
                path: "sub-category",
                name: "sub-category",
                component: lazyLoadComponent(
                  `erp/core/productsAndServices/category/SupCategory`
                ),
              },
              {
                path: "main-category",
                name: "main-category",
                component: lazyLoadComponent(
                  `erp/core/productsAndServices/category/MainCategory`
                ),
              },
            ],
          },

          {
            path: "inventory-management",
            name: "inventory-management",
            component: lazyLoadComponent(
              `erp/core/productsAndServices/InventoryManagement`
            ),
          },

          {
            path: "pricing-policy",
            name: "pricing-policy",
            component: lazyLoadComponent(
              `erp/core/productsAndServices/PricingPolicy`
            ),
          },
          {
            path: "product-unit",
            name: "product-unit",
            component: lazyLoadComponent(
              `erp/core/productsAndServices/ProductUnit`
            ),
          },
        ],
      },
      {
        path: "hr",
        name: "hr",
        component: lazyLoadComponent(`erp/core/HR/Main`),
        redirect: {
          name: "employees",
        },
        children: [
          {
            path: "attendance-departure",
            name: "attendance-departure",
            component: lazyLoadComponent(`erp/core/HR/AttendanceAndDeparture`),
            meta: {
              CheckInAndCheckOut: {
                attendance: 1,
                departure: 2,
              },
            },
            beforeEnter: (to, from, next) => {
              // Check if the type exists in CheckInAndCheckOut
              if (to.meta.CheckInAndCheckOut.hasOwnProperty(to.query.type)) {
                // If it does, proceed as normal
                next();
              } else {
                // If it doesn't, redirect to an existing type
                next({
                  name: "attendance-departure",
                  query: { type: "attendance" },
                });
              }
            },
            props: (route) => ({
              queryParam: route.meta.CheckInAndCheckOut[route.query.type],
            }),
          },
        ]
        },
            {
                path: "clients-groups",
                name: "clients-groups",
                redirect: {
                    name: "clients",
                },
                component: lazyLoadComponent(`erp/core/ClientsAndGroups/MAIN`),
                children: [{
                        path: "clients",
                        name: "clients",
                        component: lazyLoadComponent(`erp/core/ClientsAndGroups/Client`),
                    },
                    {
                        path: "groups",
                        name: "groups",
                        component: lazyLoadComponent(`erp/core/ClientsAndGroups/Groups`),
                    },
                ],
            },
            {
                path: "client-provider",
                name: "client-provider",
                component: lazyLoadComponent(`erp/core/ClientAndProvider`),
                meta: {
                    userCategories: {
                        client: 1,
                        provider: 2,
                    },
                },
                beforeEnter: (to, from, next) => {
                    // Check if the type exists in userCategories
                    if (to.meta.userCategories.hasOwnProperty(to.query.type)) {
                        // If it does, proceed as normal
                        next();
                    } else {
                        // If it doesn't, redirect to an existing type
                        next({ name: "client-provider", query: { type: "client" } });
                    }
                },
                props: (route) => ({
                    queryParam: route.meta.userCategories[route.query.type],
                }),
            },

      {
        path: "accounting",
        name: "accounting",
        redirect: {
          name: "invoices",
        },
        component: lazyLoadComponent(`erp/core/Accounting`),
        children: [
          {
            path: "invoices",
            name: "invoices",
            component: lazyLoadComponent(`erp/accounting/Invoices`),
            redirect: {
              name: "definitions",
            },
            children: [
              {
                path: "definitions",
                name: "definitions",
                component: lazyLoadComponent(
                  `erp/accounting/invoices/Definition`
                ),
                meta: {
                  invoiceCategories: {
                    invoices: 1,
                    orders: 2,
                    offers: 3,
                  },
                },
                beforeEnter: (to, from, next) => {
                  // Check if the type exists in invoiceCategories
                  if (to.meta.invoiceCategories.hasOwnProperty(to.query.type)) {
                    // If it does, proceed as normal
                    next();
                  } else {
                    // If it doesn't, redirect to an existing type
                    next({ name: "definition", query: { type: "invoices" } });
                  }
                },
                props: (route) => ({
                  queryParam: route.meta.invoiceCategories[route.query.type],
                }),
              },
              {
                path: "group",
                name: "group",
                component: lazyLoadComponent(`erp/accounting/invoices/Group`),
              },
              {
                path: "invoice",
                name: "invoice",
                component: lazyLoadComponent(`erp/accounting/invoices/Invoice`),
                meta: {
                  invoiceTypes: {
                    sales: 1,
                    "sale-returns": 2,
                    purchase: 3,
                    "purchase-returns": 4,
                    transports: 5,
                    input: 6,
                    output: 7,
                    "items-of-opening-inventory": 8,
                    // 'items-of-inventory-ending':9,
                    "sales-order": 10,
                    "purchase-order": 11,
                    // 'sales-offer':12,
                    // 'purchase-offer':13,
                  },
                },
                beforeEnter: (to, from, next) => {
                  // Check if the type exists in invoiceTypes
                  if (to.meta.invoiceTypes.hasOwnProperty(to.query.type)) {
                    // If it does, proceed as normal
                    next();
                  } else {
                    // If it doesn't, redirect to an existing type
                    next({ name: "invoice", query: { type: "purchase" } });
                  }
                },
                props: (route) => ({
                  queryParam: route.meta.invoiceTypes[route.query.type],
                }),
              },
            ],
          },
          {
            path: "balances",
            name: "balances",
            redirect: {
              name: "accountStatement",
            },
            component: lazyLoadComponent(`erp/accounting/Balances`),
            children: [
              {
                path: "account-statement",
                name: "accountStatement",
                component: lazyLoadComponent(
                  `erp/accounting/balances/AccountStatement`
                ),
                meta: {
                  statementTypes: {
                    mini: 1,
                    detailed: 2,
                  },
                },
                beforeEnter: (to, from, next) => {
                  // Check if the type exists in statementTypes
                  if (to.meta.statementTypes.hasOwnProperty(to.query.type)) {
                    // If it does, proceed as normal
                    next();
                  } else {
                    // If it doesn't, redirect to an existing type
                    next({ name: "accountStatement", query: { type: "mini" } });
                  }
                },
                props: (route) => ({
                  queryParam: route.meta.statementTypes[route.query.type],
                }),
              },
              {
                path: "product-statement",
                name: "productStatement",
                component: lazyLoadComponent(
                  `erp/accounting/balances/ProductStatement`
                ),
                meta: {
                  statementTypes: {
                    mini: 1,
                    detailed: 2,
                  },
                },
                beforeEnter: (to, from, next) => {
                  // Check if the type exists in statementTypes
                  if (to.meta.statementTypes.hasOwnProperty(to.query.type)) {
                    // If it does, proceed as normal
                    next();
                  } else {
                    // If it doesn't, redirect to an existing type
                    next({ name: "productStatement", query: { type: "mini" } });
                  }
                },
                props: (route) => ({
                  queryParam: route.meta.statementTypes[route.query.type],
                }),
              },
              {
                path: "product-profit",
                name: "productProfit",
                component: lazyLoadComponent(
                  `erp/accounting/balances/ProductProfit`
                ),
                meta: {
                  profitTypes: {
                    mini: 1,
                    detailed: 2,
                  },
                },
                beforeEnter: (to, from, next) => {
                  // Check if the type exists in profitTypes
                  if (to.meta.profitTypes.hasOwnProperty(to.query.type)) {
                    // If it does, proceed as normal
                    next();
                  } else {
                    // If it doesn't, redirect to an existing type
                    next({ name: "productProfit", query: { type: "mini" } });
                  }
                },
                props: (route) => ({
                  queryParam: route.meta.profitTypes[route.query.type],
                }),
              },
            ],
          },
        ],
      },
      {
        path: "management",
        name: "management",
        redirect: {
          name: "tasks",
        },
        component: lazyLoadComponent(`erp/core/Management`),
        children: [
          {
            path: "tasks",
            name: "tasks",
            redirect: {
              name: "tasks-group",
            },
            component: lazyLoadComponent(`erp/management/Tasks`),
            children: [
              {
                path: "group",
                name: "tasks-group",
                component: lazyLoadComponent(`erp/management/tasks/Group`),
              },
              {
                path: "status",
                name: "tasks-status",
                component: lazyLoadComponent(`erp/management/tasks/Status`),
              },
              {
                path: "task",
                name: "tasks-task",
                component: lazyLoadComponent(`erp/management/tasks/Task`),
              },
            ],
          },
        ],
      },
    ],
  },
  // erp_v2
  {
    path: "/erp-v2",
    name: "erp-v2",
    component: lazyLoadView("Erp"),
    children: [
      {
        path: "definition",
        name: "definition",
        component: lazyLoadComponent(`erp_v2/definition/Main`),
      },
      {
        path: "clients-definition",
        name: "clients-definition",
        component: lazyLoadComponent(`erp_v2/definition/profiles/Main`),
      },
      {
        path: "accounts-definition",
        name: "accounts-definition",
        component: lazyLoadComponent(`erp_v2/definition/accounts/Main`),
      },
      {
        path: "items-definition",
        name: "items-definition",
        component: lazyLoadComponent(`erp_v2/definition/items/Main`),
      },
      {
        path: "hr-definition",
        name: "hr-definition",
        component: lazyLoadComponent(`erp_v2/definition/hr/Main`),
      },
      {
        path: "invoice-definition",
        name: "invoice-definition",
        component: lazyLoadComponent(`erp_v2/definition/invoices/Main`),
      },
      {
        path: "assets",
        name: "assets",
        component: lazyLoadComponent(`erp_v2/core/assets/Main`),
        redirect: {
          name: "pricing",
        },
        children: [
          {
            path: "pricing",
            name: "pricing",
            component: lazyLoadComponent(`erp_v2/core/assets/Pricing`),
          },
        ],
      },
    ]
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
