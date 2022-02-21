import React from 'react';
import t from '../images/Frame-6.png'

const Donation = () => {
    return (
        <div>
            <div className='background'>
                <h3 className='donation-header'>Enter Donation Amount</h3>
                <span className='donation'>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        <label for="currency">
                            <img className='label' src={t} alt='donate' />
                        </label>
                        <select id="currencies" name="currencies">
                            <option value="volvo">USDT</option>
                            <option value="saab">Option 2</option>
                            <option value="fiat">Option 3</option>
                        </select>
                    </span>
                    <p className='
            content'>Balance: ...</p>
                </span>
                <input type="text" placeholder='0.0' />
                <button className='connect-wallet-btn' style={{ padding: '10px 30px', margin: 'auto', display: 'block' }}>Donate</button>
                <p className='content'>Claimed $ILK: ---</p>
                <p className='content'>Locked $ILK: ---</p>
                <p className='content'>Claimable $ILK: ---</p>
            </div>
            <div className='background'>
                <h3 className='donation-header'>Redeem $ILK</h3>
                <span className='donation'>
                    <p className='
            content'>Balance: ...</p>
                    <p className='
            content'>--$ILK</p>
                </span>
                <input type="text" placeholder='0.0' />
                <button className='connect-wallet-btn' style={{ padding: '10px 30px', margin: 'auto', display: 'block' }}>Donate</button>
            </div>

        </div>

    );
};

export default Donation;