import ResprocessingParser from '../../../src/parsers/resprocessing';

var item;

describe('ResprocessingParser', () => {
  beforeEach(() => {
  item = {
      "#text": [
        {
          "type": "_text",
          "value": "\n          "
        },
        {
          "type": "_text",
          "value": "\n          "
        },
        {
          "type": "_text",
          "value": "\n        "
        }
      ],
      "outcomes": [
        {
          "#text": [
            {
              "type": "_text",
              "value": "\n            "
            },
            {
              "type": "_text",
              "value": "\n          "
            }
          ],
          "decvar": [
            {
              "maxvalue": "100",
              "minvalue": "0",
              "varname": "SCORE",
              "vartype": "Decimal",
              "type": "decvar"
            }
          ],
          "type": "outcomes"
        }
      ],
      "respcondition": [
        {
          "#text": [
            {
              "type": "_text",
              "value": "\n            "
            },
            {
              "type": "_text",
              "value": "\n            "
            },
            {
              "type": "_text",
              "value": "\n          "
            }
          ],
          "conditionvar": [
            {
              "#text": [
                {
                  "type": "_text",
                  "value": "\n              "
                },
                {
                  "type": "_text",
                  "value": "\n            "
                }
              ],
              "varequal": [
                {
                  "#text": [
                    {
                      "type": "_text",
                      "value": "752"
                    }
                  ],
                  "respident": "response1",
                  "type": "varequal"
                }
              ],
              "type": "conditionvar"
            }
          ],
          "setvar": [
            {
              "#text": [
                {
                  "type": "_text",
                  "value": "100"
                }
              ],
              "action": "Set",
              "varname": "SCORE"
            }
          ],
          "continue": "No",
          "type": "respcondition"
        }
      ],
      "type": "resprocessing"
    }
  });

  describe('parse_varequal', () => {
    it('returns binary expression', () => {
      var result = ResprocessingParser.parse_varequal(item.respcondition[0].conditionvar[0].varequal[0]);
      expect(result.type).eql('binaryExpression');
      expect(result.left).to.not.be.undefined;
      expect(result.right).to.not.be.undefined;
    });
  });

  describe('parseExpression', () => {
    
  });
});
