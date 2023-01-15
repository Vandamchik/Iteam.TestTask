import React from 'react';
import { LearnMoreIcon } from "../media/LearnMoreIcon";
import { Link } from "react-router-dom";
import './LearnMoreButton.css';

export interface ILearnMoreButtonProps {
    gameId: string
}

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
