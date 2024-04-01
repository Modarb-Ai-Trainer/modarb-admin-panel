'use client'
import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import styles from './GoalChart.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const GoalChart = () => {
  const uData = [4000, 3000, 2000, 2780];
  const pData = [2400, 1398, 9800, 3908];
  const xLabels = [
    'gain muscles',
    ' fit',
    'lose weight',
    'sports',
  ];
  const darkModeTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'transparent',
      },
      text: {
        primary: '#FFFFFF',
      },
    },
  });
  return (
    <div className={styles.chartContainer}>
       <ThemeProvider theme={darkModeTheme}>
            <div className={styles.barchart}>
                <div className={styles['chart-wrapper']}>
                    <BarChart
                        className={styles.chart}
                        series={[
                            { data: pData, label: 'Goal Achievement', id: 'pvId', stack: 'total', color: "#6739FF" },
                            { data: uData, label: 'in progress', id: 'uvId', stack: 'total', color: "#B09FFF" },
                        ]}
                        xAxis={[{ data: xLabels, scaleType: 'band' }]}
                    />
                </div>
            </div>
        </ThemeProvider>
    </div>
   
  )
}


export default GoalChart