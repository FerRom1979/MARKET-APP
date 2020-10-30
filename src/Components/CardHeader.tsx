/* eslint-disable no-use-before-define */
import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const usesStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    background: 'blue',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
}));
const CardHeader: React.FC = () => {
  const classes = usesStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Titulo card</Typography>
        <Typography className={classes.text}>text card</Typography>
      </CardContent>
    </Card>
  );
};

export default CardHeader;
