import { domSelector } from './dom-manipulation';
import { makeTitle, makeView, makeHoursDiv, makeLocationDiv } from './home';
import { makeMain } from './structure';
import { menuTitle, makeCategory, couscousDish, zvitiDish } from './menu';

export default function switchPage(page) {
  let main = domSelector('#content main');
  const content = domSelector('#content');
  const footer = domSelector('footer');
  if (main !== null) {
    if (page === 'Home') {
      main.remove();
      main = makeMain([
        makeTitle(),
        makeView(),
        makeHoursDiv(),
        makeLocationDiv(),
      ]);
      content.insertBefore(main, footer);
    }
    if (page === 'Menu') {
      main.remove();
      main = makeMain([
        menuTitle(),
        makeCategory('Main Dishes'),
        couscousDish,
        zvitiDish,
      ]);
      content.insertBefore(main, footer);
    }
  }
}
