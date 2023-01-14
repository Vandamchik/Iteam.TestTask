import React from 'react';
import './SearchButtons.css'

export function SearchButtons(){
    return (
        <div className="btns-container_nav">
            <button className="btn_nav">
                Search
            </button>
            <button className="btn_nav">
                like list
            </button>
        </div>
    );
}