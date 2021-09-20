import React, { useEffect } from "react";
import { useLocation } from "react-router";

export default function Item({ itemInfo, setItemInfo }) {
  let body = document.querySelector("body")
  const { pathname } = useLocation();
  useEffect(() => {
    async function fetchItems() {
      const data = await fetch(
        `https://fortnite-api.theapinetwork.com/item/get?id=${pathname.slice(
          1,
          pathname.length
        )}`
      );
      const item = await data.json();
      setItemInfo(item.data);
    }
    fetchItems();
  }, [pathname]);
  body.style.backgroundColor = "black"
  return (
    <div className = "header-container">
      {itemInfo && (
        <>
          <h1 className = "header">{itemInfo.item.name}</h1>
          <img className = "header-img" src={itemInfo.item.images.background}/>
        </>
      )}
    </div>
  );
}