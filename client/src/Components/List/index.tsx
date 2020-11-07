/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Modal } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useStyles from './style';

interface IBasicTable {
  darkmode: boolean;
}
type Inputs = {
  id: number;
  description: string;
  higherPrice: number;
  finalPrice: number;
  quantity: number;
  exampleRequired: string;
  message: string;
};

const ListTask: React.FC<IBasicTable> = ({ darkmode }) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [listItem, setListItem] = useState<Ilist[]>([]);
  const { handleSubmit, errors, control, register } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs, e: any) => {
    const info = data;
    setListItem([...listItem, info]);
    e.target.reset();
  };

  interface Ilist {
    id: number;
    description: string;
    higherPrice: number;
    finalPrice: number;
    quantity: number;
  }
  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Controller
          as={TextField}
          name="id"
          control={control}
          label="id"
          className={classes.Controller}
          ref={register}
          value={listItem}
        />
        <span>{errors?.id?.message}</span>
        <Controller
          as={TextField}
          name="description"
          control={control}
          label="descripcion"
          className={classes.Controller}
        />
        <span>{errors?.description?.message}</span>
        <Controller
          as={TextField}
          name="higherPrice"
          control={control}
          label="precio por mayor"
          className={classes.Controller}
        />
        <span>{errors?.higherPrice?.message}</span>
        <Controller
          as={TextField}
          name="quantity"
          control={control}
          label="cantidad"
          className={classes.Controller}
        />
        <span>{errors?.quantity?.message}</span>
        <Controller
          as={TextField}
          name="finalPrice"
          control={control}
          label="precio final"
          className={classes.Controller}
        />
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
    </div>
  );
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: '100%' }}>
        <div className={classes.buttonModal}>
          <Button type="button" onClick={handleOpen} variant="contained" color="primary">
            <SaveIcon />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ListTask;
