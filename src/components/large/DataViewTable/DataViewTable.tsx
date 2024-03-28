'use client'
import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';
import styles from './DataViewTable.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Exercise {
  id: number;
  name: string;
  avatar: string;
  category: string;
  status: string;
}

interface DataViewTableProps {
  data: Exercise[];
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const DataViewTable: React.FC<DataViewTableProps> = ({ data }) => {
  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => (
      <div className={styles.cellAction}>
        <Link href={`/exercises/SingleElement/${params.row.id}`} passHref className={styles.viewButton}>
          view
        </Link>
        <div className={styles.deleteButton}>delete</div>
      </div>
    ),
  };

  // iterate over keys of data object
  const columns: GridColDef[] = Object.keys(data[0]).map((key) => ({
    field: key,
    headerName: key.toUpperCase(),
    width: 150,
  }));

  columns.forEach((column) => {
    if (column.field === 'image') {
      column.renderCell = (params) => (
        <div className={styles.cellImage_container}>
          <img className={styles.cellImage} src={params.value} alt="avatar" />
        </div>
      );
    }
    if (column.field === 'status') {
      column.renderCell = (params) => (
        <div className={`${styles.cellWithStatus} ${params.value}`}>
          {params.value}
        </div>
      );
    }
  });

  return (
    <div className={styles.dataView}>
      <ThemeProvider theme={darkTheme}>
        <div className={styles.dataView_dataTable}>
          <DataGrid
            className={styles.dataView_dataTable_dataGrid}
            rows={data}
            columns={[...columns, actionColumn]}
            checkboxSelection
          />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default DataViewTable;
