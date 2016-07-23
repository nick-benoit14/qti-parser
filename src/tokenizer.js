import $ from 'jquery';

export default class Tokenizer {
  constructor(xml){
    this.xml = $($.parseXML(xml)).find('*');
    this.currentIndex = 0;
  }

  next(){
    return this.xml[this.currentIndex++];
  }

};
