import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import SelectServer from './src/Nav/SelectServer'
import Login from './src/Nav/Login'
import Register from './src/Nav/Register'
import Home from './src/Nav/Home'

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="selectServer" component={SelectServer} initial />
        <Scene key="login" component={Login} />
        <Scene key="register" component={Register} />
        <Scene key="home" component={Home} />
      </Scene>
    </Router>
  );
}

export default App;
