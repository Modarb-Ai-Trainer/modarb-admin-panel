'use client'
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import styles from './PopularChart.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';


type DataEntry = {
  value: number;
  label: string;
  pos: {
    x: number;
    y: number;
  };
  color: string;
};

const PopularChart: React.FC = () => {
  const data: DataEntry[] = [
    { value: 5, label: 'other', pos: { x: 0, y: 0 } ,color: '#C2FFD0'},
    { value: 10, label: 'Intermittent fasting', pos: { x: 0, y: 0 },color: '#C2FFD0' },
    { value: 15, label: 'Arm ', pos: { x: 0, y: 0 } ,color: '#6739FF' },
    { value: 20, label: 'Quick workout', pos: { x: 0, y: 0 },color: '#39FF67' },
  ];

  const size = {
    width: 480,
    height: 200,
  };

  const StyledText = styled('text')(({ theme }) => ({
    fill: 'white',
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 10,
  }));

  const WhiteTextLabel: React.FC<{ x: number; y: number; children?: React.ReactNode }> = ({ x, y, children }) => (
    <StyledText x={x} y={y}>
      {children}
    </StyledText>
  );

  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }
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

          <div className={styles.popularPie}>
            <PieChart
        series={[{ data, innerRadius: 60 }]}
        {...size}
        label={({ dataEntry }: { dataEntry: DataEntry }) => ( 
          <WhiteTextLabel x={dataEntry.pos.x} y={dataEntry.pos.y}>
            {dataEntry.label}
          </WhiteTextLabel>
        )}
        labelStyle={{
          fill: 'white',
        }}
      >
        <PieCenterLabel>Popular programs</PieCenterLabel>
      </PieChart>
      <style>
        {`
          .recharts-pie-labels text {
            fill: white !important;
          }
        `}
      </style>
    </div>
    </ThemeProvider>
  );
};
//

export default PopularChart;
