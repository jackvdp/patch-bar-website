import React, { useState } from 'react';
import styles from './Hamburger.module.css';

const NavbarToggleButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleHamburger = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`${styles.setStyles}`}>
            <div className={`${styles.navToggle} ${isOpen ? "open" : ''}`} onClick={toggleHamburger} >
                <span className={`${!isOpen ? styles.barOne : styles.barOneOpen} `}></span>
                <span className={`${!isOpen ? styles.barTwo : styles.barTwoOpen} `}></span>
                <span className={`${!isOpen ? styles.barThree : styles.barThreeOpen} `}></span>
            </div>
        </div>
    );
};

export default NavbarToggleButton;
