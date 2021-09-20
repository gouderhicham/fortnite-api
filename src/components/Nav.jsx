import { useEffect } from "react";

export default function Nav() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "../custom/script.js";
        script.defer = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
  return (
    <header className="header">
      <div className="container">
        <section className="wrapper">
          <h1>
            <a href="./index.html" className="brand">
              Brand
            </a>
          </h1>
          <button type="button" className="opened-menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="overlay"></div>
          <nav className="navbar">
            <button type="button" className="closed-menu">
              <img src="./closed.svg" className="closed-icon" alt="closed" />
            </button>
            <ul className="menu">
              <li className="menu-item">
                <a href="#">Home</a>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#" className="a" data-toggle="sub-menu">
                  All Items
                  <svg
                    id = "expand"
                    className="expand"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sort-down"
                    className="svg-inline--fa fa-sort-down fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                    ></path>
                  </svg>
                </a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="#">Emotes</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">BackPacks</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Pickaxes</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Gliders</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contrail</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#" className="a" data-toggle="sub-menu">
                  Other Categories
                  <svg
                  id = "expand"
                    className="expand"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sort-down"
                    className="svg-inline--fa fa-sort-down fa-w-10"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"
                    ></path>
                  </svg>
                </a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="#">Rarities</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Upcoming items</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Popular items</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Challenges</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Bundles</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="#">Skins</a>
              </li>
              <li className="menu-item">
                <a href="#">Daily Shop</a>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
}
