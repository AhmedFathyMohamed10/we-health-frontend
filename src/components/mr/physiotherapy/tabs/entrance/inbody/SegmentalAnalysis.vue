<template>
  <div class="segmental-analysis">
    <h4>Segmental Lean, Fat &amp; Body Type Analysis</h4>
    <div class="row">
        <div class="col-md-6 col-xxl-4 offset-xxl-1">
            <div class="chart-wrapper-muscle">
                <Chart type="radar" :data="chartData" :options="chartOptions" />
            </div>
        </div>
        <div class="col-md-6 col-xxl-4 offset-xxl-2">
            <div class="chart-wrapper-normal">
                <Chart type="radar" :data="chartData" :options="chartOptions" />
            </div>
        </div>
        <div class="col-12">
            <h4>Body Type Analysis</h4>
            <div class="chartBox">
                <canvas id="body-mass-index-chart"></canvas>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{            
            //////////////////////////////////
             chartData: {
                 labels: ['Trunk', 'Left Arm', 'Left Leg', 'Right Leg', 'Right Arm'],
                 datasets: [
                     {
                         label: 'Patient',
                         borderColor: 'rgb(0,0,0)',
                         pointBorderColor: '#fff',
                         pointHoverBackgroundColor: '#fff',
                         pointHoverBorderColor: 'rgb(0,0,0)',
                         data: [50,45,57,62,60],
                         fill: false,
                     },
                     {
                         label:"Origin",
                         backgroundColor: 'rgba(179,181,198,0.2)',
                         borderColor: 'rgba(179,181,198,1)',
                         pointBackgroundColor: 'rgba(179,181,198,1)',
                         pointBorderColor: '#fff',
                         pointHoverBackgroundColor: '#fff',
                         pointHoverBorderColor: 'rgba(179,181,198,1)',
                         data: [30,30,30,30,30],
                         fill:false
                     },
                     {
                         label:"Origin",
                         backgroundColor: 'rgba(179,181,198,0.2)',
                         borderColor: 'rgba(179,181,198,1)',
                         pointBackgroundColor: 'rgba(179,181,198,1)',
                         pointBorderColor: '#fff',
                         pointHoverBackgroundColor: '#fff',
                         pointHoverBorderColor: 'rgba(179,181,198,1)',
                         data: [40,40,40,40,40],
                         fill:false
                     },
                     {
                         label: 'Under',
                         backgroundColor: 'rgba(179,181,40,0.2)',
                         borderColor: 'rgba(179,181,40,1)',
                         pointBackgroundColor: 'rgba(179,181,40,1)',
                         pointBorderColor: '#fff',
                         pointHoverBackgroundColor: '#fff',
                         pointHoverBorderColor: 'rgba(179,181,40,1)',
                         data: [50,50,50,50,50],
                         fill: true,
                         fill: {
                         target: 2,
                         // above: 'rgba(179,181,40,0.2)',   // Area will be red above the origin
                         below: 'rgba(179,181,40,0.2)'    // And blue below the origin
                         },
                     },
                     {
                         label: 'Normal',
                         backgroundColor: 'rgba(255,99,132,0.2)',
                         borderColor: 'rgba(255,99,132,1)',
                         pointBackgroundColor: 'rgba(255,99,132,1)',
                         pointBorderColor: '#fff',
                         pointHoverBackgroundColor: '#fff',
                         pointHoverBorderColor: 'rgba(255,99,132,1)',
                         data: [60,60,60,60,60],
                         fill: true,
                         fill: {
                             target: 3,
                             // above: 'rgba(255,99,132,0.2)',   // Area will be red above the origin
                             below: 'rgba(255,99,132,0.2)'    // And blue below the origin
                         },
                     },
                     {
                         label: 'Over',
                         backgroundColor: 'rgba(255,99,15,0.2)',
                         borderColor: 'rgba(255,99,15,1)',
                         pointBackgroundColor: 'rgba(255,99,15,1)',
                         pointBorderColor: '#fff',
                         pointHoverBackgroundColor: '#fff',
                         pointHoverBorderColor: 'rgba(255,99,15,1)',
                         data: [70,70,70,70,70],
                         fill: true,
                         fill: {
                         target: 4,
                         // above: 'rgba(255,99,15,0.2)',   // Area will be red above the origin
                         below: 'rgba(255,99,15,0.2)'    // And blue below the origin
                         },
                     },
                 ]
             },
             chartOptions: {
                 plugins: {
                     datalabels:false,
                     legend: {
                         display:false,
                         labels: {
                             color: '#495057'
                         }
                     }
                 },
                 scales: {
                     r: {
                         pointLabels: {
                             color: '#495057',
                         },
                         grid: {
                             color: '#ebedef',
                         },
                         angleLines: {
                             color: '#ebedef'
                         }
                     }
                 }
             },
        }
    },
    mounted(){
        this.initChart();
    },
    methods:{
        initChart(){
            const data = {
                datasets: [
                    {
                        data: [{x:15,y:10}],
                        borderWidth: 1
                    }
                ]
            };
            const chartAreaBg = {
                id:'chartAreaBg',
                beforeDatasetsDraw(chart,args,pluginOptions){
                    // console.log(chart)
                    const {ctx,chartArea:{top,bottom,left,right,width,height}}=chart;
                    // console.log(ctx)
                    // console.log(chartArea)
                    const image = new Image();
                    image.src = require('@/assets/mr/physiotherapy/entrance-test/inbody/body-mask-index.svg');
                    if(image.complete){
                        ctx.drawImage(image,52,10,chart.width-60,chart.height-62);
                    }
                    else{
                        image.onload =()=>chart.draw()
                    }
                },
            }
            let pointImage = new Image (30,30)
            pointImage.src=require('@/assets/mr/physiotherapy/entrance-test/inbody/pointer.svg')
            // config 
            const config = {
                type: 'scatter',
                data,
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Body Mass Index",
                                color: "#205072",
                                font: {
                                size: 14,
                                weight: 700,
                                },
                            },
                            min: 0,
                            max: 20,
                        },
                        x: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: "Percentage Body Fat (BF%)",
                                color: "#205072",
                                font: {
                                    size: 14,
                                    weight: 700,
                                },
                            },
                            min: 0,
                            max: 20,
                        }
                    },
                    elements:{
                        point:{
                            // pointStyle:[pointImage,'circle','triangle',pointImage]
                            pointStyle:[pointImage],
                            radius:30
                        }
                    },
                    plugins:{
                        legend:{
                            display:false
                        }
                    }
                },
                plugins:[chartAreaBg]
            };
            // elements:{
            //     point:{
            //          pointStyle:[pointImage,'circle','triangle',pointImage ,......]
            //          pointStyle:['point 1' ,'point 2','point 3',point 4    ,......]
            //     }
            // },
            // render init block
            const myChart = new Chart(
                document.getElementById('body-mass-index-chart'),
                config
            );           
        },
    },    
}
</script>

<style lang="scss" scoped>
.segmental-analysis{
    .chartBox {
        height: 400px;
        width:100%;
        #body-mass-index-chart {
            max-width:100% !important;
            max-height:100% !important;
        }
    }
    .chart-wrapper-normal,.chart-wrapper-muscle{
        background-image: url('@/assets/mr/physiotherapy/entrance-test/inbody/body-normal-bg.svg');
        background-position:  center;
        background-repeat: no-repeat;
        background-size: contain;
        .p-chart {
            // width: 100%;
            // height: 100%;
            canvas {
                max-width:100% !important;
                max-height:100% !important;
            }
        }
    }
    .chart-wrapper-normal{
        background-image: url('@/assets/mr/physiotherapy/entrance-test/inbody/body-normal-bg.svg');
    }
    .chart-wrapper-muscle{
        background-image: url('@/assets/mr/physiotherapy/entrance-test/inbody/body-muscle-bg.svg');
    }
}
</style>