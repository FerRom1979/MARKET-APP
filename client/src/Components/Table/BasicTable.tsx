/* eslint-disable no-restricted-imports */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-use-before-define
import React, { useMemo } from 'react';
import { Table, TableContainer, TableRow, TableBody, TableCell } from '@material-ui/core';
import Paper from '@material-ui/core/Paper/Paper';
import { useTable } from 'react-table';
import TableHead from '@material-ui/core/TableHead/TableHead';
import COLUMNS from './columns';
import usesStyles from './style';

const BasiCTable: React.FC = () => {
  const classes = usesStyles();
  // eslint-disable-next-line no-use-before-define
  const RowData: Data[] = [
    {
      id: '1',
      nombre: 'Arroz Gallo',
      descripcion: 'Arroz blanco,grano largo,cocido',
      precioMayorista: 50,
      precioFinal: 100,
    },
    {
      id: '2',
      nombre: 'Arroz Moneda',
      descripcion: 'Arroz integral,grano largo,crudo',
      precioMayorista: 30,
      precioFinal: 70,
    },
  ];
  interface Data {
    id: string;
    nombre: string;
    descripcion: string;
    precioFinal: number;
    precioMayorista: number;
  }
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => RowData, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <TableContainer component={Paper}>
      <Table {...getTableProps()} aria-label="simple table" className={classes.table}>
        <TableHead className={classes.head}>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getFooterGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
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
  );
};

export default BasiCTable;
