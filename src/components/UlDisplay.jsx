import { useState } from "react";
import arrow from "../images/arrow.svg";
export default function UlDisplay({ children, name }) {
  const [toggled, setToggled] = useState(false);
  const rote = toggled ? "rotate(180deg)" : ""
  return (
    <section
      className="list"
      onClick={() => {
        setToggled(!toggled);
      }}
    >
      <a className="a-link" id="arrow-link">
        {name}
        <img className="arrow" src={arrow} style={{transform: `translateX(4px) ${rote}`}} />
      </a>
      <ul>{toggled && children}</ul>
    </section>
  );
}
