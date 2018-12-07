import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setMessages } from '../../redux/action';

class Message extends Component {
    state = {
        value: ''
    };

    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    addMessage = () =>{
        if(this.state.value !== '') {
            let newMessage = {
                id: Date.now(),
                name: this.props.name,
                text: this.state.value
            }
            this.props.addMessage(newMessage);
        };
        this.setState({
            value: ''
        })
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
                        <textarea onChange={this.handleChange} value={this.state.value} onKeyPress={this.enterMessage} name="message__text" className="message__text" placeholder="Введите сообщение"/>
                        <input onClick={this.addMessage} className="message__send" type="image" src="./images/tel.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
      ...store
    }
}

function mapDispatchToProps( dispatch ){
    return {
      setMessages(text) {
        dispatch(setMessages(text))
      }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)