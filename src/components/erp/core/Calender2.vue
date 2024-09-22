<template>
    <div>
        
        <div class="calender" :style="{'background-image':'url('+require('@/assets/'+currentDate.month+'.jpg')+')'}">
            <div class="head ">
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
                        <div  v-for="(event, index) in events" :key="index" @click="openEvent(event,index)">
                            <div v-if="n == event.date " class="event">
                                {{ event.title }}
                            </div>
                        </div>
                    </div>
                    <div class="day-hidden" v-for="(n,index) in (43 - (currentMonthDays + firstMonthDay))" :key="'next' +index">{{n}}</div>
                </div>
            </div>
            <div class="m-auto">
                <button class="btnAddEvent " @click="openDialog()">Add Event</button>
            </div>
        </div>
        <!-- <button @click="openDialog()">Add Event</button>
        <div v-if="showDialog" class="dialog">
            <div class="dialog-content">
              <h3>Add Event</h3>
              <input type="text" v-model="eventTitle" placeholder="Event Title">
              <button @click="addEvent(currentDate.date)">Add</button>
              <button @click="closeDialog()">Cancel</button>
            </div>
          </div> -->
          <div :class="[showDialog || showEvent ? 'dialog':'modling']"  >

          </div>
         
          <div id="addEvent" v-show="showDialog">
            <h2>Add Event</h2>
            <div>
                <label>Day</label> 
                <input type="number" v-model="eventDay" class="dialog-title" placeholder="Enter Event Day">
            </div>
            <div>
                <label>title</label> 
                <input type="text" v-model="eventTitle" class="dialog-title" placeholder="Enter Event Title">
            </div>
            <button id="btnSave"  @click="addEvent()">Add</button>
            <button class="btnClose"  @click="closeDialog()">Close</button>
          </div>
          <div id="viewEvent" v-show="showEvent">
            <h2>Event</h2>
            <label>title</label> <p>{{eventDetails.title}}</p>
            <button class="btnDelete" @click="deleteEvent()" >Delete</button>
            <button class="btnClose" @click="closeDialog()">Close</button>
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
showEvent:false,
eventDetails :{},
eventDay:'',
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
    addEvent() {
    
    this.openDialog();
    const event = {
      date: this.eventDay,
      title: this.eventTitle
    };
    this.events.push(event);
    
    this.closeDialog(); 
  },
  closeDialog(){
    this.showDialog = false
    this.showEvent = false 
    this.eventTitle = ''
    this.eventDay = ''
  },
  openDialog(){
    this.showDialog = true
  },
  openEvent(event,index){
    this.showEvent = true
    event['index'] = index
    this.eventDetails = event

  },
  deleteEvent(){
    this.showEvent = false
    this.events.splice(this.eventDetails.index, 1);
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
        color: #222;
        font-family: 'Anton';
        border-radius: 5px;
    }
}
.calender{
    width: 50%;
    background-color: white;
    font-family: 'Anton';
    border-radius: 15px;
    box-sizing: border-box;
    margin: auto;
    


    .head{
        display: flex;
        justify-content: center;
        padding: 20px 0 0;
        text-align: center;
        height: 200px;
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
        border-bottom: 10px solid rgba(0,0,0,.4);
        &:hover{
            border-bottom: 10px solid #fff;
        }
    }
    .arrow-down{
        width: 0;
        height: 0;
        border-left:10px solid transparent ;
        border-right:10px solid transparent ;
        cursor: pointer;
        border-top: 10px solid rgba(0,0,0,.4);
        &:hover{
            border-top: 10px solid #fff;
        }
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
    .weekdays{
        width: 100%;
        display: flex;
        background-color: #2f3640;
        font-size: 17px;
        color: #fff;
        font-weight: 500;
        div:nth-child(7n){
            color: #d43541; ;
        }
        div{
            width: 100%;
            padding: 10px;
            text-align: center;
            text-transform: uppercase;

        }
    }
    .date{
        width: 100%;
        padding: 15px;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      
        .day{
            width: 80px;
            height: 80px;
            padding: 10px;
            margin: 5px;
            box-sizing: border-box;
            box-shadow: 0px 0px 3px #cbd4c2;
            background-color: #fff;
            cursor: pointer;
            &:hover{

                background-color:#706fd3; 
                color:#fff
            }
            &:nth-child(7n){
                color: #d43541;
                &:hover{
                    background-color:#706fd3; 
                    color:#fff
                }
            }
            
        }
        .active{
            background-color: #706fd3;
            color: #fff;

        }
        .day-hidden{
            width: 80px;
            height: 80px;
            padding: 10px;
            margin: 5px;
            box-sizing: border-box;
            box-shadow: 0px 0px 3px #cbd4c2;
            background-color: #fff;
            opacity: .4;
            &:nth-child(7n){
                color: #d43541;
               
            }
        }
    }
}
.event{
    font-size: 10px;
    padding: 3px;
    background-color: #3d3d3d;
    color: #fff;
    border-radius: 5px;
    max-height: 55px;
    overflow: hidden ;
}
.modling{
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,.8);
}
#addEvent,#viewEvent{
    width:35%;
    background-color: #fff;
    padding: 25px;
    margin: auto;
    position: absolute;
    border-radius: 15px;
    left: 100px;
    right: 0;
    top: 400px;
    z-index: 20;
    h2{
        font-weight: 500;
        margin-bottom: 10px;
    }
    .dialog-title{
        padding: 10px ;
        width:100%;
        box-sizing: border-box;
        margin-bottom: 25px;
        border-radius: 3px;
        outline: none;
        border: 1px solid #cbd4c2;
        font-size : 16px;
    }
  
    
}
.dialog{
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,.8);
}
#viewEvent p{
    
    margin-bottom: 20px;
}
#btnSave{
    background-color: #2ed573;
    color: #fff;
    border-radius: 5px;
    width: 100px;
    outline: none;
    border: 1px solid #cbd4c2;
    padding: 5px;
    margin: 5px;

}
.btnClose{
    background-color: #2f3542;
    color: #fff;
    border-radius: 5px;
    width: 100px;
    outline: none;
    border: 1px solid #cbd4c2;
    padding: 5px;
    margin: 5px;
    
}
.btnDelete{
    background-color:red;
    color: #fff;
    border-radius: 5px;
    width: 100px;
    outline: none;
    border: 1px solid #cbd4c2;
    padding: 5px;
    margin: 5px;
}
.btnAddEvent {
    color: #fff;
    background-color: #0d6efd;
    border-radius: 5px;
    width: 100px;
    outline: none;
    border: 1px solid #cbd4c2;
    padding: 5px;
    margin: 5px;
    
}
.btnAddEvent {
    color: #fff;
    background-color: #0d6efd;
    border-radius: 5px;
    width: 15%;
    outline: none;
    border: 1px solid #cbd4c2;
    padding: 20px;
    margin: 15px;
    
}
@media (max-width:1440px) {
    #addEvent,#viewEvent{
        width:50%;
        background-color: #fff;
        padding: 25px;
        margin: auto;
        position: absolute;
        border-radius: 15px;
        left: 100px;
        right: 0;
        top: 400px;
        z-index: 20;
    }
    .calender{
        width: 70%;
      
        
    }
    .calender .current-day {
        font-size: 4rem;
    }
    
    
    .calender .today {
       
     
        font-size: 2rem;
    }
    .calender .weekdays{
        font: 0px ;
        div{
            padding: 5px;
        }
    }
    .calender .date {
      
        padding: 5px;
        
    }
    .calender .date .day {
        width:100px;
        height: 100px;
        padding: 15px;
        margin: 10px;
        box-sizing: border-box;
        box-shadow: 0px 0px 3px #cbd4c2;
        background-color: #fff;
        cursor: pointer;
    }
    .calender .date .day-hidden {
        width:100px;
        height: 100px;
        padding: 15px;
        margin: 10px;
      
    }
    .btnAddEvent {
        color: #fff;
        background-color: #0d6efd;
        border-radius: 5px;
        width: 25%;
        outline: none;
        border: 1px solid #cbd4c2;
        padding: 20px;
        margin: 15px;
        
    }
    }
