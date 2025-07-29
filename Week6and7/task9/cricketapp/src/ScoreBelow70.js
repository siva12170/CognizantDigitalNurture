import React from 'react';

function ScoreBelow70({ players }) {
  const playersBelow70 = players.filter(item => item.score <= 70);

  return (
    <div>
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {playersBelow70.map((item, index) => (
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreBelow70;