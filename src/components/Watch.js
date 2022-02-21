import React, { useEffect, useState } from 'react';

const Watch = () => {

    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();

    let interval;

    const startTimer = () => {
        const countDownDate = new Date("March 1,2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer

                clearInterval(interval.current);
            } else {
                // Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        });
    };

    useEffect(() => {
        startTimer();
    });

    return (
        <div className='background'>
            <h2 className='header watch'>Days Until Launch</h2>
            <hr className='border-bottom' />
            <section className="timer-container">
                <section className="timer">
                    <div className="clock">
                        <section>
                            <span>{timerDays}</span>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <span>{timerHours}</span>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <span>{timerMinutes}</span>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <span>{timerSeconds}</span>
                        </section>
                    </div>
                </section>
            </section>
        </div>
    );
};
Watch.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Watch;