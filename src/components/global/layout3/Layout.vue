<template>
  <div>
    <!-- HEADER -->
    <header class="header">
      <div class="header__container">
        <div class="header__toggle" @click="toggleNavbar">
          <i class="pi pi-align-justify"></i>
        </div>        
        <div class="header__search">
            <span class="p-input-icon-right">
              <i class="pi pi-search" />
              <InputText type="text" v-model="searchText" placeholder="Search" />
            </span>
            <div class="d-flex align-items-center gap-3">
              <div class="notify-wrapper">
                <i v-if="!hasNotifications" class="pi pi-bell fs-5 text-success custom-badge" v-badge.success @click="toggleNotifications"></i>
                <i v-else class="pi pi-bell fs-5 text-success" v-badge.success="3" @click="toggleNotifications"></i>
                <OverlayPanel ref="notifications_overlay_menu">
                  <h6 class="px-2 py-5">You Don't Received any Notifications Yet</h6>
                </OverlayPanel>
              </div>
              <div class="avatar-wrapper">
                <span class="avatar" @click="toggle">
                  <Avatar :image="avatar" size="large" shape="circle"  />
                </span>
                <OverlayPanel ref="user_overlay_menu">
                  <!-- <Base>    -->
                    <ul>
                      <li v-for="(item,index) in businessList" :key="item.to" class="user_overlay_menu_item my-1">
                        <h6 v-if="index===0" class="d-flex align-items-center gap-2 p-1 business-route">
                          <Avatar v-if="item.avatar" :image="avatar" shape="circle"  />
                          <Avatar v-else :label="item.label[0]"  shape="circle"  />
                          <router-link :to="item.to"> {{ item.label }}</router-link>
                          <span><i class="pi pi-sync"></i></span>
                        </h6>
                        <Transition name="fade">
                          <h6 v-if="index>0 && showMore" class="d-flex align-items-center gap-2 p-1 mb-0 business-route">
                            <Avatar v-if="item.avatar" :image="avatar" shape="circle"  />
                            <Avatar v-else :label="item.label[0]"  shape="circle"  />
                            <router-link :to="item.to"> {{ item.label }}</router-link>
                            <span><i class="pi pi-sync"></i></span>
                          </h6>
                        </Transition>
                      </li>
                      <a v-if="businessList.length>1" href="javascript:void(0)" @click="toggleMore" class="d-block text-center business-more">
                        <i class='pi' :class="[showMore?'pi-angle-up':'pi-angle-down']" ></i>
                      </a> 
                    </ul>
                    <ul>
                      <li v-for="item in items" :key="item.to" class="user_overlay_menu_item my-1">
                        <h6 class="p-1 mb-0">
                         <router-link :to="item.to"><i :class="item.icon"></i> {{ item.label }}</router-link>
                        </h6> 
                      </li>
                    </ul>
                    <!-- <template v-slot:footer>                       -->
                      <h6 class="text-center py-2 mb-0 bg-white logout">
                       <a href="javascript:void(0)" @click="logout"><i class="pi pi-sign-out"></i> Sign out</a>
                      </h6> 
                    <!-- </template> -->
                  <!-- </Base> -->
                </OverlayPanel>
              </div>
            </div>
        </div>        

      </div>
    </header>
    <!-- NAV -->
    <div :class="{'nav': true, 'show-menu': showMenu}" id="navbar">
      <nav class="nav__container">
        <div>
                    <a href="#" class="nav__link nav__logo">
                        <div class="header__toggle" @click="toggleNavbar">
                          <i :class="{'pi pi-align-justify': showMenu}"></i>
                        </div>
                        <img :src="logo" alt="" class="">
                        <span class="nav__logo-name align-self-end">WEHEALTHIT</span>
                    </a>
    
                    <div class="nav__list">
                        <div class="nav__items">
                            <h3 class="nav__subtitle">Profile</h3>
                            <a href="#" class="nav__link active">
                                <i class='pi pi-home nav__icon' ></i>
                                <span class="nav__name">Home</span>
                            </a>
                            
                            <div class="nav__dropdown">
                                <a href="#" class="nav__link">
                                    <i class='pi pi-share-alt nav__icon' ></i>
                                    <span class="nav__name">Social</span>
                                    <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div class="nav__dropdown-collapse">
                                    <div class="nav__dropdown-content">
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="pi pi-bookmark"></i> New Feed
                                        </router-link>   
                                        <router-link to="/profile" class="nav__dropdown-item">
                                          <i class="pi pi-user"></i> Profile
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item d-flex align-items-center justify-content-between">
                                            <span>
                                              <i class='pi pi-comment nav__icon' ></i>
                                              <span class="nav__name">Messages</span>
                                            </span>
                                            <Badge value="2"  severity="danger"></Badge>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="nav__dropdown">
                                <a href="#" class="nav__link">
                                  <i class="fa fa-heartbeat nav__icon" aria-hidden="true"></i>
                                    <!-- <i class='pi pi-heart nav__icon' ></i> -->
                                    <span class="nav__name">We Care</span>
                                    <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div class="nav__dropdown-collapse">
                                    <div class="nav__dropdown-content">
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-male" aria-hidden="true"></i> People
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-paw" aria-hidden="true"></i> Pets
                                        </router-link>   
                                    </div>
                                </div>
                            </div>
                            <div class="nav__dropdown">
                                <a href="#" class="nav__link">
                                    <i class='pi pi-history nav__icon' ></i>
                                    <span class="nav__name">Medical History</span>
                                    <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div class="nav__dropdown-collapse">
                                    <div class="nav__dropdown-content">
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> RX
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Medical Tests
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Family History
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Conditions History
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Ocular
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Dental
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Vaccination
                                        </router-link>   
                                    </div>
                                </div>
                            </div>
                            <div class="nav__dropdown">
                                <a href="#" class="nav__link">
                                    <i class='pi pi-bolt nav__icon' ></i>
                                    <span class="nav__name"> Shortcuts</span>
                                    <i class='pi pi-ellipsis-h nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div class="nav__dropdown-collapse">
                                    <div class="nav__dropdown-content">
                                        <div class="shortcuts p-1">
                                            <router-link to="/" class="">
                                              <BaseItem title="Measurements" icon="pi pi-chart-line" size="small" shape="leaf" :active="false" />
                                            </router-link>   
                                            <router-link to="/" class="">
                                              <BaseItem title="Fitness" icon="pi pi-chart-line" size="small" shape="leaf" :active="false" />
                                            </router-link>   
                                          <router-link to="/" class="">
                                            <BaseItem title="Newspaper" icon="pi pi-chart-line" size="small" shape="leaf"  :active="false" />
                                          </router-link>   
                                          <router-link to="/" class="">
                                            <BaseItem title="Diet" icon="pi pi-chart-line" size="small" shape="leaf"  :active="false" />
                                          </router-link>   
                                          <transition name="fade">
                                            <router-link to="/" class="" v-if="showMore">
                                              <BaseItem title="Symptoms Checker" icon="pi pi-chart-line" size="small" shape="leaf"  :active="false" />
                                            </router-link>   
                                          </transition>
                                          <transition name="fade">
                                            <router-link to="/" class="" v-if="showMore">
                                              <BaseItem title="First Aid" icon="pi pi-chart-line" size="small" shape="leaf"  :active="false" />
                                            </router-link>   
                                          </transition>
                                        </div>

                                        <a href="javascript:void(0)" @click="toggleMore" class="text-center shortcuts-more">
                                          <span class="">More</span>
                                          <i class='pi' :class="[showMore?'pi-angle-up':'pi-angle-down']" ></i>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="nav__dropdown">
                                <a href="#" class="nav__link">
                                    <i class='pi pi-cog nav__icon' ></i>
                                    <span class="nav__name">Settings</span>
                                    <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div class="nav__dropdown-collapse">
                                    <div class="nav__dropdown-content">
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Language
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Privacy Center
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Security & Password
                                        </router-link>   
                                        <router-link to="/" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Notifications
                                        </router-link>   
                                    </div>
                                </div>
                            </div>
                              
                            <div class="nav__dropdown">
                                <a href="#" class="nav__link">
                                    <i class='pi pi-search nav__icon' ></i>
                                    <span class="nav__name">Search</span>
                                    <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div class="nav__dropdown-collapse">
                                    <div class="nav__dropdown-content">
                                        <router-link :to="'/search/clinics'" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Clinics
                                        </router-link>   
                                    </div>
                                </div>
                            </div>
                            <div class="nav__dropdown">
                                <a href="#" class="nav__link">
                                    <i class='pi pi-dollar nav__icon' ></i>
                                    <span class="nav__name">Pharmacy</span>
                                    <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                                </a>

                                <div class="nav__dropdown-collapse">
                                    <div class="nav__dropdown-content">
                                        <router-link :to="'/pharmacy/cashpoint'" class="nav__dropdown-item">
                                          <i class="fa fa-user-md" aria-hidden="true"></i> Cash Point
                                        </router-link>   
                                       
                                    </div>
                                </div>
                            </div>
                            <div class="nav__dropdown">
                              <a href="#" class="nav__link">
                                <i class="pi pi-car nav__icon"></i>
                                  <span class="nav__name">Business</span>
                                  <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                              </a>
                              <div class="nav__dropdown-collapse">
                                  <div class="nav__dropdown-content" v-for="(item,index) of business" :key="index*100">
                                    <router-link v-if="item.to" :to="item.to" class="nav__dropdown-item mt-1" data-bs-toggle="slide" tag="a">
                                      <i :class="item.icon" aria-hidden="true"></i><span class="mx-2">{{ item.label }}</span>
                                    </router-link>
                                  </div>
                              </div> 
                            </div>
                            <div class="nav__dropdown">
                              <a href="#" class="nav__link">
                                <i class="pi pi-directions nav__icon"></i>
                                  <span class="nav__name">EMR</span>
                                  <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                              </a>
                              <div class="nav__dropdown-collapse">
                                  <div class="nav__dropdown-content" v-for="(item,index) of mr_list" :key="index*100">
                                    <router-link v-if="item.to" :to="item.to" class="nav__dropdown-item mt-1" data-bs-toggle="slide" tag="a">
                                      <i :class="item.icon" aria-hidden="true"></i><span class="mx-2">{{ item.title }}</span>
                                    </router-link>
                                  </div>
                              </div> 
                            </div>
                            <div class="nav__dropdown">
                              <a href="#" class="nav__link">
                                <i class="fa fa-cogs nav__icon"></i>
                                  <span class="nav__name">ERP</span>
                                  <i class='pi pi-angle-down nav__icon nav__dropdown-icon'></i>
                              </a>
                              <div class="nav__dropdown-collapse">
                                  <div class="nav__dropdown-content" v-for="(item,index) of erp_list" :key="index*100" 
                                  :class="{'is-expanded':filterToExpand.length>0&&item.title==filterToExpand[0].title}">
                                    <router-link v-if="item.to" :to="item.to" class="nav__dropdown-item mt-1" data-bs-toggle="slide" tag="a">
                                      <i :class="item.icon" aria-hidden="true"></i><span class="mx-2">{{ item.title }}</span>
                                    </router-link>
                                  </div>
                              </div> 
                            </div>
                            <router-link :to="'/profile/measurements'" class="">
                                <i class='pi pi-home nav__icon' ></i>
                                <span class="nav__name">Measurement</span>
                              </router-link>
                             
                        </div>
                    </div>
                </div>
      </nav>
    </div>

    <!-- CONTENT -->
    <div class="custom-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<i18n src="@/lang/global/layout/left-side-bar/leftSideBar.json"></i18n>
