import React from 'react';
import footerImage from '../images/footer-image.png'

const WhySupport = () => {
    return (
        <div>
            <div className='background'>
                <h3 className='header'>
                    Why Invest & Support Us?
                </h3>
                <hr className='border-bottom' />
                <p className='content'>
                    In computer programming, an infinite loop (or endless loop) is a sequence of instructions that, as written, will continue endlessly, unless an external intervention occurs.
                </p>
                <p className='content'>
                    Our aim is to develop and deploy a truly decentralized financial platform that takes its cue from the infinite loop approach employed in computing, whereby investors and users of the platform can earn passive income in perpetuity for as long as they maintain an active investment.
                </p>
                <p className='content'>
                    As a 100% DAO project, we take pride in the fact that the community and not VCs are the engine that will keep this going into the future. Our not-for-profit initiatives makes us stand out but also guarantees that our governance token will not only be a sound investment asset but a strong vote for the change that you want to see in this world.
                </p>
                <p className='content'>
                    Its easy to throw our hands in the air and complain; we at Infinite Loop DAO choose to do something about it. Join us in being that tip of the spear in this increasingly changing world!
                </p>
                <button className='connect-wallet-btn' style={{ padding: '10px 30px' }}>Whitepaper</button>
            </div>
            <img style={{ width: '100%', margin: 'auto', marginTop: '90px', display: 'block' }} src={footerImage} alt='header' />

        </div>
    );
};

export default WhySupport;