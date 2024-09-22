<template>
    <aside class="aside-list">
        <ul v-if="v">
            <!-- {{ options }} -->
          <li v-for="option in options" :key="option.key" class="my-3 custom-li " :class="{ 'active-li': value === option.key, 'text-danger': v[option.key].$error }">
            <h6 class="d-flex align-items-center mb-0" @click="toggle(option.key)">
                <!-- <img :src="option.icon" alt="" :class="value === option.key? 'custom-success':''"> -->
              <i class="fa fs-5" :class="[option.icon, {'custom-success':value === option.key} , {'text-danger': v[option.key].$error}]" ></i>
              <span class="mx-2 custom-label">{{option[locale]}}</span>
            </h6>
          </li>
        </ul>
        <ul v-else>
            <li v-for="option in options" :key="option.key" class="my-3 custom-li " :class="{ 'active-li': value === option.key, 'text-danger': v[option.key].$error }">
                <h6 class="d-flex align-items-center" @click="toggle(option.key)">
                    <!-- <img :src="option.icon" alt=""> -->
                 <i class="fa fs-5" :class="[option.icon,{'custom-success':value === option.key}, {'text-danger': v[option.key].$error}]" ></i>
                <span class="mx-2 custom-label">{{option[locale]}}</span>
                </h6>
            </li>

            <!-- //////////////////////////////
            :class="[
                        selectedTab == tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                         `${bgClass} w-sm`:'',

                        selectedTab != tab.key && !(checkError[tab.key] ||serializerError[tab.key]) ?
                         outlineClass:'',

                        checkError[tab.key] || serializerError[tab.key] ?
                         'btn-danger w-sm' :''
                    ]"
                > -->
        </ul>
    </aside>
</template>
<script>

export default {
    props:{
        value:{
            type:String,
        },
        options:{
            type:Array,
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
        }
    },
    components:{ },
    data(){
        return{

        }
    },
    methods:{
        toggle(value){
            this.$emit('input',value)
        }
    },
}
</script>
<style lang="scss" scoped>
    .aside-list{ 
        // position: relative;
        // z-index: 1000;
       .custom-li {
        padding:1.5% 5%;
        border-radius: 2rem;
        box-shadow: 0px 3px 3px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;

        }
        .active-li{
        // text-shadow: $shadow-info;
        color:#56C596; 
        background: linear-gradient(to right, #ffff, #ffff, #56C596);
        border:1px solid #56C596;
       }
        h6{
          cursor: pointer;  
            .custom-label{
                transition: all 0.4s ease-in-out;
            }
        }
        .custom-success{
            color:#56C596;
        }
    }
    .rtl {    
     .aside-list{           
        .active-li{
          background: linear-gradient(to left, #ffff, #ffff,#56C596 ) !important;
        
        }
      }
    }

</style>