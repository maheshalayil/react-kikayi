import React, { Component } from 'react';
import { render } from 'react-dom';
import { Categories } from './src/components/';
import { Provider } from 'react-redux';
import { makeStore } from './src/store/'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Categories />
      </div>
    );
  }
}

render(<Provider store={makeStore()}>
      <App />
    </Provider>, document.getElementById('root'));