<script>
import logo from "@/assets/global/logo/BONDS.svg";
import avatar from"@/assets/authentication/user.jpg"
import Base from "@/components/global/utilities/Base.vue";
import  BaseItem  from "@/components/global/UI/base/BaseItem.vue";

export default {
  components:{
    // Base,
    BaseItem
  },
  data() {
    return {
      showMenu: false,
      logo: logo,
      searchText:"Search",
      mr_list:[
        {
          title: "ophthalmic",
          icon: "pi pi-user",
          to: {
            name: "ophthalmic",
          },
          children: [],
        },
        {
          title: "general",
          icon: "pi pi-user",
          to: {
            name: "general",
          },
          children: [],
        },
        {
          title: "pediatric",
          icon: "pi pi-user",
          to: {
            name: "pediatric",
          },
          children: [],
        },
        {
          title: "physiotherapy",
          icon: "pi pi-user",
          to: {
            name: "physiotherapy",
          },
          children: [],
        },
        {
          title: "gynecology-obstetric",
          icon: "pi pi-user",
          to: {
            name: "gynecology",
          },
          children: [],
        },
        {
            title: "dental",
            icon: "fa fa-user",
            to: {
              name: "dental",
            },
            children: [],
          },
      ],
      erp_list:[     
          {
            title: "General Definitions",
            icon: "pi pi-user",
            to: {
              name: "definition",
            },
            children: [],
          },
          {
              title: "Hr",
              icon: "fa fa-user",
              to: {
                name: "hr-definition",
              },
              children: [],
            },
          {
              title: "Items",
              icon: "fa fa-user",
              to: {
                name: "items-definition",
              },
              children: [],
            },
          {
              title: "Profiles",
              icon: "fa fa-user",
              to: {
                name: "profiles-definition",
              },
              children: [],
            },
          {
              title: "Accounts",
              icon: "fa fa-user",
              to: {
                name: "Accounts-definition",
              },
              children: [],
            },
          ],
      businessList:[
        {
          label: `Dr Mohammed's clinic`,
          icon: 'pi pi-user',
          to:'/business',
          avatar: avatar
        },
        {
          label: `Dr Mohammed's clinics`,
          icon: 'pi pi-user',
          to:'/business',
          avatar:''
        },
      ],
      business:[
        {
          label: `Lab`,
          icon: 'pi pi-user',
          to:'/labs/lab',
          avatar: avatar
        },
        {
          label: `Pharmacy Cash Point`,
          icon: 'pi pi-user',
          to:'/pharmacy/cashpoint',
          avatar: avatar
        },
      ],
			items: [
				{
          label: 'Settings',
					icon: 'pi pi-refresh',
          to:'/settings'
				},
				{
          label: 'Help & Support',
					icon: 'pi pi-times',
          to:'/help'
				},
				{
          label: 'Activities',
					icon: 'pi pi-external-link',
          to:'/activities'
				},
			],
      avatar:avatar,
      hasNotifications:false,   
      showMore: false,   
    };
  },
  computed: {
      currentRouteName() {
        return this.$route.name;
      },
      filterToExpand() {
          return this.erp_list.filter((item) => {
            if (item.to.name === this.currentRouteName) {
              return true;
            }
            if (item.children && item.children.length > 0) {
              return item.children.some((child) => {
                if (child.to.name === this.currentRouteName) {
                  return true;
                }
                if (child.children && child.children.length > 0) {
                  return child.children.some((subChild) => {
                    return subChild.to.name === this.currentRouteName;
                  });
                }
                return false;
              });
            }
            return false;
          });
      },
    },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
    toggle(event) {
        this.$refs.user_overlay_menu.toggle(event);
    },
    toggleNotifications(event) {
        this.$refs.notifications_overlay_menu.toggle(event);
    },
    toggleMore() {
      this.showMore = !this.showMore;
    },
    logout(){
      localStorage.clear();
      window.location="auth/signin";
    },
  },
};
</script>

