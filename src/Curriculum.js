import React from 'react';
import './Curriculum.css'
import {TranslatorProvider} from 'react-translate';
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover'

class Curriculum extends React.Component {

    static _getLayout(lang) {
        const langFile = require('./lang/' + lang + '.json');
        return (<TranslatorProvider translations={langFile}>
            <Header/>
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
        let url = window.location.href;

        if (url.search('/en') !== -1) {
            return Curriculum._getLayout('en')
        }
        if (url.search('/es') !== -1) {
            return Curriculum._getLayout('es');
        }

        return Curriculum._getLayout('en')
    }
}

export default Curriculum