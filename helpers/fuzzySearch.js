const fuzzysort = require('fuzzysort');

const fuzzySearch = (value, data) => {
	if (!value.length) {
		const reduced = data;
		reduced.length = 4;
		return reduced;
	}
	let results = fuzzysort.go(value, data, { key: 'text' });
	results = results.sort((a, b) => a.score - b.score);
	if (results.length > 4) {
		results.length = 4;
	}
	return results.map((el) => el.obj);
};

export default fuzzySearch;
