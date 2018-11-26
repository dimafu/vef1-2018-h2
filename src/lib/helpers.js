import Lecture from "./lectures";

export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el() {

}


export function filterLectures() {
  let htmlButton = document.querySelector('.htmlTakki');
  //htmlButton.classList.toggle('--active');
  htmlButton.addEventListener('click', htmlFilter);
} //fjalægja


/*
  let cssButton = document.querySelector('.cssTakki');
  cssButton.addEventListener('click', cssFilter);

  const jsButton = document.querySelector('.javascriptTakki');
  jsButton.addEventListener('click', jsFilter);

}
*/
export function htmlFilter() {
  let html = document.querySelectorAll('.card__row__html');
  console.log(html);
  html.classList.toggleClass(' --hidden');
  //htmlButton.classList.toggle('--active');
  debugger;

}

/*
export function cssFilter() {
  let css = document.querySelector('.card__row__css');
  css.classList.toggle("--hidden");

}
export function jsFilter() {
  let js = document.querySelector('.card__row__javascript');
  js.classList.toggle("--hidden");

}
*/
export function renderCard(lectures) {
<<<<<<< HEAD
  const div1 = document.querySelector('.list__all');
=======
  let div1 = document.querySelector('.list__col');
>>>>>>> f5a81d21d81c32d29bc5385ce0e5c1ddfedf39c2

  let newDiv1 = document.createElement('div');
  newDiv1.setAttribute('class', 'card__row__' + lectures.category);
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


