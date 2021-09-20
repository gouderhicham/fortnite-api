const openedMenu = document.querySelector('.opened-menu');
const closedMenu = document.querySelector('.closed-menu');
const navbarMenu = document.querySelector('.navbar');
const menuOverlay = document.querySelector('.overlay');
const ex = document.querySelectorAll(".expand")

// Opened navbarMenu
// Closed navbarMenu
// Closed navbarMenu by Click Outside
openedMenu.addEventListener('click', toggleMenu);
closedMenu.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

// Toggle Menu Function
function toggleMenu() {
   navbarMenu.classList.toggle('active');
   menuOverlay.classList.toggle('active');
   document.body.classList.toggle('scrolling');
}

navbarMenu.addEventListener('click', (event) => {
   if (event.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      let expand = event.target.children[0]
      if (menuItemHasChildren.classList.contains('active')) {
         collapseSubMenu();
      } else {
         if (navbarMenu.querySelector('.menu-item-has-children.active')) {
            collapseSubMenu();
         }
         menuItemHasChildren.classList.add('active');
         expand.classList.add("active")
         const subMenu = menuItemHasChildren.querySelector('.sub-menu');
         subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
      }
   }
});
function collapseSubMenu() {
   navbarMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute('style');
   navbarMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
   ex.forEach(e => {
      if (e.classList.contains("active")) {
         e.classList.remove("active")
      }
   })
}

// Fixed Resize Screen Function
function resizeScreen() {
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
   if (this.innerWidth > 992) {
      resizeScreen();
   }
});
fetch("https://fortniteapi.io/v2/items/upcoming?lang=en" , {
   method : "GET",
   headers: {
      'Content-Type': 'application/json',
      'Authorization':'b89032ab-fb6fe87c-0bb33b64-929f9f6e'
    },
   
}).then(data => data.json()).then(res => console.log(res))