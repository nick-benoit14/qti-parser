import qtiParser from '../../src/qti-parser';

describe('qtiParser', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(qtiParser, 'greet');
      qtiParser.greet();
    });

    it('should have been run once', () => {
      expect(qtiParser.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(qtiParser.greet).to.have.always.returned('hello');
    });
  });
});
