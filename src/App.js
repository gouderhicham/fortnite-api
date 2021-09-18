import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import Items from "./components/Items";
import Nav from "./components/Nav";
import "./App.css";
import Item from "./components/Item";
export default function App() {
  const [list, setList] = useState([]);
  const [itemInfo , setItemInfo] = useState(null)
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path = "/">
            <Items list={list} setList={setList} />
          </Route>
          <Route path = "/:id">
            <Item itemInfo={itemInfo} setItemInfo={setItemInfo} />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
