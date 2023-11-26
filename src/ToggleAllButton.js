import React from 'react';
import './ToggleAllButton.css'

const ToggleAllButton = ({ label, onClick }) => {
    return (
        <button className="toggleAllButton" onClick={onClick}>{label}</button>
    );
};

export default ToggleAllButton;