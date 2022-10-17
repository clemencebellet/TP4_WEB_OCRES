import React from 'react';
import Button from '../components/button';
import Img from '../components/img';
import '../index.css';



export default class Nav extends React.Component {
    render() {
        const { users, changeUser, logo } = this.props;

        return (

            <div class='nav'>

                {users.map((user) => <Button text={user.name} onClick={() => changeUser(user.name)} />)}
            </div>)

    }
}