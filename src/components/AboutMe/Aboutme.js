import React from 'react';
import './Aboutme.css'
import {translate} from 'react-translate';

class Aboutme extends React.Component {
    render() {
        let {t} = this.props;
        return (
            <div className="container">
                <h5 className="text-upper title">{t(this.props.title)}</h5>
                <hr/>
                <div className="decription">{t(this.props.description)}</div>
            </div>
        )
    }
}

export default translate('aboutme')(Aboutme);