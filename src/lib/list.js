import { empty, el /*improtar el líka úr helpes*/ } from './helpers';

export default class List {
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
      /* cath villa.then((data) => {
        el(data); // rugli
        return data;
      })*/
  }


  renderLectures(data) {
    //kalla á hjálparföll for creating elements
    data.forEach((lec) => {
      const htmlLec = el(lec);
      htmlLectures.push(htmlLec);
    });
    //const htmlToRender = createHtmlFromLectures(htmlLectures);
    return htmlLectures;
  }

  load() {
    this.loadLectures() //hleður fyrirlestra
      .then(data => this.renderLectures(data.lectures)); // checked sign... save gögn getSavedLectures
    //  .then(filterLectures) // gera eitthvað við fyrirlestara. gera html, filtera fyrirlestra
    //  .then(renderLectures) //viljum búa til html lista af  fyrirlestrum fyrir forsíðu. kalla á fall sem festir við div
    // empty(this.container); //fjarlægja í lokin

  }
}