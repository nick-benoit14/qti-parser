import $ from 'jquery';
import Tokenizer from './tokenizer';

export const Grammar = {
  questestinterop: 'questestinterop',
  text: '#text',
  assessment: 'assessment',
  qtimetadata: 'qtimetadata',
  section: 'section',
  item: 'item',
  itemmetadata: 'itemmetadata',
  presentation: 'presentation',
  resprocessing: 'resprocessing'
};

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
        return this.parse_section(current);
        break;
      case Grammar.item:
        return this.parse_item(current);
        break;
      case Grammar.itemmetadata:
        break;
      case Grammar.presentation:
        break;
      case Grammar.resprocessing:
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

  parse_section(current){
    var tokens = new Tokenizer(current.childNodes);
    var section = tokens.each((val) => this.parse_atom(val));
    section.type = Grammar.section;

    return section;
  }

  parse_item(current){
    var tokens = new Tokenizer(current.childNodes);
    var item = tokens.each((val) => this.parse_atom(val));
    item.type = Grammar.item;

    return item;
  }


  // parse_presentation(current){}
  // parse_material(){}
  // parse_mattext(){}
  // parse_response_lid(){}
  // parse_render_choice(){}
  // parse_response_label(){}
};
