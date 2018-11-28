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
// To separate type text into sepaarate paragraphs
function elTextBreak(text) {
  const textArr = text.split('\n');
  const textPtagged = textArr.join('</p><p>');
  const temp = '<p>'.concat('', textPtagged).concat('', '</p>');
  return temp;
}

// To separate type text into sepaarate paragraphs
function elLI(items) {
  const textPtagged = items.join('</li"><li class = "li">');
  const temp = '<li class = "li">'.concat('', textPtagged).concat('', '</li>');
  return temp;
}

export function elImg(parent, figure, src, caption, classname) {
  const element = document.createElement(figure);
  const img = document.createElement('img');
  img.setAttribute('src', src);
  const figcaption = document.createElement('figcaption');
  figcaption.appendChild(document.createTextNode(caption));
  element.classList.add('lecelem');
  element.classList.add(classname);
  element.appendChild(img);
  element.appendChild(figcaption);
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
    } else if (element === 'p') {
      htmlEl.innerHTML = elTextBreak(data);
    } else if (element === 'ul') {
      htmlEl.innerHTML = elLI(data);
    } else {
      htmlEl.appendChild(document.createTextNode(data));
    }
    subdiv.appendChild(htmlEl);
    div.appendChild(subdiv);
    if (element === 'blockquote') {
      el(subdiv, 'cite', attrib, classname);
    }
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
  // Creating elements for the card
  const newDiv1 = el(div1, 'div', '');
  newDiv1.setAttribute('class', `card ${lectures.category}`);

  const newLink = el(newDiv1, 'a', '', 'listItem');
  newLink.setAttribute('href', `fyrirlestur.html?slug=${lectures.slug}`);

  const newDiv2 = el(newLink, 'div', '', 'listItem__image');

  const img = el(newDiv2, 'img');
  if (lectures.thumbnail) {
    img.setAttribute('src', lectures.thumbnail);
  }

  const newDiv3 = el(newLink, 'div', '', 'listItem__bottom');

  el(newDiv3, 'span', lectures.category, 'listItem__category');

  const newDiv4 = el(newDiv3, 'div', '', 'listItem__text');

  el(newDiv4, 'h2', lectures.title, 'listItem__title');

  el(newDiv4, 'h3', '✓', 'listItem__finished');

  return lectures;
}

export function rendLecture(lecture) {
  // Set background image
  const headerimg = document.querySelector('.header__img');
  headerimg.style.backgroundImage = `url(${lecture.image})`;
  // Set header titles
  const headertext = document.querySelector('.header__text');
  headertext.children[0].appendChild(document.createTextNode(lecture.category));
  headertext.children[1].appendChild(document.createTextNode(lecture.title));

  const div1 = document.querySelector('.lecture');

  console.log(lecture);
  // create elements accodring to a type of data
  lecture.content.forEach((elem) => {
    if (elem.type === 'youtube') {
      const iframe = appLecMaterial(div1, 'iframe', elem.data, elem.type);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '0');
    }
    if (elem.type === 'text') {
      appLecMaterial(div1, 'p', elem.data, elem.type);
    }
    if (elem.type === 'quote') {
      appLecMaterial(div1, 'blockquote', elem.data, elem.type, elem.attribute);
    }
    if (elem.type === 'image') {
      elImg(div1, 'figure', elem.data, elem.caption, elem.type);
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

export function finishLec() {
  const finishButton = document.getElementById('finish');

    if (finishButton.classList.contains('button-active')) {
      finishButton.className = 'lecture__button';
      finishButton.textContent = "Klára fyrirlestur";
    } else {
      finishButton.classList.add('button-active');
      finishButton.textContent = "✓ Klára fyrirlestur";
    }

}

export function goBack () {
  window.history.back();

}