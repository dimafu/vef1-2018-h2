import Lecture from "./lecture";

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

/*
export function filterLectures () {
  const htmlButton = document.querySelector('.htmlTakki');
  htmlButton.addEventListener('click', htmlFilter);

  
  const cssButton = document.querySelector('.cssTakki');
  cssButton.addEventListener('click', cssFilter);

  const jsButton = document.querySelector('.javascriptTakki');
  jsButton.addEventListener('click', jsFilter);

}

export function htmlFilter () {
  const html = document.querySelector('.list__row__html');
  html.classList.toggle("--hidden"));

}
export function cssFilter () {
  const css = document.querySelector('.list__row__css');
  css.classList.toggle("--hidden"));

}
export function jsFilter () {
  const js = document.querySelector('.list__row__javascript');
  js.classList.toggle("--hidden"));

}
*/
export function renderCard(lectures) {
  const div1 = document.querySelector('.list');

  const newDiv1 = document.createElement('div');
  newDiv1.setAttribute('class', 'list__row__' + lectures.category);
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
  // const headerimg = document.querySelector('.header__img');
  const headertext = document.querySelector('.header__text');
  
  headertext.children[0].appendChild(document.createTextNode(lecture.category));
  headertext.children[1].appendChild(document.createTextNode(lecture.title));
  
  // const newDiv1 = document.createElement('div');
  // div1.appendChild(newDiv1);

  const div1 = document.querySelector('.lecture');
  console.log(div1);
  
  const divYou = document.createElement('iframe');
  // const divYou = el('iframe', div1);
  divYou.setAttribute('width', 600);
  divYou.setAttribute('height', 400);
  divYou.setAttribute('src', lecture.content[0].data);
  div1.appendChild(divYou);
  console.log(divYou);
  
  // const newDiv1 = el('div', div1);
  // newDiv1.setAttribute('class', 'list__row__' + lecture.category);

  // const newLink = document.createElement('a');
  // newLink.setAttribute('class', 'listItem');
  // newLink.setAttribute('href', 'fyrirlestur.html?slug=' + lecture.slug);
  // newDiv1.appendChild(newLink);

  // const newDiv2 = document.createElement('div');
  // newDiv2.setAttribute('class', 'listItem__image');
  // newLink.appendChild(newDiv2);

  // if (lecture.thumbnail) {
  //   const img = document.createElement('img');
  //   img.setAttribute('src', lecture.thumbnail); // if no thumbnail ??
  //   newDiv2.appendChild(img);
  // } else {
  //   const img = document.createElement('div');
  //   img.setAttribute('class', 'nothumb');
  //   newDiv2.appendChild(img);
  // }

  // const newDiv3 = document.createElement('div');
  // newDiv3.setAttribute('class', 'listItem__bottom');
  // newLink.appendChild(newDiv3);

  // const newDiv4 = document.createElement('div');
  // newDiv4.setAttribute('class', 'listItem__text');
  // newDiv3.appendChild(newDiv4);

  // const span = document.createElement('span');
  // span.appendChild(document.createTextNode(lecture.category));
  // span.setAttribute('class', 'listItem__category');
  // newDiv4.appendChild(span);

  // const newH2 = document.createElement('h2');
  // newH2.appendChild(document.createTextNode(lecture.title));
  // newH2.setAttribute('class', 'listItem__title');
  // newDiv4.appendChild(newH2);

  return lecture;
}