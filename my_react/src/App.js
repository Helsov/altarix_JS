import React, { Component } from 'react';
import Header from './components/componentHeader/Header';
import Message from './components/componentMessage/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header/>
          <Message/>
        </div>
      </div>
    );
  }
}

export default App;
