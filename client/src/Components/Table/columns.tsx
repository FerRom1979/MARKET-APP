type IType = 'string' | 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency';
const string: IType = 'string';
const numeric: IType = 'numeric';
const currency: IType = 'currency';

const columns = [
  {
    title: 'Name',
    field: 'name',
    type: string,
  },
  {
    title: 'Description',
    field: 'description',
    type: string,
  },
  {
    title: 'Cantidad',
    field: 'quantity',
    type: numeric,
  },
  {
    title: 'Precio final',
    field: 'finalPrice',
    type: currency,
  },
  {
    title: 'Precio por mayor',
    field: 'price',
    type: currency,
  },
];

export default columns;
