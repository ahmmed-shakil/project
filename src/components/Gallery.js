import React from 'react';
import gallery1 from '../images/gallery-1.png'
import gallery2 from '../images/gallery-2.png'

const Gallery = () => {
    return (
        <div className='background' style={{ padding: '30px' }}>
            <div className='gallery-image'>
                <img src={gallery1} alt='gallery' />
            </div>
            <div className='gallery-image' style={{ marginTop: '20px' }}>
                <img src={gallery2} alt='gallery' />
            </div>
        </div>
    );
};

export default Gallery;