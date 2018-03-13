import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const target = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <div>
        <App />
      </div>
  </Provider>,
  target
);

registerServiceWorker();
