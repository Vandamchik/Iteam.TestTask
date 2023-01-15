import React from 'react';
import { LearnMoreIcon } from "../../media/LearnMoreIcon";
import { Link } from "react-router-dom";
import { ILearnMoreButtonProps } from "../../modules/module";
import './LearnMoreButton.css';



export function LearnMoreButton(props: ILearnMoreButtonProps) {
    const { gameId } = props;

    return (
        <div className="learn-more_container">
            <Link to={`/${ gameId }`}>
                <LearnMoreIcon />
            </Link>
        </div>
    );
}
