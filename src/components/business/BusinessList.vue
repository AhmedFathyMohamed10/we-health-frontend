<template>
  <div v-if="!isLoading&&serverResponse">
    <div v-if="businessList.length>0">
      <h4 class="text-center">{{$t('list.header')}}</h4>
      <div class="business d-flex justify-content-center gap-4 flex-wrap">
        <div v-for="business in businessList" :key="business.name" class="text-center card p-4">
          <h6>Type : {{business.type__name}}</h6>
          <h6>Name : {{business.name}}</h6>
          <button class="btn btn-info-gradient btn-pill" @click="newBranch(business.id)">{{ $t('list.btn') }}</button>
        </div>
      </div>
      <Divider :label="'Or'"></Divider>
    </div>
    <h4 class="text-center">{{ $t('new.header') }}</h4>
    <div class="next text-center p-4">
      <div>
        <button class="btn btn-success-gradient btn-pill" @click="goNext">{{ $t('new.btn') }}</button>
      </div>
    </div>
  </div>
</template>
<i18n lang="json5">
  {
    "en":{
      "list":{
        "header":"Your Business List",
        "btn":"New Branch"
      },
      "new":{
        "header":"Create New Business",
        "btn":"New Business"
      }
    },
    "ar":{
      "list":{
        "header":"قائمة الأعمال الخاصة بك" ,
        "btn":"فرع جديد"
      },
      "new":{
        "header":"إنشاء عمل جديد",
        "btn":"عمل جديد"
      }
    }
  }
</i18n>
<script>
import { mapGetters,mapActions } from "vuex";
import Divider from "@/components/global/utilities/Divider.vue"
export default {
  name: 'BusinessList',
  components:{
    Divider
  },
  data() {
    return {
      
    };
  },
  computed:{
    ...mapGetters('business/list', {
        isLoading: 'getServerLoading',
        serverResponse: 'getServerResponse',
        serverError: 'getServerError',
      }),
      ...mapGetters('business/register', {
        getForm: 'getForm',
      }),
      businessList(){
        if(this.serverResponse){
          return this.serverResponse["data"]["data"];
        }
        else {
          return [];
        }
      },
      form: {
				get() {
						return this.getForm;
				},
				set(value) {
						this.setForm(value);
				}
			},
  },
  created() {
    if(!this.businessList.length > 0) {
        this.fetchBusinessList();
    }
  },

  methods: {
      //////////////////////////////
			...mapActions('business/register',{
        setForm:'setForm',
      }),
      //////////////////////////////
    async fetchBusinessList() {
        await this.$store.dispatch('business/list/businessList');
    },
    goNext() {
      this.$router.push({name: "category"});
    },
    newBranch(id) {
      this.form.dashboard = id
      this.$router.push({name: "category"});
    },
  },
};
</script>

<style lang="scss" scoped>
.business{
  .card{
    max-width: fit-content;
  }
}
</style>