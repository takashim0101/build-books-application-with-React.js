import React, { useState, useEffect } from 'react';
import { API_URL } from '../API.js';
import axios from "axios";
import { useAppContext } from './context/appContext.jsx';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const context = useAppContext();

    if (!context) {
        return <div>Error: Context is not available</div>;
    }

    const { favorites, addToFavorites, removeFavorites } = context;

    console.log('Favorites are', favorites);

    // Function to check if a book is in favorites
    const favoritesChecker = (id) => {
        return favorites.some((book) => book.id === id);
    };

    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                setBooks(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

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

