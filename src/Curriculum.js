import React from 'react';
import './Curriculum.css'
import Cover from './components/Cover/Cover'

class Curriculum extends React.Component {
    componentDidMount() {
        document.title = "Henry Leon | Full Stack Web Developer"
    }

    render() {
        return (
            <div className="Curriculum">
                <Cover/>
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
        )
    }
}

export default Curriculum