<template>
  <div>
    <header class="app-header header sticky">
      <div class="container-fluid main-container"
        :class="{'background-white':!sashdarkMode}"
      >
        <div class="d-flex">
          <a
            aria-label="Hide Sidebar"
            class="app-sidebar__toggle"
            data-bs-toggle="sidebar"
            href="javascript:void(0)"
            @click="handleSidebarToggle"
          ></a>
          <!-- sidebar-toggle-->
          <a class="logo-horizontal" href="#">
            <!-- <img
              src="/assets/images/brand/logo.png"
              class="header-brand-img desktop-logo"
              alt="logo"
            />
            <img
              src="/assets/images/brand/logo-3.png"
              class="header-brand-img light-logo1"
              alt="logo"
            /> -->
            <img src="@/assets/global/logo/BONDS.svg" alt="logo" class="header-brand-img desktop-logo" width="200">
            <img src="@/assets/global/logo/Logo.svg" alt="logo" class="header-brand-img light-logo1" width="200">
          </a>
          <!-- LOGO -->
          <div class="main-header-center ms-3 d-none d-lg-block w-30">
            <span class="p-input-icon-right">
              <i class="pi pi-search" />
              <InputText type="text" placeholder="Search" />
            </span>
          </div>
          <div class="d-flex order-lg-2 ms-auto header-right-icons">
            <!-- SEARCH -->
            <button
              class="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon fe fe-more-vertical"></span>
            </button>
            <div class="navbar navbar-collapse responsive-navbar p-0">
              <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
                <div class="d-flex flex-wrap py-sm-0 py-2 order-lg-2">
                  <div class="dropdown d-lg-none d-flex">
                    <a
                      href="javascript:void(0)"
                      class="nav-link icon"
                      data-bs-toggle="dropdown"
                    >
                      <i class="fe fe-search"></i>
                    </a>
                    <div class="dropdown-menu header-search dropdown-menu-start">
                      <div class="input-group w-100 p-2">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search...."
                        />
                        <div class="input-group-text btn btn-primary">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- COUNTRY -->
                  <Language />
                  <!-- COUNTRY -->

                  <!-- Theme-Layout -->
                  <Theme />
                  <!-- Theme-Layout -->

                  <div class="dropdown d-flex">
                    <a class="nav-link icon full-screen-link nav-link-bg">
                      <i class="fe fe-minimize fullscreen-button"></i>
                    </a>
                  </div>
                  <!-- FULL-SCREEN -->
                  <div class="dropdown d-flex notifications">
                    <a class="nav-link icon" data-bs-toggle="dropdown"
                      ><i class="fe fe-bell"></i><span class="pulse"></span>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                    >
                      <div class="drop-heading border-bottom">
                        <div class="d-flex">
                          <h6 class="mt-1 mb-0 fs-16 fw-semibold text-dark">
                            Notifications
                          </h6>
                        </div>
                      </div>
                      <div class="notifications-menu">
                        <a class="dropdown-item d-flex" href="notify-list.html">
                          <div
                            class="me-3 notifyimg bg-primary brround box-shadow-primary"
                          >
                            <i class="fe fe-mail"></i>
                          </div>
                          <div class="mt-1 wd-80p">
                            <h5 class="notification-label mb-1">
                              New Application received
                            </h5>
                            <span class="notification-subtext">3 days ago</span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex" href="notify-list.html">
                          <div
                            class="me-3 notifyimg bg-secondary brround box-shadow-secondary"
                          >
                            <i class="fe fe-check-circle"></i>
                          </div>
                          <div class="mt-1 wd-80p">
                            <h5 class="notification-label mb-1">
                              Project has been approved
                            </h5>
                            <span class="notification-subtext">2 hours ago</span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex" href="notify-list.html">
                          <div
                            class="me-3 notifyimg bg-success brround box-shadow-success"
                          >
                            <i class="fe fe-shopping-cart"></i>
                          </div>
                          <div class="mt-1 wd-80p">
                            <h5 class="notification-label mb-1">
                              Your Product Delivered
                            </h5>
                            <span class="notification-subtext">30 min ago</span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex" href="notify-list.html">
                          <div
                            class="me-3 notifyimg bg-pink brround box-shadow-pink"
                          >
                            <i class="fe fe-user-plus"></i>
                          </div>
                          <div class="mt-1 wd-80p">
                            <h5 class="notification-label mb-1">
                              Friend Requests
                            </h5>
                            <span class="notification-subtext">1 day ago</span>
                          </div>
                        </a>
                      </div>
                      <div class="dropdown-divider m-0"></div>
                      <a
                        href="notify-list.html"
                        class="dropdown-item text-center p-3 text-muted"
                        >View all Notification</a
                      >
                    </div>
                  </div>
                  <!-- NOTIFICATIONS -->
                  <div class="dropdown d-flex message">
                    <a
                      class="nav-link icon text-center"
                      data-bs-toggle="dropdown"
                    >
                      <i class="fe fe-message-square"></i
                      ><span class="pulse-danger"></span>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                    >
                      <div class="drop-heading border-bottom">
                        <div class="d-flex">
                          <h6 class="mt-1 mb-0 fs-16 fw-semibold text-dark">
                            You have 5 Messages
                          </h6>
                          <div class="ms-auto">
                            <a
                              href="javascript:void(0)"
                              class="text-muted p-0 fs-12"
                              >make all unread</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="message-menu message-menu-scroll">
                        <a class="dropdown-item d-flex" href="chat.html">
                          <span
                            class="avatar avatar-md brround me-3 align-self-center cover-image"
                            data-bs-image-src="/assets/images/users/1.jpg"
                          ></span>
                          <div class="wd-90p">
                            <div class="d-flex">
                              <h5 class="mb-1">Peter Theil</h5>
                              <small class="text-muted ms-auto text-end">
                                6:45 am
                              </small>
                            </div>
                            <span>Commented on file Guest list....</span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex" href="chat.html">
                          <span
                            class="avatar avatar-md brround me-3 align-self-center cover-image"
                            data-bs-image-src="/assets/images/users/15.jpg"
                          ></span>
                          <div class="wd-90p">
                            <div class="d-flex">
                              <h5 class="mb-1">Abagael Luth</h5>
                              <small class="text-muted ms-auto text-end">
                                10:35 am
                              </small>
                            </div>
                            <span>New Meetup Started......</span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex" href="chat.html">
                          <span
                            class="avatar avatar-md brround me-3 align-self-center cover-image"
                            data-bs-image-src="/assets/images/users/12.jpg"
                          ></span>
                          <div class="wd-90p">
                            <div class="d-flex">
                              <h5 class="mb-1">Brizid Dawson</h5>
                              <small class="text-muted ms-auto text-end">
                                2:17 pm
                              </small>
                            </div>
                            <span>Brizid is in the Warehouse...</span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex" href="chat.html">
                          <span
                            class="avatar avatar-md brround me-3 align-self-center cover-image"
                            data-bs-image-src="/assets/images/users/4.jpg"
                          ></span>
                          <div class="wd-90p">
                            <div class="d-flex">
                              <h5 class="mb-1">Shannon Shaw</h5>
                              <small class="text-muted ms-auto text-end">
                                7:55 pm
                              </small>
                            </div>
                            <span>New Product Realease......</span>
                          </div>
                        </a>
                        <a class="dropdown-item d-flex" href="chat.html">
                          <span
                            class="avatar avatar-md brround me-3 align-self-center cover-image"
                            data-bs-image-src="/assets/images/users/3.jpg"
                          ></span>
                          <div class="wd-90p">
                            <div class="d-flex">
                              <h5 class="mb-1">Cherry Blossom</h5>
                              <small class="text-muted ms-auto text-end">
                                7:55 pm
                              </small>
                            </div>
                            <span>You have appointment on......</span>
                          </div>
                        </a>
                      </div>
                      <div class="dropdown-divider m-0"></div>
                      <a
                        href="javascript:void(0)"
                        class="dropdown-item text-center p-3 text-muted"
                        >See all Messages</a
                      >
                    </div>
                  </div>
                  <!-- MESSAGE-BOX -->
                  <div class="dropdown d-flex header-settings">
                    <a
                      href="javascript:void(0);"
                      class="nav-link icon"
                      data-bs-toggle="sidebar-right"
                      data-target=".sidebar-right"
                    >
                      <i class="fe fe-align-right"></i>
                    </a>
                  </div>
                  <!-- SIDE-MENU -->
                  <div class="dropdown d-flex profile-1">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="dropdown"
                    class="nav-link leading-none my-custom-avatar d-flex"
                  >
                    <img
                      src="/assets/images/users/1.jpg"
                      alt="profile-user"
                      class="avatar profile-user brround cover-image"
                    />
                  </a>
                  <div
                    class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"
                  >
                    <div class="drop-heading">
                      <div v-for="item in clinics" :key="item.order">
                        <router-link v-if="item.order <= toggleEMR"  :to="'/mr' + item.route" class="text-dark d-flex gap-2 align-items-center justify-content-between p-1 mb-1 business-route fs-14 fw-semibold" :class="checkIfBusinessClick(item.title)" @click.native="reorderClinicsList(item.route)">
                          <div class="d-flex align-items-center">
                            <img
                              :src="item.img"
                              alt="profile-user"
                              class="avatar profile-user brround cover-image"
                            />
                            <span class="clinic-name m-2">{{item.title}}</span>
                          </div>
                          <div>
                            <span v-if="item.route != '/' + $route.name"><i class="sync-icon pi pi-sync  mx-auto p-2"></i></span>
                          </div>
                        </router-link>
                        <div v-if="displayDivider()" class="dropdown-divider m-0 mb-1"></div>
                      </div>
                    </div>
                    <span class="d-block text-center business-more" @click.stop.prevent="toggleEMRList()">
                      <i class='pi' :class="changeAngle()"></i>
                    </span> 

                    <div class="dropdown-divider m-0"></div>
                    <a class="dropdown-item">
                      <i class="dropdown-icon fa fa-circle-info"></i> Help & Support
                    </a>
                    <a class="dropdown-item">
                      <i class="dropdown-icon fa fa-circle-half-stroke"></i> Activities
                    </a>
                    <a class="dropdown-item">
                      <i class="dropdown-icon fa-solid fa-gear"></i> Settings
                    </a>
                    <a class="dropdown-item">
                      <i class="dropdown-icon fa fa-lock"></i> Lockscreen
                    </a>
                    <h6 class="text-center py-4 mb-0 bg-white logout">
                       <router-link to="/auth/signin"><i class="fa fa-right-from-bracket"></i> Sign out</router-link>
                      </h6> 

                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!--APP-SIDEBAR-->
    <div class="sticky">
      <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
      <div class="app-sidebar" id="app-sidebar-height">
        <div class="side-header">
          
          <a class="header-brand1" href="#">
            <!-- <img src="@/assets/global/logo/Logo.svg" alt=""> -->
            <img
              src="@/assets/global/logo/Logo.svg"
              alt="logo"
              class="header-brand-img desktop-logo"
            />
            <img
              src="@/assets/global/logo/BONDS.svg"
              alt="logo"
              class="header-brand-img toggle-logo"
            />
            <img
              src="@/assets/global/logo/BONDS.svg"
              alt="logo"
              class="header-brand-img light-logo"
            />
            <img
              src="@/assets/global/logo/Logo.svg"
              alt="logo"
              class="header-brand-img light-logo1"
            />
            <!-- <img
                src="/assets/images/brand/logo.png"
                class="header-brand-img desktop-logo"
                alt="logo"
              />
              <img
                src="/assets/images/brand/logo-1.png"
                class="header-brand-img toggle-logo"
                alt="logo"
              />
              <img
                src="/assets/images/brand/logo-2.png"
                class="header-brand-img light-logo"
                alt="logo"
              />
              <img
                src="/assets/images/brand/logo-3.png"
                class="header-brand-img light-logo1"
                alt="logo"
              /> -->
          </a>
          <!-- LOGO -->
        </div>
        <div class="main-sidemenu">
          <div class="slide-left disabled" id="slide-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
              />
            </svg>
          </div>
          
          <List :items="businessItems" :sidebarStatus="sidebarStatus"/>
          <FooterLinks v-if="sidebarStatus == 1" :sidebarStatus="sidebarStatus"></FooterLinks>

          <!-- <List :items="profileItems" v-show="isProfileRoute" /> -->
          <div class="slide-right" id="slide-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#7b8191"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!--/APP-SIDEBAR-->
    </div>
  </div>
