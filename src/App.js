// @flow
import React, { Component } from 'react';
import './App.css';
import KanbanBoard from './containers/KanbanBoard'

type Props = {
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <KanbanBoard />
      </div>
    );
  }
}

export default App;
