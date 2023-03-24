import React, { useState } from 'react';
import './Mobile.css'


const Mobile = () => {
    const [count, setCount] = useState(100);
    const batteryDown = () => {
        if (count > 0) {
            const newValue = count - 10;
            setCount(newValue);
        }
    }

    return (
        <div>
            <h2 style={{color: 'tomato'}}>Mobile Battery Down Section</h2>
            <div>
                <h3>Charge Level: {count}%</h3>
                <button className='btnStyle' onClick={batteryDown}>Battery Down</button>
            </div>
        </div>
    );
};



export default Mobile;