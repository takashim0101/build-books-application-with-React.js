import React, { useEffect } from 'react'; // Import useEffect
import { useAppContext } from './context/appContext.jsx';

const Favorites = () => {
    const context = useAppContext(); // Ensure context is defined
    const { favorites, addToFavorites, removeFavorites } = context;

    console.log('Favorites are', favorites);
  
    // added useEffect
    useEffect(() => {
      console.log('Favorites are', favorites);
  }, [favorites]); // Output a log every time favorites are updated
    
    // Function to check if a book is in favorites
    const favoritesChecker = (id) => {
        return favorites.some((book) => book.id === id);
    };

    return (
        <div className="favorites">
            {favorites.length > 0 ? (
                favorites.map((book) => ( // Changed 'Favorites' to 'favorites'
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
                ))
            ) : (
                <h1>You don't have any favorite books yet!</h1> // Fixed typo
            )}
        </div>   
    );
}

export default Favorites;

