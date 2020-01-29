import React from 'react';
import './drop-down.style.scss';

const DropDown = ({ onChangeResolution }) => (
    <select className="drop-down" onChange={onChangeResolution}>
        <option defaultValue="720">720p</option>
        <option value="480">480p</option>
        <option value="360">360p</option>
    </select>
);

export default DropDown;