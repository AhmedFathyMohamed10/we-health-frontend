<template>
    <div>
        
        <div class="calender" :style="{'background-image':'url('+require('@/assets/'+currentDate.month+'.jpg')+')'}">
            <div class="head">
                <div calss="current-date">
                    <div class="current-day">
                        <!-- {{ currentDay }} -->
                        {{ weekDaysNames[currentDay] }}
                    </div>
                
                    <div class="today">
                        <div><div class="arrow-up"  @click="dateUp()"></div></div>
                        <div><div class="arrow-up"  @click="monthUp()"></div></div>
                        <div><div class="arrow-up" @click="currentDate.year +=1"></div></div>
                        <div>{{currentDate.date}}</div>
                        <!-- {{ currentDate.month }} -->
                        <div>{{month[currentDate.month]}}</div>
                        <div>{{currentDate.year}}</div>
                        <div><div class="arrow-down" @click="dateDown()"></div></div>
                        <div><div class="arrow-down"  @click="monthDown()"></div></div>
                        <div><div class="arrow-down"  @click="currentDate.year -=1"></div></div>
                    </div>
                   
                </div>
            </div>
            <div class="section">
                <div class="weekdays">
                    <div class="weekday" v-for="(day,index) in weekdays" :key="index">
                        {{ day }}
                    </div>
                </div>
                <div class="date">
                    <div class="day-hidden" v-for="(n,index) in (firstMonthDay -1)" :key="'prev' + index">
                        {{ (prevMonthDays +1) - firstMonthDay + n }}
                    </div>
                    <div class="day" 
                    :class="{active : n === currentDate.date }"
                    @click="currentDate.date = n"
                    v-for="(n,index) in currentMonthDays " 
                    :key="'day' +index">
                        <span>{{n}}</span>
                        <div  v-for="(event, index) in events" :key="index">
                           {{ n }}
                            <div v-if="n == event.date ">
                                {{ event.title }}
                            </div>
                        </div>
                    </div>
                    <div class="day-hidden" v-for="(n,index) in (43 - (currentMonthDays + firstMonthDay))" :key="'next' +index">{{n}}</div>
                </div>
            </div>
        </div>
        <button @click="openDialog()">Add Event</button>
        <div v-if="showDialog" class="dialog">
            <div class="dialog-content">
              <h3>Add Event</h3>
              <input type="text" v-model="eventTitle" placeholder="Event Title">
              <button @click="addEvent(currentDate.date)">Add</button>
              <button @click="closeDialog()">Cancel</button>
            </div>
          </div>
    </div>

