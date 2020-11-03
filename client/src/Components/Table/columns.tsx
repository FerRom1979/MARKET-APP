/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column } from 'react-table';

interface Data {
  id: string;
  nombre: string;
  descripcion: string;
  precioFinal: number;
  precioMayorista: number;
}
const COLUMNS: Column<Data>[] = [
  {
    Header: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Nombre',
    accessor: 'nombre',
  },
  {
    Header: 'Descripcion',
    accessor: 'descripcion',
  },
  {
    Header: 'Precio mayorista',
    accessor: 'precioMayorista',
  },
  {
    Header: 'Precio final',
    accessor: 'precioFinal',
  },
];
export default COLUMNS;
