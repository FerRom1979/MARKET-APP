/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import usesStyles from './style';

const Checke: React.FC = () => {
  const classes = usesStyles();
  const history = useHistory();
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  /* const [login, setLogin] = useState<boolean>(false); */
  const signUp = async () => {
    await axios({
      method: 'POST',
      url: 'http://localhost:5000/signup/',
      data: {
        username: user,
        email,
        password,
      },
    }).then((response) => {
      console.log(response);
      if (response.status === 200) {
        /* setLogin(true); */

        history.push('/sidemenu');
      }
    });
  };
  return (
    <div>
      <Typography variant="h5" component="h2">
        Registrarse
      </Typography>
      <div className={classes.login}>
        <TextField
          variant="outlined"
          id="standard-basic"
          label="Usuario"
          type="text"
          name="username"
          onChange={(e) => setUser(e.target.value)}
          className={classes.input}
        />
        <br />

        <TextField
          variant="outlined"
          id="standard-basic"
          label="Email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
        />
        <br />
        <label>Password:</label>
        <br />
        <TextField
          variant="outlined"
          id="standard-basic"
          label="Contrasña"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
        />
        <br />
        <Button variant="contained" type="submit" onClick={signUp}>
          Registrarse
        </Button>
      </div>
    </div>
  );
};

export default Checke;
