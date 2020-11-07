/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import {
  Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Grid,
  Modal,
} from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
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

  // eslint-disable-next-line no-use-before-define
  const rows = listItem;
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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.head}>
                  <TableRow>
                    <TableCell className={classes.row}>Id</TableCell>
                    <TableCell align="right" className={classes.row}>
                      Descripcion
                    </TableCell>
                    <TableCell align="right" className={classes.row}>
                      Precio por mayor
                    </TableCell>
                    <TableCell align="right" className={classes.row}>
                      Precio Final
                    </TableCell>
                    <TableCell align="right" className={classes.row}>
                      Cantidad
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.higherPrice}</TableCell>
                      <TableCell align="right">{row.finalPrice}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.buttonModal}>
              <Button type="button" onClick={handleOpen} variant="contained" color="primary">
                Abrir Formulario
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
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default ListTask;
