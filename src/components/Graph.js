import React from 'react';
import graph from '../images/progress.png'

const Graph = () => {
    return (
        <div>

            <div className='graph'>
                <img src={graph} alt='graph' />
            </div>
        </div>
    );
};

export default Graph;