import React, { useState } from 'react';
import axiosInstance from './axiosInstance';  // Adjust the path to match where axiosInstance is defined

const ChallengeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !description) {
      setErrorMessage('Both title and description are required.');
      return;
    }

    // Send POST request to add new challenge
    axiosInstance.post('/api/challenges/', { title, description })
      .then((response) => {
        setSuccessMessage('Challenge added successfully!');
        setErrorMessage('');
        setTitle('');
        setDescription('');
      })
      .catch((error) => {
        setErrorMessage('Failed to add challenge. Please try again.');
        console.error('Error adding challenge:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-6">
      {/* Error Message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      {/* Challenge Title Input */}
      <div>
        <label htmlFor="title" className="block text-gray-700 mb-2">Challenge Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Enter challenge title"
        />
      </div>

      {/* Challenge Description Input */}
      <div>
        <label htmlFor="description" className="block text-gray-700 mb-2">Challenge Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
          placeholder="Enter challenge description"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
        >
          Add Challenge
        </button>
      </div>
    </form>
  );
};

export default ChallengeForm;
