import React, { useState, useEffect } from 'react';
import Checkbox from './checkbox';
import ToggleAllButton from './ToggleAllButton';
import './filteringMenu.css';

const FilteringMenu = () => {
    const initialCheckboxes = [
        { label: 'Tulostiedot kotimaasta', checked: true },
        { label: 'Tulostiedot ulkomailta', checked: true },
        { label: 'Yhtiökokoukset', checked: true },
        { label: 'Osingot', checked: true },
        { label: 'Tilastot ja indeksit', checked: true },
        { label: 'Muut', checked: true },
    ];

    const [checkboxes, setCheckboxes] = useState(
        [initialCheckboxes[0].checked,
        initialCheckboxes[1].checked,
        initialCheckboxes[2].checked,
        initialCheckboxes[3].checked,
        initialCheckboxes[4].checked,
        initialCheckboxes[5].checked
        ]
        );
    const [buttonLabel, setButtonLabel] = useState('Valitse kaikki');

    useEffect(() => {
        const allChecked = checkboxes.every((checkbox) => checkbox);
        const allUnchecked = checkboxes.every((checkbox) => ! checkbox);
        if (allChecked) {
            setButtonLabel('Tyhjennä valinnat');
        }   else if (allUnchecked) {
            setButtonLabel('Valitse kaikki');
        }
    }, [checkboxes]);

    const handleCheckboxChange = (index) => {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[index] = ! newCheckboxes[index];
        setCheckboxes(newCheckboxes);
    };

    const handleCheckAllButtonClick = () => {
        const allChecked = checkboxes.every((checkbox) => checkbox);
        const newCheckboxes = checkboxes.map(() => !allChecked);
        setCheckboxes(newCheckboxes);
    };

    return (
        <div className="filteringMenu">
            <div className="checkboxes">
                {checkboxes.map((checkbox, index) => (
                    <Checkbox key={index} label={initialCheckboxes[index].label} checked={checkbox} onChange={() => handleCheckboxChange(index)} />
                ))}
            </div>
            <div className="toggleAllButtonContainer">
                <ToggleAllButton label={buttonLabel} onClick={handleCheckAllButtonClick} />
            </div>
        </div>
    );
};

export default FilteringMenu;