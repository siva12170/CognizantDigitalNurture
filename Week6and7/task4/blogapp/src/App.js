import React from 'react';
import './App.css'; 
import Posts from './Posts'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Posts /> {/* Render the Posts component */}
      </header>
    </div>
  );
}

export default App;
