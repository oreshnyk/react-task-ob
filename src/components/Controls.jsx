import React from 'react';

const Controls = ({ handleOnline, handleOffline }) => (
    <div className='Online__Controller'>
        <button type='button' onClick={handleOnline}>Go online</button>
        <button type='button' onClick={handleOffline}>Go offline</button>
    </div>
);

export default Controls;