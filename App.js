import React from 'react';
import { Provider } from 'react-redux';

import store from './src/redux/store';

import Intern from './src/intern';

function App() {
  return (
    <Provider store={store}>
      <Intern />
    </Provider>
  );
}


export default App;
