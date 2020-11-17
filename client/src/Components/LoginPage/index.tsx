/* eslint-disable no-shadow */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import axios from 'axios';
import usesStyles from './style';

const Login: React.FC = () => {
  const classes = usesStyles();
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');
  const [loginUserEmail, setLoginUserEmail] = useState<string>('');
  const [login, setLogin] = useState<boolean>(true);
  const [passwordError, setpasswordError] = useState<boolean>(false);
  /* const [errorLogin, setErrorLogin] = useState<string>(''); */
  const [user, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const getLogin = async () => {
    await axios({
      method: 'POST',
      url: 'http://localhost:5000/signin',
      data: {
        name: loginUsername,
        email: loginUserEmail,
        password: loginPassword,
      },
    }).catch((err) => {
      console.log(err);
    });
  };
  const sinUp = async () => {
    await axios({
      method: 'POST',
      url: 'http://localhost:5000/signup/',
      data: {
        username: user,
        email,
        password,
      },
    }).then((response) => {
      console.log(response.status);

      if (response.status === 200) {
        setLogin(true);
      }
    });
  };

  return (
    <div className={classes.root}>
      {login ? (
        <>
          <div className={classes.login}>
            <label>Usuario:</label>
            <br />
            <input
              type="text"
              name="username"
              placeholder="Ingrese su usuario"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <br />
            <label>Email:</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Ingrese su mail"
              onChange={(e) => setLoginUserEmail(e.target.value)}
            />
            <br />
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              onChange={(e) =>
                e.target.value.length < 6
                  ? setpasswordError(true)
                  : (setLoginPassword(e.target.value), setpasswordError(false))
              }
            />
            <div>{passwordError && <span>La contraseña deve tener almenos 6 caracters</span>}</div>
            <br />
            <button type="submit" onClick={getLogin}>
              Iniciar Sesion
            </button>
            <button type="submit" onClick={() => setLogin(false)}>
              Registrarte
            </button>
          </div>
          {/* <div>{errorLogin && <span>{errorLogin}</span>}</div> */}
        </>
      ) : (
        <div className={classes.login}>
          <label>Usuario:</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Nombre de Usuario"
            onChange={(e) => setUser(e.target.value)}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" onClick={sinUp}>
            Registrarce
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
