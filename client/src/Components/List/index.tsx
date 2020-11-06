/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React, { useState, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Table, TableContainer, TableRow, TableBody, TableCell } from '@material-ui/core';
import { useTable } from 'react-table';
import TableHead from '@material-ui/core/TableHead';
import COLUMNS from './columns';
import useStyles from './style';

type Inputs = {
  id: number;
  description: string;
  higherPrice: number;
  finalPrice: number;
  quantity: number;
  exampleRequired: string;
  message: string;
};

const ListTask: React.FC = () => {
  const classes = useStyles();
  const [listItem, setListItem] = useState<Ilist[]>([]);
  const { handleSubmit, errors, control } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const info = data;
    setListItem([info]);
  };
  interface Ilist {
    id: number;
    description: string;
    higherPrice: number;
    finalPrice: number;
    quantity: number;
  }
  // eslint-disable-next-line no-use-before-define
  const RowData: Ilist[] = listItem;

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => RowData, []);
  const tableInstance = useTable({
    columns,
    data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Controller as={TextField} name="id" control={control} label="id" />
        <span>{errors?.id?.message}</span>
        <Controller as={TextField} name="description" control={control} label="descripcion" />
        <span>{errors?.description?.message}</span>
        <Controller as={TextField} name="higherPrice" control={control} label="precio por mayor" />
        <span>{errors?.higherPrice?.message}</span>
        <Controller as={TextField} name="quantity" control={control} label="cantidad" />
        <span>{errors?.quantity?.message}</span>
        <Controller as={TextField} name="finalPrice" control={control} label="precio final " />
        <span>{errors?.finalPrice?.message}</span>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
        >
          Cagar
        </Button>
      </form>
      <TableContainer>
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
    </div>
  );
};

export default ListTask;