<style lang="scss" scoped>
/*========== GOOGLE FONTS ==========*/
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

// /*========== VARIABLES CSS ==========*/
// :root{
//     --header-height: 3.5rem;
//     --nav-width: 219px;

//     /*========== Colors ==========*/
//     --first-color: #6923D0;
//     --first-color: purple;
//     --first-color-light: #F4F0FA;
//     --title-color: #19181B;
//     --text-color: #58555E;
//     --text-color-light: #A5A1AA;
//     --body-color: #F9F6FD;
//     --container-color: #FFFFFF;

//     /*========== Font and typography ==========*/
//     --body-font: 'Poppins', sans-serif;

//     --normal-font-size: .938rem;
//     --small-font-size: .75rem;
//     --smaller-font-size: .75rem;

//     @media screen and (min-width: 1024px){
//         --normal-font-size: 1rem;
//         --small-font-size: .875rem;
//         --smaller-font-size: .813rem;
//     }

//     /*========== Font weight ==========*/
//     --font-medium: 500;
//     --font-semi-bold: 600;

//     /*========== z index ==========*/
//     --z-fixed: 100;
// }

/*========== BASE ==========*/
*,::before,::after{
    box-sizing: border-box;
}

// body{
//     margin: var(--header-height) 0 0 0;
//     padding: 1rem 1rem 0;
//     font-family: var(--body-font);
//     font-size: var(--normal-font-size);
//     background-color: var(--body-color);
//     color: var(--text-color);
// }
h3{
    margin: 0;  
}

