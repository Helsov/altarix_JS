import React, { Component } from 'react';
import Header from './components/componentHeader/Header';
import Chat from './components/componentChat/Chat';
import Message from './components/componentMessage/Message';
import Footer from './components/componentFooter/Footer';
import {db} from './components/componentFirebase/Firebase';
import { connect } from 'react-redux';
import { getMessages } from './redux/action';

class App extends Component {

  componentDidMount() {
    let messagesRef = db.ref('messages');

    messagesRef.on('value', (snapshot) => {
      let messageList = snapshot.val();
      let dbMessage = [];

      for (let key in messageList) {
        let isOutgoing = false;

        messageList[key].name === this.props.name ? isOutgoing = true : console.log('Dont name');

        dbMessage.push({
            id: messageList[key].id,
            name: messageList[key].name,
            text: messageList[key].text,
            isOutgoing: isOutgoing
        });
      }

      delete dbMessage[84];
      this.props.dispatch(getMessages(dbMessage));

    })
  }

  addMessage = newMessage => db.ref(`/messages/${Date.now()}`).set(newMessage);

  render() {
    const {name} = this.props;
    
    return (
      <div className="App">
        <Header name={name}/>
        <Chat messages={this.props.messages}/>
        <Message addMessage={this.addMessage} name={name}/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    ...store
  }
}


export default connect(mapStateToProps)(App)