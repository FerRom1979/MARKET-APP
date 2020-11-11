/* eslint-disable no-use-before-define */
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Modal } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import useStyles from './style';
import { Idarkmode, Inputs } from '../types';

const ListTask: React.FC<Idarkmode> = ({ darkmode }) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [t] = useTranslation('global');
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { handleSubmit, errors, control, register } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    axios({
      method: 'POST',
      url: 'http://localhost:5000/products',
      data: {
        name: data.name,
        description: data.description,
        quantity: data.quantity,
        price: data.price,
        finalPrice: data.finalPrice,
      },
    }).then((res) => console.log(res.data));
  };
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
          name="name"
          control={control}
          label={t('list.input1-form')}
          className={classes.Controller}
          ref={register}
        />
        <span>{errors?.name?.message}</span>
        <Controller
          as={TextField}
          name="description"
          control={control}
          label={t('list.input2-form')}
          className={classes.Controller}
        />
        <span>{errors?.description?.message}</span>
        <Controller
          as={TextField}
          name="price"
          type="number"
          control={control}
          label={t('list.input3-form')}
          className={classes.Controller}
        />
        <span>{errors?.price?.message}</span>
        <Controller
          as={TextField}
          name="quantity"
          type="number"
          control={control}
          label={t('list.input4-form')}
          className={classes.Controller}
        />
        <span>{errors?.quantity?.message}</span>
        <Controller
          as={TextField}
          name="finalPrice"
          type="number"
          control={control}
          label={t('list.input5-form')}
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
          {t('list.button-form')}
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
