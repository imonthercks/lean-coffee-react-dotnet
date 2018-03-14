// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoard from './containers/KanbanBoard'

type Props = {
};

class App extends Component<Props> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <KanbanBoard />
      </div>
    );
  }
}

export default App;
