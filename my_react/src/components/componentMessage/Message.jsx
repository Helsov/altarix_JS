import React, {Component} from 'react';
import dbMessage from '../componentsDB/dbMessage';
import Chat from '../componentChat/Chat';

class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            messageList: dbMessage,
        }

        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(){
        let message = document.querySelector('.message__text');
        message.value === '' ? console.log('Нет текста') : (
            dbMessage.push({
                userId: 2,
                userIcon: "",
                userName: "Smith",
                text: message.value
            })
        );

        this.setState({
            messageList: dbMessage, 
        });
        
        message.value = '';
    }

    render(){
        return (
            <div>
                <Chat message={this.state.messageList}/>
                <div className="message">
                    <textarea name="message__text" className="message__text" placeholder="Введите сообщение"></textarea>
                    <div onClick={this.addMessage} className="message__send">
                        <img src="./images/tel.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Message;