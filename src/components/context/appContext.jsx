// src/context/appContext.js
import React, { createContext, useContext, useState } from 'react';

// 1. Create a context with an initial value of null.
const AppContext = createContext(null);

// 2. Define the AppProvider component.
export const AppProvider = ({ children }) => {
    // 3. Create a state to manage the list of favorite books.
    const [favorites, setFavorites] = useState([]);

    // 4. Function to add a book to the favorites list
    const addToFavorites = (book) => {
        setFavorites((prevFavorites) => {
            // Spread the current favorites and add the new book.
            return [...prevFavorites, book];
        });
    };

    // 5. Function to remove a book from the favorites list by its ID
    const removeFavorites = (id) => {
        setFavorites((prevFavorites) => {
            // Return a new array excluding the book with the specified ID.
            return prevFavorites.filter((book) => book.id !== id);
        });
    };

    // 6. Return the context provider with the state and functions.
    return (
        <AppContext.Provider value={{ favorites, addToFavorites, removeFavorites }}>
            {children} {/* Render child components here */}
        </AppContext.Provider>
    );
};

// 7. Define a custom hook to use the context.
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('App context must be within AppProvider');
    }
    return context; // Return the context value
};