@media (max-width:1024px) {
    #addEvent,#viewEvent{
        width:50%;
        background-color: #fff;
        padding: 25px;
        margin: auto;
        position: absolute;
        border-radius: 15px;
        left: 100px;
        right: 0;
        top: 300px;
        z-index: 20;
    }
    .calender{
        width: 70%;
      
        
    }
    .calender .current-day {
        font-size: 4rem;
    }
    
    
    .calender .today {
       
     
        font-size: 2rem;
    }
    .calender .weekdays{
        font: 0px ;
        div{
            padding: 5px;
        }
    }
    .calender .date {
      
        padding: 5px;
        
    }
    .calender .date .day {
        width:70px;
        height: 70px;
        padding: 10px;
        margin: 6px;
        box-sizing: border-box;
        box-shadow: 0px 0px 3px #cbd4c2;
        background-color: #fff;
        cursor: pointer;
    }
    .calender .date .day-hidden {
        width:70px;
        height: 70px;
        padding: 10px;
        margin: 6px;
      
    }
    .btnAddEvent {
        color: #fff;
        background-color: #0d6efd;
        border-radius: 5px;
        width: 100px;
        outline: none;
        border: 1px solid #cbd4c2;
        padding: 5px;
        margin: 5px;
        
    }
    }
@media (max-width:768px) {
    #addEvent,#viewEvent{
        width:50%;
        background-color: #fff;
        padding: 25px;
        margin: auto;
        position: absolute;
        border-radius: 15px;
        left: 0;
        right: 0;
        top: 300px;
        z-index: 20;
    }
    .calender{
        width: 55%;
      
        
    }
    .calender .current-day {
        font-size: 3rem;
    }
    
    
    .calender .today {
       
     
        font-size: 2rem;
    }
    .calender .weekdays{
        font: 0px ;
        div{
            padding: 2px;
        }
    }
    .calender .date {
      
        padding: 5px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .calender .date .day {
        width:50px;
        height: 50px;
        padding: 5px;
        margin: 2px;
        box-sizing: border-box;
        box-shadow: 0px 0px 3px #cbd4c2;
        background-color: #fff;
        cursor: pointer;
    }
    .calender .date .day-hidden {
        width:50px;
        height: 50px;
        padding: 5px;
        margin: 2px;
      
    }
    .btnAddEvent {
        color: #fff;
        background-color: #0d6efd;
        border-radius: 5px;
        width: 100px;
        outline: none;
        border: 1px solid #cbd4c2;
        padding: 5px;
        margin: 5px;
        
    }
    }
