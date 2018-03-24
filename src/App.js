// @flow
import React, { Component } from 'react';
import './App.css';
import RouteContainer from './containers/RouteContainer';
//import KanbanBoard from './containers/KanbanBoard'

type Props = {
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <RouteContainer />
      </div>
    );
  }
}

export default App;
