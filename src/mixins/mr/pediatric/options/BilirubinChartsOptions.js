export default {
  data() {
    return {
      serumLinearOptions: {
        maintainAspectRatio: false,
        scales: {
          y: {
            type: "linear",
            title: {
              display: true,
              text: "Total Serum Bilirubin (mg/dl)",
              color: "#205072",
              font: {
                size: 14,
                weight: 700,
              },
            },
            ticks: { color: "#205072", stepSize: 1 },
            grid:{
              color:'rgba(86,197,150,0.05)'
            },
            border:{
              width:2,
              color:'rgb(86,197,150)'
            }
          },
          x: {
            type: "linear",
            title: {
              display: true,
              text: "Age (in Hours)",
              color: "#205072",
              font: {
                size: 14,
                weight: 700,
              },
            },
            ticks: { color: "#205072", stepSize: 0.5 },
            grid:{
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
            // radius: 1
            // backgroundColor:'red',
          },
          line:{
            borderWidth:1
          },
        },
        plugins: {
          datalabels:false,
          legend: {
              display: true,
              position:'top',
              align:"center",
              labels: {
                  color: '#205072',
                  // boxWidth:100,
                  // boxHeight:10,
                  usePointStyle:true,
              }
          }
      }        
      },          
      serumLookUp: {
        labels: [0, 12, 18, 24, 36, 40, 48, 60, 72, 84, 96, 108, 120, 132, 144],
        datasets: [
          {
            label: "Child",
            data: [],
            fill: false,
            tension: 0.4,
            borderColor: "rgb(0,0,0)",
          },
          {
            label: "low Risk",
            data: [
              null,0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0,
            ],
            fill: true,
            borderColor: "rgb(0,0,0)",
            backgroundColor:'rgba(255,255,255,1)',
            fill: {
              target: 'origin',
              // above: 'rgba(255,255,255,1)',   // Area will be red above the origin
              below: 'rgba(255,255,255,1)'    // And blue below the origin
            },
            pointRadius: 0,
            tension: 0.4,
          },
          {
            label: "low Mid Risk",
            data: [
              null,3.9, 4.8, 4.9, 7, 7.8, 8.7, 9.7, 11.1, 11.7, 12.3, 12.9, 13.1,
              13.05, 13.03,
            ],
            fill: true,
            borderColor: "rgb(254,0,169)",
            backgroundColor:'rgba(254, 0, 169,0.25)',
            fill: {
              target: 3,
              above: 'rgba(254, 0, 169,0.25)',   // Area will be red above the origin
              // below: 'rgba(254, 0, 169,0.25)'    // And blue below the origin
            },
            pointRadius: 0,
            tension: 0.4,
          },
          {
            label: "High Mid Risk",
            data: [
              null,5.1, 5.9, 6, 8.9, 10, 10.9, 12.7, 13.3, 14.8, 15.1, 15.5, 15.9,
              15.6, 15.3,
            ],
            fill: true,
            borderColor: "rgb(254,0,118)",
            backgroundColor:'rgba(254, 0, 118,0.5)',
            fill: {
              target: 4,
              above: 'rgba(254, 0, 118,0.5)',   // Area will be red above the origin
              // below: 'rgba(254, 0, 118,0.5)'    // And blue below the origin
            },
            pointRadius: 0,
            tension: 0.4,
          },
          {
            label: "High Risk",
            data: [
              null,7.1, 7.2, 7.8, 11.1, 12.1, 13.1, 15.1, 16, 16.9, 17.3, 17.4, 17.7,
              17.6, 17.2,
            ],
            fill: true,
            borderColor: "rgb(254,0,0)",
            backgroundColor:'rgba(254, 0, 0,0.5)',
            fill: {
              target: "end",
              above: 'rgba(254, 0, 0,0.5)',   // Area will be red above the origin
              // below: 'rgba(254, 0, 0,0.5)'    // And blue below the origin
            },
            pointRadius: 0,
            tension: 0.4,
          },
        ],
      },
    };
  },
};
