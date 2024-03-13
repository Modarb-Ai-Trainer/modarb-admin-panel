'use client'
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ChartsReferenceLine } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import styles from './DownloadsChart.module.css'
import React from 'react'

const DownloadsChart = () => {
    const uData = [4000, 3000, 2000, 2780, 1890, 2390,3000, 3490,5000,6000,9800,10000 ];
const xLabels = [
  'feb',
  'jan',
  'march',
  'April',
  'may',
  'june',
  'july',
  'aug',
  'sep',
  'oct',
  'Nov',
  'dec'
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
    <ThemeProvider theme={darkModeTheme}>
    <div className={styles.DownloadsChart}>
        <span>App Downloads</span>
       <ChartContainer className={styles.chart}
  width={280}
  height={350}
  series={[
    { data: uData, label: 'App downloads', type: 'line', color: '#A4FFB9' },
  ]}
  xAxis={[{ scaleType: 'point', data: xLabels, fill: 'white',}]}
  yAxis={[{ scaleType: 'linear',  }]}
>
      <LinePlot />
      <MarkPlot />
      <ChartsReferenceLine
        x="dec"
        label="Max downloads"
        lineStyle={{ stroke: 'red' }}
      />
      <ChartsReferenceLine y={9800} label="Max downloads" lineStyle={{ stroke: 'red' }} />
      <ChartsXAxis fill='white'/>
      <ChartsYAxis />
    </ChartContainer>
    </div>
    </ThemeProvider>
  )
}

export default DownloadsChart