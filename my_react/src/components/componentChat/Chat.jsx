import React, {Component} from 'react';

class Chat extends Component {
    render(){
        return (
            <div className="chat">
                <ul>
                    {this.props.message.map((message, index)=>{
                       return message.userId !== 2 ? 
                        <li key={index} className="yourMessage">
                            <div className="chat-block">
                                <div className="chat-block__item">
                                    <img src="./images/avatar.png" alt=""/>
                                </div>
                                <div className="chat-block__item">
                                    <div className="chat-block__item-message">
                                        {message.text}
                                    </div>
                                </div>
                            </div>
                            <div className="chat-block__name">
                                {message.userName}
                            </div>
                        </li>
                        :  
                        <li key={index} className="myMessage">
                            <div className="chat-block">
                                <div className="chat-block__item">
                                    <div className="chat-block__item-message">
                                        {message.text}
                                    </div>
                                </div>
                                <div className="chat-block__item">
                                    <img src="./images/avatar.png" alt=""/>
                                </div>
                            </div>
                            <div className="chat-block__name">
                                {message.userName}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Chat;