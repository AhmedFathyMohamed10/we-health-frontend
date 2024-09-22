
export default {
  namespaced: true,
  state: {
    businessItems:[
      { 
        title: 'Home',
        icon: 'fa fa-home',
        link: 'home',
        children:[]
      },
   
      { 
        title: 'Clinics',
        icon: 'fa fa-stethoscope',
        link: '',
        children:[
          {
            title: 'Ophthalmic',
            icon: 'fa fa-eye',
            link: 'ophthalmic',
            children:[]
          },
          {
            title: 'physiotherapy ',
            icon: 'fa fa-user-md',
            link: 'physiotherapy',
            children:[]
          },
          {
            title: 'pediatric ',
            icon: 'fa fa-child',
            link: 'pediatric',
            children:[]
          },
          {
            title: 'General',
            icon: 'fa fa-stethoscope',
            link: 'general',
            children:[]
          },
          {
            title: 'Gynecology & Obstetric',
            icon: 'fa fa-female',
            link: 'gynecology',
            children:[]
          },
        ]
      },

      { 
        title: 'ERP',
        icon: 'fa fa-sitemap',
        link: '',
        children:[             
          {
            title: 'ERP',
            icon: 'fa fa-user',
            link: 'erp',
            children:[]
          },
          {
            title: 'Insurance',
            icon: 'fa fa-user',
            link: 'insurance',
            children:[]
          },
          {
            title: 'Groups',
            icon: 'fa fa-user',
            link: 'groups',
            children:[]
          },
          {
            title: 'Clients',
            icon: 'fa fa-user',
            link: 'clients',
            children:[]
          },
          {
            title: 'Providers',
            icon: 'fa fa-user',
            link: 'provider',
            children:[]
          },
          {
            title: 'shifts',
            icon: 'fa fa-user',
            link: 'shifts',
            children:[]
          },
           // accounts
           {
            title: 'Accounts',
            icon: 'fa fa-user',
            link: '',
            children:[
              {
                title: 'Account',
                icon: 'fa fa-user',
                link: 'account',
                children:[]
              },
              {
                title: 'Final Account',
                icon: 'fa fa-user',
                link: 'final-account',
                children:[]
              },
              {
                title: 'Accounting Period',
                icon: 'fa fa-user',
                link: 'accounting-period',
                children:[]
              },
            ]
          },
          // Restrictions
          {
            title: 'Restrictions',
            icon: 'fa fa-user',
            link: '',
            children:[
              {
                title: 'Group',
                icon: 'fa fa-user',
                link: 'restrictions-group',
                children:[]
              },
              {
                title: 'Type Restrictions',
                icon: 'fa fa-user',
                link: 'type-restrictions',
                children:[]
              },
              {
              title: 'Type Securities',
              icon: 'fa fa-user',
              link: 'type-securities',
              children:[]
              },
              {
                title: 'Bonds',
                icon: 'fa fa-user',
                link: 'bonds',
                children:[]
                },
            ]
          },
          // product
          {
            title: 'Product or Service',
            icon: 'fa fa-user',
            link: '',
            children:[
              {
                title: 'Product Rating',
                icon: 'fa fa-user',
                link: 'product-rating',
                children:[]
              },
              {
                title: 'Sub Category',
                icon: 'fa fa-user',
                link: 'sub-category',
                children:[]
              },
              {
                title: 'Product',
                icon: 'fa fa-user',
                link: 'product',
                children:[]
              },
              {
                title: 'Main Category',
                icon: 'fa fa-user',
                link: 'main-category',
                children:[]
              },
              {
                title: 'Pricing Policy',
                icon: 'fa fa-user',
                link: 'pricing-policy',
                children:[]
              },
            ]
          },
          // hr
          {
            title: 'HR',
            icon: 'fa fa-user',
            link: '',
            children:[
              {
                title: 'Departments',
                icon: 'fa fa-user',
                link: 'departments',
                children:[]
              },
              {
                title: 'Roles',
                icon: 'fa fa-user',
                link: 'roles',
                children:[]
              },
              {
                title: 'Employees',
                icon: 'fa fa-user',
                link: 'employees',
                children:[]
              },
            ]
          },
          // client
          {
            title: 'Clients and Groups',
            icon: 'fa fa-user',
            link: '',
            children:[
              {
                title: 'Clients',
                icon: 'fa fa-user',
                link: 'clients',
                children:[]
              },
              {
                title: 'Groups',
                icon: 'fa fa-user',
                link: 'groups',
                children:[]
              },
              {
                title: 'Employees',
                icon: 'fa fa-user',
                link: 'employees',
                children:[]
              },
            ]
          },
         
          // assets
          {
            title: 'Assets',
            icon: 'fa fa-user',
            link: '',
            children:[
              {
                title: 'Fixed Assets',
                icon: 'fa fa-user',
                link: 'fixedAssets',
                children:[]
              },
              {
                title: 'Depreciation Table',
                icon: 'fa fa-user',
                link: 'DepreciationTable',
                children:[]
              },
              {
              title: 'Assets Group',
              icon: 'fa fa-user',
              link: 'AssetsGroup',
              children:[]
              },
            ]
          },
         
        ]
      },
    ],
    profileItems:[
      { 
        title: 'Social',
        icon: 'fa fa-home',
        link: '',
        children:[
          {
            title: 'News Feed',
            icon: 'fa fa-home',
            link: '#',
            children:[]
          },
          {
            title: 'Groups',
            icon: 'fa fa-home',
            link: '#',
            children:[]
          },
          {
            title: 'Pages',
            icon: 'fa fa-home',
            link: '#',
            children:[]
          },
        ]
      },
      { 
        title: 'Search',
        icon: 'fa fa-search',
        link: '',
        children:[
          {
            title: 'Places',
            icon: 'fa fa-home',
            link: '#',
            children:[]
          },
          {
            title: 'Doctors',
            icon: 'fa fa-home',
            link: '#',
            children:[]
          },
          {
            title: 'Drugs',
            icon: 'fa fa-home',
            link: '#',
            children:[]
          },
        ]
      },
      { 
        title: 'Medical History',
        icon: 'fa fa-columns',
        link: '',
        children:[
          {
            title: 'Measurements',
            icon: 'fa fa-bar-chart',
            link: 'measurements',
            children:[]
          },
        ]
      },
    ],
  },
  // get the currant state value
  getters: { 
    // Sidebar business Items ///////////////////////////
    businessItems:(state) => state.businessItems,
    // Sidebar business Items ///////////////////////////
    profileItems:(state) => state.profileItems,
  },
  // use to perform un mutate or change states
  mutations: {
  }, 
  // use to perform un asynchronous tasks
  actions: { 
  },
};
