// Меняем цвет фона первой карточки

const recolorFirstCardButtom = document.querySelector('.recolor-first-card-buttom')
const firstProductCard = document.querySelector('.product-card')
const redHeshColor = '#ffe9e9'

recolorFirstCardButtom.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = redHeshColor
})

// Меняем цвет фона всех карточек

const recolorCardsButtom = document.querySelector('.recolor-cards-buttom')
const ProductCards = document.querySelectorAll('.product-card')
const greenHeshColor = '#e5ffe5'

recolorCardsButtom.addEventListener('click', () => {
  ProductCards.forEach(element => element.style.backgroundColor = greenHeshColor)
})

// Переходим на сайт https://google.com 

const openGoogleButtom = document.querySelector('.open-google-buttom')
const googleSite = 'https://google.com'

openGoogleButtom.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google?');
  if (answer === true) {
    window.open(googleSite)
  } else {
    console.log('Пользователь не хочет переходить на сайт Google')
  }
}

// Выводим в консоль текст заголовка при наведении на него мышкой

const pageTitle = document.querySelector('.page-title')
const pageTitleContent = pageTitle.textContent

pageTitle.addEventListener('mouseover', () => {
  console.log(pageTitleContent)
})

// Меняем цвет кнопки при нажатии, возвращаем предыдущий цвет при повторном нажатии

const selfRecolorButton = document.querySelector('.self-recolor-button-purple')

selfRecolorButton.addEventListener('click', () => {
  selfRecolorButton.classList.toggle('self-recolor-button-blue')
})
