export function fetchSkins() {
  return fetch("https://fortnite-api.theapinetwork.com/items/list")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((d) => {
      let m = d.filter((i) => i.item.type === "outfit");
      let realData = m.slice(0, 90);
      return realData;
    });
}
export function fetchBackpacks() {
  return fetch("https://fortnite-api.theapinetwork.com/items/list")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((d) => {
      let m = d.filter((i) => i.item.type === "backpack");
      let realData = m.slice(0, 90);
      return realData;
    });
}
export function fetchPickaxe() {
  return fetch("https://fortnite-api.theapinetwork.com/items/list")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((d) => {
      let m = d.filter((i) => i.item.type === "pickaxe");
      let realData = m.slice(0, 90);
      return realData;
    });
}
export function fetchGlider() {
  return fetch("https://fortnite-api.theapinetwork.com/items/list")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((d) => {
      let m = d.filter((i) => i.item.type === "glider");
      let realData = m.slice(0, 90);
      return realData;
    });
}
export function fetchContrail() {
  return fetch("https://fortnite-api.theapinetwork.com/items/list")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((d) => {
      let m = d.filter((i) => i.item.type === "contrail");
      let realData = m.slice(0, 90);
      return realData;
    });
}
export function fetchWrap() {
  return fetch("https://fortnite-api.theapinetwork.com/items/list")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((d) => {
      let m = d.filter((i) => i.item.type === "wrap");
      let realData = m.slice(0, 90);
      return realData;
    });
}
export function fetchBundles() {
  return fetch("https://fortnite-api.theapinetwork.com/items/list")
    .then((res) => res.json())
    .then((res) => res.data)
    .then((d) => {
      let m = d.filter((i) => i.item.type === "bundle");
      let realData = m.slice(0, 90);
      return realData;
    });
}
export function fetchRarities() {
  return fetch("https://fortniteapi.io/v2/rarities?lang=en" , {
         method : "GET" , 
         headers : {
              'Content-Type': 'application/json',
                "Authorization":"b89032ab-fb6fe87c-0bb33b64-929f9f6e"
         }
  })
    .then((res) => res.json())
}
export function fetchDaily() {
  return fetch("https://fortniteapi.io/v2/shop?lang=en" , {
         method : "GET" , 
         headers : {
              'Content-Type': 'application/json',
                "Authorization":"b89032ab-fb6fe87c-0bb33b64-929f9f6e"
         }
  })
    .then((res) => res.json()).then(res => res.shop)
}
export function fetchChallenges() {
  return fetch("https://fortniteapi.io/v2/challenges?season=current&lang=en" , {
         method : "GET" , 
         headers : {
              'Content-Type': 'application/json',
                "Authorization":"b89032ab-fb6fe87c-0bb33b64-929f9f6e"
         }
  })
    .then((res) => res.json()).then(res => res.bundles)
}
export function fetchPopular() {
  return fetch("https://fortnite-api.theapinetwork.com/items/popular")
    .then((res) => res.json()).then(res => res.entries )
}