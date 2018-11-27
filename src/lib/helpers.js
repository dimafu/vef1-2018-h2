export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
// Function for creating elements. Used in renderCard()
export function el(parent, child, textnode, classname) {
  const element = document.createElement(child);
  element.appendChild(document.createTextNode(textnode));
  element.classList.add(classname);
  parent.appendChild(element);

  return element;
}

// Function to append the data to the lecture page
function appLecMaterial(div, element, data, classname, attrib) {
  // Append only, if the data is defined
  const subdiv = document.createElement('div');
  if (data !== undefined) {
    // const subdiv = document.createElement('div');
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
      appLecMaterial(subdiv, 'cite', attrib, classname);
    }
    // return subdiv;
  }
  return subdiv;
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

let buttonCounter = 0;

export function readButton(button) {
  const bTarget = button.target;

  if (bTarget.classList.contains('button-active')) {
    bTarget.className = 'buttons__button';
    buttonCounter -= 1;
    if (buttonCounter === 0) {
      showCards('html');
      showCards('css');
      showCards('javascript');
    }
  } else {
    bTarget.classList.add('button-active');
    buttonCounter += 1;
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

  const newDiv1 = el(div1, 'div', '');
  newDiv1.setAttribute('class', `card ${lectures.category}`);

  const newLink = el(newDiv1, 'a', '', 'listItem');
  newLink.setAttribute('href', `fyrirlestur.html?slug=${lectures.slug}`);

  const newDiv2 = el(newLink, 'div', '', 'listItem__image');

  if (lectures.thumbnail) {
    const img = el(newDiv2, 'img');
    img.setAttribute('src', lectures.thumbnail);
  } else {
    el(newDiv2, 'img', '', 'nothumb');
  }

  const newDiv3 = el(newLink, 'div', '', 'listItem__bottom');

  const newDiv4 = el(newDiv3, 'div', '', 'listItem__text');

  el(newDiv4, 'span', lectures.category, 'listItem__category');

  el(newDiv4, 'h2', lectures.title, 'listItem__title');

  return lectures;
}

export function rendLecture(lecture) {
  const headertext = document.querySelector('.header__text');

  headertext.children[0].appendChild(document.createTextNode(lecture.category));
  headertext.children[1].appendChild(document.createTextNode(lecture.title));

  const div1 = document.querySelector('.lecture');

  console.log(lecture.content);

  lecture.content.forEach((elem) => {
    if (elem.type === 'youtube') {
      appLecMaterial(div1, 'iframe', elem.data, elem.type);
    }
    if (elem.type === 'text') {
      appLecMaterial(div1, 'div', elem.data, elem.type);
    }
    if (elem.type === 'quote') {
      appLecMaterial(div1, 'blockquote', elem.data, elem.type, elem.attribute);
    }
    if (elem.type === 'image') {
      appLecMaterial(div1, 'img', elem.data, elem.type);
    }
    if (elem.type === 'heading') {
      appLecMaterial(div1, 'h1', elem.data, elem.type);
    }
    if (elem.type === 'list') {
      appLecMaterial(div1, 'ul', elem.data, elem.type);
    }
    if (elem.type === 'code') {
      appLecMaterial(div1, 'pre', elem.data, elem.type);
    }
  })

  return lecture;
}