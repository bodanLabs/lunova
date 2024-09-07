import React, { useState } from 'react';
import ChallengeForm from './ChallengeForm';
import ChallengeList from './ChallengeList';

function Challenges() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm); // Toggle the form visibility
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Personal Challenges</h1>
        <div className="space-x-4">
          <button 
            onClick={() => window.location.href = "/dashboard"} // Navigate to dashboard
            className="px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-gray-100"
          >
            Dashboard
          </button>
          <button 
            onClick={() => window.location.href = "/gratitudes"} // Navigate to gratitudes
            className="px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-gray-100"
          >
            Gratitudes
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
          <h2 className="text-2xl font-bold text-teal-600 mb-6">Challenges</h2>

          {/* Challenges List */}
          <ChallengeList />

          {/* Add New Challenge Button */}
          <div className="mt-6 flex justify-center">
            <button 
              onClick={toggleForm}
              className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              {showForm ? 'Hide Form' : 'Add New Challenge'}
            </button>
          </div>

          {/* Show ChallengeForm only when the button is clicked */}
          {showForm && (
            <div className="mt-6">
              <ChallengeForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Challenges;
