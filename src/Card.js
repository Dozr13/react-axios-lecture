import React from 'react';
    // ! Declared the card props below
const Card = (props) => {
    return <div className="card">
        <img alt={props.name} src={props.imageUrl} />
        <span>{props.name}</span>
    </div>
}

export default Card;