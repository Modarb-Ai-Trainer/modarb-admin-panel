'use client'
import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import styles from './AdminTable.module.css'
const AdminTable = () => {
  const data = [
    { id: 1, AdminName: 'John', Gmail: 'john@gmail.com', permission: 'super Admin' },
    { id: 2, AdminName: 'John', Gmail: 'john@gmail.com', permission: 'super Admin' },
    { id: 3, AdminName: 'John', Gmail: 'john@gmail.com', permission: 'super Admin' },
    { id: 4, AdminName: 'John', Gmail: 'john@gmail.com', permission: 'super Admin' },
    { id: 5, AdminName: 'John', Gmail: 'john@gmail.com', permission: 'super Admin' },

  ];


  return (
    <div className={styles.AdminTable}style={{ height: 400, width: '100%' , fill:'white' }}>
     <style>
        {`
          .MuiDataGrid-root {
            border: none !important;
          }

          .MuiDataGrid-footer {
            background-color: #5E34E8 !important;
            color: white !important;
          }

          .MuiDataGrid-root,
          .MuiDataGrid-colCell,
          .MuiDataGrid-cell,
          .MuiDataGrid-toolbarContainer ,
          .MuiDataGrid-toolbarSelect 
          .MuiDataGrid-row,
          .MuiButton-root,
          .MuiTypography-root {
            color: white !important;
          }
         
        `}
      </style>
      <DataGrid 
      sx={{
        margin:2,   
       
            
      }}
      
        rows={data} 
        columns={[
          { field: 'id', headerName: 'ID', width: 70},
          { field: 'AdminName', headerName: 'AdminName', width: 130 },
          { field: 'Gmail', headerName: 'Gmail', width: 170 },
          { field: 'permission', headerName: 'permission',  width: 120 },
        ]}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default AdminTable;
