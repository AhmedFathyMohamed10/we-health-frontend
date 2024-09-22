// import {destructOptionsList} from "@/helpers/utilities"

// export default {
//     data(){
//         return{
//           providersParams:{
//               url: "providersSuggestions",
//               suggestions:[]
//           }
//         }
//     },
//     computed:{
    
//   },
//     methods:{
//         async search(event,params) {
//           try {
//             await this.$store.dispatch('erp/clientsAndProviders/clientAndprovider/list',{url:params.url,s:event.query})
//             .then((res) => {
//                 params.suggestions = [...res.data]
//             });
//           }
//           catch (error) {
//             console.error(error)
//           }
//         },
//     }
// }

