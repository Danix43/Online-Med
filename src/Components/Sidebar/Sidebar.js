import React from 'react'

import './Sidebar.css';
import colors from '../../themeConfig';

import logo from '../../Imgs/logo.svg';
import placeholderDoctor from '../../Imgs/Placeholders/Avatar pacient.png';

import AccentButton from '../AccentButton/AccentButton';


function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className='logo'>
                <img className='logo-img' src={logo} alt='OnlineMed Logo' />
                <h1 className='logo-name'>OnlineMed</h1>
            </div>

            <div className='button-profile'>
                <img className='pacient-profile-picture' src={placeholderDoctor} alt='Pacient Profile Avatar' />
                <p className='pacient-profile-name'>John Doe</p>
            </div>

            <div className="links-list">
                <AccentButton className='navigation-link' text='Homepage' textColor={colors.textColor} color={colors.accentColorLigher} />
                <AccentButton className='navigation-link' text='Appontments' textColor={colors.textColor} color={colors.accentColorLigher} />
                <AccentButton className='navigation-link' text='Billing' textColor={colors.textColor} color={colors.accentColorLigher} />
                <AccentButton className='navigation-link' text='Tratements' textColor={colors.textColor} color={colors.accentColorLigher} />
                <AccentButton className='navigation-link' text='Doctors' textColor={colors.textColor} color={colors.accentColorLigher} />
                <AccentButton className='navigation-link' text='Support' textColor={colors.textColor} color={colors.accentColorLigher} />
            </div>
        </div>
    )
}

export default Sidebar
