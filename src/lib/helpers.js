import Lecture from "./lectures";

export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el() {

}


export function filterLectures() {

}

export function showCards(value) {
  let newValue = value.toLowerCase();
  
  for (let card of document.querySelectorAll('.card')) {
    if (card.classList.contains(newValue)) {
      card.className = `card ${newValue}`;
    }
  }
}

export function hideCards(value) {
  let newValue = value.toLowerCase();
  
  for (let card of document.querySelectorAll('.card')) {
    if (!card.classList.contains(newValue)) {
      card.classList.add('card-hidden');
    } else if (card.classList.contains('card-hidden')) {
      card.className = `card ${newValue}`;
    }
  }
  
}

var buttonCounter = 0;

export function readButton(button) {
  var bTarget = button.target;

  if (bTarget.classList.contains('button-active')) {
    bTarget.className = 'buttons__button';
    buttonCounter--;
    if (buttonCounter === 0) {
      showCards('html');
      showCards('css');
      showCards('javascript');
    }
  } else {
    bTarget.classList.add('button-active');
    buttonCounter++;
  }

  for (let buttons of document.querySelectorAll('.button-active')) {
    hideCards(`${buttons.innerHTML}`);
  }

  for (let buttons of document.querySelectorAll('.button-active')) {
    showCards(`${buttons.innerHTML}`);
  }
  
}


export function renderCard(lectures) {
  const div1 = document.querySelector('.list');

  let newDiv1 = document.createElement('div');
  newDiv1.setAttribute('class', 'card ' + lectures.category);
  div1.appendChild(newDiv1);

  const newLink = document.createElement('a');
  newLink.setAttribute('class', 'listItem');
  newLink.setAttribute('href', 'fyrirlestur.html?slug=' + lectures.slug);
  newDiv1.appendChild(newLink);

  const newDiv2 = document.createElement('div');
  newDiv2.setAttribute('class', 'listItem__image');
  newLink.appendChild(newDiv2);

  if (lectures.thumbnail) {
    const img = document.createElement('img');
    img.setAttribute('src', lectures.thumbnail); // if no thumbnail ??
    newDiv2.appendChild(img);
  } else {
    const img = document.createElement('div');
    img.setAttribute('class', 'nothumb');
    newDiv2.appendChild(img);
  }

  const newDiv3 = document.createElement('div');
  newDiv3.setAttribute('class', 'listItem__bottom');
  newLink.appendChild(newDiv3);

  const newDiv4 = document.createElement('div');
  newDiv4.setAttribute('class', 'listItem__text');
  newDiv3.appendChild(newDiv4);

  const span = document.createElement('span');
  span.appendChild(document.createTextNode(lectures.category));
  span.setAttribute('class', 'listItem__category');
  newDiv4.appendChild(span);

  const newH2 = document.createElement('h2');
  newH2.appendChild(document.createTextNode(lectures.title));
  newH2.setAttribute('class', 'listItem__title');
  newDiv4.appendChild(newH2);

  return lectures;
}


