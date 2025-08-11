import React, { useEffect, useState } from "react";
import GitClient from "./GitClient";
import "./App.css";

function App() {
  const [repos, setRepos] = useState([]);
  const client = new GitClient();

  useEffect(() => {
    const fetchData = async () => {
      const result = await client.getRepositories("techiesyed");
      setRepos(result);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>GitHub Repositories</h1>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
