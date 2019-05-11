import React from 'react'
import './Cover.css'

class Cover extends React.Component {
    render() {
        return (
            <div className="Bloque">
                <img className="main-image"
                     src="https://media.licdn.com/dms/image/C5603AQFJHJ3E7F6XaQ/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=gKrZupaaF-vHKjAKBL_AkLUeyEBGVfOFuKlAH4y3yTI"
                     alt="Henry Leon Gomez"/>
                <h2 className="text-upper">Henry Leon Gomez</h2>
                <p className="text-muted">Full Stack Developer</p>
                <ul>
                    <li>
                        <a href="mailto:helg18@gmail.com">
                            <img src="https://image.flaticon.com/icons/svg/131/131155.svg"
                                 alt="Email"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/henryleongomez" rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/134/134046.svg"
                                 alt="Linkedin"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/helg18" rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/9/9310.svg"
                                 alt="Github"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href="skype:henry-0261?chat" rel="noreferrer noopener" target="_blank">
                            <img src="https://image.flaticon.com/icons/svg/220/220377.svg"
                                 alt="Skype"
                                 className="img-social"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/helg18" rel="noreferrer noopener" target="_blank">
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

export default Cover