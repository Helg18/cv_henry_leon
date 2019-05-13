import React from 'react';
import {translate} from 'react-translate';
import './PersonalInfo.css'

class PersonalInfo extends React.Component {
    render() {
        let {t} = this.props;
        return (
            <div className="personal-info">
                <div><h5 className="title text-muted text-upper">{t(this.props.title)}</h5>
                    <hr/>
                    <div className="dl">
                        <div className="dd text-upper">{t(this.props.full_name)}</div>
                        <div className="dt">{t(this.props.show_full_name)}</div>
                    </div>
                    <div className="dl">
                        <div className="dd text-upper">{t(this.props.dob)}</div>
                        <div className="dt">{t(this.props.show_dob)}</div>
                    </div>
                    <div className="dl">
                        <div className="dd text-upper">{t(this.props.email)}</div>
                        <div className="dt">{t(this.props.show_email)}</div>
                    </div>
                    <div className="dl">
                        <div className="dd text-upper">{t(this.props.nacionality)}</div>
                        <div className="dt">{t(this.props.show_nacionality)}</div>
                    </div>
                </div>
            </div>


        )
    }
}

export default translate('personalinfo')(PersonalInfo)