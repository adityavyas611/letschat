import React from 'react';
import './custom-button.style.scss';


const CustomButton = ({ children, ...props }) => (
    <div className="button-container">
        <button className='custom-button' {...props}>
            {children}
        </button>
    </div>
);

export default CustomButton;