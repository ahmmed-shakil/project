import React from 'react';
import logoImage from '../images/logo.png'
import socialIcon from '../images/image-1.png'
import headerImage from '../images/header-image.png'

const NavBar = () => {
    return (
        <div>
            <div className='nav-bar'>
                <div className='logo'>
                    <img src={logoImage} alt='logo' />
                </div>
                <div className='nav-right'>
                    <img className='social-icon' src={socialIcon} alt='main' />
                    <button className='connect-wallet-btn'>Connect Wallet</button>
                </div>
            </div>
            <img style={{ width: '90%', margin: 'auto', marginTop: '90px', display: 'block' }} src={headerImage} alt='header' />
        </div>
    );
};

export default NavBar;