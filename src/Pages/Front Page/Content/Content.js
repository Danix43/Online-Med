import React from 'react'
import './Content.css';
import colors from '../../../themeConfig';
import AccentButton from '../../../Components/AccentButton/AccentButton';

// TODO: - add modal popup
function Content() {
    const openModal = type => {
        console.log(`button type ${type} pressed`);
    }

    return (
        <div className='content-root'>
            <div className="leftside">
                <h3>Get support from qualified doctors right from <span className='text-highlight'>your home!</span></h3>
                <div className="buttons">
                    <AccentButton text='Register now as a Doctor' textColor={colors.secondaryTextColor} color={colors.accentColor} func={() => openModal('registerDoctor')} />
                    <AccentButton text='Register now as a Pacient' textColor={colors.secondaryTextColor} color={colors.accentColor} func={() => openModal('registerPacient')} />
                </div>
            </div>
            <div className="rightside">

            </div>
        </div>
    )
}

export default Content
