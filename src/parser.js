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
  resprocessing: 'resprocessing',
  outcomes: 'outcomes',
  decvar: 'decvar',
  respcondition: 'respcondition',
  conditionvar: 'conditionvar',
  varequal: 'varequal'
};

export const Parse = {
  questestinterop: (current) => {},
  item: (current) => {},
  _text: (current) => ({value: current.nodeValue}),
  resprocessing: (current, item) => {


    function parseBinaryExpression(expression){
      switch (expression.type) {
        case 'varequal':
          debugger;
          break;
        default:
         throw new Error(`${expression.type} not supported by resprocessing`);
      }
    }

    function parseExpression(conditionvar){
      if(conditionvar[0].varequal[0]){
        return parseBinaryExpression(conditionvar[0].varequal[0]);
      }

      conditionvar[0].and.forEach((equal) => {});
      conditionvar[0].not.forEach((equal) => {});
      conditionvar[0].or.forEach((equal) => {});
    }
    function parseBlock(){}

    var prog = [];

    item.outcomes[0].decvar.forEach((_var) => {
      prog.push({
        type:'variableDeclaration',
        identifier:_var.varname || 'SCORE',
        value: _var.defaultval || 0
      });
    });

    item.respcondition.forEach((condition) => {
      prog.push({
        type:"ifStatement",
        condition: parseExpression(condition.conditionvar),
        then: parseBlock()
      });
    });

    debugger;
    // Parse into ast
    // Interpreter function

    // return {
      // checkAnswer()
    // }
  }
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
    return this._parse_tag(current, Parse);
  }

  parse(){
    this.parse_topLevel((current) => this.parse_atom(current));
  }

  _parse_tag(current, parseMethods){
    var tokens = new Tokenizer(current.childNodes);
    var item = tokens.each((val) => this.parse_atom(val));
    var name = _.replace(current.nodeName, '#', '_');

    if(current.attributes){
      for(var i = 0; i < current.attributes.length; i++){
        item[current.attributes[i].name] = current.attributes[i].value;
      }
    }

    item.type = Grammar[name];
    if(parseMethods[name]){
      _.merge(item, parseMethods[name](current, item));
    }
    if(!item.type){
      console.error(`${current.nodeName} is not yet supported!`);
    }

    return item;
  }
};
