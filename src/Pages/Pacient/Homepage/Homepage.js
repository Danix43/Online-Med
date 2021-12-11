import React from 'react'
import ListItem from '../../../Components/List Item/ListItem'
import Sidebar from '../../../Components/Sidebar/Sidebar'

import './Homepage.css'

function Homepage() {
    return (
        <div className='homepage-container'>
            <Sidebar />

            <div className="tip-panel">
                <h1 className='tip-title'>Tip</h1>
                <p className='tip'>You can book an appointment with a doctor anytime! Check the Appointments tab!</p>
            </div>


            <ul className='reminder-list'>
                <li className='reminder-list-header'>Here are some thins you may want to take a look at!</li>

                <li><ListItem text='Take a dose of "Aspirine" every day for the 30 - Prescribed by Dr. Smith on 10.12.2019' /></li>
                <li><ListItem text='Take a dose of "Aspirine" every day for the 30 - Prescribed by Dr. Smith on 10.12.2019' /></li>
                <li><ListItem text='Take a dose of "Aspirine" every day for the 30 - Prescribed by Dr. Smith on 10.12.2019' /></li>
            </ul>

        </div >

    )
}

export default Homepage
