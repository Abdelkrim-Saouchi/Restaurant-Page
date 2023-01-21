import { domCreator } from './dom-manipulation';

export function makeHeader() {
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
  // main.appendChild(makeTitle());
  // main.appendChild(makeView());
  // main.appendChild(makeHoursDiv());
  // main.appendChild(makeLocationDiv());
  arr.forEach((element) => {
    main.appendChild(element);
  });
  return main;
}

export function makeFooter() {
  const footer = domCreator('footer');
  footer.textContent = 'Created by Krimothiazine';
  return footer;
}
