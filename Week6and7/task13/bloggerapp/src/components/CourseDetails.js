import React from "react";
import "./Card.css";

function CourseDetails({ courses }) {
  return (
    <div className="card-container">
      <h2>🎓 Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> ({course.duration})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
