import './style.css';
import { loadPage, makeMain } from './load-page';
import { domSelectorAll, domSelector } from './dom-manipulation';
import homeComponents from './home';
import menuComponents from './menu';
import contactComponents from './contacts';

let page = 'Home';

function switchPage(Page) {
  let main = domSelector('#content main');
  const content = domSelector('#content');
  const footer = domSelector('footer');
  if (main !== null) {
    if (Page === 'Home') {
      main.remove();
      main = makeMain(homeComponents);
      content.insertBefore(main, footer);
    }
    if (Page === 'Menu') {
      main.remove();
      main = makeMain(menuComponents);
      content.insertBefore(main, footer);
    }
    if (Page === 'Contact') {
      main.remove();
      main = makeMain(contactComponents);
      content.insertBefore(main, footer);
    }
  }
}

loadPage();

const navBtns = Array.from(domSelectorAll('nav ul li'));
navBtns.forEach((navBtn) => {
  navBtn.addEventListener('click', (e) => {
    page = e.target.textContent;
    switchPage(page);
  });
});
