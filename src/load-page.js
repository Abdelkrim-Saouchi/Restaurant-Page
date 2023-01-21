// import { makeHoursDiv, makeLocationDiv, makeTitle, makeView } from './home';
import { domSelector } from './dom-manipulation';
import { makeHeader, makeMain, makeFooter } from './structure';
import menuComponents from './menu';

export default function loadPage() {
  const content = domSelector('#content');
  content.appendChild(makeHeader());
  content.appendChild(makeMain(menuComponents));
  content.appendChild(makeFooter());
}
