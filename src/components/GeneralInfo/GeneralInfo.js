import React from 'react';
import './GeneralInfo.css';
import {translate} from 'react-translate';
import PersonalInfo from './PersonalInfo/PersonalInfo'
import Languages from './Languages/Languages';

class GeneralInfo extends React.Component {
    render() {
        let {t} = this.props;
        return (
            <div className="container">
                <h5 className="text-upper title">{t(this.props.title)}</h5>
                <hr/>
                <div className="fist-block">
                <PersonalInfo
                    title="title"
                    full_name="full_name"
                    show_full_name="show_full_name"
                    dob="dob"
                    show_dob="show_dob"
                    email="email"
                    show_email="show_email"
                    nacionality="nacionality"
                    show_nacionality="show_nacionality"
                />
                <Languages
                    title="title"
                    ingles="ingles"
                    ingles_nivel_num="ingles_nivel_num"
                    ingles_nivel_text="ingles_nivel_text"
                    spanish="spanish"
                    spanish_nivel_num="spanish_nivel_num"
                    spanish_nivel_text="spanish_nivel_text"
                />
                </div>
            </div>
        )
    }
}

export default translate('generalinfo')(GeneralInfo)