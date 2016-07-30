
  export default class RespParser {

    static parse_varequal(expression){
      return {
        type: "binaryExpression",
        left: expression.respident,
        right: expression['#text'][0].value,
        operator: "=="
      };
    }

    static parseBinaryExpression(expression){
      switch (expression.type) {
        case 'varequal':
          return RespParser.parse_varequal(expression);
          break;
        default:
         throw new Error(`${expression.type} not supported by resprocessing`);
      }
    }

    static parseExpression(conditionvar){
      if(conditionvar[0].varequal[0]){
        return RespParser.parseBinaryExpression(conditionvar[0].varequal[0]);
      }

      conditionvar[0].and.forEach((equal) => {});
      conditionvar[0].not.forEach((equal) => {});
      conditionvar[0].or.forEach((equal) => {});
    }

    static parseBlock(condition){
      var block = [];
      if(condition.setvar){
        condition.setvar.forEach((_var) => {
          block.push({
            type: "assignmentExpression",
            left: _var.varname,
            right: _var['#text'][0].value
          });
        });
      }
      //TODO support display feedback

      return {
        type:'block',
        block
      };
    }

    static evaluate(expression, env){
      switch (expression.type) {
        case 'variableDeclaration':
          env[expression.identifier] = expression.value;
          break;
        case 'ifStatement':
          if(RespParser.evaluate(expression.condition, env)){
            RespParser.evaluate(expression.then, env);
          }
        case 'binaryExpression':
          if(expression.operator == '=='){
            return env[expression.left] == parseInt(expression.right);
          }
          break;
        case 'block':
          expression.block.forEach((exp) => {
            RespParser.evaluate(exp, env);
          });
          break;
        case 'assignmentExpression':
          env[expression.left] = parseInt(expression.right);
          //TODO evaluate right side expression
          break;
        default:

      }
    }

    static parse(current, item){
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
          condition: RespParser.parseExpression(condition.conditionvar),
          then: RespParser.parseBlock(condition)
        });
      });

      const checkAnswers = (answers) => {
        RespParser.evaluate({
          type: 'block',
          block: prog
        }, answers);
        return answers;
      }

      return {
        checkAnswers
      }
    }
  };
