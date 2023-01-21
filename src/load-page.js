import { domSelector } from './dom-manipulation';
import { makeHeader, makeMain, makeFooter } from './structure';
import menuComponents from './menu';
import contactComponents from './contacts';

export default function loadPage() {
  const content = domSelector('#content');
  content.appendChild(makeHeader());
  //   content.appendChild(makeMain(menuComponents));
  content.appendChild(makeMain(contactComponents));
  content.appendChild(makeFooter());
}
