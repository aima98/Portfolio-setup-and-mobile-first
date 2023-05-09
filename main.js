const data = [
  {
    id: 1,
    title: 'Concert Website',
    company: 'Microverse',
    job: 'Front End Dev',
    year: 2023,
    persona: 'Responsive website from Mobile to desktop. This project was inspired by CC-Global-Summit-2015 website from https://www.behance.net/ gallery. It is a capstone project of the skills and knowledge I have acquired during my HTML and CSS module at Microverse program.',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card1',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: 2,
    title: 'Awesome Books',
    company: 'Microverse',
    job: 'Front End Dev',
    year: 2023,
    persona: 'Awesome books-ES6 is a project That contains a single-page web application that keeps track of books. Book details captured are the book title, author, and ISBN. Users can add a book, view a list of books, and also remove any unwanted books.',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card2',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/ai/Portfolio-setup-and-mobile-first',
  },
  {
    id: 3,
    title: 'Restaurant App',
    company: 'Microverse',
    job: 'Front End Dev',
    year: 2023,
    persona: 'It is a responsive website and an optimized food webapp that contains two interfaces and which displays different meals , interactive likes and comments for each particular item.',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card3',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/ai/Portfolio-setup-and-mobile-first',
  },
  {
    id: 4,
    title: 'To-Do List App',
    company: 'Microverse',
    job: 'Front End Dev',
    year: 2023,
    persona: 'Todo-App is a simple webpage that helps users manage their daily task, you can list, add and remove todo items.',
    languages: ['html', 'css', 'javascript'],
    bgImage: 'card4',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/ai/Portfolio-setup-and-mobile-first',
  },
];

const projectTitle = document.getElementById('portfolio');

// eslint-disable-next-line consistent-return
data.forEach((i) => {
  const container = document.createElement('div');
  container.className = 'card';
  projectTitle.appendChild(container);

  const cardImage = document.createElement('div');
  cardImage.className = ''.concat('card-bg', ' ', i.bgImage);
  container.appendChild(cardImage);

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-projects';
  container.appendChild(cardContainer);

  const titleElement = document.createElement('h1');
  titleElement.classList.add('card-title');
  cardContainer.appendChild(titleElement);
  titleElement.appendChild(document.createTextNode(data[data.indexOf(i)].title));

  const jobDescription = document.createElement('ul');
  jobDescription.classList.add('card-job-desc');

  const name = document.createElement('li');
  const job = document.createElement('li');
  const year = document.createElement('li');

  jobDescription.appendChild(name);
  jobDescription.appendChild(job);
  jobDescription.appendChild(year);

  name.appendChild(document.createTextNode(i.company));
  job.appendChild(document.createTextNode(i.job));
  year.appendChild(document.createTextNode(i.year));

  cardContainer.appendChild(jobDescription);
  jobDescription.classList.add('card-job-desc');
  name.classList.add('card-company');
  job.classList.add('card-job');
  year.classList.add('card-year');

  const bio = document.createElement('p');
  bio.classList.add('card-persona');

  const biography = document.createTextNode(i.persona);
  cardContainer.appendChild(bio);
  bio.appendChild(biography);

  const languages = document.createElement('ul');
  languages.classList.add('card-languages');

  let html; let css; let js; let github; let ruby; let bootstrap;

  // eslint-disable-next-line no-plusplus
  for (let j = 0; j < Object.keys(i.languages).length; j++) {
    html = document.createElement('li');
    css = document.createElement('li');
    js = document.createElement('li');
  }

  cardContainer.appendChild(languages);
  languages.appendChild(html);
  languages.appendChild(css);
  languages.appendChild(js);

  html.appendChild(document.createTextNode(i.languages[0]));
  css.appendChild(document.createTextNode(i.languages[1]));
  js.appendChild(document.createTextNode(i.languages[2]));

  if (i.languages[3] != null && i.languages[4] != null && i.languages[5] != null) {
    github = document.createElement('li');
    ruby = document.createElement('li');
    bootstrap = document.createElement('li');

    languages.appendChild(github);
    languages.appendChild(ruby);
    languages.appendChild(bootstrap);

    github.appendChild(document.createTextNode(i.languages[3]));
    ruby.appendChild(document.createTextNode(i.languages[4]));
    bootstrap.appendChild(document.createTextNode(i.languages[5]));

    github.classList.add('card-lang1');
    ruby.classList.add('card-lang1');
    bootstrap.classList.add('card-lang3');
  }

  html.classList.add('card-lang1');
  css.classList.add('card-lang2');
  js.classList.add('card-lang3');

  const button = document.createElement('button');
  button.classList.add('card-submit-button');
  button.setAttribute('id', ''.concat('project', '', i.id));

  cardContainer.appendChild(button);
  button.appendChild(document.createTextNode('See Project'));
});

