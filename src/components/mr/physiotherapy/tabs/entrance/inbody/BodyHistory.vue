<template>
    <div>
        <h4>Body History</h4>
        <div class="table-wrapper my-2">
            <table class="table table-sm table-bordered text-center history-table">
                <thead>
                    <tr>   
                        <th scope="col">#</th>
                        <th scope="col" v-for="date in weightLookUp.labels" :key="date">Date{{ date }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="align-middle">{{$t('weight')}}</td>
                        <td class="align-middle" :colspan="weightLookUp.labels.length">
                            <Chart class="mx-2" type="line" :data="weightLookUp" :options="weightOptions" />
                        </td>
                    </tr>
                    <tr>
                        <td class="align-middle">{{$t('weight')}}</td>
                        <td class="align-middle" :colspan="weightLookUp.labels.length">
                            <Chart class="mx-2" type="line" :data="weightLookUp" :options="weightOptions" />
                        </td>
                    </tr>
                    <tr>
                        <td class="align-middle">{{$t('weight')}}</td>
                        <td class="align-middle" :colspan="weightLookUp.labels.length">
                            <Chart class="mx-2" type="line" :data="weightLookUp" :options="weightOptions" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>      
    </div>
</template>
<script>
export default {
    data(){
        return {
            weightOptions: {
                maintainAspectRatio: false,
                scales: {
                    y: {
                        display:false,
                        type: "linear",
                        title: {
                            display: false,
                            text: "Weight",
                            color: "#205072",
                            font: {
                            size: 14,
                            weight: 700,
                            },
                        },
                        ticks: { color: "#205072", stepSize: 1 },
                        grid:{
                            display:false,
                            color:'rgba(86,197,150,0.05)'
                        },
                        border:{
                            width:2,
                            color:'rgb(86,197,150)'
                        },
                        min: 50,
                        max: 150,
                    },
                    x: {
                        display:false,
                        type: "linear",
                        title: {
                            display: false,
                            text: "Date",
                            color: "#205072",
                            font: {
                            size: 14,
                            weight: 700,
                            },
                        },
                        ticks: { color: "#205072", stepSize: 0.5 },
                        grid:{
                            display:false,
                            color:'rgba(86,197,150,0.05)'
                        },
                        border:{
                            width:2,
                            color:'rgb(86,197,150)'
                        }
                    },
                },
                elements: {
                    point: {
                    radius: 3
                    // backgroundColor:'red',
                    },
                    line:{
                        borderWidth:1
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                        position:'left',
                        align:"top",
                        labels: {
                            color: '#205072',
                            // boxWidth:100,
                            // boxHeight:10,
                            usePointStyle:true,
                        }
                    }
                }        
            },     
            weightLookUp: {
                labels: [0,10,20,30,40,50,60,70,80,90],
                datasets: [
                    {
                        datalabels: {
                            display: "auto",
                            align: "top",
                            color: 'rgb(255, 0, 100)',
                            font :{
                                size:'10px'
                            },
                            textAlign:'center',
                            padding:7,
                        },
                        borderDash: [5, 5],
                        label: "Weight (lbs)",
                        data: [null,74.91, 120.92, 74.59, 75.22,76.91, 105.92,74.91, 73.92, 74.59, 75.22],
                        fill: false,
                        backgroundColor:'rgba(255, 0, 100,0.5)',
                        pointRadius:3,
                        tension: 0.4,
                    },
                ],
            },     
        }
    },
    
}
</script>
<style lang="scss" scoped>
.table-wrapper{
    width: 100%;
    overflow-y: scroll;
    .history-table{
        th,td{
            min-width: 7rem;
        }
}
}
/deep/.p-chart  {
    height:80px !important;
}
/deep/.p-chart canvas {
    max-width:100% !important;
    max-height:100% !important;
}

</style>