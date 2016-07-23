import Tokenizer from 'tokenizer';

class Parser{
  constructor(input){
    this.counts = {}
    this.input = input;
  }

  parse_atom(){
    var current = this.input.next();
    switch (current.nodeName) {
      case expression:

        break;
      default:

    }
  }

  parse_questestinterop(){}

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

//parse_toplevel --> parse_atom --> [
