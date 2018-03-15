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
        <header className="App-header">
          <h1 className="App-title">Welcome to Lean Coffee</h1>
        </header>
        <KanbanBoard />
      </div>
    );
  }
}

export default App;
