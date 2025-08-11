import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import "./App.css";

function App() {
  const [activeView, setActiveView] = useState("books");

  const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin" },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt" },
  ];

  const blogs = [
    { id: 1, title: "React Best Practices", date: "2025-06-10" },
    { id: 2, title: "Understanding useEffect", date: "2025-06-15" },
  ];

  const courses = [
    { id: 1, name: "React Fundamentals", duration: "4 weeks" },
    { id: 2, name: "Advanced JS", duration: "6 weeks" },
  ];

  // Conditional rendering via if-else
  let componentToRender;
  if (activeView === "books") {
    componentToRender = <BookDetails books={books} />;
  } else if (activeView === "blogs") {
    componentToRender = <BlogDetails blogs={blogs} />;
  } else {
    componentToRender = <CourseDetails courses={courses} />;
  }

  return (
    <div className="App">
      <h1>📘 BloggerApp Dashboard</h1>
      <div className="nav-buttons">
        <button onClick={() => setActiveView("books")}>Books</button>
        <button onClick={() => setActiveView("blogs")}>Blogs</button>
        <button onClick={() => setActiveView("courses")}>Courses</button>
      </div>

      {componentToRender}

     
    </div>
  );
}

export default App;
