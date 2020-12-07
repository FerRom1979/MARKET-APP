/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter as Router, Switch as SwitchItem, Route } from 'react-router-dom';
import Sidemenu from './Components/Sidemenu/index';
import Login from './Components/LoginPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <SwitchItem>
          <Route exact path="/" component={Login} />
          <Route exact path="/listProducts" component={Sidemenu} />
        </SwitchItem>
      </Router>
    </div>
  );
};

export default App;
