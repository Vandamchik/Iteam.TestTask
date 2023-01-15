import React from 'react';
import { Link } from "react-router-dom";
import './SearchButtons.css'

export function SearchButtons(){

    return (
        <div className="btns-container_nav">
            <button className="btn_nav">
                Search
            </button>
            <button className="btn_nav">
                <Link to={`/favorites`} className="link_nav">
                     Like list
                </Link>
            </button>

        </div>
    );
}