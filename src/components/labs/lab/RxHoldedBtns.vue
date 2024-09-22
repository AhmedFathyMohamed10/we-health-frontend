<template>
    <div class="holded-btns my-2">
        <Base>
            <div class="d-flex justify-content-start align-items-center" >
                <div>
                    <button 
                        v-for="num in numbers_btn" :key="num.val"
                        @click="selectedNum = num.numb"
                        
                            class="btn m-1 rounded-circle btn-success-gradient" 
                            :class="[                   
                                selectedNum != num.numb ? `disabled-btn  `:'',    
                            ]"
                        > 
                        {{ num['val'] }} 
                    </button>
                </div>
            </div>  
          <!-- <div>
            <CustomTabs
                  class="text-center"
                  v-model="selectedTab"
                  :tabs="tabs" 
                  :checkError="check_error" 
                  :serializerError="serializer_error"
                  > 
            </CustomTabs> 
          </div>
             -->
            
        </Base>
    </div>
</template>

<script>
import Base from "@/components/global/utilities/Base.vue";
import CustomTabs from "@/components/global/custom/CustomTabs.vue";
export default {
    name:'RxHoldedBtns',
    props: {
        value:{
            required:true,
            type: Number,
            default(){
                return 
            }
        }, 
        numbers_btn: {
            type: Array,
            required:true,
            default(){
                return []
            }
        },
        v:{
            type:Object,
        },        
        checkError: {
            type: Object,
            default(){
                return {}
            }
        },
        serializerError: {
            type: Object,
            default(){
                return {}
            }
        },
        bgClass: {
            type: String,
            default(){
                return ' opacity: .5;'
            }
        },
        outlineClass: {
            type: String,
            default(){
                return 'btn-outline'
            }
        },
    },
    components:{
        Base,
        // CustomTabs,
    },
    data(){
        return {
            selectedNum : this.value,
            // selectedTab : this.value,

            // tabs: [
            //     { en: "CashPoint", ar: "آلة صرف النقود", key: "CashPoint" },
            //     { en: "Requests", ar: "Requests", key: "Requests" },
            //     { en: "CallCenter", ar: "مركز الاتصال", key: "CallCenter" },
            //     { en: "Insurance", ar: "تأمين", key: "Insurance" },
            //  ],
        }
       
    },
   
    watch:{
        selectedNum(){
            this.$emit('input',this.selectedNum);
        },
        // selectedTab(){
        //     this.$emit('input',this.selectedTab);
        // },
    }, 
  

}

</script>
<style>
    .disabled-btn {
        opacity: 0.5;
        cursor: not-allowed;
    }
 </style>