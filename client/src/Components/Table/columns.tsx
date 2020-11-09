/* eslint-disable no-unused-vars */
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
];
export default COLUMNS;
