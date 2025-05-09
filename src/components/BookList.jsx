import React, { useState, useEffect } from "react";
import { API_URL } from "../API.js";
import axios from "axios";
import { useAppContext } from "./context/appContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ImageModal from "./ImageModal"; // Import the ImageModal component

const BookList = () => {
  const [books, setBooks] = useState([]); // Initial value is an empty array
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const context = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState(""); // State for selected image

  if (!context) {
    return <div>Error: Context is not available</div>;
  }

  const { favorites, addToFavorites, removeFavorites } = context;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : []; // If not an array, set to empty array
        setBooks(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message);
        setBooks([]); // Set to empty array on error
      });
  }, []);

  // Implementing the search functionality
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true); // Open the modal
  };

  return (
    <>
      <div className="header">
        <h1>A room without books is like a body without a soul.</h1>
      </div>
      <h2>Find Your Book</h2>
      <div className="search">
        <input
          type="text"
          placeholder="Enter your Book Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h3>{book.title}</h3>
            </div>
            <div>
              <img 
                src={book.image_url} 
                alt={book.title} 
                onClick={() => handleImageClick(book.image_url)} // Add click event to image
                style={{ cursor: "pointer" }} // Pointer cursor
              />
            </div>
            <div>
              {favorites.some((fav) => fav.id === book.id) ? (
                <button onClick={() => removeFavorites(book.id)}>
                  Remove from Favorites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Image Modal */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        imageSrc={selectedImage} 
      />
    </>
  );
};

export default BookList;

