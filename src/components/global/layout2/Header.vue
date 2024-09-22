<template>
  <header class="custom-header d-flex align-items-center justify-content-between flex-wrap-reverse">
        <div class="search-box d-flex align-items-center gap-2 my-2">
          <span class="p-input-icon-right">
              <i class="pi pi-search" />
              <InputText type="text" v-model="searchText" placeholder="Search" />
          </span>
          <Dropdown v-model="selectedOption" :options="options" optionLabel="name" placeholder="Sections" />
        </div>
        <div class="user-actions flex-1 d-flex align-items-center justify-content-center gap-4">
          <div class="night-mode">
            <span><i class="pi pi-moon text-success fs-5"></i></span>
          </div>
          <div class="full-screen">
            <span><i class="pi pi-th-large text-success fs-5"></i></span>
          </div>
          <div class="notify">
            <span><i class="pi pi-bell text-success fs-5"></i></span>
          </div>
          <div class="message">
            <span><i class="pi pi-comment text-success fs-5"></i></span>
          </div>
          <div class="message">
            <span @click="toggle"><Avatar :image="avatar" size="large" shape="circle"  /></span>
            <OverlayPanel ref="userOp">
              <ul>
                <li>option</li>
              </ul>
            </OverlayPanel>
          </div>
        </div>
  </header>
</template>

<script>
import logo from "@/assets/global/logo/Logo.svg"
import avatar from"@/assets/authentication/user.jpg"

export default {
  name: 'Header',

  data() {
    return {
      logo: logo,
      searchText:"Search",
      selectedOption: null,
      options: [],
      avatar:avatar
    };
  },

  mounted() {
    
  },

  methods: {
    toggle(event) {
      console.log("test test method");
        this.$refs.userOp.toggle(event);
    }
  },
};
</script>

<style lang="scss" scoped>
.custom-header{
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 4rem;
  padding-left: 5rem;
  background-color: #fff;
  /deep/.p-avatar{
    border: 2px solid #fff;
    box-shadow: 1px 1px 3px $primary, -1px -1px 3px $primary;
  }
}
</style>