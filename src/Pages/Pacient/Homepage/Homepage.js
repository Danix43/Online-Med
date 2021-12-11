import React from 'react'
import ListItem from '../../../Components/List Item/ListItem'
import Sidebar from '../../../Components/Sidebar/Sidebar'

import './Homepage.css'

function Homepage() {
    return (
        <div>
            <Sidebar />
            <div className='homepage-container'>

                <div className="tip-panel">
                    <h1 className='tip-title'>Tip</h1>
                    <p className='tip'>You can book an appointment with a doctor anytime! Check the Appointments tab!</p>
                </div>

                <table className='reminder-table'>
                    <tr>
                        <th>Here are some thins you may want to take a look at!</th>
                    </tr>
                    <tr>
                        <td>
                            <ListItem text='Take a dose of "Aspirine" every day for the 30 - Prescribed by Dr. Smith on 10.12.2019' />
                        </td>
                    </tr>
                </table>

            </div >

        </div>

    )
}

export default Homepage
