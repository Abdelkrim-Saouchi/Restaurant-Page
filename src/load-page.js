import { domSelector } from './dom-manipulation';
import { makeHeader, makeMain, makeFooter } from './structure';
import homeComponents from './home';

export default function loadPage() {
  const content = domSelector('#content');
  content.appendChild(makeHeader());
  content.appendChild(makeMain(homeComponents));
  content.appendChild(makeFooter());
}
