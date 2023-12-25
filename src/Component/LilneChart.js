import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
export default function LilneChart() {
    
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(myChartRef, {
            type:"line",
            data:{
                labels: ['January', 'February', 'March', 'April', 'May'],
                datasets:[
                    {
                        label:"Line Chart",
                        data:[65,59,80,81,56],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth:2
                    }
                ]
            }
        })
        return()=>{
            if(chartInstance.current){
                chartInstance.current.destroy();
            }
        }
    }, []);

    return (
    <div>
        <canvas ref={chartRef}  style={{width:"300px", height:"200px"}}/>
    </div>
  )
}
