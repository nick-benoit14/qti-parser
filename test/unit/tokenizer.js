import Tokenizer from '../../src/tokenizer';
import $ from 'jquery';

var fixture = `<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
  <assessment ident="ie41978d04edc341af10f2128ce563d4b" title="Unnamed Quiz">
    <qtimetadata>
      <qtimetadatafield>
        <fieldlabel>cc_maxattempts</fieldlabel>
        <fieldentry>0</fieldentry>
      </qtimetadatafield>
    </qtimetadata>
    <section ident="root_section">
      <item ident="ie8ef15472c966f24f9472408fe2c929d" title="Question">
        <itemmetadata>
          <qtimetadata>
            <qtimetadatafield>
              <fieldlabel>question_type</fieldlabel>
              <fieldentry>multiple_choice_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>points_possible</fieldlabel>
              <fieldentry>1</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>assessment_question_identifierref</fieldlabel>
              <fieldentry>i33a668004a4442aa4ba40ae99deaef61</fieldentry>
            </qtimetadatafield>
          </qtimetadata>
        </itemmetadata>
        <presentation>
          <material>
            <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;&lt;span&gt;Which of the following is found in plant cells but not in animal cells?&#160;&lt;/span&gt;&lt;/p&gt;&lt;/div&gt;</mattext>
          </material>
          <response_lid ident="response1" rcardinality="Single">
            <render_choice>
              <response_label ident="752">
                <material>
                  <mattext texttype="text/plain">central vacuole</mattext>
                </material>
              </response_label>
              <response_label ident="2093">
                <material>
                  <mattext texttype="text/plain">lysosome</mattext>
                </material>
              </response_label>
              <response_label ident="5442">
                <material>
                  <mattext texttype="text/plain">microtubule</mattext>
                </material>
              </response_label>
              <response_label ident="7674">
                <material>
                  <mattext texttype="text/plain">mitochondrion</mattext>
                </material>
              </response_label>
            </render_choice>
          </response_lid>
        </presentation>
        <resprocessing>
          <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
          </outcomes>
          <respcondition continue="No">
            <conditionvar>
              <varequal respident="response1">752</varequal>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
          </respcondition>
        </resprocessing>
      </item>
      <item ident="i8150fba7fd3936d57da8a946b3523045" title="Question">
        <itemmetadata>
          <qtimetadata>
            <qtimetadatafield>
              <fieldlabel>question_type</fieldlabel>
              <fieldentry>multiple_choice_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>points_possible</fieldlabel>
              <fieldentry>1</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>assessment_question_identifierref</fieldlabel>
              <fieldentry>i772e441247ee6d516360013ae3bb2e1b</fieldentry>
            </qtimetadatafield>
          </qtimetadata>
        </itemmetadata>
        <presentation>
          <material>
            <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;&lt;span&gt;A variety of functions take place here, but its primary function is lipid synthesis.&#160; What organelle is this?&lt;/span&gt;&lt;/p&gt;&lt;/div&gt;</mattext>
          </material>
          <response_lid ident="response1" rcardinality="Single">
            <render_choice>
              <response_label ident="2955">
                <material>
                  <mattext texttype="text/plain">smooth endoplasmic reticulum</mattext>
                </material>
              </response_label>
              <response_label ident="5701">
                <material>
                  <mattext texttype="text/plain">rough endoplasmic reticulum</mattext>
                </material>
              </response_label>
              <response_label ident="7474">
                <material>
                  <mattext texttype="text/plain">golgi bodies</mattext>
                </material>
              </response_label>
              <response_label ident="2572">
                <material>
                  <mattext texttype="text/plain">lysosomes</mattext>
                </material>
              </response_label>
            </render_choice>
          </response_lid>
        </presentation>
        <resprocessing>
          <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
          </outcomes>
          <respcondition continue="No">
            <conditionvar>
              <varequal respident="response1">2955</varequal>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
          </respcondition>
        </resprocessing>
      </item>
      <item ident="id37de6eb3ac73ad8e64fa757f58e2b6b" title="Question">
        <itemmetadata>
          <qtimetadata>
            <qtimetadatafield>
              <fieldlabel>question_type</fieldlabel>
              <fieldentry>multiple_choice_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>points_possible</fieldlabel>
              <fieldentry>1</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>assessment_question_identifierref</fieldlabel>
              <fieldentry>i9b54e929fd34ea10a3b32ccf0aa63713</fieldentry>
            </qtimetadatafield>
          </qtimetadata>
        </itemmetadata>
        <presentation>
          <material>
            <mattext texttype="text/html">&lt;div&gt;&lt;p&gt;Which choice below correctly matches an organelle with its function?&lt;/p&gt;&lt;/div&gt;</mattext>
          </material>
          <response_lid ident="response1" rcardinality="Single">
            <render_choice>
              <response_label ident="7618">
                <material>
                  <mattext texttype="text/plain">smooth endoplasmic reticulum &#8212; lipid production</mattext>
                </material>
              </response_label>
              <response_label ident="9526">
                <material>
                  <mattext texttype="text/plain">lysosome &#8212; energy generation</mattext>
                </material>
              </response_label>
              <response_label ident="1418">
                <material>
                  <mattext texttype="text/plain">mitochondria &#8212; sugar production</mattext>
                </material>
              </response_label>
              <response_label ident="4007">
                <material>
                  <mattext texttype="text/plain">cytoskeleton &#8212; recycling of materials</mattext>
                </material>
              </response_label>
            </render_choice>
          </response_lid>
        </presentation>
        <resprocessing>
          <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
          </outcomes>
          <respcondition continue="No">
            <conditionvar>
              <varequal respident="response1">7618</varequal>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
          </respcondition>
        </resprocessing>
      </item>
    </section>
  </assessment>
</questestinterop>
`;

