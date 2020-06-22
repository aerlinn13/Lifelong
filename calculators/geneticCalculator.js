const MINUTES_IN_YEAR = 525600;

const inMinutes = (age) => {
	return parseInt(age, 10) * MINUTES_IN_YEAR;
};

const geneticCalculator = (state) => {
	const gender = state.get('gender');

	const mother = {
		age: inMinutes(state.getIn([ 'relatives', 'mother', 'age' ])),
		deceased: !!state.getIn([ 'relatives', 'mother', 'dead' ]),
		naturalCause: !!state.getIn([ 'relatives', 'mother', 'cause' ])
	};

	const maternalGrandmother = {
		age: inMinutes(state.getIn([ 'relatives', 'maternalGrandmother', 'age' ])),
		deceased: !!state.getIn([ 'relatives', 'maternalGrandmother', 'dead' ]),
		naturalCause: !!state.getIn([ 'relatives', 'maternalGrandmother', 'cause' ])
	};

	const maternalGrandfather = {
		age: inMinutes(state.getIn([ 'relatives', 'maternalGrandfather', 'age' ])),
		deceased: !!state.getIn([ 'relatives', 'maternalGrandfather', 'dead' ]),
		naturalCause: !!state.getIn([ 'relatives', 'maternalGrandfather', 'cause' ])
	};

	const father = {
		age: inMinutes(state.getIn([ 'relatives', 'father', 'age' ])),
		deceased: !!state.getIn([ 'relatives', 'father', 'dead' ]),
		naturalCause: !!state.getIn([ 'relatives', 'father', 'cause' ])
	};

	const paternalGrandmother = {
		age: inMinutes(state.getIn([ 'relatives', 'paternalGrandmother', 'age' ])),
		deceased: !!state.getIn([ 'relatives', 'paternalGrandmother', 'dead' ]),
		naturalCause: !!state.getIn([ 'relatives', 'paternalGrandmother', 'cause' ])
	};

	const paternalGrandfather = {
		age: inMinutes(state.getIn([ 'relatives', 'paternalGrandfather', 'age' ])),
		deceased: !!state.getIn([ 'relatives', 'paternalGrandfather', 'dead' ]),
		naturalCause: !!state.getIn([ 'relatives', 'paternalGrandfather', 'cause' ])
	};

	const baseRelatives = [];

	switch (gender) {
		case 'm':
			baseRelatives.push(father);
			baseRelatives.push(paternalGrandfather);
			baseRelatives.push(paternalGrandmother);
			baseRelatives.push(maternalGrandmother);
			break;
		case 'f':
			baseRelatives.push(mother);
			baseRelatives.push(maternalGrandmother);
			baseRelatives.push(maternalGrandfather);
			baseRelatives.push(paternalGrandmother);
			break;
		default:
			break;
	}

	let geneticAgeAtDeath = 0;
	let amountOfRelativesToCount = 0;
	baseRelatives.forEach(function(relative) {
		if ((relative.deceased && relative.naturalCause) || parseInt(relative.age, 10) > 80) {
			amountOfRelativesToCount++;
			switch (gender) {
				case 'm':
					geneticAgeAtDeath = geneticAgeAtDeath + parseInt(relative.age, 10) + 3.9 * MINUTES_IN_YEAR;
					break;
				case 'f':
					geneticAgeAtDeath = geneticAgeAtDeath + parseInt(relative.age, 10) + 6.9 * MINUTES_IN_YEAR;
					break;
			}
		}
	});
	geneticAgeAtDeath = geneticAgeAtDeath / amountOfRelativesToCount;

	if (amountOfRelativesToCount === 0) {
		switch (gender) {
			case 'm':
				geneticAgeAtDeath = 79.2 * MINUTES_IN_YEAR;
				break;
			case 'f':
				geneticAgeAtDeath = 82.9 * MINUTES_IN_YEAR;
				break;
		}
	}
	return geneticAgeAtDeath;
};

export default geneticCalculator;
