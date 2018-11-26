import Lecture from "./lectures";

export function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export function el() {

}


export function filterLectures() {
  /*  let html = document.querySelectorAll('.list__row__html');
    let css = document.querySelectorAll('.list__row__css');
    let js = document.querySelectorAll('.list__row__javascript');
    let listRowAll =html + css + js;
    console.log(listRowAll);
  */
  let htmlButton = document.querySelector('.htmlTakki');
  htmlButton.addEventListener('click', htmlFilter);

  let cssButton = document.querySelector('.cssTakki');
  cssButton.addEventListener('click', cssFilter);

  let jsButton = document.querySelector('.javascriptTakki');
  jsButton.addEventListener('click', jsFilter);
  
  if (!htmlButton.classList.contains('button--active')) {
    html.forEach(
      function (currentValue) {
        currentValue.classList.add('--hidden');
      }
    );
   }
}

export function htmlFilter() {
  let htmlButton = document.querySelector('.htmlTakki');
  //  let html = document.querySelectorAll('.list__row__html');
  htmlButton.classList.toggle('button--active');
 /* html.forEach(
    function (currentValue) {
      currentValue.classList.toggle('--hidden');
    }
  );
  /*  if (!htmlButton.classList.contains('button--active')) {
     html.forEach(
       function (currentValue) {
         currentValue.classList.add('--hidden');
       }
     );
    }*/
}
export function cssFilter() {
  let cssButton = document.querySelector('.cssTakki');
  let css = document.querySelectorAll('.list__row__css');
  cssButton.classList.toggle('button--active');
  css.forEach(
    function (currentValue) {
      currentValue.classList.toggle('--hidden');
    }
  );
}


export function jsFilter() {
  let jsButton = document.querySelector('.javascriptTakki');
  let js = document.querySelectorAll('.list__row__javascript');
  jsButton.classList.toggle('button--active');
  js.forEach(
    function (currentValue) {
      currentValue.classList.toggle('--hidden');
    }
  );

}


export function renderCard(lectures) {
  let div1 = document.querySelector('.list__col');

  let newDiv1 = document.createElement('div');
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


