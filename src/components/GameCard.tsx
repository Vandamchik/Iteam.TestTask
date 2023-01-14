import React from 'react';
import './GameCard.css'

interface IGameCardProps {
    title: string,
    image: string,
    price: string,
    released: string
}

export function GameCard(props:IGameCardProps) {
    const {title, image, price, released } = props;
    // console.log(released)

    return (
        <div className="card-container">
            <img className="card-img" src={image}  alt={title} />
            <div className="card-content">
                <div className="card-text_container">
                    <p className="card-text">{title}</p>
                    <p className="card-text">{released}</p>
                    <p className="card-text">{price}</p>
                </div>
                <div className="card-like_container">
                    <p className="card-text">like</p>
                </div>
            </div>
        </div>
    );
}