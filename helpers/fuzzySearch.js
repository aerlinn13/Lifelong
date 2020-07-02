const fuzzysort = require('fuzzysort');

const fuzzySearch = (value, data) => {
	if (!value.length) {
		const reduced = shuffle([ ...data ]);
		reduced.length = 5;
		return reduced;
	}
	let results = fuzzysort.go(value, data, { key: 'text' });
	results = results.sort((a, b) => a.score - b.score);
	if (results.length > 4) {
		results.length = 4;
	}
	return results.map((el) => el.obj);
};

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

export default fuzzySearch;
