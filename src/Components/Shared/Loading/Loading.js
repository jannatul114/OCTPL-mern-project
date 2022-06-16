import React from 'react';
import loading from '../.././../images/loading.gif'
const Loading = () => {
    return (
        <div className='flex justify-center h-80 items-center'>
            <img src={loading} alt="" />
        </div>
    );
};

export default Loading;