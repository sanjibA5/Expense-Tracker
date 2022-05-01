import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css';

export default function Chart(props) {
    const arrayofvalue=props.datapoint.map((datapoint)=>{
        //return only array of value
        return datapoint.value
    })
   
    const totalMaximum=Math.max(...arrayofvalue)
  return (
    <div className='chart'>
        {
          props.datapoint.map((datapoint)=>{
       
              return <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label} />
        })  
              

        }
    </div>
  )
}