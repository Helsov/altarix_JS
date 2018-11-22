import React, {Component} from 'react';

class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="header__title">{this.props.name[2].userName}</div>
            </div>
        )
    }
}

export default Header;