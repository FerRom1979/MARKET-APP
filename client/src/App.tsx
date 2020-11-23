/* eslint-disable no-use-before-define */
import React from 'react';
import { BrowserRouter as Router, Switch as SwitchItem, Route } from 'react-router-dom';
import SideMenu from './Components/Sidemenu/index';
import Login from './Components/LoginPage';

const App: React.FC = () => {
  return (
    <Router>
      <SwitchItem>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/sidemenu" component={SideMenu} />
        </div>
      </SwitchItem>
    </Router>
  );
};

export default App;
