import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    constructor(props){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <div className="header">
                <div className="header__title">Jhon Smith</div>
            </div>
        );
    }
}

export default Header;