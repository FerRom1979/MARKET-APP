/* eslint-disable no-use-before-define */
import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CardHeader from '../cardHeader/index';
import usesStyles from './style';
import BasicTable from '../Table/BasicTable';
import ListTask from '../List/index';

interface IDashboard {
  darkmode: boolean;
}

const Dashboard: React.FC<IDashboard> = ({ darkmode }) => {
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
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom className={classes.typography}>
              Titulo
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <BasicTable darkmode={darkmode} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ListTask darkmode={darkmode} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CardHeader />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
