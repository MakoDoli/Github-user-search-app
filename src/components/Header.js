export default function Header(props) {
  return (
    <div className="header">
      <h1 className={props.mode ? "" : "light"}>devfinder</h1>

      <h2 className={props.mode ? "" : "light"}>{props.header}</h2>

      <img src={props.src} alt="sun" onClick={props.handler}></img>
    </div>
  );
}
