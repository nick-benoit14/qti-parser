import $ from 'jquery';

export default class Tokenizer {
  constructor(nodeList){
    this.nodes = nodeList;
    this.currentIndex = 0;
  }

  next(){
    return this.nodes[this.currentIndex++];
  }

};
