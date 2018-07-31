import * as React from 'react';

import './App.css';
import { LeftBrain } from './components/left-brain';
import { RightBrain } from './components/right-brain';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React+MobX+TypeScript</h1>
        </header>
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
