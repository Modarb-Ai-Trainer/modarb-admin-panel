'use client'
import React from 'react';
import styles from './UserChart.module.css';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

const UserChart = () => {
  const data = [
    { name: 'January', uValue: 4000, pValue: 2400 },
    { name: 'February', uValue: 3000, pValue: 1398 },
    { name: 'March', uValue: 2000, pValue: 9800 },
    { name: 'April', uValue: 2780, pValue: 3908 },
    { name: 'May', uValue: 1890, pValue: 4800 },
    { name: 'June', uValue: 2390, pValue: 3800 },
    { name: 'July', uValue: 3490, pValue: 4300 },
    { name: 'August', uValue: 5000, pValue: 5000 },
    { name: 'September', uValue: 6000, pValue: 6000 },
    { name: 'October', uValue: 9000, pValue: 9000 },
    { name: 'Nov', uValue: 7000, pValue: 4000 },
    { name: 'December', uValue: 10000, pValue: 8000 },
  ];

  let theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'transparent',
      },
      text: {
        primary: '#EBEBEB',
      },
    },
    typography: {
      fontSize: 14, 
      fontWeightRegular: 400, 
    },
  });
  theme = responsiveFontSizes(theme); 

  return (
    <div className={styles.userchart}>
      <ThemeProvider theme={theme}>
        <div className={styles.userchart_container}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uValue" name="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="pValue" name="active users" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default UserChart;
