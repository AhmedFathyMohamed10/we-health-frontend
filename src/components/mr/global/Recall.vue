<template>
<div class="recall">
    <Base>    
        <h2>Recall Content Will Render Here Later</h2>
    </Base>
</div>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue"
export default {
    props: {
        value:{
            required:true,
            type: Array,
            default(){
                return []
            }
        },
        check_error:{
            type:Object,
        },
        serializer_error:{
            type:Object,
        },
    },
    components: {
        Base,
    },
    data(){
        return {
            recall: this.value,
        }
    },
    watch: {
        recall: {
            deep: true,
            handler(newValue, oldValue) {
                this.$emit('input',[...this.recall])
            },
        }, 
    },
    methods: { },

};
</script>
