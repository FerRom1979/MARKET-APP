/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import usesStyles from './style';

const Login: React.FC = () => {
  const classes = usesStyles();
  const history = useHistory();
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginUserEmail, setLoginUserEmail] = useState<string>('');
  const [login, setLogin] = useState<boolean>(true);
  const [passwordError, setpasswordError] = useState<boolean>(false);
  const [errorLogin, setErrorLogin] = useState<string>('');
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);

  if (jwt) {
    setTimeout(() => {
      history.push('/sidemenu');
    }, 1000);
  }

  const getLogin = async () => {
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:5000/signin',
        data: {
          email: loginUserEmail,
          password: loginPassword,
        },
      }).then((response) => {
        // Aca se guarda el token en el storage y en el state
        if (response.status === 200) {
          setLogin(true);
          setTimeout(() => {
            history.push('/sidemenu');
          });
          localStorage.setItem('token', response.data.token);
          setJwt(response.data.token);
        }
        return response;
      });
    } catch (error) {
      if (error) {
        setErrorLogin(`El email o la contraseña son incorrectas`);
      }
    }
  };
  const signUp = async () => {
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:5000/signup/',
        data: {
          username: user,
          email,
          password,
        },
      }).then((response) => {
        if (response.status === 200) {
          setLogin(true);
          setTimeout(() => {
            history.push('/sidemenu');
          }, 1000);
          localStorage.setItem('token', response.data.token);
          setJwt(response.data.token);
        }
      });
    } catch (error) {
      if (error) {
        setErrorLogin(`El email o la contraseña son incorrectas`);
      }
    }
  };
  const inputProps = {
    autoFocus: true,
    required: true,
  };
  return (
    <Grid container>
      {login ? (
        <>
          <Paper className={classes.login}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                  Iniciar Sesion Con Su Email
                </Typography>
                <TextField
                  required
                  inputProps={inputProps}
                  variant="outlined"
                  id="standard-basic"
                  label="Email"
                  type="email"
                  name="email"
                  onChange={(e) => setLoginUserEmail(e.target.value)}
                  className={classes.input}
                />

                <TextField
                  required
                  variant="outlined"
                  id="standard-basic"
                  label="contraseña"
                  autoComplete="current-password"
                  type="password"
                  name="password"
                  onChange={(e) =>
                    e.target.value.length < 6
                      ? setpasswordError(true)
                      : (setLoginPassword(e.target.value), setpasswordError(false))
                  }
                  className={classes.input}
                />
                <div>
                  {passwordError && (
                    <span className={classes.span}>
                      La contraseña debe tener almenos 6 caracteres
                    </span>
                  )}
                </div>
                <br />
                <div>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={getLogin}
                    className={classes.button}
                  >
                    Iniciar Sesion
                  </Button>
                </div>
                <br />
                <div>
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={() => setLogin(false)}
                    className={classes.button}
                  >
                    Registrarse
                  </Button>
                </div>
                <br />
                <div>{errorLogin && <span className={classes.span}>{errorLogin}</span>}</div>
              </Grid>
            </Grid>
          </Paper>
        </>
      ) : (
        <Paper className={classes.login}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                Complete los datos
              </Typography>
              <TextField
                required
                inputProps={inputProps}
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
                required
                variant="outlined"
                id="standard-basic"
                label="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input}
              />
              <br />
              <TextField
                required
                variant="outlined"
                id="standard-basic"
                label="Contraseña"
                type="password"
                name="password"
                onChange={(e) =>
                  e.target.value.length < 6
                    ? setpasswordError(true)
                    : (setPassword(e.target.value), setpasswordError(false))
                }
                className={classes.input}
              />
              <br />
              <div>
                {passwordError && (
                  <span className={classes.span}>
                    La contraseña debe tener un minimo de 6 caracteres
                  </span>
                )}
              </div>
              <br />
              <div>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={signUp}
                  className={classes.button}
                >
                  Registrarse
                </Button>
              </div>
              <br />
              <div>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => setLogin(true)}
                  className={classes.button}
                >
                  Volver a inicio
                </Button>
              </div>
              <div>{errorLogin && <span className={classes.span}>{errorLogin}</span>}</div>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default Login;
