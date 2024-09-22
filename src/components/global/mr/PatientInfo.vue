<!-- <template>
  <div class="patient-info text-center mt-5">
    <img src="@/assets/global/ui/static/patient.svg" alt="Patient Info" class="" />
  </div>
</template>
<style lang="scss" scoped>
.patient-info{
  img{ }
}
</style> -->


<template>
  <div class="patient-info">
    <Base title="case Measurements" icon="pi pi-chart-line">
      <div>
        <div class="overall mb-4">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-0"><i class="pi pi-bolt text-success"></i> Overall Case</h6>
            <div>
              <Button label="Details" class="p-1"></Button>
            </div>
          </div>
          <Chart type="line" :data="overallData" :options="fullyChartOptions" />
        </div>
        <div class="pulse-rate">
          <div class="d-flex justify-content-between align-items-center">
            <h6 class="mb-0"><i class="pi pi-heart text-success"></i> Pulse Rate</h6>
            <div>
              <Button label="Insert" class="p-1"></Button>
            </div>
          </div>
          <Chart type="line" :data="pulseData" :options="fullyChartOptions" />
        </div>
      </div>
      <template #footer>
        <h6 class="mb-0 text-center">More</h6>
      </template>
    </Base>
    <Base title="Advertising" icon="pi pi-bitcoin">
      <div class="advertising">
        <img src="https://img.freepik.com/free-psd/3d-background-with-product-management-solutions_23-2150668970.jpg?w=1380&t=st=1702210547~exp=1702211147~hmac=3f99419f0a58ea13e613fe5a7635f39409f191efd3e929f14b90a1038999cf80" alt="">
      </div>
      <template #footer>
        <h6 class="mb-0 text-center">More</h6>
      </template>
    </Base>    
  </div>
</template>
<script>
import Base from "@/components/global/utilities/Base.vue"
export default {
  components:{
    Base
  },
  data(){
    return{
      overallData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Overall Data',
                        data: [12, 51, 62, 33, 21, 62, 45],
                        borderColor: '#7485FF',
                        backgroundColor: 'rgba(108 ,133,255,0.2)'
                    }
                ]
      },
      pulseData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Pulse Data',
                        data: [12, 13, 14, 16, 15, 14, 14],
                        borderColor: '#FF6C9D',
                        backgroundColor: 'rgba(255 ,108,157,0.2)'
                      }
                    ]
      },
      fullyChartOptions: {
          maintainAspectRatio:false,
          responsive: true,
          plugins: {
            datalabels:false,
            legend: {
              display:false,
            }
          },
          scales: {
              x: {
                display: false,
                grid: {
                    display: true,
                  }
                },
                y: {
                  display: true,
                  grid: {
                    display: true
                  }
                }
              },
          elements: {
            point: {
              radius: 3
            },
            line:{
              fill:true,
              borderWidth: 1, // Set the line thickness here
              tension:0.9,
            }
          },
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.patient-info{
  .advertising{
    img{
      border-radius: 0.75rem;
      width: 100%;
      max-height: 15rem;
    }
  }
}
</style>