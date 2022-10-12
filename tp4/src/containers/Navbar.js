import React from 'react';
import '../index.css'
import './Navbar.css'



export default class Nav extends React.Component {
    render() {
        const { users, changeUser } = this.props;

        return (
            <div class='nav'>
                <button onclick="changeusers()">
                    Jeanne
                </button>
            </div>
        )




    }
}