a{
    text-decoration: none;
}
img{
    max-width: 100%;
    height: auto;
}

/*========== HEADER ==========*/
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    // background-color: var(--container-color);
    background-color: #fff;
    box-shadow: 0 1px 0 rgba(22, 8, 43, .1);
    padding: 0 1rem;
    // z-index: var(--z-fixed);
    z-index: 99;
    
    &__container{
        display: flex;
        align-items: center;
        height: var(--header-height);
        justify-content: space-between;
    }

    &__img{
        width: 35px;
        height: 35px;
        border-radius: 50%;
    }
    &__logo{
        color: var(--title-color);
        font-weight: var(--font-medium);
        display: none;
    }
    &__search{
        display: flex;
        
        ////// customization //////
        flex-grow: 1;
        gap:1rem;
        align-items: center;
        justify-content: space-between;    
        .avatar{
          height:3rem;
          cursor:pointer;
          /deep/.p-avatar{
            border: 2px solid #fff;
            box-shadow: 1px 1px 3px $primary, -1px -1px 3px $primary;
          }
        }   
        /deep/.p-overlaypanel{
          min-width:250px;
          .p-overlaypanel-content{
            padding:0;
          }
        }	
        /deep/.base-wrapper{
          margin:0 !important;
        }
        /deep/.p-input-icon-right{
          max-width:320px !important;
        }     
        /deep/.p-overlaypanel-content{
          background-color: $primary-200;
          border-radius: 0 0 2rem 2rem;
          h6{
            background-color: $primary-100;
          }
          .logout{
            border-radius: 0 0 2rem 2rem;
          }

        }
        .user_overlay_menu_item{
          .business-route{
            background-color:$secondary;
            color:#fff;
            border-radius:1rem;
            /deep/.p-avatar{
              border: 2px solid #fff;
              box-shadow: 1px 1px 3px $primary, -1px -1px 3px $primary;
            }
            &:hover {
              color:$primary !important;
              a{
                color:$primary !important;
              }
            }
          }
        }
        .business-more{
          color: $primary;
        }
        a{
          &:hover{
            color: $primary; 
          }
        }
        .custom-badge{
          /deep/.p-badge.p-badge-dot{
            min-width:7px!important;
            width:7px!important;
            height:7px!important;
            border-radius:50% !important;
            box-shadow: 1px 1px 5px $primary, -1px -1px 5px $primary;
          }
        }
        .notify-wrapper {
          i{
            cursor: pointer;
          }
        }
        ////////////
        
        padding: .40rem .75rem;
        background-color: var(--first-color-light);
        border-radius: .25rem;
    }
    &__input{
        width: 100%;
        border: none;
        outline: none;
        background-color: var(--first-color-light);

        &::placeholder{
            font-family: var(--body-font);
            color: var(--text-color);
        }
    }
    &__icon,
    &__toggle{
      i{
        font-size: 1.2rem;
      }
    }
    &__toggle{
        color: var(--title-color);
        cursor: pointer;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/*========== NAV ==========*/
.nav{
    position: fixed;
    top: 0;
    left: -100%;
    height: 100vh;
    padding: 1rem 0.5rem;
    background-color:$primary-100;
    // background-color: #fff;
    box-shadow: 1px 0 0 rgba(22, 8, 43, .1);
    // z-index: var(--z-fixed);
    z-index: 99;
    transition: 1s ease-in-out;

    &__container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 3rem;
        overflow: auto;
        scrollbar-width: none; /* For mozilla */

        /* For Google Chrome and others */
        &::-webkit-scrollbar {
            display: none;
        }
    }


    &__logo{
        font-weight: var(--font-semi-bold);
        margin-bottom: 2.5rem;
    }

    &__list, 
    &__items{
        display: grid;
    }
    &__list{
        row-gap: 2.5rem;
    }
    &__items{
        row-gap: 1.5rem;
    }
    &__subtitle{
        font-size: var(--normal-font-size);
        text-transform: uppercase;
        letter-spacing: .1rem;
        color: var(--text-color-light);
    }
    &__link{
        display: flex;
        align-items: center;
        font-weight: bold;
        color: $secondary;
        &:hover{
            color: $primary;
        }
    }
    &__icon{
        font-size: 1.2rem;
        margin-right: .5rem;
    }
    &__name{
        font-size: var(--small-font-size);
        font-weight: var(--font-medium);
        white-space: nowrap;
    }
    &__logout{
        margin-top: 5rem;
    }

    /* Dropdown */
    &__dropdown{
        overflow: hidden;
        max-height: 21px;
        transition: 2s ease-in-out;
        &-collapse{
            background-color: var(--first-color-light);
            border-radius: .25rem;
            margin-top: 1rem;
        }
        &-content{
            display: grid;
            row-gap: .5rem;
            // padding: .75rem 2.5rem .75rem 1.8rem;
            .shortcuts{
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
              a{
                display: grid;
              }
            }
            .shortcuts-more{
              color: $primary;
            }
        }

        &-item{
            // font-size: var(--smaller-font-size);
            // font-weight: var(--font-medium);
            background-color: #fff;
            padding: 0.25rem 0.5rem;
            border-radius: 2rem;
            color: $secondary;
            font-weight: bold;            
            .pi{
              color: $secondary !important;
            }
            
            &:hover{
              color:#fff;
              background:$success-gradient;
              .pi{
                color:#fff !important;
              }
              // color: var(--first-color);
            }
          }
          & .router-link-exact-active{
          color:#fff !important;
          background:$success-gradient;
          .pi{
            color:#fff !important;
          }
        }
        &-icon{
            margin-left: auto;
            transition: .6s;
        }

        /* Show collapse */
        &:hover{
            max-height: 100rem;
        }

        /*Rotate icon arrow*/
        &:hover  &-icon{
            transform: rotate(180deg);
        }
    }
}



