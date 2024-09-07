// axiosInstance.js
import axios from 'axios';

// Function to get the CSRF token from the cookie
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',  // Your Django backend URL
  timeout: 5000,
  headers: {
    'X-CSRFToken': getCookie('csrftoken'),  // Set CSRF token from the cookie
    'Content-Type': 'application/json',
  },
  withCredentials: true,  // Ensure cookies (including CSRF token) are sent with requests
});

// Add Axios interceptor to refresh CSRF token with every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Refresh the CSRF token from the cookies
    config.headers['X-CSRFToken'] = getCookie('csrftoken');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
