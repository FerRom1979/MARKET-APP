import React, { useMemo, useEffect, useState } from 'react';
import { Table, TableContainer, TableRow, TableBody, TableCell } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { useTable } from 'react-table';
import TableHead from '@material-ui/core/TableHead';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import COLUMNS from './columns';
import usesStyles from './style';
import { Idarkmode, Data } from '../types';

const BasiCTable: React.FC<Idarkmode> = ({ darkmode }) => {
  const classes = usesStyles();
  const [apiError, setApiError] = useState<string>('');
  const [dataApi, setDataApi] = useState<Data[]>([]);
  const getData = async () => {
    try {
      const res = await axios('http://localhost:5000/products');
      const datos = res.data;
      setDataApi(datos);
    } catch (error) {
      setApiError(`A ocurrido un error de tipo: ${error}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const RowData: Data[] = dataApi;
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => RowData, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    },
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
          <Table {...getTableProps()} aria-label="simple table" className={classes.table}>
            <TableHead className={classes.head}>
              {headerGroups.map((headerGroup) => (
                <TableRow {...headerGroup.getFooterGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <TableCell {...column.getHeaderProps()} className={classes.head}>
                      {column.render('Header')}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
      <div>{apiError && <span>{apiError}</span>}</div>
    </div>
  );
};

export default BasiCTable;
