import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function DoughnutChart() {
  
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(()=>{
        if (chartInstance.current){
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type: 'doughnut',
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                  ],
                  datasets:[{
                    data:[30,45,25],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                      ],
                  }
                    

                  ]
                
            }
        });
        return() =>{
            if (chartInstance.current){
                chartInstance.current.destroy();
            }
        }
    },[])
    return (
    <div>
        <canvas ref={chartRef} style={{width:"300px" , height:"200px"}}/>
    </div>
  )
}
