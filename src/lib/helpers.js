import Lecture from "./lectures";

export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el() {
  let div1 = document.querySelector('.list');
  console.log(data);

  const divcol = document.createElement(div);
  // þarf að klára
}


export function filterLectures(filter) {

}

export function renderCard(lectures) {
  let div1 = document.querySelector('.list');

  let newDiv1 = document.createElement('div');
  newDiv1.setAttribute('class', 'list__row');
  div1.appendChild(newDiv1);

  let newLink = document.createElement('a');
  newLink.setAttribute('class', 'listItem');
  newLink.setAttribute('href', 'fyrirlestur.html?slug=' + lectures.slug); //had to stop here. ?? how to finish.
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
  span.setAttribute('class', lectures.catagory);
  newDiv4.appendChild(span);

  let newH2 = document.createElement('h2');
  newH2.setAttribute('class', 'listItem__title');
  newH2.setAttribute('class', lectures.title);
  newDiv4.appendChild(newH2);


  return lectures;
}
