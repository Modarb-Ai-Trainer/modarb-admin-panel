'use client'
import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Link from 'next/link';
import styles from './DataViewTable.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdDelete } from "react-icons/md";

interface DataRow {
  [key: string]: any;
}

interface DataViewTableProps {
  data: DataRow[];
  keysToDisplay: string[];
  onDelete?: (id: number) => void;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const DataViewTable: React.FC<DataViewTableProps> = ({ data, keysToDisplay, onDelete }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [forceRerender, setForceRerender] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setForceRerender(prevState => !prevState);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    renderCell: (params) => (
      <div className={styles.cellAction}>
        <Link href={`/exercises/SingleElement/${params.row.id}`} passHref className={styles.viewButton}>
          view
        </Link>
        {onDelete && (
          <div className={styles.deleteButton} onClick={() => onDelete(params.row.id)}><MdDelete size={18} /></div>
        )}
      </div>
    ),
  };

  const columns: GridColDef[] = keysToDisplay.map((key) => ({
    field: key,
    headerName: key.toUpperCase(),
    flex: 1,
    renderCell: (params) => {
      if (key === 'image') {
        return (
          <div className={styles.cellImage_container}>
            <img className={styles.cellImage} src={params.value} alt="avatar" />
          </div>
        );
      } else {
        return <div>{params.value}</div>;
      }
    },
  }));

  const gridColumns = onDelete ? [...columns, actionColumn] : columns;

  return (
    <div className={styles.dataView}>
      <ThemeProvider theme={darkTheme}>
        <div className={styles.dataView_dataTable}>
          <DataGrid  
            key={forceRerender.toString()} 
            className={styles.dataView_dataTable_dataGrid}
            rows={data}
            columns={gridColumns}
            checkboxSelection
            autoHeight
          />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default DataViewTable;
