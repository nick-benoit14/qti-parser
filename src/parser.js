import $ from 'jquery';
import Tokenizer from './tokenizer';

export const Grammar = {
  questestinterop: 'questestinterop',
  text: '#text',
  assessment: 'assessment',
  qtimetadata: 'qtimetadata',
  section: 'section'

}

export default class Parser{
  constructor(qti){
    this.counts = {}
    this.input = $($.parseXML(qti))[0].childNodes;
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
        return this.parse_assessment(current);
        break;
      case Grammar.qtimetadata:
        break;
      case Grammar.section:
        break;
      default:
        debugger;
        throw new Error(`${this.current.type} is not yet supported!`);
    }
  }

  parse(){
    this.parse_topLevel((current) => this.parse_atom(current));
  }

  parse_questestinterop(current){
    var tokens = new Tokenizer(current.childNodes);
    var questestinterop = tokens.each((val) => this.parse_atom(val));
    questestinterop.type = Grammar.questestinterop;

    return questestinterop;
  }

  parse_assessment(current){
    var tokens = new Tokenizer(current.childNodes);
    var assessment = tokens.each((val) => this.parse_atom(val));
    assessment.type = Grammar.assessment;

    return assessment;
  }
  parse_section(){}
  parse_item(){}

};
