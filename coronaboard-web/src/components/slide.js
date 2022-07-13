import React from 'react';

export function Slide({ title, children }) {
    return (
        <div>
            <h2>{title}</h2>
            <h2>{children}</h2>
        </div>
    )
}