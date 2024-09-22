<template>
  <div class="specialty">
    <h2 class="my-4">{{ $t('head') }}</h2>
    <div class="heading d-flex justify-content-between flex-wrap my-3">
      <div class="my-1">
        <span :class="[locale === 'ar' ? 'p-input-icon-left': 'p-input-icon-right']">
          <i class="pi pi-search"></i>
          <InputText type="text" v-model="searchTxt" :placeholder="$t('searchPlaceholder')" />
        </span>
      </div>
      <div class="next my-1">
        <button class="btn btn-success-gradient btn-pill" @click="goNext">{{ $t('btnLabel') }}</button>
      </div>
    </div>
    <div class="specialties p-2">
      <transition name="fade" mode="out-in">
        <div v-if="activateTransition" class="row">
          <div class="col-md-6 col-xl-3 my-2" v-for="(specialty, index) in filteredSpecialties" :key="index" >
            <Base :class="[{'active':selectedId==specialty.speciality__id || selectedIds.includes(specialty.speciality__id)},'cursor-pointer']" @click="selectSpecialty(specialty)">            
              <div class="specialty text-center">
                <h6 class="">{{specialty.name}}</h6>
                <div class="icon-wrapper">
                  <img v-if="specialty.icon" :src="specialty.icon" alt="icon">
                  <img v-else  src="@/assets/icons/business/categories/company.svg" alt="icon">
                </div>
              </div>
            </Base>
          </div>
        </div>
      </transition>
      <div v-if="!filteredSpecialties.length">
        <NoResults :message="$t('noResultMsg')"></NoResults>
      </div>
    </div>
  </div>
</template>
<i18n src="@/lang/business/specialty.json"></i18n>
<script>
import {cloneDeep} from 'lodash';
import Base from "@/components/global/utilities/Base.vue"
import NoResults from "@/components/global/utilities/NoResults.vue"
import { mapGetters,mapActions } from "vuex";

export default {
  props:{
    value:{
      required:true,
    },
    multiple:{
      type:Boolean,
      default:true,
    },
    options:{
      type:Array,
      default(){
        return []
      },
    },
  },
  components: {
    Base,
    NoResults
  },
  data() {
    return {
      searchTxt: "",
      activateTransition: true,
      ////////// single selected ///////
      // selectedId:this.multiple?null:this.value,
      selectedId:this.multiple? null:this.value,
      ////////// multiple selected ///////
      selectedIds:this.multiple? []:[],  
    };
  },
  computed: {
    ...mapGetters('business/register', {
      getForm: 'getForm',
    }),
    form: {
      get() {
          return this.getForm;
      },
      set(value) {
          this.setForm(value);
      }
    },
    filteredSpecialties() {
      let filteredSpecialties = [];
        if (!this.searchTxt) {
        filteredSpecialties = [...this.options];
        } else {
        filteredSpecialties = this.options.filter((el) => {
          return (
            el.name.toLowerCase().includes(this.searchTxt.toLowerCase()) ||
            el.name.includes(this.searchTxt)
          );
        });
          
        }
        return filteredSpecialties;
      
    },
  },
  watch: {
    searchTxt() {
      this.activateTransition = false;
      setTimeout(() => {
        this.activateTransition = true;
      }, 200);
    },
  },
  methods: {
    selectSpecialty(specialty){
      ////////// multiple selected ///////
      if(this.multiple) {
        const index = this.selectedIds.indexOf(specialty.speciality__id);
        if (index < 0) {
          this.selectedIds.push(specialty.speciality__id);
          this.$emit('input',cloneDeep(this.selectedIds));
        } else {
          this.selectedIds.splice(index, 1);
          this.$emit('input',cloneDeep(this.selectedIds));
        }
      }
      ////////// single selected ///////
      else {
        const id = specialty.speciality__id;
        if(this.selectedId === id) {
          this.selectedId = null;
          this.$emit('input',cloneDeep(this.selectedId));
        }
        else {
          this.selectedId = specialty.speciality__id;
          this.$emit('input',cloneDeep(this.selectedId));
        }
      }
    },
    goNext() {
      this.$emit('next');
    },
  },
};
</script>
<style lang="scss" scoped>
.specialty {
  width: 100%;

  .specialties {
    min-height: 50vh;
    max-height: 50vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .cursor-pointer{
    cursor: pointer;
  }
  .active{
    outline: 3px solid $primary;
  }
}

// fade transition
.fade-enter-active,.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,.fade-leave-to
/* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}

@media (max-width: 768px) {
  .specialty {
    .specialties {
      min-height: 30vh;
      max-height: 30vh;
    }
  }
}

</style>