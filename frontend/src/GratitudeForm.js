import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

const GratitudeForm = () => {
  const [gratitude, setGratitude] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!gratitude) {
      setErrorMessage('Gratitude cannot be empty.');
      return;
    }

    axiosInstance.post('/api/gratitudes/', { content: gratitude })
      .then(response => {
        setSuccessMessage('Gratitude added successfully!');
        setGratitude('');
        setErrorMessage('');
      })
      .catch(error => {
        setErrorMessage('There was an error submitting the gratitude.');
        console.error('There was an error submitting the gratitude:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold mb-2">What are you grateful for today?</h2>

      {/* Success and Error Messages */}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      <textarea
        value={gratitude}
        onChange={(e) => setGratitude(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Write your gratitude..."
        rows="4"
      />
      
      <button 
        type="submit" 
        className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition"
      >
        Add Gratitude
      </button>
    </form>
  );
};

export default GratitudeForm;
