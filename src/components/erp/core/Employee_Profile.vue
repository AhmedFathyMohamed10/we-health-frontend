<template>
    <div >
      <Base>
        <div class="container">
        <!-- <div class="row">
          <div class="col-12"> 
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                  <a href="index.html" >
                    <img src="/img/Logo.81d5271b.svg" alt="logo" class="header-brand-img desktop-logo"> 
                    </a>
                  <button class="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-success"></span>
                  </button>
                  <div class="collapse navbar-collapse mt-4" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link p-lg-3 active text-black" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">My Info</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link " href="#">People</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link"  href="#">Hiring</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link "  href="#">Reprots</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link "  href="#">Fil</a>
                      </li>
                    </ul>
                    <div class="search me-auto mb-2 mb-lg-0">
                      <a href="index.html" class="header-brand1 mb-4">
                        <i class="fa fa-search" ></i> search...
                        </a>
                     
                    </div>
                    <div class="ms-auto me-auto mb-2 mb-lg-0">
                      <i class="fa fa-inbox fs-4 me-2" aria-hidden="true"></i>
                      <i class="fa fa-question-circle fs-4" aria-hidden="true"></i>
                      </div>
                  </div>
                </div>
              </nav>
          </div>
        </div> -->
        <div class="row">
        <div class="col-xm-6 col-md-5 col-lg-4 col-xl-3 mt-2">
          
            <!-- <Avatar :image="require('@/assets/global/logo/1.jpg')" class="m-1" size="xlarge" shape="circle" /> -->
            <!-- <img class="rounded-circle img-size" alt="avatar1" src="@/assets/global/logo/tempImg.jpg" /> -->
            <Avatar :image="image" shape="circle"  />
          
          <div>
         
          <div class="d-flex mt-3 mb-3 text-nowrap">
            <span class="">
              <i class="fa fa-mobile fs-6 mx-2 " aria-hidden="true"></i>
              {{employee.mobile}}
            </span>
          </div>
          <div class="d-flex mt-3 mb-3 text-nowrap">
            <span class="">
              <i class="fa fa-envelope fs-6 mx-2" aria-hidden="true"></i>
              {{employee.email}}
            </span>
          </div>
          <div class="d-flex mt-3 mb-3 text-nowrap">
            <i class="fa fa-linkedin-square fs-6 mx-2" aria-hidden="true"></i>
            <i class="fa fa-twitter-square fs-6 mx-2" aria-hidden="true"></i>
            <i class="fa fa-facebook-official fs-6 mx-2" aria-hidden="true"></i>
            <i class="fa fa-pinterest-p fs-6 mx-2" aria-hidden="true"></i>
          </div>
          </div>
          <hr/>
          <div>
            <h6 class="text-nowrap text-success" >{{ $t("side_bar.key.hire_date") }}</h6>
            <div class="text-nowrap">
              <span>
                {{job_start_date}}
              </span>
            </div>
            <div class="text-nowrap">
              <span>{{calculateDate}}</span>
            </div>
            
          </div>
         <hr/>
         <div>
          <div class="mt-3 mb-3 text-nowrap">
            <span >
              <i class="fa fa-hashtag fs-6 mx-2" aria-hidden="true"></i>
             {{employee.id}}
            </span>
          </div>
          <div class="mt-3 mb-3 text-nowrap">
            <span >
              <i class="fa fa-clock-o fs-6 mx-2" aria-hidden="true"></i>
              Full Time
            </span>
           
          </div>
          <div class="mt-3 mb-3 text-nowrap">
            <span v-if="employee.role_obj">
              <i class="fa fa-users fs-6 mx-2" aria-hidden="true"></i>
              {{employee.role_obj.name}}
            </span>
           
          </div>
          <div class="mt-3 mb-3 text-nowrap">
            <span >
              <i class="fa fa-location-arrow fs-6 mx-2" aria-hidden="true"></i>
              {{employee.address}}
            </span>
           
          </div>
          <div class="mt-3 mb-3 text-nowrap">
            <span >
              <i class="fa fa-map-marker fs-6 mx-2" aria-hidden="true"></i>
              {{employee.address}}
            </span>
           
          </div>
         </div>
         <hr/>

         <div>
          <h6 class="text-nowrap text-success" >{{ $t("side_bar.key.Manager") }}</h6>
          <a href="index.html" class="header-brand1 mb-4">
            <!-- <img class="rounded-circle img-size" alt="avatar1" src="@/assets/global/logo/1.jpg" /> -->

           <img src="/img/BONDS.bb321ed2.svg " alt="logo" class="rounded-circle brand-img-size"> 
           </a>
           <span class="mb-3" v-if="employee.direct_manager">
            {{employee.direct_manager}}
          </span>
          <span class="mb-3" v-else>
            ----
          </span>
          <h6 class="text-nowrap text-success mt-4" > {{ $t("side_bar.key.Direct_Reports") }}</h6>
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <span class="mb-3">
            {{employee.name}}
          </span>
         </div>
         
        </div>
        <div class="col-xm-6 col-md-7 col-lg-8 col-xl-9 mt-2">
          <h5>{{employee.name}}
          </h5>
          <div class="d-flex justify-content-between " v-if="employee.role_obj">
          <span class="flex-item">{{employee.role_obj.name}} </span>
          <button type="button" class="btn btn-light bg-white btn-sm flex-item">{{ $t("request_change") }}</button>
          </div>
          <div class="mt-5">
         <CustomTabs 
         v-model="selectedTab"
         :tabs="tabs"
         >

        </CustomTabs>
        <div class="selection-content tabs-content my-2">
          <div v-show=" tabsKeys.includes(selectedTab)">
          <Base>
            <div>
            
              <Personal  v-show="selectedTab == 'Personal'">

              </Personal>
              <Job v-show="selectedTab == 'Job'"> </Job>
              <TimeOff v-show="selectedTab == 'TimeOff'"></TimeOff>
              </div>
              <Custodies v-show="selectedTab == 'Custodies'"></Custodies>
              <Training v-show="selectedTab == 'Training'"></Training>
              <Benefits v-show="selectedTab == 'Benefits'"></Benefits>
              <Documents v-show="selectedTab == 'Documents'"></Documents>
              
          </Base>
          </div>
         </div>

          </div>
        </div>
        </div>
      </div>
      </Base>
      
    </div>
