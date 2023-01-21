import { domCreator } from './dom-manipulation';

const contentObj = {
  title: 'Khaima Restaurant',
  reviewerOne: {
    text: '"Khaima Restaurant is the palce in middle sahara with Algerian traditional food. Food is a perfect blend of flavors and spices that will leave your taste buds tingling. The dishes are hearty, comforting and perfect for sharing with friends and family. If you ever have a chance to try this cuisine, I highly recommend it." ',
    reviewer: 'John Kennedy',
  },
  reviewerTwo: {
    text: '"Khaima in the Algerian Sahara is a unique and unforgettable dining experience. The traditional Berber cuisine is delicious and authentic, and the desert setting is breathtaking. Highly recommend a visit to Khaima for a truly one-of-a-kind meal."',
    reviewer: 'Mohammed El Kendy',
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
