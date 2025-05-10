import React, { useState } from "react";
import styles from "./Navbar.module.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const handleSearch = () => {
    onSearch(searchTerm); // Call the search function passed as a prop
  };

  return (
    <div className={styles.appContainer}>      
      <h1>A room without books is like a body without a soul.</h1>
      <h2>Book Finder</h2>
      
      <div className={styles.headerImages}>
        <img src="./images/bg1.png" alt="Background 1" />
        <img src="./images/bg2.png" alt="Background 2" />
      </div>
      
      <div className={styles.searchContainer}>        
        <input
          type="text"
          placeholder="Enter your Book Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className={styles.searchInput} // Apply styles
        />        
        <button onClick={handleSearch} className={styles.searchButton}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />
          <span className={styles.buttonText}>Search</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;










