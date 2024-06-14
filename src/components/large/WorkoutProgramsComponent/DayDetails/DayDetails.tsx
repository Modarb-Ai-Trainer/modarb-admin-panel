import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from "./DayDetails.module.css";
import { ExerciseDelete } from '@/app/Actions/DeleteActions';
import DataViewTable from '../../DataViewTable/DataViewTable';
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
   
    const rows = day.exercises.map((exercise, index) => ({
        label: `Exercise ${index + 1}`,
        id: exercise,
    }));

    console.log(rows)

    return (
        <div className={styles.DayDetails_container}>
            <div className={styles.DayDetails_container_topinfo}>
                <h3>Day {day.day_number}</h3>
                <p>Type: {day.day_type}</p>
                <p>Total Exercises: {day.total_number_exercises}</p>
            </div>
             <DataViewTable
                    data={rows}
                    keysToDisplay={[
                        'label',
                        'id',
                    ]}
                    onDelete={ExerciseDelete}
                    viewPath='/exercises/SingleElement'
      
              /> 
        </div>
    );
};

export default DayDetails;
