import $ from 'jquery';
import _ from 'lodash';

export default class Tokenizer {
  constructor(nodeList){
    this.nodes = nodeList;
    this.currentIndex = 0;
  }

  next(){
    return this.nodes[this.currentIndex++];
  }

  each(handleNode){
    var ret = {};
    var current;
    while(current = this.next()){
      var val = handleNode(current);
      if(_.isEmpty(val)){continue;}
      if(!ret[current.nodeName]){ret[current.nodeName] = [];}
      ret[current.nodeName].push(val);
    }
    return ret;
  }

};
