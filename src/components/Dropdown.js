import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Drop.css';
import { ChevronDown, ArrowRight } from 'lucide-react';

const CustomDropdown = ({ name, options }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = (event) => {
        if (!event.target.matches('.custom-dropbtn')) {
            setIsDropdownOpen(false);
        }
    };

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
                    {options.map((option, index) => (
                        <div key={index} className="rowing">
                            <img src={option} alt='...' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

CustomDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
};

export default CustomDropdown;
