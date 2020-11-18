/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
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
  const [apiError, setApiError] = useState<string>('');
  const [data, setData] = useState<Data[]>([]);
  const getToken = () => {
    const token = localStorage.getItem('my-token');
    console.log(token);

    if (token) {
      try {
        axios.get('http://localhost:5000/products/', {
          headers: { 'x-access-token': token },
        });
        setData(data);
      } catch (error) {
        setApiError(`${t('basicTable.error-message')}  (${error})`);
      }
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    },
  });
  const closeSesion = () => {
    window.location.href = './';
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
                        /* getData(); */
                      });
                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    const { _id } = oldData;
                    resolve();
                    axios.delete(`http://localhost:5000/products/${_id}`).then((res) => {
                      console.log(res);
                      /*  getData(); */
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
