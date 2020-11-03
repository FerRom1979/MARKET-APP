/* eslint-disable no-use-before-define */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React, { useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  }),
);

const ListData: React.FC<IlistFormPros> = () => {
  const classes = useStyles();

  const newList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormBubbles(e.bubbles);

    setListItem({
      id: newListItem.id,
      description: newListItem.description,
      quantity: newListItem.quantity,
      higherPrice: newListItem.higherPrice,
      finalPrice: newListItem.higherPrice,
    });
  };
  const [formBubbles, setFormBubbles] = useState(false);
  const [newListItem, setNewListItem] = useState({
    id: 0,
    description: '',
    quantity: 0,
    higherPrice: 0,
    finalPrice: 0,
  });
  const [listItem, setListItem] = useState({
    id: 0,
    description: '',
    quantity: 0,
    higherPrice: 0,
    finalPrice: 0,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewListItem({
      ...newListItem,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={(e) => newList(e)}>
        <input type="text" placeholder="Id" name="id" onChange={handleInputChange} />
        <input
          type="text"
          placeholder="Descripcion"
          name="description"
          onChange={handleInputChange}
        />
        <input type="text" placeholder="Cantidad" name="quantity" onChange={handleInputChange} />
        <input
          type="text"
          placeholder="Precio mayorista"
          name="higherPrice"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Precio final"
          name="finalPrice"
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
      {formBubbles !== false && (
        <>
          <List>
            <ul className={classes.ul}>
              {listItem.map((item) => (
                <ListItem key={`${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </List>
        </>
      )}
    </div>
  );
};
interface IlistFormPros {
  id: number;
  Description: string;
  Cantidad: string;
  PrecioMayorista: number;
  PrecioFinal: number;
}

export default ListData;
