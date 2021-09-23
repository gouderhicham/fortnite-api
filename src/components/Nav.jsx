import { useRef } from "react";
import closed from "../images/closed.svg"
import logo from "../images/logo.svg"
export default function Nav() {
  let ex 
  let navbarMenu = useRef(null)
  let menuOverlay = useRef(null)
  function toggleMenu() {
    navbarMenu.current.classList.toggle("active");
    menuOverlay.current.classList.toggle("active");
    document.body.classList.toggle("scrolling");
  }
  function toggleNav(event){
    ex = document.querySelectorAll("#expand")
    let expand = event.target.children[0]
    if (event.target.hasAttribute('data-toggle') && window.innerWidth && window.innerWidth <= 992) {
       event.preventDefault();
       expand.classList.toggle("active")
       const menuItemHasChildren = event.target.parentElement;
       if (menuItemHasChildren.classList.contains('active')) {
          collapseSubMenu();
       } else {
          if (navbarMenu.current.querySelector('.menu-item-has-children.active')) {
             collapseSubMenu();
          }
          menuItemHasChildren.classList.add('active');
          expand.classList.add("active")
          const subMenu = menuItemHasChildren.querySelector('.sub-menu');
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
       }
    }
 }
 function collapseSubMenu() {
    document.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
    document.querySelector('.menu-item-has-children.active').classList.remove('active');
    ex.forEach(e=> {
      e.classList.remove("active")
    });
 }
 function resizeScreen() {
    const navbarMenu = document.querySelector(".navbar");
    // If navbarMenu is Open, Close It
    if (navbarMenu.classList.contains('active')) {
       toggleMenu();
    }
 
    // If menuItemHasChildren is Expanded, Collapse It
    if (navbarMenu.querySelector('.menu-item-has-children.active')) {
       collapseSubMenu();
    }
 }
 
 window.addEventListener('resize', () => {
     if (window.innerWidth !== undefined) {
        if (window.innerWidth > 992) {
            resizeScreen();
         }
     }
 });
  return (
    <header className="header">
      <div className="container">
        <section className="wrapper">
          <h1>
            <a href="/" className="brand">
              <img className = "logo" src={logo} alt="" />
            </a>
          </h1>
          <button onClick={toggleMenu} type="button" className="opened-menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div onClick={toggleMenu} ref = {menuOverlay}className="overlay"></div>
          <nav onClick = {toggleNav} ref = {navbarMenu} className="navbar">
            <button onClick={toggleMenu} type="button" className="closed-menu">
              <img src = {closed} className="closed-icon" alt="closed" />
            </button>
            <ul className="menu">
              <li className="menu-item">
                <a href="#">Home</a>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#" className="a" data-toggle="sub-menu">
                  All Items
                  <svg
                    id="expand"
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
                  <li className="menu-item">
                    <a href="#">wraps</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#" className="a" data-toggle="sub-menu">
                  Other Categories
                  <svg
                    id="expand"
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
