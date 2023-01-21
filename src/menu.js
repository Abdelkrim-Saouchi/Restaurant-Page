import { domCreator } from './dom-manipulation';

const mainDishes = {
  category: 'Main Dishes',
  couscous: {
    name: 'Couscous',
    desc: 'Couscous is a traditional North African dish made from small steamed balls of semolina wheat. It is often served as a side dish with meat or vegetables and can be made sweet or savory. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: '../src/couscous.jpg',
  },
  zviti: {
    name: 'Zviti',
    desc: 'Zviti is a traditional Algerian dish consisting of stewed lamb or beef, mixed with chickpeas and a variety of spices. It is often served with couscous and is a hearty, comforting meal. It is a staple of Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '4$',
    imgSrc: '../src/zviti2.jpeg',
  },
  chakhchokha: {
    name: 'Chakhchokha',
    desc: 'Chakhchokha is a traditional Algerian dish made of cooked and mashed tomatoes and bell peppers, typically served with bread. It is a hearty and flavorful dish, and is often served as a side dish or as a topping for meat dishes. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '3$',
    imgSrc: '../src/chakhchoka.jpeg',
  },
};

const entrees = {
  category: 'Entrees and Dessert Dishes',
  tea: {
    name: 'Sahara Tea',
    desc: 'Algerian Sahara tea is a type of black tea that is grown and produced in the Sahara desert region of Algeria. It is known for its strong, bold flavor and is often served with mint or other herbs to enhance the taste. It is considered a traditional drink in Algeria and is enjoyed by many locals and tourists alike.',
    price: '0.5$',
    imgSrc: '../src/sahara-tea.jpg',
  },
  baklava: {
    name: 'Baklava',
    desc: 'Algerian baklava is a sweet pastry made from layers of phyllo dough filled with chopped nuts, typically almonds or pistachios. It is sweetened with honey or syrup and is often flavored with cinnamon or orange blossom water. It is a popular dessert in Algeria and can be found in many bakeries and restaurants throughout the country.',
    price: '2$',
    // Image by fabrikasimf on Freepik
    imgSrc: '../src/baklava.jpg',
  },
};

function menuTitle() {
  const menu = domCreator('h2');
  menu.textContent = 'Menu';
  menu.id = 'menu-title';
  return menu;
}

function makeCategory(category) {
  const menuCategory = domCreator('h3');
  menuCategory.textContent = category;
  menuCategory.id = 'category';
  return menuCategory;
}

function foodType(name, description, priceFood, imgSrc) {
  const foodCard = domCreator('div');
  foodCard.classList.add('food-card');

  const title = domCreator('h4');
  title.textContent = name;

  const desc = domCreator('p');
  desc.classList.add('food-desc');
  desc.textContent = description;

  const price = domCreator('p');
  price.classList.add('price');
  price.textContent = priceFood;

  const foodImg = domCreator('img');
  foodImg.src = imgSrc;
  foodImg.alt = 'img';

  foodCard.appendChild(title);
  foodCard.appendChild(desc);
  foodCard.appendChild(price);
  foodCard.appendChild(foodImg);

  return foodCard;
}

const couscousDish = foodType(
  mainDishes.couscous.name,
  mainDishes.couscous.desc,
  mainDishes.couscous.price,
  mainDishes.couscous.imgSrc
);

const zvitiDish = foodType(
  mainDishes.zviti.name,
  mainDishes.zviti.desc,
  mainDishes.zviti.price,
  mainDishes.zviti.imgSrc
);

const chakhchokhaDish = foodType(
  mainDishes.chakhchokha.name,
  mainDishes.chakhchokha.desc,
  mainDishes.chakhchokha.price,
  mainDishes.chakhchokha.imgSrc
);

const saharaTea = foodType(
  entrees.tea.name,
  entrees.tea.desc,
  entrees.tea.price,
  entrees.tea.imgSrc
);

const baklava = foodType(
  entrees.baklava.name,
  entrees.baklava.desc,
  entrees.baklava.price,
  entrees.baklava.imgSrc
);

const mainDishesSubtitle = makeCategory(mainDishes.category);
const entreesSubtitle = makeCategory(entrees.category);

const menuComponents = [
  menuTitle(),
  mainDishesSubtitle,
  couscousDish,
  zvitiDish,
  chakhchokhaDish,
  entreesSubtitle,
  saharaTea,
  baklava,
];

export default menuComponents;
