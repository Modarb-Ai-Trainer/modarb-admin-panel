'use client';
import React from 'react';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import WeekDetails from '../WeekDetails/WeekDetails';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SingleElementContainer from '@/components/small/SingleElementContainer/SingleElementContainer';
import styles from './ProgramDetails.module.css'
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

interface ProgramDetailsProps {
    program: {
        id: string;
        name: string;
        description: string;
        created_by: string;
        fitness_level: string;
        fitness_goal: string;
        place: string;
        min_per_day: number;
        total_number_days: number;
        template_weeks: Array<{
            week_number: number;
            week_name: string;
            week_description: string;
            days: Array<{
                day_number: number;
                day_type: string;
                total_number_exercises: number;
                exercises: string[];
            }>;
        }>;
    };
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ program }) => {
    const columns: GridColDef[] = [
        { field: 'week_number', headerName: 'Week Number', width: 150 },
        { field: 'week_name', headerName: 'Week Name', width: 200 },
        { field: 'week_description', headerName: 'Week Description', width: 300 },
    ];

    const rows: GridRowsProp = program.template_weeks.map(week => ({
        id: week.week_number,
        week_number: week.week_number,
        week_name: week.week_name,
        week_description: week.week_description,
    }));

    return (
        <div  className={styles.ProgramDetailsContainer}>
            <div className={styles.ProgramDetailsContainer_generalInfo}>
                <SingleElementContainer
                updateTitle={`workout/ ${program.id}`}
                data={program}
                keysToDisplay={['id','name', 'description',  'fitness_level', 'fitness_goal','place','min_per_day','total_number_days']}     
                />
            </div>
          
           

            <div className={styles.ProgramDetailsContainer_template}>
                <span className={styles.ProgramDetailsContainer_template_title}>Template Weeks</span>
                <ThemeProvider theme={darkTheme}>
                    <DataGrid 
                        className={styles.ProgramDetailsContainer_template_dataGrid}
                        rows={rows} 
                        columns={columns} 
                        paginationModel={{ page: 0, pageSize: 5 }} 
                        pageSizeOptions={[5, 10, 20]} 
                    />
                </ThemeProvider>
            </div>

                {program.template_weeks.map(week => (
                    <WeekDetails key={week.week_number} week={week} />
                ))}

           
        </div>
    );
};

export default ProgramDetails;
