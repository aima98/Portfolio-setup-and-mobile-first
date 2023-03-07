import { getElementById } from 'domutils';
import { concat } from 'lodash';

// Work Cards Section
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
  },
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
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Object.keys(element.languages).length; i++) {
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
  // eslint-disable-next-line max-len
  if (element.languages[3] != null && element.languages[4] != null && element.languages[5] != null) {
    github = document.createElement('li');
    ruby = document.createElement('li');
    bootstrap = document.createElement('li');

    languages.appendChild(github);
    languages.appendChild(ruby);
    languages.appendChild(bootstrap);

    github.appendChild(document.createTextNode(element.languages[3]));
    ruby.appendChild(document.createTextNode(element.languages[4]));
    bootstrap.appendChild(document.createTextNode(element.languages[5]));

    github.classList.add('card-lang1');
    ruby.classList.add('card-lang1');
    bootstrap.classList.add('card-lang3');
  }

  html.classList.add('card-lang1');
  css.classList.add('card-lang2');
  js.classList.add('card-lang3');

  const button = document.createElement('button');
  button.classList.add('see-projects-btn');
  button.setAttribute('id', '', concat('project', element.id));
  cardContainer.appendChild(button);
});

const DATA = Object.keys(data).length;
const popOverlay = document.getElementById('popOverlay');
// eslint-disable-next-line no-plusplus
for (let j = 1; j <= DATA; j++) {
  const idz = 'project'.concat(j);
  const showDetails = document.getElementById(`${idz}`);

  showDetails.addEventListener('click', () => {
    popOverlay.style.display = 'block';

    const popContent = document.createElement('div');
    popContent.className = 'pop-content';
    popOverlay.appendChild(popContent);

    const popupTitle = document.createElement('div');
    popupTitle.className = 'top-popup';
    popContent.appendChild(popupTitle);

    const projectData = data.find((x) => x.id === j);

    const popTitle = document.createElement('h3');
    popTitle.classList.add('title-popup');
    popTitle.appendChild(document.createTextNode(projectData.title));
    popupTitle.appendChild(popTitle);

    const closePop = document.createElement('img');
    closePop.className = 'cancel-icon';
    closePop.setAttribute('id', 'cancel-icon');
    closePop.src = './img/cancel-icon.png';
    popupTitle.appendChild(closePop);

    const popDescription = document.createElement('ul');
    popDescription.classList.add('des-list');

    const popCompany = document.createElement('li');
    const popJob = document.createElement('li');
    const popYear = document.createElement('li');

    popDescription.appendChild(popCompany);
    popDescription.appendChild(popJob);
    popDescription.appendChild(popYear);

    popCompany.appendChild(document.createTextNode(projectData.client));
    popJob.appendChild(document.createTextNode(projectData.job));
    popYear.appendChild(document.createTextNode(projectData.year));

    popContent.appendChild(popDescription);
    popCompany.classList.add('card-company');
    popJob.classList.add('card-job');
    popYear.classList.add('card-year');

    const popImg = document.createElement('div');
    popImg.className = 'popup-img';
    popContent.appendChild(popImg);

    const popParagraph = document.createElement('p');
    popParagraph.classList.add('pop-text');
    popParagraph.appendChild(document.createTextNode(projectData.text));
    popContent.appendChild(popParagraph);

    const popLanguages = document.createElement('ul');
    popLanguages.classList.add('card-lang');

    let popHtml; let popCss; let popJs; let popGithub; let popRuby; let popBootstrap;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < Object.keys(projectData.languages).length; i++) {
      popHtml = document.createElement('li');
      popCss = document.createElement('li');
      popJs = document.createElement('li');
    }
    popContent.appendChild(popLanguages);
    popLanguages.appendChild(popHtml);
    popLanguages.appendChild(popCss);
    popLanguages.appendChild(popJs);

    popHtml.appendChild(document.createTextNode(projectData.languages[0]));
    popCss.appendChild(document.createTextNode(projectData.languages[1]));
    popJs.appendChild(document.createTextNode(projectData.languages[2]));
    // eslint-disable-next-line max-len
    if (projectData.languages[3] != null && projectData.languages[4] != null && projectData.languages[5] != null) {
      popGithub = document.createElement('li');
      popRuby = document.createElement('li');
      popBootstrap = document.createElement('li');

      popLanguages.appendChild(popGithub);
      popLanguages.appendChild(popRuby);
      popLanguages.appendChild(popBootstrap);

      popGithub.appendChild(document.createTextNode(projectData.languages[3]));
      popRuby.appendChild(document.createTextNode(projectData.languages[4]));
      popBootstrap.appendChild(document.createTextNode(projectData.languages[5]));

      popGithub.classList.add('card-lang1');
      popRuby.classList.add('card-lang1');
      popBootstrap.classList.add('card-lang3');
    }

    popHtml.classList.add('card-lang1');
    popCss.classList.add('card-lang2');
    popJs.classList.add('card-lang3');

    const popHr = document.createElement('hr');
    popHr.classList.add('line');
    popContent.appendChild(popHr);

    const liveSource = document.createElement('div');
    liveSource.className = 'live-source';
    popContent.appendChild(liveSource);

    const liveButton = document.createElement('button');
    liveButton.setAttribute('class', 'live');
    liveButton.type = 'button';
    liveSource.appendChild(liveButton);
    liveButton.appendChild(document.createTextNode('See Live'));

    const liveIcon = document.createElement('img');
    liveIcon.setAttribute('class', 'liveImg');
    liveIcon.src = './img/Icon-live.svg';
    liveButton.appendChild(liveIcon);

    document.querySelectorAll('.live').forEach((live) => {
      live.addEventListener('click', () => {
        window.open(projectData.live);
      });
    });

    const sourceButton = document.createElement('button');
    sourceButton.setAttribute('class', 'source');
    sourceButton.type = 'button';
    liveSource.appendChild(sourceButton);
    sourceButton.appendChild(document.createTextNode('See Source'));

    const sourceIcon = document.createElement('img');
    sourceIcon.setAttribute('class', 'sourceImg');
    sourceIcon.src = './img/Frame.svg';
    sourceButton.appendChild(sourceIcon);

    document.querySelectorAll('.source').forEach((source) => {
      source.addEventListener('click', () => {
        window.open(projectData.source);
      });
    });

    const closeProjects = document.querySelectorAll('.cancel-icon');
    closeProjects.forEach((closeProject) => {
      closeProject.addEventListener('click', () => {
        popContent.style.display = 'none';
        popOverlay.style.display = 'none';
      });
    });
  });
}

const hamburger = document.querySelector('.menu-button');
const menuClose = document.querySelector('.menu-close');
const menuOverlay = document.getElementById('menu-overlay');
const entireOver = document.querySelector('.mobile-menu');

const displayMenuList = () => {
  hamburger.style.display = 'none';
  menuOverlay.style.display = 'block';
  entireOver.style.display = 'block';
  menuClose.style.display = 'block';
};

const closeMenuList = () => {
  menuOverlay.style.display = 'none';
  hamburger.style.display = 'block';
  entireOver.style.display = 'none';
  menuClose.style.display = 'none';
};

hamburger.addEventListener('click', displayMenuList);
menuClose.addEventListener('click', closeMenuList);

document.querySelectorAll('.menu-item-list').forEach((n) => {
  n.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
    hamburger.style.display = 'block';
    menuClose.style.display = 'none';
    entireOver.style.display = 'none';
  });
});