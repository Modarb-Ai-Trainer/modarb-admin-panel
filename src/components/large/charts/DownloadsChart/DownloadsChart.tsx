'use client'
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { ChartsReferenceLine } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './DownloadsChart.module.css';
import React from 'react';

const DownloadsChart = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3000, 3490, 5000, 6000, 9800, 10000];
  const xLabels = ['feb', 'jan', 'march', 'April', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'Nov', 'dec'];
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
    <div className={styles.MainDownloadChart}>
      <ThemeProvider theme={darkModeTheme}>
      <div className={styles.DownloadsChart}>
        <span>App Downloads</span>
        <ResponsiveChartContainer
          className={styles.chart}
          series={[
            { data: uData, label: 'App downloads', type: 'line', color: '#6739FF' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels, fill: 'white' }]}
          yAxis={[{ scaleType: 'linear' }]}
        >
          <LinePlot />
          <MarkPlot />
          <ChartsReferenceLine
            x="dec"
            label="Max downloads"
            lineStyle={{ stroke: '#A4FFB9' }}
          />
          <ChartsReferenceLine y={9800} label="Max downloads" lineStyle={{ stroke: '#A4FFB9' }} />
          <ChartsXAxis fill='white' />
          <ChartsYAxis />
        </ResponsiveChartContainer>
      </div>
    </ThemeProvider>

    </div>
    
  );
}

export default DownloadsChart;
