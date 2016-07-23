import $ from 'jquery';

export default class Tokenizer {
  constructor(xml){
    this.xml = $($.parseXML(xml)).find('*');
    this.currentIndex = 0;
  }

  next(){
    var rawToken = this.xml[this.currentIndex++];
    if(!rawToken) return;

    var token = {
      type: rawToken.nodeName,
      attributes:{}
    };

    for(var i = 0; i < rawToken.attributes.length; i++){
      token.attributes[rawToken.attributes.item(i).name] = rawToken.attributes.item(i).value;
    }
    return token;
  }

};
