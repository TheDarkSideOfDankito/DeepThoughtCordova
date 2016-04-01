function DeepThoughtService(dao) {
	this.dao = dao ? dao : new DeepThoughtDao();
}

DeepThoughtService.prototype.getAllEntries = function() {
	return this.dao.getAll();
};

if(typeof module != 'undefined') {
  module.exports.DeepThoughtService = DeepThoughtService;
}