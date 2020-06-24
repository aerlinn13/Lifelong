const MINUTES_IN_YEAR = 525600;

const inMinutes = (age) => {
	return parseInt(age, 10) * MINUTES_IN_YEAR;
};

const geneticCalculator = (state) => {
	const gender = state.gender;

	const mother = {
		age: inMinutes(state.mother.age),
		deceased: !!state.mother.dead,
		naturalCause: !!state.mother.cause
	};

	const maternalGrandmother = {
		age: inMinutes(state.maternalGrandmother.age),
		deceased: !!state.maternalGrandmother.dead,
		naturalCause: !!state.maternalGrandmother.cause
	};

	const maternalGrandfather = {
		age: inMinutes(state.maternalGrandfather.age),
		deceased: !!state.maternalGrandfather.dead,
		naturalCause: !!state.maternalGrandfather.cause
	};

	const father = {
		age: inMinutes(state.father.age),
		deceased: !!state.father.dead,
		naturalCause: !!state.father.cause
	};

	const paternalGrandmother = {
		age: inMinutes(state.paternalGrandmother.age),
		deceased: !!state.paternalGrandmother.dead,
		naturalCause: !!state.paternalGrandmother.cause
	};

	const paternalGrandfather = {
		age: inMinutes(state.paternalGrandfather.age),
		deceased: !!state.paternalGrandfather.dead,
		naturalCause: !!state.paternalGrandfather.cause
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
