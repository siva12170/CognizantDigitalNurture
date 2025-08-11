import React, { Component } from "react";
import "./Getuser.css";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.randomuser.me/");
      const data = await response.json();
      this.setState({
        user: data.results[0],
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  render() {
    const { user, loading } = this.state;

    return (
      <div className="user-container">
        <h2>🔍 Random User Info</h2>
        {loading ? (
          <p>Loading user...</p>
        ) : (
          <div className="user-card">
            <img src={user.picture.large} alt="User" />
            <h3>
              {user.name.title}. {user.name.first}
            </h3>
            <p><strong>Location:</strong> {user.location.country}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Getuser;
