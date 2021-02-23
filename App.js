import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import SelectServer from './src/Nav/SelectServer'
import Login from './src/Nav/Login'

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="selectServer" component={SelectServer} initial />
        <Scene key="login" component={Login} />
      </Scene>
    </Router>
  );
}

export default App;
