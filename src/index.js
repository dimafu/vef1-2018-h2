import List from './lib/list';
import Lecture from './lib/lecture';
import { readButton, finishLec, goBack } from './lib/helpers';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    const lecture = new Lecture();
    lecture.load();
    const finishButton = document.getElementById('finish');
    finishButton.addEventListener("click", finishLec);
    const backButton = document.getElementById('back');
    backButton.addEventListener("click", goBack);
  } else {
    const list = new List();
    list.load();
    const buttons = document.querySelectorAll('.buttons__button');
    for (let button of document.querySelectorAll('.buttons__button')) {
      button.addEventListener('click', readButton);
    }
  }
});
