import React from 'react';
import Nav from './containers/Navbar';
import User from './containers/user';

import './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    name: 'Jeanne',
                    surname: 'Dupont',
                    birthdate: '25/07/1996',

                    lastPublication: 'Ceci est la dernière publication de Jeanne',
                    like: 0
                },

            ],
            selectedUser: 'Jeanne'
        }
    }





    render() {


        return (
            <div class='mainContent'>
                <Nav />
                <User />
            </div>)
    }
}