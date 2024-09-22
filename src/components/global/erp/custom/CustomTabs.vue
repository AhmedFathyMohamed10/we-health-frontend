<template>
    <div class="custom-tabs my-2">
        <Base>
            <div v-if="v" class="tabs-wrapper">
                
                <button
                    v-for="tab in tabs" :key="tab.key"
                    @click="selectedTab = tab"
                    class="btn btn-pill me-2 my-2"
                    :class="[
                        selectedTab.key == tab.key && (!error || !(v[tab.key].$invalid && v[tab.key].$anyDirty)) ? `${bgClass} w-sm`:'',
                        selectedTab.key != tab.key && (!error || !(v[tab.key].$invalid && v[tab.key].$anyDirty)) ? outlineClass:'',
                      (tab.id == 1 && (error.mobile ||error.email ||error.name || error.dob || error.address || error.gender || dobDateError))|| (v[tab.key].$invalid && v[tab.key].$anyDirty) ? 'btn-danger btn-outline-light w-sm' :'',
                      (tab.id== 2 && (error.username || error.password || error.salary || error.jobStartDate || error.directManager || dateError)) || (v[tab.key].$invalid && v[tab.key].$anyDirty) ? 'btn-danger btn-outline-light w-sm' :'',
                      (tab.id== 3&& (error.emNumbers || error.education || error.status )) || (v[tab.key].$invalid && v[tab.key].$anyDirty) ? 'btn-danger btn-outline-light w-sm' :''
                    ]"
                >
                    {{ locale == "ar" ? tab.arabic : tab.english }} 
                </button>
            </div>
           
        </Base>
    </div>
</template>

<script>
import Base from '@/components/global/utilities/Base.vue'

export default {
    props: {
        dateError:{
            
            type: String,
            default(){
                return ""
            }
        },
        dobDateError:{
          
            type: String,
            default(){
                return ""
            }
        },
        value:{
            required:true,
            type: Object,
            default(){
                return {}
            }
        },
        tabs: {
            type: Array,
            required:true,
        },
        v:{
            type:Object,
        },        
        error: {
            type: Object,
            default(){
                return {}
            }
        },
       
        bgClass: {
            type: String,
            default(){
                return 'btn-success-gradient'
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
        Base
    },
    data(){
        return {
            selectedTab:this.value,
        }
    },
    watch:{
        selectedTab(){
            this.$emit('input',{...this.selectedTab});
        },
    }, 
    methods:{
        check_error(id,error){

        }
    }   
}
</script>