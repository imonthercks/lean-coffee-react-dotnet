import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'

import reducer from './modules'

import './index.css';

const target = document.getElementById('root');
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />
      </div>
  </Provider>,
  target
);

registerServiceWorker();
