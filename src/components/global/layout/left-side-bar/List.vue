<template>
    <ul class="side-menu">
      <div  v-for="(item,index) of items" :key="index*100" >        
        <li class="slide" :class="modifyStyleMiniSidebar()" @click="removeFocusingStyle(item)">

          <router-link v-if="item.to" :to="item.to" class="side-menu__item has-link" data-bs-toggle="slide" tag="a">
            <i class="side-menu__icon item-icon fa-solid" :class="item.icon"></i>
            <span class="side-menu__label" v-if="sidebarStatus == 1">{{ item.title }}</span>
            <span v-if="sidebarStatus == 0 && item.stitle" class="res-side-menu-title"><br>{{ item.stitle }}</span>
            <span v-if="sidebarStatus == 0 && !item.stitle" class="res-side-menu-title"><br>{{ item.title }}</span>
          </router-link>

          <!-- <a class="side-menu__item has-link" data-bs-toggle="slide" href="index.html" v-if="item.to">
            <i class="side-menu__icon fe fe-home"></i><span class="side-menu__label">{{ item.title }}</span>
          </a> -->

          <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)" v-if="!item.to" :class="getClass()">
            <i class="side-menu__icon item-icon fa-solid" :class="item.icon"></i>
            <span class="side-menu__label" v-if="sidebarStatus == 1">{{ item.title }}</span>
            <span v-if="sidebarStatus == 0 && item.stitle" class="res-side-menu-title"><br>{{ item.stitle }}</span>
            <span v-if="sidebarStatus == 0 && !item.stitle" class="res-side-menu-title"><br>{{ item.title }}</span>
            <i v-if="item.arrow != false" class="angle fe fe-chevron-right"></i>
          </a>
          
          <ul class="slide-menu" v-if="!item.to && item.arrow != false" :class="changeMLeft()">
              <li class="side-menu-label1"><a href="javascript:void(0)">{{ item.title }}</a></li>

              <li v-for="(item2,index2) of item.children" class=" sub-slide" :class="changeSubSlideStyle()" :key="index2*200">

                <router-link v-if="item2.to" :to="item2.to" class="slide-item sub-side-menu__item" tag="a">
                  <i class="side-menu__icon item-icon-2 fa-solid" :class="item2.icon"></i>
                  <span class="mx-1 sub-side-menu__label" v-if="sidebarStatus == 0 && item2.stitle">{{ item2.stitle }}</span>
                  <span class="mx-1 sub-side-menu__label" v-if="sidebarStatus == 0 && !item2.stitle">{{ item2.title }}</span>
                  <span class="mx-1 sub-side-menu__label" v-if="sidebarStatus == 1">{{ item2.title }}</span>
                </router-link>
                
                <!-- <a href="javascript:void(0)" class="slide-item" v-if="item2.to">{{ item2.title }}</a> -->
                
                <a class="sub-side-menu__item" data-bs-toggle="sub-slide" href="javascript:void(0)" v-if="!item2.to">
                  <i class="side-menu__icon item-icon-2 fa-solid" :class="item2.icon"></i>
                  <span v-if="sidebarStatus == 0 && item2.stitle" class="sub-side-menu__label mx-1">{{ item2.stitle }}</span>
                  <span v-else class="sub-side-menu__label mx-1">{{ item2.title }}</span>
                  <span class="badge-fs-custom badge bg-danger-gradient header-badge rounded" v-if="item2.title == 'Messages'">4</span>
                </a>
              </li>
          </ul>
        </li>
        <li class="mx-4 my-2" v-if="item.title == 'Erp' && sidebarStatus == 1">
            <div class="text-center my-2">
              <hr class="modify-hr">
              <span class="fw-custom">Shortcuts<i class="fa-solid fa-ellipsis-vertical"></i></span>
              <hr class="modify-hr">
            </div>
            <div class="row">
              <div class="col-md-6">
                <router-link to="/profile/measurements">
                  <div class="custom-component">
                    <div class="text-end p-1">
                      <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                      <div class="text-center">
                        <i class="fa-solid fa-chart-line fs-icon-modify"></i><br>
                        <span class="fs-smaller-custom">Measurements</span>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
              <div class="col-md-6">
                <div class="custom-component">
                  <div class="text-end p-1">
                    <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                    <div class="text-center">
                      <i class="fa-solid fa-dumbbell fs-icon-modify"></i><br>
                      <span class="fs-smaller-custom">Fitness</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <div class="custom-component">
                  <div class="text-end p-1">
                    <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                    <div class="text-center">
                      <i class="fa-solid fa-newspaper fs-icon-modify"></i><br>
                      <span class="fs-smaller-custom">Newspaper</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="custom-component">
                  <div class="text-end p-1">
                    <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                    <div class="text-center">
                      <i class="fa-solid fa-utensils fs-icon-modify"></i><br>
                      <span class="fs-smaller-custom">Diet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <div class="custom-component">
                  <div class="text-end p-1">
                    <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                    <div class="text-center">
                      <i class="fa-solid fa-bridge-circle-check fs-icon-modify"></i><br>
                      <span class="fs-smaller-custom">Symp. Checker</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="custom-component">
                  <div class="text-end p-1">
                    <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                    <div class="text-center">
                      <i class="fa-solid fa-briefcase-medical fs-icon-modify"></i><br>
                      <span class="fs-smaller-custom">First Aid</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="toggleShortcuts">
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="custom-component">
                    <div class="text-end p-1">
                      <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                      <div class="text-center">
                        <i class="fa-solid fa-newspaper fs-icon-modify"></i><br>
                        <span class="fs-smaller-custom">Newspaper</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="custom-component">
                    <div class="text-end p-1">
                      <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                      <div class="text-center">
                        <i class="fa-solid fa-utensils fs-icon-modify"></i><br>
                        <span class="fs-smaller-custom">Diet</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-md-6">
                  <div class="custom-component">
                    <div class="text-end p-1">
                      <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                      <div class="text-center">
                        <i class="fa-solid fa-bridge-circle-check fs-icon-modify"></i><br>
                        <span class="fs-smaller-custom">Symp. Checker</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="custom-component">
                    <div class="text-end p-1">
                      <img data-v-2b476c73="" src="@/assets/global/utilities/drag-handle-corner-line.svg" alt="drag-handle-corner-line">
                      <div class="text-center">
                        <i class="fa-solid fa-briefcase-medical fs-icon-modify"></i><br>
                        <span class="fs-smaller-custom">First Aid</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </li>
        <li class="slide" v-if="item.title == 'Erp'  && sidebarStatus == 1">
          <a class="side-menu__item" data-bs-toggle="slide" href="javascript:void(0)" @click="toggleShortcutsAction()">
            <span class="side-menu__label text-center">More<i class="side-menu__icon item-icon fa-solid" :class="changeAngleIcon()"></i></span>
          </a>
        </li>
      </div>
    </ul>


