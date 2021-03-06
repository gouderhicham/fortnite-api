import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Items from "./components/Items"
import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./App.css"
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
            <Home />
          </Route>
          <Route exact path = "/upcoming">
            <Items list={list} setList={setList} />
          </Route>
          <Route path = "/items/:id">
            <Item itemInfo={itemInfo} setItemInfo={setItemInfo} />
          </Route>
          <Route path = "/mainpage">
            <MainPage />
          </Route>
        </Switch>
         
      </>
    </Router>
  );
}