</template>
<i18n src="@/lang/global/layout/left-side-bar/leftSideBar.json"></i18n>
<script>
import Language from '@/components/global/utilities/Language.vue';
import Theme from '@/components/global/utilities/Theme.vue';
import List from "./left-side-bar/List.vue";
import FooterLinks from '@/components/global/layout/footerLinks.vue'

export default {
  components: {
    List,
    Language,
    Theme,
    FooterLinks
  },
  props: {},
  data() {
    return {
      sidebarStatus: 0,
      toggleEMR: 3,
      sashdarkMode: localStorage.getItem("sashdarkMode"),
      clinics: [
        {
          title: "Username",
          route: "/profile",
          img: "/assets/images/users/1.jpg",
          order: 1
        },
        {
          title: "General",
          route: "/general",
          img: "/assets/images/clinics/general.jpg",
          order: 2
        },
        {
          title: "Ophthalmic",
          route: "/ophthalmic",
          img: "/assets/images/clinics/ophthalmic.jpg",
          order: 3
        },
        {
          title: "Pediatric",
          route: "/pediatric",
          img: "/assets/images/users/1.jpg",
          order: 4
        },
        {
          title: "Physiotherapy",
          route: "/physiotherapy",
          img: "/assets/images/users/1.jpg",
          order: 5
        },
        {
          title: "Gynecology",
          route: "/gynecology-obstetric",
          img: "/assets/images/users/1.jpg",
          order: 6
        },
        {
          title: "Dental",
          route: "/dental",
          img: "/assets/images/users/1.jpg",
          order: 7
        }
      ],
      businessItems: [
        {
          title: "Social",
          icon: "fa-share-nodes",
          to: "",
          children: [
            {
              title: "News Feed",
              icon: "fa-house",
              to: "",
            },
            {
              title: "Profile",
              icon: "fa-user",
              to: "",
            },
            {
              title: "Messages",
              icon: "fa-message",
              to: "",
            },
            {
              title: "Friends",
              icon: "fa-user-group",
              to: "",
            },
            {
              title: "Groups",
              icon: "fa-people-group",
              to: "",
            },
          ],
        },
        {
          title: "Search",
          icon: "fa-search",
          to: "",
          children: [
            {
              title: "MIC",
              icon: "fa-book-medical",
              to: "",
            },
            {
              title: "Clinics",
              icon: "fa-stethoscope",
              to: "/search/clinics",
            },
            {
              title: "Pharmacy",
              icon: "fa-staff-snake",
              to: "",
            },
            {
              title: "Labs",
              icon: "fa-flask-vial",
              to: "",
            },
            {
              title: "Nursing",
              icon: "fa-user-nurse",
              to: "",
            },
            {
              title: "Hospitals",
              icon: "fa-hospital",
              to: "",
            },
          ],
        },
        {
          title: "Medical History",
          stitle: "Med. History",
          icon: "fa-clock-rotate-left",
          to: "",
          children: [
            {
              title: "Rx",
              icon: "fa-file-prescription",
              to: "/patient/rx",
            },
            {
              title: "Medical Tests",
              icon: "fa-microscope",
              to: "/patient/medical-test",
            },
            {
              title: "Family History",
              icon: "fa-people-roof",
              to: "",
            },
            {
              title: "Conditions History",
              stitle: "Conditions H.",
              icon: "fa-hospital-user",
              to: "/patient/conditions",
            },
            {
              title: "Ocular",
              icon: "fa-eye",
              to: "",
            },
            {
              title: "Dental",
              icon: "fa-tooth",
              to: "",
            },
            {
              title: "Vaccination",
              icon: "fa-syringe",
              to: "",
            },
          ],
        },
        {
          title: "Recent Case",
          stitle: "R. Case",
          icon: "fa-bed-pulse",
          to: "",
          children: [
            {
              title: "Current Rx",
              icon: "fa-prescription-bottle",
              to: "/patient/current-rx",
            },
            {
              title: "Medical Conditions",
              stitle: "M. Conditions",
              icon: "fa-briefcase-medical",
              to: "",
            },
            {
              title: "Requests",
              icon: "fa-circle-question",
              to: "",
            },
          ],
        },
        {
          title: "Pharmacy Cashpoint",
          stitle: "Ph. Cashpoint",
          icon: "fa-money-bill-1-wave",
          to: "/pharmacy/cashpoint",
          arrow: false,
          shortcut: "ph-cashpoint"
        },
        {
          title: "Lab Cashpoint",
          stitle: "L. Cashpoint",
          icon: "fa-money-bill-1-wave",
          to: "/labs/lab",
          arrow: false,
          shortcut: "lab-cashpoint"
        },
        {
          title: "We Care",
          icon: "fa-hands-holding-child",
          to: "",
          children: [
            {
              title: "People",
              icon: "fa-people-arrows",
              to: "",
            },
            {
              title: "Pets",
              icon: "fa-shield-dog",
              to: "",
            },
          ],
        },
        {
          title: "Erp",
          icon: "fa-sitemap",
          to: "",
          children: [
            {
              title: "General",
              icon: "fa-border-all",
              to: "",
            },
            {
              title: "Branches",
              icon: "fa-code-branch",
              to: "",
            },
            {
              title: "Definitions",
              icon: "fa-bookmark",
              to: "/erp-v2/definition",
            },
            {
              title: "Invoices",
              icon: "fa-file-invoice-dollar",
              to: "/erp-v2/invoice-definition",
            },
            {
              title: "HR Management",
              stitle: "HR Manag.",
              icon: "fa-arrows-down-to-people",
              to: "/erp-v2/hr-definition",
            },
            {
              title: "Marketing",
              icon: "fa-bullhorn",
              to: "",
            },
            {
              title: "Clients",
              icon: "fa-person-circle-check",
              to: "/erp-v2/clients-definition",
            },
            {
              title: "Accounting",
              icon: "fa-calculator",
              to: "/erp-v2/accounts-definition",
            },
            {
              title: "Items",
              icon: "fa-list-ul",
              to: "/erp-v2/items-definition",
            },
            {
              title: "Reports",
              icon: "fa-file-lines",
              to: "",
            },
            {
              title: "Roles",
              icon: "fa-arrows-to-circle",
              to: "",
            },
            {
              title: "ERP Settings",
              icon: "fa-gears",
              to: "",
            },
          ],
        },
        {
          title: "Settings",
          icon: "fa-gear",
          to: "",
          children: [
            {
              title: "Language",
              icon: "fa-earth-americas",
              to: "",
            },
            {
              title: "Notifications",
              icon: "fa-bell",
              to: "",
            },
            {
              title: "Security & Password",
              stitle: "Password",
              icon: "fa-lock",
              to: "",
            },
            {
              title: "Privacy Center",
              title: "Privacy",
              icon: "fa-shield-halved",
              to: "",
            },
          ],
        },
      ],
      profileItems: [
        
      ],
      dividerFlag: 1
    };
  },
  computed: {
  },
  mounted(){
    let screenWidth = $(window).width();
    if (screenWidth <= 992) {
      this.sidebarStatus = 1
    }
    else {
      this.sidebarStatus = 0 
    }
    this.adjustSidebarHeight();
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    displayDivider() {
      let result = false
      if (this.dividerFlag == 1){
        result = true
        this.dividerFlag = 2
      }
      return result
    },
    myEventHandler(e) {
      let screenWidth = $(window).width()
      if (screenWidth <= 992) {
        this.sidebarStatus = 1
      }
    },
    adjustSidebarHeight(){
      let element = document.getElementById('app-sidebar-height');
      if (this.sidebarStatus == 0){
        element.style.height = "fit-content";
        element.style.paddingBottom = "20px";
      }
      else if (this.sidebarStatus == 1) {
        element.style.height = "unset";
      }
    },
    handleSidebarToggle() {
      this.handleSidebarStatus();
      this.adjustSidebarHeight();
    },
    handleSidebarStatus (){
      let screenWidth = $(window).width()
      if (screenWidth <= 992) {
        this.sidebarStatus = 1
      }
      else if (screenWidth > 992) {
        let sidebarWidth = $('.app-sidebar').width()
        if (sidebarWidth > 200) {
          this.sidebarStatus = 0
        }
        else {
          this.sidebarStatus = 1
        }
                
      }
    },
    toggleEMRList() {
      if (this.toggleEMR == 3) {
        this.toggleEMR = 1000
      }
      else {
        this.toggleEMR = 3
      }
    },
    changeAngle() {
      if (this.toggleEMR > 3) {
        return "pi-angle-up"
      }
      else {
        return "pi-angle-down"
      }
    },
    checkIfBusinessClick(clinic_name) {
      let route_name = this.$route.name;
      if (route_name == clinic_name.toLowerCase()) {
        return 'changeBg-color'
      } 
    },
    reorderClinicsList(title) {
      let i = 0;
      while (i < this.clinics.length) {
        if (this.clinics[i].route == title) {
          let object = this.clinics[i]
          this.clinics.splice(i, 1) 
          this.clinics.unshift(object)
        }
        i++;
      }
    },
  },
};
</script>
<style>
  .sub-slide{
    box-shadow: 0px 1px 3px rgb(1 1 1 / 24%);
  }
