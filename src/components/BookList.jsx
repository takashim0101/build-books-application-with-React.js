import React, { useState, useEffect } from "react";
import axios from "axios"; // Library to make HTTP requests
import { useAppContext } from "./context/appContext.jsx";
import ImageModal from "./ImageModal";
import Navbar from "./Navbar";

const BookList = () => {
  const [books, setBooks] = useState([]); // State to hold the list of books
  const [filteredBooks, setFilteredBooks] = useState([]); // State to hold the filtered list of books
  const context = useAppContext();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the image modal
  const [selectedImage, setSelectedImage] = useState(""); // State to hold the selected image URL
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(""); // State to manage error messages

  // Check if context is available
  if (!context) {
    return <div>Error: Context is not available</div>; // Show error if context is not available
  }

  const { favorites, addToFavorites, removeFavorites } = context;

  // Fetch data when the component mounts
  useEffect(() => {
    // Make a GET request to the backend to fetch book data
    axios
      .get("http://localhost:5000/api/books") // Call the backend endpoint
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data : []; // Ensure the response is an array
        setBooks(data); // Update the books state with the fetched data
        setFilteredBooks(data); // Initialize filtered books with the fetched data
      })
      .catch((err) => {
        console.error("Error fetching data:", err.message); // Log any errors
        setError("Error fetching data. Please try again."); // Set error message
        setBooks([]); // Clear the books state on error
      })
      .finally(() => {
        setLoading(false); // Set loading to false after the request completes
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Handle image click to open the modal
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); // Set the selected image URL
    setIsModalOpen(true); // Open the modal
  };

  return (
    <>
      <Navbar
        onSearch={(searchTerm) => {
          // Filter books based on the search term
          const results = books.filter((book) =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredBooks(results); // Update filtered books based on search
        }}
      />{" "}
      {/* Pass search function to Navbar */}
      {loading && (
        <div className="centered-message">Loading...</div> 
      )}
      {error && (
        <div className="centered-message error">{error}</div> 
      )}
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <h3>{book.title}</h3>
            <img
              src={book.image_url} // Image URL for the book
              alt={book.title} // Alt text for the image
              onClick={() => handleImageClick(book.image_url)} // Open modal on image click
              style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
            />
            <div className="genre-container">
              <span className="genres">
                {book.genres
                  ? book.genres.split(",").join(", ")
                  : "No genres available"}{" "}
                // Display genres
              </span>
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
      <ImageModal
        isOpen={isModalOpen} // Pass modal state
        onClose={() => setIsModalOpen(false)} // Function to close the modal
        imageSrc={selectedImage} // Image source for the modal
      />
    </>
  );
};

export default BookList; // Export the BookList component
