import $ from 'jquery';
import Tokenizer from './tokenizer';

export const Grammar = {
  questestinterop: 'questestinterop',
  text: '#text',
  assessment: 'assessment'
}

export default class Parser{
  constructor(qti){
    this.counts = {}
    this.input = $($.parseXML(qti))[0].childNodes;
  }

  parse(){
    this.parse_topLevel((current) => this.parse_atom(current));
  }

  parse_topLevel(parse){
    var qti = [];

    var tokens = new Tokenizer(this.input);
    var current;
    while(current = tokens.next()){
      qti.push(parse(current));
    }

    return {
      type:"qti",
      qti
    };
  }

  parse_atom(current){
    switch (current.nodeName) {
      case Grammar.questestinterop:
        return this.parse_questestinterop(current);
        break;
      case Grammar.text:
        break;
      case Grammar.assessment:
        break;
      default:
        debugger;
        throw new Error(`${this.current.type} is not yet supported!`);
    }
  }

  parse_questestinterop(current){
    var tokens = new Tokenizer(current.childNodes);
    var questestinterop = tokens.each((val) => this.parse_atom(val));
    questestinterop.type = Grammar.questestinterop;

    return questestinterop;
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
