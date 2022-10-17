import React from 'react';
import '../index.css';

export default class Img extends React.Component {
    render() {
        const { src } = this.props;

        return (<img class='img' src={src} alt='' />)
    }
}