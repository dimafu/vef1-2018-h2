import List from './lib/list';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lecture = new Lecture();
    lecture.load; 
  } else {
    const list = new List();
    list.load();
  }
});

/*
function header () {
  const header = document.createElement('header');
  document.header.style.backgroundImage = ""

  const headerimg = document.createElement(img);
  const headergif = document.createElement(img);
}*/
