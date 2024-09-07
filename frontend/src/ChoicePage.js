import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChoicePage = () => {
  const navigate = useNavigate();

  const handleChoice = (choice) => {
    if (choice === 'gratitudes') {
      navigate('/gratitudes');
    } else if (choice === 'challenges') {
      navigate('/challenges');
    }
  };

  return (
    <div className="choice-page">
      <h1>Welcome! Please choose an option:</h1>
      <div className="choices">
        <button onClick={() => handleChoice('gratitudes')}>Gratitudes</button>
        <button onClick={() => handleChoice('challenges')}>Personal Challenges</button>
      </div>
    </div>
  );
};

export default ChoicePage;
