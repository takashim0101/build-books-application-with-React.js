import axios from 'axios'; // Import axios for making HTTP requests

// Retrieve the backend URL from environment variables, with a fallback to localhost
const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// User login function
export const loginUser = async (email, password) => {
  try {
    // Send a POST request to the login API with the email and password
    const response = await axios.post(`${BASE_URL}/api/login`, { email, password });
    return response.data; // Return the response data on success
  } catch (error) {
    // Log the error to the console for debugging
    console.error('Login error:', error.response ? error.response.data : error.message);
    // Throw the error message or a default network error message
    throw error.response ? error.response.data : { message: 'Network error. Please try again later.' };
  }
};








