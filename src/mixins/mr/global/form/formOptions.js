export default {
    data(){
        return{
          // sectionOptions:["RX","Scan","Analysis","Operations","Eye Refraction"],
          // statusOptions:["Active","History"]
        }
    },
    computed:{
        //////////////// search Diagnosis //////////////////
        //////////////// * Static Options //////////////////
        // formOptions () {
        //   // return this.$store.getters['generalStaticData/form']["form"]
        //   return {}
        // },
        sectionOptions(){
          if(this.formOptions["section"]){
            return this.formOptions["section"]
          }
          else return [];
        },
        statusOptions(){
          if(this.formOptions["status"]){
            return this.formOptions["status"]
          }
          else return [];
        },
    },
}