import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux'

import createHistory from 'history/createBrowserHistory'

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'

import kanbanReducer from './reducers/kanban'

//import reducer from './reducers'

test('renders without crashing', () => {
// Create a history of your choosing (we're using a browser history in this case)
  const history = createHistory()

  // Build the middleware for intercepting and dispatching navigation actions
  const middleware = routerMiddleware(history)

  const target = document.getElementById('root');
  const store = createStore(
    combineReducers({
      kanban: kanbanReducer,
      router: routerReducer
    }),
    applyMiddleware(middleware)
  )

const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>
    , div
  );
  ReactDOM.unmountComponentAtNode(div);
});
