<template>
    <div class="custom-tabs my-2">
        <Base>
            <ul class="nav" v-if="v">
                <li v-for="tab in tabs" :key="tab.key"
                    @click="selectedTab = tab.key"
                    class="nav-item custom-nav-item m-1"
                    :class="[
                        selectedTab == tab.key && !(checkError[tab.key] ||serializerError[tab.key] ||(v[tab.key].$invalid && v[tab.key].$anyDirty)) ?
                         `${bgClass} w-sm`:'',
                        selectedTab != tab.key && !(checkError[tab.key] ||serializerError[tab.key] ||(v[tab.key].$invalid && v[tab.key].$anyDirty)) ?
                         outlineClass:'',
                        checkError[tab.key] || serializerError[tab.key] || (v[tab.key].$invalid && v[tab.key].$anyDirty) ?
                         'btn-danger w-sm' :'',
                         selectedTab == tab.key? 'custom-nav-item-active': ''
                    ]">
                    <a class="nav-link custom-nav-link" aria-current="page" @click.prevent="">{{ tab[locale] }} </a>
                </li>
            </ul>
            <ul class="nav" v-else>
                <li v-for="tab in tabs" :key="tab.key"
                    @click="selectedTab = tab.key"
                    class="nav-item"
                    :class="[
                        selectedTab == tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                         `${bgClass} w-sm`:'',

                        selectedTab != tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                         outlineClass:'',

                        checkError[tab.key] || serializerError[tab.key] ?
                         'btn-danger w-sm' :''
                    ]">
                    <a class="nav-link active" aria-current="page" @click.prevent="">{{ tab[locale] }} </a>
                </li>
            </ul>
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

.btn-background:not(.p-highlight):hover {
    background: $primary-gradient-1;
    color: $white !important;
    border: none;
}
.btn-background:focus, .btn-success:focus, .btn-outline-success{
    color: $primary-gradient-1 !important;
}
.custom-nav-link {
    color: $secondary;
    font-weight: 600;
}
.custom-nav-item {
    background: unset !important;
    color: inherit !important;
}
.custom-nav-item:hover {
    border: 1px solid $secondary;
    border-radius: 0.5rem;
}
.custom-nav-item-active {
    border: 1px solid $secondary;
    border-radius: 0.5rem;
}
</style>