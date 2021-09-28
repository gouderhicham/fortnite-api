import React from "react";
import { Link } from "react-router-dom";
export default function Grid({ className, i, title, img, date , url }) {
  return (
    <Link to = {`/mainpage/${url}`} className={className + " " + "grid-box"}>
      <img className={`img-${i}`} src={img} alt="" />
      <div className="text-container">
        <p>{date}</p>
        <h2>{title}</h2>
      </div>
    </Link>
  );
}