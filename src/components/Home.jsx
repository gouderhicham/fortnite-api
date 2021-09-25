import React from "react";
import home_background from "../images/home-background.png";
export default function Home() {
  return (
    <>
      <div className="bk-img"></div>
      <main className = "home-main">
        <h2>Season 8</h2>
        <img src={home_background} className="home-background" />
        <div className="btns-container">
          <a href="/" className = "btn"></a>
        </div>
      </main>
    </>
  );
}
