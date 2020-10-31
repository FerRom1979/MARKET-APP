/* eslint-disable no-use-before-define */
import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import usesStyles from './style';

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
