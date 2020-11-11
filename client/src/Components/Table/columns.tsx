/* eslint-disable no-use-before-define */
/* eslint-disable react/button-has-type */
import { Button } from '@material-ui/core';
import React from 'react';
import { Column } from 'react-table';
import { Data } from '../types';

const COLUMNS: Column<Data>[] = [
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Descripcion',
    accessor: 'description',
  },
  {
    Header: 'Cantidad',
    accessor: 'quantity',
  },
  {
    Header: 'Precio final',
    accessor: 'finalPrice',
  },
  {
    Header: 'Precio por mayor',
    accessor: 'price',
  },
  {
    Header: 'Editar',
    accessor: 'editar',
    Cell: (apiData) => (
      <Button onClick={() => console.log(apiData.row.original._id)}>cargar</Button>
    ),
  },
];
export default COLUMNS;
/*  */
