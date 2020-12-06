/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { Button, TableContainer } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import MaterialTable from 'material-table';
import { Idarkmode, Data } from '../types';
import columns from './columns';
import tableIcons from './icons';

const BasiCTable: React.FC<Idarkmode> = ({ darkmode }) => {
  const [t] = useTranslation('global');
  const [apiError, setApiError] = useState<string>('');
  const [data, setData] = useState<Data[]>([]);
  const token = localStorage.getItem('token');

  // Lo que hice fue pasarle el token por parametro y ponerlo en el array  de dependencias del effect, cosa que cuando exista dispare la request
  const getData = async (bearerToken: string | null) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_NOT_SECRET_CODE}/products`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: bearerToken,
        },
      });

      setData(res.data);
    } catch (error) {
      setApiError(`${t('basicTable.error-message')}  (${error})`);
    }
  };
  useEffect(() => {
    // Aca le pase el token
    getData(token);
  }, [token]);

  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    },
  });
  const singOff = () => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.location.href = '/';
  };
  return (
    <ThemeProvider theme={theme}>
      <TableContainer component={Paper}>
        <MaterialTable
          title="Productos"
          columns={columns}
          data={data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  setData([...data, newData]);
                  const { description, finalPrice, name, price, quantity } = newData;
                  resolve();
                  axios({
                    method: 'POST',
                    url: `${process.env.REACT_APP_NOT_SECRET_CODE}/products`,
                    data: {
                      name,
                      description,
                      quantity,
                      price,
                      finalPrice,
                    },
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: token,
                    },
                  });
                }, 1000);
              }),

            onRowUpdate: (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  const { _id, description, finalPrice, name, price, quantity } = newData;
                  resolve();
                  axios({
                    method: 'PUT',
                    url: `${process.env.REACT_APP_NOT_SECRET_CODE}/products/${_id}`,
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: token,
                    },
                    data: {
                      name,
                      description,
                      quantity,
                      price,
                      finalPrice,
                    },
                  }).then(() => {
                    getData(token);
                  });
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  const { _id } = oldData;
                  resolve();
                  axios
                    .delete(`${process.env.REACT_APP_NOT_SECRET_CODE}/products/${_id}`, {
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                      },
                    })
                    .then(() => {
                      getData(token);
                    });
                  resolve();
                }, 1000);
              }),
          }}
          icons={tableIcons}
          options={{
            actionsColumnIndex: -1,
            sorting: true,
            headerStyle: {
              backgroundColor: '#673ab7',
              color: '#FFF',
            },
          }}
          localization={{
            header: {
              actions: 'Acciones',
            },
          }}
        />
      </TableContainer>
      <Button type="submit" onClick={singOff} variant="contained" color="default">
        Cerrar Sesion
      </Button>
      <div>{apiError && <span>{apiError}</span>}</div>
    </ThemeProvider>
  );
};

export default BasiCTable;
