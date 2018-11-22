import React, {Component} from 'react';
import dbMessage from '../db_message';



class Message extends Component {
    constructor(){
        super();
        this.state = {
            text: '',
            array: dbMessage,
        }
    }

    textAdd(e){
        let txt = document.querySelector('.textMes');

        dbMessage.push({
            userId: 2,
            userIcon: "",
            userName: "Smith",
            text: txt.value
        });
        console.log(dbMessage)
    }

    render(){
        return (
            <div className="messageBlock">
                <textarea name="textMes" className="textMes" placeholder="Введите сообщение"></textarea>
                <div onClick={this.textAdd} className="sendMessage">
                    <img src="./images/tel.png"/>
                </div>
            </div>
        )
    }
}

export default Message;