import { domCreator } from './dom-manipulation';
import { mainDishes, entrees } from './info';

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
