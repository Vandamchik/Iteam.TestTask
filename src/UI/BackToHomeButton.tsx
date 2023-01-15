import React from 'react';
import { Link } from "react-router-dom";
import './BackToHomeButton.css';

export function BackToHomeButton() {

    return (
        <button className="back_btn">
            <Link to={`/`} className="back_link">Home Page</Link>
        </button>
    );
}