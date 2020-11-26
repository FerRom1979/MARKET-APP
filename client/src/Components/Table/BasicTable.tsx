/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
/* import { useHistory } from 'react-router-dom'; */
import { TableContainer } from '@material-ui/core';
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
  /* const history = useHistory(); */
  const [apiError, setApiError] = useState<string>('');
  const [data, setData] = useState<Data[]>([]);
  const token = localStorage.getItem('token');

  // Lo que hice fue pasarle el token por parametro y ponerlo en el array  de dependencias del effect, cosa que cuando exista dispare la request
  const getData = async (bearerToken: string | null) => {
    try {
      const res = await axios.get('http://localhost:5000/products', {
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
  const closeSesion = () => {
    window.location.href = '/';
    /* setTimeout(() => {
      history.push('/');
    }, 1000); */
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
          <MaterialTable
            title="Products"
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
                      url: 'http://localhost:5000/products',
                      data: {
                        name,
                        description,
                        quantity,
                        price,
                        finalPrice,
                      },
                    }).then((res) => console.log(res.data));
                    resolve();
                  }, 1000);
                }),

              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  console.log(newData, oldData);
                  setTimeout(() => {
                    const { _id, description, finalPrice, name, price, quantity } = newData;
                    resolve();
                    axios
                      .put(`http://localhost:5000/products/${_id}`, {
                        name,
                        description,
                        quantity,
                        price,
                        finalPrice,
                      })
                      .then((res) => {
                        console.log(res);
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
                      .delete(`http://localhost:5000/products/${_id}`, {
                        headers: {
                          'Content-Type': 'application/json',
                          Authorization: token,
                        },
                      })
                      .then((res) => {
                        console.log(res);
                        getData(token);
                      });
                    resolve();
                  }, 1000);
                }),
            }}
            icons={tableIcons}
            options={{
              sorting: true,
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF',
              },
            }}
          />
        </TableContainer>
      </ThemeProvider>
      <button type="submit" onClick={closeSesion}>
        cerrar Sesion
      </button>
      <div>{apiError && <span>{apiError}</span>}</div>
    </div>
  );
};

export default BasiCTable;
