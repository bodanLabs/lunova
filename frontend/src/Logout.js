import React from 'react';
import axiosInstance from './axiosInstance';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axiosInstance.post('/accounts/logout/');
      console.log('Logged out');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
