<template>
  <div>
    <!-- NOt Using ANy where But for Test And Debug -->
    <ul class="side-menu">
      <li class="slide" v-for="item of list2" :key="item.title">

        <router-link v-if="item.link" :to="{'name':item.link}" class="side-menu__item has-link" data-bs-toggle="slide" tag="a">
          <i class="side-menu__icon" :class="item.icon"></i><span class="side-menu__label">{{ item.title }}</span>
        </router-link>

        <!-- <a class="side-menu__item has-link" data-bs-toggle="slide" href="index.html" v-if="item.link">
          <i class="side-menu__icon fe fe-home"></i><span class="side-menu__label">{{ item.title }}</span>
        </a> -->

        <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)" v-if="!item.link">
          <i class="side-menu__icon" :class="item.icon"></i>
          <span class="side-menu__label">{{ item.title }}</span>
          <i class="angle fe fe-chevron-right"></i>
        </a>
        
        <ul class="slide-menu" v-if="!item.link">
            <li class="side-menu-label1"><a href="javascript:void(0)">{{ item.title }}</a></li>

            <li v-for="item2 of item.children" :class="{'sub-slide':!item2.link}" :key="item2.title">

              <router-link v-if="item2.link" :to="{'name':item2.link}" class="slide-item" tag="a">
                <i class="side-menu__icon me-2" :class="item2.icon"></i><span class="">{{ item2.title }}</span>
              </router-link>
              
              <!-- <a href="javascript:void(0)" class="slide-item" v-if="item2.link">{{ item2.title }}</a> -->
              
              <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)" v-if="!item2.link">
                <i class="side-menu__icon me-2" :class="item2.icon"></i>
                <span class="sub-side-menu__label">{{ item2.title }}</span>
                <i class="sub-angle fe fe-chevron-right"></i>
              </a>

              <ul class="sub-slide-menu" v-if="!item2.link">
                  <li v-for="item3 of item2.children" :class="{'sub-slide2':!item3.link}" :key="item3.title">

                    <router-link v-if="item3.link" :to="{'name':item2.link}" class="sub-slide-item" tag="a">
                      <i class="side-menu__icon fe fe-home"></i><span class="">{{ item3.title }}</span>
                    </router-link>

                    <!-- <a class="sub-slide-item" href="javascript:void(0)" v-if="item3.link">{{item3.title}}</a> -->
                    
                    <a class="sub-side-menu__item2" href="javascript:void(0)" data-bs-toggle="sub-slide2" v-if="!item3.link">
                      <i class="side-menu__icon me-2" :class="item3.icon"></i>
                      <span class="sub-side-menu__label2">{{item3.title}}</span>
                      <i class="sub-angle2 fe fe-chevron-right"></i>
                    </a>

                    <ul class="sub-slide-menu2" v-if="!item3.link">
                        <li v-for="item4 of item3.children" :key="item4.title">
                          <router-link v-if="item4.link" :to="{'name':item2.link}" class="sub-slide-item2" tag="a">
                            {{ item3.title }}
                          </router-link>
                          <!-- <a href="javascript:void(0)" class="sub-slide-item2">{{item4.title}}</a> -->
                        </li>
                    </ul>
                  </li>
              </ul>  
            </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  data(){
    return {
      list2:[
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
                title: 'Account',
                icon: 'fa fa-user',
                link: 'account',
                children:[]
              },
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
              {
                title: 'shifts',
                icon: 'fa fa-user',
                link: 'shifts',
                children:[]
              },
              {
                title: 'Accounting',
                icon: 'fa fa-user',
                link: '',
                children:[
                  {
                    title: 'Invoices',
                    icon: 'fa fa-user',
                    link: '',
                    children:[
                      {
                        title: 'Definitions',
                        icon: 'fa fa-user',
                        link: 'definition',
                      }
                    ]
                  }
                ]
              },
            ]
          },
      ],
      list :[
        { 
          title: 'Home',
          icon: 'fa fa-home',
          link: 'home',
          children:[]
        },
        { 
          title: 'ERP',
          icon: 'fa fa-sitemap',
          link: '',
          children:[          
            { 
              title: 'Insurance',
              icon: 'fa fa-home',
              link: 'insurance',
              children:[]
            },    
            {
                  title: 'Accounting',
                  icon: 'fa fa-user',
                  link: '',
                  children:[
                    {
                      title: 'Invoices',
                      icon: 'fa fa-user',
                      link: '',
                      children:[
                        {
                          title: 'Definitions',
                          icon: 'fa fa-user',
                          link: 'definition',
                        }
                      ]
                    }
                  ]
            }
          ]
        },
      ]
    }
  },
}
</script>