import React from 'react';
import './Select.css'


interface ISelectProps {
    selectGameState: (text: string) => void
}

export function Select(props: ISelectProps):JSX.Element {
    const { selectGameState } = props;


    const selectGamesHandler = (targetValue: string) => {
        selectGameState(targetValue)
    }


    return (
        <select
            className="select_search"
            onChange={(e) => selectGamesHandler(e.target.value)}
            defaultValue={"DEFAULT"}
        >
            <option value="DEFAULT" disabled hidden>Choose filter</option>
            <option value="price">Price</option>
            <option value="publishDate">Publish Date</option>
        </select>
    );
}