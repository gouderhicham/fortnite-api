import React from "react";
import { useLocation } from "react-router";
import logo from "../images/logo.svg";
import Items from "./Items";
import UlDisplay from "./UlDisplay";
export default function Nav({ list, setList }) {
  const {pathname} = useLocation()
  let color = pathname !== "/" || "" ? true : false
  return (
    <nav style = {{boxShadow : `${color ? "0px 0px 0px": "0px 5px 13px rgb(238, 238, 238)"}`}}>
      <div className="cover">
        <div className="line"></div>
      </div>
      <a className="logo" href="/">
        <img src={logo} />
      </a>
      <ul>
        <a href="/" className="a-link">
          Home
        </a>
        <a href="/" className="a-link">
          Skins
        </a>
        <a href="/" className="a-link">
          Emotes
        </a>
        <UlDisplay name = "New items">
          <Items list={list} setList={setList} />
        </UlDisplay>
      </ul>
    </nav>
  );
}
