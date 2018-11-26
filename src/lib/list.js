import { empty, el, /*improtar el líka úr helpes*/ 
renderCard,
filterLectures} from './helpers';

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
    console.log(data);
    //kalla á hjálparföll for creating elements
    data.forEach((lec) => { //?? data
      const htmlLec = renderCard(lec);
     //htmlLectures.push(htmlLec);
    });
    //const htmlToRender = createHtmlFromLectures(htmlLectures);
    return htmlLec;
  }

  load() {
    this.loadLectures() //hleður fyrirlestra.  //missing check saved data first
      .then(data => this.renderLectures(data.lectures)); // checked sign... save gögn getSavedLectures
      filterLectures();
      //  .then(filterLectures) // gera eitthvað við fyrirlestara. gera html, filtera fyrirlestra
    //  .then(renderLectures) //viljum búa til html lista af  fyrirlestrum fyrir forsíðu. kalla á fall sem festir við div
    // empty(this.container); //fjarlægja í lokin

  }
}