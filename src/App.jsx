import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from './components/context/appContext'; // Check the path
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Header from './components/Header'; // Import Header
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header /> {/* Header component with navigation */}
          <Routes>
            <Route path="/" element={<BookList />} /> {/* Main book list */}
            <Route path="/book/:id" element={<BookDetails />} /> {/* Book details by ID */}
            <Route path="/favorites" element={<Favorites />} /> {/* User's favorite books */}
          </Routes>
          <Footer /> {/* Footer component */}
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;








