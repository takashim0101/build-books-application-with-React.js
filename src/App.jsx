import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from './components/context/appContext'; // Correct this path
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import './App.css';
import ImageModal from './components/ImageModal'; // ImageModalのインポート

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/favorites" element={<Favorites />} />           
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;






