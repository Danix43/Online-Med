import React from 'react'
import AccentButton from '../../../Components/AccentButton/AccentButton'
import ListItem from '../../../Components/List Item/ListItem'
import './Billing.css'

function Billing() {
    return (
        <div className='billing-container'>
            <ListItem text='Here you can see what you need to pay! Check FAQ for more details!' />

            <ul className="list-container">
                <li><h2 className='list-header'>Here are some things you may want to take a look at</h2></li>
                <li><BillingItem id='1' type='Appointment' doctorName='Mr.Smith' dateAndTime={new Date()} amount='45$' /></li>
                <li><BillingItem id='1' type='Appointment' doctorName='Mr.Smith' dateAndTime={new Date()} amount='45$' /></li>
                <li><BillingItem id='1' type='Appointment' doctorName='Mr.Smith' dateAndTime={new Date()} amount='45$' /></li >
                <li><BillingItem id='1' type='Appointment' doctorName='Mr.Smith' dateAndTime={new Date()} amount='45$' /></li >
            </ul >
        </div >
    )
}

function BillingItem({ id, type, doctorName, dateAndTime, amount }) {

    const processedDateAndTime = `${dateAndTime.getDay()}.${dateAndTime.getMonth()}.${dateAndTime.getFullYear()} | ${dateAndTime.getHours()}:${dateAndTime.getMinutes()}`

    return (
        <div className="billing-item-root">
            <p className='billing-type'>{type}</p>
            <div className="billing-item-separator"></div>
            <p className='billing-doctor'>{doctorName}</p>
            <div className="billing-item-separator"></div>
            <p className='billing-dateTime'>{processedDateAndTime}</p>
            <div className="billing-item-separator"></div>
            <p className='billing-amount'>{amount}</p>
            <div className="billing-item-separator"></div>
            <AccentButton text='Pay' textColor='#FFFFFF' func={() => console.log('test')} color='#40c4ff' />
        </div>
    )
}

export default Billing
