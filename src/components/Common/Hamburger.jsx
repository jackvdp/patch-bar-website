import React, { useState, useEffect } from 'react';
import styles from './Hamburger.module.css';

const NavbarToggleButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const menuIcon = document.querySelector(".topnav .menu-icon");
        if (menuIcon) {
            menuIcon.addEventListener("click", function () {
                document.querySelector(".topnav .menu-icon .text ").classList.contains("open") ? setIsOpen(false) : setIsOpen(true);
            })
        }
    }, []);

    return (
        <div className={`${styles.setStyles}`}>
            <div className={`${styles.navToggle} ${isOpen ? "open" : ''}`} >
                <span className={`${!isOpen ? styles.barOne : styles.barOneOpen} `}></span>
                <span className={`${!isOpen ? styles.barTwo : styles.barTwoOpen} `}></span>
                <span className={`${!isOpen ? styles.barThree : styles.barThreeOpen} `}></span>
            </div>
        </div>
    );
};

export default NavbarToggleButton;
