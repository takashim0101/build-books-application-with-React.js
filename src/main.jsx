import { StrictMode } from 'react'; // Import StrictMode for highlighting potential problems in an application
import { createRoot } from 'react-dom/client'; // Import createRoot for rendering the React application
import './index.css'; // Import the main stylesheet for the application
import App from './App.jsx'; // Import the main App component from App.jsx

// Render the application to the root DOM element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> // Render the App component within StrictMode
  </StrictMode>,
);

