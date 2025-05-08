import React, { useState, useEffect } from 'react';
import { API_URL } from '../API.js';
import axios from "axios";
import { useAppContext } from './context/appContext.jsx';

const BookList = () => {
    const [books, setBooks] = useState([]); // Initial value is an empty array
    const context = useAppContext();

    if (!context) {
        return <div>Error: Context is not available</div>;
    }

    const { favorites, addToFavorites, removeFavorites } = context;

    console.log('Favorites are', favorites);
    console.log('API_URL:', API_URL); // Check the URL here

    // Function to check if a book is in favorites
    const favoritesChecker = (id) => {
        return favorites.some((book) => book.id === id);
    };

    useEffect(() => {
        console.log('API_URL in useEffect:', API_URL);
        axios.get(API_URL)
            .then(res => {
                console.log('API response:', res.data); // Check the response
                const data = Array.isArray(res.data) ? res.data : []; // If not an array, set to empty array
                console.log('Books set:', data); // Check the data being set
                setBooks(data);
            })
            .catch(err => {
                console.error('Error fetching data:', err.message);
                setBooks([]); // Set to empty array on error
            });
    }, []);

    console.log('Books:', books); // Display the value of books

    return (
        <div className="book-list">
            {books.map((book) => (
                <div key={book.id} className="book">
                    <div>
                        <h3>{book.title}</h3>
                    </div>
                    <div>
                        <img src={book.image_url} alt={book.title} />
                    </div>
                    <div>
                        {favoritesChecker(book.id) ? (
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
    );
};

export default BookList;

