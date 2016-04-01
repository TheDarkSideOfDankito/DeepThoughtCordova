function Entry(content, abstract) {
	this.content = content;
	this.abstract = abstract;
}

Entry.prototype.getDescription = function() {
	if(abstract !== 'undefined') {
		return abstract + ' ' + content;
	}

	return content;
};

if(typeof module != 'undefined') {
  module.exports.Entry = Entry;
}