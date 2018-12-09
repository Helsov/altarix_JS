import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <div className="wrapper">
                    <div className="row">
                        <div className="header__title">{this.props.name}</div>
                    </div>
                </div>
            </div>
        )
    }
}
