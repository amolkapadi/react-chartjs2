import React, {useEffect, useRef} from 'react'
import Chart from 'chart.js/auto'
export default function BubbleChart() {
    const chartRef =useRef(null);
    const chartInstance =useRef(null);

    useEffect(()=>{
        if(chartInstance.current){
            chartInstance.current.destroy()
        }
        const myChartRef = chartRef.current.getContext('2d');

        chartInstance.current = new Chart(myChartRef,{
            type: 'bubble',
            data: {
                datasets :[
                    {
                        label: "Bubble Chart",
                        data: [{
                            x: 20,
                            y: 30,
                            r: 15
                          }, {
                            x: 40,
                            y: 10,
                            r: 10
                          }],
                          backgroundColor: 'rgb(255, 99, 132)'
                    }
                ]
            },
        })

    }, [])



  return (
    <div>
        <canvas ref={chartRef} />
    </div>
  )
}
