<template>
    <div>
        <label class="form-label">{{labelLast}}</label>
        <div class=" edit-border">
            <p class=" p-1 d-flex justify-content-start align-items-center mx-3 my-1 fw-bold text-success" > {{last}} </p>
        </div>
        <label class="form-label">{{labelNote}}</label>
        <div class=" edit-border">
            <p class=" p-1 d-flex justify-content-start align-items-center mx-3 my-1 fw-bold text-success" > {{note}} </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'LastResultNote',
    props:{
         
        labelLast:{
            type:String,
        },
        last:{
            type:[String, Number],
        },
        labelNote:{
            type:[String, Number],
        },
        note:{
            type:String,
        },
       
      
   
    },
    data(){
        return{
        }
    },
    computed:{
     
    },
    methods:{
       
    }
}
</script>
<style lang="scss" scoped>
   .edit-border {
    // border: 1px solid #56c59723 ;
    border-radius: 2rem;
    width:fit-content;
    background: linear-gradient(0.25turn,rgba($primary,0.55),#fff);
}
</style>