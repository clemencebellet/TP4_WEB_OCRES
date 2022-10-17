import React from 'react';
import Button from '../components/button';
import '../index.css';


export default class Publication extends React.Component {
    render() {
        const { text, likes, handleLike, handleDislike, picture, dislikes } = this.props;

        return (
            <div class='publication' >
                <div>
                    {text}
                </div>
                <div>
                    {picture}
                </div>
                <div>
                    <Button text={"J'aime"} onClick={handleLike} />
                    <Button text={"J'aime pas "} onClick={handleDislike} />
                    <p>Likes: {likes}</p>
                    <p>Dislikes: {dislikes}</p>
                </div>
            </div>)
    }
}