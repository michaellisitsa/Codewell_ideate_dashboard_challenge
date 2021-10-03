const menu = document.querySelector('#menu');
const topMenu = document.querySelector('#top-menu');
const menuLinks = document.querySelectorAll('.menu__links, .top-menu__links');

// When the user scrolls down from the top of the document past the sidebar
// in tablet mode, show the top-menu instead.
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
