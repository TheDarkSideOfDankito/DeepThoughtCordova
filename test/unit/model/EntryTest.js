
var Entry  = require("../../../www/js/model/Entry.js").Entry;

var expect = require('chai').expect;

describe('Entry', function() {
	var testContent = 'Test Content';
	var testAbstract = 'Test Abstract';

	describe('constructor', function() {

		it('Only content gets passed -> abstract is undefined', function() {
			var underTest = new Entry(testContent);
			expect(underTest.content).to.equal(testContent);
			expect(underTest.abstract).to.be.undefined;
		});

		it('content and abstract get passed -> both are set', function() {
			var underTest = new Entry(testContent, testAbstract);
			expect(underTest.content).to.equal(testContent);
			expect(underTest.abstract).to.equal(testAbstract);
		});

	});
});