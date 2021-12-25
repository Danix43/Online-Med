import React from 'react'

import './Appointments.css'
import ListItem from '../../../Components/List Item/ListItem'

const handleSubmit = e => {
    e.preventDefault();

    const inputType = document.querySelector('#type').value;
    const inputDoctors = document.querySelector('#doctors').innerHTML;
    const inputDateAndTime = document.querySelector('#appointment-time').value;
    const inputDetails = document.querySelector('#details').value;

    console.log(`data: type: ${inputType}\n doctors: ${inputDoctors} \n dateAndTime: ${inputDateAndTime} \n details: ${inputDetails}\n`);
}

function Appointments() {
    return (
        <div className='appointments-container'>
            <ListItem text='Select a date, time and add the details to schedule an appointment!' />

            <form className='details-input'>
                <label for='type'>Type</label><br />
                {/* TODO: could switch to list in future */}
                <select type='text' id='type' name='type'>
                    <option value='regular-checkup'>Regular Checkup</option>
                    <option value='urgent'>Urgent</option>
                </select><br />

                <label for='doctors'>Doctors</label><br />
                <select id='doctors' list='doctors'>
                    <option value='Dr.Smith'>Dr.Smith</option>
                    <option value='Dr.John'>Dr.John</option>
                    <option value='Dr.Doe'>Dr.Doe</option>
                    <option value='Dr.Milsugi'>Dr.Milsugi</option>
                </select> <br />

                <label for='appointment-time'>Date and Time</label><br />
                <input type='datetime-local' name='appointment-time' id='appointment-time' min={new Date()} /> <br />

                <label for='details'>Details</label><br />
                <textarea id='details' /><br />

                <input className='submit-button' type='submit' value='Apply' onClick={e => handleSubmit(e)} />
            </form>

        </div>
    )
}

export default Appointments
