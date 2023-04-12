import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import "./components/Header.css";
import sun from "./images/icon-sun.svg";
import moon from "./images/icon-moon.svg";
import search from "./images/icon-search.svg";
import ResultsContainer from "./components/ResultsContainer";
import "./components/ResultsContainer.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [userName, setUserName] = useState("octocat");
  const [joined, setJoined] = useState("");
  const [user, setUser] = useState({});

  const searchUser = async function () {
    let url = `https://api.github.com/users/${userName}`;

    const apiFetch = await fetch(url);
    const data = await apiFetch.json();

    const date = new Date(data["created_at"]).toLocaleDateString("en-US", {
      year: "numeric",
      day: "numeric",
      month: "short",
    });

    if (data.avatar_url) {
      setJoined(date);
      setUser(data);
      setUserName("");
    } else {
      setUserName(data.message);
    }
  };

  useEffect(() => {
    searchUser();
  }, []);

  return (
    <main className={darkMode ? "" : "light"}>
      <Header
        src={darkMode ? sun : moon}
        header={darkMode ? "LIGHT" : "DARK"}
        handler={() => setDarkMode(!darkMode)}
        mode={darkMode}
      />
      <form className={darkMode ? "" : "form-light"}>
        <img src={search} alt="search"></img>
        <input
          placeholder="Search Github username..."
          className={darkMode ? "dark" : "form-light"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <div className="button" onClick={searchUser}>
          Search
        </div>
      </form>
      <ResultsContainer
        avatar={user.avatar_url}
        mode={darkMode}
        username={user.login}
        nick={user.login}
        bio={user.bio ? user.bio : "Secret agent who doesn't share bio"}
        repos={user.public_repos}
        followers={user.followers}
        following={user.following}
        location={user.location ? user.location : "Earth"}
        href={user.html_url}
        twitter={
          user.twitter_username ? user.twitter_username : "Not available"
        }
        work={user.company ? user.company : "Company"}
        joined={joined}
      />
    </main>
  );
}

export default App;
