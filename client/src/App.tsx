/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter as Router, Switch as SwitchItem, Route } from 'react-router-dom';
import SideMenu from './Components/Sidemenu/index';
import Login from './Components/LoginPage';
import Checke from './Components/CheckIn/index';

const App: React.FC = () => {
  return (
    <Router>
      <SwitchItem>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/sidemenu" component={SideMenu} />
          <Route exact path="/check" component={Checke} />
        </div>
      </SwitchItem>
    </Router>
  );
};

export default App;
