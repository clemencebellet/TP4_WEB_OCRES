import React from 'react';
import Button from './button';
import '../index.css';
import ButtonAbo from './buttonabo';


export default class Subscribe extends React.Component {
    render() {
        const { text, abonnes, handleAbonnes } = this.props;

        return (
            <div class='subscribe' >
                <div>
                    {text}
                </div>

                <div>
                    <ButtonAbo text={"Abonnez-vous"} onClick={handleAbonnes} />

                    <p>Abonnés actuels: {abonnes}</p>

                </div>
            </div>)
    }
}