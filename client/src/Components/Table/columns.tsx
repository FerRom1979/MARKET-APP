type IType = 'string' | 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency';
const string: IType = 'string';
const numeric: IType = 'numeric';
const currency: IType = 'currency';

const columns = [
  {
    title: 'Producto',
    field: 'name',
    type: string,
  },
  {
    title: 'Descripcion',
    field: 'description',
    type: string,
  },
  {
    title: 'Cantidad',
    field: 'quantity',
    type: numeric,
  },
  {
    title: 'Precio x mayor',
    field: 'price',

    type: currency,
  },
  {
    title: 'Precio final',
    field: 'finalPrice',
    type: currency,
  },
];

export default columns;