</style>
<style lang="scss">
  .app-sidebar {
    margin-top: 81px;
    padding-top: 0px !important;
    background:  linear-gradient(180deg, #F1FAF7, #E0EBE8) !important;
    border-radius: 1rem;
    margin-bottom: 1%;
  }
  .side-menu__item {
    padding: 2px 2px !important;
  }
  .side-menu {
    padding: unset !important;
  }
  .slide {
    background-color: #F9FCFB !important;
  }
  .side-menu__item {
    margin-left: 20px !important;
  }
  .side-menu__item {
    margin-right: 10px !important;
  }
  .hover-submenu .side-menu .side-menu__icon {
    font-size: 14px !important;
  }
  .side-menu__label {
    font-size: smaller;
    font-weight: 600;
  }
  .slide-menu {
    background:  linear-gradient(180deg, #F1FAF7, #E0EBE8) !important;
    margin-left: 0px !important;
    padding-top: 1px;
  }
  .sub-slide{
    background-color: white;
    border-radius: 1rem;
    margin-top: 4px !important; 
    padding-left: 20px;
    height: 28px;
  }
  .slide-menu {
    padding-left:  unset !important;
  }
  .hover-submenu .sub-side-menu__item {
    padding: 0px 20px !important;
  }
  .hover-submenu .slide.is-expanded .slide-menu {
    padding: 0.5px 0px;
  }
  .hover-submenu .side-menu .side-menu__icon {
    width: 17px !important;
  }
  .sb-down {
    font-weight: 600;
    font-size: 10px;
    margin-right: 5px;
  }
  .header-brand-img{
    width: 200px !important;
  }
  @media (min-width: 992px){
    .hover-submenu.sidebar-mini.sidenav-toggled .app-sidebar {
        width: 120px;
    }
    .res-side-menu-title {
      font-size: x-small !important;
    }
  }
  @media (max-width: 992px) {
    .app-sidebar {
      margin-top: 12px !important;
    }
  }
  .dropdown-menu {
    background:  linear-gradient(180deg, #F1FAF7, #E0EBE8) !important;
    border-radius: 0 0 2rem 2rem;
    min-width: 300px;
    border-radius: 1.5rem !important;
  }
  .dropdown-menu-arrow.dropdown-menu-end:before, .dropdown-menu-arrow.dropdown-menu-end:after{
    background: #63bcc9;
    right: 27px;
  }

  .drop-heading {
    padding: unset;
  }
  .business-route{
    background-color: #63bcc9;
    border-radius: 1.5rem;
    padding: 0 !important;
    box-shadow: #205072a1 0px 1px 3px;
  }
  .business-route:hover {
    background-color: $secondary;
    border-radius: 1.5rem;
    border: 3px solid $secondary;
  }
  .clinic-name {
    color: white;
  }
  .sync-icon{
    color: white !important;
  }
  .dropdown .avatar.profile-user {
    width: 2.5rem;
    height: 2.5rem;
  }
  .dropdown-item {
    background-color: #F9FCFB !important;
    padding: 3px 16px 0px 16px !important;
    margin-bottom: 2px;
    font-weight: 600;
    font-size: small;
    color: #205072 !important;
  }
  .dropdown-icon{
    color: #205072 !important;
  }
  .dropdown-item:hover {
    background-color: #f9fcfb;
    color: var(--primary-bg-color) !important;
    .dropdown-icon {
      color: var(--primary-bg-color) !important; 
    }
  }
  .logout{
    border-radius: 0 0 1.5rem 1.5rem;
    color: #205072;
  }
  .logout:hover {
    color: var(--primary-bg-color) !important;
  }
  .app-sidebar {
    overflow: auto;
    scrollbar-width: none;
  }
  .sub-slide:has(.router-link-exact-active.router-link-active) {
    background: linear-gradient(180deg, #56C596 0%, #2B634B 100%) !important
  }
  .router-link-exact-active:has(.custom-component) {
    .custom-component {
      background: linear-gradient(180deg, #56C596 0%, #2B634B 100%) !important;
      color: $white;
    }
  }
  .router-link-exact-active.router-link-active {
    .sub-side-menu__label, .item-icon-2 {
      color: $white !important;
    }
  }
  .btn-outline:hover {
    border: 1px solid $success;
  }
  .slide.is-expanded {
    .side-menu__item {
      .side-menu__label, .side-menu__icon, .fe-chevron-right {
        color: $success !important;
      }
    }
  }
  .changeBg-color {
    background: linear-gradient(180deg, #457aa0, #205072);
    border: unset !important;
  }
  .custom-username {
    color: #205072;
    font-weight: 600;
  }
</style>
