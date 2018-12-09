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
      let messageList = Object.keys(snapshot.val()).map( e => snapshot.val()[e]);
      this.props.getMessages(messageList);
    })
  }

  addMessage = newMessage => db.ref(`/messages/${Date.now()}`).set(newMessage);

  render() {
    const {name} = this.props;
    
    return (
      <div className="App">
        <Header name={name}/>
        <Chat messages={this.props.messages} name={name}/>
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

function mapDispatchToProps( dispatch ){
  return {
    getMessages(messages) {
      dispatch(getMessages(messages))
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App)