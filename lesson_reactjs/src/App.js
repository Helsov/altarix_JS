import React, { Component } from 'react';
import Header from '../src/components/header/Header';
import Information from '../src/components/information/Information';
import Message from '../src/components/message/Message';
import dbMessage from '../src/components/db_message';

import './reset.css';
import './style.scss';

class App extends Component {
  constructor(){
    super();
    this.state = {
      message: dbMessage,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header/>
            <Information message={this.state.message}/>
            <Message/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
