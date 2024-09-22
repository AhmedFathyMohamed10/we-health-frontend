<template>
    <div class="custom-tabs ">

        <div class="d-flex  justify-content-center align-items-center ">
            <div v-if="v" class="">
                <button
                    v-for="tab in tabs" :key="tab.key"
                    @click="selectedTab = tab.key"
                    class="btn btn-pill  my-2 "
                    :class="[
                        selectedTab == tab.key && !(checkError[tab.key] ||serializerError[tab.key] ||(v[tab.key].$invalid && v[tab.key].$anyDirty)) ?
                        `${bgClass} `:'',
                        selectedTab != tab.key && !(checkError[tab.key] ||serializerError[tab.key] ||(v[tab.key].$invalid && v[tab.key].$anyDirty)) ?
                        outlineClass:'',
                        checkError[tab.key] || serializerError[tab.key] || (v[tab.key].$invalid && v[tab.key].$anyDirty) ?
                        'btn-danger' :''
                    ]"
                >
                    {{ tab[locale] }} 
                </button>
            </div>
        <div v-else class="">
            <button
                v-for="tab in tabs" :key="tab.key"
                @click="selectedTab = tab.key"
                class="btn btn-pill my-2 "
                :class="[
                    selectedTab == tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                    `${bgClass} `:'',

                    selectedTab != tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                    outlineClass:'',

                    checkError[tab.key] || serializerError[tab.key] ?
                    'btn-danger ' :''
                ]"
            >
            {{ tab[locale] }} 
            </button>
        </div>
        </div>


   
    </div>
</template>

<script>
// import Base from '@/components/global/utilities/Base.vue'

export default {
    props: {
        value:{
            required:true,
            type: String,
            default(){
                return ""
            }
        },
        tabs: {
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
        // Base
    },
    data(){
        return {
            selectedTab:this.value,
            // selectedNum : this.value,
        }
    },
    watch:{
        selectedTab(){
            this.$emit('input',this.selectedTab);
        },
        // selectedNum(){
        //     this.$emit('input',this.selectedNum);
        // },
    },    
}
</script>