import React, { Fragment, useEffect, useState } from 'react';
import { LikeIcon } from "../media/LikeIcon";
import './LikeButton.css';
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";

export interface ILikeButtonProps {
    titleId: string,
}

export function LikeButton( props: ILikeButtonProps ) {
    const { titleId } = props;
    const [ likeOption, setLikeOption ] = useState<boolean | null>(null)
    const { addFavData, removeFavData } = useActions();
    const { favStorageData } = useAppSelector(state => state.favorites);

    useEffect(() => {
        let findItemInStore =favStorageData.find(el => el === titleId)
        setLikeOption(favStorageData.includes(findItemInStore))
    },[ likeOption, setLikeOption, favStorageData ])

    const addToFavListHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLikeOption(true)
        addFavData(event.currentTarget.id)
    }

    const removeFavListHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLikeOption(false)
        removeFavData(event.currentTarget.id)
    }

    return (
        <Fragment>
            { likeOption ?
                ( <button
                    className="like_btn"
                    type="button"
                    id={titleId}
                    onClick={(event) => removeFavListHandler(event)}
                >
                    <LikeIcon  fillColor="orange"/>
                </button> )
            :
                ( <button
                    className="like_btn"
                    type="button"
                    id={titleId}
                    onClick={(event) => addToFavListHandler(event)}
                >
                    <LikeIcon fillColor="white" />
                </button> )}
        </Fragment>
    );
}