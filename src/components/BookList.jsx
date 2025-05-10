import React, { useState, useEffect } from "react";
import { API_URL } from "../API.js"; 
import axios from "axios"; 
import { useAppContext } from "./context/appContext.jsx"; 
import ImageModal from "./ImageModal"; 
import Navbar from "./Navbar"; 

const BookList = () => {
  const [books, setBooks] = useState([]); // List of books
  const [filteredBooks, setFilteredBooks] = useState([]); // Filtered list of books
  const context = useAppContext(); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(""); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(""); 

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { favorites, addToFavorites, removeFavorites } = context; 

  // Fetch data when the component mounts
  useEffect(() => {
    axios
      .get(API_URL) 
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : [];
        setBooks(data); 
        setFilteredBooks(data); // Initialize filtered books
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message); 
        setError("Error fetching data. Please try again."); 
        setBooks([]); 
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  // Handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); 
    setIsModalOpen(true); 
  };

  return (
    <>
      <Navbar onSearch={(searchTerm) => {
        const results = books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredBooks(results); // Update filtered books based on search
      }} /> {/* Pass search function to Navbar */}
      
      {loading && <div>Loading...</div>} 
      {error && <div className="error">{error}</div>} 
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3> 
            <img
              src={book.image_url}
              alt={book.title}
              onClick={() => handleImageClick(book.image_url)} 
              style={{ cursor: "pointer" }} 
            />
            <div className="genre-container">
              <span className="genres">
                {book.genres ? book.genres.split(",").join(", ") : "No genres available"}
              </span>
            </div>
            <div>
              {favorites.some((fav) => fav.id === book.id) ? (
                <button onClick={() => removeFavorites(book.id)}>Remove from Favorites</button>
              ) : (
                <button onClick={() => addToFavorites(book)}>Add to Favorites</button>
              )}
            </div>
          </div>
        ))}
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={selectedImage}
      />
    </>
  );
};

export default BookList;

