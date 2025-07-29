import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import TrainersList from './TrainersList';
import TrainerDetail from './TrainerDetail'; 
<<<<<<< HEAD
import './App.css'; // Keep default styles or add your own
=======
import './App.css';
>>>>>>> 8725d43674bb32eb2768ffa631a81c03d385738f

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Academy Trainers App</h1> 
        <nav>
          <Link to="/">Home</Link> |{' '} 
          <Link to="/trainers">Show Trainers</Link> 
        </nav>
        <hr /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={<TrainersList />} />
          <Route path="/trainers/:id" element={<TrainerDetail />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
