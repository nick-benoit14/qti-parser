
  export default class RespParser {

    static parse_varequal(expression){
      return {
        type: "binaryExpression",
        left: {
          type: 'identifier',
          value: expression.respident
        },
        right: {
          type: 'literal',
          value: expression['#text'][0].value,
        },
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

      // Return if we find a terminal value
      if(conditionvar[0].varequal[0]){
        return RespParser.parseBinaryExpression(conditionvar[0].varequal[0]);
      }

      // Recursively evaluate if we find a logical operator
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
            left: {
              type: 'identifier',
              value: _var.varname
            },
            right: {
              type: 'literal',
              value: _var['#text'][0].value
            }
          });
        });
      }
      return {
        type:'block',
        block
      };
    }

    static evaluate(expression, env){
      switch (expression.type) {
        case 'identifier':
          if(env[expression.value] === undefined){
            throw new Error(`${expression.value} is not defined!`);
          }
          return expression.value;
          break;

        case 'literal':
          return expression.value;
          break;

        case 'variableDeclaration':
          env[expression.left.value] = RespParser.evaluate(expression.right, env);
          break;

        case 'ifStatement':
          if(RespParser.evaluate(expression.condition, env)){
            RespParser.evaluate(expression.then, env);
          }
          break;

        case 'binaryExpression':
          var identifier = RespParser.evaluate(expression.left, env);
          if(expression.operator == '=='){
            if(env[identifier]){
              return env[identifier] == RespParser.evaluate(expression.right, env);
            }
          }
          break;

        case 'block':
          expression.block.forEach((exp) => {
            RespParser.evaluate(exp, env);
          });
          break;

        case 'assignmentExpression':
          env[RespParser.evaluate(expression.left, env)] = RespParser.evaluate(expression.right, env);
          break;
          
        default:
        throw new Error('Token is not Recognized!');
      }
    }

    static parse(current, item){
      var prog = [];
      item.outcomes[0].decvar.forEach((_var) => {
        prog.push({
          type:'variableDeclaration',
          left: {
            type: 'identifier',
            value: _var.varname || 'SCORE',
          },
          right: {
            type: 'literal',
            value: _var.defaultval || 0
          },
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
