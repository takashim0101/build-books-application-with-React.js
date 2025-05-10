import React from "react";
import styles from "./Header.module.css"; 

const Header = () => {
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
            {/* My Company */}
          </div>
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>
              <button className={styles.loginButton}>Login</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;




