import React from 'react';
import './AccentButton.css';

function AccentButton({ text, textColor, link, color }) {
    const onClick = e => {
        e.preventDefault();
        window.open(link);
    };

    return (
        <button className='accent-button' style={{ backgroundColor: color, color: textColor }} onClick={e => onClick}>{text}</button>
    )
}

export default AccentButton
