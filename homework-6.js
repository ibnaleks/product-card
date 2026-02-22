// 3. Создаем объект с данными пользователя

const userProfile = {
  firstName: 'Дмитрий',
  lastName: 'Шутенко',
  middleName: 'Александрович',
  age: 38,
  emailAddress: 'ibnaleks@gmail.com',
  job: 'Менеджер по продажам',
  company: 'ИП Зарипов И.В.',
  country: 'Россия',
  city: 'Набережные Челны',
}

// 4. Создаем объект с данными автомобиля и добавляем в нее владельца из Профиля пользователя

const carCard = {
  brand: 'Lifan',
  model: 'Solano',
  year: 2013,
  color: 'white',
  transmission: 'manual',
}

carCard.ownerCar = userProfile;

// 5. Функция, которая будет записывать в карточку автомобиля максимальную скорость (если до этого не было указано)

function addCarMaxSpeed({ carMaxSpeed }) {
  if (carMaxSpeed === undefined) {
    carCard.carMaxSpeed = 180;
  }
}

addCarMaxSpeed(carCard);

// 6. Функция, которая получает объект и свойство, которое надо вывести и выводит его в консоль

function showObjectProperty(object, property) {
  console.log(object[property]);
}

showObjectProperty(carCard, 'carMaxSpeed');

// 7. Создаем массив, который содержит в себе названия продуктов

const productNames = ['мясо', 'колбаса', 'макароны', 'картофель', 'яйца', 'молоко', 'хлеб', 'масло'];

// 8. Создаем массив, состоящий из объектов, представляющих собой страны. Добавляем еще одну страну в конец списка.

const countries = [
  {
    countryName: 'Россия',
    continent: 'Евразия',
    area: 17098246,
    population: 146119928,
    capital: 'Москва',
    language: 'русский',
  },
  {
    countryName: 'Китай',
    continent: 'Евразия',
    area: 9598962,
    population: 1408280000,
    capital: 'Пекин',
    language: 'китайский',
  },
  {
    countryName: 'Австралия',
    continent: 'Австралия',
    area: 7692024,
    population: 27012300,
    capital: 'Канберра',
    language: 'австралийский',
  },
  {
    countryName: 'Франция',
    continent: 'Евразия',
    area: 643801,
    population: 68521974,
    capital: 'Париж',
    language: 'французский',
  },
  {
    countryName: 'Египет',
    continent: 'Африка',
    area: 1001450,
    population: 106221670,
    capital: 'Каир',
    language: 'арабский',
  },
];

countries.push({
  countryName: 'Саудовская Аравия',
  continent: 'Евразия',
  area: 2149690,
  population: 34218169,
  capital: 'Эр-Рияд',
  language: 'арабский',
});

// 9. Создаем массив, состоящий из стран Американских континентов и объединяем в один массив все страны

const americasCountries = [
  {
    countryName: 'США',
    continent: 'Северная Америка',
    area: 9833517,
    population: 340110988,
    capital: 'Вашингтон',
    language: 'английский',
  },
  {
    countryName: 'Канада',
    continent: 'Северная Америка',
    area: 9984670,
    population: 40000000,
    capital: 'Оттава',
    language: 'английский',
  },
  {
    countryName: 'Бразилия',
    continent: 'Южная Америка',
    area: 8515767,
    population: 220051512,
    capital: 'Бразилиа',
    language: 'португальский',
  },
  {
    countryName: 'Аргентина',
    continent: 'Южная Америка',
    area: 2780400,
    population: 47327407,
    capital: 'Буэнос-Айрес',
    language: 'испанский',
  },
  {
    countryName: 'Куба',
    continent: 'Северная Америка',
    area: 110860,
    population: 10059519,
    capital: 'Гавана',
    language: 'испанский',
  },
];

const allCountries = [...countries, ...americasCountries];

// 10. Создаем функцию, которая добавляет каждой стране новое свойство isBigCountry: true или false

const countriesWithSizeFlag = allCountries.map(function (country) {
  const BIG_AREA = 3000000;
  let { area } = country;
  if (area >= BIG_AREA) {
    country.isBigCountry = true;
  } else {
    country.isBigCountry = false;
  }
  return country;
});
