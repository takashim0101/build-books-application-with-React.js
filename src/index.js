import React from "react"; // Import React library for building user interfaces
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering React components to the DOM
import "./index.css"; // Import the main stylesheet for the application
import App from "./App"; // Import the main App component from App.jsx
import reportWebVitals from "./reportWebVitals"; // Import the function to measure performance metrics
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for client-side routing
import AppContextProvider from "./components/context/appContext"; // Import context provider for managing global state

// Create a root element for rendering the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application to the root element
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContextProvider>
                <App /> // Render the App component within the context provider and router
            </AppContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// Call reportWebVitals to log performance metrics
reportWebVitals();


