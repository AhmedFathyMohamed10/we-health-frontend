<template>
  <div class="history">
    <Base>
        <h4 class="fw-bold">History</h4> 
        <div class="row">
            <div class="col-4">
                <label class="text-decoration-underline fw-bold">Last Check</label>
            </div>
            <div class="col-4">
                <label class="text-decoration-underline fw-bold">Comment</label>
            </div>
            <div class="col-4">
                <label class="text-decoration-underline fw-bold">Report</label>
            </div>
        </div>
        <div class="row" v-for="(record,index) in staticRecords" :key="index">
            <div class="col-4 my-2">
                <label>{{ record.date }}</label>
            </div>
            <div class="col-4 my-2">
                <label>{{ record.comment }}</label>
            </div>
            <div class="col-4 my-2">
                <button class="btn btn-secondary btn-pill">View</button>
            </div>
        </div>
    </Base>
  </div>
</template>
<script>
import Base from '@/components/global/utilities/Base.vue'
export default {
    components:{
        Base
    },
    data(){
        return {
            staticRecords:[
                {
                    date:"10:30PM THU 27JUN 2012",
                    comment:"الواد قلبه بيوجعه",
                    report:""
                },
                {
                    date:"10:30PM THU 27JUN 2012",
                    comment:"كان عايز حد يدلعه",
                    report:""
                },
                {
                    date:"10:30PM THU 27JUN 2012",
                    comment:"كان بيقول الـ أه",
                    report:""
                }
            ]
        }
    },
}
</script>

<style>

</style>