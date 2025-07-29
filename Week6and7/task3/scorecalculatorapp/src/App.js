import React from 'react';
import CalculateScore from './Components/CalculateScore'; 
import './StyleSheet/mystyle.css'; 
function App() {
  return (
    <div className="App">
      <h1>Student Management Portal</h1>
      <CalculateScore Name="Alice" School="High School A" Total={450} Goal={500} />
      <CalculateScore Name="Bob" School="High School B" Total={380} Goal={500} />
    </div>
  );
}

export default App;
