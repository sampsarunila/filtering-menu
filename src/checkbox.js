import React from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

const Checkbox = ({ checked, onChange, label }) => {
    return (
        <div className="checkbox" onClick={onChange}>
            <div className={`checkboxIcon ${checked ? "checked" : ""}`}>
            {checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="14" height="14"><path d="M7.8,21.425A2.542,2.542,0,0,1,6,20.679L.439,15.121,2.561,13,7.8,18.239,21.439,4.6l2.122,2.121L9.6,20.679A2.542,2.542,0,0,1,7.8,21.425Z" fill="#ffffff"/></svg>
                    ) : null
                }
            </div>
            <span className="checkboxLabel">{label}</span>
        </div>
    );
};

Checkbox.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
};

export default Checkbox;