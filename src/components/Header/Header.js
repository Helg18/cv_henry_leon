import React from 'react';
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-menu"></div>
                <div className="header-space"></div>
                <div className="flag-box">
                    <a href="/en"><img className="flags-lang" src="https://image.flaticon.com/icons/svg/299/299459.svg"
                                       alt="USA"/></a>
                    <a href="/es"><img className="flags-lang" src="https://image.flaticon.com/icons/svg/299/299557.svg"
                                       alt="Spain"/></a>
                </div>
            </div>
        )
    }
}

export default Header