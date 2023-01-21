import { domSelector } from './dom-manipulation';
import homeComponents from './home';
import { makeMain } from './structure';
import menuComponents from './menu';
import contactComponents from './contacts';

export default function switchPage(page) {
  let main = domSelector('#content main');
  const content = domSelector('#content');
  const footer = domSelector('footer');
  if (main !== null) {
    if (page === 'Home') {
      main.remove();
      main = makeMain(homeComponents);
      content.insertBefore(main, footer);
    }
    if (page === 'Menu') {
      main.remove();
      main = makeMain(menuComponents);
      content.insertBefore(main, footer);
    }
    if (page === 'Contact') {
      main.remove();
      main = makeMain(contactComponents);
      content.insertBefore(main, footer);
    }
  }
}