@media (max-width:425px) {
    #addEvent,#viewEvent{
        width:80%;
        background-color: #fff;
        padding: 25px;
        margin: auto;
        position: absolute;
        border-radius: 15px;
        left: 0;
        right: 0;
        top: 300px;
        z-index: 20;
    }
    .calender{
        width: 100%;
      
        
    }
    .calender .current-day {
        font-size: 3rem;
    }
    
    
    .calender .today {
       
     
        font-size: 2rem;
    }
    .calender .weekdays{
        font: 0px ;
        div{
            padding: 2px;
        }
    }
    .calender .date {
      
        padding: 5px;
       
    }
    .calender .date .day {
        width: 45px;
        height: 45px;
        padding: 5px;
        margin: 2px;
       
    }
    .calender .date .day-hidden {
        width: 45px;
        height: 45px;
        padding: 5px;
        margin: 2px;
      
    }
    .btnAddEvent {
        color: #fff;
        background-color: #0d6efd;
        border-radius: 5px;
        width: 100px;
        outline: none;
        border: 1px solid #cbd4c2;
        padding: 5px;
        margin: 5px;
        
    }
    }
@media (max-width:375px) {
    .calender{
        width: 100%;
      
        
    }
    .calender .current-day {
        font-size: 3rem;
    }
    
    
    .calender .today {
       
     
        font-size: 2rem;
    }
    .calender .weekdays{
        font: 0px ;
        div{
            padding: 2px;
        }
    }
    .calender .date {
      
        padding: 5px;
       
    }
    .calender .date .day {
        width: 37px;
        height: 37px;
        padding: 5px;
        margin: 2px;
       
    }
    .calender .date .day-hidden {
         width: 37px;
        height: 37px;
        padding: 5px;
        margin: 2px;
       
    }
    .btnAddEvent {
        color: #fff;
        background-color: #0d6efd;
        border-radius: 5px;
        width: 100px;
        outline: none;
        border: 1px solid #cbd4c2;
        padding: 5px;
        margin: 5px;
        
    }
    }
@media (max-width:320px) {
.calender{
    width: 100%;
   
    
}
.calender .current-day {
    font-size: 3rem;
}


.calender .today {
   
 
    font-size: 2rem;
}
.calender .weekdays{
    font: 0px ;
    div{
        padding: 2px;
    }
}
.calender .date {
  
    padding: 5px;
   
}
.calender .date .day {
    width: 30px;
    height: 30px;
    padding: 5px;
    margin: 2px;
   
}
.calender .date .day-hidden {
    width: 30px;
    height: 30px;
    padding: 5px;
    margin: 2px;
   
}
.btnAddEvent {
    color: #fff;
    background-color: #0d6efd;
    border-radius: 5px;
    width: 100px;
    outline: none;
    border: 1px solid #cbd4c2;
    padding: 5px;
    margin: 5px;
    
}
}

</style>