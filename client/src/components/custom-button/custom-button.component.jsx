import React from 'react';
import './custom-button.style.scss';


const CustomButton = ({ children, handleOnClick, ...otherProps }) => (
    < div className = "button-container" >
        <button className='custom-button' onClick={handleOnClick} {...otherProps}>
            {children}
        </button>
    </div >
);

export default CustomButton;