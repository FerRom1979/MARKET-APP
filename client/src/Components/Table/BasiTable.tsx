/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-use-before-define
import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import COLUMNS from './columns';

const BasiCTable: React.FC = () => {
  const Data = [
    {
      id: '1',
      nombre: 'fer',
      desc: 'raro',
      precioMayorista: ' mayorista',
      re: 'fernando',
    },
    {
      id: '2',
      nombre: 'fersss',
      desc: 'rarossss',
      precioMayorista: ' mayoristasssss',
      re: 'fernando',
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => Data, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getFooterGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasiCTable;
