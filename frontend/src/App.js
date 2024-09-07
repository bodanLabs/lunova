import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import ChoicePage from './ChoicePage';
import Gratitudes from './Gratitudes';  // Your combined Gratitudes component
import Challenges from './Challenges';
import GratitudeForm from './GratitudeForm';  // Already imported
import GratitudeList from './GratitudeList';  // Import the list if you want to show it
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Routes>
         {/* Make the Login page the default route */}
        <Route path="/" element={<Login />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/choices" element={<ChoicePage />} />
        <Route path="/gratitudes" element={<Gratitudes />} />  {/* Gratitudes route */}
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
    </Router>
  );
}

export default App;
