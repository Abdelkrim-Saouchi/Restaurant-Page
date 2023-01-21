// import { makeHoursDiv, makeLocationDiv, makeTitle, makeView } from './home';
import { domSelector } from './dom-manipulation';
import { makeHeader, makeMain, makeFooter } from './structure';
import { couscousDish, zvitiDish, makeCategory, menuTitle } from './menu';

export default function loadPage() {
  const content = domSelector('#content');
  content.appendChild(makeHeader());

  content.appendChild(
    // makeMain([makeTitle(), makeView(), makeHoursDiv(), makeLocationDiv()])
    makeMain([
      menuTitle(),
      makeCategory('Main Dishes'),
      couscousDish,
      zvitiDish,
    ])
  );
  content.appendChild(makeFooter());
}
