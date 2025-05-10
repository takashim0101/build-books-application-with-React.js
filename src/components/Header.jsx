import React, { useState } from "react"; 
import { Link } from "react-router-dom"; 
import styles from "./Header.module.css"; 
import LoginDialog from './LoginDialog'; 

const Header = () => {
    const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false); // State for the hamburger menu

    const openLoginDialog = () => {
        setLoginDialogOpen(true);
    };
    
    const closeLoginDialog = () => {
        setLoginDialogOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen); // Toggle menu state
    };

    return (
        <div className={styles.appContainer}>
            <header className={styles.header}>
                <div className={styles.logoContainer}>
                    <div className={styles.companyName}>
                        <img
                            src="https://cdn.prod.website-files.com/655d9d0f63f0529b22c94af6/65cbf0474a42367f8a54dcda_MR_Horizontal_ring_whitetext.svg"
                            className={styles.logoImage}
                            alt="Company Logo"
                        />
                    </div>
                </div>
                <nav className={styles.navbar}>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        <span className={styles.hamburgerIcon}>&#9776;</span> {/* Hamburger icon */}
                    </div>
                    <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/another-route">Another Menu</Link>
                        </li>
                        <li className={styles.nzFlagContainer}>
                            <img
                                src="/images/new-zealander-flag-small.gif" // Path to the flag
                                className={styles.nzFlagImage}
                                alt="New Zealand Flag"
                            />
                        </li>
                        <li>
                            <button className={styles.loginButton} onClick={openLoginDialog}>Login</button>
                        </li>
                    </ul>
                </nav>
            </header>

            <LoginDialog isOpen={isLoginDialogOpen} onClose={closeLoginDialog} />
        </div>
    );
};

export default Header;








