import React from 'react';

function CalculateScore(props) {
  const { Name, School, Total, Goal } = props;
  const average = Total / Goal;

  return (
    <div>
      <h2>Student Score Details</h2>
      <p>Name: {Name}</p>
      <p>School: {School}</p>
      <p>Total Score: {Total}</p>
      <p>Goal: {Goal}</p>
      <p>Average Score: {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;