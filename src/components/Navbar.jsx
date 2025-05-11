import React, { useState } from "react"; // Import React and useState hook for state management
import styles from "./Navbar.module.css"; // Import CSS module for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon for icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Import the search icon

const Navbar = ({ onSearch }) => { // Navbar component accepts an onSearch prop
  const [searchTerm, setSearchTerm] = useState(""); // State to manage the search term

  // Function to handle search button click
  const handleSearch = () => {
    onSearch(searchTerm); // Call the search function passed as a prop with the current search term
  };

  return (
    <div className={styles.appContainer}> {/* Container for the navbar */}
      <h1>A room without books is like a body without a soul.</h1> {/* Inspirational quote */}
      
      <div className={styles.headerImages}> {/* Container for background images */}
        <img src="./images/bg1.png" alt="Background 1" /> {/* First background image */}
        <img src="./images/bg2.png" alt="Background 2" /> {/* Second background image */}
      </div>
      <br/>
      <h2>Book Finder</h2> {/* Subtitle for the navbar */}
      <div className={styles.searchContainer}> {/* Container for search input and button */}
        <input
          type="text" // Input type for text
          placeholder="Enter your Book Name" // Placeholder text for the input
          value={searchTerm} // Bind input value to searchTerm state
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
          className={styles.searchInput} // Apply styles from the CSS module
        />        
        <button onClick={handleSearch} className={styles.searchButton}> {/* Button to trigger search */}
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} /> {/* Search icon */}
          <span className={styles.buttonText}>Search</span> {/* Button text */}
        </button>
      </div>
    </div>
  );
};

export default Navbar; // Export the Navbar component for use in other parts of the application



