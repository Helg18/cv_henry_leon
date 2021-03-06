import React from 'react'
import './Cover.css'
import {translate} from "react-translate";
import photoProfile from "./img/profile.png";

class Cover extends React.Component {
    render() {
        let {t} = this.props;
        return (
            <div className="Bloque">
                <img className="main-image"
                     src={photoProfile}
                     alt="Henry Leon Gomez"/>
                <h2 className="text-upper">{t(this.props.first_name)} {t(this.props.last_name)}</h2>
                <p className="text-muted ">{t(this.props.profession)}</p>
                <h6 className="text-muted text-upper">{t(this.props.professional)}</h6>
                <ul>
                    <li>
                        <a href={'mailto:' + t(this.props.email)} rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/131/131155.svg"
                                 alt="Email"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href={t(this.props.linkedin)} rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/134/134046.svg"
                                 alt="Linkedin"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href={t(this.props.github)} rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/9/9310.svg"
                                 alt="Github"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href={t(this.props.skype)} rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/220/220377.svg"
                                 alt="Skype"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href={t(this.props.telegram)} rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/253/253802.svg"
                                 alt="Telegram"
                                 className="img-social"/>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default translate('cover')(Cover)