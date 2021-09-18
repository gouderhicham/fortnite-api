import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Items({ setList, list }) {
  useEffect(() => {
    async function fetchItems() {
      const data = await fetch(
        "https://fortnite-api.theapinetwork.com/upcoming/get"
      );
      const array = await data.json();
      const items = await array.data;
      setList(items);
    }
    fetchItems();
  }, []);
  return (
    <div className = "items-list">
      {list.map((item) => (
        <Link key = {Math.random()} to={item.itemId}>{item.item.name}</Link>
      ))}
    </div>
  );
}
