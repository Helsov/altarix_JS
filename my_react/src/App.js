import React, { Component } from 'react';
import Header from './components/componentHeader/Header';
import Chat from './components/componentChat/Chat';
import Message from './components/componentMessage/Message';
import Footer from './components/componentFooter/Footer';
import {db} from './components/componentFirebase/Firebase';
import { connect } from 'react-redux';
import { listMessage } from './redux/action';

class App extends Component {
  state = {
    name: 'testName',
    messageList: []      
  }

  componentDidMount() {
    let messagesRef = db.ref('messages');

    messagesRef.on('value', (snapshot) => {
      let messageList = snapshot.val();
      let dbMessage = [];

      for (let key in messageList) {
        let isOutgoing = false;

        messageList[key].name === this.state.name ? isOutgoing = true : console.log('Dont name');

        dbMessage.push({
            id: messageList[key].id,
            name: messageList[key].name,
            text: messageList[key].text,
            isOutgoing: isOutgoing
        });
      }
      delete dbMessage[84];
      this.props.dispatch(listMessage(dbMessage));

    })
  }

  addMessage = (newMessage) => {
    const now = Date.now();
    const message = {
      id: now,
      name: this.state.name,
      text: newMessage
    }

    db.ref(`/messages/${Date.now()}`).set(message);
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.name}/>
        <Chat messages={this.props.messages}/>
        <Message addMessage={this.addMessage}/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      messages: state.messages
  }
}

export default connect(mapStateToProps)(App);