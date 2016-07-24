import $ from 'jquery';
import Tokenizer from './tokenizer';

export const Grammar = {
  questestinterop: 'questestinterop'
}

export default class Parser{
  constructor(qti){
    this.counts = {}
    this.input = $($.parseXML(qti))[0].childNodes;
  }

  parse(){
    this.parse_topLevel(() => this.parse_atom());
  }

  parse_topLevel(parse){
    var qti = [];

    while(this.current){
      qti.push(parse());

      this.current = this.input[++this.currentIndex];
    }

    return {
      type:"qti",
      qti
    };
  }

  parse_atom(){
    switch (this.current.nodeName) {
      case Grammar.questestinterop:
        return this.parse_questestinterop();
        break;
      default:
       throw new Error(`${this.current.type} is not yet supported!`);
    }
  }

  parse_questestinterop(){
    // Find matching pair
    // while() valid element do things
    var questestinterop = {
      type:Grammar.questestinterop,

    };
    return {};
  }

  parse_assessment(){
    return {
      title:"",
      ident:0,
      section:[]
    }
  }
  parse_section(){}
  parse_item(){}

};
