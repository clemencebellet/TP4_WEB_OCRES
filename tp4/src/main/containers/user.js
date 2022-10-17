import React from 'react';
import Button from '../components/button';
import Img from '../components/img';
import Publication from '../components/publication';
import Subscribe from '../components/subscribe';
import '../index.css';

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white'
        }
    }

    changeStyle() {
        this.setState((prevState) => ({ backgroundColor: prevState.backgroundColor === 'white' ? '#3b5998' : 'white' }))
    }

    render() {
        const { user, handleLike, handleDislike, handleAbonnes } = this.props;
        const { backgroundColor } = this.state;

        return (
            <div class='user'>
                <div class='profile' style={{ background: backgroundColor, color: backgroundColor === 'white' ? 'black' : 'white' }}>
                    <Img src={user.picture} />

                    <div class='profileInfos'>
                        <div class='profileInfo'>
                            {`Prenom: ${user.name}`}
                        </div>
                        <div class='profileInfo'>
                            {`Nom: ${user.surname}`}
                        </div>
                        <div class='profileInfo'>
                            {`Date de naissance: ${user.birthdate}`}
                        </div>
                    </div>
                    <Button text={'Change style'} onClick={this.changeStyle.bind(this)} style={{ alignSelf: 'flex-end' }} />
                </div>

                <Publication text={user.lastPublication} likes={user.like} dislikes={user.dislike} picture={user.photo} handleLike={() => handleLike(user.name)} handleDislike={() => handleDislike(user.name)} />
                <Subscribe text={`Souhaitez vous suivre les actualités de ${user.name} ?`} abonnes={user.abonnes} handleLike={() => handleLike(user.name)} handleAbonnes={() => handleAbonnes(user.name)} />

            </div>)
    }
}

































