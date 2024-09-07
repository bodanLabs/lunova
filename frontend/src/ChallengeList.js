import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance';

const ChallengeList = () => {
    const [challenges, setChallenges] = useState([]);
  
    useEffect(() => {
      axiosInstance.get('/api/challenges/')
        .then(response => {
          setChallenges(response.data);
        })
        .catch(error => {
          console.error('Error fetching challenges:', error);
        });
    }, []);
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Challenges</h2>
        <ul className="list-disc list-inside">
          {challenges.map((challenge, index) => (
            <li key={index} className="my-2 p-3 bg-yellow-50 rounded-lg shadow-md">
              {challenge.title} - {challenge.description} - {challenge.completed ? 'Completed' : 'Pending'} - <span className="text-gray-600">{new Date(challenge.created_at).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ChallengeList;
  
  