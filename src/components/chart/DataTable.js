import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'S. No', width: 70 },
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 90,
  },
  {
    field: 'unitNo',
    headerName: 'Unit No.',
    type: 'number',
    width: 120,
  },
  {
    field: 'lastEdit',
    headerName: 'Last Edit',
    type: 'date',
    width: 150,
  },
];

const rows = [
  { id: 1, date: 2000-10-17, unitNo: '101', lastEdit: 2000-10-27 },
  { id: 2, date: 2000-10-17, unitNo: '102', lastEdit: 2000-10-27 },
  { id: 3, date: 2000-10-17, unitNo: '103', lastEdit: 2000-10-29 },
  { id: 4, date: 2000-10-17, unitNo: '104', lastEdit: 2000-10-20 },
  { id: 5, date: 2000-10-17, unitNo: '105', lastEdit: 2000-10-21 },
  { id: 6, date: 2000-10-17, unitNo: '106', lastEdit: 2000-10-24 },
  { id: 7, date: 2000-10-17, unitNo: '107', lastEdit: 2000-10-25 },
  { id: 8, date: 2000-10-17, unitNo: '108', lastEdit: 2000-10-29 },
  { id: 9, date: 2000-10-17, unitNo: '109', lastEdit: 2000-10-21 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