</template>
<i18n src="@/lang/global/global.json"></i18n>
<i18n src="@/lang/erp/employees/employeeProfile.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
import Personal from "@/components/erp/HR/employees/profileTabs/Personal.vue"
import Job from "@/components/erp/HR/employees/profileTabs/Job.vue"
import TimeOff from "@/components/erp/HR/employees/profileTabs/TimeOff.vue"
import Custodies from "@/components/erp/HR/employees/profileTabs/Custodies.vue"
import Training from "@/components/erp/HR/employees/profileTabs/Training.vue"
import Benefits from "@/components/erp/HR/employees/profileTabs/Benefits.vue"
import Documents from "@/components/erp/HR/employees/profileTabs/Documents.vue"
import employeeOption from "@/mixins/erp/employees/employeeOptions";
import image from "@/assets/global/logo/tempImg.jpg";
import store from "@/store/index";
import { mapGetters, mapActions } from "vuex";
import moment from "moment"
export default {
  mixins: [employeeOption],
  components: {
    Base,
    CustomTabs,
    Personal,
    Job,
    TimeOff,
    Custodies,
    Training,
    Benefits,
    Documents
   
  },
  data() {
    return {
      image:image,
      selectedTab: "Personal",
     tabs:[
      
        {
          id:1,
          en: "Personal",
          ar: "البيانات ألشخصية",
          key: "Personal",
        },
        {
          id:2,
          en: "Job",
          ar: "الوظيفة",
          key: "Job",
        },
        {
          id:3,
          en: "Time Off",
          ar: "وقت الانتهاء",
          key: "TimeOff",
        },
        {
          id:4,
          en: "Documents",
          ar: "وثائق",
          key: "Documents",
        },
        {
          id:5,
          en: "Benefits",
          ar: "الفوائد",
          key: "Benefits",
        },
        {
          id:6,
          en: "Training",
          ar: "التدريب",
          key: "Training",
        },
        {
          id:7,
          en: "Custodies",
          ar: "العهد",
          key: "Custodies",
        },
       
      
     ]
   
     
    };
  },
 computed:{
tabsKeys(){
  // const keys = Object.keys(object)
  let tabsKeys = []
  const keys = this.tabs.forEach(element => {
    tabsKeys.push(element.key)
  });
  console.log(tabsKeys)
  return tabsKeys
},
...mapGetters("erp/hr/employees", {
  getEmployee: "getEmployee",
}),
employee: {
      get() {
        return this.getEmployee;
      },
      set(value) {
        // this.setForm(value);
      },
    },
  job_start_date(){
    let formate_date  = this.$moment(this.employee.job_start_date).format("MMMM Do YYYY");
    return formate_date
  },
  calculateDate(){
    let now = new Date();
    now =  this.$moment(now);
   let job_date = this.$moment(this.employee.job_start_date)
   var years = now.diff(job_date, 'year');
   job_date.add(years, 'years');
   var months = now.diff(job_date, 'months');
   job_date.add(months, 'months');
   var days = now.diff(job_date, 'days');
   return (years + 'y -' + months + ' m -' + days + ' d');
  }
 },
 beforeRouteEnter(to, from, next) {
  // Do something
  // next({ path: '/foo' }); // Go somewhere else if necessary
  console.log(to.params.id)
  let employee_id = to.params.id
  store.dispatch("erp/hr/employees/getEmployee", employee_id)
  next(
  );                 // Or stay here
},
methods:{
  
}
};
</script>
<style>
.sidBar{
background-color: white;
height: 500px;
}
.search a{
  color: gray;
}
.img-size{
  max-width: 40%;
  object-fit: cover ;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 2px solid rgba(0, 0, 0, 0.5);
}
.p-avatar-circle	{
  width:9rem;
  height: 9rem;
}
.brand-img-size{
  max-width: 20%;
}
.btn{
  white-space: wrap;
}
@media (max-width: 375px) {
  .flex-item {
    flex-basis: 100%; /* Make each item take up the full width */
  }
}
</style>