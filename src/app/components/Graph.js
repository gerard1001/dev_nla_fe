"use client"

import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { useContext, useState, useEffect } from 'react'
const Graph = () => {

const currentDate = new Date();
const [selectedMonth, setSelectedMonth] = useState(formatDate(new Date(), 'YYYY-MM'));

    const [arrayhome,setArraystatics] = useState({
        series: [{
          name: 'Submited',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'New cases',
          data: [92, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
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
      })

// Function to fetch data for the selected month

  // Call the fetchMonthlyData function when the component mounts and when the selected month changes


  function formatDate(date, format) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    // You can add more components (e.g., day, hours, minutes) as needed
  
    switch (format) {
      case 'YYYY-MM':
        return `${year}-${month}`;
      // Add more cases for other date formats if needed
      default:
        return ''; // Return an empty string for unsupported formats
    }
  }
  
  return (

   <>
   <div className='bg-white runded-md p-3 font-bold'>
    <div  className='flex   '>
    <h3 className="text-mute fw-bold ml-2 text-muted font-bold">Analytics</h3>

      <div className='forms ml-auto'>
      <input className='form-control'  type="month"  value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)} />
      </div>
    </div>
            <div className='container chartss' id="chart">
              
      <ReactApexChart
       options={arrayhome.options} 
       series={arrayhome.series} 
       type="area" height={350} />
    </div></div>
   </>
    
        )
}

export default Graph