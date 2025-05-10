import React, { useState } from "react"; // Ensure useState is imported
import styles from "./Header.module.css"; 
import LoginDialog from './LoginDialog'; // Import the LoginDialog component

const Header = () => {

    const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

    const openLoginDialog = () => {
        setLoginDialogOpen(true);
      };
    
      const closeLoginDialog = () => {
        setLoginDialogOpen(false);
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
              <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
                <li>
                  <button className={styles.loginButton} onClick={openLoginDialog}>Login</button>
                </li>
              </ul>
            </nav>
          </header>
    
          {/* Render the LoginDialog component */}
          <LoginDialog isOpen={isLoginDialogOpen} onClose={closeLoginDialog} />
        </div>
      );
    };
    
    export default Header;


