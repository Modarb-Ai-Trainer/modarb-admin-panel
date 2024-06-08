'use client'
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "./DayDetails.module.css";
interface Exercise {
    id:String;
}

interface Day {
    day_number: number;
    day_type: string;
    total_number_exercises: number;
    exercises: Exercise[];
}

interface DayDetailsProps {
    day: Day;
}
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const DayDetails: React.FC<DayDetailsProps>  = ({ day }) => {
    const columns = [
        { field: 'exercise', headerName: 'Exercise', width: 200 },
    ];

    const rows = day.exercises.map((exercise, index) => ({
        id: index,
        exercise: exercise,
    }));

    return (
        <div className={styles.DayDetails_container}>
            <div className={styles.DayDetails_container_topinfo}>
                <h3>Day {day.day_number}</h3>
                <p>Type: {day.day_type}</p>
                <p>Total Exercises: {day.total_number_exercises}</p>
            </div>
            <ThemeProvider theme={darkTheme}>
                <DataGrid 
                className={styles.DayDetails_container_dataGrid}
                rows={rows}
                columns={columns} 
                paginationModel={{ page: 0, pageSize: 5 }} 
                pageSizeOptions={[5, 10, 20]}  />
             </ThemeProvider>
        </div>
    );
};

export default DayDetails;
