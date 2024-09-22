<template>
  <div class="body-mass-index">
    <div class="chartBox">
        <canvas id="myChart"></canvas>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.initChart();
    },
    methods:{
        initChart(){
            const data = {
                datasets: [
                    {
                        data: [{x:15,y:7}],
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
            let pointImage = new Image (20,20)
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
                            pointStyle:[pointImage]
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
                document.getElementById('myChart'),
                config
            );           
        },
    },
}
</script>

<style lang="scss" scoped>
.body-mass-index {
    .chartBox {
        height: 400px;
        #myChart {
            max-width:100% !important;
            max-height:100% !important;
        }
    }
}
</style>