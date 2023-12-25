import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
export default function PolarAReaChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(()=>{
        if (chartInstance.current){
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d');
        
        chartInstance.current = new Chart(myChartRef,{
            type:"polarArea",
            data:{
                labels:["Label 1", "Label 2", "Label 3","Label 4","Lsbel 5"],
                datasets:[
                    {
                        data: [11, 16, 17, 20, 14],
                        backgroundColor: [
                          'rgb(255, 99, 132)',
                          'rgb(75, 192, 192)',
                          'rgb(255, 205, 86)',
                          'rgb(201, 203, 207)',
                          'rgb(54, 162, 235)'
                        ]
                    }
                ]
            }
        });
        return()=>{
            if (chartInstance.current){
                chartInstance.current.destroy();
            }
        }
    }, [])
    return (
    <div>
        <canvas ref={chartRef} style={{width:"300px", height:"200px"}} />
    </div>
  )
}
