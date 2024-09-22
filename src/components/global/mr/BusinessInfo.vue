<!-- <template>
  <div class="business-info text-center mt-5">
    <img src="@/assets/global/ui/static/business.svg" alt="business info" class="" />
  </div>
</template>
<style lang="scss" scoped>
.business-info{
  img{ }
}
</style> -->
<template>
  <div class="business-info">
    <Base>
      <div class="d-flex justify-content-between flex-wrap">
        <div class="d-flex align-items-center gap-2">
          <Avatar image="/assets/images/users/1.jpg" size="large" shape="circle"  />
          <h4 class="mb-0">{{business.name}}, <span class="primary-color">{{$route.name}} {{business.spec}}</span></h4>
        </div>
        <div class="d-flex gap-2">
          <div class="d-flex align-items-center gap-2">
            <span class="form-label">Branch: </span>
            <span class="form-label primary-color">{{ business.branch.name }}</span>
          </div>
        </div>
      </div>
    </Base>
    <Base>
      <div class="d-flex justify-content-between">
        <div>
          <div class="d-flex align-items-center gap-2">
            <label for="" class="form-label">Case Name</label>
            <span class="custom-avatar">
              <Avatar image="/assets/images/users/1.jpg" shape="circle" />
            </span>
            <input type="text" class="form-control custom-input" placeholder="case name" v-model="patients.current.name">
            <Dropdown v-model="selectedOption" :options="options" optionLabel="name" optionValue="id" placeholder="Visit Type" />
            <div>
              <Button icon="pi pi-plus" />
            </div>
          </div>
          
        </div>
      <div  class="d-flex justify-content-end align-items-center gap-2">
            
            <div>
              <Button class="bg-secondary-gradient" label="Next" />
            </div>
            <div>
              <Button label="List" />
            </div>
          </div>
      </div>
    </Base>
    <Base>
      <div class="d-flex justify-content-between flex-wrap">
        <div class="d-flex align-items-center gap-2">
          <div>
              <Button class="bg-secondary-gradient" label="Start" icon="pi pi-stopwatch" />
          </div>
          <div class="timer">
            <span class="time-digit">0</span>
            <span class="time-digit">0</span>
            <span class="time-label">MIN</span>
            <span class="time-digit">0</span>
            <span class="time-digit">0</span>
            <span class="time-label">SEC</span>
          </div>
          <div>
            <InputSwitch v-model="checked" />
            <span class="mx-1"><i class="pi pi-volume-up fs-2 fw-bold text-success-gradient"></i> </span>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <div>
              <Button class="bg-success-gradient" label="Case/Clinic" icon="pi pi-book" />
          </div>
          <div>
              <Button class="bg-warning-gradient" label="Insurance" icon="pi pi-book" />
          </div>
          <div>
              <Button class="bg-info-gradient" label="History" icon="pi pi-book" />
          </div>
          <div>
              <Button class="bg-danger-gradient" label="Allergens" icon="pi pi-book" />
          </div>
        </div>
      </div>
    </Base>
  </div>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue"

export default {
  components:{
    Base,
  },
  data(){
    return{
      business:{
        name:"Dr Lorem",
        spec: "Clinic",
        branch:{
          name:"Egypt - Office 1",
          number:"3"
        }
      },
      patients:{
        current:{
          name:"CASE NAME",
          age:"Age",
        },
        next:{
          name:"CASE NAME",
          age:"Age",
        },
        wait:"12"
      },
      selectedOption:1,
      options: [
          {name: 'Examination',id:1}
      ],
      checked:true

    }
  },
}
</script>
<style lang="scss" scoped>
.business-info{
  .form-label{
    min-width: fit-content;
  }
  .timer{
    .time-digit{
      color: $primary;
      border-radius: 12px;
      padding: 8px 12px;
      background-color: #fff;
      border: 1px solid #56c59657;
    }
    .time-label{
      font-weight: bold;
      border-bottom: 1px solid $primary;
      margin: 2px;
    }
  }
  /deep/.p-avatar{
    border: 2px solid #fff;
    box-shadow: 1px 1px 3px $primary, -1px -1px 3px $primary;
  }
  .custom-avatar{
    position: relative;
    left: 44px;
    top: 3px;
    .p-avatar{
      border: none !important;
      box-shadow:none !important;
    }
  }
  .custom-input{
    padding-left: 40px !important;
  }
  .primary-color {
    color: $primary;
  }
  .p-button {
    border: unset !important;
  }
}
</style>