const dataSize = Object.keys(data).length;
const popupOverlay = document.getElementById('popupOverlay');

// eslint-disable-next-line no-plusplus
for (let j = 1; j <= dataSize; j++) {
  const idz = 'project'.concat(j);
  const showDetails = document.getElementById(`${idz}`);

  showDetails.addEventListener('click', () => {
    popupOverlay.style.display = 'block';

    const popupContent = document.createElement('div');
    popupContent.className = 'popup-content';
    popupOverlay.appendChild(popupContent);

    const popupTitle = document.createElement('div');
    popupTitle.className = 'top-popup';
    popupContent.appendChild(popupTitle);

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

    const jobDescriptionPop = document.createElement('ul');
    jobDescriptionPop.classList.add('card-job-desc');

    const namePop = document.createElement('li');
    const jobPop = document.createElement('li');
    const yearPop = document.createElement('li');

    jobDescriptionPop.appendChild(namePop);
    jobDescriptionPop.appendChild(jobPop);
    jobDescriptionPop.appendChild(yearPop);

    namePop.appendChild(document.createTextNode(projectData.company));
    jobPop.appendChild(document.createTextNode(projectData.job));
    yearPop.appendChild(document.createTextNode(projectData.year));

    popupContent.appendChild(jobDescriptionPop);
    namePop.classList.add('card-company');
    jobPop.classList.add('card-job');
    yearPop.classList.add('card-year');

    const popImage = document.createElement('div');
    popImage.className = 'popup-img';
    popupContent.appendChild(popImage);

    const bioPop = document.createElement('p');
    bioPop.classList.add('popup-info');
    bioPop.appendChild(document.createTextNode(projectData.persona));
    popupContent.appendChild(bioPop);

    const languagesPop = document.createElement('ul');
    languagesPop.classList.add('popup-languages');

    const htmlPop = document.createElement('li');
    const cssPop = document.createElement('li');
    const jsPop = document.createElement('li');

    popupContent.appendChild(languagesPop);
    languagesPop.appendChild(htmlPop);
    languagesPop.appendChild(cssPop);
    languagesPop.appendChild(jsPop);

    htmlPop.appendChild(document.createTextNode(projectData.languages[0]));
    cssPop.appendChild(document.createTextNode(projectData.languages[1]));
    jsPop.appendChild(document.createTextNode(projectData.languages[2]));

    // eslint-disable-next-line max-len
    if (projectData.languages[3] != null && projectData.languages[4] != null && projectData.languages[5] != null) {
      const githubPop = document.createElement('li');
      const rubyPop = document.createElement('li');
      const bootstrapPop = document.createElement('li');

      languagesPop.appendChild(githubPop);
      languagesPop.appendChild(rubyPop);
      languagesPop.appendChild(bootstrapPop);

      githubPop.appendChild(document.createTextNode(projectData.languages[3]));
      rubyPop.appendChild(document.createTextNode(projectData.languages[4]));
      bootstrapPop.appendChild(document.createTextNode(projectData.languages[5]));

      githubPop.classList.add('card-lang1');
      rubyPop.classList.add('card-lang1');
      bootstrapPop.classList.add('card-lang3');
    }

    htmlPop.classList.add('card-lang1');
    cssPop.classList.add('card-lang2');
    jsPop.classList.add('card-lang3');

    const hrPop = document.createElement('hr');
    hrPop.classList.add('line');
    popupContent.appendChild(hrPop);

    const liveSource = document.createElement('div');
    liveSource.className = 'live-source';
    popupContent.appendChild(liveSource);

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
    sourceButton.appendChild(document.createTextNode('See Source '));

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
        popupContent.style.display = 'none';
        popupOverlay.style.display = 'none';
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