/*===== Active link =====*/
.active{
    color: var(--first-color);
}









//////////////////////customization/////////
.custom-content{
  margin-top: 1rem;
  min-height:100vh;
  height: 100%;
  padding:1rem;
  padding-top:3rem;
  // margin-left:5rem;
}
//////////////////////customization/////////




@media screen and (min-width: 768px){
    // body{
    //     padding: 1rem 3rem 0 6rem;
    // }

    .header{
        // padding: 0 3rem 0 6rem;
        padding: 0 0.5rem 0 5rem;

        &__container{
            height: 4rem;
        }
        &__search{
            // width: 300px;
            padding: .55rem .75rem;
        }
        &__toggle{
            // display: none;
        }
        &__logo{
            display: block;
        }
        &__img{
            width: 40px;
            height: 40px;
            order: 1;
        }
    }

    .nav{
        left: 0;
        padding: 1.2rem 1.5rem 0;
        width: 68px;
        
        &__items{
            row-gap: 1.7rem;
        }

        &__icon{
            font-size: 1.3rem;
        }

        &__logo-name,
        &__name,
        &__subtitle,
        &__dropdown-icon{
            opacity: 0;
            transition: .6s;
        }
        transition: 1s ease-in-out;
        &:hover{
          //  width: var(--nav-width);
           width: 260px;
        }

        &:hover &__logo-name{
            opacity: 1;
        }
        &:hover &__subtitle{
            opacity: 1;
        }
        &:hover &__name{
            opacity: 1;
        }
        &:hover &__dropdown-icon{
            opacity: 1;
        }
    }
    .custom-content{
      margin-left:5rem;
      // margin-right:1rem;
    }
    /*===== Show menu =====*/
}

/*===== Show menu =====*/
.show-menu{
        left: 0 !important;
        width: 260px !important;
        .nav__logo-name,
        .nav__name,
        .nav__subtitle,
        .nav__dropdown-icon{
            opacity: 1 !important;
        }
    }
</style>
