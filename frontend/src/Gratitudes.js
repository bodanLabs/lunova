import React, { useState } from 'react';
import GratitudeForm from './GratitudeForm';
import GratitudeList from './GratitudeList';

const Gratitudes = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Daily Gratitude</h1>
        <div className="space-x-4">
          <button 
            onClick={() => window.location.href = "/dashboard"} // Navigate to dashboard
            className="px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-gray-100"
          >
            Dashboard
          </button>
          <button 
            onClick={() => window.location.href = "/challenges"} // Navigate to challenges
            className="px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-gray-100"
          >
            Challenges
          </button>
          <button 
            onClick={() => window.location.href = "/login"} // Placeholder for logout logic
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Gratitudes</h2>

          {/* Gratitude List */}
          <GratitudeList />

          {/* Add New Gratitude Button */}
          <div className="mt-6 flex justify-center">
            <button 
              onClick={toggleForm}
              className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              {showForm ? 'Hide Form' : 'Add New Gratitude'}
            </button>
          </div>

          {/* Show GratitudeForm only when the button is clicked */}
          {showForm && (
            <div className="mt-6">
              <GratitudeForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gratitudes;
