import React from 'react'

import './ListItem.css'

function ListItem({ text }) {
    return (
        <div className='list-item-root'>
            <p>{text}</p>
        </div>
    )
}

export default ListItem
