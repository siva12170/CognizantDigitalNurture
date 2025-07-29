import React, { useState } from 'react';
import ListOfPlayers from './ListOfPlayers';
import ScoreBelow70 from './ScoreBelow70';
import { OddPlayers, EvenPlayers, ListOfIndianPlayers, IndianTeam } from './IndianPlayers';
import './App.css'; 
function App() {
 const [flag, setFlag] = useState(true); 

  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  return (
    <div className="App">
      <button onClick={() => setFlag(!flag)} style={{ margin: '20px', padding: '10px 15px', fontSize: '16px', cursor: 'pointer' }}>
        Toggle View (Current: {flag ? 'Players List' : 'Indian Team'})
      </button>
      <hr />

      {flag ? (
        <div>
          <ListOfPlayers players={players} />
          <hr />
          <ScoreBelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <OddPlayers team={IndianTeam} />
          <hr />
          <EvenPlayers team={IndianTeam} />
          <hr />
          <ListOfIndianPlayers IndianPlayers={IndianTeam} />
        </div>
      )}
    </div>
  );
}

export default App;