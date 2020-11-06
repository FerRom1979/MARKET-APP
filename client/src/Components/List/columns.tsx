/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column } from 'react-table';

interface Data {
  id: number;
  description: string;
  higherPrice: number;
  finalPrice: number;
  quantity: number;
}
const COLUMNS: Column<Data>[] = [
  {
    Header: 'Id',
    accessor: 'id',
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
    Header: 'Precio mayorista',
    accessor: 'higherPrice',
  },
  {
    Header: 'Precio final',
    accessor: 'finalPrice',
  },
];
export default COLUMNS;
