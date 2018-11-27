import { /* improtar el líka úr helpes */ rendLecture } from './helpers';

export default class Lecture {
  constructor() {
    this.container = document.querySelector('.list');
    this.url = '../lectures.json';
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
    const index = data.map((d) => { return d.slug; }).indexOf(window.location.href.split('=')[1]);
    const lecture = data[index];
    // kalla á hjálparföll for creating elements
    rendLecture(lecture);
    // const htmlToRender = createHtmlFromLectures(htmlLectures);
  }

  load() {
    this.loadLectures().then(data => this.renderLectures(data.lectures));
  }
}
