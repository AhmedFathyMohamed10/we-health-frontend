<template>
    <div class="custom-tabs">
        <Base>
            <div v-if="v" class="tabs-wrapper">
                <button
                    v-for="tab in tabs" :key="tab.key"
                    @click="selectedTab = tab.key"
                    class="btn custom-border-radius me-1 mb-1"
                    :class="[
                        selectedTab == tab.key && !(checkError[tab.key] ||serializerError[tab.key] ||(v[tab.key].$invalid && v[tab.key].$anyDirty)) ?
                         `${bgClass} w-sm`:'',
                        selectedTab != tab.key && !(checkError[tab.key] ||serializerError[tab.key] ||(v[tab.key].$invalid && v[tab.key].$anyDirty)) ?
                         outlineClass:'',
                        checkError[tab.key] || serializerError[tab.key] || (v[tab.key].$invalid && v[tab.key].$anyDirty) ?
                         'btn-danger w-sm' :''
                    ]"
                >
                    {{ tab[locale] }} 
                </button>
            </div>
            <div v-else class="tabs-wrapper">
                <button
                    v-for="tab in tabs" :key="tab.key"
                    @click="selectedTab = tab.key"
                     
                    class="btn custom-border-radius me-1"
                    :class="[
                        selectedTab == tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                         `${bgClass} w-sm`:'',

                        selectedTab != tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                         outlineClass:'',

                        checkError[tab.key] || serializerError[tab.key] ?
                         'btn-danger w-sm' :''
                    ]"
                >
                {{ tab[locale] }} 
                </button>
            </div>
        </Base>
    </div>
</template>

<script>
import Base from '@/components/global/utilities/Base.vue'

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
                return 'btn-success-gradient text-white'
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
            this.$emit('input',this.selectedTab);
        },
    },    
}
</script>
<style lang="scss">
.btn-background:not(:disabled):not(.disabled){
    background: $white;
}
.btn-background:not(.p-highlight):hover {
    background-color: $success !important;
    border: none;
}
.btn-outline-success:hover {
    background-color: $success !important;
}
.btn-outline {
    color: $secondary;
    background-color: $white;
}
.btn-outline:hover {
    background: #ecfff7 !important;
    color: $secondary;
    box-shadow: $success 0px 1px 8px;
    border: 2.5px solid $success;
}

.custom-border-radius {
    border-radius: 10rem;
}
</style>