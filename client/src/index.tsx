/* eslint-disable no-use-before-define */
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import { ThemeProvider } from '@material-ui/core';
import App from './App';
import reportWebVitals from './reportWebVitals';
import globalEs from './Translations/es/global.json';
import globalEn from './Translations/en/global.json';
import theme from './helpers/theme';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: globalEs,
    },
    en: {
      global: globalEn,
    },
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
