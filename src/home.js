import { domCreator } from './dom-manipulation';

const contentObj = {
  title: 'Khaima Restaurant',
  view: {
    text: '"Khaima Restaurant is the palce in middle sahara with Algerian traditional food. Food is a perfect blend of flavors and spices that will leave your taste buds tingling. The dishes are hearty, comforting and perfect for sharing with friends and family. If you ever have a chance to try this cuisine, I highly recommend it." ',
    viewer: 'Visitor',
  },
  hours: {
    subtitle: 'Work Hours',
    sunday: '8am-8pm',
    monday: '8am-8am',
    tuesday: '8am - 7pm',
    wednesday: '7am - 6pm',
    thursday: '8am - 10pm',
    friday: '8am - 10pm',
    saturday: '8am - 10pm',
  },
  location: {
    subtitle: 'Location',
    address: 'Tassili, Algeria',
  },
};

// eslint-disable-next-line import/prefer-default-export
function makeTitle() {
  const title = domCreator('h1');
  title.textContent = contentObj.title;
  return title;
}

function makeView() {
  const view = domCreator('div');
  view.classList.add('view');

  const viewPara = domCreator('p');
  viewPara.textContent = contentObj.view.text;

  const viewer = domCreator('h2');
  viewer.textContent = contentObj.view.viewer;

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

const homeComponents = [
  makeTitle(),
  makeView(),
  makeHoursDiv(),
  makeLocationDiv(),
];

export default homeComponents;
