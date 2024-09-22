<template>
  <div class="custom-cascade">
    <Cascader   
      class="select"
      @input="formChanged"
      :value="value.length > 0 ? value:[]"
      v-model="form"
      :options="showOptions"
      expandType="click"
      :placeholder="placeholder"
      :class="{'border-danger':invalid}"
      >
    </Cascader >
  </div>
</template>
<script>
import {Cascader} from '@livelybone/vue-select';
export default {
  props:{
    value:{
      type: Array,
      required: true, 
    },
    placeholder:{
      type: String,
      default(){
        return this.locale=='ar'?'اختر':'Select'
      },
    },
    invalid:{
      type: Boolean,
      default(){
        return false
      },
    },
    options:{
      type: Array,
      required: true, 
        default(){
          return []
        },
    }
  },
  name:'Custom-Cascade',
  components:{Cascader},
  data() {
    return {
      form: this.value,
      keyword: '',
      arrowPosition: 'start',
      arrowOffsetScaling: 1,
      popperOptions: {
        placement: 'bottom-start',
        positionFixed: true,
      },
    }
  },
  watch:{
    value(){
      console.log(this.value)
      if(!this.value.length)
        this.form=[]
    }
  },
  computed: {
    showOptions() {
        return this.keyword ? this.options.filter(this.filter) : this.options
    },
    // showOptions() {
    //     return this.keyword ? this.options[this.locale].filter(this.filter) : this.options[this.locale]
    // },
  },
  methods: {
    formChanged(){
      console.log("this")
      this.$emit('input',this.form)   
    },
    filter(op) {
      return op.name.toString().indexOf(this.keyword) > -1
    },
  },
};
</script>
<style lang="scss">
@import 'node_modules/@livelybone/vue-select/lib/css/index.scss';
.custom-cascade{
  .vue-popper.options{
    margin-top: 0.25rem ;
    border: none;
    padding: 0.5rem 0;
    background: $white;
    color: $success-2;
    margin: 0.25rem 0;
    border: 1px solid $success;
    border-radius: 1rem;
    box-shadow: $shadow-success;  
  }
  .option{
      margin: 0.25rem 0;
      padding: 0.5rem 1rem;
      border: 0 none;
      font-weight: 700;
      color:$success-2;
      background: transparent;
      transition: box-shadow 0.2s;
      text-overflow: ellipsis;
      text-transform: capitalize;
    }
    .select {
      display: flex;
      align-items: center;
      text-overflow: ellipsis;
      border: 1px solid $success;
      height: 40px;
      vertical-align: center;
      border-radius: 34px;
      background: #ffff;
      .value{
        margin-top: 3px;
        font-size: 15px;
        color:$success-2;
        font-weight: 700 !important;
        overflow: hidden;
      }
      .placeholder{
        color :$success-2 !important;
        opacity: 0.5;
        font-weight: 700 !important;
        background: #fff;
        cursor: auto !important;
      }
      .input{
        margin-top: 5px;
        font-size: 15px;
        color:$success;
        &::placeholder{
          color :$success-2 !important;
          opacity: 0.5;
          font-weight: 700 !important;
          color:$success;
        }
      }
      .icon-arrow,.icon-arrow.reverse{
        right: 12px;
        width: 12px;
        height: 12px;
        top: 35%;
        &::before{
          border-top-color:$success;
        }
      }
      .icon-arrow.reverse{top:50%}
        .scrollbar-wrap{
          min-width:125px;
          .option{
            font-size: 12px;
          }
        }
    }
    /deep/.select-base, .select-multi, .cascader, .cascader-multi{
      color: $gray !important;
    }
}
</style>