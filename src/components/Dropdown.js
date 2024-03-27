import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Drop.css'; // Assuming you have the CSS file in the same directory
import { ArrowRight, ChevronDown } from 'lucide-react';


const CustomDropdown = ({ name }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = (event) => {
        if (!event.target.matches('.custom-dropbtn')) {
            setIsDropdownOpen(false);
        }
    };

    // Attach an event listener to the window for closing the dropdown when clicked outside
    useEffect(() => {
        window.addEventListener('click', closeDropdown);
        return () => window.removeEventListener('click', closeDropdown);
    }, []);

    return (
        <div className="custom-dropdown">
            <button onClick={toggleDropdown} className="custom-dropbtn">
                {name}<ChevronDown />
            </button>
            <div id="myCustomDropdown" className={`custom-dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
                <h4>{name}<ArrowRight /></h4>
                <div className="rowing">
                    <a href="/">Option 1</a>
                    <a href="/">Option 2</a>
                </div>
                <div className="rowing">
                    <a href="/">Option 3</a>
                    <a href="/">Option 4</a>
                </div>
                <div className="rowing">
                    <a href="/">Option 5</a>
                    <a href="/">Option 6</a>
                </div>
            </div>
        </div>
    );
};

CustomDropdown.propTypes = {
    name: PropTypes.string.isRequired,
};

export default CustomDropdown;
