import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';
import { getCookie } from './utils';



const Dashboard = () => {
    const navigate = useNavigate();  // Initialize the navigate function

    // Functions for handling button clicks
    const goToGratitudes = () => navigate('/gratitudes');
    const goToChallenges = () => navigate('/challenges');
    const handleLogout = () => {
        axiosInstance.post('/api/logout/')
          .then((response) => {
            // Clear auth token from localStorage
            localStorage.removeItem('authToken');
    
            // Refresh CSRF token after logout
            axiosInstance.defaults.headers['X-CSRFToken'] = getCookie('csrftoken');
    
            // Redirect to login page after logout
            navigate('/login');
          })
          .catch((error) => {
            console.error('Logout failed:', error);
          });
      };
    const [summary, setSummary] = useState({
    total_gratitudes: 0,
    total_challenges: 0,
    recent_gratitudes: [],
    recent_challenges: []
  });

  useEffect(() => {
    axiosInstance.get('/api/dashboard-summary/')
      .then(response => {
        setSummary(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard summary:', error);
      });
  }, []);

  

 return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-teal-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, {}</h1>
        <div className="space-x-4">
          <button 
            onClick={goToGratitudes}
            className="px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-gray-100"
          >
            Gratitudes
          </button>
          <button 
            onClick={goToChallenges}
            className="px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-gray-100"
          >
            Challenges
          </button>
          <button 
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Gratitude Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Gratitudes</h2>
          <p className="mb-2">Recent Gratitudes:</p>
          <ul className="list-disc list-inside mt-2">
            {summary.recent_gratitudes.map((gratitude, index) => (
              <li key={index} className="my-2">
                {gratitude.content} - {new Date(gratitude.created_at).toLocaleDateString()}
              </li>
            ))}
          </ul>
          <p className="mb-4">Total Gratitudes: {summary.total_gratitudes}</p>
          <button 
            onClick={goToGratitudes}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            Add Gratitude
          </button>
        </div>

        {/* Challenges Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Challenges</h2>
          <p className="mb-2">Recent Challenges:</p>
          <ul className="list-disc list-inside mt-2">
            {summary.recent_challenges.map((challenge, index) => (
              <li key={index} className="my-2">
                {challenge.title} - {challenge.description} - {challenge.completed ? 'Completed' : 'Pending'} - <span className="text-gray-600">{new Date(challenge.created_at).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
          <p className="mb-4">Total Challenges: {summary.total_challenges}</p>
          <button 
            onClick={goToChallenges}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            Add Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
