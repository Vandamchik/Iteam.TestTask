import React, { useEffect, useState } from 'react';
import { LikeButton } from "../UI/LikeButton";
import { useAppSelector } from "../hooks/redux";
import './GameCard.css'
import {LearnMoreButton} from "../UI/LearnMoreButton";

interface IGameCardProps {
    title: string,
    image: string,
    price: string | number,
    released: string
}

export function GameCard(props:IGameCardProps) {
    const [ likeOption, setLikeOption ] = useState<boolean | null>(null)
    const { title, image, price, released } = props;
    const { favStorageData } = useAppSelector(state => state.favorites);

    useEffect(() => {
        let findItemInStore =favStorageData.find(el => el === title)
        setLikeOption(favStorageData.includes(findItemInStore))
    },[ likeOption, setLikeOption, favStorageData ])


    return (
        <div className="card-container">
            <img className="card-img" src={ image }  alt={ title } />
            <div className="card-content">
                <div className="card-text_container">
                    <p className="card-text">{ title }</p>
                    <p className="card-text">{ released }</p>
                    <p className="card-text">{ price }</p>
                </div>
                { likeOption && <LearnMoreButton gameId={ title }/> }
                <div className="card-like_container">
                    <LikeButton
                        titleId={ title }
                        isLiked={ likeOption }
                        changeIsLiked={ setLikeOption }
                    />
                </div>
            </div>
        </div>
    );
}