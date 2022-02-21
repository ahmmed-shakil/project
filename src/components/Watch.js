import React, { useEffect, useState } from 'react';
import useCountdown from '../hooks/useCountdown';

const Watch = () => {

    const endTime = new Date().getTime() + 60000 * 2; // 2 minutes
    const [timeLeft, setEndTime] = useCountdown(endTime);

    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;
    return (
        <div className='background'>
            <h2 className='header watch'>Days Until Launch</h2>
            <hr className='border-bottom' />
            <p className='clock'>{`${minutes}:${seconds}`}</p>        </div>
    );
};

export default Watch;