</template>

<script>
import Divider from "@/components/global/utilities/Divider.vue"

export default {
  name: 'List',
  props:{
    items:{
      required:true,
    },
    sidebarStatus: {
        type: Number,
        required: true,
        default: 0,
    },
  },
  components:{
    // Divider
  },
  data() {
    return {
      toggleShortcuts: 0,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    filterToExpand() {
        return this.items.filter((item) => {
          console.log("item" ,item.children)
          if (item.to.name === this.currentRouteName) {
            return true;
          }
          if (item.children && item.children.length > 0) {
            console.log("item" ,item.children)
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
  methods:{
      toggleShortcutsAction() {
        this.toggleShortcuts = !this.toggleShortcuts
        return this.toggleShortcuts
      },
      changeAngleIcon() {
        if (this.toggleShortcuts) {
          return "fa-angle-up"
        }
        else {
          return "fa-angle-down"
        }
      },
      getClass(){
        if (this.sidebarStatus == 0){
          return 'centerSidebarContent'
        }
      },
      changeMLeft() {
        if (this.sidebarStatus == 0){
          return 'changeMLeft'
        }
      },
      changeSubSlideStyle (){
        if (this.sidebarStatus == 0){
          return 'changeSubSlideStyle'
        }
      },
      changeMarginIfCollapse (){
        
      },
      modifyStyleMiniSidebar (){
        if (this.sidebarStatus == 0){
          return 'mb-1'
        }
        // if (item.shortcut){
        //   let ele_var = document.getElementsByClassName('slide'); 
        //   if (document.getElementsByClassName('is-expanded').length > 0) {
        //     ele_var.classList.remove('is-expanded');  
        //   }
        // }
      },
      removeFocusingStyle(item) {
        if (item.shortcut){
          if (document.getElementsByClassName('is-expanded').length > 0){
            $('.slide').removeClass("is-expanded")
          }
        }

      }
      
  }
};
</script>

<style lang="scss" scoped>
.fs-smaller-custom {
  font-size: smaller;
}
.fs-icon-modify{
  font-size: large;
}
.changeMLeft {
  left: 120px !important;
}
.changeSubSlideStyle {
  padding: unset !important;
  margin: 0px 10px 4px !important;
}
.custom-component{
  border-bottom-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  text-align: center;
  font-weight: 500;
  background-color: white;
  box-shadow: 1px 1px 4px #56C596;
}
.fw-custom {
  font-weight: 500;
}
.modify-hr{
  background: linear-gradient(
            to right,
            transparent,
            #56c596,
            transparent
          ) !important; 
  height: 2px !important;
  margin: 7px !important;
}
.fa-ellipsis-vertical{
  float: right !important;
}
.sub-slide:hover {
  background: linear-gradient(180deg, #56C596 0%, #2B634B 100%) !important;
  .sub-side-menu__label, .side-menu__icon.item-icon-2, .side-menu__icon {
    color: white !important;
  }

}
.custom-component:hover {
  background: linear-gradient(180deg, #56C596 0%, #2B634B 100%) !important;
  .fs-icon-modify, .fs-smaller-custom {
    color: white;
  }
}
.side-menu{
  li{
    a{
      color: $secondary;
      font-weight: 500;
      &[data-bs-toggle="slide"]{
        font-size: 1rem;
        i{
          color: $secondary !important;
        }
      }
      &::before{
        content: "" !important;
        margin-right: 0 !important;
      }
      &:hover{
        .item-icon,.item-icon-2,.item-icon-3,.item-icon-4{
          color: $success ;
        }
      }
    }
  }
  .item-icon,.item-icon-2,.item-icon-3,.item-icon-4{
    color: $secondary;
  }
  .item-icon-3,.item-icon-4{
    font-size:1rem;
  }
}


.hover-submenu .sub-side-menu__item {
  align-items: center;
}

.centerSidebarContent {
  margin: unset !important;
}
.badge-fs-custom {
  font-size: 13px;
}
</style>