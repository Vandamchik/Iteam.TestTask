import React from 'react';
import { IDetailsPageProps } from "../modules/module";
import { BackToHomeButton } from "../UI/buttons/BackToHomeButton";
import './DetailCard.css';


export function DetailCard(props: IDetailsPageProps):JSX.Element {
    const { title, reviewSummary, released, price, imgUrl } = props;

    return (
        <div className="detail-card_container">
            <div className="detail-card-title_container">
                <BackToHomeButton />
                <h3 className="detail-card_title">{ title }</h3>
            </div>
            <img alt={ title } src={ imgUrl } className="detail-card_img"/>
            <div className="detail-card_context-conteinar">
                <p className="detail-card_text">{ released }</p>
                <p className="detail-card_text">{ price }</p>
            </div>
            <p className="detail-card_summery">{ reviewSummary }</p>
        </div>
    );
}