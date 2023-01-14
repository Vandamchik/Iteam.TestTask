import React from 'react';
import './Select.css'

export function Select():JSX.Element {

    return (
        <select className="select_search">
            <option>Price</option>
            <option>Publish Date</option>
        </select>
    );
}