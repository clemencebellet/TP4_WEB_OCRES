import React from 'react';
import Nav from './containers/Navbar';
import User from './containers/user';
import Arthur from './images/arthur.jpg';
import Claude from './images/claude.jpg';
import Jeanne from './images/jeanne.jpg';
import Bretagne from './images/bretagne.jpg';
import Jean from './images/jean.jpg';
import Facebook from './images/facebook.jpg';
import Fete from './images/fete.jpg';
import Brunch from './images/brunch.jpg';
import './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    name: 'Jeanne',
                    surname: 'Darc',
                    birthdate: '25/07/1996',
                    picture: Jeanne,
                    lastPublication: 'Ceci est la dernière publication de Jeanne',
                    photo: Brunch,
                    like: 0,
                    abonnes: 0,
                    metier: 'UX designer',

                    dislike: 0

                },

                {
                    name: 'Claude',
                    surname: 'Gates',
                    birthdate: '25/07/1996',
                    picture: Claude,
                    lastPublication: 'Ceci est la dernière publication de Claude',
                    photo: Bretagne,
                    abonnes: 0,
                    like: 0,
                    metier: 'Retraité',
                    dislike: 0

                },
                {
                    name: 'Arthur',
                    surname: 'Dupont',
                    birthdate: '19/04/2001',
                    picture: Arthur,
                    lastPublication: 'Ceci est la dernière publication de Arthur',
                    photo: Fete,
                    abonnes: 0,
                    like: 0,
                    metier: 'Etudiant',
                    dislike: 0
                },
                {
                    name: 'Jean',
                    surname: 'Callarec',
                    birthdate: '21/09/1973',
                    picture: Jean,
                    lastPublication: 'Ceci est la dernière publication de Jean',
                    //photo: ,
                    abonnes: 0,
                    metier: 'Avocat',
                    like: 0,
                    dislike: 0
                },
            ],
            logo: [
                {
                    img1: Facebook,
                }
            ],
            selectedUser: 'Jeanne'
        }
    }

    changeUser(selectedUser) {
        this.setState({ selectedUser });
        // Revient a faire => this.setState({ selectedUser: selectedUser }); 
    }

    handleLike(username) {
        const { users } = this.state;
        const userIndex = users.findIndex((user) => user.name === username);
        let newUsers = users;
        newUsers[userIndex].like += 1

        this.setState({ users: newUsers });
    }
    handleDislike(username) {
        const { users } = this.state;
        const userIndex = users.findIndex((user) => user.name === username);
        let newUsers = users;
        newUsers[userIndex].dislike += 1

        this.setState({ users: newUsers });
    }
    handleAbonnes(username) {
        const { users } = this.state;
        const userIndex = users.findIndex((user) => user.name === username);
        let newUsers = users;
        newUsers[userIndex].abonnes += 1

        this.setState({ users: newUsers });
    }

    render() {
        const { users, selectedUser } = this.state;

        return (
            <div class='mainContent'>
                <Nav users={users} changeUser={this.changeUser.bind(this)} />
                <User user={users.find((user) => user.name === selectedUser)} handleLike={this.handleLike.bind(this)} handleDislike={this.handleDislike.bind(this)} handleAbonnes={this.handleAbonnes.bind(this)} />
            </div>)
    }
}