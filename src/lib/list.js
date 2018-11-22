import { empty, el /*improtar el líka úr helpes*/ } from './helpers';

export default class List {
  constructor() {
  
    this.container = document.querySelector('.list');
    this.url = '../lectures.json';
  }
 
  loadLectures() {
    fetch(`${this.url}`);
    .then((res) => {
      if (!res.ok) {
        throw new Error('Villa');
      }
      return res.json();
})
    
    //.then(function(response) { return response.json(); }); ég að leika mér. má eyða
    //sækja fyrirlestra og skila á json formi
    // fetch(this.url);

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
     .then(getSavedLectures) // checked sign... save gögn 
    .then(filterLectures) // gera eitthvað við fyrirlestara. gera html, filtera fyrirlestra
    .then(renderLectures) //viljum búa til html lista af  fyrirlestrum fyrir forsíðu. kalla á fall sem festir við div
    empty(this.container); //fjarlægja í lokin
    
  }
}
