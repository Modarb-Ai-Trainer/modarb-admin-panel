'use client'
import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import styles from './PopularChart.module.css';

const PopularChart = () => {
  const data = [
    { value: 5, label: 'other', color: '#C2FFD0' },
    { value: 10, label: 'Intermittent fasting', color: '#391F8C' },
    { value: 15, label: 'Arm ', color: '#6739FF' },
    { value: 20, label: 'Quick workout', color: '#39FF67' },
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

  const WhiteTextLabel = ({ x, y, children }) => (
    <StyledText x={x} y={y}>
      {children}
    </StyledText>
  );

  function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  return (
    <div className={styles.popularPie}>
      <PieChart
        series={[{ data, innerRadius: 60 }]}
        {...size}
        label={({ dataEntry }) => (
          <WhiteTextLabel x={dataEntry.pos.x} y={dataEntry.pos.y}>
            {dataEntry.label}
          </WhiteTextLabel>
        )}
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
  );
};

export default PopularChart;
