/* eslint-disable no-unused-vars */
import { Column } from 'react-table';
import { Data } from '../types';

const COLUMNS: Column<Data>[] = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'Descripcion',
    accessor: 'description',
  },
  {
    Header: 'Precio mayorista',
    accessor: 'highePrice',
  },
  {
    Header: 'Precio final',
    accessor: 'finalPrice',
  },
];
export default COLUMNS;
