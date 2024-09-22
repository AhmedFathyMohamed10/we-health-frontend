<!-- <template>
  <div class="custom-cascade_multi">
    <cascader-multi 
      class="select"
      v-model="value"
      expandType="click"
      :options="showOptions"
      :popperProps="popperProps"
      :canSearch="true"
      @search="log"
    >
    </cascader-multi>
  </div>
</template>

<script>
import CascaderMulti from 'vue-multiselect-cascade';

export default {
  components: {
    CascaderMulti
  },
  props:{
    // value:{
    //   type: Array,
    //   required: true, 
    // },
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
  data() {
    return {
      value: [[1, 2, 5], [8, 9, 12], [15, 16], [1, 3]],
      // options: options1,
      keyword: '',
    }
  },
  watch: {
    value: function (val) {
      console.log(val)
    },
    options: function (val) {
      console.log(val)
    }
  },
  computed: {
    showOptions: function () {
      return this.keyword ? this.options.filter(this.filter) : this.options
    }
  },

  methods: {
    log: function (val) {
      console.log(val)
      this.keyword = val
    },
    filter: function (op) {
      return op.name.toString().indexOf(this.keyword) > -1
    }
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
</style> -->