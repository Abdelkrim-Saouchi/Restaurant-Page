import { domSelector, domCreator } from './dom-manipulation';
import homeComponents from './home';

function makeHeader() {
  const header = domCreator('header');
  const nav = domCreator('nav');
  const ul = domCreator('ul');

  const homeItem = domCreator('li');
  homeItem.textContent = 'Home';

  const menuItem = domCreator('li');
  menuItem.textContent = 'Menu';

  const contactItem = domCreator('li');
  contactItem.textContent = 'Contact';

  header.appendChild(nav);
  nav.appendChild(ul);
  ul.appendChild(homeItem);
  ul.appendChild(menuItem);
  ul.appendChild(contactItem);

  return header;
}

export function makeMain(arr) {
  const main = domCreator('main');
  arr.forEach((element) => {
    main.appendChild(element);
  });

  return main;
}

function makeFooter() {
  const footer = domCreator('footer');
  const link = domCreator('a');
  link.textContent = 'Krimothiazine';
  link.href = 'https://github.com/karim-saou';
  link.style.display = 'inline';
  footer.textContent = 'Created by ';
  footer.appendChild(link);

  return footer;
}

export function loadPage() {
  const content = domSelector('#content');
  content.appendChild(makeHeader());
  content.appendChild(makeMain(homeComponents));
  content.appendChild(makeFooter());
}
