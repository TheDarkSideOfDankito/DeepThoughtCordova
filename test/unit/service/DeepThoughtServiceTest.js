
var expect = require('chai').expect,
	rewire = require('rewire'),
	sinon = require('sinon'),
	dao = require('../../../www/js/persistence/DeepThoughtDao.js'),
	Entry = require('../../../www/js/model/Entry.js').Entry;

var DeepThoughtService  = rewire("../../../www/js/service/DeepThoughtService.js").DeepThoughtService;


describe('DeepThoughtService', function() {

	describe('getAllEntries', function() {

		it('Dao returns empty Entries List -> getAllEntries() returns same Entries List', function() {
			var mockedEntryList = [];

			var underTest = new DeepThoughtService(getDaoMock(mockedEntryList));
			expect(underTest.getAllEntries()).to.equal(mockedEntryList);
		});

		it('Dao returns List with two Entries List -> getAllEntries() returns same Entries List', function() {
			var entry1 = new Entry('a', 'b');
			var entry2 = new Entry('c', 'd');
			var mockedEntryList = [ entry1, entry2 ];

			var underTest = new DeepThoughtService(getDaoMock(mockedEntryList));
			expect(underTest.getAllEntries()).to.equal(mockedEntryList);
			expect(underTest.getAllEntries()[0]).to.equal(entry1);
			expect(underTest.getAllEntries()[1]).to.equal(entry2);
		});

	});
});

function getDaoMock(allEntries) {
	// var getAllEntriesMock = sinon.stub();
	// getAllEntriesMock.returns(allEntries);

	var daoStub = { getAll: function() { return allEntries; } };
	return daoStub;
}