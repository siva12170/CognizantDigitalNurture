import React from "react";
import "./Card.css";

function BlogDetails({ blogs }) {
  return (
    <div className="card-container">
      <h2>📝 Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> — {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
