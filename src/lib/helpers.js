import Lecture from "./lectures";

export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el() {

}

/*
export function filterLectures () {
  let htmlButton = document.querySelector('.htmlTakki');
  htmlButton.addEventListener('click', htmlFilter);

  
  let cssButton = document.querySelector('.cssTakki');
  cssButton.addEventListener('click', cssFilter);

  let jsButton = document.querySelector('.javascriptTakki');
  jsButton.addEventListener('click', jsFilter);

}

export function htmlFilter () {
  let html = document.querySelector('.list__row__html');
  html.classList.toggle("--hidden"));

}
export function cssFilter () {
  let css = document.querySelector('.list__row__css');
  css.classList.toggle("--hidden"));

}
export function jsFilter () {
  let js = document.querySelector('.list__row__javascript');
  js.classList.toggle("--hidden"));

}
*/
export function renderCard(lectures) {
  let div1 = document.querySelector('.list');

  let newDiv1 = document.createElement('div');
  newDiv1.setAttribute('class', 'list__row__' + lectures.category);
  div1.appendChild(newDiv1);

  let newLink = document.createElement('a');
  newLink.setAttribute('class', 'listItem');
  newLink.setAttribute('href', 'fyrirlestur.html?slug=' + lectures.slug);
  newDiv1.appendChild(newLink);

  let newDiv2 = document.createElement('div');
  newDiv2.setAttribute('class', 'listItem__image');
  newLink.appendChild(newDiv2);


  let img = document.createElement('img');
  img.setAttribute('src', lectures.thumbnail); // if no thumbnail ??
  newDiv2.appendChild(img);

  let newDiv3 = document.createElement('div');
  newDiv3.setAttribute('class', 'listItem__bottom');
  newLink.appendChild(newDiv3);

  let newDiv4 = document.createElement('div');
  newDiv4.setAttribute('class', 'listItem__text');
  newDiv3.appendChild(newDiv4);

  let span = document.createElement('span');
  span.setAttribute('class', 'listItem__catagory');
  newDiv4.appendChild(span);

  let newH2 = document.createElement('h2');
  newH2.setAttribute('class', 'listItem__title');
  newDiv4.appendChild(newH2);

  return lectures;
}


