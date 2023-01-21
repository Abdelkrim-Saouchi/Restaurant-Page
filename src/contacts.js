import { domCreator } from './dom-manipulation';

const contacts = {
  mamaCamel: {
    name: 'Mama Camel',
    job: 'Chef',
    phone: '548-545-524',
    email: 'mamaCamelAg@fake.com',
    img: '../src/mama-camel.jpg',
  },
  papCamel: {
    name: 'Papa Camel',
    job: 'Manager',
    phone: '442-544-111',
    email: 'papaCamelAg@fake.com',
    img: '../src/papa-camel.jpg',
  },
  babyCamel: {
    name: 'Baby Camel',
    job: 'Waiter',
    phone: '542-444-200',
    email: 'babyCamelAg@fake.com',
    img: '../src/baby-camel.jpg',
  },
};

function makeContactTitle() {
  const contactTitle = domCreator('h2');
  contactTitle.id = 'contact-title';
  contactTitle.textContent = 'Contact Us';
  return contactTitle;
}

function makeContactCard(name, job, phone, email, imgSrc) {
  const contactCard = domCreator('div');
  contactCard.classList.add('contact-card');

  const contactInfo = domCreator('div');
  contactInfo.classList.add('contact-info');

  const contactName = domCreator('h3');
  contactName.textContent = name;

  const contactJob = domCreator('p');
  contactJob.classList.add('contact-job');
  contactJob.textContent = job;

  const contactPhoneNumber = domCreator('p');
  contactPhoneNumber.classList.add('phone-number');
  contactPhoneNumber.textContent = phone;

  const contactEmail = domCreator('p');
  contactEmail.classList.add('contact-email');
  contactEmail.textContent = email;

  contactInfo.appendChild(contactName);
  contactInfo.appendChild(contactJob);
  contactInfo.appendChild(contactPhoneNumber);
  contactInfo.appendChild(contactEmail);

  const contactImg = domCreator('img');
  contactImg.src = imgSrc;

  contactCard.appendChild(contactInfo);
  contactCard.appendChild(contactImg);
  return contactCard;
}

const mama = makeContactCard(
  contacts.mamaCamel.name,
  contacts.mamaCamel.job,
  contacts.mamaCamel.phone,
  contacts.mamaCamel.email,
  contacts.mamaCamel.img
);

const papa = makeContactCard(
  contacts.papCamel.name,
  contacts.papCamel.job,
  contacts.papCamel.phone,
  contacts.papCamel.email,
  contacts.papCamel.img
);

const baby = makeContactCard(
  contacts.babyCamel.name,
  contacts.babyCamel.job,
  contacts.babyCamel.phone,
  contacts.babyCamel.email,
  contacts.babyCamel.img
);

const contactComponents = [makeContactTitle(), mama, papa, baby];

export default contactComponents;
