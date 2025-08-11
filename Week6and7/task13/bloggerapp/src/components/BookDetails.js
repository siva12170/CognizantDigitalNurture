import React from "react";
import "./Card.css";

function BookDetails({ books }) {
  return (
    <div className="card-container">
      <h2>📚 Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
