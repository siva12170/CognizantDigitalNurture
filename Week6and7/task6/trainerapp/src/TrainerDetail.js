import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './TrainersMock'; // Import mock data

function TrainerDetail() {
  const { id } = useParams(); // Retrieve 'id' parameter from URL
  const trainer = trainersMock.find(t => t.trainerId === id); // Find the trainer by ID

  if (!trainer) {
    return <div>Trainer not found!</div>;
  }

  return (
    <div>
      <h1>Trainers Details</h1>
      <h2>{trainer.name} ({trainer.technology})</h2>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <h3>Skills:</h3>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetail;
