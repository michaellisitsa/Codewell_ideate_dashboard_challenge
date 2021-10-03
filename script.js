// TODO-Nav Bar for tablet view

// Use clientHeight to get the content height within the nav
// and the parent container height
// When the two are equal or close to equal perform a transition per https://codepen.io/SelenIT/pen/ZBXrXV/
// or https://codepen.io/osublake/pen/eJGrPN?editors=0010

// The sidebar should stick to the top bar, but shrink in size as you scroll in tablet view, until there is no
// remaining space.

// Once the transition occurs, the bar should just take over a the top of the page, rather than a card.

// possibly get scroll position from window.pageYOffset

// OR simpler, is to have the top bar as a separate element display:none, and then start lowering opacity on the sidebar
// and the banners, while still allowing them to scroll of the page
// whilst raising the opacity of the top bar in its place.

// When the user scrolls down from the top of the document, resize the menu height

const menu = document.querySelector('#menu');
const topMenu = document.querySelector('#top-menu');
const menuLinks = document.querySelectorAll('.menu__links, .top-menu__links');

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (window.scrollY > menu.clientHeight) {
//     document.documentElement.style.setProperty(
//       '--scrollPos',
//       window.scrollY + 'px'
//     );
//   } else {
//     // pass
//   }
// }

// https://css-tricks.com/styling-based-on-scroll-position/
if (
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' in window &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].boundingClientRect.y < 0) {
      topMenu.classList.add('top-menu--visible');
      // need to first make visible (display: flex), only then add animation to change the height.
      setTimeout(function () {
        topMenu.classList.add('top-menu--accordian');
      }, 50);
      console.log('out of view');
    } else {
      topMenu.classList.remove('top-menu--accordian');
      setTimeout(function () {
        topMenu.classList.remove('top-menu--visible');
      }, 200);
      console.log('in view again');
    }
  });
  observer.observe(menu.querySelector('#bot-sidebar-marker'));
}

const clearSelected = function () {
  menuLinks.forEach((menuLink) => menuLink.classList.remove('selected-link'));
};

// Add selected class to selected hyperlink, and remove from any others in selection
menuLinks.forEach((menuLink) =>
  menuLink.addEventListener(
    'click',
    function (e) {
      clearSelected();
      menuLink.classList.add('selected-link');
    }.bind(this, menuLink)
  )
);
// }
