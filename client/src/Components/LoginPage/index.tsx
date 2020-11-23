/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-use-before-define */
import React, { useState /* , useEffect */ } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import usesStyles from './style';

const Login: React.FC = () => {
  const classes = usesStyles();
  const history = useHistory();
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginUserEmail, setLoginUserEmail] = useState<string>('');
  const [passwordError, setpasswordError] = useState<boolean>(false);
  /* const [errorLogin, setErrorLogin] = useState<string>(''); */
  // Esto es para chequear el token activo
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  console.log(storedJwt);
  console.log(jwt);

  /* const isLogin = () => {
    if (storedJwt === jwt) {
      setTimeout(() => {
        history.push('/sidemenu');
      }, 1000);
    }
  }; */
  const checkin = () => {
    setTimeout(() => {
      history.push('/check');
    }, 1000);
  };
  /* useEffect(() => {
    isLogin();
  }, []); */
  const getLogin = async () => {
    await axios({
      method: 'POST',
      url: 'http://localhost:5000/signin',
      data: {
        email: loginUserEmail,
        password: loginPassword,
      },
    })
      .then((response) => {
        console.log(response);

        // Aca se guarda el token en el storage y en el state
        if (response.status === 200) {
          setTimeout(() => {
            history.push('/sidemenu');
          }, 1000);
        }
        localStorage.setItem('token', response.data.token);

        setJwt(response.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h2">
        Iniciar Sesion con su correo
      </Typography>
      <div className={classes.login}>
        <TextField
          variant="outlined"
          id="standard-basic"
          label="Email"
          type="email"
          name="email"
          onChange={(e) => setLoginUserEmail(e.target.value)}
          className={classes.input}
        />

        <TextField
          variant="outlined"
          id="standard-basic"
          label="contraseña"
          type="password"
          name="password"
          onChange={(e) =>
            e.target.value.length < 6
              ? setpasswordError(true)
              : (setLoginPassword(e.target.value), setpasswordError(false))
          }
          className={classes.input}
        />
        <div>{passwordError && <span>La contraseña debe tener almenos 6 caracters</span>}</div>
        <br />
        <div>
          <Button variant="contained" type="submit" onClick={getLogin} className={classes.button}>
            Iniciar Sesion
          </Button>
        </div>
        <br />
        <div>
          <Button variant="contained" type="submit" onClick={checkin} className={classes.button}>
            Registrarse
          </Button>
        </div>
        <br />
      </div>
      {/* <div>{errorLogin && <span>{errorLogin}</span>}</div> */}
    </div>
  );
};

export default Login;
