import React from 'react'

import './Doctors.css'
import placeholder from '../../../Imgs/Placeholders/Avatar doctor.png'
import AccentButton from '../../../Components/AccentButton/AccentButton'

function Doctors() {
    return (
        <div className='doctors-container'>
            <div className="tip-panel">
                <h1 className='tip-title'>Help</h1>
                <p className='tip'>Here you can see all the doctors enroled in the project! Use the contact button to find the contact details!</p>
            </div>

            <div className="doctors-list-root">

                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
                <DoctorItem picture={placeholder} name='Dr.Smith' speciality='Cardiology' contactLink='test11' />
            </div>

        </div>
    )
}

function DoctorItem({ picture, name, speciality, contactLink }) {
    return (
        <div className="doctor-item-root">
            <img className='doctor-img' src={picture} alt="the doctor's face" />
            <p className='doctor-name'>{name}</p>
            <p className='doctor-speciality'>{speciality}</p>
            <AccentButton text='Contact' textColor="#ffffff" func={() => console.log(`contact link: ${contactLink}`)} color='#40c4ff' />
        </div>
    )
}


export default Doctors
