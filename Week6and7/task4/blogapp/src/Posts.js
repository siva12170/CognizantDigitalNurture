import React from 'react';
import Post from './Post';
class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      error: null, 
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const loadedPosts = data.map(item => new Post(item.id, item.title, item.body));
      this.setState({ posts: loadedPosts, error: null }); 
    } catch (error) {
      console.error("Failed to fetch posts:", error);
      this.setState({ error: error }); 
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("Error caught by componentDidCatch:", error, info);
    this.setState({ error: error });
    alert(`An error occurred: ${error.message}. Check console for details.`);
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error loading posts: {error.message}</div>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2> {/* Display title using heading */}
              <p>{post.body}</p> {/* Display body using paragraphs */}
              <hr />
            </div>
          ))
        ) : (
          <div>Loading posts...</div>
        )}
      </div>
    );
  }
}

export default Posts;
