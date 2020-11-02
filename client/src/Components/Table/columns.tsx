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
    Header: 'Preciomayorista',
    accessor: 'precioMayorista',
  },
  {
    Header: 'Preciofinal',
    accessor: 'precioFinal',
  },
];
export default COLUMNS;
