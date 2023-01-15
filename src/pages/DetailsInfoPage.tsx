import React from 'react';
import { WrapperSection } from "../layout/WrapperSection";
import { useParams } from "react-router-dom";
import { useGetGamesByTokenQuery } from "../store/service/gamesApi";
import { DetailCard } from "../components/DetailCard";
import './DetailsInfoPage.css'

export function DetailsInfoPage() {
    const { id } = useParams();
    const { data, isLoading, error } = useGetGamesByTokenQuery("");
    let detailInfoArr = [];

    if (data) {
        let findGame = data.find(el => el.title === id);
        detailInfoArr.push(findGame)
    }

    return (
        <WrapperSection>
            { isLoading && <p>Loading...</p>}
            { detailInfoArr!.length > 0 && detailInfoArr!.map(item =>
                <DetailCard
                    key={item!.title}
                    title={item!.title}
                    price={ item!.price }
                    released={ item!.released }
                    reviewSummary={ item!.reviewSummary}
                    imgUrl={ item!.imgUrl }
            />) }
        </WrapperSection>
    );
}