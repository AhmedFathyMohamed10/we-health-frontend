
import { mapGetters } from 'vuex';
import {destructOptionsList} from "@/helpers/utilities"
export default {
    data(){
        return{
            //  drugNameOptions: [
            //     { english: "New York", arabic: "New York" },
            //     { english: "Rome", arabic: "Rome" },
            //     { english: "London", arabic: "London" },
            //     { english: "Istanbul", arabic: "Istanbul" },
            //     { english: "Paris", arabic: "Paris" },
            // ],
            // drugOptions: [
            //     { english: "Benoxinate + Fluorescein", arabic: "Benoxinate + Fluorescein" },
            //     { english: "Proparacaine + Fluorescein", arabic: "Proparacaine + Fluorescein" },
            //     { english: "Proparacaine", arabic: "Proparacaine" },
            //     { english: "other", arabic: "other" },
            //   ],
            referenceOptions:[
              { id: 100, value: "in range" },
              { id: 101, value: " > " },
              { id: 102, value: " < " },
              { id: 103, value: "Other" },
          
            ],

            routeOptions: [
                { id: 30, value: "GTN" },
                { id: 31, value: " NCT" },
                { id: 32, value: "Perkins" },
                { id: 33, value: "Tactile" },
            
            ],
            doseOptions: [
              {id: 13, value: "Goldman "},
              {id: 11, value: "PVD"},
              {id: 12, value: "Syneresis"}
            
            ],
            frequencyOptions: [
              {id: 1, value: "ATN"},
              {id: 2, value: "Floaters"},
              {id: 3, value: "PVD"},
              {id: 4, value: "Syneresis"}
          ],
          
            periodOptions: [
              {id: 1, value: "Goldman / ATN"},
              {id:21, value: "Flat-Clear" },
              { id:22, value: "Narrow Periph" },
        
            ],
            UnitOptions: [
                { id:20, value: "Anisocoria" },
                {id:21, value: "Flat-Clear" },
                { id:22, value: "Narrow Periph" },
        
            ],
            totalDiscountOptions: [
                {id:8, value: "%" },
                { id:56, value: "EGP" },
               
            ],
           discountOptions: [
                { id:9, value: "%" },
                { id:10, value: "EGP" },
                { id:11, value: "$" },
               
            ],
            
          batchOptions: [
                { id:15, value: "#7848155121" },
                { id:16, value: "#2358112661" },
               
            ],
            
           dateOptions: [
                { id:51, value: "13/2/2013" },
                { id:50, value: "17/7/2014" },
               
            ],
            
           
            payingMethodOptions:[
              {id:52,value:"Cash"},
              {id:53,value:"Yes and Cash"},
              {id:54,value:"Yes"},
         
            ],
            customLensOptions:[
                {english:"3 mirror",arabic:"3 mirror"},
                {english:"4 mirror",arabic:"4 mirror"},
                {english:"other",arabic:"other"},
              ],

              drugNameParams:{
                url: "example/drugName",
                suggestions:[]
              }
        }

    },

    computed:{
    //     ...mapGetters('pharmacyObject',['otc']),
    //     // drugNameOptions(){
    //     //   return destructOptionsList(this.otc.drugName);
    //     // },
    //     payingMethodOptions(){
    //       return destructOptionsList(this.otc.paymethod);
    //     },
    //     frequencyOptions(){
    //       return destructOptionsList(this.otc.frequency);
    //     },
    //     doseOptions(){
    //       return destructOptionsList(this.otc.dose);
    //     },
    //     periodOptions(){
    //       return destructOptionsList(this.otc.period);
    //     },
    //     routeOptions(){
    //       return destructOptionsList(this.otc.route);
    //     },
    //     unitOptions(){
    //       return destructOptionsList(this.otc.unit);
    //     },
    //   //   totalDiscountOptions(){
    //   //     return destructOptionsList(this.otc.discount);
    //   //   },
    //   //   batchOptions(){
    //   //     return destructOptionsList(this.otc.batch);
    //   //   },
    //   //  dateOptions(){
    //   //     return destructOptionsList(this.otc.date);
    //   //   },


    },
    methods:{
      async search(event,params) {
        console.log(event.query)
        try {
          await this.$store.dispatch('generalSuggestions/search',{url:params.url,s:event.query})
          .then((res) => {
              // console.log(res)
              params.suggestions = [...res]
          });
        }
        catch (error) {
          console.error(error)
        }
      },
    }
 


}
