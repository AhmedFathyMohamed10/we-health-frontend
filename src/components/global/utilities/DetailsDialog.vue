<template>
      <Dialog :visible.sync="displayModal" :header="header" :modal="true" :dismissableMask="true" :maximizable="maximizable"
      :containerStyle="{'width':'60vw'}" @hide="$emit('hide')">
        <template #header>
        </template>
        <slot></slot>
        <template #footer>
            <div></div>
        </template>
    </Dialog>
</template>
<script>
export default {
    props: {
        display:{
            required:true,
            type: Boolean,
            default(){
                return false;
            }
        },
        header:{
            type: String,
            default(){
                return '';
            }
        },        
        maximizable:{
            type: Boolean,
            default(){
                return true;
            }
        },
    },
    data(){
        return {
            displayModal:this.display,
        };
    },
    watch:{
        display(){
            this.displayModal = this.display;
        },
    },
    methods:{  },
}
</script>

<style>

</style>