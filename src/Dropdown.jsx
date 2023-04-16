import React, { useState } from "react";
import './DropDown.css'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
                Menu
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <button className="dropdown-menu-item" onClick={toggleDropdown}>
                        Option 1
                    </button>
                    <button className="dropdown-menu-item" onClick={() => console.log("Option 2 clicked")}>
                        Option 2
                    </button>
                    <button className="dropdown-menu-item" onClick={() => console.log("Option 3 clicked")}>
                        Option 3
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
