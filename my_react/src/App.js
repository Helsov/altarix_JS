import React, { Component } from 'react';
import Header from './components/componentHeader/Header';
import Message from './components/componentMessage/Message';
import dbMessage from './components/componentsDB/dbMessage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header name={dbMessage}/>
          <Message/>
        </div>
      </div>
    );
  }
}

export default App;
