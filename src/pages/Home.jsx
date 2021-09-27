import { Link } from "react-router-dom";
import home_background from "../images/home-background.png";

export default function Home() {
  return (
    <>
      <div className="bk-img"></div>
      <main className="home-main">
        <h2>Season 8</h2>
        <img src={home_background} className="home-background" />
        <div className="btns-container">
          <Link to="/mainpage" className="btn">See news and updates!</Link>
          <a target = "_blank" href="https://www.epicgames.com/store/en-US/p/fortnite" className="download">Download game</a>
        </div>
      </main>
    </>
  );
}