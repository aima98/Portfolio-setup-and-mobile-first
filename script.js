const { getElementById } = require("domutils");
const { indexOf } = require("lodash");
const { createElement } = require("parse5/lib/tree-adapters/default");

const menuBar = document.querySelector('.menu-bar');
const mobileMenu = document.querySelector('.mobile-menu');

const Bar = () => {
  menuBar.classList.toggle('active');
  mobileMenu.classList.toggle('active');
};

menuBar.addEventListener('click', Bar);

document.querySelectorAll('.menu-link').forEach((element) => element.addEventListener('click', () => {
  menuBar.classList.remove('active');
  mobileMenu.classList.remove('active');
}));

const data = [
  {
    id: 'card1',
    title: 'Tonic',
    client: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages: ['css', 'html', 'javascript'],
    bgImage: 'firstCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: 'card2',
    title: 'Multi-Post Stories',
    client: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    text: 'A daily selection of privately<br> personalized reads; no accounts or sign-ups required.',
    languages: ['css', 'html', 'javascript'],
    bgImage: 'secondCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: 'card3',
    title: 'Tonic',
    client: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    text: 'A daily selection of privately<br> personalized reads; no accounts or sign-ups required.',
    languages: ['css', 'html', 'javascript'],
    bgImage: 'thirdCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: 'card4',
    title: 'Multi-Post Stories',
    client: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    text: 'A daily selection of privately<br> personalized reads; no accounts or sign-ups required.',
    languages: ['css', 'html', 'javascript'],
    bgImage: 'fourthCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  }
];

const projectTitle = getElementById('portfolio');

data.forEach((element) => {
  const container = document.createElement('div');
  container.className = 'card';
  projectTitle.appendChild(container);

  const cardImg = document.createElement('div');
  cardImg.className = ''.concat('card-bg', ' ', element.bgImage);
  container.appendChild(cardImg);

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-projects';
  container.appendChild(cardContainer);

  const titleCard = document.createElement('h1');
  titleCard.className = 'card-title';
  cardContainer.appendChild(titleCard);
  titleCard.appendChild(document.createTextNode(data[data.indexOf(element).title]));

  const description = document.createElement('ul');
  description.classList.add('des-list');

  const company = document.createElement('li');
  const job = document.createElement('li');
  const year = document.createElement('li');

  company.appendChild(document.createTextNode(element.client));
  job.appendChild(document.createTextNode(element.job));
  year.appendChild(document.createTextNode(element.year));

  cardContainer.appendChild(description);
  company.classList.add('card-company');
  job.classList.add('card-job');
  year.classList.add('card-year');

  const paragraph = document.createElement('p');
  paragraph.classList.add('card-text');

  const ph = document.createTextNode(element.text);
  cardContainer.appendChild(paragraph);
  paragraph.appendChild(ph);

  const languages = document.createElement('ul');
  languages.classList.add('card-lang');

  let html; let css; let js; let github; let ruby; let bootstrap;

  for(let i=0; i<Object.keys(element.languages).length; i++){
    html = document.createElement('li');
    css = document.createElement('li');
    js = document.createElement('li');
  }

  cardContainer.appendChild(languages);
  languages.appendChild(html);
  languages.appendChild(css);
  languages.appendChild(js);

  html.appendChild(document.createTextNode(element.languages[0]));
  css.appendChild(document.createTextNode(element.languages[1]));
  js.appendChild(document.createTextNode(element.languages[2]));

  if(element.languages[3] != null && element.languages[4] != null && element.languages[5] != null){
    github = document.createElement('li');
    ruby = document.createElement('li');
    bootstrap = document.createElement('li');

    languages.appendChild(github);
    languages.appendChild(ruby);
    languages.appendChild(bootstrap);

    github.appendChild(document.createTextNode(element.languages[3]));
    ruby.appendChild(document.createTextNode(element.languages[4]));
    bootstrap.appendChild(document.createTextNode(element.languages[5]));

    github.classList.add('card-lang4');
    ruby.classList.add('card-lang5');
    bootstrap.classList.add('card-lang6');
  }

  html.classList.add('card-lang1');
  css.classList.add('card-lang2');
  js.classList.add('card-lang3');

  const button = document.createElement('button');
  button.classList.add('see-projects-btn');
  button.setAttribute('id', '', concat('project', element.id));
  cardContainer.appendChild(button);
});



