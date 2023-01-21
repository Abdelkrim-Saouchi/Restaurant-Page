import './style.css';
import loadPage from './load-page';
import { domSelectorAll } from './dom-manipulation';
import switchPage from './switch-page';

let page = 'Home';

loadPage();
const navBtns = Array.from(domSelectorAll('nav ul li'));

navBtns.forEach((navBtn) => {
  navBtn.addEventListener('click', (e) => {
    page = e.target.textContent;
    switchPage(page);
  });
});
