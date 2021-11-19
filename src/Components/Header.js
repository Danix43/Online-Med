import React from 'react'

import './Header.css';
import logo from '../Imgs/logo.png';
import NormalButton from './NormalButton';
import AccentButton from './AccentButton';

import colors from '../themeConfig';

function Header() {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img className='logo__image' src={logo} alt='Online Med Logo' />
                <h2 className='logo__name'>Online Med</h2>
            </div>
            <div className='header__right-side'>
                <NormalButton text='About Us' link='' />
                <NormalButton text='Contact' link='' />
                <AccentButton text='Login' link='' color={colors.accentColor} textColor={colors.secondaryTextColor} />
            </div>
        </div>
    )
}

export default Header
