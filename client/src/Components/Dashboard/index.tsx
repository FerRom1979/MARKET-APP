import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import usesStyles from './style';
import BasicTable from '../Table/BasicTable';
import ListTask from '../List/index';
import { Idarkmode } from '../types';

const Dashboard: React.FC<Idarkmode> = ({ darkmode }) => {
  const classes = usesStyles();
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <BasicTable darkmode={darkmode} />
          </Grid>
          <Grid item xs={2}>
            <ListTask darkmode={darkmode} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
