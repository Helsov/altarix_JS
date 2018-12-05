import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../redux/action';

class Message extends Component {

    addMessage = () =>{
        let message = document.querySelector('.message__text');
        if(message.value !== '') {
            this.props.dispatch(addMessage(message.value));
            this.props.addMessage(message.value);
        };
        message.value = '';
    }

    enterMessage = (e) => {
        if (e.key === 'Enter') {
            this.addMessage();
        }
    }
    
    render(){

        return (
            <div className="message">
                <div className="wrapper">
                    <div className="row">
                        <textarea onKeyPress={this.enterMessage} name="message__text" className="message__text" placeholder="Введите сообщение"></textarea>
                        <input onClick={this.addMessage} className="message__send" type="image" src="./images/tel.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(Message);