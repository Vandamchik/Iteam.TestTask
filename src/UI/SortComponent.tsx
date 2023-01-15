import React, { useState } from 'react';
import { SortIcon } from "../media/SortIcon";
import { ISortComponentProps } from "../modules/module";
import './SortComponent.css'


export function SortComponent(props: ISortComponentProps) {
    const [toggleBtn, setToggleBtn] = useState<boolean>(false);
    const { sortGameOrder } = props;

    const btnHandler = () => {
        setToggleBtn(prev => !prev)
    }

    return (
        <div className="sort-icon_container">
            <div className="sort-icon">
                <button
                    className="sort_btn"
                    onClick={btnHandler}
                >
                    <SortIcon />
                </button>
            </div>
            { toggleBtn && <div className="sort_dropdown">
                <p
                    id="lower"
                    className="sort-text_dropdown"
                    onClick={(e) => sortGameOrder(e.currentTarget.id)}
                >Lower to bigger</p>
                <p
                    id="bigger"
                    className="sort-text_dropdown"
                    onClick={(e) => sortGameOrder(e.currentTarget.id)}
                >Bigger to lower</p>
            </div> }
        </div>
    );
}