import React from 'react';
import './custom-button.style.scss';


const CustomButton = ({ children, handleOnClick, ...otherProps }) => (
        <button className="custom-button" onClick={handleOnClick} {...otherProps}>
            {children}
        </button>
);

export default CustomButton;