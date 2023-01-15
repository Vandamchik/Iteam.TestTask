import React, { Fragment } from 'react';
import { LikeIcon } from "../media/LikeIcon";
import { useActions } from "../hooks/actions";
import './LikeButton.css';

export interface ILikeButtonProps {
    titleId: string,
    isLiked: boolean | null,
    changeIsLiked: (arg:boolean) => void
}

export function LikeButton( props: ILikeButtonProps ) {
    const { addFavData, removeFavData } = useActions();
    const { titleId, changeIsLiked, isLiked } = props;

    const addToFavListHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        changeIsLiked(true)
        addFavData(event.currentTarget.id)
    }

    const removeFavListHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        changeIsLiked(false)
        removeFavData(event.currentTarget.id)
    }

    return (
        <Fragment>
            { isLiked ?
                ( <button
                    className="like_btn"
                    type="button"
                    id={ titleId }
                    onClick={(event) => removeFavListHandler(event)}
                >
                    <LikeIcon  fillColor="orange"/>
                </button> )
            :
                ( <button
                    className="like_btn"
                    type="button"
                    id={ titleId }
                    onClick={(event) => addToFavListHandler(event)}
                >
                    <LikeIcon fillColor="white" />
                </button> )}
        </Fragment>
    );
}