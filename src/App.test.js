import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import reducer from './modules'

it('renders without crashing', () => {
  const store = createStore(reducer);
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
