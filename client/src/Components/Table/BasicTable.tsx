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
  const [dataApi, setDataApi] = useState<Data[]>([]);
  const getData = async () => {
    try {
      const res = await axios('http://localhost:5000/products');
      setDataApi(res.data);
    } catch (error) {
      setApiError(`${t('basicTable.error-message')}  (${error})`);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
          <MaterialTable
            title="Products"
            columns={columns}
            data={dataApi}
            icons={tableIcons}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    // setData([...data, newData]);
                    console.log(newData);
                    resolve();
                  }, 1000);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    // const dataUpdate = [...data];
                    // const index = oldData.tableData.id;
                    // dataUpdate[index] = newData;
                    // setData([...dataUpdate]);
                    console.log({ newData, oldData });
                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    // const dataDelete = [...data];
                    // const index = oldData.tableData.id;
                    // dataDelete.splice(index, 1);
                    // setData([...dataDelete]);
                    console.log(oldData);
                    resolve();
                  }, 1000);
                }),
            }}
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
      <div>{apiError && <span>{apiError}</span>}</div>
    </div>
  );
};

export default BasiCTable;
