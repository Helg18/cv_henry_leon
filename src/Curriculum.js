import React from 'react';
import './Curriculum.css'
import {TranslatorProvider} from 'react-translate';
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'

class Curriculum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en'
        };
        this.onChangeLang = this.onChangeLang.bind(this);
    }

    onChangeLang(event) {
        this.setState({
            lang: event.target.alt
        })
    }

    getLayout(lang) {
        const langFile = require('./lang/' + lang + '.json');
        return (<TranslatorProvider translations={langFile}>
            <Header onClick={this.onChangeLang}/>
            <div className="Curriculum">
                <Cover
                    first_name="first_name"
                    last_name="last_name"
                    profession="profession"
                    email="email"
                    linkedin="linkedin"
                    github="github"
                    telegram="telegram"
                    skype="skype"
                />
                {/*About Me*/}
                {/*General Info*/}
                {/*Work Experience*/}
                {/*Education*/}
                {/*Courses*/}
                {/*References*/}
                {/*Portfolio*/}
                {/*Interests*/}
                {/*FAQ*/}
                {/*Hire Me*/}
            </div>
        </TranslatorProvider>)
    }

    render() {
        let lang = 'en';

        if (this.state.lang === 'en') {
            lang = 'en';
        }
        if (this.state.lang === 'es') {
            lang = 'es';
        }

        return this.getLayout(lang)
    }
}

export default Curriculum