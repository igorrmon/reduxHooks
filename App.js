import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import TelaInterna from './telaInterna';

function App() {
  return (
    <Provider store={store}>
      <TelaInterna />
    </Provider>
  );
}


export default App;
