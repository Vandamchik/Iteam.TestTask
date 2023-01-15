import React from 'react';
import { WrapperSection } from "../layout/WrapperSection";
import { BackToHomeButton } from "../UI/buttons/BackToHomeButton";
import { useAppSelector } from "../hooks/redux";
import { useGetGamesByTokenQuery } from "../store/service/gamesApi";
import { GameCard } from "../components/GameCard";
import './FavoritesPage.css';


export function FavoritesPage() {
    const { favStorageData } = useAppSelector(state => state.favorites);
    const { data, isLoading, error } = useGetGamesByTokenQuery("1");
    const filteredFavData = [];

    if (data && favStorageData.length > 0) {
        for (let i of data ) {
            for( let k of favStorageData) {
                if( i.title === k) {
                    filteredFavData.push(i)
                }
            }
        }
    }

    return (
        <WrapperSection>
            <div className="favorite_container">
                <BackToHomeButton />
                <h2 className="favorites_title">Favorite list</h2>
            </div>
            <div className="favorites_list">
                { filteredFavData.length > 0 && filteredFavData.map(el =>
                    ( <GameCard
                        title={ el.title }
                        image={ el.imgUrl }
                        price={ el.price }
                        released={ el.released }
                        key={ el.title }
                    /> )) }
            </div>
        </WrapperSection>
    );
}