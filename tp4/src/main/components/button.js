import React from 'react';
import '../index.css';

export default class Button extends React.Component {
    render() {
        const { text, style } = this.props;

        return (
            <p class='button' style={style}>
                {text}
            </p>)
    }
}