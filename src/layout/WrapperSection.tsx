import React from 'react';
import './WrapperSection.css';

export interface IWrapperSectionProps {
    children: React.ReactNode
}

export function WrapperSection(props: IWrapperSectionProps) {
    return (
        <section className="wrapper_section">
            {props.children}
        </section>
    );
}