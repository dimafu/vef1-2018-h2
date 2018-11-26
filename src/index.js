import List from './lib/list';
import Lecture from './lib/lecture';
import { readButton } from './lib/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lecture = new Lecture();
    lecture.load();
  } else {
    const list = new List();
    list.load();
    const buttons = document.querySelectorAll('.buttons__button');
    for (let button of document.querySelectorAll('.buttons__button')) {
      button.addEventListener('click', readButton);
    }
    console.log(buttons.length);
  }
});

/*
function makeHeader (jsonObj) {
   let jsonObj = loadLectures();
   const header = document.createElement('header');
   body.appendChild(header);

   let headarImg = '<img src="' + lectures[i].image + '"/>';

   let myH3 = document.createElement('h3');
   myH3.textContent = lectures[i].catagory;
   header.appendChild(myH3);

   let myH1 = document.createElement('h1');
   myH1.textContent = lectures[i].title;
   header.appendChild(myH1);

   document.header.style.backgroundImage = url(headarImg);

}*/