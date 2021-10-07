const APEX = {
  news: [
    {
      src: './img/mental.png',
      title: 'Mental arifmetikani oson o‘rganamiz',
      date: '22.09.2021'
    },
    {
      src: './img/IELTS.png',
      title: 'IELTS imtihoni haqida',
      date: '20.09.2021'
    },
    {
      src: './img/ingliztili.png',
      title: 'Ingliz tilini bilish zamon talabi',
      date: '12.09.2021'
    }
  ]
}
// DOM ELEMENTS 
const elNewsList = document.querySelector('.news__list');
const elGamburgerBtn = document.querySelector('.gamburger-button');
const elSiteNavList = document.querySelector('.site-nav__list');

// GAMBURGER MENU 
elGamburgerBtn.addEventListener('click', () => {
  elSiteNavList.classList.toggle('site-nav__list--open')
  elGamburgerBtn.classList.toggle('gamburger-button--close')
})

// TEMPLATES
let newsFragment = document.querySelector('.news-template').content;
console.log(newsFragment);

function createNewsItem({ src, title, date }) {
  let cloneItem = newsFragment.cloneNode(true);

  let elNewsImg = cloneItem.querySelector('.news__img')
  let elNewsTitle = cloneItem.querySelector('.news__title')
  let elNewsDate = cloneItem.querySelector('.news__date')

  elNewsImg.src = src;
  elNewsTitle.textContent = title;
  elNewsDate.textContent = date;
  return cloneItem;
}

function renderNews(data) {
  let fragment = document.createDocumentFragment()

  data.news
    .forEach(item => {
      fragment.appendChild(createNewsItem(item));
    })
  
  elNewsList.appendChild(fragment);
}
renderNews(APEX);


// DOM ELEMENT 
const buttons = document.querySelectorAll(".controller-button");
const NewsCardsContainer = document.querySelector(".news__list");
const NewsCards = document.querySelectorAll(".news__item");

// SLIDER 
// ACTIVE INDECATOR FUNCTION 
function activeIndecator(index) {
  buttons.forEach(button => {
    button.classList.remove('controller-button--active')
  })
  buttons[index].classList.add('controller-button--active')
}

function slider(cards, cardsContainer ) {
  console.log(5);
  let size = 0, 
    i= 3, 
    j = cards.length,
    indecator = i;
  if(Math.floor(j/i) > indecator) indecator = Math.floor(j/i)

  setInterval(() => {
    if (i < j) {
      size += cards[i].offsetWidth + 25;
      cardsContainer.scrollTo(size, 0);
      i++;
      if(i >= indecator && i < indecator * 2) {
        activeIndecator(1);
      } else if (i >= indecator * 2) {
        activeIndecator(2)
      } else (activeIndecator(0))
    } else {
      i = 3;
      size = 0;
      cardsContainer.scrollTo(0,0)
      activeIndecator(0)
    }
  }, 3000)
}

slider(NewsCards, NewsCardsContainer)