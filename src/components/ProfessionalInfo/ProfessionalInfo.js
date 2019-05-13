import React from 'react';
import {translate} from 'react-translate';

class ProfessionalInfo extends React.Component {
    render() {
        let {t} = this.props;
        return (
            <div className="container">
                <h5 className="text-upper title">{t(this.props.title)}</h5>
                <hr/>
                <div className="fist-block">
                    contenido
                </div>
            </div>
        )
    }
}

export default translate('professionalinfo')(ProfessionalInfo)