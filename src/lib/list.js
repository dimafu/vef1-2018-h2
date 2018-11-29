import { renderCard } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = '/lectures.json';
  }

  loadLectures() {
    return fetch(this.url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Villa');
        }
        return response.json();
      });
  }

  renderLectures(data) {
    // Set front page header background image
    const headerimg = document.querySelector('.header__img');
    headerimg.style.backgroundImage = "url('img/header.jpg')";
    data.forEach((lec) => {
      renderCard(lec);
    });
  }

  load() {
    this.loadLectures().then(data => this.renderLectures(data.lectures));
  }
}
