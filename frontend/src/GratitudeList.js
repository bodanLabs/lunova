import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

const GratitudeList = () => {
  const [gratitudes, setGratitudes] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/gratitudes/')
      .then(response => {
        setGratitudes(response.data);
      })
      .catch(error => {
        console.error('Error fetching gratitudes:', error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Gratitudes</h2>

      {gratitudes.length > 0 ? (
        <ul className="list-none space-y-4">
          {gratitudes.map((gratitude, index) => (
            <li key={index} className="p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md">
              <span className="font-semibold">{gratitude.content}</span> 
              <span className="text-gray-600 text-sm"> - {new Date(gratitude.created_at).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No gratitudes found.</p>
      )}
    </div>
  );
};

export default GratitudeList;
