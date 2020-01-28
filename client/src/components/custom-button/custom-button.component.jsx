import React from 'react';
import './custom-button.style.scss';


const CustomButton = ({ children, handleClick, ...props }) => (
    <div className="button-container">
        <button className='custom-button' onClick={handleClick} {...props}>
            {children}
        </button>
    </div>
);

export default CustomButton;