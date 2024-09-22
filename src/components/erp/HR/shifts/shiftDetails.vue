<template>
  <Page>
      <Dialog
    :header="$t('dialog.header.details')"
    :visible.sync="displayDetailsModal"
    :closable="false" 
    :containerStyle="{'min-width': '50vw'}"
  >
    <div class="row">
      <div class="col-md-12">
        <div class="table-responsive">
          <table class="table table-borderless text-nowrap mb-0">
            <tbody>
              
              <tr v-for="(value, key) in shiftDetail" :key="key">
                <td v-if="(key != 'id') " class="text-start">{{$t(`shift.${key}.label`)}}</td>
                <td v-if="(key != 'id') && (key != 'days') &&(key != 'startHour')  &&(key != 'endHour')  " class="text-end">
                  <span class="fw-bold  ms-auto">
                    {{value}}
                    
                </span>
                  <!-- <span class="fw-bold ms-auto"
                    >{{ value }}</span
                  > -->
                </td>
                <td v-if="(key != 'id') && (key == 'days')" class="text-end">
                  <span v-for=" (day,index) in value" :key="index" class="fw-bold  ms-auto">
                    {{$t(day)}}
                    
                </span>
                  <!-- <span class="fw-bold ms-auto"
                    >{{ value }}</span
                  > -->
                </td>
                <td v-if="((key != 'id'))&&((key == 'startHour') ||(key == 'endHour'))" class="text-end">
                  <span>
                    {{convertDate(value)}}
                    
                </span>
                  <!-- <span class="fw-bold ms-auto"
                    >{{ value }}</span
                  >-->
                </td> 
               
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <template  #footer>
      <button
        class="btn btn-pill btn-secondary-gradient "
        @click.prevent="closeDetails"
      >
        <i class="fa fa-times"></i>
        {{ $t("btns.close") }}
      </button>
    </template>
  </Dialog>
 
  </Page>
</template>
<i18n src="@/lang/erp/shifts/Shift.json"></i18n>
<script>
import { mapActions } from "vuex";
/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
import Page from "@/components/global/layout/Page.vue";

export default {
  //   name: "Add",
  components: {
    Page,
  },
  props: ["detailModelStatus", "shiftData"],
  watch: {
      detailModelStatus: function (newVal, oldVal) {
      // watch it
      this.displayDetailsModal = newVal;
      console.log(this.displayDetailsModal);
    },
    shiftData: function (newVal, oldVal) {
      // console.log(clientToEdit)
      this.shiftDetail=newVal
      
    },
 
  },
  data() {
    return {
      
      displayDetailsModal: false,
      selectedGroup: null,
      shiftDetail: {},
      groupName:{name:""},
    };
  },
  
  methods: {
    convertDate(date){
  // console.log(date)
   if (date){
    var d=new Date(date)
    var hours=(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())
    var minutes=((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0")
    var sec=(((parseInt(d.getMinutes()/5)*5).toString()))
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + this.$t(ampm);
  return strTime;
}else{
  return null;
}
      
  },
    ///////// shiftDetail Methods ////////////////////
    closeDetails() {
    // this.displayDetailsModal=false
    this.$emit("DetailStatus", false);
    
  },
  
  },
};
</script>
<style scoped>
</style>

