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

const menu = document.getElementById('menu');

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 10) {
    document.documentElement.style.setProperty(
      '--scrollPos',
      window.scrollY + 'px'
    );
  } else {
    // pass
  }
}

// let root = docum]ent.documentElement;

// root.addEventListener('scroll', (e) => {
//   root.style.setProperty('--scrollPos' + e.scrollTop + 'px');
//   console.log(root.style.getPropertyValue('--scrollPos'));
//   console.log('hello world');
// });
