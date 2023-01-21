import { domCreator } from './dom-manipulation';

const mainDishes = {
  category: 'Main Dishes',
  couscous: {
    name: 'Couscous',
    desc: 'Couscous is a traditional North African dish made from small steamed balls of semolina wheat. It is often served as a side dish with meat or vegetables and can be made sweet or savory. It is a staple in Algerian cuisine and is enjoyed by locals and visitors alike.',
    price: '1$',
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
    imgSrc: './chakhchoka.jpeg',
  },
};

const desertDishes = {
  category: 'Desert Dishes',
  tea: {
    name: 'Sahara Tea',
    desc: 'kjdsfhjkhdsjfhkjdskjfsjdq',
    price: '0.5$',
    imgSrc: './chakhchoka.jpeg',
  },
  baklava: {
    name: 'Baklava',
    desc: 'fkdjskg dlksgj lkgjsgljsk jldsg jglsjg dlsgjsjglsdkjlkjsljgldjgskjd sdgjldsjgk',
    price: '5$',
    imgSrc: './chakhchoka.jpeg',
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

export { couscousDish, zvitiDish, makeCategory, menuTitle };
