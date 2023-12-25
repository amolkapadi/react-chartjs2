import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'

export default function MixedChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef, {
            type:"bar",
            data:{
                labels:["January","February","March","April","May"],
                datasets:[
                    {
                        label:"Line Chart",
                        data:[45,34,54,64,34],
                        type:'line',
                        borderColor: 'red',
                        borderWidth:2,
                        fill:false
                    },
                    {
                        label:"Bara Chart",
                        data:[45,34,54,64,34],
                        type:'bar',
                        borderColor: 'red',
                    }
                ]
            }
        })
        return () =>{
            if(chartInstance.current){
                chartInstance.current.destroy()
            }
        }
    },[]);
 
    return (
    <div>
        <canvas  ref={chartRef} style={{width:"300px", height:"200px"}}/>
    </div>
  )
}
