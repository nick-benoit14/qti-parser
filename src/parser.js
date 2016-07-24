import $ from 'jquery';
import Tokenizer from './tokenizer';

export const Grammar = {
  questestinterop: 'questestinterop',
  _text: '_text',
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
    return this._parse_tag(current);
  }

  parse(){
    this.parse_topLevel((current) => this.parse_atom(current));
  }

  _parse_tag(current){
    var tokens = new Tokenizer(current.childNodes);
    var item = tokens.each((val) => this.parse_atom(val));
    var name = _.replace(current.nodeName, '#', '_');
    item.type = Grammar[name];
    if(!item.type){
      // debugger;
      // throw new Error(`${current.nodeName} is not yet supported!`);
      console.error(`${current.nodeName} is not yet supported!`);
    }

    return item;
  }
};
