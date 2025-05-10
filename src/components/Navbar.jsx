// import React from "react";
// import { Link } from "react-router-dom";
// 
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div>
//         <h1>
//           Marketing Association NZ <span className="highlight">Books App</span>
//         </h1>
//       </div>
// 
//       <div>
//         <Link to="/">Home</Link>
// 
//         <Link to="/favorites">Your Favorites</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// 
// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <header className="header">
//         <div className="logo">My Company</div>
//         <nav className="navbar">
//           <ul>
//             <li>Menu 1</li>
//             <li>Menu 2</li>
//             <li>Menu 3</li>
//             <li><button className="login-button">Login</button></li>
//           </ul>
//         </nav>
//       </header>
//       <main className="main-content">
//         <h1>Lorem ipsum dolor sit amet</h1>
//         <div className="search-container">
//           <input type="text" placeholder="Search..." />
//           <button className="search-button">SEARCH</button>
//         </div>
//       </main>
//     </div>
//   );
// };
// 
// export default Navbar;


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
      <h1>A room without books is like a body without a soul.</h1> {/* Added text */}
      <h2>Book Finder</h2> {/* Book Finder title */}
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
          <span className={styles.buttonText}>Search</span> {/* テキストを追加 */}
        </button>
      </div>
    </div>
  );
};

export default Navbar;








