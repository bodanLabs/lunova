// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import { getCookie } from './utils';
import loginIllustration from './assets/login-page-women-mirror.png'; // Make sure to import your image

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance.post('/api/login/', {
      username: username,  // Use 'username' or 'email' depending on your backend logic
      password: password,
    })
    .then((response) => {
      // Save auth token
      localStorage.setItem('authToken', response.data.token);
      
      // Refresh CSRF token after login
      axiosInstance.defaults.headers['X-CSRFToken'] = getCookie('csrftoken');
      
      // Redirect to dashboard after successful login
      navigate('/dashboard');
    })
    .catch((error) => {
      setErrorMessage('Invalid credentials. Please try again.');
    });
  };

const goToSignup = () => {
  navigate('/signup');
};

return (
  <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#EAEAEA' }}>
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-center items-center p-0">
        <h1 className="text-7xl font-bold mb-4" style={{ color: '#4A4A4A' }}>LUNOVA</h1>
        <h2 className="text-5xl font-bold mb-6" style={{ color: '#008080' }}>YOUR DAILY GRATITUDE</h2>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />

          {/* Login button (half the width of the input field) */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/3 py-3 font-semibold rounded-md shadow hover:opacity-90 transition"
              style={{ backgroundColor: '#008080', color: '#FFFFFF' }}
            >
              LOGIN
            </button>
          </div>
        </form>

        <p className="text-center mt-6">Don't have an account?</p>
        <button
          onClick={goToSignup}
          className="w-full py-3 mt-2 font-semibold rounded-md shadow hover:opacity-90 transition"
          style={{ backgroundColor: '#4A4A4A', color: '#FFFFFF' }}
        >
          SIGN UP
        </button>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden md:flex items-center justify-center">
        <img src={loginIllustration} alt="Login Illustration" className="w-full h-auto" />
      </div>
    </div>
  </div>
);
};

export default Login;
