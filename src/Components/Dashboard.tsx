/* eslint-disable no-use-before-define */
import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardHeader from './CardHeader';

const usesStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  container: {
    paddingTop: '20px',
    alignItems: 'center',
  },
  containerGrafic: {
    margin: 'auto',
  },
  typography: {
    textAlign: 'center',
  },
}));

const Dashboard: React.FC = () => {
  const classes = usesStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom className={classes.typography}>
            Titulo
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardHeader />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardHeader />
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardHeader />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
