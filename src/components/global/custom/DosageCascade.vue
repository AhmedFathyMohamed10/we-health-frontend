<template>
  <div class="casecade-rx-dosage">
    <Cascader   
      class="select"
      @input="formChanged"
      :value="value.length>2?value:[]"
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
        return this.locale=='ar'?'الجرعة':'Dosage'
      },
    },
    invalid:{
      type: Boolean,
      default(){
        return false
      },
    },
  },
  name:'cascade',
  components:{Cascader},
  data() {
    let optionsEn = [
      {name: '1 Time', value:'1 Time', children: [
        {name: 'Day', value: 'Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
        {name: '2 Day', value: '2 Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
          { name: 'Week', value: 'Week' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Month', value: 'Month' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 2 Months', value: 'Every 2 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 3 Months', value: 'Every 3 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 6 Months', value:'Every 6 Months' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Year', value: 'Year' ,children:[{name: 'Random', value: 'Random'}]},
        ],
      },
      {name: '2 Times', value: '2 Times', children: [
        {name: 'Day', value: 'Day', children: [
              { name: 'Before', value: 'Before' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'After', value: 'After' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'Morning/Night', value: 'Morning/Night'},
              { name: 'Random', value: 'Random'},
            ],
          },
        ],
      },
      {
        name: '3 Times', value: '3 Times', children: [
          { name: 'Day', value: 'Day', children: [
                  {
                    name: 'Before', value: 'Before',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'After', value: 'After',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'Random', value: 'Random',
                  }
              ]},
        ],
      },
      { name: '4 Times', value:  '4 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '5 Times', value: '5 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '6 Times', value: '6 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
    ]
    let optionsAr = [
      {name: '1 Time', value:'1 Time', children: [
        {name: 'Day', value: 'Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
        {name: '2 Day', value: '2 Day', children: [
              {name: 'Before', value: 'Before', children:[
                      {name: 'Breakfast', value:'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
                      {name: 'Sleep', value:'Sleep'}
              ]},
              {name: 'After', value: 'After' , children:[
                      {name: 'Breakfast', value: 'Breakfast'},
                      {name: 'Dinner', value:'Dinner'},
                      {name: 'Lunch', value:'Lunch'},
              ]},
              {name: 'Random', value: 'Random'},
            ],
          },
          { name: 'Week', value: 'Week' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Month', value: 'Month' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 2 Months', value: 'Every 2 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 3 Months', value: 'Every 3 Months',children:[{name: 'Random', value: 'Random'}]},
          { name: 'Every 6 Months', value:'Every 6 Months' ,children:[{name: 'Random', value: 'Random'}]},
          { name: 'Year', value: 'Year' ,children:[{name: 'Random', value: 'Random'}]},
        ],
      },
      {name: '2 Times', value: '2 Times', children: [
        {name: 'Day', value: 'Day', children: [
              { name: 'Before', value: 'Before' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'After', value: 'After' , children: [
                      {name: 'Breakfast and Lunch', value:'Breakfast and Lunch'},
                      {name: 'Breakfast and Dinner', value:'Breakfast and Dinner'},
                      {name: 'Dinner and Lunch', value:'Dinner and Lunch'}
                  ]},
              { name: 'Morning/Night', value: 'Morning/Night'},
              { name: 'Random', value: 'Random'},
            ],
          },
        ],
      },
      {
        name: '3 Times', value: '3 Times', children: [
          { name: 'Day', value: 'Day', children: [
                  {
                    name: 'Before', value: 'Before',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'After', value: 'After',
                    children:[
                      {name: 'Meals', value:'Meals'},
                    ]
                  },
                  {
                    name: 'Random', value: 'Random',
                  }
              ]},
        ],
      },
      { name: '4 Times', value:  '4 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '5 Times', value: '5 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
      { name: '6 Times', value: '6 Times' , children: [
              {name:'Day', value:'Day', children: [
                      {name:'Random', value: 'Random'}
                  ]}
          ]},
    ]
    return {
      form: this.value,
      optionsEn: optionsEn,
      optionsAr: optionsAr,
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
      if(!this.value.length)
        this.form=[]
    }
  },
  computed: {
    showOptions() {
      if(this.locale=='ar')
      return this.keyword ? this.optionsAr.filter(this.filter) : this.optionsAr
      else
      return this.keyword ? this.optionsEn.filter(this.filter) : this.optionsEn
    },
  },
  methods: {
    formChanged(){
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
.casecade-rx-dosage{
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