</template>
<script>
export default {
    data() {
    return {
        weekdays:['Mo','Tu','We','Th','Fr','Sa','Su'],
        weekDaysNames :['Sunday','Monday','Tuseday','Wendsday','Thursday','Friday','Satrday'],
        month :[
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
],
eventTitle:'',
events:[],
showDialog:false,
        currentDate :{
            date:0,
            month:0,
            year:0
        }
    }
  },
  computed:{
    prevMonthDays(){
        let year = this.currentDate.month === 0 ? this.currentDate.year -1 :this.currentDate.year;
        let month = this.currentDate.month === 0 ? 11 : this.currentDate.month
        console.log('prevMonthDays' + new Date(year, month, 0).getDate())
        return new Date(year, month, 0).getDate()
    },
    firstMonthDay(){
        let firstday = new Date(this.currentDate.year,this.currentDate.month,1).getDay()
        if(firstday === 0) firstday =7;
        console.log('firstday' + firstday)
        return firstday
    },
currentDay(){
    console.log('currentDay' + new Date(this.currentDate.year,this.currentDate.month,this.currentDate.date).getDay())
    return new Date(this.currentDate.year,this.currentDate.month,this.currentDate.date).getDay()
},
currentMonthDays(){
    console.log('this.currentDate.month  ' + this.currentDate.month )
    return new Date(this.currentDate.year,this.currentDate.month + 1,0).getDate()
}
  },
  methods:{
    addEvent(date) {
    
    this.openDialog();
    const event = {
      date: date,
      title: this.eventTitle
    };
    this.events.push(event);
    this.closeDialog(); 
  },
  closeDialog(){
    this.showDialog = false
  },
  openDialog(){
    this.showDialog = true
  },
    getCurrentDate(){
        let date = new Date()
        // console.log(new Date())
        // console.log(date.getMonth())
        console.log('this.currentDate.date ' +this.currentDate.date)
        this.currentDate.date = date.getDate();
        this.currentDate.month = date.getMonth();
        this.currentDate.year = date.getFullYear()
    },
    dateUp(){
        if(this.currentDate.date === this.currentMonthDays){
            this.currentDate.date = 1;
            this.monthUp()

        }
        else{
        this.currentDate.date +=1;

        }
    },
    dateDown(){
        if(this.currentDate.date === 1){
            this.currentDate.date = this.prevMonthDays;
            this.monthDown()

        }
        else{
        this.currentDate.date -=1;

        }
    },
    monthUp(){
        if(this.currentDate.month === 11){
            this.currentDate.month = 0;
            this.currentDate.year +=1

        }
        else{
        this.currentDate.month +=1;

        }
    },
    monthDown(){
        if(this.currentDate.month === 0){
            this.currentDate.month = 11;
            this.currentDate.year -=1

        }
        else{
        this.currentDate.month -=1;

        }
    }
  },
  created(){
    this.getCurrentDate();
  }
}
</script>
<style lang="scss" scoped>
@mixin calender-layout($property){
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(50px,1fr));
    grid-gap: 10px;
    padding: $property;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-family: 'Anton';
        border-radius: 5px;
    }
}
.calender{
    width: 500px;
    height: 700px;
    background-color: #efefef;
    font-family: 'Anton';
    border-radius: 15px;
    overflow: hidden;
    background: url('@/assets/istockphoto-517188688-2048x2048.jpg') center center;
    color:white;
    background-size: cover;
    .head{
     display: flex;
     justify-content: center;   
     align-items: top;
     height: 400px;
     padding: 20px 0 0;
     text-align: center;
     color:  #efefef;
     text-shadow: 1px 1px 1px #222,
     1px -1px 1px #222,  -1px 1px 1px #222,-1px -1px 1px #222;
     .current-date{
        width:300px
     }
     .arrow-up{
         width: 0;
         height: 0;
         border-left:10px solid transparent ;
         border-right:10px solid transparent ;
         cursor: pointer;
         border-bottom: 10px solid #fff;
         &:hover{
            border-bottom: 10px solid rgba(0,0,0,.4);
         }
     }
     .arrow-down{
        width: 0;
        height: 0;
        border-left:10px solid transparent ;
        border-right:10px solid transparent ;
        cursor: pointer;
        border-top: 10px solid #fff;
        &:hover{
           border-top: 10px solid rgba(0,0,0,.4);
        }
    }
    .current-day{
        font-size: 4rem;
    }
    .today{
        display: grid;
        grid-template-columns: 40px auto 70px;
        grid-gap:0;
        font-size: 2rem;
        div{
            display: flex;
            justify-content: center;
        }
    }
   
    }
    .weekdays{
        @include calender-layout(10px 20px 10px);
        background-color: rgba(0,0,0,.7);
        border-bottom: 1px solid #fff;
        div:nth-child(7n){
            color: #d43541; ;
        }
    }
    .date{
        @include calender-layout(10px 20px 10px);
        background-color: rgba(0,0,0,.7);
        .active{
            background-color: #fff;
            color: #2a4c50;
        }
        .day{
            cursor: pointer;
            &:hover{

                background-color: #fff;
                color: #2a4c50;
            }
            &:nth-child(7n){
                color: #d43541;
                &:hover{
                    background-color: #fff;
                    color: #d43541;
                }
            }
        }
        .day-hidden{
            opacity: .4;
            &:nth-child(7n){
                color: #d43541;
               
            }
        }
    }
   
}
.dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  
</style>