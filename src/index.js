import React from 'react';
import { render } from 'react-dom';
import {  App } from './components/';
import { Provider } from 'react-redux';
import { makeStore } from './store/'

render(<Provider store={makeStore()}>
      <App />
    </Provider>, document.getElementById('root'));
