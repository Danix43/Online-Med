import React from 'react';
import './AccentButton.css';

function AccentButton({ text, textColor, func, color }) {
    return (
        <button className='accent-button' style={{ backgroundColor: color, color: textColor }} onClick={func}>{text}</button>
    )
}

export default AccentButton
