import React, { useState, useEffect } from "react"; 
import { Link } from "react-router-dom"; // Import Link for navigation between pages
import styles from "./Header.module.css"; // Import CSS styles for the header
import LoginDialog from './LoginDialog'; // Import the login dialog component

const Header = () => {
    const [logoUrl, setLogoUrl] = useState(""); // State to hold the logo URL
    const [isLoginDialogOpen, setLoginDialogOpen] = useState(false); // State to track if the login dialog is open
    const [isMenuOpen, setMenuOpen] = useState(false); // State to track if the menu is open

    // Fetch logo URL from the backend
    useEffect(() => {
        const fetchLogoUrl = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/logo"); // URL of the backend endpoint
                const data = await response.json();
                 console.log("Fetched logo URL:", data.logoUrl); // Debug log
                setLogoUrl(data.logoUrl); // Set the logo URL from the response
            } catch (error) {
                console.error("Error fetching logo URL:", error);
            }
        };

        fetchLogoUrl(); // Call the function to fetch the logo URL
    }, []);

    const openLoginDialog = () => {
        setLoginDialogOpen(true); // Open the login dialog
    };

    const closeLoginDialog = () => {
        setLoginDialogOpen(false); // Close the login dialog
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen); // Toggle the menu open/close
    };

    return (
        <div className={styles.appContainer}> {/* Main container for the header */}
            <header className={styles.header}> {/* Header section */}
                <div className={styles.logoContainer}> {/* Container for the logo */}
                    <div className={styles.companyName}> {/* Company name section */}
                        {logoUrl ? ( // Check if logoUrl is valid
                            <img
                                src={logoUrl} // Use the fetched logo URL
                                className={styles.logoImage} // Apply styles to the logo image
                                alt="Company Logo" // Alternative text for the logo
                            />
                        ) : (
                            <p>Loading logo...</p> // Optional loading message
                        )}
                    </div>
                </div>
                <nav className={styles.navbar}> {/* Navigation section */}
                    <div className={styles.hamburger} onClick={toggleMenu}> {/* Hamburger icon for menu */}
                        <span className={styles.hamburgerIcon}>&#9776;</span> {/* Display the hamburger icon */}
                    </div>
                    <ul className={`${styles.menu} ${isMenuOpen ? styles.active : ""}`}> {/* Menu items */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/favorites">Favorites</Link></li>
                        <li><Link to="/another-route">Another Menu</Link></li>
                        <li className={styles.nzFlagContainer}> {/* Container for the New Zealand flag */}
                            <img
                                src="/images/new-zealander-flag-small.gif" // Path to the flag image
                                className={styles.nzFlagImage} // Apply styles to the flag image
                                alt="New Zealand Flag" // Alternative text for the flag
                            />
                        </li>
                        <li>
                            <button className={styles.loginButton} onClick={openLoginDialog}>Login</button> {/* Button to open the login dialog */}
                        </li>
                    </ul>
                </nav>
            </header>
            <LoginDialog isOpen={isLoginDialogOpen} onClose={closeLoginDialog} /> {/* Render the login dialog */}
        </div>
    );
};

export default Header; // Export the Header component so it can be used in other files









