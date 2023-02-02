import React from 'react'
import ReactApexChart from "react-apexcharts";

const Chart = () => {
  const chartData = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
      options: {
        chart: {
          height: 150,
          type: 'area',
          
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
        responsive: [
          {
            breakpoint: 480,
            
            options: {
              chart: {
                width: '50%'
            },
              
                legend: {
                  position: "right",
                  verticalAlign: "top",
                  containerMargin: {
                    left: 35,
                    right: 60
                  }
                
              }
            }
          }
        ]
}
const onChange = (key= "string") => {
  console.log(key);
}
return (
<>







<div id="chart" >

<ReactApexChart options={chartData} series={chartData.series} type="area" height={350}   />
</div>
</>
)
}

export default Chart