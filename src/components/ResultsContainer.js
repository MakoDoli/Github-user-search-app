import location from "../images/icon-location.svg";
import github from "../images/icon-website.svg";
import twitter from "../images/icon-twitter.svg";
import work from "../images/icon-company.svg";

export default function ResultsContainer(props) {
  return (
    <div className={props.mode ? "container" : "container-light"}>
      <div className="user-profile">
        <img className="avatar" src={props.avatar} alt=""></img>
        <div className="user-info">
          <h2 className={props.mode ? "" : "light"}>The {props.username}</h2>
          <p className="username">@{props.nick}</p>
          <p className="parag-13-19">Joined {props.joined}</p>
        </div>
      </div>
      <div className="user-bio">
        <p>{props.bio}</p>
      </div>
      <div className={props.mode ? "user-stats" : "user-stats-light"}>
        <div className="repos">
          Repos
          <h2
            className={props.mode ? "" : "light"}
            style={{ paddingTop: "5px" }}
          >
            {props.repos}
          </h2>
        </div>
        <div className="followers">
          Followers
          <h2 style={{ paddingTop: "5px" }}>{props.followers}</h2>
        </div>
        <div className="following">
          Following
          <h2
            className={props.mode ? "" : "light"}
            style={{ paddingTop: "5px" }}
          >
            {props.following}
          </h2>
        </div>
      </div>
      <div className="user-links">
        <div className="city-github">
          <div className="contact">
            <img className="location" src={location} alt="pin"></img>
            <p className="links parag-13-19">{props.location}</p>
          </div>
          <div className="contact">
            <img className="icon" src={github} alt="link"></img>
            <a href={props.href} target="_blank" rel="noreferrer">
              <p className="links parag-13-19">https://github.blog</p>
            </a>
          </div>
        </div>
        <div className="twitter-work">
          <div className="contact">
            <img className="icon" src={twitter} alt="pin"></img>
            <p className="links parag-13-19">{props.twitter}</p>
          </div>
          <div className="contact">
            <img className="icon" src={work} alt="pin"></img>
            <p className="links parag-13-19">{props.work}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
