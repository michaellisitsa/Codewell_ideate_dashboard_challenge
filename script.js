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
      setTimeout(function () {
        topMenu.classList.add('top-menu--accordian');
      }, 50);
      console.log('out of view');
      console.log(entries[0].boundingClientRect.y);
    } else {
      topMenu.classList.remove('top-menu--accordian');
      setTimeout(function () {
        topMenu.classList.remove('top-menu--visible');
      }, 200);
      console.log('in view again');
      console.log(entries[0].boundingClientRect.y);
    }
  });
  observer.observe(menu.querySelector('#bot-sidebar-marker'));
}
