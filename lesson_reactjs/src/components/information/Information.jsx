import React, {Component} from 'react';

class Information extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }
    render(){
        return (
            <div className="informationBlock">
                <ul>
                    {this.props.message.map(message=>{
                       return message.userId !== 2 ? 
                        <li key={message.id} className="inform">
                            <div className="inform__block">
                                <div className="inform__block-avatar">
                                    <img src="./images/avatar.png"/>
                                </div>
                                <div className="inform__block-name">
                                    {message.userName}
                                </div>
                            </div>
                            <div className="inform__block">
                                <div className="inform__block-message">
                                    {message.text}
                                </div>
                            </div>
                        </li> :  
                        <li key={message.id} className="inform myMes">
                            <div className="inform__block">
                            <div className="inform__block-message">
                                    {message.text}
                                </div>
                            </div>
                            <div className="inform__block">
                                <div className="inform__block-avatar">
                                    <img src="./images/avatar.png"/>
                                </div>
                                <div className="inform__block-name">
                                    {message.userName}
                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Information;