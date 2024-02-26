'use client'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './goalchart.module.css'
const GoalChart = () => {
  const uData = [4000, 3000, 2000, 2780];
const pData = [2400, 1398, 9800, 3908];
const xLabels = [
  'gain muscles',
  ' fit',
  'lose weight',
  'sports',
];
  return (
    <div className={styles.barchart}>
      <BarChart
      width={340}
      height={250}
      series={[
        { data: pData, label: 'Goal Achievement', id: 'pvId', stack: 'total', color :"#6739FF" },
        { data: uData, label: 'in progress', id: 'uvId', stack: 'total' ,color :"#B09FFF" },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
  )
}

export default GoalChart