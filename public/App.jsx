import React, {Component} from 'react';
import Header from './instructorComponents/Header';
import MainContent from './instructorComponents/MainContent';
import Footer from './instructorComponents/Footer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }

    render() {
        return (
            <div>
                {this.state.message}

                //add link to the admin page
                //add link to the instructor page
                //add link to the student page
                    {/*<Header/>*/}
                    {/*<MainContent/>*/}
                    {/*<Footer/>*/}
            </div>);
    }
}
