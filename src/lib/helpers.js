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

export function renderCard () {
  let div1 = document.querySelector('.list');
  let newLink = document.createElement('a');
  newLink.setAttribute('class', 'listItem');
  newLink.setAttribute('href', '/fyrirlestur.html?slug=' ); //had to stop here. ?? how to finish.
  div1.appendChild(newLink);
}
