import React from 'react';
import '../index.css';

export default class ButtonAbo extends React.Component {
    render() {
        const { text, style, onClick } = this.props;

        return (
            <p class='buttonabo' onClick={onClick} style={style}>
                {text}
            </p>)
    }
}