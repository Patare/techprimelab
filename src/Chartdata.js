import React from "react";
import { Bar } from "react-chartjs-2";
import {CategoryScale} from 'chart.js';
import Chart from 'chart.js/auto'; 
Chart.register(CategoryScale);
const Chartdata = () => {
    const barChartData = {
        labels: ["October", "November", "December","Sep","o","10266674"],
        datasets: [
            {
                data: [8137119, 9431691, 10266674,10266674,10266674,10266674],
                label: "Infected People",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.5)",
                fill: true
            },
            {
                data: [1216410, 1371390, 1477380,10266674,10266674,10266674],
                label: "Deaths People",
                borderColor: "#ff3333",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true
            }
        ]
    };

    const barChart = (
       <div style={{"height":"200px","width":"600px"}}> <Bar
       type="bar"
       options={{
           title: {
               display: false,
               text: "COVID-19 Cases of Last 3 Months",
               fontSize: 15
           },
           legend: {
               display: false, 
               position: "top" 
           }
       }}
       data={barChartData}
   /></div>
    );
    return barChart;
};

export default Chartdata;