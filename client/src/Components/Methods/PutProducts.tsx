/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Modal } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import useStyles from './style';
import { Idarkmode, Inputs, Data } from '../types';

const PutProducts: React.FC<Idarkmode> = ({ darkmode }) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [t] = useTranslation('global');
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const { handleSubmit, errors, control, register } = useForm<Inputs>();
  const [apiError, setApiError] = useState<string>('');
  const [dataApi, setDataApi] = useState<Data[]>([]);
  const getData = async () => {
    try {
      const res = await axios('http://localhost:5000/products');
      setDataApi(res.data);
    } catch (error) {
      setApiError(`${t('basicTable.error-message')}  (${error})`);
      console.log(apiError);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(dataApi);
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    axios({
      method: 'PUT',
      url: 'http://localhost:5000/products/5faad8a1f9bd08bafce96e43',
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        finalPrice: data.finalPrice,
        quantity: data.quantity,
      },
    }).catch((err) => {
      console.log(err);
    });
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

  const bodyPut = (
    <div style={modalStyle} className={classes.paper}>
      <h3>Editar Productos</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
        <Controller
          as={TextField}
          name="name"
          value={dataApi && dataApi[8].name}
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
            {bodyPut}
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default PutProducts;
