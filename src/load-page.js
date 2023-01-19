import { domSelector } from './dom-manipulation';
import { makeHeader, makeMain, makeFooter } from './structure';

export default function loadPage() {
  const content = domSelector('#content');
  content.appendChild(makeHeader());
  content.appendChild(makeMain());
  content.appendChild(makeFooter());
}
