import React, { useEffect } from "react";
import { useLocation } from "react-router";

export default function Item({ itemInfo, setItemInfo }) {
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
  }, []);
  console.log(itemInfo);
  return (
    <div>
      {itemInfo && (
        <>
          <div>{itemInfo.item.name}</div>
          <img src={itemInfo.item.images.background} width = "500" alt="" />
        </>
      )}
    </div>
  );
}