import React, {Component} from 'react';

export default class Chat extends Component {
    render(){
        return ( this.props.messages.length > 0 ? 
                <div className="chat">
                    <div className="wrapper">
                        <div className="row">
                <ul>
                    {this.props.messages.map((message, index)=>{
                       return message.isOutgoing === false ? 
                        <li key={index} className="yourMessage">
                            <div className="chat-block">
                                <div className="chat-block__item">
                                    <img src='../images/avatar.png' alt=""/>
                                </div>
                                <div className="chat-block__item">
                                    <div className="chat-block__item-message">
                                        {message.text}
                                    </div>
                                </div>
                            </div>
                            <div className="chat-block__name">
                                {message.name}
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
                                    <img src='../images/avatar.png' alt=""/>
                                </div>
                            </div>
                            <div className="chat-block__name">
                                {message.name}
                            </div>
                        </li>
                    })}
                </ul>
            </div>
                </div>
            </div>
            :
            <div className="load">
                <div className="wrapper">
                    <div className="row">
                    <img src="../images/load.gif" alt=""/>
                    </div>
                </div>
            </div>
            
        )
    }
}
