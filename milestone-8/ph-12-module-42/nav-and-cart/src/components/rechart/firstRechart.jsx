
import React from 'react';
import { LineChart, Line} from 'recharts';


const chartData = [
  {
    "month": "জানু",
    "users": 4000,
    "revenue": 2400
  },
  {
    "month": "ফেব্রু",
    "users": 3000,
    "revenue": 1398
  },
  {
    "month": "মার্চ",
    "users": 2000,
    "revenue": 9800
  },
  {
    "month": "এপ্রিল",
    "users": 2780,
    "revenue": 3908
  },
  {
    "month": "মে",
    "users": 1890,
    "revenue": 4800
  },
  {
    "month": "জুন",
    "users": 2390,
    "revenue": 3800
  }
]

const First = () => {


   
  return (
    <div>
        <LineChart width={600} height={300} data={chartData} >
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
    </div>
  )
}

export default First;