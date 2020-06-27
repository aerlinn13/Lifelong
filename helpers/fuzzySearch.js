const fuzzysort = require('fuzzysort');

const fuzzySearch = (value, data) => {
	if (!value.length) {
		return data;
	}
	let results = fuzzysort.go(value, data, { key: 'text' });
	results = results.sort((a, b) => a.score - b.score);
	results.length = 20;
	return results.map((el) => el.obj);
};

export default fuzzySearch;
