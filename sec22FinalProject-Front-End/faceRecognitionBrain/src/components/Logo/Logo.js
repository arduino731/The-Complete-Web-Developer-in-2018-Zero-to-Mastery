import React from 'react';
import Tilt from 'react-tilt';
import brain from './hockey.png';
import './Logo.css';

const logo = () => {
    return (
        <div className='ma4 mt0' > 
            <Tilt className="Tilt br2 shadow-2" options={{ max:25, scale: 1.1, speed :500}} style={{ height: "150px", width: '150px' }} >
                <div className="Tilt-inner">
                    <img style={{paddingTop:'0px', width: '100%' }} alt='logo' src={brain}/> 
                </div>
            </Tilt>
        </div>
    )
}

export default logo;