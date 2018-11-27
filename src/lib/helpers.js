export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el(name, ...children) {
  const element = document.createElement(name);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else if (child) {
        element.appendChild(child);
      }
    });
  }

  return element;
}

// Function to append the data to the lecture page
function appLecMaterial(div, element, data, classname, attrib) {
  // Append only, if the data is defined
  if (data !== undefined) {
    const subdiv = document.createElement('div');
    subdiv.classList.add('lecelem');
    subdiv.classList.add(classname);
    const htmlEl = document.createElement(element);
    htmlEl.setAttribute('class', classname);
    if (element === 'img' || element === 'iframe') {
      htmlEl.setAttribute('src', data);
    } else {
      htmlEl.appendChild(document.createTextNode(data));
    }
    subdiv.appendChild(htmlEl);
    div.appendChild(subdiv);
    if (element === 'blockquote') {
      const cite = appLecMaterial(subdiv, 'cite', attrib, classname)
      // const cite = document.createElement('cite');
      // cite.appendChild(document.createTextNode(attrib));
      // subdiv.appendChild(cite);
    }
    return subdiv;
  }
}


export function filterLectures() {

}

export function showCards(value) {
  const newValue = value.toLowerCase();

  for (let card of document.querySelectorAll('.card')) {
    if (card.classList.contains(newValue)) {
      card.className = `card ${newValue}`;
    }
  }
}

export function hideCards(value) {
  const newValue = value.toLowerCase();

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
  const bTarget = button.target;

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

export function rendLecture(lecture) {
  const headertext = document.querySelector('.header__text');

  headertext.children[0].appendChild(document.createTextNode(lecture.category));
  headertext.children[1].appendChild(document.createTextNode(lecture.title));

  // const newDiv1 = document.createElement('div');
  // div1.appendChild(newDiv1);

  const div1 = document.querySelector('.lecture');
  console.log(div1);

  console.log(lecture.content);

  lecture.content.forEach((elem) => {
    if (elem.type === 'youtube') {
      const divYou = appLecMaterial(div1, 'iframe', elem.data, elem.type);
      divYou.setAttribute('class', 'youtube');
      // divYou.setAttribute('width', 600);
      // divYou.setAttribute('height', 400);
    }
    if (elem.type === 'text') {
      const divText = appLecMaterial(div1, 'div', elem.data, elem.type);
      // console.log(divText);
    }
    if (elem.type === 'quote') {
      const quote = appLecMaterial(div1, 'blockquote', elem.data, elem.type, elem.attribute);
      // console.log(quote);
    }
    if (elem.type === 'image') {
      const image = appLecMaterial(div1, 'img', elem.data, elem.type);
      // console.log(image);
    }
    if (elem.type === 'heading') {
      const heading = appLecMaterial(div1, 'h1', elem.data, elem.type);
      // console.log(heading);
    }
    if (elem.type === 'list') {
      const uList = appLecMaterial(div1, 'ul', elem.data, elem.type);
      // console.log(uList);
    }
    if (elem.type === 'code') {
      const code = appLecMaterial(div1, 'pre', elem.data, elem.type);
      // console.log(uList);
    }
  })

  return lecture;
}