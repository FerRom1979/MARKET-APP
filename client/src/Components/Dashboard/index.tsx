/* eslint-disable no-use-before-define */
import React from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardHeader from '../cardHeader/index';
import usesStyles from './style';

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
        <Grid item xs={12} sm={4}>
          <CardHeader />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardHeader />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CardHeader />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
