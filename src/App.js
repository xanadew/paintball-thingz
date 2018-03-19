import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Landing from './components/Landing.js';
import Dash from './components/Dash';
import Locator from './components/Locator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <HashRouter>
        <div>
          <Route exact path='/' component={Landing}/>
          <Route path='/dash' component={Dash}/>
          <Route path='/locator' component={Locator}/>
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
