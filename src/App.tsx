import * as React from 'react';

import './App.css';
import { LeftBrain } from './components/left-brain';
import { RightBrain } from './components/right-brain';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ display: 'flex' }}>
          <LeftBrain
            title="Left Brain"
          />
          <RightBrain
            title="Right Brain"
          />          
        </div>
      </div>
    );
  }
}

export default App;
