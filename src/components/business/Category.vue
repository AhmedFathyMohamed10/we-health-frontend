<template>
    <div class="choose-category" v-if="!isLoading&&serverResponse">
        <div class="heading">
            <h2 class="my-2 mt-4">{{$t('head')}}</h2>
            <p class="my-3">{{$t('txt')}}</p>
        </div>
        <div class="not-found" v-if="notFound">
          <Message severity="error"  :closable="false">
              <span>{{ form.categoryName }} : </span>
              <span >{{$t("componentFuture")}}</span>
          </Message>
        </div>
        <div class="categories p-2">
            <div class="row">
                <div class="col-md-6 col-xl-4 my-2" v-for="(category,index) in categories" :key="index">
                  <Base>  
                    <div class="category">
                        <h4>{{category.name}}</h4>
                        <div class="icon-wrapper my-3">
                            <img v-if="category.icon"  :src="category.icon" alt="icon">
                            <img v-else  src="@/assets/icons/business/categories/company.svg" alt="icon">
                        </div>
                        <button class="btn btn-success-gradient btn-pill" @click.prevent="goNext(category)">{{$t('btnLabel')}}</button>
                      </div>               
                  </Base>
                </div>
            </div>
        </div>
    </div>
</template>
<i18n src="@/lang/business/category.json"></i18n>
<script>
import Base from "@/components/global/utilities/Base.vue" 
import { mapGetters,mapActions } from "vuex";
export default {
    components:{
      Base
    },
    data(){
        return{
          notFound:false,
        }
    },
    created() {
      this.resetForm();
      // this.form.multipleChoice = false;
      if(!this.categories.length > 0) {
        this.fetchCategoryList();
      }
    },
    computed:{
      ...mapGetters('business/categories', {
        isLoading: 'getServerLoading',
        serverResponse: 'getServerResponse',
        serverError: 'getServerError',
      }),
      ...mapGetters('business/specialties', {
        isLoadingSpeciality: 'getServerLoading',
        serverResponseSpeciality: 'getServerResponse',
        serverErrorSpeciality: 'getServerError',
      }),
      categories(){
          let options = []
          if(this.serverResponse){
            options = this.serverResponse["data"]["categories"]
            return options;
          }
          else {
            return options;
          }
        },
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
    },
    watch:{
      'form.categoryKey':{
        deep:true,
        handler(newValue, oldValue){
            this.form.categoryKey = newValue;
            if(newValue === "Clinic"){
              // this.form.specialityChoice = true;  
            }
            else if(newValue === "Hospital" || newValue === "Center" ){
              this.form.multipleChoice = true;
            }
            else if(newValue === "Pharmacy" || newValue === "Laboratory" || newValue === "Nurse" ){
                this.form.multipleChoice = false;
                this.form.speciality = null;
            }
            else if(newValue === ""){
              this.$router.push({name:"category"});
            }
            // else this.$router.push({name:"category"});
        }
      },
      'form.multipleChoice': {
        deep:true,
        handler(newValue,oldValue){                                                                                                                                                    
        this.form.multipleChoice = newValue;
        }
       },
       notFound(newValue){
        if(newValue){
          this.notFound = newValue;
        }
     },
    },
    methods:{
      ...mapActions('business/register', {
      setSpecialtyList: 'setSpecialtyList',
     }),
      async fetchCategoryList() {
        await this.$store.dispatch('business/categories/categoryList');
      },
      specialties(){
        if(this.serverResponseSpeciality){
          if(this.serverResponseSpeciality["data"]["specialities"]){
            return this.serverResponseSpeciality["data"]["specialities"];
          } 
        }
        else {
          return [];
        }
     },
      isSpecialtiesList() {
        const specialties = this.specialties();
        if(specialties.length > 0 && this.form.categoryKey != "") {
              this.$router.push({name:"specialty"});                    
              return this.form.displaySpecialty = true;
          }
        else if(this.form.categoryKey != ""){
            this.$router.push({name:"register"});   
            return this.form.displaySpecialty = false;
        }
        else  this.$router.push({name:"category"}); 
      },
			...mapActions('business/register',{
        setForm:'setForm',
      }),
      async fetchSpecialtyList() {
        await this.$store.dispatch('business/specialties/specialtyList',{id: this.form.category});
        this.isSpecialtiesList();     
      },
      /////////////////////
      resetForm(){
        this.$store.dispatch('business/register/resetForm');
      },
      //////////////////////////////
      // async goNext(category){
      //     this.form.category = category.category__id;
      //     this.form.categoryKey = category.category__key;
      //     this.form.categoryName = category.name;
      //   if(category.category__id === 7 || category.category__id === 9 || category.category__id === 6 || category.category__id === 5){
      //       this.notFound = true;
      //   }
      //   else if(this.form.categoryKey === "Hospital" || this.form.categoryKey === "Hospital") {
      //     this.notFound = false;
      //     this.form.multipleChoice = true ;
      //     await this.fetchSpecialtyList();
      //   }
      //   else await this.fetchSpecialtyList();
        
      // },
      ////////////////////////////
      async goNext(category) {
        this.form.category = category.category__id;
        this.form.categoryKey = category.category__key;
        this.form.categoryName = category.name;
      
          if ([1, 2, 3, 4, 10, 8].includes(category.category__id)){
            if([4,10].includes(category.category__id)){
              this.form.multipleChoice = true;
            }
            // else if([1].includes(category.category__id)){
            //   // this.form.specialityChoice = true;
            // }
            this.notFound = false; 
           await this.fetchSpecialtyList();

          }
         else  if ([5, 6, 7, 9].includes(category.category__id)){
            this.notFound = true; 
          }
        }
  }
}
</script>
<style lang="scss" scoped>
.choose-category{
    .categories{
       // max-height:50vh;
        overflow-y: auto;
        overflow-x:hidden;
        .category{
            text-align: center;
            // box-shadow:$shadow-1;
            border-radius: 34px;
            padding:10px;
        }
    }
}
// @media (max-width:768px){
//     .choose-category{
//         .categories{
//             max-height:30vh;
//         }
//     }
    
// }
</style>