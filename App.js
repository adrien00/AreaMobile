import React from 'react';
import { Router, Scene } from 'react-native-router-flux'

import Login from './src/Nav/Login'

const App = () => {
  return (
    <Router>
      <Scene key="login" component={Login} initial />
    </Router>
  );
}

export default App;
