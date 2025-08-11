import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome Back! 🧑‍✈️</h2>
      <p>Book your flights below:</p>
      <ul>
        <li>
          Air India | Delhi → Mumbai | 10:00 AM
          <button>Book</button>
        </li>
        <li>
          Indigo | Hyderabad → Chennai | 2:00 PM
          <button>Book</button>
        </li>
      </ul>
    </div>
  );
}

export default UserPage;
