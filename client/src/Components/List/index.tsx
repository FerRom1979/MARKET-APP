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
} from '@material-ui/core';
import TableHead from '@material-ui/core/TableHead';
import useStyles from './style';

type Inputs = {
  id: number;
  description: string;
  higherPrice: number;
  finalPrice: number;
  quantity: number;
  exampleRequired: string;
  message: string;
};

const ListTask: React.FC = () => {
  const classes = useStyles();
  const [listItem, setListItem] = useState<Ilist[]>([]);
  const { handleSubmit, errors, control, register } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    const info = data;
    setListItem([...listItem, info]);
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

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
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
        </Grid>
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
      </Grid>
    </div>
  );
};

export default ListTask;
