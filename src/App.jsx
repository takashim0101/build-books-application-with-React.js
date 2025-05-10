import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from './components/context/appContext'; // パスの確認
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Header from './components/Header'; // Headerをインポート
import Navbar from './components/Navbar'; // Headerをインポート
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import './App.css';
import ImageModal from './components/ImageModal'; // ImageModalのインポート（必要に応じて）

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header /> {/* NavbarをHeaderに変更 */}
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







