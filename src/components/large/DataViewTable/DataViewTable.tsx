'use client'
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
  viewPath?: string;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const DataViewTable: React.FC<DataViewTableProps> = ({ data, keysToDisplay, onDelete ,viewPath }) => {

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
        {viewPath ? ( 
          <Link href={`${viewPath}/${params.row.id}`} passHref className={styles.viewButton}>
            view
          </Link>
        ) : null}
        {onDelete && (
          <div className={styles.deleteButton} onClick={() => onDelete(params.row.id)}><MdDelete size={18} /></div>
        )}
      </div>
    ),
  };

  const renderArrayCell = (value: any[]) => {
    return value.map((item: any, index: number) => (
      <div key={index}>{item}</div>
    ));
  };

  const renderExpectedDurationRange = (value: { min: number; max: number }) => {
    return `${value.min} - ${value.max}`;
  };

  const renderImageCell = (url: string) => {
    return (
      <div className={styles.cellImage_container}>
        <img className={styles.cellImage} src={url} alt="media" />
      </div>
    );
  };

  const columns: GridColDef[] = keysToDisplay.map((key) => ({
    field: key,
    headerName: key,
    flex: 1,
    renderCell: (params) => {
      if (Array.isArray(params.value)) {
        return renderArrayCell(params.value);
      } else if (typeof params.value === 'object' && params.value !== null) {
        if (key === 'expectedDurationRange') {
          return renderExpectedDurationRange(params.value);
        } else if (key === 'media' && params.value.type === 'image') {
          return renderImageCell(params.value.url);
        } else {
          return <div>{JSON.stringify(params.value)}</div>;
        }
      } else if (key === 'image' || key==='coverImage') {
        return renderImageCell(params.value);
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
