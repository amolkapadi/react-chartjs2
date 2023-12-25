import React, { useEffect, useRef } from 'react'
import Chart from "chart.js/auto"

export default function BarChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(()=>{
            if(chartInstance.current){
                chartInstance.current.destroy();
            }
            const myChartRef = chartRef.current.getContext("2d")

            const barColors = [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ];
            chartInstance.current = new Chart(myChartRef, {
                type: 'bar',
                data: {
                    labels :  ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5","Label 6"],
                    datasets :[
                        {
                            label:"Data",
                            data: [12,19,8,4,8,20],
                            backgroundColor:barColors
                        }
                    ]
                }    
            })
            return()=>{
                if(chartInstance.current){
                    chartInstance.current.destroy()
                }
            };
        }, []);



  return (
    <>
        <canvas ref={chartRef} />
    </>
  )
}
