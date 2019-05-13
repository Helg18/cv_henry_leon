import React from 'react';
import {translate} from 'react-translate';

class Languages extends React.Component {
    render() {
        let {t} = this.props;
        return (
            <div className="languages-info">
                <div><h5 className="title text-muted text-upper">{t(this.props.title)}</h5>
                    <hr/>
                    <div className="dl">
                        <div className="dd text-upper">{t(this.props.ingles)}</div>
                        <div className="dt">
                            <progress max="100" value={t(this.props.ingles_nivel_num)}/>
                            <br/>
                            {t(this.props.ingles_nivel_text)}
                        </div>
                    </div>
                    <div className="dl">
                        <div className="dd text-upper">{t(this.props.spanish)}</div>
                        <div className="dt">
                            <progress max="100" value={t(this.props.spanish_nivel_num)}/>
                            <br/>
                            {t(this.props.spanish_nivel_text)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default translate('languages')(Languages)