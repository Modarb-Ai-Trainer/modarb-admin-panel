'use client'
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DayDetails from '../DayDetails/DayDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './WeekDetails.module.css'



interface Day {
    day_number: number;
    day_type: string;
    total_number_exercises: number;
    exercises: any[]; 
    
}
interface Week {
    week_number: number;
    week_name: string;
    week_description: string;
    days: Day[];
    
}
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const WeekDetails: React.FC<{ week: Week }> = ({ week }) => {
    const columns = [
        { field: 'day_number', headerName: 'Day Number', width: 150 },
        { field: 'day_type', headerName: 'Day Type', width: 150 },
        { field: 'total_number_exercises', headerName: 'Total Exercises', width: 200 },
    ];

    const rows = week.days.map(day => ({
        id: day.day_number,
        day_number: day.day_number,
        day_type: day.day_type,
        total_number_exercises: day.total_number_exercises,
    }));

    return (
        <div className={styles.WeekDetails_container} >
           <div className={styles.WeekDetails_container_topinfo}> 
             <span>Week {week.week_number}: {week.week_name}</span>
             <p>{week.week_description}</p>
           </div>
            <ThemeProvider theme={darkTheme}>
                <DataGrid 
                    className={styles.WeekDetails_container_dataGrid}
                    rows={rows}
                    columns={columns} 
                    paginationModel={{ page: 0, pageSize: 5 }} 
                    pageSizeOptions={[5, 10, 20]}  
                />
            </ThemeProvider>
            {week.days.map(day => (
                <DayDetails key={day.day_number} day={day}  />
            ))}
        </div>
    );
};

export default WeekDetails;
