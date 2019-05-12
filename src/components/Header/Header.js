import React from 'react';
import './Header.css'

class Header extends React.Component {
    onClick(e) {
        this.props.onClick(e);
    }
    render() {
        return (
            <div className="header">
                <div className="flag-box">
                    <img className="flags-lang" src="https://image.flaticon.com/icons/svg/299/299459.svg"
                         alt="en" onClick={(e) => this.onClick(e)}/>
                    <img className="flags-lang" src="https://image.flaticon.com/icons/svg/299/299557.svg"
                         alt="es" onClick={(e) => this.onClick(e)}/>
                </div>
            </div>
        )
    }
}

export default Header