'use client'
import React from 'react'
import styles from './UserChart.module.css'
import { LineChart } from '@mui/x-charts/LineChart';
const UserChart = () => {


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490 ,5000,6000,9000,7000,10000];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300,5000,6000,9000,4000,8000];
const xLabels = [
  'january',
  'February',
  'march',
  'April',
  'May',
  'june',
  'july',
  'August',
  'September',
  'October',
  'November',
  'December',
];



  return (
    <div className={styles.usercharts}>
     <LineChart
      width={800}
      height={300}
      series={[
        { data: pData, label: 'Active users' ,color:'#997AFF'},
        { data: uData, label: 'users' ,color:'#F7F4FF' },
      ]}
      
      xAxis={[{ scaleType: 'point', data: xLabels ,fill: '#white' }]}
      
    />
    </div>
  )
}

export default UserChart