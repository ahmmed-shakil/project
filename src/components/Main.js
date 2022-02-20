import React from 'react';
import brandImage from '../images/brand-image.png'

const Main = () => {
    return (
        <div>
            <div className='background'>
                <h3 className='header'>How To Start?</h3>
                <hr className='border-bottom' />
                <p className='content'>Signup to BUY Token as part of the Private Presale and/or Donate below to follow updates from DAO and to  keep track of our Launchpad ticker.</p>
            </div>
            <div className='background'>
                <h3 className='header'>What is Infinite Loop DAO?</h3>
                <hr className='border-bottom' />
                <p className='content'>At its heart, Infinite Loop is a DAO that will at the onset, offer a full bouquet of DeFI services, iLoopSwap and our native ERC20 Governance Token on Smart Contracts based on the Ethereum, Polygon and Binance Blockchains, with more chains to be added in the future.</p>

                <p className='content'> If your aim is to earn a passive income without any of the fees, frills and oftentimes constraining control of a traditional portals, then this is your home.</p>

                <p className='content'> We are a socially conscious, community driven, investor-first project that is 100% Crowdfunded from out of the gate. Every donation, token purchase and investment, guarantees the holder an equal vote on the direction of the project plus the allocation of pooled resources from the fees earned on the portal and sale of the native token.</p>

                <p className='content'>There are no owners, middlemen, agents, shadowy teams nor human interactions, guaranteeing a true DAO and consequently, the independence of the Smart Contracts that guide our every interaction with the bevy of unique earning tools on offer.</p>
            </div>
            <div className='brand-image'>
                <img src={brandImage} alt='brand' />
            </div>
        </div >
    );
};

export default Main;