var tokenizer,
  nodeList;
describe('Tokenizer', () => {

  beforeEach(() => {
    nodeList = $($.parseXML(fixture))[0].childNodes;
    tokenizer = new Tokenizer(nodeList);
  });

  describe('constructor', () => {
    it('initializes current index', () => {
      expect(tokenizer.currentIndex).equal(0);
      expect(tokenizer.nodes).equal(nodeList);
    });
  });

  describe('next', () => {
    it('handles empty returns next element', () => {
      var result = tokenizer.next();

      expect(result.nodeName).equal('questestinterop');
    });

    it('increments currentIndex', () => {
      var tokenizer = new Tokenizer(fixture);

      expect(tokenizer.currentIndex).equal(0);
      tokenizer.next();
      expect(tokenizer.currentIndex).equal(1);
    });

    it('returns undefined when we are out of elements', () => {
      for(var i = 0; i < tokenizer.nodes.length; i++){
        expect(tokenizer.next()).not.equal(undefined);
      }
      var result = tokenizer.next();
      expect(result).equal(undefined);
    });
  });

  describe('each', () => {
    var tokenizer,
    nodes;
    beforeEach(() => {
      nodes = nodeList[0].childNodes;
      tokenizer = new Tokenizer(nodes);
    });

    it('iterates over each element', () => {
      var mock = {
        handleNode: () => {}
      };
      spy(mock, 'handleNode');
      tokenizer.each(mock.handleNode);

      expect(mock.handleNode).to.have.been.callCount(nodes.length);
    });

    it('doesnt create key for empty value', () => {
       var result = tokenizer.each(() => []);
       expect(_.keys(result).length).equal(0);
    });

    it('creates key for valid value', () => {
      var result = tokenizer.each(() => ['howdy']);
      var nodeNames = [];
      for(var i = 0; i < nodes.length; i++)
        nodeNames.push(nodes[i].nodeName);

      expect(_.keys(result)).eql(_.uniq(nodeNames));
    });
  });

});
