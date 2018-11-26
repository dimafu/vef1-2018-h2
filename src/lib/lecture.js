import { empty, el, /* improtar el líka úr helpes */ rendLecture } from './helpers';

export default class Lecture {
  constructor() {

    this.container = document.querySelector('.list'); //row í html
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
    const index = data.map(function (d) { return d['slug']; }).indexOf(window.location.href.split('=')[1]);
    console.log(data[index]);
    const lecture = data[index];
    // kalla á hjálparföll for creating elements
    rendLecture(lecture);
    // const htmlToRender = createHtmlFromLectures(htmlLectures);
  }

  load() {
    this.loadLectures().then(data => this.renderLectures(data.lectures)); // checked sign... save gögn getSavedLectures
    // const datatat = this.loadLectures();
    // console.log(datatat);
    //  .then(filterLectures) // gera eitthvað við fyrirlestara. gera html, filtera fyrirlestra
    //  .then(renderLectures) //viljum búa til html lista af  fyrirlestrum fyrir forsíðu. kalla á fall sem festir við div
    // empty(this.container); //fjarlægja í lokin

  }
}