import { domCreator } from './dom-manipulation';
import { contentObj } from './info';

function makeTitle() {
  const title = domCreator('h1');
  title.textContent = contentObj.title;
  return title;
}

function makeReview(text, viewerName) {
  const view = domCreator('div');
  view.classList.add('view');

  const viewPara = domCreator('p');
  viewPara.textContent = text;

  const viewer = domCreator('h2');
  viewer.textContent = viewerName;

  view.appendChild(viewPara);
  view.appendChild(viewer);
  return view;
}

function makeHoursDiv() {
  const workHours = domCreator('div');
  workHours.classList.add('work-hours');

  const subtitle = domCreator('h2');
  subtitle.textContent = 'Work Hours';

  const schedule = domCreator('div');
  schedule.innerHTML = `
  <p><span>Monday:</span> ${contentObj.hours.monday}</p>
  <p><span>Sunday:</span> ${contentObj.hours.sunday}</p>
  <p><span>Tuesday:</span> ${contentObj.hours.tuesday}</p>
  <p><span>Wednesday:</span> ${contentObj.hours.wednesday}</p>
  <p><span>Thursday:</span> ${contentObj.hours.thursday}</p>
  <p><span>Friday:</span> ${contentObj.hours.friday}</p>
  <p><span>Saturday:</span> ${contentObj.hours.saturday}</p>
  `;

  workHours.appendChild(subtitle);
  workHours.appendChild(schedule);

  return workHours;
}

function makeLocationDiv() {
  const locationDiv = domCreator('div');
  locationDiv.classList.add('location');

  const subtitle = domCreator('h2');
  subtitle.textContent = contentObj.location.subtitle;

  const address = domCreator('p');
  address.textContent = contentObj.location.address;

  locationDiv.appendChild(subtitle);
  locationDiv.appendChild(address);

  return locationDiv;
}

const reviewerOne = makeReview(
  contentObj.reviewerOne.text,
  contentObj.reviewerOne.reviewer
);

const reviewerTwo = makeReview(
  contentObj.reviewerTwo.text,
  contentObj.reviewerTwo.reviewer
);

const homeComponents = [
  makeTitle(),
  reviewerOne,
  reviewerTwo,
  makeHoursDiv(),
  makeLocationDiv(),
];

export default homeComponents;
