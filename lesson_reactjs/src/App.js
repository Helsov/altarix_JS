import React, { Component } from 'react';
import Header from '../src/components/header/Header';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
