import Tokenizer from '../../src/tokenizer';
import Parser from '../../src/parser';
import { Grammar } from '../../src/parser';

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


var tokenizer;
describe('Parser', () => {

  describe('constructor', () => {
    it('initializes values', () => {
      var result = new Parser(fixture);

      expect(Object.keys(result.counts).length).equal(0);
      expect(result.input.length).equal(1);
      expect(result.input[0].nodeName).equal(Grammar.questestinterop);
    });
  });

  describe('parse_topLevel', () => {
    it('calls parse with every item', () => {
      var mock = {
        parse: () => {}
      };
      spy(mock, 'parse');
      var result = new Parser(fixture);
      result.parse_topLevel(mock.parse);

      expect(mock.parse).to.have.been.callCount(1);
    });
  });

  describe('parse_atom', () => {
    it('parses recursively', () => {
      var result = new Parser(fixture);
      result.parse();
      //TODO add actual spec, this is basically being used to run dev environment
    });
  });

  describe('_parse_tag', () => {
    it('it calls parse method if exists', () => {
      var result = new Parser(fixture);
      var parseMethods = {
        assessment: () => {}
      };
      spy(parseMethods, 'assessment');
      result._parse_tag(result.input[0].childNodes[1], parseMethods);
      expect(parseMethods.assessment).to.have.been.callCount(1);
    });

    it('merges parse method return', () => {
      var parser = new Parser(fixture);
      var parseMethods = {
        assessment: () => ({a:'a', b:'b'})
      };
      spy(parseMethods, 'assessment');
      var result = parser._parse_tag(parser.input[0].childNodes[1], parseMethods);
      expect(result).to.include.keys('a', 'b');
    });

    it('adds node attributes as keys', () => {
      var parser = new Parser(fixture);
      var result = parser._parse_tag(parser.input[0].childNodes[1], {});
      expect(result).to.include.keys('ident', 'title');
    });
  });

});
