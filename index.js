const data = [
  {
    id: 'Card1',
    title1: 'Tonic',
    title2: 'Tonic',
    client1: 'CANOPY',
    client2: 'CANOPY',
    job1: 'Back End Dev',
    job2: 'Back End Dev',
    year1: 2015,
    year2: 2015,
    text1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    text2: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    languages1: ['html', 'css', 'javascript'],
    languages2: ['html', 'css', 'javascript'],
    bgImage1: 'firstCard',
    bgImage2: 'firstCard2',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: 'Card2',
    title1: 'Multi-Post Stories',
    title2: 'Multi-Post Stories',
    client1: 'CANOPY',
    client2: 'FACEBOOK',
    job1: 'Back End Dev',
    job2: 'Full Stack Dev',
    year1: 2015,
    year2: 2015,
    text1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    text2: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    languages1: ['html', 'css', 'javascript'],
    languages2: ['html', 'Ruby on Rails', 'css', 'javascript'],
    bgImage1: 'secondCard',
    bgImage2: 'secondCard2',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: 'Card3',
    title1: 'Tonic',
    title2: 'Facebook 360',
    client1: 'FACEBOOK',
    client2: 'CANOPY',
    job1: 'Back End Dev',
    job2: 'Full Stack Dev',
    year1: 2015,
    year2: 2018,
    text1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    text2: 'Exploring the future of media in Facebook"s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages1: ['html', 'css', 'javascript'],
    languages2: ['html', 'Ruby on Rails', 'css', 'javascript'],
    bgImage1: 'thirdCard',
    bgImage2: 'thirdCard2',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
  {
    id: 'Card4',
    title1: 'Multi-Post Stories',
    title2: 'Uber Navigation',
    client1: 'CANOPY',
    client2: 'Uber',
    job1: 'Back End Dev',
    job2: 'Lead Developer',
    year1: 2015,
    year2: 2015,
    text1: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    text2: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
    languages1: ['html', 'css', 'javascript'],
    languages2: ['html', 'Ruby on Rails', 'css', 'javascript'],
    bgImage1: 'fourthCard',
    bgImage2: 'fourthCard2',
    live: 'https://aima98.github.io/Portfolio-setup-and-mobile-first/',
    source: 'https://github.com/aima98/Portfolio-setup-and-mobile-first',
  },
];

const projectTitle = document.getElementById('Portfolio');

data.forEach((element) => {
  const container1 = document.createElement('div');
  container1.className = 'card1';
  projectTitle.appendChild(container1);

  const container2 = document.createElement('div');
  container2.className = 'card2';
  projectTitle.appendChild(container2);

  const cardImg1 = document.createElement('div');
  cardImg1.className = ''.concat('card-bg1', ' ', element.bgImage1);
  container1.appendChild(cardImg1);

  const cardImg2 = document.createElement('div');
  cardImg2.className = ''.concat('card-bg2', ' ', element.bgImage2);
  container2.appendChild(cardImg2);

  const cardContainer1 = document.createElement('div');
  cardContainer1.className = 'card-projects1';
  container1.appendChild(cardContainer1);

  const cardContainer2 = document.createElement('div');
  cardContainer2.className = 'card-projects2';
  container2.appendChild(cardContainer2);

  const titleCard1 = document.createElement('h1');
  titleCard1.className = 'card-title1';
  cardContainer1.appendChild(titleCard1);
  titleCard1.appendChild(document.createTextNode(data[data.indexOf(element)].title1));

  const titleCard2 = document.createElement('h1');
  titleCard2.className = 'card-title2';
  cardContainer2.appendChild(titleCard2);
  titleCard2.appendChild(document.createTextNode(data[data.indexOf(element)].title2));

  const description1 = document.createElement('ul');
  description1.classList.add('des-list1');

  const description2 = document.createElement('ul');
  description2.classList.add('des-list2');

  const company1 = document.createElement('li');
  const job1 = document.createElement('li');
  const year1 = document.createElement('li');

  const company2 = document.createElement('li');
  const job2 = document.createElement('li');
  const year2 = document.createElement('li');

  description1.appendChild(company1);
  description1.appendChild(job1);
  description1.appendChild(year1);

  description2.appendChild(company2);
  description2.appendChild(job2);
  description2.appendChild(year2);

  company1.appendChild(document.createTextNode(element.client1));
  job1.appendChild(document.createTextNode(element.job1));
  year1.appendChild(document.createTextNode(element.year1));

  company2.appendChild(document.createTextNode(element.client2));
  job2.appendChild(document.createTextNode(element.job2));
  year2.appendChild(document.createTextNode(element.year2));

  cardContainer1.appendChild(description1);
  company1.classList.add('card-company1');
  job1.classList.add('card-job1');
  year1.classList.add('card-year1');

  cardContainer2.appendChild(description2);
  company2.classList.add('card-company2');
  job2.classList.add('card-job2');
  year2.classList.add('card-year2');

  const paragraph1 = document.createElement('p');
  paragraph1.classList.add('card-text1');

  const paragraph2 = document.createElement('p');
  paragraph2.classList.add('card-text2');

  const ph1 = document.createTextNode(element.text1);
  cardContainer1.appendChild(paragraph1);
  paragraph1.appendChild(ph1);

  const ph2 = document.createTextNode(element.text2);
  cardContainer2.appendChild(paragraph2);
  paragraph2.appendChild(ph2);

  const languages1 = document.createElement('ul');
  languages1.classList.add('card-lang1');

  const languages2 = document.createElement('ul');
  languages2.classList.add('card-lang2');

  let html; let css; let js; let github; let ruby; let bootstrap; let RubyRails;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Object.keys(element.languages1).length; i++) {
    html = document.createElement('li');
    css = document.createElement('li');
    js = document.createElement('li');
  }

  cardContainer1.appendChild(languages1);
  languages1.appendChild(html);
  languages1.appendChild(css);
  languages1.appendChild(js);

  html.classList.add('card-lang11');
  css.classList.add('card-lang21');
  js.classList.add('card-lang31');

  html.appendChild(document.createTextNode(element.languages1[0]));
  css.appendChild(document.createTextNode(element.languages1[1]));
  js.appendChild(document.createTextNode(element.languages1[2]));
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Object.keys(element.languages2).length; i++) {
    html = document.createElement('li');
    RubyRails = document.createElement('li');
    css = document.createElement('li');
    js = document.createElement('li');
  }

  cardContainer2.appendChild(languages2);
  languages2.appendChild(html);
  languages2.appendChild(RubyRails);
  languages2.appendChild(css);
  languages2.appendChild(js);

  html.appendChild(document.createTextNode(element.languages2[0]));
  RubyRails.appendChild(document.createTextNode(element.languages2[1]));
  css.appendChild(document.createTextNode(element.languages2[2]));
  js.appendChild(document.createTextNode(element.languages2[3]));
  // eslint-disable-next-line max-len
  if (element.languages1[3] != null && element.languages1[4] != null && element.languages1[5] != null) {
    github = document.createElement('li');
    ruby = document.createElement('li');
    bootstrap = document.createElement('li');

    languages1.appendChild(github);
    languages1.appendChild(ruby);
    languages1.appendChild(bootstrap);

    github.appendChild(document.createTextNode(element.languages1[3]));
    ruby.appendChild(document.createTextNode(element.languages1[4]));
    bootstrap.appendChild(document.createTextNode(element.languages1[5]));

    github.classList.add('card-lang11');
    ruby.classList.add('card-lang11');
    bootstrap.classList.add('card-lang31');
  }
  // eslint-disable-next-line max-len
  if (element.languages2[4] != null && element.languages2[5] != null && element.languages2[6] != null) {
    github = document.createElement('li');
    ruby = document.createElement('li');
    bootstrap = document.createElement('li');

    languages2.appendChild(github);
    languages2.appendChild(ruby);
    languages2.appendChild(bootstrap);

    github.appendChild(document.createTextNode(element.languages2[4]));
    ruby.appendChild(document.createTextNode(element.languages2[5]));
    bootstrap.appendChild(document.createTextNode(element.languages2[6]));

    github.classList.add('card-lang12');
    ruby.classList.add('card-lang12');
    bootstrap.classList.add('card-lang32');
  }

  html.classList.add('card-lang22');
  RubyRails.classList.add('card-lang23');
  css.classList.add('card-lang24');
  js.classList.add('card-lang25');

  const button1 = document.createElement('button');
  button1.classList.add('see-projects-btn1');
  button1.setAttribute('id', ''.concat('project', element.id));
  cardContainer1.appendChild(button1);
  button1.appendChild(document.createTextNode('See Project'));

  const button2 = document.createElement('button');
  button2.classList.add('see-projects-btn2');
  button2.setAttribute('id', ''.concat('project', element.id));
  cardContainer2.appendChild(button2);
  button2.appendChild(document.createTextNode('See Project'));
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
    popLanguages.classList.add('pop-lang');

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
const menuClose = document.querySelector('.close-icon');
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