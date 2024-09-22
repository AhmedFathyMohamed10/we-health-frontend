<template>
    <div class="calender">
        <div class="container">
            <div class="head">
                <div calss="current-date">
                    <div class="current-day">
                        <!-- {{ currentDay }} -->
                        <!-- {{ weekDaysNames[currentDay] }} -->
                        Satrday
                    </div>
                
                    <div class="today">
                        <div><div class="arrow-up"></div></div>
                        <div><div class="arrow-up"></div></div>
                        <div><div class="arrow-up"></div></div>
                        <div>10</div>
                        <!-- {{ currentDate.month }} -->
                        <div>Novamber</div>
                        <div>2023</div>
                        <div><div class="arrow-down"></div></div>
                        <div><div class="arrow-down"></div></div>
                        <div><div class="arrow-down"></div></div>
                    </div>
                   
                </div>
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
  }
}
 
 
 
</script>
<style lang="scss" scoped>
.head{
    display: flex;
    justify-content: center;
}
  
</style>