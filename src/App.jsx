import React, { useState } from "react"; // Import React and useState hook for state management
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and routing components
import { AppProvider } from "./components/context/appContext"; // Import the context provider for global state management
import BookList from "./components/BookList"; // Import the BookList component
import BookDetails from "./components/BookDetails"; // Import the BookDetails component
import Header from "./components/Header"; // Import Header component
import Footer from "./components/Footer"; // Import Footer component
import Favorites from "./components/Favorites"; // Import Favorites component
import LoginDialog from "./components/LoginDialog"; // Import LoginDialog for user login functionality
import "./App.css"; // Import the main CSS file for styling the App

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State to manage visibility of the login dialog

  // Function to open the login dialog
  const handleLoginOpen = () => {
    console.log("Opening login dialog"); // Log action to the console
    setIsLoginOpen(true); // Update state to open login dialog
  };

  // Function to close the login dialog
  const handleLoginClose = () => {
    console.log("Closing login dialog"); // Log action to the console
    setIsLoginOpen(false); // Update state to close login dialog
  };

  return (
    <AppProvider> {/* Wrap the app in the context provider for global state */}
      <Router> {/* Use Router for managing routes */}
        <div className="App"> {/* Main application container */}
          <Header onLogin={handleLoginOpen} /> {/* Pass the handleLoginOpen function to Header */}
          <Routes> {/* Define application routes */}
            <Route path="/" element={<BookList />} /> {/* Route for the main book list */}
            <Route path="/book/:id" element={<BookDetails />} /> {/* Route for book details by ID */}
            <Route path="/favorites" element={<Favorites />} /> {/* Route for user's favorite books */}
          </Routes>
          <Footer /> {/* Render the footer component */}
          <LoginDialog isOpen={isLoginOpen} onClose={handleLoginClose} /> {/* Render the login dialog */}
        </div>
      </Router>
    </AppProvider>
  );
}

export default App; // Export the App component for use in other parts of the application

