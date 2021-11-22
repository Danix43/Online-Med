import React from 'react'
import './NormalButton.css'

function NormalButton({ text, link }) {
    const onClick = e => {
        e.preventDefault();
        window.open(link);
    };

    return (
        <button className='normal-button' type='submit' onClick={e => onClick}>{text}</button>
    )
}

export default NormalButton
