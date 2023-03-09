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
    id: '1',
    title: 'Tonic',
    client: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    text: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    poptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.',
    languages: ['html', 'Ruby on Rails', 'css', 'javascript'],
    bgImage: 'firstCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: '2',
    title: 'Multi-Post Stories',
    client: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    text: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    poptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.',
    languages: ['html', 'Ruby on Rails', 'css', 'javascript'],
    bgImage: 'secondCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: '3',
    title: 'Facebook 360',
    client: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2018,
    text: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    poptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.',
    languages: ['html', 'Ruby on Rails', 'css', 'javascript'],
    bgImage: 'thirdCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: '4',
    title: 'Uber Navigation',
    client: 'Uber',
    job: 'Lead Developer',
    year: 2015,
    text: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
    poptext: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero culpa, excepturi harum corrupti inventore, quis cupiditate atque dolorem veritatis autem necessitatibus officiis vitae doloremque earum laudantium soluta praesentium odit at id aut aspernatur quas alias voluptates. Rerum veniam cum maiores? Aspernatur dolorem architecto et praesentium vitae earum voluptates exercitationem.',
    languages: ['html', 'Ruby on Rails', 'css', 'javascript'],
    bgImage: 'fourthCard',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
];

const projectTitle = document.getElementById('Portfolio');

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
  titleCard.appendChild(document.createTextNode(data[data.indexOf(element)].title));

  const description = document.createElement('ul');
  description.classList.add('des-list');

  const company = document.createElement('li');
  const job = document.createElement('li');
  const year = document.createElement('li');

  description.appendChild(company);
  description.appendChild(job);
  description.appendChild(year);

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

  let html; let RubyRails; let css; let js; let github; let ruby; let bootstrap;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Object.keys(element.languages).length; i++) {
    html = document.createElement('li');
    RubyRails = document.createElement('li');
    css = document.createElement('li');
    js = document.createElement('li');
  }

  cardContainer.appendChild(languages);
  languages.appendChild(html);
  languages.appendChild(RubyRails);
  languages.appendChild(css);
  languages.appendChild(js);

  html.appendChild(document.createTextNode(element.languages[0]));
  RubyRails.appendChild(document.createTextNode(element.languages[1]));
  css.appendChild(document.createTextNode(element.languages[2]));
  js.appendChild(document.createTextNode(element.languages[3]));
  // eslint-disable-next-line max-len
  if (element.languages[4] != null && element.languages[5] != null && element.languages[6] != null) {
    github = document.createElement('li');
    ruby = document.createElement('li');
    bootstrap = document.createElement('li');

    languages.appendChild(github);
    languages.appendChild(ruby);
    languages.appendChild(bootstrap);

    github.appendChild(document.createTextNode(element.languages[4]));
    ruby.appendChild(document.createTextNode(element.languages[5]));
    bootstrap.appendChild(document.createTextNode(element.languages[6]));

    github.classList.add('card-lang11');
    ruby.classList.add('card-lang11');
    bootstrap.classList.add('card-lang31');
  }

  html.classList.add('card-lang11');
  RubyRails.classList.add('card-lang10');
  css.classList.add('card-lang21');
  js.classList.add('card-lang31');

  const button = document.createElement('button');
  button.classList.add('see-projects-btn');
  button.setAttribute('id', ''.concat('project', element.id));
  cardContainer.appendChild(button);
  button.appendChild(document.createTextNode('See Project'));
});

const projPop = (
  title,
  client,
  job,
  year,
  bgImage,
  poptext,
  live,
  source,
) => {
  return `<div class="pop-header">
    <h3 class="pop-title">${title}</h3>
    <button class="close-btn">
      <img class="close" src="assets/images/cancel-icon.png alt=""/>
    </button>
    <div class="des-listpop">
      <span class="popClient">${client}</span>
      <img class="dot" src="assets/images/dot.png alt=""/>
      <span>${job}</span>
      <img class="dot" src="assets/images/dot.png alt=""/>
      <span>${year}</span>
    </div>
  </div> 
  <div class="background-container">
    <img class="pop-bg" src="${bgImage}" alt=""/>
  </div> 
  <div class="pop-content">
    <p class="pop-text">${poptext}</p>
    <ul class="des-listpop">
      <li>Html</li>
      <li>Css</li>
      <li>JavaScript</li>
      <li>Github</li>
      <li>Ruby</li>
      <li>Bootstrap</li>
    </ul>
  </div> 
  <span class="line"></span>
  <div class="footer">
    <button class="live-source" onclick="window.open('${live}', '_blank')">
      <span>See live</span>
      <img src="assets/images/Icon-live.svg"/>
    </button>
    <button class="live-source" onclick="window.open('${source}', '_blank')">
      <span>See live</span>
      <img src="assets/images/Frame(1).svg"/>
    </button>
  </div>`;
};

const popContainer = document.createElement('div');
const seeProject = document.querySelectorAll('.see-projects-btn');
seeProject.forEach((button) => {
  button.addEventListener('click', () => {
    data.forEach((project) => {
      const overlay = document.getElementById('overlay');
      overlay.appendChild(popContainer);
      const htmlToInsert = projPop(
        project.id,
        project.title,
        project.client,
        project.job,
        project.year,
        project.bgImage,
        project.poptext,
        project.languages,
        project.live,
        project.source,
      );
      popContainer.innerHTML = htmlToInsert;
    });
  });
});

const closePop = document.querySelector('.close-btn');
closePop.addEventListener('click', () => {
  const overlay = document.querySelector('.popOverlay');
  popContainer.innerHTML = '';
  overlay.style.display = 'none';
});